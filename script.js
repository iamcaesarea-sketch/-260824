/* =========================================================
   i18n — 코드에 영화 데이터를 미리 넣어두지 않습니다. 모든 영화 정보는
   TMDB Search/Discover API에서 실시간으로 가져오고, 화면 문구만 여기서 번역합니다.
   ========================================================= */
const I18N = {
  ko: {
    pageTitle: 'CineRec — 영화 리뷰 & 맞춤 추천',
    eyebrow: '장편·독립·단편 영화 DB 수록',
    tagline: '시청한 영화의 별점과 리뷰를 남기면, 9가지 항목으로 분석한 후<br>전세계 영화 데이터베이스에서 취향에 맞는 다음 영화를 찾아드려요.',
    statusChecking: '서버 연동 상태 확인 중…',
    statusOn: '서버 연동 켜짐 - 실시간 검색이 가능한 상태예요.',
    statusOff: '서버 연동 꺼짐 - 서버와 연결이 잠시 끊어졌어요. 잠깐의 휴식을 즐기는 동안, 곧 다시 영화를 찾을 수 있도록 복구할게요!',
    steps: ['01 영화 선택', '02 별점·리뷰', '03 세부 평가', '04 추가 선택', '05 결과'],
    step1Title: '🎞️ 어떤 영화를 보셨나요?',
    step1sub: '전체 카탈로그에서 실시간으로 검색해요.',
    searchPlaceholder: '예: 오디세이, 올드보이, Dune',
    searchHint: '💡 원본 제목과 똑같이 입력하면 더 정확하게 검색돼요.',
    searchStatusNote: '🔄 영화를 실시간으로 검색하고 있어요.',
    emptyNoteNoServer: '서버와 연결이 잠시 끊어졌어요.<br>곧 다시 영화를 찾을 수 있도록 준비할게요!',
    loadingNote: '검색 중…',
    emptyNoteNoResults: '검색 결과가 없어요. 다른 검색어로 찾아보세요.',
    emptyNoteSearchFail: '검색 중 문제가 생겼어요. 잠시 후 다시 시도해 주세요.',
    emptyNoteDetailFail: '영화 정보를 불러오지 못했어요. 다시 시도해 주세요.',
    nextBtn: '다음',
    backBtn: '이전',
    director: '감독',
    cast: '출연',
    unknownDirector: '정보 없음',
    step2sub: '별점을 매긴 후 짧게 리뷰를 남겨주시면 영화 추천에 반영할게요!',
    reviewPlaceholder: '예: 배우들 연기가 정말 인상적이었고 음악도 몰입감을 더해줬어요. 다만 후반부 각본이 좀 늘어지는 느낌...',
    privacyNote: '별점·리뷰는 서비스 개선을 위해 저장돼요.',
    ratingLabels: {1:'별로였어요', 2:'아쉬웠어요', 3:'그럭저럭이었어요', 4:'좋았어요', 5:'최고였어요!'},
    step3subPositive: (title) => `“${title}”이 좋으셨다니 다행이에요. 9가지 항목 중 어떤 부분이 특히 마음에 드셨는지 알려주세요.`,
    step3subNegative: () => `아쉬우셨군요. 어떤 항목이 특히 별로였는지 알려주시면, 그 반대 성향의 영화를 찾아드릴게요.`,
    step3Title: '세부적으로 평가해 주세요',
    aspects: {
      direction: '연출', script: '각본 · 대사', originality: '독창성', theme: '주제',
      miseEnScene: '미장센', acting: '연기', genre: '장르', editing: '편집', music: '음악',
    },
    scaleLow: '별로', scaleMid: '보통', scaleHigh: '아주 좋음',
    recommendBtn: '추천 받기',
    recommendLoading: '실시간으로 찾는 중…',
    step4Title: '좀 더 내 취향에 맞는 영화를 찾고 싶어요',
    step4Sub: '전부 선택 사항이에요. 건너뛰어도 괜찮아요.',
    skipBtn: '건너뛰기',
    genreLabel: '장르',
    genreOptionDisaster: '재난',
    genreOptionDetective: '추리',
    runtimeLabel: '러닝타임',
    typeLabel: '영화 유형',
    runtimeOption90: '1시간 30분 이내',
    runtimeOption120: '2시간 이내',
    runtimeOptionAny: '상관없어요',
    typeOptionAll: '상관없어요',
    typeOptionCommercial: '상업 영화',
    typeOptionIndie: '독립 영화',
    typeOptionShort: '단편 영화',
    decadeLabel: '개봉연도',
    decadeOptionClassic: '고전영화',
    decadeOption2000: '2000년대',
    decadeOption2010: '2010년대',
    decadeOption2020: '2020년대',
    decadeOptionAny: '상관없어요',
    runtimeHourUnit: '시간',
    runtimeMinutesUnit: '분',
    saveBtn: '저장하기',
    savedBtn: '저장됨 ✓',
    deleteBtn: '삭제',
    historyBtn: '📖 내 리뷰 기록',
    historyEmptyAll: '아직 리뷰 기록이 없어요.',
    step5Title: '이 영화들을 좋아하실 것 같아요🥸',
    predictedRatingLabel: '예상 별점',
    verdictPositive: (title, likedStr) => `“<b>${title}</b>”에서 <b>${likedStr}</b>을(를) 특히 좋게 보신 것 같아요. 비슷한 매력의 영화를 실시간으로 찾아봤어요.`,
    verdictNegative: (title, dislikedStr) => `“<b>${title}</b>”에서 <b>${dislikedStr}</b>이(가) 아쉬우셨던 것 같아요. 그 부분이 다른 결의 영화를 찾아봤어요.`,
    verdictMismatchPositive: '영화를 재미있게 보셨군요!',
    noneLabel: '없음',
    noResultsFound: '조건에 맞는 추천작을 찾지 못했어요. 다른 영화로 다시 시도해보세요.',
    reasonLabel: '😎 추천 이유',
    reasonGenreSimilar: (genres) => `장르(${genres})가 비슷해요`,
    reasonGenreDifferent: '아쉬워하신 장르와는 다른 결이에요',
    reasonSameDirector: (name) => `같은 ${name} 감독 연출`,
    reasonSameWriter: (name) => `각본가(${name})가 같아요`,
    reasonSameEditor: '편집자가 같아요',
    reasonSameComposer: (name) => `음악감독(${name})이 같아요`,
    reasonSameActor: '출연 배우가 겹쳐요',
    reasonDiffActorOk: '다른 배우진의 연기를 볼 수 있어요',
    reasonThemeSimilar: '주제·소재 키워드가 비슷해요',
    reasonDiscoverMatch: '설정하신 조건에 맞아 추천됐어요',
    reasonSimilarUsers: '사용자님과 비슷한 별점을 준 사람들이 좋아했어요.',
    streamingNone: '스트리밍 정보 없음',
    imdbLinkText: 'IMDB에서 보기 ↗',
    disclaimerText: '※ 영화 목록·감독/각본/편집/음악/배우·OTT 제공처(한국)·IMDB 링크는 전부 서버를 통해 실시간으로 받아온 데이터예요. "주제"와 "독창성"은 전용 데이터가 없어서 키워드 유사도로 근사했어요.',
    restartBtn: '다른 영화 리뷰하기',
    recsGalleryBtn: '📝 추천 받았던 영화',
    recsSortDate: '날짜별로 보기',
    recsSortGenre: '장르별로 보기',
    recsEmptyAll: '아직 추천받은 영화가 없어요.',
    recsTitle: '내가 추천받은 영화',
    recsFilterAll: '전체',
    recsEmptyFiltered: '이 장르로 추천받은 영화가 아직 없어요.',
    historyTitle: '내 리뷰 기록',
    alertNoServer: '서버와 연결이 잠시 끊어져서 추천을 불러올 수 없어요. 잠시 후 다시 시도해 주세요.',
    alertRecommendFail: '추천을 불러오는 중 문제가 생겼어요. 다시 시도해 주세요.',
    dateLocale: 'ko-KR',
    tmdbLang: 'ko-KR',
  },
  en: {
    pageTitle: 'CineRec — Movie Reviews & Picks',
    eyebrow: 'Feature · Indie · Short Films Included',
    tagline: 'Rate and review a movie you\'ve watched across 9 aspects,<br>and we\'ll search a global movie database for what to watch next.',
    statusChecking: 'Checking server connection…',
    statusOn: 'Server connected - live search is available.',
    statusOff: 'Server disconnected - we lost the connection for a moment. Enjoy a short break while we get things running again!',
    steps: ['01 Pick a Movie', '02 Rating & Review', '03 Detailed Ratings', '04 Fine-Tune', '05 Results'],
    step1Title: '🎞️ Which movie did you watch?',
    step1sub: "Search the entire catalog in real time.",
    searchPlaceholder: 'e.g. Oldboy, Parasite, Dune',
    searchHint: '💡 Typing the original title exactly gets you more accurate results.',
    searchStatusNote: '🔄 Movies are searched in real time.',
    emptyNoteNoServer: 'The connection dropped for a moment.<br>We\'ll have movie search back up again soon!',
    loadingNote: 'Searching…',
    emptyNoteNoResults: 'No results found. Try a different search term.',
    emptyNoteSearchFail: 'Something went wrong while searching. Please try again in a moment.',
    emptyNoteDetailFail: 'Could not load movie details. Please try again.',
    nextBtn: 'Next',
    backBtn: 'Back',
    director: 'Director',
    cast: 'Cast',
    unknownDirector: 'Unknown',
    step2sub: 'Rate it and add a short review — we\'ll use it to shape your recommendations!',
    reviewPlaceholder: 'e.g. The acting was really impressive and the music pulled me in. Though the script dragged a bit in the second half...',
    privacyNote: 'Your rating and review are stored to help improve the service.',
    ratingLabels: {1:'Not great', 2:'Meh', 3:'It was okay', 4:'I liked it', 5:'Loved it!'},
    step3subPositive: (title) => `Glad you enjoyed "${title}"! Tell us which of the 9 aspects stood out to you.`,
    step3subNegative: () => `Sorry to hear that. Tell us which aspects fell short and we'll find something with the opposite vibe.`,
    step3Title: 'Rate the details',
    aspects: {
      direction: 'Direction', script: 'Script & Dialogue', originality: 'Originality', theme: 'Theme',
      miseEnScene: 'Mise-en-scène', acting: 'Acting', genre: 'Genre', editing: 'Editing', music: 'Music',
    },
    scaleLow: 'Poor', scaleMid: 'Average', scaleHigh: 'Excellent',
    recommendBtn: 'Get Recommendations',
    recommendLoading: 'Finding recommendations…',
    step4Title: 'Want to fine-tune your picks?',
    step4Sub: "These are all optional — feel free to skip.",
    skipBtn: 'Skip',
    genreLabel: 'Genre',
    genreOptionDisaster: 'Disaster',
    genreOptionDetective: 'Detective',
    runtimeLabel: 'Runtime',
    typeLabel: 'Film Type',
    runtimeOption90: 'Under 1h 30m',
    runtimeOption120: 'Under 2h',
    runtimeOptionAny: 'Any length',
    typeOptionAll: 'Any type',
    typeOptionCommercial: 'Commercial',
    typeOptionIndie: 'Independent',
    typeOptionShort: 'Short film',
    decadeLabel: 'Release Decade',
    decadeOptionClassic: 'Classics',
    decadeOption2000: '2000s',
    decadeOption2010: '2010s',
    decadeOption2020: '2020s',
    decadeOptionAny: 'Any decade',
    runtimeHourUnit: 'h',
    runtimeMinutesUnit: 'm',
    saveBtn: 'Save',
    savedBtn: 'Saved ✓',
    deleteBtn: 'Delete',
    historyBtn: '📖 My Review History',
    historyEmptyAll: 'No reviews yet.',
    step5Title: 'You\'ll probably love these 🥸',
    predictedRatingLabel: 'Predicted Rating',
    verdictPositive: (title, likedStr) => `Looks like you especially loved <b>${likedStr}</b> in "<b>${title}</b>". We found movies with similar appeal in real time.`,
    verdictNegative: (title, dislikedStr) => `Seems like <b>${dislikedStr}</b> fell a bit short in "<b>${title}</b>". We found movies with a different take on that.`,
    verdictMismatchPositive: 'Looks like you actually enjoyed the movie!',
    noneLabel: 'None',
    noResultsFound: 'No matching recommendations found. Try a different movie.',
    reasonLabel: '😎 Why this pick',
    reasonGenreSimilar: (genres) => `Similar genre (${genres})`,
    reasonGenreDifferent: 'A different genre from the one you disliked',
    reasonSameDirector: (name) => `Directed by ${name}, same as before`,
    reasonSameWriter: (name) => `Same writer (${name})`,
    reasonSameEditor: 'Same editor',
    reasonSameComposer: (name) => `Same composer (${name})`,
    reasonSameActor: 'Shares cast members',
    reasonDiffActorOk: 'A fresh cast to enjoy',
    reasonThemeSimilar: 'Similar theme/keyword match',
    reasonDiscoverMatch: 'Matched your search criteria',
    reasonSimilarUsers: 'People who rated it similarly to you enjoyed this.',
    streamingNone: 'No streaming info',
    imdbLinkText: 'View on IMDB ↗',
    disclaimerText: '※ Movie listings, director/writer/editor/composer/cast, OTT availability (Korea), and IMDB links are all fetched live from the server. "Theme" and "Originality" have no dedicated data, so they\'re approximated with keyword similarity.',
    restartBtn: 'Review Another Movie',
    recsGalleryBtn: '📝 Movies Recommended to You',
    recsSortDate: 'Sort by date',
    recsSortGenre: 'Sort by genre',
    recsEmptyAll: 'No recommendations yet.',
    recsTitle: 'Movies Recommended to You',
    recsFilterAll: 'All',
    recsEmptyFiltered: "No recommendations in this genre yet.",
    historyTitle: 'My Review History',
    alertNoServer: 'The connection dropped for a moment, so recommendations aren\'t available. Please try again shortly.',
    alertRecommendFail: 'Something went wrong while fetching recommendations. Please try again.',
    dateLocale: 'en-US',
    tmdbLang: 'en-US',
  },
};

