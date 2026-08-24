/* =========================================================
   i18n — 코드에 영화 데이터를 미리 넣어두지 않습니다. 모든 영화 정보는
   TMDB Search/Discover API에서 실시간으로 가져오고, 화면 문구만 여기서 번역합니다.
   ========================================================= */
const I18N = {
  ko: {
    pageTitle: 'CineRec — 영화 리뷰 & 맞춤 추천',
    eyebrow: '장편·독립·단편 영화 DB 수록',
    tagline: '영화를 보고 별점과 리뷰를 남기면, 9가지 항목으로 분석해서<br>TMDB의 전 세계 영화 데이터베이스에서 실시간으로 취향에 맞는 다음 영화를 찾아드려요.',
    statusChecking: '서버 연동 상태 확인 중…',
    statusOn: '서버 연동 켜짐 - 실시간 검색·추천합니다.',
    statusOff: '서버 연동 꺼짐 - 서버와 연결이 잠시 끊어졌어요. 잠깐의 휴식을 즐기는 동안, 곧 다시 영화를 찾을 수 있도록 복구할게요!',
    steps: ['01 영화 선택 🎞️', '02 별점·리뷰 ⭐️', '03 세부 평가 👓', '04 추천 결과 🍿'],
    step1Title: '🎞️ 어떤 영화를 보셨나요?',
    step1sub: 'TMDB 전체 카탈로그에서 실시간으로 검색해요.',
    searchPlaceholder: '영화 제목 검색… (예: 오디세이, 올드보이, Dune)',
    searchHint: '· 검색어에 미세한 오타가 있거나 띄어쓰기가 원본 데이터와 다르면 인식하지 못할 수 있어요.',
    emptyNoteDefault: '· 영화 제목을 입력하면 TMDB 전체 카탈로그에서 실시간으로 검색해요.',
    emptyNoteNoServer: '서버와 연결이 잠시 끊어져서 영화를 검색할 수 없어요.<br>곧 다시 찾아올 수 있도록 준비할게요!',
    loadingNote: 'TMDB에서 검색 중…',
    emptyNoteNoResults: '검색 결과가 없어요.',
    emptyNoteSearchFail: '검색에 실패했어요. 잠시 후 다시 시도해 주세요.',
    emptyNoteDetailFail: '영화 정보를 불러오지 못했어요. 다시 시도해 주세요.',
    nextBtn: '다음',
    backBtn: '이전',
    director: '감독',
    cast: '출연',
    unknownDirector: '정보 없음',
    step2sub: '별점을 매긴 후 짧게 리뷰를 남겨주시면 영화 추천에 반영할게요!',
    reviewPlaceholder: '예: 배우들 연기가 정말 인상적이었고 음악도 몰입감을 더해줬어요. 다만 후반부 각본이 좀 늘어지는 느낌...',
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
    recommendLoading: 'TMDB에서 실시간 조회 중…',
    step4Title: '이런 영화는 어떠세요?',
    verdictPositive: (title, likedStr) => `“<b>${title}</b>”에서 <b>${likedStr}</b>을(를) 특히 좋게 보신 것 같아요. TMDB에서 실시간으로 비슷한 매력의 영화를 찾아봤어요.`,
    verdictNegative: (title, dislikedStr) => `“<b>${title}</b>”에서 <b>${dislikedStr}</b>이(가) 아쉬우셨던 것 같아요. 그 부분이 다른 결의 영화를 TMDB에서 찾아봤어요.`,
    verdictMismatchPositive: '영화를 재미있게 보셨군요!',
    noneLabel: '없음',
    noResultsFound: '조건에 맞는 추천작을 찾지 못했어요. 다른 영화로 다시 시도해보세요.',
    reasonLabel: '추천 이유',
    reasonGenreSimilar: (genres) => `장르(${genres})가 비슷해요`,
    reasonGenreDifferent: '아쉬워하신 장르와는 다른 결이에요',
    reasonSameDirector: (name) => `같은 ${name} 감독 연출`,
    reasonSameWriter: (name) => `각본가(${name})가 같아요`,
    reasonSameEditor: '편집자가 같아요',
    reasonSameComposer: (name) => `음악감독(${name})이 같아요`,
    reasonSameActor: '출연 배우가 겹쳐요',
    reasonDiffActorOk: '다른 배우진의 연기를 볼 수 있어요',
    reasonThemeSimilar: '주제·소재 키워드가 비슷해요',
    reasonDiscoverMatch: 'TMDB Discover 조건에 맞아 추천됐어요',
    reasonSimilarUsers: '사용자님과 비슷한 별점을 준 사람들이 좋아했어요.',
    streamingNone: '스트리밍 정보 없음',
    imdbLinkText: 'IMDB에서 보기 ↗',
    disclaimerText: '※ 영화 목록·감독/각본/편집/음악/배우·OTT 제공처(한국)·IMDB 링크는 전부 서버를 통해 실시간으로 받아온 TMDB Search/Discover 데이터입니다 (코드에 미리 저장된 영화 목록은 없습니다). "주제"와 "독창성"은 TMDB에 전용 데이터가 없어 키워드 유사도로 근사했습니다.',
    restartBtn: '다른 영화 리뷰하기',
    historyTitle: '내 리뷰 기록',
    alertNoServer: '서버와 연결이 잠시 끊어져서 추천을 불러올 수 없어요. 잠시 후 다시 시도해 주세요.',
    alertRecommendFail: '추천을 불러오는 중 문제가 생겼어요. 다시 시도해 주세요.',
    dateLocale: 'ko-KR',
    tmdbLang: 'ko-KR',
  },
  en: {
    pageTitle: 'CineRec — Movie Reviews & Picks',
    eyebrow: 'Feature · Indie · Short Films Included',
    tagline: 'Rate and review a movie you\'ve watched across 9 aspects,<br>and we\'ll search the entire TMDB catalog in real time for what to watch next.',
    statusChecking: 'Checking server connection…',
    statusOn: 'Server connected - searching and recommending in real time.',
    statusOff: 'Server disconnected - we lost the connection for a moment. Enjoy a short break while we get things running again!',
    steps: ['01 Pick a Movie 🎞️', '02 Rating & Review ⭐️', '03 Detailed Ratings 👓', '04 Recommendations 🍿'],
    step1Title: '🎞️ Which movie did you watch?',
    step1sub: "Search TMDB's entire catalog in real time.",
    searchPlaceholder: 'Search a movie title… (e.g. Oldboy, Parasite, Dune)',
    searchHint: "· Search may miss results if there's a small typo or the spacing doesn't match the original title.",
    emptyNoteDefault: '· Type a movie title to search the full TMDB catalog in real time.',
    emptyNoteNoServer: 'The connection dropped for a moment, so movie search isn\'t available.<br>We\'ll have it back up again soon!',
    loadingNote: 'Searching TMDB…',
    emptyNoteNoResults: 'No results found.',
    emptyNoteSearchFail: 'Search failed. Please try again in a moment.',
    emptyNoteDetailFail: 'Could not load movie details. Please try again.',
    nextBtn: 'Next',
    backBtn: 'Back',
    director: 'Director',
    cast: 'Cast',
    unknownDirector: 'Unknown',
    step2sub: 'Rate it and add a short review — we\'ll use it to shape your recommendations!',
    reviewPlaceholder: 'e.g. The acting was really impressive and the music pulled me in. Though the script dragged a bit in the second half...',
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
    recommendLoading: 'Fetching from TMDB…',
    step4Title: 'How about these movies?',
    verdictPositive: (title, likedStr) => `Looks like you especially loved <b>${likedStr}</b> in "<b>${title}</b>". We searched TMDB in real time for movies with similar appeal.`,
    verdictNegative: (title, dislikedStr) => `Seems like <b>${dislikedStr}</b> fell a bit short in "<b>${title}</b>". We found TMDB movies with a different take on that.`,
    verdictMismatchPositive: 'Looks like you actually enjoyed the movie!',
    noneLabel: 'None',
    noResultsFound: 'No matching recommendations found. Try a different movie.',
    reasonLabel: 'Why this pick',
    reasonGenreSimilar: (genres) => `Similar genre (${genres})`,
    reasonGenreDifferent: 'A different genre from the one you disliked',
    reasonSameDirector: (name) => `Directed by ${name}, same as before`,
    reasonSameWriter: (name) => `Same writer (${name})`,
    reasonSameEditor: 'Same editor',
    reasonSameComposer: (name) => `Same composer (${name})`,
    reasonSameActor: 'Shares cast members',
    reasonDiffActorOk: 'A fresh cast to enjoy',
    reasonThemeSimilar: 'Similar theme/keyword match',
    reasonDiscoverMatch: 'Matched your TMDB Discover criteria',
    reasonSimilarUsers: 'People who rated it similarly to you enjoyed this.',
    streamingNone: 'No streaming info',
    imdbLinkText: 'View on IMDB ↗',
    disclaimerText: '※ Movie listings, director/writer/editor/composer/cast, OTT availability (Korea), and IMDB links are all fetched live from TMDB Search/Discover through the server (no movie data is pre-stored in the code). "Theme" and "Originality" have no dedicated TMDB data, so they\'re approximated with keyword similarity.',
    restartBtn: 'Review Another Movie',
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

function truncateOverview(text, max=110){
  if(!text) return '';
  const clean = text.trim();
  if(clean.length<=max) return clean;
  const cut = clean.slice(0, max).replace(/\s+\S*$/, '');
  return (cut || clean.slice(0,max)) + '…';
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
let state = {
  movie:null, rating:0, reviewText:'',
  aspects: Object.fromEntries(ASPECT_KEYS.map(k=>[k,3])),
  lang:'ko', lastPositive:true,
};
let history = [];
let searchDebounce = null;

const $ = (sel)=>document.querySelector(sel);
const panels = [1,2,3,4].map(n=>$('#panel-'+n));
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
  $('#searchHint').textContent = t('searchHint');
  $('#toStep2').textContent = t('nextBtn');

  $('#step2sub').textContent = t('step2sub');
  $('#reviewText').placeholder = t('reviewPlaceholder');
  $('#back1').textContent = t('backBtn');
  $('#toStep3').textContent = t('nextBtn');

  $('#step3Title').textContent = t('step3Title');
  $('#back2').textContent = t('backBtn');
  $('#toStep4').textContent = t('recommendBtn');

  $('#step4Title').textContent = t('step4Title');
  $('#restart').textContent = t('restartBtn');

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
    grid.innerHTML = `<div class="empty-note">${t('emptyNoteDefault')}</div>`;
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
function renderAspects(){
  const c = $('#aspectContainer');
  c.innerHTML='';
  ASPECT_KEYS.forEach(key=>{
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
$('#back2').onclick = ()=> showStep(2);

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

async function computeTmdbRecommendations(){
  const base = state.movie;
  const {liked, disliked} = getLikedDisliked();

  const params = { sort_by:'popularity.desc', 'vote_count.gte':50, page:1 };

  if(base.genreIds && base.genreIds.length){
    if(disliked.includes('genre')) params.without_genres = base.genreIds.join(',');
    else params.with_genres = base.genreIds.join('|');
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

  let results = (await tmdbDiscover(params)).filter(m=> m.id !== base.tmdbId);

  /* 별점이 0.5·1·4·4.5·5점처럼 뚜렷한(호불호가 분명한) 경우엔, TMDB의
     "이 영화를 본 사람들이 함께 본 영화"(recommendations) 데이터도 함께 섞어서
     "비슷한 별점을 준 사람들이 좋아한 영화" 신호로 활용합니다. */
  const SIMILAR_USER_RATINGS = [0.5, 1, 4, 4.5, 5];
  const recommendedIds = new Set();
  if(SIMILAR_USER_RATINGS.includes(state.rating)){
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
  if(results.length < 4){
    const loose = { sort_by:'popularity.desc', 'vote_count.gte':20, page:1 };
    if(base.genreIds && base.genreIds.length) loose.with_genres = base.genreIds.join('|');
    const more = (await tmdbDiscover(loose)).filter(m=> m.id !== base.tmdbId);
    const seen = new Set(results.map(r=>r.id));
    more.forEach(m=>{ if(!seen.has(m.id)){ results.push(m); seen.add(m.id); } });
  }

  const top = results.slice(0, 8);
  const detailed = await Promise.all(top.map(async (c, idx)=>{
    const [credits, providers, ext] = await Promise.all([
      apiGet('/movie/'+c.id+'/credits', {}).catch(()=>({crew:[],cast:[]})),
      tmdbWatchProviders(c.id),
      apiGet('/movie/'+c.id+'/external_ids', {}).catch(()=>({})),
    ]);
    const cr = extractCredits(credits);
    return {c, idx, ...cr, providers, imdbId: ext.imdb_id || null};
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
  });

  detailed.sort((a,b)=> b.score-a.score);
  const list = detailed.slice(0,4).map(d=>({
    movie:{
      title:d.c.title, year:(d.c.release_date||'').slice(0,4)||'?',
      director: d.director || t('unknownDirector'), actors:d.actors||[],
      poster: d.c.poster_path ? IMG_W200+d.c.poster_path : null,
      overview: d.c.overview || '',
      imdbUrl: d.imdbId ? ('https://www.imdb.com/title/'+d.imdbId+'/') : imdbSearchUrl(d.c.title),
      ott: d.providers,
    },
    score:d.score, reasons:d.reasons,
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
  result.list.forEach(({movie, reasons})=>{
    const t2 = document.createElement('div');
    t2.className='ticket';
    const posterStyle = movie.poster ? `style="background-image:url('${movie.poster}')"` : '';
    t2.innerHTML = `
      <div class="top">
        <div class="poster ${movie.poster?'':'noimg'}" ${posterStyle}></div>
        <div class="head">
          <div class="title-row"><h3><a href="${movie.imdbUrl}" target="_blank" rel="noopener">${movie.title}</a></h3><span class="year">${movie.year}</span></div>
          <div class="credits"><b>${t('director')}</b> ${movie.director || t('unknownDirector')}${movie.actors && movie.actors.length ? `　<b>${t('cast')}</b> ${movie.actors.join(', ')}` : ''}</div>
        </div>
      </div>
      <div class="full">
        ${movie.overview ? `<div class="plot">${truncateOverview(movie.overview, 160)}</div>` : ''}
        <div class="why"><b>${t('reasonLabel')}</b> · ${reasons.slice(0,3).join(' · ')}</div>
        <div class="ott-badges">
          ${movie.ott && movie.ott.length
            ? movie.ott.map(o=>`<span class="ott-badge">${o}</span>`).join('')
            : `<span class="ott-badge none">${t('streamingNone')}</span>`}
        </div>
        <a class="imdb-link" href="${movie.imdbUrl}" target="_blank" rel="noopener">${t('imdbLinkText')}</a>
      </div>
    `;
    list.appendChild(t2);
  });

  $('#disclaimerText').textContent = t('disclaimerText');

  history.unshift({title: state.movie.title, rating: state.rating, date: new Date().toLocaleDateString(t('dateLocale'))});
  renderHistory();
  saveHistory();
  showStep(4);
}

$('#toStep4').onclick = async ()=>{
  if(!serverAvailable){
    alert(t('alertNoServer'));
    return;
  }
  const btn = $('#toStep4');
  btn.disabled = true;
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
    btn.textContent = originalText;
  }
};

/* =========================================================
   기록 (개인 저장소 — 리뷰 히스토리만 저장, 영화 데이터는 저장하지 않음)
   ========================================================= */
function renderHistory(){
  const box = $('#historyBox');
  const list = $('#historyList');
  if(history.length===0){ box.style.display='none'; return; }
  box.style.display='block';
  list.innerHTML='';
  history.slice(0,8).forEach(h=>{
    const row=document.createElement('div');
    row.className='hist-item';
    const full = Math.floor(h.rating);
    const half = h.rating - full >= 0.5;
    const empty = 5 - full - (half?1:0);
    const starStr = '★'.repeat(full) + (half?'½':'') + '☆'.repeat(Math.max(0,empty));
    row.innerHTML = `<span>${h.title}</span><span class="hstars">${starStr} <span style="color:var(--text-dim); font-size:11.5px;">${h.date}</span></span>`;
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
   다시 시작
   ========================================================= */
$('#restart').onclick = ()=>{
  state.movie=null; state.rating=0; state.reviewText='';
  state.aspects = Object.fromEntries(ASPECT_KEYS.map(k=>[k,3]));
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
  loadHistory();
  showStep(1);
})();
