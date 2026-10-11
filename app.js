'use strict';
const words = {
 uk: {
  skip:'До вмісту',brand:'укрмʼясо',brandSub:'СМАК МАЄ АВТОРА',catalog:'Каталог',home:'Головна',storyNav:'Наша історія',contacts:'Контакти',talk:'Поговорімо',
  heroEyebrow:'ХАРКІВ. ЛЮДИ. СМАК.',heroTitle:'Смак має <em>автора.</em>',heroLead:'За кожною смачною справою стоїть людина, яка любить готувати. За нашою — саме така.',explore:'Знайти свій смак',meet:'Познайомитись ближче ↓',heroNote:'Ковбаси, делікатеси й маленькі приводи зібратися за столом.',stampTop:'З ЛЮБОВʼЮ',stampMiddle:'до смаку',stampBottom:'УКРМʼЯСО · ХАРКІВ',illustration:'Композиція за фото нашої продукції',
  ticker1:'ДЛЯ ДОВГИХ РОЗМОВ',ticker2:'ДЛЯ СМАЧНИХ ПАУЗ',ticker3:'ДЛЯ СВОЇХ',selectionEyebrow:'ЗНАЙОМСТВО ПОЧИНАЄТЬСЯ ЗІ СМАКУ',selectionTitle:'Щось <em>до вашого столу.</em>',allProducts:'Весь каталог ↗',
  storyLabel:'НАША ФІЛОСОФІЯ',poster:'Готувати.<br>Пригощати.<br><em>Закохувати<br>у смак.</em>',storyEyebrow:'ПІДПРИЄМСТВО З ЛЮДСЬКИМ ОБЛИЧЧЯМ',storyTitle:'Спочатку — любов<br><em>до смачної їжі.</em>',storyText1:'Наш керівник любить готувати. І любить той момент, коли за столом на мить стає тихо — бо всім дуже смачно.',storyText2:'Це відчуття ми хочемо передати у продукції «Укрмʼясо» (Укрмясо). Від ковбас до мʼясних делікатесів: щоб було чим пригостити близьких і до чого повернутися ще раз.',storyClosing:'Бо найкраща розмова часто починається зі слів: «Спробуй ось це».',storyLink:'Подивитися, що ми готуємо ↗',
  occasionEyebrow:'СМАК НЕ ПОТРЕБУЄ ОСОБЛИВОЇ НАГОДИ',occasionTitle:'Але завжди <em>створює її.</em>',occasion1:'Вечір без поспіху',occasion1Text:'Сировʼялені ковбаси — для розмов, які хочеться продовжити.',occasion2:'Сніданок для своїх',occasion2Text:'Сосиски — коли прості речі роблять ранок смачнішим.',occasion3:'Смачна пауза',occasion3Text:'Джеркі — маленька порція смаку у великому дні.',
  contactEyebrow:'ДАВАЙТЕ ЗНАЙОМИТИСЯ',contactTitle:'Смачні справи<br><em>починаються з розмови.</em>',contactText:'Цікавить продукція чи співпраця? Напишіть нашому відділу продажів — обговоримо деталі.',write:'Написати нам',sales:'Відділ продажів',addressLabel:'Адреса',address:'61032, м. Харків,<br>Плиткове сел., буд. 13',download:'Завантажити прайс · PDF ↓',priceDate:'Прайс від 01.10.2026',legal:'ТОВ «Укрмʼясо-2023»',footerLine:'Смак має автора. І свою історію.',backTop:'Нагору ↑',
  catalogEyebrow:'ВІД ЗНАЙОМОЇ КЛАСИКИ ДО НОВИХ УЛЮБЛЕНЦІВ',catalogTitle:'Знайдіть <em>свій смак.</em>',catalogLead:'Ковбаси, мʼясні делікатеси, продукти з курки та джеркі. Оберіть те, що хочеться спробувати.',categoriesLabel:'КАТЕГОРІЇ',sidebarText:'Не знаєте, з чого почати? Розкажіть, що любите, — допоможемо обрати.',emptyTitle:'Такого смаку ще не знайшли.',emptyText:'Спробуйте іншу назву або оберіть усі категорії.',reset:'Скинути пошук',catalogNote:'Асортимент за прайсом від 01.10.2026. Актуальні ціни та наявність уточнюйте у відділі продажів. Малюнки — умовні позначення категорій.',catalogContactTitle:'Обговорімо ваш вибір.',
  all:'Усі смаки',dry:'Сировʼялені ковбаси',smoked:'Варено-копчені ковбаси',semi:'Напівкопчені та смажені',franks:'Сосиски і сардельки',meat:'Свинина та яловичина',chicken:'Продукти з курки',jerky:'Джеркі',
  gallery:'Фото продукту',previousPhoto:'Попереднє фото',nextPhoto:'Наступне фото',photo:'Фото',of:'з',heroGallery:'Наші смаки',previousSlide:'Попередній слайд',nextSlide:'Наступний слайд',showSlide:'Показати слайд',pauseSlides:'Призупинити зміну фото',playSlides:'Увімкнути зміну фото',heroNaturalCaption:'Делікатеси для ваших теплих зустрічей',heroGrillCaption:'З вогню — просто до вашого столу',heroNaturalAlt:'Композиція мʼясних делікатесів, Еспаньоли й Альбасете з підсмаженим хлібом, зеленню та оливками',heroGrillAlt:'Апетитні смажені ковбаски на шампурах',morePhotos:'Ще фото продукту',details:'Про продукт',search:'Що хочеться спробувати?',searchLabel:'Пошук у каталозі',count:'позицій',close:'Закрити',grade:'Сорт',topGrade:'Вищий сорт',firstGrade:'Перший сорт',casing:'Оболонка',shelf:'Термін придатності',unspecified:'Не зазначено у прайсі',storage:'Умови зберігання',storageValue:'Від 0 до +6 °C; відносна вологість 75–78% (за прайсом)',original:'Назва у прайсі',dialogNote:'Ціну, фасування, склад, алергени та актуальну наявність уточнюйте у відділі продажів.',askProduct:'Запитати про продукт',generalSubject:'[З сайту Укрмʼясо] Звернення',subject:'[З сайту Укрмʼясо] Запит щодо продукції: ',body:'Добрий день!\nМене цікавить продукт: ',bodyEnd:'\nБудь ласка, повідомте актуальну ціну, фасування та наявність.\n\nМої контакти: ',
  menuOpen:'Відкрити меню',menuClose:'Закрити меню',navigation:'Навігація',language:'Мова',art:'Умовна ілюстрація категорії',heroAlt:'Композиція з Еспаньолою, Альбасете та Філе Гранд за фотографіями продукції',pageTitle:'Укрмʼясо — Смак має автора',catalogPageTitle:'Каталог — Укрмʼясо',catalogDescription:'Каталог Укрмʼясо (Укрмясо): ковбаси, мʼясні делікатеси, продукти з курки та джеркі від ТОВ «Укрмʼясо-2023».',description:'Укрмʼясо (Укрмясо) — ковбаси, мʼясні делікатеси та джеркі з Харкова. ТОВ «Укрмʼясо-2023». Знайомтеся з нашим асортиментом.',results:'Продукція',brandAria:'Укрмʼясо — головна'
 },
 en: {
  skip:'Skip to content',brand:'ukrmiaso',brandSub:'FLAVOUR HAS A MAKER',catalog:'Catalogue',home:'Home',storyNav:'Our story',contacts:'Contact',talk:'Let’s talk',
  heroEyebrow:'KHARKIV. PEOPLE. FLAVOUR.',heroTitle:'Flavour has <em>a maker.</em>',heroLead:'Behind every delicious creation is someone who loves to cook. Ours is no exception.',explore:'Find your flavour',meet:'Get to know us ↓',heroNote:'Sausages, delicacies and little reasons to gather around the table.',stampTop:'MADE WITH',stampMiddle:'love for flavour',stampBottom:'UKRMIASO · KHARKIV',illustration:'Composition based on our product photos',
  ticker1:'FOR LONG CONVERSATIONS',ticker2:'FOR DELICIOUS BREAKS',ticker3:'FOR YOUR FAVOURITE PEOPLE',selectionEyebrow:'A FIRST MEETING, A FIRST TASTE',selectionTitle:'Something <em>for your table.</em>',allProducts:'Full catalogue ↗',
  storyLabel:'OUR PHILOSOPHY',poster:'Cook.<br>Share.<br><em>Make flavour<br>memorable.</em>',storyEyebrow:'A BUSINESS WITH A HUMAN FACE',storyTitle:'It starts with a love<br><em>of good food.</em>',storyText1:'Our owner loves to cook. And he loves that moment when the table falls quiet for a second — because everyone is enjoying the food.',storyText2:'That is the feeling we want to bring to Ukrmiaso products. From sausages to meat delicacies: something to share with the people you love, and something to come back to.',storyClosing:'Because a great conversation often starts with: “You have to try this.”',storyLink:'See what we make ↗',
  occasionEyebrow:'GOOD FLAVOUR NEEDS NO SPECIAL OCCASION',occasionTitle:'But it always <em>creates one.</em>',occasion1:'An unhurried evening',occasion1Text:'Dry-cured sausages for conversations you want to keep going.',occasion2:'Breakfast with your people',occasion2Text:'Frankfurters for those mornings when simple things taste best.',occasion3:'A delicious little break',occasion3Text:'Jerky: a small helping of flavour in a busy day.',
  contactEyebrow:'LET’S GET TO KNOW EACH OTHER',contactTitle:'Good things<br><em>start with a conversation.</em>',contactText:'Interested in our products or working together? Write to our sales team to discuss the details.',write:'Write to us',sales:'Sales team',addressLabel:'Address',address:'61032, Kharkiv, Ukraine,<br>Plytkove settlement, building 13',download:'Download price list · PDF ↓',priceDate:'Price list dated 1 October 2026',legal:'Ukrmiaso-2023 LLC',footerLine:'Flavour has a maker. And a story.',backTop:'Back to top ↑',
  catalogEyebrow:'FROM FAMILIAR CLASSICS TO NEW FAVOURITES',catalogTitle:'Find <em>your flavour.</em>',catalogLead:'Sausages, meat delicacies, chicken products and jerky. Pick something you would love to try.',categoriesLabel:'CATEGORIES',sidebarText:'Not sure where to start? Tell us what you like — we’ll help you choose.',emptyTitle:'We haven’t found that flavour.',emptyText:'Try a different name or browse all categories.',reset:'Clear search',catalogNote:'Range based on the price list dated 1 October 2026. Contact our sales team for current prices and availability. Drawings are symbolic category illustrations.',catalogContactTitle:'Let’s talk about your choice.',
  all:'All flavours',dry:'Dry-cured sausages',smoked:'Cooked & smoked sausages',semi:'Semi-smoked & fried',franks:'Frankfurters & sausages',meat:'Pork & beef delicacies',chicken:'Chicken products',jerky:'Jerky',
  gallery:'Product photos',previousPhoto:'Previous photo',nextPhoto:'Next photo',photo:'Photo',of:'of',heroGallery:'Our flavours',previousSlide:'Previous slide',nextSlide:'Next slide',showSlide:'Show slide',pauseSlides:'Pause photo rotation',playSlides:'Start photo rotation',heroNaturalCaption:'Delicacies for your favourite gatherings',heroGrillCaption:'From the fire, straight to your table',heroNaturalAlt:'Meat delicacies, Española and Albacete arranged with toasted bread, fresh herbs and olives',heroGrillAlt:'Golden grilled sausages on skewers',morePhotos:'More product photos',details:'Product details',search:'What would you like to try?',searchLabel:'Search the catalogue',count:'products',close:'Close',grade:'Grade',topGrade:'Premium grade',firstGrade:'First grade',casing:'Casing',shelf:'Shelf life',unspecified:'Not specified in the price list',storage:'Storage conditions',storageValue:'0 to +6 °C; relative humidity 75–78% (per price list)',original:'Original price-list name',dialogNote:'Please contact our sales team to confirm price, packaging, ingredients, allergens and current availability.',askProduct:'Ask about this product',generalSubject:'[З сайту Укрмʼясо] Website enquiry',subject:'[З сайту Укрмʼясо] Product enquiry: ',body:'Hello!\nI am interested in: ',bodyEnd:'\nPlease confirm the current price, packaging and availability.\n\nMy contact details: ',
  menuOpen:'Open menu',menuClose:'Close menu',navigation:'Navigation',language:'Language',art:'Symbolic category illustration',heroAlt:'Composition of Española, Albacete and Grand fillet based on product photos',pageTitle:'Ukrmiaso — Flavour has a maker',catalogPageTitle:'Catalogue — Ukrmiaso',catalogDescription:'Ukrmiaso catalogue: sausages, meat delicacies, chicken products and jerky from Ukrmiaso-2023 LLC, Kharkiv, Ukraine.',description:'Ukrmiaso-2023 LLC, Kharkiv, Ukraine. Sausages, meat delicacies and jerky. Explore our product range.',results:'Products',brandAria:'Ukrmiaso — home'
 }
};
const categoryIds=['dry','smoked','semi','franks','meat','chicken','jerky'];
const params=new URLSearchParams(location.search);
let savedLang='uk';try{savedLang=localStorage.getItem('ukrmiaso-language')||'uk';}catch{}
let lang=params.get('lang')==='en'?'en':params.get('lang')==='uk'?'uk':savedLang==='en'?'en':'uk';
let activeCategory=categoryIds.includes(params.get('category'))?params.get('category'):'all';
let openProduct=null;
const photoIndexes=new Map();
let heroController=null;
const t=key=>words[lang][key];
const esc=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const productName=p=>lang==='en'?p.nameEn:p.name;
const artPaths={
 dry:'<path d="M53 95Q55 64 92 67L223 94Q260 102 258 128Q253 152 221 146L89 121Q52 119 53 95Z"/><path d="M88 70L78 117M108 75L99 125M128 79L119 128M151 84L141 133M174 88L164 137M195 92L187 140M217 97L209 144"/><ellipse cx="258" cy="126" rx="25" ry="32" transform="rotate(12 258 126)"/><path d="M250 111l9 5m-10 12 7 5m9-10 6 6m-13 10 4 5M51 86l-19-6 3 16 18 6M251 90l14-11 9 15"/>',
 smoked:'<path d="M70 145C42 113 74 65 131 63c42-2 100 28 108 56 12 38-28 55-62 45l10-28c17 5 28-2 26-11-6-20-44-34-76-34-30 0-49 22-40 38z"/><path d="M79 142l14-7m-24-19 23 4m-16-26 21 10m-2-27 12 20m10-29 5 24m13-26 1 25m19-23-5 24m26-17-12 23m32-15-17 20m31-9-22 13m26 6-26 2m20 16-22-10"/><path d="M177 164l-12 10-3-17 15-21"/>',
 semi:'<path d="M64 93c22-39 87-50 127-22 38 26 50 75 14 98-22 15-58 8-69-14l27-16c7 8 17 8 23 2 13-15-5-37-24-48-22-13-57-7-71 15z"/><path d="M79 81l22 21m-6-33 13 23m5-29 8 24m15-27v24m20-20-7 24m26-13-14 20m28-7-22 18m29 4-25 8m29 14-29-2m16 23-18-18M136 155l-13-3 5-13 23-7"/><path d="M58 100l-20 6 10-17 17 4"/>',
 franks:'<path d="M71 87c-11-6-15 2-18 12s0 22 14 27l140 39c22 6 36-27 11-36zM95 51c-17-5-27 26-11 34l146 47c20 6 30-29 10-36z"/><path d="M64 91l-4 29m152 10-8 28M91 55l-7 25m154 19-8 29M67 126l-14 5 8 8m169-7 14 10-6-14"/>',
 meat:'<path d="M79 57c26-7 72 3 101 18l60 34-19 65-107-38-53-38z"/><path d="M79 57l35 33 107 39m-160-31 53-8v46m107-7 19-20M77 69l28 28m19-16 10 56m8-49 10 56m8-47 10 54m9-44 10 51m8-42 7 45"/><path d="M244 148q29-12 39 4l-9 28q-29 9-49-7zM243 159l31 9"/>',
 chicken:'<path d="M146 69c34-29 77-6 81 28 6 39-26 69-60 57l-24 12-8-14-32 21c-16 9-24-5-15-15l39-26c-11-20-4-48 19-63z"/><path d="M153 78q39-25 61 12m-57 12q14-15 32-10m-13 26 18-10M92 172l-12 8m-8-15 15-6M142 148l11 8"/><path d="M66 54q6-16 17-21m-6 27q17-8 26-7m-32 0q-10-9-20-9"/>',
 jerky:'<path d="M61 82l77-20 11 26-23 13-52 19zM162 82l79 14-5 30-61-9-27-9zM89 142l42-29 25 20-27 43-32-9zM174 143l44-7 26 34-24 17-44-21z"/><path d="M79 92l48-19m-44 28 34-12m59 4 51 13m-47-3 41 12m-110 25 12-11m-20 22 20-20m64 22 26 7m-31-20 26 11"/>'
};
function illustration(cat){return '<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+artPaths[cat]+'</svg>';}
function productPhotos(p){const seen=new Set();return [{src:p.image,caption:p.imageCaption,captionEn:p.imageCaptionEn},...(p.extraImages||[]).map(image=>typeof image==='string'?{src:image}:image)].filter(image=>image?.src&&!seen.has(image.src)&&seen.add(image.src));}
function productPhotoCaption(photo){return lang==='en'?(photo.captionEn||photo.caption||''):(photo.caption||'');}
function photoLabel(index,total){return `${t('photo')} ${index+1} ${t('of')} ${total}`;}
function productArt(p){
 const photos=productPhotos(p);
 if(!photos.length)return `<span class="art-label">${esc(t(p.category))}</span>${illustration(p.category)}<span class="art-number">${String(p.id).padStart(2,'0')}</span>`;
 const selected=(photoIndexes.get(p.id)||0)%photos.length;
 const caption=productPhotoCaption(photos[selected]);
 const slides=photos.map((photo,index)=>`<img class="product-photo${index===selected?' is-active':''}" src="${esc(photo.src)}" alt="${esc((productPhotoCaption(photo)||productName(p))+' — '+photoLabel(index,photos.length))}" aria-hidden="${index!==selected}" loading="lazy" width="900" height="1200" style="object-position:${esc(photo.position||p.imagePositions?.[index]||p.imagePosition||'50% 50%')}">`).join('');
 const controls=photos.length>1?`<button class="photo-arrow photo-prev" type="button" data-gallery-step="-1" aria-label="${esc(t('previousPhoto')+': '+productName(p))}"><span aria-hidden="true">←</span></button><button class="photo-arrow photo-next" type="button" data-gallery-step="1" aria-label="${esc(t('nextPhoto')+': '+productName(p))}"><span aria-hidden="true">→</span></button><div class="photo-navigation"><span class="photo-count" aria-live="polite" aria-atomic="true" aria-label="${esc(photoLabel(selected,photos.length))}">${selected+1} / ${photos.length}</span><div class="photo-dots">${photos.map((_,index)=>`<button type="button" data-gallery-to="${index}" aria-label="${esc(photoLabel(index,photos.length)+': '+productName(p))}" aria-pressed="${index===selected}"><span></span></button>`).join('')}</div></div>`:'';
 return `<div class="photo-slides">${slides}</div>${controls}${photos.some(photo=>photo.caption||photo.captionEn)?`<span class="photo-caption"${caption?'':' hidden'}>${esc(caption)}</span>`:''}`;
}
function photoFrame(p,dialogFrame=false){return `<div class="product-art ${dialogFrame?'dialog-art ':''}${p.category}${p.image?' has-photo':''}"${p.image?` data-gallery-product="${p.id}" role="group" aria-label="${esc(t('gallery')+': '+productName(p))}"`:''}>${productArt(p)}</div>`;}
function card(p){return `<article class="product-card">${photoFrame(p)}<div class="card-info"><p class="eyebrow">${esc(t(p.category))}</p><h3>${esc(productName(p))}</h3><p>${esc(t(p.grade==='в/с'?'topGrade':'firstGrade'))}</p><button class="card-action" data-product="${p.id}" aria-label="${esc(t('details')+': '+productName(p))}"><span>${esc(t('details'))}</span><span aria-hidden="true">↗</span></button></div></article>`;}
function changeProductPhoto(id,index){
 const p=PRODUCTS.find(item=>item.id===id);if(!p)return;
 const photos=productPhotos(p);const total=photos.length;if(total<2)return;
 const selected=(index+total)%total;photoIndexes.set(id,selected);
 document.querySelectorAll(`[data-gallery-product="${id}"]`).forEach(gallery=>{
  gallery.querySelectorAll('.product-photo').forEach((photo,i)=>{photo.classList.toggle('is-active',i===selected);photo.setAttribute('aria-hidden',String(i!==selected));});
  gallery.querySelectorAll('[data-gallery-to]').forEach(dot=>dot.setAttribute('aria-pressed',String(Number(dot.dataset.galleryTo)===selected)));
  const count=gallery.querySelector('.photo-count');if(count){count.textContent=`${selected+1} / ${total}`;count.setAttribute('aria-label',photoLabel(selected,total));}
  const caption=gallery.querySelector('.photo-caption');if(caption){caption.textContent=productPhotoCaption(photos[selected]);caption.hidden=!caption.textContent;}
 });
}
function renderCategories(){const el=document.querySelector('#categories');if(!el)return;el.innerHTML=['all',...categoryIds].map(c=>`<button data-category="${c}" aria-pressed="${activeCategory===c}"><span>${esc(t(c))}</span><span>${c==='all'?PRODUCTS.length:PRODUCTS.filter(p=>p.category===c).length}</span></button>`).join('');}
function normalise(str){return str.toLocaleLowerCase().replace(/[ʼ’'`]/g,'').normalize('NFKC');}
function renderProducts(){const grid=document.querySelector('#products');if(!grid)return;const q=normalise(document.querySelector('#search').value.trim());const list=PRODUCTS.filter(p=>(activeCategory==='all'||p.category===activeCategory)&&normalise(p.name+' '+p.nameEn+' '+p.sourceName).includes(q));grid.innerHTML=list.map(card).join('');document.querySelector('#result-count').textContent=list.length+' / '+PRODUCTS.length+' '+t('count');document.querySelector('#empty').hidden=list.length>0;}
function shelf(value){if(!value)return t('unspecified');if(lang==='uk')return value;return value.replace('3 місяці','3 months').replace('72 години','72 hours').replace('діб','days');}
function casing(value){if(!value)return t('unspecified');if(lang==='uk')return value;return {'білкова':'Protein casing','без оболонки':'No casing','черева':'Natural gut casing','фіброузна':'Fibrous casing','натуральна':'Natural casing','целюлозна':'Cellulose casing','поліамідна':'Polyamide casing'}[value]||value;}
function detail(p){const subject=t('subject')+productName(p);const body=t('body')+productName(p)+' ('+p.sourceName+')'+t('bodyEnd');return `${photoFrame(p,true)}<p class="eyebrow">${esc(t(p.category))}</p><h2 id="dialog-title">${esc(productName(p))}</h2><p class="source-name">${esc(t('original'))}: ${esc(p.sourceName)}</p><dl><dt>${esc(t('grade'))}</dt><dd>${esc(t(p.grade==='в/с'?'topGrade':'firstGrade'))}</dd><dt>${esc(t('casing'))}</dt><dd>${esc(casing(p.casing))}</dd><dt>${esc(t('shelf'))}</dt><dd>${esc(shelf(p.shelf))}</dd><dt>${esc(t('storage'))}</dt><dd>${esc(t('storageValue'))}</dd></dl><p class="dialog-note">${esc(t('dialogNote'))}</p><a class="button" href="mailto:sales@ukrmiaso.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}"><span>${esc(t('askProduct'))}</span><span aria-hidden="true">↗</span></a>`;}
function initHeroSlider(){
 const slider=document.querySelector('[data-hero-slider]');if(!slider)return null;
 const slides=[...slider.querySelectorAll('.hero-slide')];
 const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
 let current=0,userPaused=false,hovered=false,focused=false,timer=null;
 function schedule(){
  clearTimeout(timer);
  if(!userPaused&&!hovered&&!focused&&!document.hidden&&!reducedMotion.matches)timer=setTimeout(()=>show(current+1),7000);
 }
 function refresh(){
  slider.setAttribute('aria-label',t('heroGallery'));
  slider.setAttribute('aria-roledescription',lang==='en'?'carousel':'слайдер');
  slides.forEach((slide,index)=>{slide.classList.toggle('is-active',index===current);slide.setAttribute('aria-hidden',String(index!==current));slide.querySelector('img').alt=t(index===0?'heroNaturalAlt':'heroGrillAlt');});
  slider.querySelector('[data-hero-caption]').textContent=t(current===0?'heroNaturalCaption':'heroGrillCaption');
  slider.querySelector('[data-hero-count]').textContent=`${String(current+1).padStart(2,'0')} / ${String(slides.length).padStart(2,'0')}`;
  slider.querySelectorAll('[data-hero-step]').forEach(button=>button.setAttribute('aria-label',t(Number(button.dataset.heroStep)<0?'previousSlide':'nextSlide')));
  slider.querySelectorAll('[data-hero-to]').forEach(button=>{const index=Number(button.dataset.heroTo);button.setAttribute('aria-label',`${t('showSlide')} ${index+1}: ${t(index===0?'heroNaturalCaption':'heroGrillCaption')}`);button.setAttribute('aria-pressed',String(index===current));});
  const pause=slider.querySelector('[data-hero-pause]');pause.hidden=reducedMotion.matches;pause.setAttribute('aria-pressed',String(userPaused));pause.setAttribute('aria-label',t(userPaused?'playSlides':'pauseSlides'));pause.querySelector('span').textContent=userPaused?'▶':'Ⅱ';
 }
 function show(index){current=(index+slides.length)%slides.length;refresh();schedule();}
 slider.addEventListener('click',event=>{
  const button=event.target.closest('button');if(!button)return;
  if(button.hasAttribute('data-hero-step'))show(current+Number(button.dataset.heroStep));
  else if(button.hasAttribute('data-hero-to'))show(Number(button.dataset.heroTo));
  else if(button.hasAttribute('data-hero-pause')){userPaused=!userPaused;refresh();schedule();}
 });
 slider.addEventListener('keydown',event=>{if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();show(current+(event.key==='ArrowLeft'?-1:1));}});
 slider.addEventListener('mouseenter',()=>{hovered=true;schedule();});
 slider.addEventListener('mouseleave',()=>{hovered=false;schedule();});
 slider.addEventListener('focusin',()=>{focused=true;schedule();});
 slider.addEventListener('focusout',()=>{setTimeout(()=>{focused=slider.contains(document.activeElement);schedule();},0);});
 document.addEventListener('visibilitychange',schedule);
 reducedMotion.addEventListener('change',()=>{refresh();schedule();});
 refresh();schedule();return {refresh};
}
function initBrandAnimation(){
 const brands=[...document.querySelectorAll('a.brand')];if(!brands.length)return;
 const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
 let timer=null,animatingBrand=null;
 function reset(){
  clearTimeout(timer);timer=null;animatingBrand=null;
  brands.forEach(brand=>brand.classList.remove('is-animating'));
 }
 brands.forEach(brand=>brand.addEventListener('click',event=>{
  // Preserve the link's normal new-tab, download and reduced-motion behaviour.
  if(event.defaultPrevented||(typeof event.button==='number'&&event.button!==0)||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey||brand.hasAttribute('download')||(brand.target&&brand.target!=='_self')||reducedMotion.matches||!brand.querySelector('svg'))return;
  event.preventDefault();
  if(animatingBrand)return;
  animatingBrand=brand;brand.classList.add('is-animating');
  timer=setTimeout(()=>{
   const destination=brand.href;
   reset();
   location.assign(destination);
  },850);
 }));
 window.addEventListener('pagehide',reset);
 window.addEventListener('pageshow',reset);
 reset();
}
function updateLinks(){document.querySelectorAll('[data-mail-general]').forEach(a=>{a.href='mailto:sales@ukrmiaso.com?subject='+encodeURIComponent(t('generalSubject'));});document.querySelectorAll('a[href]').forEach(a=>{const href=a.getAttribute('href');if(!href.includes('.html'))return;const u=new URL(href,location.href);u.searchParams.set('lang',lang);a.setAttribute('href',u.pathname.split('/').pop()+u.search+u.hash);});}
function applyLanguage(){
 document.documentElement.lang=lang;
 window.UKRMIASO_THEME?.updateControl();
 const canonical=document.querySelector('link[rel="canonical"]');
 if(canonical){const page=document.body.dataset.page==='catalog'?'catalog.html':'';canonical.href='https://ukrmiaso.com/'+page+(lang==='en'?'?lang=en':'');}
 document.title=t(document.body.dataset.page==='catalog'?'catalogPageTitle':'pageTitle');
 document.querySelector('meta[name="description"]').content=t(document.body.dataset.page==='catalog'?'catalogDescription':'description');
 document.querySelectorAll('[data-i18n]').forEach(el=>{if(el.dataset.i18n==='address')el.innerHTML=t('address');else el.textContent=t(el.dataset.i18n);});
 document.querySelectorAll('[data-i18n-html]').forEach(el=>el.innerHTML=t(el.dataset.i18nHtml));
 document.querySelectorAll('[data-lang]').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.lang===lang)));
 document.querySelectorAll('.brand').forEach(el=>el.setAttribute('aria-label',t('brandAria')));
 document.querySelectorAll('[data-nav]').forEach(el=>el.setAttribute('aria-label',t('navigation')));
 document.querySelectorAll('.languages').forEach(el=>el.setAttribute('aria-label',t('language')));
 document.querySelector('.menu-button').setAttribute('aria-label',t(document.querySelector('.menu-button').getAttribute('aria-expanded')==='true'?'menuClose':'menuOpen'));
 document.querySelector('.dialog-close').setAttribute('aria-label',t('close'));
 const search=document.querySelector('#search');if(search){search.placeholder=t('search');search.setAttribute('aria-label',t('searchLabel'));document.querySelector('#categories').setAttribute('aria-label',t('categoriesLabel'));document.querySelector('.catalog-results').setAttribute('aria-label',t('results'));}
 heroController?.refresh();
 const featured=document.querySelector('#featured');if(featured)featured.innerHTML=[4,2,25].map(id=>card(PRODUCTS.find(p=>p.id===id))).join('');
 renderCategories();renderProducts();updateLinks();if(openProduct)document.querySelector('#dialog-content').innerHTML=detail(openProduct);
}
document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>{lang=b.dataset.lang;try{localStorage.setItem('ukrmiaso-language',lang);}catch{}const url=new URL(location.href);url.searchParams.set('lang',lang);try{history.replaceState(null,'',url);}catch{}applyLanguage();}));
document.querySelector('#categories')?.addEventListener('click',e=>{const b=e.target.closest('[data-category]');if(!b)return;activeCategory=b.dataset.category;const url=new URL(location.href);if(activeCategory==='all')url.searchParams.delete('category');else url.searchParams.set('category',activeCategory);try{history.replaceState(null,'',url);}catch{}renderCategories();renderProducts();});
document.querySelector('#search')?.addEventListener('input',renderProducts);
document.querySelector('#reset')?.addEventListener('click',()=>{activeCategory='all';document.querySelector('#search').value='';const u=new URL(location.href);u.searchParams.delete('category');try{history.replaceState(null,'',u);}catch{}renderCategories();renderProducts();document.querySelector('#search').focus();});
const dialog=document.querySelector('#product-dialog');
document.addEventListener('click',e=>{const galleryButton=e.target.closest('[data-gallery-step],[data-gallery-to]');if(galleryButton){const gallery=galleryButton.closest('[data-gallery-product]');if(gallery){const id=Number(gallery.dataset.galleryProduct);changeProductPhoto(id,galleryButton.hasAttribute('data-gallery-to')?Number(galleryButton.dataset.galleryTo):(photoIndexes.get(id)||0)+Number(galleryButton.dataset.galleryStep));}return;}const b=e.target.closest('[data-product]');if(!b)return;openProduct=PRODUCTS.find(p=>p.id===Number(b.dataset.product));document.querySelector('#dialog-content').innerHTML=detail(openProduct);dialog.showModal();});
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{openProduct=null;});
const menu=document.querySelector('.menu-button');const mobile=document.querySelector('#mobile-nav');menu.addEventListener('click',()=>{mobile.hidden=!mobile.hidden;menu.setAttribute('aria-expanded',String(!mobile.hidden));menu.setAttribute('aria-label',t(mobile.hidden?'menuOpen':'menuClose'));});mobile.addEventListener('click',e=>{if(e.target.closest('a')){mobile.hidden=true;menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label',t('menuOpen'));}});
heroController=initHeroSlider();
applyLanguage();
initBrandAnimation();