function t(key){
  return I18N[state.lang][key];
}

function imdbSearchUrl(title){
  return 'https://www.imdb.com/find/?q=' + encodeURIComponent(title) + '&s=tt&ttype=ft';
}

function starGlyphs(rating){
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  const empty = Math.max(0, 5 - full - (half?1:0));
  return '★'.repeat(full) + (half?'½':'') + '☆'.repeat(empty);
}

function truncateOverview(text, max=110){
  if(!text) return '';
  const clean = text.trim();
  if(clean.length<=max) return clean;
  const cut = clean.slice(0, max).replace(/\s+\S*$/, '');
  return (cut || clean.slice(0,max)) + '…';
}

function formatRuntime(mins){
  if(!mins) return '';
  const h = Math.floor(mins/60), m = mins%60;
  if(h>0) return `${h}${t('runtimeHourUnit')}${m>0 ? ' '+m+t('runtimeMinutesUnit') : ''}`;
  return `${m}${t('runtimeMinutesUnit')}`;
}

/* =========================================================
   서버 API (/api/tmdb) — TMDB 키는 서버에만 있고 브라우저는 절대 다루지 않음.
   여기서는 TMDB의 Search(검색) API와 Discover(발견) API를 실시간으로 호출합니다.
   ========================================================= */
const API_BASE = '/api/tmdb';
const IMG_W92 = 'https://image.tmdb.org/t/p/w92';
const IMG_W200 = 'https://image.tmdb.org/t/p/w200';
let serverAvailable = false;
let genreMap = null;

