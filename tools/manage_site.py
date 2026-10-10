"""Local editing helpers. Never uploads or asks for hosting credentials."""
import argparse
import datetime as dt
import hashlib
import json
from pathlib import Path
import re
import shutil
import zipfile

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ['index.html', 'catalog.html', 'style.css', 'app.js', 'theme.js', 'robots.txt', 'sitemap.xml']


def source_file(value):
    path = Path(value.strip().strip('\"\'')).expanduser().resolve()
    if not path.is_file():
        raise ValueError(f'Файл не найден: {path}')
    return path


def refresh_versions():
    version = dt.datetime.now().strftime('%Y%m%d%H%M%S')
    for name in ['index.html', 'catalog.html']:
        path = ROOT / name
        text = re.sub(r'((?:style\.css|app\.js|theme\.js|assets/products\.js)\?v=)[^\"\s<>]+', lambda m: m[1] + version, path.read_text())
        path.write_text(text)


def update_price(args):
    source = source_file(args.file)
    if source.read_bytes()[:5] != b'%PDF-':
        raise ValueError('Нужен файл PDF.')
    date = dt.date.fromisoformat(args.date)
    digest = hashlib.sha256(source.read_bytes()).hexdigest()[:10]
    target = f'assets/price-{date.isoformat()}-{digest}.pdf'
    shutil.copyfile(source, ROOT / target)
    for name in ['index.html', 'catalog.html']:
        path = ROOT / name
        text = re.sub(r'assets/price-[^\"\s<>]+\.pdf', target, path.read_text())
        text = re.sub(r'(Прайс від )\d{2}\.\d{2}\.\d{4}', lambda m: m[1] + date.strftime('%d.%m.%Y'), text)
        path.write_text(text)
    path = ROOT / 'app.js'
    text = path.read_text()
    old = re.search(r"priceDate:'Прайс від (\d{2}\.\d{2}\.\d{4})'", text)
    if old:
        previous = dt.datetime.strptime(old[1], '%d.%m.%Y').date()
        months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        english = lambda d: f'{d.day} {months[d.month-1]} {d.year}'
        text = text.replace(old[1], date.strftime('%d.%m.%Y')).replace(english(previous), english(date))
    path.write_text(text)
    refresh_versions()
    print(f'Прайс подключён: {target}. Проверьте сайт в предпросмотре. Цены отдельных товаров в products.js редактируются отдельно.')


def update_photo(args):
    source = source_file(args.file)
    extension = source.suffix.lower()
    if extension not in ['.jpg', '.jpeg', '.png', '.webp']:
        raise ValueError('Нужна фотография JPG, PNG или WebP.')
    path = ROOT / 'assets/products.js'
    text = path.read_text()
    products = json.loads(text.removeprefix('window.PRODUCTS = ').strip().removesuffix(';'))
    product = next((p for p in products if p['id'] == args.id), None)
    if not product:
        raise ValueError(f'Товар с id {args.id} не найден.')
    digest = hashlib.sha256(source.read_bytes()).hexdigest()[:10]
    target = f'assets/product-{args.id:02d}-{digest}{extension}'
    shutil.copyfile(source, ROOT / target)
    if args.extra:
        if target != product.get('image') and target not in product.get('extraImages', []):
            product.setdefault('extraImages', []).append(target)
    else:
        product['image'] = target
        product['extraImages'] = [p for p in product.get('extraImages', []) if p != target]
    path.write_text('window.PRODUCTS = ' + json.dumps(products, ensure_ascii=False, indent=2) + ';\n')
    refresh_versions()
    print(f'Фото подключено: {product["name"]} → {target}. Проверьте карточку в предпросмотре.')


def pack(args):
    now = dt.datetime.now()
    target = ROOT.parent / f'ukrmiaso-hostiq-{now:%Y%m%d-%H%M%S}.zip'
    files = [ROOT / name for name in PUBLIC] + sorted((ROOT / 'assets').rglob('*'))
    with zipfile.ZipFile(target, 'w', zipfile.ZIP_DEFLATED) as archive:
        for path in files:
            if not path.is_file() or path.name.startswith('.'):
                continue
            info = zipfile.ZipInfo(path.relative_to(ROOT).as_posix(), now.timetuple()[:6])
            info.create_system = 3
            info.external_attr = 0o100644 << 16
            info.compress_type = zipfile.ZIP_DEFLATED
            archive.writestr(info, path.read_bytes())
    print(f'ZIP для хостинга: {target}')


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Обновление сайта Укрмʼясо')
    commands = parser.add_subparsers(dest='command', required=True)
    price = commands.add_parser('price'); price.add_argument('file'); price.add_argument('--date', required=True); price.set_defaults(run=update_price)
    photo = commands.add_parser('photo'); photo.add_argument('id', type=int); photo.add_argument('file'); photo.add_argument('--extra', action='store_true'); photo.set_defaults(run=update_photo)
    package = commands.add_parser('pack'); package.set_defaults(run=pack)
    args = parser.parse_args()
    try:
        args.run(args)
    except (ValueError, OSError) as error:
        parser.exit(1, f'Ошибка: {error}\n')