async function apiGet(path, params){
  const url = new URL(API_BASE, window.location.origin);
  url.searchParams.set('path', path);
  Object.entries(params||{}).forEach(([k,v])=>{ if(v!==undefined && v!==null && v!=='') url.searchParams.set(k, v); });
  if(!url.searchParams.has('language')) url.searchParams.set('language', t('tmdbLang'));
  const res = await fetch(url.toString());
  if(!res.ok){
    const body = await res.json().catch(()=>({}));
    throw new Error(body.error || ('HTTP_'+res.status));
  }
  return res.json();
}

async function checkServer(){
  try{
    const data = await apiGet('/genre/movie/list');
    genreMap = {};
    (data.genres||[]).forEach(g=> genreMap[g.id]=g.name);
    serverAvailable = true;
  }catch(e){
    serverAvailable = false;
  }
  updateStatusBadge();
  renderMovieGrid($('#search').value);
  renderRecsGallery();
}

function updateStatusBadge(){
  const dot = $('#statusDot');
  const text = $('#statusText');
  if(serverAvailable){
    dot.classList.add('on');
    text.textContent = t('statusOn');
  }else{
    dot.classList.remove('on');
    text.innerHTML = t('statusOff');
  }
}

/* 검색: /search/movie 실시간 호출 */
async function tmdbSearch(query){
  if(!query.trim()) return [];
  const data = await apiGet('/search/movie', {query, include_adult:'false'});
  return (data.results||[]).slice(0,18).map(m=>({
    tmdbId:m.id, title:m.title, year:(m.release_date||'').slice(0,4)||'?',
    poster: m.poster_path ? IMG_W92+m.poster_path : null,
  }));
}

async function tmdbWatchProviders(tmdbId){
  try{
    const data = await apiGet('/movie/'+tmdbId+'/watch/providers', {});
    const kr = data.results && data.results.KR;
    if(!kr) return [];
    return [...new Set((kr.flatrate||[]).map(p=>p.provider_name))];
  }catch(e){ return []; }
}

/* crew/cast에서 연출·각본·편집·음악·연기 담당자를 이름+ID로 함께 추출 (Discover 쿼리에 ID를 사용) */
function extractCredits(credits){
  const crew = credits.crew||[];
  const director = crew.find(c=>c.job==='Director');
  const writer = crew.find(c=> ['Screenplay','Writer','Story'].includes(c.job));
  const editor = crew.find(c=>c.job==='Editor');
  const composer = crew.find(c=>c.job==='Original Music Composer');
  const castTop = (credits.cast||[]).slice(0,4);
  return {
    director: director?director.name:null, directorId: director?director.id:null,
    writer: writer?writer.name:null, writerId: writer?writer.id:null,
    editor: editor?editor.name:null, editorId: editor?editor.id:null,
    composer: composer?composer.name:null, composerId: composer?composer.id:null,
    actors: castTop.map(c=>c.name), actorIds: castTop.map(c=>c.id),
  };
}

async function tmdbMovieDetail(tmdbId){
  const [detail, credits, ext, providers, kw] = await Promise.all([
    apiGet('/movie/'+tmdbId, {}),
    apiGet('/movie/'+tmdbId+'/credits', {}),
    apiGet('/movie/'+tmdbId+'/external_ids', {}),
    tmdbWatchProviders(tmdbId),
    apiGet('/movie/'+tmdbId+'/keywords', {}).catch(()=>({keywords:[]})),
  ]);
  const c = extractCredits(credits);
  return {
    source:'tmdb', tmdbId,
    title: detail.title, year: (detail.release_date||'').slice(0,4) || '?',
    director: c.director || t('unknownDirector'), directorId:c.directorId,
    writer:c.writer, writerId:c.writerId,
    editor:c.editor, editorId:c.editorId,
    composer:c.composer, composerId:c.composerId,
    actors: c.actors, actorIds: c.actorIds,
    genres: (detail.genres||[]).map(g=>g.name),
    genreIds: (detail.genres||[]).map(g=>g.id),
    keywordIds: (kw.keywords||[]).map(k=>k.id),
    poster: detail.poster_path ? IMG_W200+detail.poster_path : null,
    imdbUrl: ext.imdb_id ? ('https://www.imdb.com/title/'+ext.imdb_id+'/') : imdbSearchUrl(detail.title),
    ott: providers,
  };
}

/* =========================================================
   상태
   ========================================================= */
const ASPECT_KEYS = ['direction','script','originality','theme','miseEnScene','acting','genre','editing','music'];
/* 03단계엔 핵심 6개만, 나머지(독창성/편집/음악)는 04단계 "세부 평가 더 보기"로 이동 — 전부 선택 사항 */
const STEP3_ASPECT_KEYS = ['genre','direction','script','theme','miseEnScene','acting'];
const EXTRA_ASPECT_KEYS = ['originality','editing','music'];
let state = {
  movie:null, rating:0, reviewText:'',
  aspects: Object.fromEntries(ASPECT_KEYS.map(k=>[k,3])),
  lang:'ko', lastPositive:true,
  manualFilters: { genres:[], runtime:null, type:'all', decade:null },
};
let history = [];
let savedRecs = [];
let recsGenreFilter = 'all';
let recsSortMode = 'date';
let recsGalleryOpen = false;
let historyOpen = false;
let searchDebounce = null;

const $ = (sel)=>document.querySelector(sel);
const panels = [1,2,3,4,5].map(n=>$('#panel-'+n));
const stepSpans = document.querySelectorAll('#steps span');
let currentStep = 1;

function showStep(n){
  currentStep = n;
  panels.forEach((p,i)=> p.style.display = (i+1===n? 'block':'none'));
  stepSpans.forEach(s=>{
    const sv = parseInt(s.dataset.s);
    s.classList.toggle('active', sv===n);
    s.classList.toggle('done', sv<n);
  });
  window.scrollTo({top:0, behavior:'smooth'});
}

/* =========================================================
   언어 전환 (i18n)
   ========================================================= */
function applyStaticI18n(){
  document.title = t('pageTitle');
  $('#pageTitleTag').textContent = t('pageTitle');
  document.getElementById('htmlRoot').lang = state.lang;
  $('#eyebrowText').textContent = t('eyebrow');
  $('#taglineText').innerHTML = t('tagline');
  $('#statusText').textContent = serverAvailable===false && genreMap===null ? t('statusChecking') : $('#statusText').textContent;
  updateStatusBadge();

  const stepLabels = t('steps');
  stepSpans.forEach(s=>{ s.textContent = stepLabels[parseInt(s.dataset.s)-1]; });

  $('#step1Title').textContent = t('step1Title');
  $('#step1sub').textContent = t('step1sub');
  $('#search').placeholder = t('searchPlaceholder');
  $('#searchStatus').textContent = t('searchStatusNote');
  $('#searchHint').textContent = t('searchHint');
  $('#toStep2').textContent = t('nextBtn');

  $('#step2sub').textContent = t('step2sub');
  $('#reviewText').placeholder = t('reviewPlaceholder');
  $('#privacyNote').textContent = t('privacyNote');
  $('#back1').textContent = t('backBtn');
  $('#toStep3').textContent = t('nextBtn');

  $('#step3Title').textContent = t('step3Title');
  $('#back2').textContent = t('backBtn');
  $('#toStep4').textContent = t('nextBtn');

  $('#step4Title').textContent = t('step4Title');
  $('#step4sub').textContent = t('step4Sub');
  $('#genreLabel').textContent = t('genreLabel');
  $('#runtimeLabel').textContent = t('runtimeLabel');
  $('#decadeLabel').textContent = t('decadeLabel');
  $('#typeLabel').textContent = t('typeLabel');
  $('#back3').textContent = t('backBtn');
  $('#skipRefine').textContent = t('skipBtn');
  $('#toStep5').textContent = t('recommendBtn');

  $('#step5Title').textContent = t('step5Title');
  $('#restart').textContent = t('restartBtn');

  $('#recsGalleryBtn').textContent = t('recsGalleryBtn');
  $('#sortDateBtn').textContent = t('recsSortDate');
  $('#sortGenreBtn').textContent = t('recsSortGenre');
  $('#recsTitle').textContent = t('recsTitle');
  $('#historyBtn').textContent = t('historyBtn');
  $('#historyTitle').textContent = t('historyTitle');

  $('#langKo').classList.toggle('active', state.lang==='ko');
  $('#langEn').classList.toggle('active', state.lang==='en');

  renderStars();
  if(state.movie) renderSelectedCard();
  if(currentStep===1){
    if(state.movie) renderSelectedOnlyCard();
    else renderMovieGrid($('#search').value);
  }
  if(currentStep===3) renderAspects();
  if(currentStep===4) renderRefineStep();
  renderRecsGallery();
  renderHistory();
}

async function setLang(lang){
  if(state.lang===lang) return;
  state.lang = lang;
  applyStaticI18n();
  if($('#panel-3').style.display!=='none'){
    $('#step3sub').textContent = state.lastPositive ? t('step3subPositive')(state.movie.title) : t('step3subNegative')();
  }
  saveLang();
  try{
    await checkServer();
  }catch(e){}
}
$('#langKo').onclick = ()=> setLang('ko');
$('#langEn').onclick = ()=> setLang('en');

/* 언어/기록 저장은 표준 localStorage를 사용합니다 (Vercel 등 실제 배포 환경에서도 동작). */
function saveLang(){
  try{ localStorage.setItem('cinerec:lang', state.lang); }catch(e){}
}
function loadLang(){
  try{
    const v = localStorage.getItem('cinerec:lang');
    if(v==='ko' || v==='en') state.lang = v;
  }catch(e){}
}

/* =========================================================
   STEP 1: 영화 검색 (TMDB Search API, 실시간)
   ========================================================= */
function selectMovie(movieObj){
  state.movie = movieObj;
  $('#toStep2').disabled = false;
  renderSelectedOnlyCard();
}

/* 영화를 선택하면 나머지 검색 후보들은 지우고 선택한 영화 카드만 남깁니다 */
function renderSelectedOnlyCard(){
  const grid = $('#movieGrid');
  const m = state.movie;
  grid.innerHTML='';
  const div = document.createElement('div');
  div.className='movie-card selected';
  div.innerHTML = `${m.poster? `<img src="${m.poster}" alt="">` : '<img alt="">'}<div class="meta"><div class="t">${m.title}</div><div class="y">${m.year}</div></div>`;
  grid.appendChild(div);
}

async function renderTmdbGrid(filter){
  const grid = $('#movieGrid');
  if(!filter || !filter.trim()){
    grid.innerHTML = '';
    return;
  }
  grid.innerHTML = `<div class="loading-note">${t('loadingNote')}</div>`;
  try{
    const results = await tmdbSearch(filter);
    if(results.length===0){ grid.innerHTML = `<div class="empty-note">${t('emptyNoteNoResults')}</div>`; return; }
    grid.innerHTML='';
    results.forEach(m=>{
      const div = document.createElement('div');
      div.className='movie-card' + (state.movie && state.movie.tmdbId===m.tmdbId ? ' selected':'');
      div.innerHTML = `${m.poster? `<img src="${m.poster}" alt="">` : '<img alt="">'}<div class="meta"><div class="t">${m.title}</div><div class="y">${m.year}</div></div>`;
      div.onclick = async ()=>{
        grid.querySelectorAll('.movie-card').forEach(c=>c.classList.remove('selected'));
        div.classList.add('selected');
        div.style.opacity='0.5';
        try{
          const detail = await tmdbMovieDetail(m.tmdbId);
          selectMovie(detail);
        }catch(e){
          div.style.opacity='1';
          grid.insertAdjacentHTML('afterbegin', `<div class="empty-note">${t('emptyNoteDetailFail')}</div>`);
        }
      };
      grid.appendChild(div);
    });
  }catch(e){
    grid.innerHTML = `<div class="empty-note">${t('emptyNoteSearchFail')}</div>`;
  }
}

function renderMovieGrid(filter=''){
  const grid = $('#movieGrid');
  if(!serverAvailable){
    grid.innerHTML = `<div class="empty-note">${t('emptyNoteNoServer')}</div>`;
    return;
  }
  renderTmdbGrid(filter);
}

$('#search').addEventListener('input', e=>{
  clearTimeout(searchDebounce);
  const val = e.target.value;
  searchDebounce = setTimeout(()=> renderMovieGrid(val), 400);
});

function renderSelectedCard(){
  const m = state.movie;
  const card = $('#selectedCard');
  card.innerHTML = `
    ${m.poster ? `<img src="${m.poster}" alt="">` : ''}
    <div class="info">
      <b>${m.title} (${m.year})</b>
      <span>${t('director')} ${m.director || t('unknownDirector')}${m.actors && m.actors.length ? ' · ' + t('cast') + ' ' + m.actors.join(', ') : ''}</span>
    </div>
  `;
}
$('#toStep2').onclick = ()=>{
  renderSelectedCard();
  showStep(2);
};

/* =========================================================
   STEP 2: 별점 & 리뷰 (0.5 단위 반개 지원)
   ========================================================= */
function ratingLabelFor(v){
  const idx = Math.min(5, Math.max(1, Math.ceil(v)));
  return t('ratingLabels')[idx];
}
function renderStars(){
  const row = $('#starRow');
  row.innerHTML='';
  for(let i=1;i<=5;i++){
    const wrap = document.createElement('span');
    wrap.className='star';
    const fillPct = Math.max(0, Math.min(100, (state.rating - (i-1)) * 100));
    wrap.innerHTML = `<span class="layer bg">★</span><span class="layer fill" style="width:${fillPct}%">★</span><span class="hit left"></span><span class="hit right"></span>`;
    wrap.querySelector('.hit.left').onclick = ()=> setRating(i-0.5);
    wrap.querySelector('.hit.right').onclick = ()=> setRating(i);
    row.appendChild(wrap);
  }
  if(state.rating>0){
    $('#ratingLabel').textContent = `${state.rating} / 5 · ${ratingLabelFor(state.rating)}`;
  }
}
function setRating(v){
  state.rating = v;
  renderStars();
  $('#ratingLabel').textContent = `${v} / 5 · ${ratingLabelFor(v)}`;
  $('#toStep3').disabled = false;
}
renderStars();
$('#reviewText').addEventListener('input', e=> state.reviewText = e.target.value);
$('#back1').onclick = ()=> showStep(1);
$('#toStep3').onclick = ()=>{
  const positive = state.rating >= 3;
  state.lastPositive = positive;
  $('#step3sub').textContent = positive
    ? t('step3subPositive')(state.movie.title)
    : t('step3subNegative')();
  renderAspects();
  showStep(3);
};

/* =========================================================
   STEP 3: 세부 평가 (9항목)
   ========================================================= */
function renderAspectSliders(containerSel, keys){
  const c = $(containerSel);
  c.innerHTML='';
  keys.forEach(key=>{
    const wrap = document.createElement('div');
    wrap.className='aspect';
    wrap.innerHTML = `
      <label>${t('aspects')[key]} <span class="val" id="val-${key}">${state.aspects[key]}</span></label>
      <input type="range" min="1" max="5" step="1" value="${state.aspects[key]}" id="range-${key}">
      <div class="scale-labels"><span>${t('scaleLow')}</span><span>${t('scaleMid')}</span><span>${t('scaleHigh')}</span></div>
    `;
    c.appendChild(wrap);
    wrap.querySelector('input').addEventListener('input', e=>{
      state.aspects[key] = parseInt(e.target.value);
      $('#val-'+key).textContent = e.target.value;
    });
  });
}
function renderAspects(){
  renderAspectSliders('#aspectContainer', STEP3_ASPECT_KEYS);
}
function renderExtraAspects(){
  renderAspectSliders('#extraAspectContainer', EXTRA_ASPECT_KEYS);
}
$('#back2').onclick = ()=> showStep(2);

/* =========================================================
   STEP 4: 추가 선택 (장르 · 러닝타임 · 영화 유형) — 전부 선택 사항
   ========================================================= */
const RUNTIME_OPTIONS = [
  {value:null, key:'runtimeOptionAny'},
  {value:90, key:'runtimeOption90'},
  {value:120, key:'runtimeOption120'},
];
const TYPE_OPTIONS = [
  {value:'all', key:'typeOptionAll'},
  {value:'commercial', key:'typeOptionCommercial'},
  {value:'indie', key:'typeOptionIndie'},
  {value:'short', key:'typeOptionShort'},
];
const DECADE_OPTIONS = [
  {value:null, key:'decadeOptionAny'},
  {value:'classic', key:'decadeOptionClassic'},
  {value:2000, key:'decadeOption2000'},
  {value:2010, key:'decadeOption2010'},
  {value:2020, key:'decadeOption2020'},
];
/* TMDB에는 "재난"·"추리" 전용 장르가 없어서, 다른 장르처럼 with_genres가 아니라
   /search/keyword로 그때그때 조회한 키워드 ID로 근사해요 (독립/단편 영화와 동일한 방식) */
const EXTRA_GENRE_CHIPS = {
  detective: {value:'detective', labelKey:'genreOptionDetective', keyword:'detective'},
  disaster: {value:'disaster', labelKey:'genreOptionDisaster', keyword:'disaster'},
};
/* 장르 칩 노출 순서 — 선호도(대중적으로 많이 찾는 순)가 높은 장르부터.
   숫자는 TMDB 장르 ID, 문자열은 위 EXTRA_GENRE_CHIPS의 키(추리는 미스터리 바로 옆에 배치) */
const GENRE_RENDER_ORDER = [
  28, 35, 18, 10749, 53, 80, 9648, 'detective', 878, 14, 12, 16, 27,
  10751, 10402, 10752, 36, 99, 10770, 37, 'disaster',
];

function makeGenreChip(value, label){
  const chip = document.createElement('button');
  chip.type = 'button';
  chip.className = 'chip' + (state.manualFilters.genres.includes(value) ? ' selected' : '');
  chip.textContent = label;
  chip.onclick = ()=>{
    const i = state.manualFilters.genres.indexOf(value);
    if(i===-1) state.manualFilters.genres.push(value);
    else state.manualFilters.genres.splice(i,1);
    chip.classList.toggle('selected');
  };
  return chip;
}

function renderRefineStep(){
  renderExtraAspects();

  const genreBox = $('#genreChips');
  genreBox.innerHTML = '';
  if(genreMap){
    const coveredIds = new Set();
    GENRE_RENDER_ORDER.forEach(entry=>{
      if(typeof entry === 'string'){
        const extra = EXTRA_GENRE_CHIPS[entry];
        genreBox.appendChild(makeGenreChip(extra.value, t(extra.labelKey)));
      }else{
        coveredIds.add(entry);
        const name = genreMap[entry];
        if(!name) return;
        genreBox.appendChild(makeGenreChip(entry, name));
      }
    });
    // TMDB가 나중에 장르를 추가해도 놓치지 않도록, 위 순서 목록에 없는 장르는 끝에 이어서 표시
    Object.keys(genreMap).forEach(id=>{
      const gid = parseInt(id);
      if(coveredIds.has(gid)) return;
      genreBox.appendChild(makeGenreChip(gid, genreMap[gid]));
    });
  }

  const runtimeBox = $('#runtimeChips');
  runtimeBox.innerHTML = '';
  RUNTIME_OPTIONS.forEach(opt=>{
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'chip' + (state.manualFilters.runtime===opt.value ? ' selected' : '');
    chip.textContent = t(opt.key);
    chip.onclick = ()=>{
      state.manualFilters.runtime = opt.value;
      runtimeBox.querySelectorAll('.chip').forEach(c=>c.classList.remove('selected'));
      chip.classList.add('selected');
    };
    runtimeBox.appendChild(chip);
  });

  const decadeBox = $('#decadeChips');
  decadeBox.innerHTML = '';
  DECADE_OPTIONS.forEach(opt=>{
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'chip' + (state.manualFilters.decade===opt.value ? ' selected' : '');
    chip.textContent = t(opt.key);
    chip.onclick = ()=>{
      state.manualFilters.decade = opt.value;
      decadeBox.querySelectorAll('.chip').forEach(c=>c.classList.remove('selected'));
      chip.classList.add('selected');
    };
    decadeBox.appendChild(chip);
  });

  const typeBox = $('#typeChips');
  typeBox.innerHTML = '';
  TYPE_OPTIONS.forEach(opt=>{
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'chip' + (state.manualFilters.type===opt.value ? ' selected' : '');
    chip.textContent = t(opt.key);
    chip.onclick = ()=>{
      state.manualFilters.type = opt.value;
      typeBox.querySelectorAll('.chip').forEach(c=>c.classList.remove('selected'));
      chip.classList.add('selected');
    };
    typeBox.appendChild(chip);
  });
}

$('#toStep4').onclick = ()=>{
  renderRefineStep();
  showStep(4);
};
$('#back3').onclick = ()=> showStep(3);
$('#skipRefine').onclick = ()=>{
  state.manualFilters = { genres:[], runtime:null, type:'all', decade:null };
  runRecommend();
};
$('#toStep5').onclick = ()=> runRecommend();

/* =========================================================
   키워드 기반 보조 분석 (리뷰 텍스트 → 항목별 +1/-1 보정)
   ========================================================= */
const KEYWORDS = {
  direction: ['연출','디렉팅'],
  script: ['각본','대사','대본','각색','스토리'],
  originality: ['독창적','신선했','뻔한','진부','참신'],
  theme: ['주제','메시지','의미'],
  miseEnScene: ['미장센','영상미','색감','구도','촬영','비주얼'],
  acting: ['연기','배우','열연','캐스팅'],
  genre: ['장르','설정'],
  editing: ['편집','템포','호흡','늘어지'],
  music: ['음악','사운드트랙','스코어','ost','O.S.T'],
};
const NEG_WORDS = ['별로','아쉽','실망','지루','늘어지','어색','부족','산만','뻔한','진부'];
const POS_WORDS = ['좋았','최고','인상적','몰입','훌륭','인생작','완벽','대단','참신','신선했'];

function textNudge(){
  const text = state.reviewText || '';
  const nudges = {};
  Object.entries(KEYWORDS).forEach(([key, words])=>{
    if(!words.some(w=> text.includes(w))) return;
    const hasNeg = NEG_WORDS.some(w=> text.includes(w));
    const hasPos = POS_WORDS.some(w=> text.includes(w));
    if(hasNeg && !hasPos) nudges[key] = -1;
    else if(hasPos && !hasNeg) nudges[key] = 1;
  });
  return nudges;
}

function getLikedDisliked(){
  const nudges = textNudge();
  const liked=[], disliked=[];
  ASPECT_KEYS.forEach(key=>{
    let v = state.aspects[key];
    if(nudges[key]) v += nudges[key];
    if(v>=4) liked.push(key);
    if(v<=2) disliked.push(key);
  });
  return {liked, disliked};
}

/* =========================================================
   추천 로직 — TMDB Discover API를 실시간으로 호출
   (하드코딩된 영화 목록을 전혀 쓰지 않고, 매번 아래 조건으로 /discover/movie를 새로 조회합니다)
   ========================================================= */
async function tmdbDiscover(params){
  const data = await apiGet('/discover/movie', params);
  return data.results || [];
}

const keywordIdCache = {};
async function fetchKeywordId(query){
  if(query in keywordIdCache) return keywordIdCache[query];
  try{
    const data = await apiGet('/search/keyword', {query});
    const id = (data.results||[])[0] ? data.results[0].id : null;
    keywordIdCache[query] = id;
    return id;
  }catch(e){
    keywordIdCache[query] = null;
    return null;
  }
}

/* 예상 별점 — 1차 신호는 방금 남긴 리뷰(state.rating), 2차 신호는 사용자의 과거 리뷰 기록(history)의
   평균 별점(평소 평점 성향). 매칭 강도(score, 장르·감독·각본·배우 등 겹침 정도)가 강할수록 방금 남긴
   별점에 가깝게, 약할수록 무난한 중간값(3.5)으로 회귀시켜요. 과거 기록은 표본이 너무 적으면(3건 미만)
   왜곡될 수 있어 반영하지 않고, 반영하더라도 비중은 작게(15%)만 줘요.
   ※ 추천 이유(reasons)에는 과거 기록을 전혀 쓰지 않아요 — 예상 별점 계산에서만 참고합니다. */
function predictRating(matchScore){
  const matchStrength = Math.max(0, Math.min(1, matchScore / 8));
  let predicted = 3.5 + (state.rating - 3.5) * matchStrength;
  if(history.length >= 3){
    const avgHistory = history.reduce((sum,h)=> sum + h.rating, 0) / history.length;
    predicted = predicted*0.85 + avgHistory*0.15;
  }
  predicted = Math.round(predicted*2) / 2;
  return Math.max(1, Math.min(5, predicted));
}

async function computeTmdbRecommendations(){
  const base = state.movie;
  const {liked, disliked} = getLikedDisliked();
  const manual = state.manualFilters || { genres:[], runtime:null, type:'all' };
  const hasManualFilter = manual.genres.length>0 || manual.runtime || manual.type!=='all';

  const params = { sort_by:'popularity.desc', 'vote_count.gte':50, page:1 };

  const manualGenreIds = manual.genres.filter(g=> !EXTRA_GENRE_CHIPS[g]);
  const selectedExtraGenres = manual.genres.filter(g=> EXTRA_GENRE_CHIPS[g]).map(g=> EXTRA_GENRE_CHIPS[g]);

  if(manualGenreIds.length){
    // 사용자가 직접 고른 장르가 있으면 자동 추론 대신 그 장르를 우선해요
    params.with_genres = manualGenreIds.join('|');
  }else if(selectedExtraGenres.length===0 && base.genreIds && base.genreIds.length){
    if(disliked.includes('genre')) params.without_genres = base.genreIds.join(',');
    else params.with_genres = base.genreIds.join('|');
  }

  if(selectedExtraGenres.length){
    const extraKwIds = (await Promise.all(selectedExtraGenres.map(c=> fetchKeywordId(c.keyword)))).filter(Boolean);
    if(extraKwIds.length){
      params.with_keywords = params.with_keywords ? params.with_keywords+'|'+extraKwIds.join('|') : extraKwIds.join('|');
    }
  }

  const crewLiked = [];
  if((liked.includes('direction') || liked.includes('miseEnScene')) && base.directorId) crewLiked.push(base.directorId);
  if(liked.includes('script') && base.writerId) crewLiked.push(base.writerId);
  if(liked.includes('editing') && base.editorId) crewLiked.push(base.editorId);
  if(liked.includes('music') && base.composerId) crewLiked.push(base.composerId);
  if(crewLiked.length) params.with_crew = [...new Set(crewLiked)].join('|');

  if(liked.includes('acting') && base.actorIds && base.actorIds.length){
    params.with_cast = base.actorIds.join('|');
  }

  const themeLiked = liked.includes('theme') || liked.includes('originality');
  const themeDisliked = disliked.includes('theme') || disliked.includes('originality');
  if(themeLiked && base.keywordIds && base.keywordIds.length){
    params.with_keywords = base.keywordIds.slice(0,8).join('|');
  }else if(themeDisliked && base.keywordIds && base.keywordIds.length){
    params.without_keywords = base.keywordIds.slice(0,8).join(',');
  }

  // 러닝타임 선택 (직접 선택 안 했으면 건너뜀)
  if(manual.runtime){
    params['with_runtime.lte'] = manual.runtime;
  }

  // 개봉연도(연대) 선택 (직접 선택 안 했으면 건너뜀)
  if(manual.decade === 'classic'){
    params['primary_release_date.lte'] = '1979-12-31';
  }else if(manual.decade){
    params['primary_release_date.gte'] = manual.decade + '-01-01';
    params['primary_release_date.lte'] = (manual.decade + 9) + '-12-31';
  }

  // 영화 유형 — 단편은 짧은 러닝타임으로, 독립영화는 TMDB 키워드로 근사해요
  if(manual.type==='short'){
    params['with_runtime.lte'] = Math.min(manual.runtime || 999, 40);
    const shortKwId = await fetchKeywordId('short film');
    if(shortKwId) params.with_keywords = params.with_keywords ? params.with_keywords+'|'+shortKwId : String(shortKwId);
  }else if(manual.type==='indie'){
    const indieKwId = await fetchKeywordId('independent film');
    if(indieKwId) params.with_keywords = params.with_keywords ? params.with_keywords+'|'+indieKwId : String(indieKwId);
  }

  let results = (await tmdbDiscover(params)).filter(m=> m.id !== base.tmdbId);

  /* 별점이 0.5·1·4·4.5·5점처럼 뚜렷한(호불호가 분명한) 경우엔, TMDB의
     "이 영화를 본 사람들이 함께 본 영화"(recommendations) 데이터도 함께 섞어서
     "비슷한 별점을 준 사람들이 좋아한 영화" 신호로 활용합니다.
     (러닝타임/영화 유형처럼 Discover가 직접 지원 못 하는 조건을 직접 고르셨을 땐
     그 조건을 못 지키는 추천이 섞이지 않도록 이 신호는 건너뛰어요) */
  const SIMILAR_USER_RATINGS = [0.5, 1, 4, 4.5, 5];
  const recommendedIds = new Set();
  if(SIMILAR_USER_RATINGS.includes(state.rating) && !manual.runtime && manual.type==='all'){
    try{
      const recData = await apiGet('/movie/'+base.tmdbId+'/recommendations', {page:1});
      const seen = new Set(results.map(r=>r.id));
      (recData.results||[]).forEach(m=>{
        if(m.id===base.tmdbId) return;
        recommendedIds.add(m.id);
        if(!seen.has(m.id)){ results.push(m); seen.add(m.id); }
      });
    }catch(e){}
  }

  // 조건이 너무 좁아 결과가 부족하면 장르만 남기고 완화해서 재조회
  // (직접 고른 러닝타임·영화 유형·장르는 완화 단계에서도 계속 지켜요)
  if(results.length < 4){
    const loose = { sort_by:'popularity.desc', 'vote_count.gte':20, page:1 };
    if(params.with_genres) loose.with_genres = params.with_genres;
    else if(base.genreIds && base.genreIds.length) loose.with_genres = base.genreIds.join('|');
    if(params['with_runtime.lte']) loose['with_runtime.lte'] = params['with_runtime.lte'];
    if(params['primary_release_date.gte'] || params['primary_release_date.lte']){
      if(params['primary_release_date.gte']) loose['primary_release_date.gte'] = params['primary_release_date.gte'];
      if(params['primary_release_date.lte']) loose['primary_release_date.lte'] = params['primary_release_date.lte'];
    }
    if(manual.type==='indie' || manual.type==='short' || selectedExtraGenres.length){
      if(params.with_keywords) loose.with_keywords = params.with_keywords;
    }
    const more = (await tmdbDiscover(loose)).filter(m=> m.id !== base.tmdbId);
    const seen = new Set(results.map(r=>r.id));
    more.forEach(m=>{ if(!seen.has(m.id)){ results.push(m); seen.add(m.id); } });
  }

  const top = results.slice(0, 8);
  const detailed = await Promise.all(top.map(async (c, idx)=>{
    const [credits, providers, ext, detail] = await Promise.all([
      apiGet('/movie/'+c.id+'/credits', {}).catch(()=>({crew:[],cast:[]})),
      tmdbWatchProviders(c.id),
      apiGet('/movie/'+c.id+'/external_ids', {}).catch(()=>({})),
      apiGet('/movie/'+c.id, {}).catch(()=>({})),
    ]);
    const cr = extractCredits(credits);
    return {c, idx, ...cr, providers, imdbId: ext.imdb_id || null, runtime: detail.runtime || null};
  }));

  detailed.forEach(d=>{
    let score = Math.max(0, 3 - d.idx*0.3);
    const reasons = [];
    const genreOverlap = (d.c.genre_ids||[]).filter(g=> base.genreIds.includes(g));
    if(genreOverlap.length){
      score += genreOverlap.length*2;
      reasons.push(t('reasonGenreSimilar')(genreOverlap.map(g=>genreMap[g]).filter(Boolean).join(', ')));
    }
    if(disliked.includes('genre') && genreOverlap.length===0){
      reasons.push(t('reasonGenreDifferent'));
    }

    const sameDirector = d.directorId && d.directorId===base.directorId;
    const sameWriter = d.writerId && d.writerId===base.writerId;
    const sameEditor = d.editorId && d.editorId===base.editorId;
    const sameComposer = d.composerId && d.composerId===base.composerId;
    const sameActor = (d.actorIds||[]).some(id=> base.actorIds.includes(id));

    if(sameDirector && (liked.includes('direction')||liked.includes('miseEnScene'))){ score+=3; reasons.push(t('reasonSameDirector')(d.director)); }
    if(sameWriter && liked.includes('script')){ score+=3; reasons.push(t('reasonSameWriter')(d.writer)); }
    if(sameEditor && liked.includes('editing')){ score+=2; reasons.push(t('reasonSameEditor')); }
    if(sameComposer && liked.includes('music')){ score+=2; reasons.push(t('reasonSameComposer')(d.composer)); }
    if(sameActor && liked.includes('acting')){ score+=3; reasons.push(t('reasonSameActor')); }
    if(!sameActor && disliked.includes('acting')){ score+=1; reasons.push(t('reasonDiffActorOk')); }
    if(sameActor && disliked.includes('acting')) score -= 2;
    if((themeLiked) && !reasons.some(r=>r===t('reasonThemeSimilar'))){ reasons.push(t('reasonThemeSimilar')); }
    if(recommendedIds.has(d.c.id)){ score+=2; reasons.push(t('reasonSimilarUsers')); }

    if(reasons.length===0) reasons.push(t('reasonDiscoverMatch'));
    d.score = score;
    d.reasons = [...new Set(reasons)];
    d.predictedRating = predictRating(score);
  });

  detailed.sort((a,b)=> b.score-a.score);
  const list = detailed.slice(0,4).map(d=>({
    movie:{
      id: d.c.id, title:d.c.title, year:(d.c.release_date||'').slice(0,4)||'?',
      director: d.director || t('unknownDirector'), actors:d.actors||[],
      poster: d.c.poster_path ? IMG_W200+d.c.poster_path : null,
      overview: d.c.overview || '',
      genreIds: d.c.genre_ids || [],
      runtime: d.runtime || null,
      imdbUrl: d.imdbId ? ('https://www.imdb.com/title/'+d.imdbId+'/') : imdbSearchUrl(d.c.title),
      ott: d.providers,
    },
    score:d.score, reasons:d.reasons, predictedRating:d.predictedRating,
  }));
  return {list, liked, disliked};
}

/* =========================================================
   STEP 4: 결과 렌더
   ========================================================= */
function renderResult(result, positive){
  const verdict = $('#verdictBox');
  const likedStr = result.liked.map(k=>t('aspects')[k]).join(', ') || t('noneLabel');
  const dislikedStr = result.disliked.map(k=>t('aspects')[k]).join(', ') || t('noneLabel');

  // 별점은 낮았지만(부정) 세부 평가에서 아쉬운 항목이 하나도 없는 경우 —
  // 어색한 "없음이 아쉬우셨던 것 같아요" 대신 자연스러운 문구로 대체
  const mismatch = !positive && result.disliked.length===0;
  verdict.classList.toggle('negative', !positive && !mismatch);

  verdict.innerHTML = mismatch
    ? `<div>${t('verdictMismatchPositive')}</div>`
    : positive
      ? `<div>${t('verdictPositive')(state.movie.title, likedStr)}</div>`
      : `<div>${t('verdictNegative')(state.movie.title, dislikedStr)}</div>`;

  const list = $('#resultList');
  list.innerHTML='';
  if(result.list.length===0){
    list.innerHTML = `<div class="sub">${t('noResultsFound')}</div>`;
  }
  result.list.forEach(({movie, reasons, predictedRating})=>{
    const t2 = document.createElement('div');
    t2.className='ticket';
    const posterStyle = movie.poster ? `style="background-image:url('${movie.poster}')"` : '';
    t2.innerHTML = `
      <div class="top">
        <div class="poster ${movie.poster?'':'noimg'}" ${posterStyle}></div>
        <div class="head">
          <span class="year">${movie.year}${movie.runtime ? ' · '+formatRuntime(movie.runtime) : ''}</span>
          <h3><a href="${movie.imdbUrl}" target="_blank" rel="noopener">${movie.title}</a></h3>
          <div class="credits"><b>${t('director')}</b> ${movie.director || t('unknownDirector')}${movie.actors && movie.actors.length ? `　<b>${t('cast')}</b> ${movie.actors.join(', ')}` : ''}</div>
        </div>
      </div>
      <div class="full">
        ${movie.overview ? `<div class="plot">${truncateOverview(movie.overview, 160)}</div>` : ''}
        <div class="predicted"><b>${t('predictedRatingLabel')}</b> ${starGlyphs(predictedRating)} (${predictedRating})</div>
        <div class="why"><b>${t('reasonLabel')}</b> · ${reasons.slice(0,3).join(' · ')}</div>
        <div class="ott-badges">
          ${movie.ott && movie.ott.length
            ? movie.ott.map(o=>`<span class="ott-badge">${o}</span>`).join('')
            : `<span class="ott-badge none">${t('streamingNone')}</span>`}
        </div>
        <div class="ticket-actions">
          <a class="imdb-link" href="${movie.imdbUrl}" target="_blank" rel="noopener">${t('imdbLinkText')}</a>
          <button type="button" class="save-btn">${t('saveBtn')}</button>
        </div>
      </div>
    `;
    const saveBtnEl = t2.querySelector('.save-btn');
    saveBtnEl.onclick = ()=>{
      saveRecToGallery(movie, reasons);
      saveRecs();
      renderRecsGallery();
      saveBtnEl.textContent = t('savedBtn');
      saveBtnEl.classList.add('saved');
      saveBtnEl.disabled = true;
    };
    list.appendChild(t2);
  });

  $('#disclaimerText').textContent = t('disclaimerText');

  history.unshift({id: Date.now(), title: state.movie.title, rating: state.rating, date: new Date().toLocaleDateString(t('dateLocale'))});
  renderHistory();
  saveHistory();
  submitReviewToServer();
  showStep(5);
}

/* 서비스 개선을 위해 리뷰(별점·세부평가·리뷰 텍스트)를 서버에도 저장해요.
   저장이 설정 안 돼 있거나 실패해도 화면 동작에는 영향 없어요. */
function submitReviewToServer(){
  const genreLabels = (state.manualFilters.genres||[]).map(g=>{
    const extra = EXTRA_GENRE_CHIPS[g];
    if(extra) return t(extra.labelKey);
    return (genreMap && genreMap[g]) || String(g);
  });
  const payload = {
    title: state.movie.title,
    tmdbId: state.movie.tmdbId,
    rating: state.rating,
    aspects: state.aspects,
    reviewText: state.reviewText,
    lang: state.lang,
    filters: {
      genres: genreLabels,
      runtime: state.manualFilters.runtime,
      type: state.manualFilters.type,
      decade: state.manualFilters.decade,
    },
  };
  fetch('/api/save-review', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(payload),
  }).catch(()=>{});
}

async function runRecommend(){
  if(!serverAvailable){
    alert(t('alertNoServer'));
    return;
  }
  const btn = $('#toStep5');
  const skipBtn = $('#skipRefine');
  btn.disabled = true;
  skipBtn.disabled = true;
  const originalText = btn.textContent;
  btn.textContent = t('recommendLoading');
  try{
    const positive = state.rating >= 3;
    const result = await computeTmdbRecommendations();
    renderResult(result, positive);
  }catch(e){
    alert(t('alertRecommendFail'));
  }finally{
    btn.disabled = false;
    skipBtn.disabled = false;
    btn.textContent = originalText;
  }
}

/* =========================================================
   기록 (개인 저장소 — 리뷰 히스토리만 저장, 영화 데이터는 저장하지 않음)
   ========================================================= */
function renderHistory(){
  const box = $('#historyBox');
  if(!historyOpen){ box.style.display='none'; return; }
  box.style.display='block';
  const list = $('#historyList');
  list.innerHTML='';
  if(history.length===0){
    list.innerHTML = `<div class="empty-note">${t('historyEmptyAll')}</div>`;
    return;
  }
  history.slice(0,8).forEach(h=>{
    const row=document.createElement('div');
    row.className='hist-item';
    const starStr = starGlyphs(h.rating);
    row.innerHTML = `
      <span class="hist-main">
        <span>${h.title}</span>
        <span class="hstars">${starStr} <span style="color:var(--text-dim); font-size:11.5px;">${h.date}</span></span>
      </span>
    `;
    const delBtn = document.createElement('button');
    delBtn.type = 'button';
    delBtn.className = 'delete-x';
    delBtn.setAttribute('aria-label', t('deleteBtn'));
    delBtn.textContent = '×';
    delBtn.onclick = ()=>{
      history = history.filter(x=> x.id !== h.id);
      saveHistory();
      renderHistory();
    };
    row.appendChild(delBtn);
    list.appendChild(row);
  });
}
function saveHistory(){
  try{ localStorage.setItem('cinerec:history', JSON.stringify(history)); }catch(e){}
}
function loadHistory(){
  try{
    const raw = localStorage.getItem('cinerec:history');
    if(raw){ history = JSON.parse(raw); renderHistory(); }
  }catch(e){}
}

/* =========================================================
   내가 추천받은 영화 갤러리 — 가입 없이, 이 브라우저에 장르별로 모아서 보여줘요
   ========================================================= */
function saveRecToGallery(movie, reasons){
  if(!movie.id) return;
  const idx = savedRecs.findIndex(r=> r.id === movie.id);
  if(idx !== -1) savedRecs.splice(idx, 1);
  savedRecs.unshift({
    id: movie.id, title: movie.title, year: movie.year,
    poster: movie.poster, imdbUrl: movie.imdbUrl,
    genreIds: movie.genreIds || [], savedAt: Date.now(),
    reasons: (reasons||[]).slice(0,2),
  });
  if(savedRecs.length > 200) savedRecs = savedRecs.slice(0, 200);
}

function renderRecsGallery(){
  const box = $('#recsGallery');
  if(!recsGalleryOpen){ box.style.display='none'; return; }
  box.style.display='block';

  $('#sortDateBtn').classList.toggle('selected', recsSortMode==='date');
  $('#sortGenreBtn').classList.toggle('selected', recsSortMode==='genre');

  const tabsBox = $('#recsGenreTabs');
  tabsBox.innerHTML = '';
  const grid = $('#recsGrid');
  grid.innerHTML = '';

  if(savedRecs.length===0){
    grid.innerHTML = `<div class="empty-note">${t('recsEmptyAll')}</div>`;
    return;
  }

  let list = savedRecs;

  if(recsSortMode==='genre'){
    const genreIdsPresent = new Set();
    savedRecs.forEach(r=> (r.genreIds||[]).forEach(g=> genreIdsPresent.add(g)));

    const allTab = document.createElement('button');
    allTab.type = 'button';
    allTab.className = 'genre-tab' + (recsGenreFilter==='all' ? ' selected' : '');
    allTab.textContent = t('recsFilterAll');
    allTab.onclick = ()=>{ recsGenreFilter = 'all'; renderRecsGallery(); };
    tabsBox.appendChild(allTab);
    [...genreIdsPresent].forEach(gid=>{
      const name = genreMap && genreMap[gid];
      if(!name) return;
      const tab = document.createElement('button');
      tab.type = 'button';
      tab.className = 'genre-tab' + (recsGenreFilter===gid ? ' selected' : '');
      tab.textContent = name;
      tab.onclick = ()=>{ recsGenreFilter = gid; renderRecsGallery(); };
      tabsBox.appendChild(tab);
    });

    list = recsGenreFilter==='all' ? savedRecs : savedRecs.filter(r=> (r.genreIds||[]).includes(recsGenreFilter));
  } else {
    list = [...savedRecs].sort((a,b)=> (b.savedAt||0) - (a.savedAt||0));
  }

  if(list.length===0){
    grid.innerHTML = `<div class="empty-note">${t('recsEmptyFiltered')}</div>`;
    return;
  }
  list.forEach(r=>{
    const wrap = document.createElement('div');
    wrap.className = 'rec-card-wrap';
    const a = document.createElement('a');
    a.className = 'rec-card';
    a.href = r.imdbUrl; a.target = '_blank'; a.rel = 'noopener';
    a.innerHTML = `
      ${r.poster ? `<img src="${r.poster}" alt="">` : `<div class="noimg">CINEREC</div>`}
      <div class="t">${r.title}</div>
      ${r.reasons && r.reasons.length ? `<div class="reason">${r.reasons.join(' · ')}</div>` : ''}
    `;
    const delBtn = document.createElement('button');
    delBtn.type = 'button';
    delBtn.className = 'delete-x rec-delete';
    delBtn.setAttribute('aria-label', t('deleteBtn'));
    delBtn.textContent = '×';
    delBtn.onclick = (e)=>{
      e.preventDefault();
      e.stopPropagation();
      savedRecs = savedRecs.filter(x=> x.id !== r.id);
      saveRecs();
      renderRecsGallery();
    };
    wrap.appendChild(a);
    wrap.appendChild(delBtn);
    grid.appendChild(wrap);
  });
}

function saveRecs(){
  try{ localStorage.setItem('cinerec:recs', JSON.stringify(savedRecs)); }catch(e){}
}
function loadRecs(){
  try{
    const raw = localStorage.getItem('cinerec:recs');
    if(raw){ savedRecs = JSON.parse(raw); renderRecsGallery(); }
  }catch(e){}
}

$('#recsGalleryBtn').onclick = ()=>{
  recsGalleryOpen = !recsGalleryOpen;
  renderRecsGallery();
  if(recsGalleryOpen) $('#recsGallery').scrollIntoView({behavior:'smooth', block:'start'});
};
$('#sortDateBtn').onclick = ()=>{ recsSortMode = 'date'; renderRecsGallery(); };
$('#sortGenreBtn').onclick = ()=>{ recsSortMode = 'genre'; renderRecsGallery(); };

$('#historyBtn').onclick = ()=>{
  historyOpen = !historyOpen;
  renderHistory();
  if(historyOpen) $('#historyBox').scrollIntoView({behavior:'smooth', block:'start'});
};

/* =========================================================
   다시 시작
   ========================================================= */
$('#restart').onclick = ()=>{
  state.movie=null; state.rating=0; state.reviewText='';
  state.aspects = Object.fromEntries(ASPECT_KEYS.map(k=>[k,3]));
  state.manualFilters = { genres:[], runtime:null, type:'all', decade:null };
  $('#search').value='';
  $('#reviewText').value='';
  $('#toStep2').disabled = true;
  $('#toStep3').disabled = true;
  $('#ratingLabel').textContent='';
  renderMovieGrid();
  renderStars();
  showStep(1);
};

/* =========================================================
   인트로 티켓 → 앱 화면 전환
   ========================================================= */
function setupIntro(){
  const intro = $('#introScreen');
  const ticket = $('#ticketBtn');
  const app = $('#appRoot');
  if(!intro || !ticket || !app) return;
  ticket.addEventListener('click', ()=>{
    intro.classList.add('hide');
    app.classList.add('show');
    setTimeout(()=>{ intro.style.display='none'; }, 450);
  }, {once:true});
}

(function init(){
  loadLang();
  applyStaticI18n();
  setupIntro();
  checkServer();
  loadRecs();
  loadHistory();
  showStep(1);
})();
