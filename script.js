/* =========================================================
   i18n — 코드에 영화 데이터를 미리 넣어두지 않습니다. 모든 영화 정보는
   TMDB Search/Discover API에서 실시간으로 가져오고, 화면 문구만 여기서 번역합니다.
   ========================================================= */
const I18N = {
  ko: {
    pageTitle: 'CineRec — 영화 리뷰 & 맞춤 추천',
    eyebrow: '장편·독립·단편 영화 DB 수록',
    tagline: '시청한 영화의 별점과 리뷰를 남기면, 10가지 항목으로 분석한 후<br>전세계 영화 데이터베이스에서 취향에 맞는 다음 영화를 찾아드려요.',
    statusChecking: '서버 연동 상태 확인 중…',
    statusOn: '서버 연동 켜짐 - 실시간 검색이 가능한 상태예요.',
    statusOff: '서버 연동 꺼짐 - 서버와 연결이 잠시 끊어졌어요. 잠깐의 휴식을 즐기는 동안, 곧 다시 영화를 찾을 수 있도록 복구할게요!',
    steps: ['01 영화 선택', '02 별점·리뷰', '03 세부 평가', '04 추가 선택', '05 결과'],
    step1Title: '🎞️ 어떤 영화를 보셨나요?',
    step1sub: '전체 카탈로그에서 실시간으로 검색해요.',
    searchPlaceholder: '예: 오디세이, 올드보이, Dune',
    clearSearchAria: '검색어 지우기',
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
    reviewNegativeHint: '💡 좋았던 점이든 아쉬웠던 점이든 구체적으로 적어주시면 더 정확해져요. 예를 들어 "편집이 늘어지고 지루했어요"처럼 아쉬운 점을 적으시면, 오히려 그 반대 매력(호흡이 빠르고 몰입감 있는 편집)을 가진 영화를 찾아드려요.',
    ratingLabels: {1:'별로였어요', 2:'아쉬웠어요', 3:'그럭저럭이었어요', 4:'좋았어요', 5:'최고였어요!'},
    step3subPositive: (title) => `“${title}”이 좋으셨다니 다행이에요. 10가지 항목 중 어떤 부분이 특히 마음에 드셨는지 알려주세요.`,
    step3subNegative: () => `아쉬우셨군요. 어떤 항목이 특히 별로였는지 알려주시면, 그 반대 성향의 영화를 찾아드릴게요.`,
    step3Title: '세부적으로 평가해 주세요',
    aspects: {
      direction: '연출', script: '각본 · 대사', originality: '독창성', theme: '주제',
      miseEnScene: '미장센', acting: '연기', genre: '장르', editing: '편집', music: '음악', immersion: '몰입도',
    },
    aspectDescs: {
      direction: '높게 주시면 연출력이 뛰어난 영화가 추천돼요.',
      script: '높게 주시면 대사와 각본이 탄탄한 영화가 추천돼요.',
      originality: '높은 점수를 주시면 독창적이고 신선한 소재의 영화를 찾고, 낮은 점수를 주시면 그런 소재는 피해서 좀 더 익숙하고 대중적인 이야기의 영화를 찾아드려요.',
      theme: '높게 주시면 비슷한 주제·메시지를 다루는 영화가 추천돼요.',
      miseEnScene: '높게 주시면 영상미·색감·구도가 돋보이는 영화가 추천돼요.',
      acting: '높은 점수를 주시면 같은 배우가 출연한 영화를 찾고, 낮은 점수를 주시면 그 배우 대신 다른 배우진이 나오는 영화를 찾아드려요.',
      genre: '높게 주시면 같은 장르의 영화가 추천돼요.',
      editing: '높은 점수를 주시면 같은 편집자가 참여한, 호흡이 비슷한 영화를 찾고, 낮은 점수를 주시면 그 편집자의 스타일은 피해서 추천해드려요.',
      music: '높은 점수를 주시면 같은 음악감독이 참여한 영화를 찾고, 낮은 점수를 주시면 그 음악감독의 스타일은 피해서 추천해드려요.',
      immersion: '높게 주시면 몰입감이 강한 영화가 추천돼요.',
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
    ottLabel: 'OTT',
    ottOptionAny: '상관없어요',
    ottOptionNetflix: '넷플릭스',
    ottOptionWatcha: '왓챠',
    ottOptionTving: '티빙',
    ottOptionDisney: '디즈니플러스',
    ottOptionApple: '애플TV',
    ottOptionWavve: '웨이브',
    ottOptionHulu: '훌루',
    ottOptionMax: '맥스',
    ottOptionPrime: '아마존 프라임 비디오',
    ottOptionStan: 'Stan',
    ottOptionBinge: 'BINGE',
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
    disclaimerText: (countryName) => `※ 영화 목록·감독/각본/편집/음악/배우·OTT 제공처(${countryName})·IMDB 링크는 전부 서버를 통해 실시간으로 받아온 데이터예요. "주제"와 "독창성"은 전용 데이터가 없어서 키워드 유사도로 근사했어요.`,
    resultOttSectionTitle: (names) => `🍿 ${names}에서 볼 수 있어요`,
    resultOtherSectionTitle: (names) => `${names}엔 없지만, 이런 영화는 어떠세요?`,
    restartBtn: '다른 영화 리뷰하기',
    recsGalleryBtn: '📝 추천 받았던 영화',
    recsSortDate: '날짜별로 보기',
    recsSortGenre: '장르별로 보기',
    recsSortOtt: 'OTT별로 보기',
    recsFilterNoOtt: '스트리밍 정보 없음',
    recsEmptyAll: '아직 추천받은 영화가 없어요.',
    recsTitle: '내가 추천받은 영화',
    recsFilterAll: '전체',
    recsEmptyFiltered: '이 장르로 추천받은 영화가 아직 없어요.',
    historyTitle: '내 리뷰 기록',
    alertNoServer: '서버와 연결이 잠시 끊어져서 추천을 불러올 수 없어요. 잠시 후 다시 시도해 주세요.',
    alertRecommendFail: '추천을 불러오는 중 문제가 생겼어요. 다시 시도해 주세요.',
    dateLocale: 'ko-KR',
    tmdbLang: 'ko-KR',

    modeSelectCaption: '어떤 티켓으로 시작할까요?',
    modeTicket1Label: '방금 본 영화와<br>비슷한 영화 찾기',
    modeTicket2Label: '내 취향 영화<br>빠르게 찾기',
    modeTicket3Label: '인생 영화를 통해<br>나에 대해 분석하기',
    backToModesText: '다른 방식으로 찾기',
    modeSnackRecsLabel: '🍿<br>추천 받았던 영화',
    modeSnackHistoryLabel: '🥤<br>내 리뷰 기록',

    mode2Eyebrow: '내 취향 영화 빠르게 찾기',
    mode2QuizTitle: '몇 가지만 골라주세요',
    mode2QuizSub: '별점이나 리뷰 없이, 지금 취향으로 바로 찾아드려요.',
    mode2MoodLabel: '지금 어떤 영화가 끌리세요? (복수 선택 가능)',
    mode2RuntimeLabel: '러닝타임',
    mode2DecadeLabel: '개봉연도',
    mode2OttLabel: 'OTT (복수 선택 가능)',
    mode2FameLabel: '이런 영화가 좋아요',
    mode2CastLabel: '이런 캐스팅이 좋아요',
    mode2SubmitBtn: '추천 받기',
    mode2ResultTitle: '이런 영화 어때요?',
    mode2RestartBtn: '다시 고르기',
    mode2Disclaimer: '고르신 조건에 맞춰 실시간으로 찾은 영화예요.',
    mode2ReasonText: '고르신 무드와 조건에 맞춰 추천했어요',
    mode2ReasonMood: (mood) => `"${mood}"는 분위기에 잘 맞아요`,
    mode2ReasonFameMain: '나만 안 본 것 같은, 많이 알려진 영화예요',
    mode2ReasonFameHidden: '아무도 안 본 것 같은, 숨은 영화예요',
    mode2ReasonCastFamous: '유명한 배우들이 출연해요',
    mode2ReasonCastNew: '신예 배우들 위주로 출연해요',
    moodOptions: {
      action: '신나고 짜릿한 게 좋아요', comedy: '웃고 싶어요', thriller: '몰입해서 긴장하고 싶어요',
      mystery: '추리하듯 단서를 좇고 싶어요', drama: '마음 울리는 이야기가 좋아요', horror: '짜릿하게 무서운 것도 좋아요',
      romance: '설레는 로맨스가 좋아요', scifi: '색다른 세계관에 빠지고 싶어요', fantasy: '판타지 속으로 떠나고 싶어요',
      family: '편안하게 힐링하고 싶어요', history: '묵직한 이야기에 빠지고 싶어요',
    },
    fameOptions: {
      any: '상관없어요',
      mainstream: '나만 안 본 것 같은 영화',
      hidden: '아무도 안 본 것 같은 영화',
    },
    castOptions: {
      any: '상관없어요',
      famous: '유명한 배우들이 많은 영화',
      newcomer: '신예 배우들이 나오는 영화',
    },

    mode3Eyebrow: '인생 영화를 통해 나에 대해 분석하기',
    mode3PickTitle: '🎬 인생 영화를 골라주세요',
    mode3PickSub: '3~5편 정도 고르면 더 정확하게 분석돼요. (재미로 보는 결과예요!)',
    mode3SearchPlaceholder: '예: 라라랜드, 인터스텔라, 기생충',
    mode3MinHint: (remaining) => `영화를 ${remaining}편 더 골라주세요 (최소 3편).`,
    mode3PickedLabel: '고른 영화',
    mode3SubmitBtn: '분석하기',
    mode3RestartBtn: '다시 고르기',
    mode3RecLabel: '당신에게 추천하는 영화',
    mode3ReasonTemplate: (trait) => `${trait} 사람들이 이 영화를 좋아했어요`,
    mode3NeedMore: '영화를 3편 이상 골라주세요.',
    mode3VerdictTitle: (charName) => `당신은 <span class="mode3-hl">${charName}</span> 유형이에요`,
    mode3CommonIntro: (titlesStr, traitStr) => `고르신 <b>${titlesStr}</b>의 공통점은 <b>${traitStr}</b> 장르를 좋아하신다는 점이에요.`,
    mode3CommonIntroFallback: (titlesStr) => `고르신 <b>${titlesStr}</b>에는 뚜렷한 공통점이 있었어요.`,
    mode3CharBlurbTemplate: (charName, charFilm, blurb) => `<span class="mode3-hl">${charName}</span> — 영화 &lt;${charFilm}&gt;의 인물로, ${blurb}`,
    mode3LabelPersonality: '🎭 당신은 이런 사람이에요',
    mode3LabelCompat: (charName) => `💞 당신과 잘 맞는 유형은 <span class="mode3-hl">${charName}</span> 유형이에요`,
    mode3LabelStrength: '💪 당신이 갖고 있는 큰 힘은',
    mode3LabelLifeGoal: '🧭 당신은 이런 삶을 꿈꾸고 있어요',
    mode3ShareBtn: '📤 친구에게 공유해보기',
    mode3SaveImageBtn: '🖼️ 이미지로 저장',
    mode3ShareText: (charName) => `저는 CineRec에서 인생 영화로 분석해봤더니 "${charName}" 유형이 나왔어요! 당신은 어떤 유형일까요?`,
    mode3ShareCardEyebrow: '인생 영화로 나에 대해 분석하기',
    mode3ShareCardFilm: (film) => `영화 <${film}>의 인물`,
    shareCopiedMsg: '링크가 복사됐어요! 카카오톡이나 메시지에 붙여넣어서 공유해보세요.',
    shareFailMsg: '공유하는 중 문제가 생겼어요. 잠시 후 다시 시도해 주세요.',
    imageSaveFailMsg: '이미지를 만드는 중 문제가 생겼어요. 잠시 후 다시 시도해 주세요.',
    archetypes: {
      adventurer: {title:'모험가',
        personality:'가만히 있는 걸 못 견디는 타입이에요. 새로운 자극과 도전 앞에서 오히려 눈이 반짝이고, 망설임보다 행동이 먼저 나가는 사람이죠. 계획을 세우느라 시간을 쓰기보다는 일단 몸을 던지고 나서 부딪히며 배우는 쪽에 가까워요.',
        compatibility:'계획적이고 차분한 사람과 만나면 서로의 빈틈을 잘 채워줘요. 함께 즉흥적으로 떠날 수 있는 사람이면 더할 나위 없고, 당신의 무모해 보이는 결정을 믿고 따라와 주는 사람과는 평생 갈 파트너가 될 수 있어요.',
        strength:'결단력과 추진력이에요. 남들이 재고 따지는 동안 이미 한 발짝 나가 있는 실행력이 최대 무기고, 위기 상황에서도 남들보다 빠르게 다음 선택을 내리는 순발력도 돋보이죠.',
        lifeGoal:'안정보다 경험이 남는 삶을 지향해요. 나중에 후회하는 것보다, 일단 해보고 얻은 이야기가 더 값지다고 믿는 사람이에요. 인생을 통틀어 "해봤다"는 말을 더 많이 하고 싶은 쪽이죠.',
        fanTrait:'모험심이 많고 망설임 없이 행동하는',
        chars:[
          {name:'고니', film:'타짜', blurb:'고니는 목숨보다 패를 더 소중히 여기는 것처럼 보이지만, 사실은 판 위에서만 온전히 살아있다고 느끼는 사람이에요. 평범한 삶의 속도가 그에게는 답답하게 느껴지고, 위험이 클수록 오히려 정신이 또렷해지는 타입이죠. 손을 떨면서도 베팅을 늘리는 순간, 두려움과 흥분을 동시에 즐기는 게 보여요. 계획을 세우기보다는 일단 판에 앉아보고, 상대의 표정과 흐름을 읽으며 그 자리에서 답을 찾아나가는 즉흥적인 승부사예요. 실패해도 후회보다는 다음 판을 기대하는 회복력이 강하고, 남들이 다 접을 때 오히려 자리를 지키는 배짱이 있죠. 겉으로는 가볍고 능글맞아 보이지만, 속으로는 누구보다 치열하게 계산하고 있는 사람이기도 해요. 뛰어난 손기술이나 타고난 재능보다는, 판을 떠나지 못하는 근성과 될 때까지 버텨보는 오기로 살아남는 쪽에 가깝죠. 큰돈을 잃어도 금방 털고 일어나 다음 기회를 노리는 회복탄력성은 웬만한 사람은 따라가기 힘든 수준이에요. 사실 그가 진짜 두려워하는 건 돈을 잃는 것보다, 판에서 완전히 밀려나 아무것도 아닌 사람이 되는 쪽이죠. 안정적인 삶보다 짜릿한 이야기를 남기는 삶을 택하는, 전형적인 모험가형 인물이에요.'},
          {name:'인디아나 존스', film:'레이더스: 잃어버린 성궤', blurb:'인디아나 존스는 평소엔 얌전한 고고학과 교수지만, 잃어버린 유물과 진짜 위험이 얽히는 순간 완전히 다른 사람이 돼요. 모든 경우의 수를 미리 대비하기보다, 현장에서 즉흥적으로 계획을 짜고 자신의 감과 경험을 믿고 밀어붙이는 쪽을 택하죠. 뱀이 가득한 유적이든 함정투성이 신전이든, 장애물이 클수록 오히려 더 집요해지는 성격이에요. 무모해 보이지만 실제로는 위험을 빠르게 계산하고 망설임 없이 몸을 던지는 타입이라, 같은 걸 노리는 경쟁자들보다 늘 한 발 앞서 있어요. 채찍과 페도라 뒤에 숨어 있는 건, 보상 자체보다 그 추격의 과정을 진심으로 즐기는 사람이죠. 크게 실패해도 금방 털고 일어나 다음 단서를 쫓는 회복력이 있고, 그 실패조차 이야기의 일부로 받아들이는 여유가 있어요. 혼자 해결하려 들기보다 필요할 땐 동료의 도움을 기꺼이 받아들이는 유연함도 있지만, 결정적인 순간엔 결국 자기 몸으로 부딪혀 답을 찾아내는 사람이에요. 안전한 서재보다 위험한 현장에서 더 살아있음을 느끼는, 쉼 없는 호기심과 실전 앞의 담대함을 함께 갖춘 전형적인 모험가형 인물이에요.'},
        ]},
      entertainer: {title:'분위기 메이커',
        personality:'무거운 공기를 못 참는 타입이에요. 어디서든 웃음 포인트를 찾아내고, 사람들 사이의 분위기를 자연스럽게 풀어주는 사람이죠. 정작 본인은 힘들어도 그 티를 잘 안 내고, 주변 사람들 기분부터 살피는 편이에요.',
        compatibility:'진지하고 속 깊은 사람과 있으면 서로 좋은 균형을 이뤄요. 당신의 유머에 진심으로 웃어주는 사람이면 오래갈 인연이고, 가끔은 당신의 진짜 속마음까지 물어봐주는 사람이 곁에 있으면 더 편안해질 거예요.',
        strength:'공간의 온도를 바꾸는 힘이에요. 당신이 있으면 어색함이 오래 못 버티고, 처음 만난 사람들 사이에서도 자연스럽게 대화의 물꼬를 트는 능력이 있죠.',
        lifeGoal:'심각하게 사는 것보다 즐겁게 사는 삶을 지향해요. 매일이 재밌어야 진짜 잘 살고 있는 거라 믿는 사람이에요. 훗날 돌아봤을 때 "그래도 많이 웃었다"는 기억을 남기고 싶어 하죠.',
        fanTrait:'유머 감각이 좋고 분위기를 잘 살리는',
        chars:[
          {name:'김반장', film:'극한직업', blurb:'김반장은 위장 치킨집이 잘 되는 상황마저 웃음거리로 만들어버리는, 타고난 분위기 메이커예요. 팀이 위기에 처하거나 다들 예민해져 있을 때, 누구보다 먼저 농담을 던져서 분위기를 풀어주는 역할을 자처하죠. 정작 본인이 제일 힘든 상황에서도 그 티를 잘 내지 않고, 오히려 그 순간에 더 유쾌해지는 사람이에요. 즉흥적인 순발력이 뛰어나서 예상치 못한 상황에서도 재치있는 대사나 행동으로 상황을 넘기는 데 능숙해요. 진지함보다는 능청스러움으로 사람 마음의 긴장을 풀어주는 재주가 있고, 그 덕분에 어떤 팀에 있어도 자연스럽게 중심 역할을 하게 돼요. 실없어 보이는 행동 뒤에는 의외로 동료를 살뜰히 챙기는 다정함이 숨어 있죠. 위기가 커질수록 오히려 텐션을 낮추기보다 더 과장된 유머로 정면 돌파하는 역설적인 재주도 있어요. 그래서 정작 진지하게 사과하거나 속마음을 털어놓아야 할 때는 서툴러서, 농담 뒤에 진심을 숨기는 습관이 생기기도 하죠. 심각한 상황일수록 유머로 풀어내는 이 능력이야말로 그가 가진 진짜 무기예요.'},
          {name:'지니', film:'알라딘', blurb:'지니는 몇백 년을 램프 안에 갇혀 지냈으면서도, 그 시간을 씁쓸함 대신 농담거리로 만들어버리는 사람이에요. 방 안의 공기가 무거워지는 순간을 못 견뎌서, 노래든 성대모사든 뭐든 동원해서 분위기를 먼저 풀어놓고 보는 타입이죠. 알라딘이 감당하기 힘든 상황에 놓일 때조차, 자기감정을 앞세우기보다 상대의 기분을 먼저 살피고 밝은 에너지를 유지하려 애써요. 이 유머는 아무 말이나 던지는 게 아니라, 상대를 세심하게 관찰한 끝에 지금 이 순간 필요한 게 뭔지 정확히 짚어내는 데서 나오죠. 실없어 보이는 농담들 뒤에는 친구를 위해서라면 망설임 없이 나서는 진짜 의리가 자리하고 있어요. 상황에 따라 무엇으로든 자유자재로 변신하는 유연함 덕분에, 어떤 자리에 있어도 자연스럽게 사람들의 시선을 끌고 분위기를 이끄는 존재가 돼요. 정작 자신의 소원이나 진짜 바람은 뒤로 미룬 채, 남을 웃기고 기분 좋게 만드는 일에 훨씬 더 진심인 사람이기도 하죠. 분위기를 가볍게 만드는 게 단순한 재주가 아니라, 곁에 있는 사람을 편하게 해주고 싶은 마음에서 비롯된다는 점이 이 유형을 특별하게 만들어요.'},
        ]},
      empath: {title:'감성 관찰자',
        personality:'사람과 감정의 결을 세심하게 들여다보는 타입이에요. 겉으로 드러나지 않는 마음까지 알아차리고, 깊이 있는 대화를 좋아하죠. 누군가 말투가 평소와 조금만 달라도 금방 눈치채는 편이에요.',
        compatibility:'솔직하게 감정을 표현하는 사람과 잘 맞아요. 말하지 않아도 알아주길 바라기보다, 서로 표현해주는 관계에서 더 편안함을 느껴요. 당신의 세심함을 당연하게 여기지 않고 고마워하는 사람이면 관계가 훨씬 깊어질 거예요.',
        strength:'공감 능력이에요. 사람의 진짜 마음을 읽어내는 섬세함이 당신 곁에 사람이 모이는 이유고, 힘든 이야기를 털어놓기에 가장 편한 사람으로 꼽히는 경우가 많아요.',
        lifeGoal:'얕고 넓은 관계보다 깊고 진한 관계를 지향해요. 몇 명이어도 진심으로 통하는 사람이 있으면 충분하다고 생각하는 편이에요. 관계의 숫자보다 밀도를 더 중요하게 여기죠.',
        fanTrait:'감정을 세심하게 살피고 깊은 대화를 좋아하는',
        chars:[
          {name:'미자', film:'시', blurb:'미자는 시를 쓰기 위해 세상을 다시 천천히 들여다보기 시작한 사람이에요. 화려하거나 극적인 사건보다, 나뭇잎이 떨어지는 소리나 누군가의 표정에 스치는 그늘 같은 사소한 것들에 오래 마음이 머무르는 타입이죠. 겉으로 드러내지 않는 감정까지 알아차리는 섬세함이 있어서, 주변 사람들이 말하지 않아도 그의 상태를 먼저 눈치채곤 해요. 정작 자신이 감당하기 힘든 일 앞에서는 담담해 보이려 애쓰지만, 그 안에는 누구보다 여린 마음이 자리하고 있어요. 사람을 판단하기보다 이해하려는 태도로 다가가기 때문에, 어렵고 불편한 이야기도 편하게 털어놓게 만드는 힘이 있죠. 느리더라도 자신만의 방식으로 세상을 관찰하고, 그걸 언어로 옮기려는 조용한 집요함도 갖고 있어요. 정작 자신이 가장 힘든 순간엔 누구에게도 기대지 못하고 혼자 삭이는 쪽을 택하는 사람이기도 해요. 다른 사람의 아픔은 그렇게 세심하게 알아차리면서도, 자기 안의 감정은 뒤늦게야 시로, 언어로 겨우 풀어내죠. 큰 목소리를 내진 않지만, 그 존재만으로 곁에 있는 사람의 마음을 편안하게 만들어주는 사람이에요.'},
          {name:'아멜리에', film:'아멜리에', blurb:'아멜리에는 다른 사람들이 그냥 지나치는 것들을 유독 오래 눈여겨보는 사람이에요. 실망한 사람의 축 처진 어깨나, 누군가 무심코 반복하는 사소한 습관에서 그 사람이 진짜 원하는 게 뭔지 읽어내는 눈치가 있죠. 세상에 요란하게 끼어들기보다, 조용히 관찰하는 데 훨씬 더 많은 에너지를 쓰는 타입이라 사람들의 속마음을 거의 직관적으로 알아차려요. 문제를 마주하면 정면으로 부딪히기보다, 티 나지 않게 작은 친절을 설계해서 그 사람의 삶을 슬쩍 좋은 쪽으로 밀어주는 방식을 택하죠. 이런 간접적이고 조심스러운 배려 방식에는, 돕고는 싶지만 자신이 드러나거나 상처받는 건 피하고 싶은 마음이 함께 들어있어요. 아이러니하게도 남의 숨은 감정은 그렇게 잘 읽으면서, 정작 자기 마음을 알아차리고 표현하는 데는 유난히 서툴러요. 사소한 디테일에 마음을 오래 두는 건 우연이 아니라, 작은 것에도 진짜 감정의 무게가 실려 있다는 믿음에서 나오는 태도죠. 남을 향한 세심하고 조용한 다정함이야말로, 이 유형을 가장 잘 설명하는 특징이에요.'},
        ]},
      thrillSeeker: {title:'스릴 추구자',
        personality:'적당히 무서운 걸 오히려 즐기는 타입이에요. 긴장감 있는 상황에서 심장이 뛰는 걸 좋아하고, 예측 불가능한 전개에 끌리죠. 뻔한 결말보다는 끝까지 어떻게 될지 모르는 이야기에 훨씬 몰입해요.',
        compatibility:'겁 없이 같이 달려줄 사람과 죽이 잘 맞아요. 너무 신중한 사람보다는, 그냥 같이 저지르는 사람이 편해요. 당신의 즉흥적인 제안에 "콜"이라고 바로 답해주는 사람이 최고의 짝이죠.',
        strength:'위기 앞에서 오히려 침착해지는 담대함이에요. 다른 사람이 얼어있을 때 당신은 이미 움직이고 있고, 예상 밖의 상황을 오히려 재미있는 변수로 받아들이는 여유도 있어요.',
        lifeGoal:'무난한 삶보다 짜릿한 삶을 지향해요. 예측 가능한 하루보다는, 무슨 일이 생길지 모르는 하루가 더 살아있다고 느껴요. 안전벨트를 매고도 늘 창밖 풍경보다 다음 모퉁이가 더 궁금한 사람이에요.',
        fanTrait:'긴장감을 즐기고 두려움 없이 부딪히는',
        chars:[
          {name:'서도철', film:'베테랑', blurb:'서도철은 몸을 사리는 법을 잘 모르는 형사예요. 위험한 상황일수록 한 발 물러서기보다 먼저 뛰어들어 몸으로 부딪히는 쪽을 택하고, 그 순간의 긴장감을 오히려 즐기는 듯한 여유까지 보이죠. 정석대로 움직이기보다 상황에 따라 즉흥적으로 판단하고 행동하는 스타일이라, 예측 불가능한 전개일수록 더 신이 나는 사람이에요. 겁이 없다기보다는, 두려움보다 정의감이나 승부욕이 항상 앞서는 타입에 가까워요. 상대가 강하고 위협적일수록 오히려 눈빛이 살아나고, 물러서라는 신호를 무시한 채 끝까지 밀어붙이는 뚝심이 있죠. 유쾌하고 능청스러운 평소 모습과 달리, 결정적인 순간에는 누구보다 진지하고 집요해지는 반전 매력도 있어요. 몸을 사리지 않는 만큼 다치는 일도 잦지만, 그마저 무용담처럼 넘겨버리고 오히려 몸을 사리는 쪽이 더 불편하게 느껴지는 사람이에요. 규정이나 절차보다 지금 눈앞의 상황을 해결하는 게 우선이라, 가끔은 원칙과 부딪혀도 결국 자기 방식을 밀어붙이죠. 안전한 길보다 스릴 있는 정면 승부를 택하는, 전형적인 액션형 인물이에요.'},
          {name:'이단 헌트', film:'미션 임파서블', blurb:'이단 헌트는 남들이 다 불가능하다고 말하는 임무를, 그냥 원래 그런 거라는 듯 담담하게 시작점으로 삼는 사람이에요. 더 안전한 대안이 나타나길 기다리지 않고, 작전이 중간에 어긋나면 그 자리에서 곧바로 새 계획을 즉흥적으로 짜내죠. 대부분의 사람이 실패 후 멈춰서 다시 판단하려 할 때, 그는 오히려 그 혼란을 틈타 더 빠르게 움직이는 쪽을 택해요. 망설이는 순간이야말로 가장 위험한 선택이라는 걸 경험으로 알고 있기 때문이죠. 팀을 전적으로 신뢰하면서도, 가장 위험한 순간엔 자기 자신을 서슴없이 내던지는 사람이에요. 높은 곳이든 촉박한 시간이든 무장한 상대든, 그에게는 두려운 대상이라기보다 풀어야 할 퍼즐에 가깝게 느껴지죠. 그렇다고 진짜 무모한 건 아니라서, 겉으로는 순간의 판단처럼 보여도 그 뒤에는 철저한 훈련과 계산이 깔려 있어요. 극한의 압박 속에서도 두려움 없이 움직이면서 동료에 대한 신의는 절대 저버리지 않는 그 조합이, 그를 전형적인 스릴 추구자로 만들어요.'},
        ]},
      romantic: {title:'로맨티스트',
        personality:'설렘과 감정선을 소중히 여기는 타입이에요. 작은 순간에도 의미를 부여하고, 관계 속에서 진심을 나누는 걸 중요하게 생각하죠. 기념일이나 사소한 디테일을 잘 챙기고, 잘 기억하는 편이에요.',
        compatibility:'표현에 인색하지 않은 사람과 잘 맞아요. 사소한 다정함을 알아채고 되돌려주는 사람이면 관계가 오래갈 거예요. 무뚝뚝해도 마음이 깊은 사람보다는, 표현이 자연스러운 사람과 더 오래 편안하게 지낼 수 있어요.',
        strength:'사람과 순간을 소중히 여기는 마음이에요. 당신과 함께한 기억은 유난히 더 특별하게 남고, 상대방이 자신이 소중한 사람이라고 느끼게 만드는 재주가 있죠.',
        lifeGoal:'효율적인 삶보다 마음이 남는 삶을 지향해요. 결과보다 그 과정에서 느낀 감정을 더 오래 기억하는 사람이에요. 남는 건 성과가 아니라 그때 느꼈던 감정이라고 믿는 편이죠.',
        fanTrait:'감성적이고 솔직하게 마음을 표현하는',
        chars:[
          {name:'상우', film:'봄날은 간다', blurb:'상우는 사랑 앞에서 계산이라는 걸 할 줄 모르는 사람이에요. 사운드 엔지니어답게 소리와 순간의 미묘한 결을 세심하게 담아내듯, 사랑하는 사람과의 사소한 순간들도 마음 깊이 새겨두는 타입이죠. 대나무 숲의 바람 소리를 녹음하듯, 감정 하나하나를 흘려보내지 않고 오래 간직하는 섬세함이 있어요. 관계가 변해가는 걸 눈치채면서도 쉽게 놓지 못하고, 그 안에서 계속 진심을 표현하려 애쓰는 우직함도 갖고 있죠. "어떻게 사랑이 변하니"라는 말처럼, 감정에 솔직하고 그 감정을 끝까지 지키려는 태도가 그의 가장 큰 특징이에요. 사랑이 식어가는 걸 머리로는 알아차리면서도, 마음은 쉽게 그 속도를 따라가지 못해 자꾸 뒤를 돌아보는 사람이에요. 화려한 이벤트보다 함께 있던 공기, 표정, 침묵 같은 순간의 결을 더 오래 기억하는 편이라, 이별 후에도 한참을 그 잔상 속에 머무르곤 하죠. 이별 앞에서도 원망보다는 그 시간을 소중히 여기는 마음이 더 크고, 아픔조차 의미 있는 기억으로 받아들이는 성숙함이 있어요. 화려한 로맨스보다 진심이 담긴 작은 순간들을 소중히 여기는, 전형적인 로맨티스트예요.'},
          {name:'잭 도슨', film:'타이타닉', blurb:'잭 도슨은 가진 것은 거의 없지만, 눈앞에 있는 사람과 순간에는 자신이 가진 전부를 내어주는 사람이에요. 로즈를 만나자마자 마음을 빼앗기지만, 그를 로맨티스트로 만드는 건 그 속도가 아니라 매 순간을 진심으로 대하는 태도예요. 이 관계가 현실적으로 득이 될지 손해가 될지 따지지 않고, 그저 느끼는 대로 솔직하게 표현하는 사람이라, 늘 재고 따지는 데 익숙한 사람에게는 오히려 낯설고 신선하게 다가오죠. 가장 위태로운 순간에도 자신을 지키기보다 따뜻함과 솔직함을 먼저 선택하는 사람이에요. 낯선 사람의 초상화를 그려주고, 3등석에서 춤을 추고, 계획에 없던 작은 순간들을 소중히 여기는 삶의 방식은, 그가 소유보다 경험에서 의미를 찾는 사람이라는 걸 보여줘요. 오래 지속되는 관계만이 의미 있다고 믿지 않기 때문에, 단 하룻밤도 누군가에게는 평생만큼 소중할 수 있다고 믿는 사람이죠. 계산 없이, 망설임 없이 사랑을 다해버리는 이 태도야말로 그를 전형적인 로맨티스트로 만드는 이유예요.'},
        ]},
      strategist: {title:'전략가',
        personality:'퍼즐이 맞춰지는 순간을 좋아하는 타입이에요. 단서를 하나씩 모아 스스로 답을 찾아내는 과정에서 짜릿함을 느끼죠. 결론만 듣는 것보다 그 과정을 직접 추리해보는 걸 훨씬 좋아해요.',
        compatibility:'직관적이고 자유로운 사람과 만나면 서로를 잘 보완해요. 당신의 계획에 예상 밖의 재미를 더해주는 사람이 좋은 짝이에요. 너무 즉흥적이기만 한 사람보다는, 가끔은 당신의 논리를 존중해주는 사람과 더 잘 맞아요.',
        strength:'논리적으로 파고드는 분석력이에요. 남들이 놓친 디테일을 당신은 이미 눈치채고 있고, 복잡한 상황을 차근차근 정리해서 설명하는 능력도 뛰어나죠.',
        lifeGoal:'감으로 사는 삶보다 이해하고 넘어가는 삶을 지향해요. 왜 그런지 납득이 돼야 진짜 내 것이 된다고 믿는 편이에요. 대충 아는 채로 넘어가는 걸 유난히 못 견디는 편이죠.',
        fanTrait:'논리적이고 차근차근 답을 찾아가는',
        chars:[
          {name:'평경장', film:'타짜', blurb:'평경장은 판이 시작되기도 전에 이미 승부의 흐름을 읽어내는 사람이에요. 감이나 운에 기대기보다, 상대의 습관과 표정, 판돈이 오가는 패턴을 관찰해서 다음 수를 미리 계산해두는 치밀함이 있죠. 화려한 기술보다 정확한 타이밍과 판단력으로 승부를 보는 타입이라, 겉으로는 느긋해 보여도 머릿속은 누구보다 바쁘게 돌아가고 있어요. 젊은 혈기로 무모하게 뛰어드는 사람들과 달리, 이길 수 있는 판인지 아닌지를 먼저 냉정하게 따져보는 신중함을 갖고 있죠. 오랜 경험에서 나오는 통찰력으로 상황을 꿰뚫어 보고, 필요할 땐 한 발 물러서서 손해를 최소화할 줄도 알아요. 자신이 가진 노하우를 아끼기보다, 가능성이 보이는 사람에게는 아낌없이 나눠주는 스승 같은 면모도 있어요. 말수는 적지만 한마디 한마디에 무게가 있고, 그 침착함이 오히려 상대를 긴장하게 만들어요. 감정보다 논리, 순간보다 흐름을 보는 전형적인 전략가형 인물이에요.'},
          {name:'셜록 홈즈', film:'셜록 홈즈', blurb:'셜록 홈즈는 남들이 문장 하나를 읽는 사이에 방 전체를 읽어내는 사람이에요. 어림짐작에 기대는 법이 없고, 그가 내리는 모든 결론은 누구도 놓치지 않도록 스스로 훈련해온 작은 관찰들이 차곡차곡 쌓여 만들어진 것이죠. 범죄 현장 앞에서 남들이 감정적으로 동요할 때도, 그는 오히려 한 발 떨어져 상황을 정확히 보는 데 집중해요. 사건이 풀릴 기미가 안 보일수록 오히려 눈빛이 살아나는데, 그런 순간이야말로 자신의 집요하고 체계적인 추리 방식이 진가를 발휘할 기회이기 때문이죠. 그의 자신감은 거만하게 보일 때도 있지만, 확인할 수 없는 걸 함부로 추측하지 않는다는 원칙에서 나오는, 근거 있는 확신에 가까워요. 추리 과정을 굳이 소리 내어 설명하는 것도 과시가 아니라, 논리를 한 단계씩 눈앞에 펼쳐놓아야 스스로도 완전히 납득이 되기 때문이에요. 감정에 흔들리기보다 사실과 증거를 우선하는 이 태도가, 위기 상황에서도 그를 가장 믿을 만한 사람으로 만들어주죠. 근거 없이는 결코 답을 내리지 않는 이 집요함이야말로, 그를 전형적인 전략가로 만드는 이유예요.'},
        ]},
      dreamer: {title:'몽상가',
        personality:'현실 너머의 세계를 상상하는 걸 즐기는 타입이에요. 남들이 안 된다고 할 때, 오히려 "그럼 어떻게 되면 좋을까"를 먼저 그려보죠. 머릿속에 늘 몇 가지 다른 세계가 동시에 펼쳐져 있는 편이에요.',
        compatibility:'현실감각이 있는 사람과 함께면 상상이 진짜가 될 수 있어요. 당신의 아이디어를 비웃지 않고 함께 궁금해해 주는 사람이 좋아요. 엉뚱한 이야기에도 눈을 반짝이며 끝까지 들어주는 사람과 유난히 잘 맞아요.',
        strength:'남들이 못 보는 가능성을 보는 상상력이에요. 아직 없는 걸 그려내는 힘이 당신의 무기고, 남들이 지루해하는 것에서도 새로운 이야기를 뽑아내는 재능이 있죠.',
        lifeGoal:'정해진 틀보다 상상한 걸 실현하는 삶을 지향해요. 남들이 다 가는 길보다, 아직 아무도 안 가본 길에 더 끌리는 사람이에요. 남들이 정해놓은 답보다 스스로 그린 지도를 더 믿는 편이죠.',
        fanTrait:'상상력이 풍부하고 새로운 가능성을 그리는',
        chars:[
          {name:'미소', film:'소공녀', blurb:'미소는 집을 포기하더라도 좋아하는 위스키와 담배는 포기하지 않는 사람이에요. 남들이 당연하게 여기는 안정적인 삶의 기준을 그대로 따르기보다, 자신에게 진짜 중요한 게 무엇인지를 끝까지 지키려는 사람이죠. 가진 게 적어질수록 오히려 자신이 원하는 삶의 모습이 선명해지고, 그 방향으로 망설임 없이 나아가는 뚝심이 있어요. 남들 눈에는 무모하거나 이상하게 보일 수 있는 선택도, 본인에게는 가장 합리적인 결정이라는 확신이 있죠. 옛 친구들의 집을 전전하면서도 자존심을 굽히지 않고, 자신의 방식대로 삶을 꾸려나가는 담담한 태도가 인상적이에요. 남들처럼 살지 못한다는 불안보다, 남들처럼 살아야 한다는 압박에 더 크게 답답함을 느끼는 사람이에요. 현실적인 손해를 눈앞에 두고도 자신이 그린 삶의 그림을 지우지 않는, 조용하지만 단단한 고집이 있죠. 현실에 순응하기보다, 조금 불편하더라도 자기만의 세계관을 지켜내는 걸 더 중요하게 여기는 타입이에요. 정해진 답을 따르기보다, 스스로 그린 삶의 지도를 믿는 전형적인 몽상가형 인물이에요.'},
          {name:'월터 미티', film:'월터의 상상은 현실이 된다', blurb:'월터 미티는 하루 대부분을 정교한 상상 속에서 보내는 사람이에요. 눈앞의 조용한 일상 대신, 훨씬 더 용감하고 모험 가득한 자신의 모습을 머릿속으로 그려보는 데 익숙하죠. 오랫동안 그 상상은 그가 위험을 감수해볼 수 있는 유일한 공간이었는데, 어느 날 맡게 된 실제 임무가 그를 마침내 머릿속에서만 그리던 삶 쪽으로 떠밀어요. 흥미로운 건, 막상 움직이기 시작하자 공상을 만들어내던 바로 그 상상력이 현실의 불확실함을 헤쳐나가는 데 그대로 쓰인다는 점이에요. 특별한 배경이나 재능이 없어도, 그동안 원해왔던 걸 이제라도 행동으로 옮기겠다는 마음 하나면 충분했던 거죠. 실제로 위험한 상황에 놓여서도, 그는 위협보다 그 순간의 아름다움과 가능성을 먼저 알아차리는 사람이에요. 겉보기엔 평범하고 눈에 띄지 않아서 자주 과소평가되지만, 그 조용한 내면에는 누구도 짐작 못 한 야심이 자리하고 있었죠. 머릿속으로만 그리던 삶을 마침내 직접 살아보기로 한 그 결심이, 그를 전형적인 몽상가로 만들어요.'},
        ]},
      innocent: {title:'동심 지킴이',
        personality:'따뜻하고 단순한 것에서 진짜 행복을 찾는 타입이에요. 복잡한 것보다 소박하고 다정한 이야기에 마음이 더 크게 움직이죠. 작은 친절이나 사소한 배려에도 오래 마음이 머무는 편이에요.',
        compatibility:'꾸밈없고 다정한 사람과 편안함을 느껴요. 계산 없이 진심으로 대해주는 사람이면 마음을 활짝 열게 돼요. 복잡한 관계보다는, 있는 그대로 편하게 대해줄 수 있는 사람과 훨씬 잘 맞아요.',
        strength:'사람을 있는 그대로 봐주는 순수함이에요. 당신 앞에서는 다들 방어를 내려놓게 되고, 꾸미지 않은 진심이 오히려 사람들의 마음을 여는 열쇠가 되죠.',
        lifeGoal:'복잡하고 화려한 삶보다 따뜻하고 편안한 삶을 지향해요. 큰 성취보다 소소한 행복이 쌓인 하루하루를 더 값지게 여겨요. 특별한 날이 아니어도 평범한 하루에서 행복을 찾을 줄 아는 사람이에요.',
        fanTrait:'따뜻하고 꾸밈없이 진심을 나누는',
        chars:[
          {name:'초원', film:'말아톤', blurb:'초원이는 세상을 복잡하게 해석하지 않고, 있는 그대로 순수하게 받아들이는 사람이에요. 자폐를 가진 초원이에게 세상은 계산이나 눈치의 영역이 아니라, 좋아하는 것에 온전히 몰입할 수 있는 공간이죠. 달리기를 시작하면 다른 생각 없이 그 순간에만 완전히 집중하는 힘이 있고, 그 순박한 몰입이 오히려 주변 사람들의 마음을 움직여요. 얼룩말 무늬를 좋아한다고 솔직하게 말하는 것처럼, 꾸미거나 숨기지 않고 자신의 감정을 그대로 드러내는 사람이에요. 복잡한 인간관계의 규칙을 잘 모르지만, 그 대신 누구보다 진심으로 사람을 대하는 따뜻함이 있죠. 힘든 훈련을 반복해도 불평보다는 그 반복 자체에서 작은 기쁨을 찾아내는 우직함이 있고, 그 꾸준함이 결국 자신도 몰랐던 가능성을 열어줘요. 남들이 정한 속도나 기준에 맞추려 애쓰지 않고, 자기만의 리듬으로 나아가는 데서 오히려 더 큰 안정감을 느끼는 사람이에요. 결과보다 지금 하고 있는 일 자체에서 기쁨을 느끼고, 그 순수한 태도가 주변 사람들에게 오히려 큰 위로가 돼요. 세상의 복잡한 기준 대신 자신만의 속도와 방식으로 나아가는, 전형적인 순수한 마음의 소유자예요.'},
          {name:'포레스트 검프', film:'포레스트 검프', blurb:'포레스트 검프는 역사적인 굵직한 사건들을 지나면서도, 처음 가졌던 순박한 태도를 한 번도 잃지 않는 사람이에요. 상대의 숨은 의도를 읽으려 하기보다, 자신이 보는 진실을 그대로 말하고 상대가 대하는 만큼만 되돌려주는, 계산 없는 태도로 살아가죠. 그런 태도 덕분에 자신을 향한 세상의 악의를 잘 눈치채지 못하고, 오히려 그럴 자격이 없어 보이는 사람들에게도 변함없이 다정함과 의리를 베풀어요. 특히 제니와 길에서 만난 친구들을 향한 마음은 조건 없이, 끝까지 이어지는 헌신에 가깝죠. 달리기든, 벤치에 앉아 기다리는 일이든, 약속을 지키는 일이든, 단순하고 반복되는 행동 속에서 진짜 기쁨을 찾아내고 그 꾸준함 자체를 하나의 성취로 여기는 사람이에요. 세상이 그에게 가르치려 드는 냉소적인 교훈들에도 좀처럼 물들지 않고, 어릴 때 품었던 다정한 세계관을 어른이 되어서도 그대로 지켜내죠. 세상이 어떻게 반응하든 상관없이 거리낌 없이 내어주는 이 꾸밈없는 진심이, 그를 전형적인 순수한 마음의 소유자로 만들어요.'},
        ]},
      seeker: {title:'탐구자',
        personality:'"진짜" 이야기에 끌리는 타입이에요. 꾸며진 것보다 사실 그 자체에 흥미를 느끼고, 궁금한 건 끝까지 파고드는 성격이죠. 하나를 알게 되면 그 뒤에 숨은 배경까지 찾아보는 편이에요.',
        compatibility:'호기심을 존중해주는 사람과 잘 맞아요. 당신의 질문을 귀찮아하지 않고 같이 답을 찾아주는 사람이 좋은 인연이에요. 대충 아는 척하는 사람보다는, 모르면 모른다고 솔직히 말하는 사람과 더 신뢰가 쌓여요.',
        strength:'끝까지 파고드는 집요함이에요. 대충 아는 걸로 만족 못 하는 성격이 결국 진짜 답을 찾아내고, 남들이 지나친 사실 하나까지 놓치지 않는 꼼꼼함도 있죠.',
        lifeGoal:'믿고 넘어가는 삶보다 직접 확인하는 삶을 지향해요. 남이 알려준 답보다, 스스로 찾아낸 진실을 더 신뢰하는 사람이에요. 누가 뭐라 해도 결국 제 눈으로 확인해야 직성이 풀리는 편이죠.',
        fanTrait:'호기심이 많고 끝까지 파고드는',
        chars:[
          {name:'서태윤', film:'살인의 추억', blurb:'서태윤은 감이나 직관보다 증거와 사실을 믿는 형사예요. 지방 관행에 익숙한 동료들과 달리, 서류와 자료를 하나하나 다시 확인하고 논리적으로 사건을 재구성하려는 원칙주의자 타입이죠. 하나의 단서가 나오면 그걸로 끝내지 않고, 그 뒤에 숨은 맥락까지 파고드는 집요함이 있어요. 확실하지 않은 걸 확실한 척 넘어가는 걸 극도로 싫어하고, 스스로 납득할 때까지 계속 질문을 던지는 사람이에요. 사건이 미궁에 빠질수록 오히려 더 침착하게 처음부터 다시 짚어보는 끈기를 보여주죠. 동료들이 감으로 결론을 내리고 넘어가려 할 때조차, 혼자서라도 자료를 다시 뒤져보는 고집스러움이 있어요. 감정적으로 흔들리는 순간에도 이성적인 판단을 놓지 않으려 애쓰고, 그 균형감이 그를 신뢰하게 만드는 이유이기도 해요. 결국 답을 찾지 못한 채 끝나더라도, 대충 마무리 짓기보다는 끝까지 사실을 붙들고 있으려는 태도 자체가 그를 설명해주죠. 답이 쉽게 나오지 않는 문제일수록 오히려 눈빛이 진지해지는, 전형적인 탐구자형 인물이에요.'},
          {name:'로버트 랭던', film:'다빈치 코드', blurb:'로버트 랭던은 설명되지 않은 상징이나 앞뒤가 안 맞는 역사적 사실을 그냥 넘어가지 못하는 사람이에요. 그 호기심 때문에 실제로 위험에 처하는 순간에도, 일단 눈앞에 놓인 질문은 끝까지 파헤쳐야 직성이 풀리죠. 답을 찾다 중간에 멈추는 건 그에게 선택지가 아니에요. 그럴듯한 추측이 아니라, 실제로 확인된 답을 원하는 사람이거든요. 학자로서 몸에 밴 습관대로 모든 걸 교차 검증하고, 근거가 충분히 뒷받침될 때까지는 편한 설명을 받아들이지 않아요. 강의실에서 그를 뛰어난 학자로 만들어주는 바로 그 집요함이, 쫓기는 상황에서도 침착하게 퍼즐을 풀어나가는 진짜 무기가 되죠. 소문이나 짐작보다 기록된 역사와 상징을 신뢰하는 태도 때문에, 그만 파고들라고 말리는 사람들과 부딪히는 일도 잦아요. 그를 움직이는 건 명성이나 보상이 아니라, 풀리지 않은 미스터리를 그대로 두지 못하는 불편함이에요. 스스로 확인하지 못한 답은 받아들이지 않는 이 태도야말로, 그를 전형적인 탐구자로 만드는 이유죠.'},
        ]},
      warrior: {title:'신념가',
        personality:'역사와 대의를 소중히 여기는 타입이에요. 큰 흐름 속에서 자신의 자리를 고민하고, 옳다고 믿는 걸 위해 움직이는 사람이죠. 눈앞의 이익보다 원칙을 먼저 따지는 편이에요.',
        compatibility:'신념이 뚜렷한 사람과 서로 존중하며 잘 지내요. 당신의 원칙을 이해해주는 사람이면 든든한 동료가 될 거예요. 의견이 달라도 진지하게 논쟁해줄 수 있는 사람과 오히려 더 깊은 신뢰가 쌓이죠.',
        strength:'쉽게 흔들리지 않는 뚝심이에요. 한번 옳다고 믿으면 끝까지 밀고 나가는 힘이 있고, 다수의 의견에도 쉽게 휩쓸리지 않는 소신도 갖고 있죠.',
        lifeGoal:'그냥저냥 사는 삶보다 의미 있는 삶을 지향해요. 내가 왜 이렇게 사는지 스스로 설명할 수 있어야 한다고 믿는 사람이에요. 편한 길보다 옳다고 믿는 길을 택하는 쪽에 더 가깝죠.',
        fanTrait:'신념이 뚜렷하고 옳다고 믿는 걸 밀고 나가는',
        chars:[
          {name:'송우석', film:'변호인', blurb:'송우석은 원래 시류에 맞춰 사는 게 더 편했던 사람이에요. 하지만 부당한 일을 눈앞에서 목격한 뒤로는, 손해를 감수하더라도 옳다고 믿는 쪽에 서기로 마음을 바꾼 사람이죠. 한번 신념이 생기면 주변의 반대나 위협에도 쉽게 흔들리지 않고, 오히려 더 단단해지는 뚝심이 있어요. "계란으로 바위 치기"라는 걸 알면서도, 계란이 있어야 할 자리에 서는 걸 주저하지 않는 사람이에요. 법정에서 홀로 맞서는 순간에도 두려움보다 원칙을 지켜야 한다는 확신이 앞서고, 그 확신이 다른 사람들을 움직이는 힘이 되죠. 예전의 그였다면 절대 택하지 않았을 길이라는 걸 스스로도 잘 알기에, 그 변화가 더 값지게 느껴지는 사람이에요. 편한 길과 옳은 길 사이에서 늘 후자를 택하려 하고, 그 대가를 치르는 것도 감수하는 사람이에요. 자신이 잃을 걸 계산하기보다, 이 일을 하지 않았을 때 스스로를 어떻게 볼지를 더 신경 쓰는 쪽이죠. 개인의 이익보다 더 큰 가치를 위해 움직이는, 전형적인 신념가형 인물이에요.'},
          {name:'윌리엄 월레스', film:'브레이브하트', blurb:'윌리엄 월레스는 처음엔 그저 평범하고 조용한 삶을 원했던 사람이에요. 하지만 사랑하는 사람에게 가해진 불의를 목격한 뒤로, 그 마음은 되돌릴 수 없이 바뀌어버리죠. 한번 대의를 품은 뒤로는 그걸 협상의 대상으로 두지 않고, 훨씬 더 크고 강한 군대 앞에서도 물러서기보다 맞서는 쪽을 택해요. 그의 신념은 요란한 구호로 드러나기보다, 대가가 뼈아프게 분명해지는 순간에도 흔들리지 않는 묵직한 태도로 나타나죠. 사람들을 움직이는 것도 화려한 연설이 아니라, 자신이 요구하는 걸 스스로 먼저 실천해 보이는 모습이에요. 그래서 그의 리더십은 억지로 만들어진 게 아니라, 스스로 증명해낸 것에 가깝죠. 안전이나 자기 보전은 그의 판단 기준에서 늘 원칙보다 아래에 있고, 모든 현실적인 이득이 반대 방향을 가리켜도 그 순서는 바뀌지 않아요. 결국 그는 승리보다, 옳다고 믿는 걸 끝까지 타협하지 않았다는 사실로 더 오래 기억되는 사람이죠. 승산과 상관없이 자신의 선을 지켜내는 이 태도야말로, 그를 전형적인 신념가로 만드는 이유예요.'},
        ]},
      freeSpirit: {title:'자유로운 영혼',
        personality:'한 가지 장르에 갇히지 않는 타입이에요. 다양한 이야기를 골고루 즐기면서, 그때그때 끌리는 대로 선택하는 걸 좋아하죠. 정해진 취향보다 그 순간의 기분을 더 따르는 편이에요.',
        compatibility:'당신처럼 열린 사람과 잘 맞아요. 틀에 가두지 않고 있는 그대로 봐주는 사람이면 편안한 관계가 될 거예요. 관계에 규칙을 너무 많이 정하지 않는 사람과 오히려 더 자연스럽게 오래갈 수 있어요.',
        strength:'어디에도 얽매이지 않는 유연함이에요. 상황에 맞게 자유자재로 바뀌는 적응력이 당신의 무기고, 새로운 환경에도 크게 스트레스받지 않고 잘 녹아드는 편이죠.',
        lifeGoal:'한 가지 정답보다 다양한 가능성이 열린 삶을 지향해요. 하나로 규정되지 않는 삶이 당신에게는 더 자연스러워요. 지금의 선택이 평생 갈 필요는 없다고 믿는, 유연한 인생관을 가진 사람이에요.',
        fanTrait:'틀에 얽매이지 않고 자유롭게 선택하는',
        chars:[
          {name:'혜원', film:'리틀 포레스트', blurb:'혜원은 도시에서의 삶이 뜻대로 풀리지 않자, 미련 없이 고향으로 돌아온 사람이에요. 남들이 정해놓은 성공의 기준이나 속도에 맞추기보다, 자신의 리듬대로 계절을 나고 살아가는 방식을 택했죠. 사계절 내내 텃밭을 가꾸고 직접 요리를 하면서, 정해진 답 없이 그때그때 필요한 걸 스스로 찾아가는 유연함이 있어요. 도시와 시골, 성공과 실패 같은 이분법적인 틀에 자신을 가두지 않고, 그 사이를 자유롭게 오가는 걸 자연스럽게 받아들이는 사람이에요. 지금의 선택이 평생을 결정짓는다고 생각하지 않기 때문에, 언제든 다시 방향을 바꿀 수 있다는 여유를 갖고 있죠. 도시로 돌아갈지, 여기 머물지를 두고도 조급하게 결론 내리지 않고, 스스로 납득될 때까지 충분히 시간을 두고 지켜보는 사람이에요. 남들의 시선보다 자신이 지금 무엇을 느끼고 원하는지에 더 귀를 기울이는 타입이에요. 정해진 틀 없이 자기만의 속도로 살아가는, 전형적인 자유로운 영혼이에요.'},
          {name:'크리스토퍼 매캔들리스', film:'인투 더 와일드', blurb:'크리스토퍼 매캔들리스는 안정적인 미래와 넉넉한 형편이 보장된 삶을 스스로 걸어 나온 사람이에요. 단순한 반항심 때문이 아니라, 남이 정해놓은 성공의 기준으로 사는 삶은 진짜 자신의 삶이 아니라는 확신이 있었기 때문이죠. 가진 돈을 다 기부하고 이름까지 바꾼 뒤 광야로 떠나는 건 일시적인 충동이 아니라, 온전히 자기 방식대로 살아보겠다는 단호한 결심이었어요. 정해진 계획보다 그때그때의 호기심과 직감을 따라 움직이고, 대부분의 사람이 불편해하는 불확실함을 오히려 편안하게 받아들이는 사람이에요. 여정의 모든 순간은 애초에 오래 머무를 생각 없이 스쳐 지나가도록 설계돼 있고, 그렇다고 그 시간이 덜 의미 있다고 여기지도 않아요. 이런 개방성에는 분명한 위험이 따르고, 실제로 그는 자신이 마주한 것들을 다소 과소평가하기도 했어요. 그럼에도 각본 없는 길을 택한 걸 후회하지 않는 사람이었죠. 누구의 기준도 아닌 자신만의 삶의 방식을 지켜내려는 이 태도야말로, 그를 전형적인 자유로운 영혼으로 만드는 이유예요.'},
        ]},
    },
  },
  en: {
    pageTitle: 'CineRec — Movie Reviews & Picks',
    eyebrow: 'Feature · Indie · Short Films Included',
    tagline: 'Rate and review a movie you\'ve watched across 10 aspects,<br>and we\'ll search a global movie database for what to watch next.',
    statusChecking: 'Checking server connection…',
    statusOn: 'Server connected - live search is available.',
    statusOff: 'Server disconnected - we lost the connection for a moment. Enjoy a short break while we get things running again!',
    steps: ['01 Pick a Movie', '02 Rating & Review', '03 Detailed Ratings', '04 Fine-Tune', '05 Results'],
    step1Title: '🎞️ Which movie did you watch?',
    step1sub: "Search the entire catalog in real time.",
    searchPlaceholder: 'e.g. Oldboy, Parasite, Dune',
    clearSearchAria: 'Clear search',
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
    reviewNegativeHint: '💡 Being specific — good or bad — helps a lot. If you write about what fell short (e.g. "the editing dragged and felt boring"), we\'ll actually search for movies with the opposite quality (tight, immersive editing).',
    ratingLabels: {1:'Not great', 2:'Meh', 3:'It was okay', 4:'I liked it', 5:'Loved it!'},
    step3subPositive: (title) => `Glad you enjoyed "${title}"! Tell us which of the 10 aspects stood out to you.`,
    step3subNegative: () => `Sorry to hear that. Tell us which aspects fell short and we'll find something with the opposite vibe.`,
    step3Title: 'Rate the details',
    aspects: {
      direction: 'Direction', script: 'Script & Dialogue', originality: 'Originality', theme: 'Theme',
      miseEnScene: 'Mise-en-scène', acting: 'Acting', genre: 'Genre', editing: 'Editing', music: 'Music', immersion: 'Immersion',
    },
    aspectDescs: {
      direction: 'Score it high and you\'ll get movies with strong direction.',
      script: 'Score it high and you\'ll get movies with a tight script and dialogue.',
      originality: 'A high score finds movies with original, unconventional ideas; a low score steers away from that toward something more familiar and mainstream.',
      theme: 'Score it high and you\'ll get movies with a similar theme or message.',
      miseEnScene: 'Score it high and you\'ll get movies with striking visuals, color, and composition.',
      acting: 'A high score finds movies featuring the same actors; a low score finds movies with a different cast instead.',
      genre: 'Score it high and you\'ll get movies in the same genre.',
      editing: 'A high score finds movies from the same editor with a similar pace; a low score avoids that editor\'s style instead.',
      music: 'A high score finds movies with the same composer; a low score avoids that composer\'s style instead.',
      immersion: 'Score it high and you\'ll get movies that are especially immersive.',
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
    ottLabel: 'Streaming Service',
    ottOptionAny: 'Any',
    ottOptionNetflix: 'Netflix',
    ottOptionWatcha: 'Watcha',
    ottOptionTving: 'TVING',
    ottOptionDisney: 'Disney+',
    ottOptionApple: 'Apple TV+',
    ottOptionWavve: 'Wavve',
    ottOptionHulu: 'Hulu',
    ottOptionMax: 'Max',
    ottOptionPrime: 'Amazon Prime Video',
    ottOptionStan: 'Stan',
    ottOptionBinge: 'BINGE',
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
    disclaimerText: (countryName) => `※ Movie listings, director/writer/editor/composer/cast, OTT availability (${countryName}), and IMDB links are all fetched live from the server. "Theme" and "Originality" have no dedicated data, so they're approximated with keyword similarity.`,
    resultOttSectionTitle: (names) => `🍿 Available on ${names}`,
    resultOtherSectionTitle: (names) => `Not on ${names}, but how about these?`,
    restartBtn: 'Review Another Movie',
    recsGalleryBtn: '📝 Movies Recommended to You',
    recsSortDate: 'Sort by date',
    recsSortGenre: 'Sort by genre',
    recsSortOtt: 'Sort by streaming',
    recsFilterNoOtt: 'No streaming info',
    recsEmptyAll: 'No recommendations yet.',
    recsTitle: 'Movies Recommended to You',
    recsFilterAll: 'All',
    recsEmptyFiltered: "No recommendations in this genre yet.",
    historyTitle: 'My Review History',
    alertNoServer: 'The connection dropped for a moment, so recommendations aren\'t available. Please try again shortly.',
    alertRecommendFail: 'Something went wrong while fetching recommendations. Please try again.',
    dateLocale: 'en-US',
    tmdbLang: 'en-US',

    modeSelectCaption: 'Pick your ticket to start',
    modeTicket1Label: 'Similar to What<br>I Just Watched',
    modeTicket2Label: 'Quickly Find My<br>Kind of Movie',
    modeTicket3Label: 'Analyze Me Through<br>My Favorite Films',
    backToModesText: 'Try another way',
    modeSnackRecsLabel: '🍿<br>Recommended to You',
    modeSnackHistoryLabel: '🥤<br>Review History',

    mode2Eyebrow: 'Quickly Find My Kind of Movie',
    mode2QuizTitle: 'Just answer a few things',
    mode2QuizSub: "No rating or review needed — we'll find something for your mood right now.",
    mode2MoodLabel: 'What are you in the mood for? (pick multiple)',
    mode2RuntimeLabel: 'Runtime',
    mode2DecadeLabel: 'Release Era',
    mode2OttLabel: 'Streaming Service (pick multiple)',
    mode2FameLabel: 'How well-known?',
    mode2CastLabel: 'What kind of cast?',
    mode2SubmitBtn: 'Get Recommendations',
    mode2ResultTitle: 'How about these?',
    mode2RestartBtn: 'Start Over',
    mode2Disclaimer: 'Found live, right now, based on what you picked.',
    mode2ReasonText: 'Matched to your mood and picks',
    mode2ReasonMood: (mood) => `Fits the "${mood}" mood`,
    mode2ReasonFameMain: "A well-known movie you probably haven't seen yet",
    mode2ReasonFameHidden: 'A hidden gem almost no one has seen',
    mode2ReasonCastFamous: 'Features well-known actors',
    mode2ReasonCastNew: 'Features mostly up-and-coming actors',
    moodOptions: {
      action: 'Something exciting and thrilling', comedy: 'I want to laugh', thriller: 'Something tense and gripping',
      mystery: 'I want to chase clues like a detective', drama: 'A story that moves me', horror: 'A good scare works too',
      romance: 'A swoony romance', scifi: 'I want a wild new world to dive into', fantasy: "I'm in the mood for fantasy",
      family: 'Something comforting and easy', history: 'A weighty, substantial story',
    },
    fameOptions: {
      any: 'Any',
      mainstream: "Well-known, but I haven't seen it",
      hidden: 'A hidden gem nobody knows',
    },
    castOptions: {
      any: 'Any',
      famous: 'Movies with famous actors',
      newcomer: 'Movies with up-and-coming actors',
    },

    mode3Eyebrow: 'Analyze Me Through My Favorite Films',
    mode3PickTitle: '🎬 Pick your all-time favorites',
    mode3PickSub: 'Pick 3-5 for a more accurate read. (Just for fun!)',
    mode3SearchPlaceholder: 'e.g. La La Land, Interstellar, Parasite',
    mode3MinHint: (remaining) => `Pick ${remaining} more movie${remaining>1?'s':''} (3 minimum).`,
    mode3PickedLabel: 'Your picks',
    mode3SubmitBtn: 'Analyze',
    mode3RestartBtn: 'Start Over',
    mode3RecLabel: 'Recommended for You',
    mode3ReasonTemplate: (trait) => `People who are ${trait} loved this movie`,
    mode3NeedMore: 'Pick at least 3 movies.',
    mode3VerdictTitle: (charName) => `You're the <span class="mode3-hl">${charName}</span> type`,
    mode3CommonIntro: (titlesStr, traitStr) => `What <b>${titlesStr}</b> have in common is that they're all <b>${traitStr}</b>.`,
    mode3CommonIntroFallback: (titlesStr) => `<b>${titlesStr}</b> clearly have something in common.`,
    mode3CharBlurbTemplate: (charName, charFilm, blurb) => `<span class="mode3-hl">${charName}</span> — from "${charFilm}." ${blurb}`,
    mode3LabelPersonality: "🎭 You're someone like this",
    mode3LabelCompat: (charName) => `💞 The type that suits you is <span class="mode3-hl">${charName}</span>`,
    mode3LabelStrength: '💪 The strength you carry is',
    mode3LabelLifeGoal: '🧭 This is the life you dream of',
    mode3ShareBtn: '📤 Share with a friend',
    mode3SaveImageBtn: '🖼️ Save as image',
    mode3ShareText: (charName) => `I analyzed my taste in movies on CineRec and got the "${charName}" type! What type are you?`,
    mode3ShareCardEyebrow: 'What My Favorite Movies Say About Me',
    mode3ShareCardFilm: (film) => `from "${film}"`,
    shareCopiedMsg: 'Link copied! Paste it anywhere to share.',
    shareFailMsg: 'Something went wrong while sharing. Please try again.',
    imageSaveFailMsg: 'Something went wrong while creating the image. Please try again.',
    archetypes: {
      adventurer: {title:'The Adventurer',
        personality:"You can't sit still. New thrills and challenges make your eyes light up, and you act before you hesitate. Rather than spend time planning, you'd rather jump in and learn by doing.",
        compatibility:"You balance well with someone calm and deliberate. Best of all is someone who'll drop everything and go with you on a whim, and someone who trusts your wild-seeming decisions can become a lifelong partner.",
        strength:"Decisiveness and drive. While others are still weighing options, you're already a step ahead, and you make your next move faster than most even in a crisis.",
        lifeGoal:'You value experience over stability — a good story beats a safe regret. More than anything, you want to spend your life saying "I tried it" more often than not.',
        fanTrait:'adventurous and quick to act without hesitation',
        chars:[{name:'Indiana Jones', film:'Raiders of the Lost Ark', blurb:'Indiana Jones is a mild-mannered archaeology professor by day, but the moment there\'s a lost relic and real danger involved, a completely different person takes over. He\'d rather improvise a plan on the spot than sit around preparing for every contingency, trusting his instincts and experience to get him through. Snakes, booby traps, and armed rivals don\'t stop him — if anything, the bigger the obstacle, the more determined he becomes. He\'s not reckless for its own sake; he calculates risk quickly and moves before hesitation can set in, which is exactly why he\'s usually a step ahead of everyone chasing the same prize. Underneath the whip and the fedora is someone who genuinely loves the chase more than the reward itself. He picks himself up fast after every setback, treating failure as simply part of the story rather than a reason to stop. That restless curiosity, paired with real courage under pressure, is what makes him the definitive adventurer archetype.'}]},
      entertainer: {title:'The Entertainer',
        personality:"You can't stand a heavy mood. You find the funny angle in any room and naturally loosen things up. You rarely show it when you're struggling yourself — you check on everyone else's mood first.",
        compatibility:'You balance well with someone thoughtful and grounded. Someone who genuinely laughs at your jokes is a keeper, and it helps even more to have someone who occasionally asks how you\'re really doing.',
        strength:"You change the temperature of a room. Awkward silences don't survive long around you, and you have a knack for breaking the ice even among total strangers.",
        lifeGoal:"You'd rather live joyfully than seriously — every day should have some fun in it. Looking back, you want to remember a life full of laughter more than anything else.",
        fanTrait:'funny and great at lifting the mood',
        chars:[{name:'Genie', film:'Aladdin', blurb:'Genie has spent centuries trapped in a lamp, yet somehow that\'s made him funnier, not bitter — he turns even his own confinement into a bit. The moment tension rises in a room, he\'s already there with a joke, a song, or a ridiculous impression to cut through it, because he genuinely can\'t stand watching people stay uncomfortable. Even while helping Aladdin navigate an impossible situation, he rarely lets his own feelings about it show, choosing instead to keep the energy light for everyone else. His comic timing isn\'t just noise, either — it comes from paying close attention to people and reading exactly what a moment needs. Underneath the constant jokes is real loyalty; when it matters, he shows up for his friends without hesitation. He\'s endlessly adaptable, shape-shifting into whatever the situation calls for, which makes him magnetic company in almost any group. That instinct to lighten a room and lift the people in it is exactly what makes him the entertainer archetype.'}]},
      empath: {title:'The Empath',
        personality:"You look closely at people and feelings, noticing what's left unsaid, and you love a deep conversation. Even the smallest change in someone's tone doesn't escape you.",
        compatibility:'You do well with someone who expresses their feelings openly — mutual honesty feels safer than assumed understanding. A relationship deepens fast with someone who doesn\'t take your thoughtfulness for granted.',
        strength:"Empathy. Your sensitivity to what people really feel is why they gravitate toward you, and you're often the person people trust with their hardest stories.",
        lifeGoal:"You value a few deep connections over many shallow ones. You'd rather have a handful of people who truly get you than a big circle that barely does.",
        fanTrait:'emotionally attuned and drawn to deep conversation',
        chars:[{name:'Amélie', film:'Amélie', blurb:'Amélie notices what everyone else walks past — the way someone\'s shoulders drop when they\'re disappointed, or the small habit that reveals what a stranger secretly longs for. She spends far more energy quietly observing the world than participating loudly in it, which gives her an almost uncanny read on other people\'s inner lives. Rather than confronting problems directly, she prefers to engineer small, anonymous acts of kindness that nudge someone\'s life gently back toward happiness. That indirect, careful way of caring says a lot about her — she wants to help, but she\'s cautious about being seen or vulnerable herself. Ironically, the person who understands everyone else\'s hidden feelings so well struggles to name and act on her own. Her attention to tiny details isn\'t random; it comes from a deep belief that small things carry real emotional weight. That quiet, detail-oriented tenderness toward others is what makes her the definitive empath archetype.'}]},
      thrillSeeker: {title:'The Thrill-Seeker',
        personality:"You actually enjoy a good scare. Tension makes your heart race, and unpredictable turns pull you in. A story you can't predict the ending of grips you far more than a safe, familiar one.",
        compatibility:"You click with someone fearless enough to jump in with you — overly cautious types slow you down. The best match says \"I'm in\" the moment you suggest something spontaneous.",
        strength:"A calm that shows up right when things get intense — you're already moving while others freeze, and you treat the unexpected as a fun twist rather than a problem.",
        lifeGoal:"You'd rather live an exciting life than a safe one — an unpredictable day feels more alive. Even buckled in, you're always more curious about what's around the next corner than the view outside.",
        fanTrait:'thrill-loving and fearless in the face of tension',
        chars:[{name:'Ethan Hunt', film:'Mission: Impossible', blurb:'Ethan Hunt treats an assignment everyone else calls impossible as simply the correct starting point. He doesn\'t wait for a safer option to appear — when a plan falls apart mid-mission, he improvises a new one in real time, often turning himself into the backup plan. Where most people would pause to reassess after a setback, he uses that same moment of chaos to move faster, because hesitation is what actually gets people killed in his line of work. He trusts his team completely, but he\'s also willing to take on the most dangerous part of any operation himself. Physical danger doesn\'t rattle him the way it should — heights, deadlines, and armed opposition register more as puzzles to solve than threats to fear. That said, he\'s not reckless: every stunt is backed by planning and skill, even if it looks like pure instinct from the outside. That combination of fearlessness and loyalty under extreme pressure is exactly what defines the thrill-seeker archetype.'}]},
      romantic: {title:'The Romantic',
        personality:'You treasure butterflies and emotional arcs, finding meaning in small moments and sincerity in relationships. You remember anniversaries and tiny details most people forget.',
        compatibility:"You do well with someone who isn't stingy with affection — small gestures returned in kind keep things going. You'll stay far more comfortable with someone whose warmth shows, even over someone quietly deep.",
        strength:'You cherish people and moments — memories with you tend to stay especially vivid, and you have a gift for making people feel like they truly matter.',
        lifeGoal:"You'd rather live a life that leaves feeling behind than one optimized for efficiency. You believe what stays with you isn't the outcome, but how it felt at the time.",
        fanTrait:'sentimental and openly affectionate',
        chars:[{name:'Jack Dawson', film:'Titanic', blurb:'Jack Dawson has almost nothing material to offer, yet he gives everything he has to the people and moments in front of him. He falls for Rose almost immediately, but what makes him a romantic isn\'t the speed of it — it\'s the total sincerity, the way he treats every hour together as something worth fully showing up for. He doesn\'t calculate whether a relationship is practical; he simply follows what he feels and says so directly, which is rare enough to be startling to someone used to a more guarded world. Even in the most dire circumstances, he keeps choosing warmth and honesty over self-preservation. His way of living — sketching strangers, dancing in steerage, treasuring small unplanned moments — reveals someone who finds meaning in experience rather than possessions. He doesn\'t need permanence to consider something meaningful; a single night can matter as much to him as a lifetime would to someone else. That capacity to love fully and without hedging is what makes him the archetypal romantic.'}]},
      strategist: {title:'The Strategist',
        personality:"You love the moment a puzzle clicks into place — piecing clues together to find your own answer. You'd much rather work out the reasoning yourself than just be told the conclusion.",
        compatibility:'You\'re complemented well by someone intuitive and free — they add unexpected fun to your plans. You get along even better with someone who respects your logic instead of being purely spontaneous.',
        strength:"Analytical depth — you notice the details everyone else missed, and you're just as good at breaking down something complicated so it actually makes sense.",
        lifeGoal:"You'd rather understand your way through life than just go by gut feeling. It has to make sense to really become yours — you can't stand leaving something half-understood.",
        fanTrait:'logical and methodical about finding answers',
        chars:[{name:'Sherlock Holmes', film:'Sherlock Holmes', blurb:'Sherlock Holmes reads a room the way most people read a sentence — instantly, and with far more information extracted than anyone expects. He doesn\'t rely on hunches; every conclusion he reaches is built from a chain of small observed details he\'s trained himself to never overlook. While others react emotionally to a crime scene, he stays detached enough to actually see it clearly, treating the puzzle itself as the priority. He\'s most alive when a case seems unsolvable, because that\'s exactly when his method of relentless, structured reasoning has room to prove itself. His confidence can come across as arrogance, but it\'s earned — he\'s rarely wrong precisely because he refuses to guess when he can verify. He explains his reasoning aloud not to show off, but because logic only feels complete to him once it\'s been laid out step by step. That relentless, evidence-first way of thinking is exactly what makes him the definitive strategist.'}]},
      dreamer: {title:'The Dreamer',
        personality:"You love imagining worlds beyond this one. When others say something's impossible, you're already picturing how it could work. There are usually a few different worlds running in your head at once.",
        compatibility:'Grounded people help your ideas become real — you like someone who gets curious with you instead of laughing it off. You click especially well with someone who\'ll listen to your wildest idea with genuine interest.',
        strength:"Imagination — the ability to see possibilities no one else can yet, and a knack for finding a new story in things everyone else finds boring.",
        lifeGoal:"You'd rather chase an imagined path than follow a set one. You're drawn to the road no one's walked yet, and you trust the map you drew yourself more than the one everyone else follows.",
        fanTrait:'imaginative and always picturing new possibilities',
        chars:[{name:'Walter Mitty', film:'The Secret Life of Walter Mitty', blurb:'Walter Mitty spends most of his days drifting into elaborate daydreams, imagining a braver, more adventurous version of his own life instead of living the quiet one in front of him. For a long time, that imagination was the only place he let himself take risks — until a real assignment finally pushes him to chase the extraordinary life he\'d only ever pictured in his head. What\'s notable is that once he actually starts moving, the same imaginative instinct that built his daydreams turns out to be exactly what helps him navigate real uncertainty. He doesn\'t need a dramatic backstory or special skill to begin — just a willingness to finally act on what he\'s always wanted. Even amid real danger, his instinct is still to notice beauty and possibility in the moment rather than only the risk in it. He\'s often underestimated because he seems unremarkable on the surface, but that quiet interior life turns out to hold more ambition than anyone assumed. That willingness to finally live out what he once only dreamed is what makes him the archetypal dreamer.'}]},
      innocent: {title:'The Warm Heart',
        personality:'You find real happiness in warm, simple things. A gentle story moves you more than a complicated one, and even a small kindness stays with you a long time.',
        compatibility:'You feel at ease with someone unguarded and kind — sincerity without calculation opens you right up. You do far better with someone who treats you simply and warmly than with anything complicated.',
        strength:'A purity that sees people as they are — everyone drops their guard around you, and your unfiltered sincerity is exactly what puts people at ease.',
        lifeGoal:"You'd rather live warm and comfortable than complicated and grand. Small daily happiness means more to you than one big achievement — you know how to find joy in an ordinary day.",
        fanTrait:'warm and sincere without pretense',
        chars:[{name:'Forrest Gump', film:'Forrest Gump', blurb:'Forrest Gump moves through extraordinary historical moments without ever losing the plain sincerity he started with. He doesn\'t strategize or read hidden motives into people — he simply tells the truth as he sees it and treats others exactly as they treat him, without calculation. That lack of cynicism means he rarely notices the cruelty aimed at him, and instead keeps offering warmth and loyalty even to people who don\'t deserve it. His devotion, especially to Jenny and to the friends he makes along the way, is total and largely unconditional. He finds genuine joy in simple, repeated acts — running, sitting on a bench, keeping a promise — treating consistency itself as a kind of quiet accomplishment. He\'s remarkably resistant to being changed by the world\'s harsher lessons, holding onto the same gentle worldview from childhood all the way through adulthood. That unfiltered, unguarded sincerity — offered freely regardless of how the world responds — is exactly what defines the innocent archetype.'}]},
      seeker: {title:'The Seeker',
        personality:"You're drawn to true stories — real facts interest you more than fiction, and once curious, you dig all the way down. Learning one thing usually sends you looking for the story behind it.",
        compatibility:"You do well with someone who respects your curiosity — a good match digs for answers with you instead of brushing you off. Trust builds faster with someone who admits what they don't know instead of faking it.",
        strength:"Persistence — you're never satisfied with a half-known answer, which is exactly how you find the real one, and you catch the one detail everyone else skipped past.",
        lifeGoal:"You'd rather verify things yourself than take them on faith. You trust a truth you found yourself more than any answer someone handed you — you need to see it to believe it.",
        fanTrait:'curious and relentless about digging deeper',
        chars:[{name:'Robert Langdon', film:'The Da Vinci Code', blurb:'Robert Langdon can\'t leave a symbol unexplained or a historical inconsistency unexamined, even when doing so puts him in real danger. Once a question is in front of him, stopping partway through simply isn\'t an option — he needs the actual answer, not a plausible guess. His academic training means he cross-references everything, refusing to accept a convenient explanation until the evidence genuinely supports it. That same instinct that makes him excellent in a lecture hall becomes a real asset under pressure, since he keeps working the puzzle methodically even while being chased. He trusts documented history and symbolism over rumor or assumption, which sometimes puts him at odds with people who\'d rather he stop digging. What drives him isn\'t fame or reward — it\'s a genuine discomfort with unresolved mysteries. That refusal to accept an answer he hasn\'t personally verified is exactly what makes him the definitive seeker.'}]},
      warrior: {title:'The Believer',
        personality:'You value history and cause, thinking about your place in the bigger picture and acting on what you believe is right. Principle tends to come before convenience for you.',
        compatibility:"You get along well with someone equally principled — a partner who understands your convictions becomes a steady ally. Trust actually deepens with someone who'll argue their case seriously instead of just agreeing.",
        strength:"An unshakeable resolve — once you believe something's right, you follow through, and you don't get swept up just because the majority thinks otherwise.",
        lifeGoal:"You'd rather live a meaningful life than just get by — you want to be able to explain why you live the way you do. You lean toward the right path over the easy one.",
        fanTrait:'principled and resolute about what they believe',
        chars:[{name:'William Wallace', film:'Braveheart', blurb:'William Wallace starts out wanting nothing more than a quiet, ordinary life, but injustice done to the people he loves changes that permanently. Once he commits to a cause, he doesn\'t treat it as negotiable — even facing an army with far greater numbers and resources, he chooses to stand rather than fold. His conviction isn\'t loud posturing; it\'s the kind of resolve that holds up even when the personal cost becomes brutally clear. He inspires the people around him less through speeches than through visibly living out what he asks of others, which is what makes his leadership feel earned. Comfort and self-preservation consistently rank below principle in his decision-making, even when every practical incentive points the other way. He\'s remembered less for winning than for refusing to compromise what he believed was right, even at ultimate cost. That willingness to hold a line regardless of the odds is exactly what makes him the archetypal warrior.'}]},
      freeSpirit: {title:'The Free Spirit',
        personality:"You're not boxed into one genre — you enjoy a wide range of stories and pick whatever calls to you in the moment. You follow the mood of the moment more than any fixed taste.",
        compatibility:'You do well with someone equally open — a relationship works best when neither of you tries to define the other. Things stay natural longer with someone who doesn\'t over-structure the relationship with rules.',
        strength:'Flexibility — you adapt freely to whatever the moment calls for, and you settle into new environments without much stress at all.',
        lifeGoal:"You'd rather keep your options open than settle on one right answer. A life that can't be pinned down feels more natural to you — today's choice doesn't have to last forever, and that's exactly how you like it.",
        fanTrait:'unconventional and free in how they choose',
        chars:[{name:'Christopher McCandless', film:'Into the Wild', blurb:'Christopher McCandless walks away from a comfortable, conventional future — family wealth, an expected career path — because none of it matches what he actually wants from his life. He doesn\'t reject structure out of rebellion alone; he genuinely believes that a life measured by other people\'s definitions of success isn\'t worth living. Giving away his savings and renaming himself before heading into the wilderness isn\'t a phase for him — it\'s a deliberate attempt to live entirely on his own terms. He moves through the country following curiosity and instinct rather than a fixed plan, comfortable with uncertainty in a way most people aren\'t. Every stop along his journey is temporary by design; he doesn\'t need permanence to feel like a chapter mattered. That openness comes with real risk, and he underestimates some of what he\'s up against — but even so, he never regrets choosing the unscripted path. That refusal to be defined by anyone else\'s blueprint for how to live is exactly what makes him the archetypal free spirit.'}]},
    },
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
let providerIds = {};

/* OTT 필터 — 넷플릭스 등 서비스 ID를 코드에 하드코딩하지 않고, TMDB의
   /watch/providers/movie(watch_region=선택한 국가)를 실시간 조회해서 이름으로 매칭합니다.
   (장르 ID를 genreMap으로 그때그때 받아오는 것과 동일한 패턴)
   국가마다 실제로 서비스하는 OTT가 다르므로, 후보 정의는 하나로 모아두고(OTT_CHIP_DEFS)
   국가별로 어떤 후보를 보여줄지만 OTT_CHIPS_BY_COUNTRY에서 나눠요. */
const OTT_CHIP_DEFS = {
  netflix: {key:'netflix', labelKey:'ottOptionNetflix', matchNames:['Netflix']},
  watcha: {key:'watcha', labelKey:'ottOptionWatcha', matchNames:['Watcha']},
  tving: {key:'tving', labelKey:'ottOptionTving', matchNames:['TVING']},
  disney: {key:'disney', labelKey:'ottOptionDisney', matchNames:['Disney Plus','Disney+']},
  apple: {key:'apple', labelKey:'ottOptionApple', matchNames:['Apple TV Plus','Apple TV+','Apple TV']},
  wavve: {key:'wavve', labelKey:'ottOptionWavve', matchNames:['Wavve','wavve']},
  hulu: {key:'hulu', labelKey:'ottOptionHulu', matchNames:['Hulu']},
  max: {key:'max', labelKey:'ottOptionMax', matchNames:['Max','HBO Max']},
  prime: {key:'prime', labelKey:'ottOptionPrime', matchNames:['Amazon Prime Video','Prime Video']},
  stan: {key:'stan', labelKey:'ottOptionStan', matchNames:['Stan']},
  binge: {key:'binge', labelKey:'ottOptionBinge', matchNames:['BINGE','Binge']},
};
const OTT_CHIPS_BY_COUNTRY = {
  KR: ['netflix','watcha','tving','wavve','disney','apple','prime'],
  US: ['netflix','disney','apple','hulu','max','prime'],
  GB: ['netflix','disney','apple','prime'],
  CA: ['netflix','disney','apple','prime'],
  AU: ['netflix','disney','apple','prime','stan','binge'],
};
function currentOttChips(){
  return (OTT_CHIPS_BY_COUNTRY[state.country] || OTT_CHIPS_BY_COUNTRY.KR).map(k=> OTT_CHIP_DEFS[k]);
}
/* 결과 화면에서 "구독 중인 OTT" / "그 외" 두 그룹으로 나누기 위한 헬퍼 —
   discover 자체를 OTT로 제한하지 않고, 후보마다 실시간 조회한 providers(이름 배열)를
   matchNames와 대조해서 분류해요. */
function selectedOttLabel(keys){
  return (keys||[]).map(k=> OTT_CHIP_DEFS[k] && t(OTT_CHIP_DEFS[k].labelKey)).filter(Boolean).join(', ');
}
function movieOnSelectedOtt(providerNames, keys){
  if(!keys || !keys.length) return false;
  const allowed = keys.flatMap(k=> (OTT_CHIP_DEFS[k]&&OTT_CHIP_DEFS[k].matchNames)||[]).map(n=>n.toLowerCase());
  return (providerNames||[]).some(p=> allowed.includes((p||'').toLowerCase()));
}

async function loadProviderIds(){
  try{
    const data = await apiGet('/watch/providers/movie', {watch_region: state.country});
    const results = data.results || [];
    providerIds = {};
    Object.values(OTT_CHIP_DEFS).forEach(chip=>{
      const found = results.find(p=> chip.matchNames.some(name=> (p.provider_name||'').toLowerCase() === name.toLowerCase()));
      if(found) providerIds[chip.key] = found.provider_id;
    });
  }catch(e){ providerIds = {}; }
}

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
    await loadProviderIds();
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
    const regionData = data.results && data.results[state.country];
    if(!regionData) return [];
    return [...new Set((regionData.flatrate||[]).map(p=>p.provider_name))];
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
const ASPECT_KEYS = ['direction','script','originality','theme','miseEnScene','acting','genre','editing','music','immersion'];
/* 03단계엔 핵심 6개만, 나머지(독창성/연기/편집/음악)는 04단계 "세부 평가 더 보기"로 이동 — 전부 선택 사항 */
const STEP3_ASPECT_KEYS = ['genre','direction','script','theme','miseEnScene','immersion'];
const EXTRA_ASPECT_KEYS = ['originality','acting','editing','music'];
/* 국가 선택이 화면 언어도 함께 결정해요 — 사이트엔 한/영 번역만 있어서, 한국 외 국가는
   전부 영어 UI로 보여줘요. OTT 목록·검색 결과 지역은 국가별로 정확히 반영돼요(watch_region).
   중국·일본은 번역도 없고 OTT provider 매칭도 확인 안 돼서 국가 목록에서 제외함(2026-09-20). */
const COUNTRY_LANG = { KR:'ko', US:'en', GB:'en', CA:'en', AU:'en' };
const COUNTRY_NAMES = {
  ko: { KR:'한국', US:'미국', GB:'영국', CA:'캐나다', AU:'호주' },
  en: { KR:'Korea', US:'United States', GB:'United Kingdom', CA:'Canada', AU:'Australia' },
};
let state = {
  movie:null, rating:0, reviewText:'',
  aspects: Object.fromEntries(ASPECT_KEYS.map(k=>[k,3])),
  lang:'ko', country:'KR', lastPositive:true,
  manualFilters: { genres:[], runtime:null, type:'all', decades:[], ott:[] },
};
let history = [];
let savedRecs = [];
let recsGenreFilter = 'all';
let recsOttFilter = 'all';
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
  if(typeof gtag === 'function'){
    gtag('event', 'step_view', { step_number: n });
  }
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
  $('#searchClear').setAttribute('aria-label', t('clearSearchAria'));
  $('#mode3SearchClear').setAttribute('aria-label', t('clearSearchAria'));
  $('#searchStatus').textContent = t('searchStatusNote');
  $('#searchHint').textContent = t('searchHint');
  $('#toStep2').textContent = t('nextBtn');

  $('#step2sub').textContent = t('step2sub');
  $('#reviewText').placeholder = t('reviewPlaceholder');
  $('#reviewNegativeHint').textContent = t('reviewNegativeHint');
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
  $('#ottLabel').textContent = t('ottLabel');
  $('#back3').textContent = t('backBtn');
  $('#skipRefine').textContent = t('skipBtn');
  $('#toStep5').textContent = t('recommendBtn');

  $('#step5Title').textContent = t('step5Title');
  $('#restart').textContent = t('restartBtn');

  $('#recsGalleryBtn').textContent = t('recsGalleryBtn');
  $('#sortDateBtn').textContent = t('recsSortDate');
  $('#sortGenreBtn').textContent = t('recsSortGenre');
  $('#sortOttBtn').textContent = t('recsSortOtt');
  $('#recsTitle').textContent = t('recsTitle');
  $('#historyBtn').textContent = t('historyBtn');
  $('#historyTitle').textContent = t('historyTitle');

  document.querySelectorAll('.country-select').forEach(sel=>{ sel.value = state.country; });

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

  $('#modeSelectCaption').textContent = t('modeSelectCaption');
  $('#modeTicket1Label').innerHTML = t('modeTicket1Label');
  $('#modeTicket2Label').innerHTML = t('modeTicket2Label');
  $('#modeTicket3Label').innerHTML = t('modeTicket3Label');
  $('#modeSnackRecsLabel').innerHTML = t('modeSnackRecsLabel');
  $('#modeSnackHistoryLabel').innerHTML = t('modeSnackHistoryLabel');
  ['1','2','3'].forEach(n=> $('#backToModes'+n+'Text').textContent = t('backToModesText'));

  $('#mode2Eyebrow').textContent = t('mode2Eyebrow');
  $('#mode2QuizTitle').textContent = t('mode2QuizTitle');
  $('#mode2QuizSub').textContent = t('mode2QuizSub');
  $('#mode2MoodLabel').textContent = t('mode2MoodLabel');
  $('#mode2RuntimeLabel').textContent = t('mode2RuntimeLabel');
  $('#mode2DecadeLabel').textContent = t('mode2DecadeLabel');
  $('#mode2OttLabel').textContent = t('mode2OttLabel');
  $('#mode2FameLabel').textContent = t('mode2FameLabel');
  $('#mode2CastLabel').textContent = t('mode2CastLabel');
  $('#mode2Submit').textContent = t('mode2SubmitBtn');
  $('#mode2ResultTitle').textContent = t('mode2ResultTitle');
  $('#mode2Restart').textContent = t('mode2RestartBtn');
  $('#mode2DisclaimerText').textContent = t('mode2Disclaimer');
  if($('#mode2Root').classList.contains('show')) renderMode2Quiz();

  $('#mode3Eyebrow').textContent = t('mode3Eyebrow');
  $('#mode3PickTitle').textContent = t('mode3PickTitle');
  $('#mode3PickSub').textContent = t('mode3PickSub');
  $('#mode3Search').placeholder = t('mode3SearchPlaceholder');
  $('#mode3SearchHint').textContent = t('searchHint');
  $('#mode3SearchStatus').textContent = t('searchStatusNote');
  $('#mode3Submit').textContent = t('mode3SubmitBtn');
  $('#mode3Restart').textContent = t('mode3RestartBtn');
  $('#mode3RecLabel').textContent = t('mode3RecLabel');
  $('#mode3ShareBtn').textContent = t('mode3ShareBtn');
  $('#mode3SaveImageBtn').textContent = t('mode3SaveImageBtn');
  if($('#mode3Root').classList.contains('show')) renderMode3PickedChips();
}

/* 국가를 바꾸면 언어(COUNTRY_LANG)와 OTT 지역(watch_region)이 함께 바뀌어요.
   이전 국가에서 고른 OTT 선택은 새 국가에 없는 서비스일 수 있어서 초기화해요. */
async function setCountry(code){
  if(!COUNTRY_LANG[code] || state.country===code) return;
  state.country = code;
  state.lang = COUNTRY_LANG[code];
  state.manualFilters.ott = [];
  if(typeof mode2State !== 'undefined') mode2State.ott = [];
  applyStaticI18n();
  if($('#panel-3').style.display!=='none' && state.movie){
    $('#step3sub').textContent = state.lastPositive ? t('step3subPositive')(state.movie.title) : t('step3subNegative')();
  }
  saveCountry();
  try{
    await checkServer();
  }catch(e){}
}
document.querySelectorAll('.country-select').forEach(sel=>{
  sel.addEventListener('change', ()=> setCountry(sel.value));
});

/* 국가/기록 저장은 표준 localStorage를 사용합니다 (Vercel 등 실제 배포 환경에서도 동작). */
function saveCountry(){
  try{ localStorage.setItem('cinerec:country', state.country); }catch(e){}
}
function loadCountry(){
  try{
    const v = localStorage.getItem('cinerec:country');
    if(v && COUNTRY_LANG[v]){ state.country = v; state.lang = COUNTRY_LANG[v]; }
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
  $('#searchClear').style.display = val ? 'block' : 'none';
  searchDebounce = setTimeout(()=> renderMovieGrid(val), 400);
});
$('#searchClear').addEventListener('click', ()=>{
  $('#search').value = '';
  $('#searchClear').style.display = 'none';
  renderMovieGrid('');
  $('#search').focus();
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
      <div class="aspect-desc">${t('aspectDescs')[key] || ''}</div>
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
  const decadeAnyChip = document.createElement('button');
  decadeAnyChip.type = 'button';
  decadeAnyChip.className = 'chip' + (state.manualFilters.decades.length===0 ? ' selected' : '');
  decadeAnyChip.textContent = t('decadeOptionAny');
  decadeAnyChip.onclick = ()=>{
    state.manualFilters.decades = [];
    decadeBox.querySelectorAll('.chip').forEach(c=>c.classList.remove('selected'));
    decadeAnyChip.classList.add('selected');
  };
  decadeBox.appendChild(decadeAnyChip);
  DECADE_OPTIONS.filter(opt=> opt.value!==null).forEach(opt=>{
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'chip' + (state.manualFilters.decades.includes(opt.value) ? ' selected' : '');
    chip.textContent = t(opt.key);
    chip.onclick = ()=>{
      const i = state.manualFilters.decades.indexOf(opt.value);
      if(i===-1) state.manualFilters.decades.push(opt.value);
      else state.manualFilters.decades.splice(i,1);
      chip.classList.toggle('selected');
      decadeAnyChip.classList.toggle('selected', state.manualFilters.decades.length===0);
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

  const ottBox = $('#ottChips');
  ottBox.innerHTML = '';
  const ottAnyChip = document.createElement('button');
  ottAnyChip.type = 'button';
  ottAnyChip.className = 'chip' + (state.manualFilters.ott.length===0 ? ' selected' : '');
  ottAnyChip.textContent = t('ottOptionAny');
  ottAnyChip.onclick = ()=>{
    state.manualFilters.ott = [];
    ottBox.querySelectorAll('.chip').forEach(c=>c.classList.remove('selected'));
    ottAnyChip.classList.add('selected');
  };
  ottBox.appendChild(ottAnyChip);
  currentOttChips().forEach(o=>{
    if(!providerIds[o.key]) return;
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'chip' + (state.manualFilters.ott.includes(o.key) ? ' selected' : '');
    chip.textContent = t(o.labelKey);
    chip.onclick = ()=>{
      const i = state.manualFilters.ott.indexOf(o.key);
      if(i===-1) state.manualFilters.ott.push(o.key);
      else state.manualFilters.ott.splice(i,1);
      chip.classList.toggle('selected');
      ottAnyChip.classList.toggle('selected', state.manualFilters.ott.length===0);
    };
    ottBox.appendChild(chip);
  });
}

$('#toStep4').onclick = ()=>{
  renderRefineStep();
  showStep(4);
};
$('#back3').onclick = ()=> showStep(3);
$('#skipRefine').onclick = ()=>{
  state.manualFilters = { genres:[], runtime:null, type:'all', decades:[], ott:[] };
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
  immersion: ['몰입','몰입감','빠져들','집중'],
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

/* 개봉연도를 복수 선택할 수 있어서(고전영화+2020년대처럼 이어지지 않는 조합도 가능) — TMDB discover는
   gte/lte 구간을 한 번에 하나만 받을 수 있어 한 번의 요청으로 표현이 안 돼요. 그래서 선택한 연대마다
   따로 조회해서 합쳐요. 연대를 안 골랐으면(decadeRanges 비어있음) 기존과 동일하게 한 번만 조회해요. */
function decadeDateRange(decadeValue){
  if(decadeValue === 'classic') return {'primary_release_date.lte': '1979-12-31'};
  return {'primary_release_date.gte': decadeValue+'-01-01', 'primary_release_date.lte': (decadeValue+9)+'-12-31'};
}
async function discoverAcrossDecades(baseParams, decadeRanges){
  if(!decadeRanges || !decadeRanges.length) return tmdbDiscover(baseParams);
  const seen = new Set();
  const merged = [];
  for(const range of decadeRanges){
    const results = await tmdbDiscover({...baseParams, ...range});
    results.forEach(m=>{ if(!seen.has(m.id)){ merged.push(m); seen.add(m.id); } });
  }
  return merged;
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

/* 예상 별점 — 추천작은 항상 "이 사용자가 좋아할 만한" 후보로 고른 것이므로(장르·감독·각본 등
   좋아한 항목과 겹치거나, 싫어한 장르는 애초에 피해서 조회함) 매칭 강도(score)가 강할수록 항상
   높은 쪽으로 수렴시켜요. 방금 남긴 평점이 긍정적(3점 이상)이면 그 별점 자체를 목표로 삼고,
   부정적이었다면 "그 영화의 아쉬운 점은 피하고 좋았던 점만 모은 영화"라는 뜻이므로 목표를 4.5로
   잡아요 — 그래야 별점을 낮게 줬을 때도 예상 별점이 덩달아 낮게 나오는 일이 없어요.
   매칭이 약할수록 무난한 중간값(3.5)으로 회귀시키고, 2차 신호로 사용자의 과거 리뷰 기록(history)
   평균 별점(평소 평점 성향)을 표본이 3건 이상일 때만 작은 비중(15%)으로 더해요.
   ※ 추천 이유(reasons)에는 과거 기록을 전혀 쓰지 않아요 — 예상 별점 계산에서만 참고합니다. */
function predictRating(matchScore, positive){
  const matchStrength = Math.max(0, Math.min(1, matchScore / 8));
  const target = positive ? state.rating : 4.5;
  let predicted = 3.5 + (target - 3.5) * matchStrength;
  if(history.length >= 3){
    const avgHistory = history.reduce((sum,h)=> sum + h.rating, 0) / history.length;
    predicted = predicted*0.85 + avgHistory*0.15;
  }
  predicted = Math.round(predicted*2) / 2;
  return Math.max(1, Math.min(5, predicted));
}

async function computeTmdbRecommendations(){
  const base = state.movie;
  const positive = state.rating >= 3;
  const {liked, disliked} = getLikedDisliked();
  const manual = state.manualFilters || { genres:[], runtime:null, type:'all', ott:[] };
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

  // 개봉연도(연대) 선택 — 복수 선택 가능. TMDB discover는 gte/lte 구간을 한 번에 하나만 받을 수
  // 있어서(고전영화+2020년대처럼 이어지지 않는 조합은 한 번의 요청으로 표현이 안 됨), params엔 직접
  // 안 넣고 decadeRanges로 따로 들고 있다가 discoverAcrossDecades()에서 연대마다 조회해서 합쳐요.
  const decadeRanges = (manual.decades||[]).map(decadeDateRange);

  // 영화 유형 — 단편은 짧은 러닝타임으로, 독립영화는 TMDB 키워드로 근사해요
  if(manual.type==='short'){
    params['with_runtime.lte'] = Math.min(manual.runtime || 999, 40);
    const shortKwId = await fetchKeywordId('short film');
    if(shortKwId) params.with_keywords = params.with_keywords ? params.with_keywords+'|'+shortKwId : String(shortKwId);
  }else if(manual.type==='indie'){
    const indieKwId = await fetchKeywordId('independent film');
    if(indieKwId) params.with_keywords = params.with_keywords ? params.with_keywords+'|'+indieKwId : String(indieKwId);
  }

  // OTT 선택 (직접 선택 안 했으면 건너뜀) — provider ID는 하드코딩 없이 loadProviderIds()로 실시간 조회한 값.
  // 결과 화면을 "구독 중인 OTT" / "그 외"로 나눠 보여주기 위해, discover 자체는 OTT로 제한하지 않고
  // 아래에서 OTT로 제한한 별도 조회 결과를 후보 풀에 합쳐서(부족하지 않게) 최종 분류만 여기서 해요.
  // params를 여기서 복사해야 장르·러닝타임·개봉연도·영화 유형(위에서 다 설정된 상태)이 OTT
  // 보강 조회에도 똑같이 반영돼요 — 예전엔 영화 유형 설정 "전에" 복사해서 단편/독립영화를
  // 같이 고르면 OTT 보강 조회에는 그 조건이 빠지는 버그가 있었음.
  const manualOttIds = (manual.ott||[]).map(k=> providerIds[k]).filter(Boolean);
  const ottParams = manualOttIds.length
    ? {...params, with_watch_providers: manualOttIds.join('|'), watch_region: state.country, with_watch_monetization_types: 'flatrate'}
    : null;

  let results = (await discoverAcrossDecades(params, decadeRanges)).filter(m=> m.id !== base.tmdbId);

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

  // OTT를 고르셨으면, 그 OTT로 제한한 후보를 별도로 더 뽑아요. 그냥 results 뒤에 이어붙이면
  // 인기도 높은 신작(아직 스트리밍 어디에도 없는 개봉 예정작 등)이 이미 앞자리를 다 채워서,
  // 상세 조회 대상(top)에 OTT 후보가 아예 못 들어가는 문제가 있었음(구독 중 OTT 그룹이 텅 비고
  // 스트리밍 정보 없는 영화만 나오던 버그의 원인). 그래서 따로 들고 있다가 아래에서 우선 배치함.
  let ottResults = [];
  if(ottParams){
    try{
      ottResults = (await discoverAcrossDecades(ottParams, decadeRanges)).filter(m=> m.id !== base.tmdbId);
    }catch(e){}
  }

  // 조건이 너무 좁아 결과가 부족하면 장르만 남기고 완화해서 재조회
  // (직접 고른 러닝타임·영화 유형·장르·개봉연도는 완화 단계에서도 계속 지켜요)
  if(results.length + ottResults.length < 4){
    const loose = { sort_by:'popularity.desc', 'vote_count.gte':20, page:1 };
    if(params.with_genres) loose.with_genres = params.with_genres;
    else if(base.genreIds && base.genreIds.length) loose.with_genres = base.genreIds.join('|');
    if(params['with_runtime.lte']) loose['with_runtime.lte'] = params['with_runtime.lte'];
    if(manual.type==='indie' || manual.type==='short' || selectedExtraGenres.length){
      if(params.with_keywords) loose.with_keywords = params.with_keywords;
    }
    const more = (await discoverAcrossDecades(loose, decadeRanges)).filter(m=> m.id !== base.tmdbId);
    const seen = new Set(results.map(r=>r.id));
    more.forEach(m=>{ if(!seen.has(m.id)){ results.push(m); seen.add(m.id); } });
  }

  // OTT를 고르셨으면 "구독 중"/"그 외" 두 그룹을 각각 채워야 하는데, OTT로 제한한 후보(ottResults)를
  // 먼저 넣어서 상세 조회 대상에서 밀리지 않게 하고, 일반 후보(results)를 그 뒤에 섞어 "그 외" 그룹도
  // 채울 수 있게 해요. OTT를 안 골랐으면 기존과 동일하게 results만 사용.
  const seenPool = new Set();
  const top = [];
  ottResults.slice(0, 8).concat(results.slice(0, 8)).forEach(m=>{
    if(!seenPool.has(m.id)){ top.push(m); seenPool.add(m.id); }
  });
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
    if(sameEditor && disliked.includes('editing')) score -= 1;
    if(sameComposer && liked.includes('music')){ score+=2; reasons.push(t('reasonSameComposer')(d.composer)); }
    if(sameComposer && disliked.includes('music')) score -= 1;
    if(sameActor && liked.includes('acting')){ score+=3; reasons.push(t('reasonSameActor')); }
    if(!sameActor && disliked.includes('acting')){ score+=1; reasons.push(t('reasonDiffActorOk')); }
    if(sameActor && disliked.includes('acting')) score -= 2;
    if((themeLiked) && !reasons.some(r=>r===t('reasonThemeSimilar'))){ reasons.push(t('reasonThemeSimilar')); }
    if(recommendedIds.has(d.c.id)){ score+=2; reasons.push(t('reasonSimilarUsers')); }

    if(reasons.length===0) reasons.push(t('reasonDiscoverMatch'));
    d.score = score;
    d.reasons = [...new Set(reasons)];
    d.predictedRating = predictRating(score, positive);
  });

  detailed.sort((a,b)=> b.score-a.score);
  const toCard = d=>({
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
  });

  // OTT를 골랐으면 "구독 중인 OTT" / "그 외" 두 그룹으로 나눠서 반환해요
  let list, otherList = [];
  if(manualOttIds.length){
    const onOtt = detailed.filter(d=> movieOnSelectedOtt(d.providers, manual.ott));
    const offOtt = detailed.filter(d=> !movieOnSelectedOtt(d.providers, manual.ott));
    list = onOtt.slice(0,4).map(toCard);
    otherList = offOtt.slice(0,4).map(toCard);
  }else{
    list = detailed.slice(0,4).map(toCard);
  }
  return {list, otherList, liked, disliked, ottKeys: manual.ott||[]};
}

/* .ticket 카드 마크업 — "구독 중인 OTT" 섹션과 "그 외" 섹션에서 동일하게 재사용해요 */
function buildResultTicket(movie, reasons, predictedRating){
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
  return t2;
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
  result.list.forEach(({movie, reasons, predictedRating})=> list.appendChild(buildResultTicket(movie, reasons, predictedRating)));

  // OTT를 고르셨으면 결과를 "구독 중인 OTT" / "그 외" 두 그룹으로 나눠 보여줘요
  const ottTitleEl = $('#resultOttTitle');
  const otherSection = $('#resultOtherSection');
  const otherList = $('#resultListOther');
  const ottKeys = result.ottKeys || [];
  otherList.innerHTML = '';
  if(ottKeys.length){
    const ottNames = selectedOttLabel(ottKeys);
    ottTitleEl.textContent = t('resultOttSectionTitle')(ottNames);
    ottTitleEl.style.display = '';
    if((result.otherList||[]).length){
      $('#resultOtherTitle').textContent = t('resultOtherSectionTitle')(ottNames);
      result.otherList.forEach(({movie, reasons, predictedRating})=> otherList.appendChild(buildResultTicket(movie, reasons, predictedRating)));
      otherSection.style.display = '';
    }else{
      otherSection.style.display = 'none';
    }
  }else{
    ottTitleEl.style.display = 'none';
    otherSection.style.display = 'none';
  }

  $('#disclaimerText').textContent = t('disclaimerText')(COUNTRY_NAMES[state.lang][state.country] || state.country);

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
    mode: 'similar',
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
      decades: state.manualFilters.decades,
      ott: (state.manualFilters.ott||[]).map(k=>{
        const chip = OTT_CHIP_DEFS[k];
        return chip ? t(chip.labelKey) : k;
      }),
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
    delBtn.addEventListener('click', (e)=>{
      e.preventDefault();
      e.stopPropagation();
      history = history.filter(x=> x.id !== h.id);
      saveHistory();
      row.remove();
      if(list.children.length===0) renderHistory();
    }, {once:true});
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
    genreIds: movie.genreIds || [], ott: movie.ott || [], savedAt: Date.now(),
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
  $('#sortOttBtn').classList.toggle('selected', recsSortMode==='ott');

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
  } else if(recsSortMode==='ott'){
    const ottPresent = new Set();
    let hasNoOtt = false;
    savedRecs.forEach(r=>{
      if(r.ott && r.ott.length) r.ott.forEach(o=> ottPresent.add(o));
      else hasNoOtt = true;
    });

    const allTab = document.createElement('button');
    allTab.type = 'button';
    allTab.className = 'genre-tab' + (recsOttFilter==='all' ? ' selected' : '');
    allTab.textContent = t('recsFilterAll');
    allTab.onclick = ()=>{ recsOttFilter = 'all'; renderRecsGallery(); };
    tabsBox.appendChild(allTab);
    [...ottPresent].sort().forEach(name=>{
      const tab = document.createElement('button');
      tab.type = 'button';
      tab.className = 'genre-tab' + (recsOttFilter===name ? ' selected' : '');
      tab.textContent = name;
      tab.onclick = ()=>{ recsOttFilter = name; renderRecsGallery(); };
      tabsBox.appendChild(tab);
    });
    if(hasNoOtt){
      const tab = document.createElement('button');
      tab.type = 'button';
      tab.className = 'genre-tab' + (recsOttFilter==='none' ? ' selected' : '');
      tab.textContent = t('recsFilterNoOtt');
      tab.onclick = ()=>{ recsOttFilter = 'none'; renderRecsGallery(); };
      tabsBox.appendChild(tab);
    }

    list = recsOttFilter==='all' ? savedRecs
      : recsOttFilter==='none' ? savedRecs.filter(r=> !r.ott || r.ott.length===0)
      : savedRecs.filter(r=> (r.ott||[]).includes(recsOttFilter));
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
    delBtn.addEventListener('click', (e)=>{
      e.preventDefault();
      e.stopPropagation();
      savedRecs = savedRecs.filter(x=> x.id !== r.id);
      saveRecs();
      renderRecsGallery();
    }, {once:true});
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

/* "추천 받았던 영화"·"내 리뷰 기록"은 아코디언처럼 동작 — 하나를 열면 다른 하나는 자동으로 닫혀요 */
$('#recsGalleryBtn').onclick = ()=>{
  recsGalleryOpen = !recsGalleryOpen;
  if(recsGalleryOpen) historyOpen = false;
  renderRecsGallery();
  renderHistory();
  if(recsGalleryOpen) $('#recsGallery').scrollIntoView({behavior:'smooth', block:'start'});
};
$('#sortDateBtn').onclick = ()=>{ recsSortMode = 'date'; renderRecsGallery(); };
$('#sortGenreBtn').onclick = ()=>{ recsSortMode = 'genre'; renderRecsGallery(); };
$('#sortOttBtn').onclick = ()=>{ recsSortMode = 'ott'; renderRecsGallery(); };

$('#historyBtn').onclick = ()=>{
  historyOpen = !historyOpen;
  if(historyOpen) recsGalleryOpen = false;
  renderHistory();
  renderRecsGallery();
  if(historyOpen) $('#historyBox').scrollIntoView({behavior:'smooth', block:'start'});
};

/* 결과 화면에서 처음부터 다시 시작하지 않고, 방금 고른 조건(04단계)만 다시 만지고 싶을 때 */
$('#backToStep4').onclick = ()=>{
  renderRefineStep();
  showStep(4);
};

/* =========================================================
   다시 시작
   ========================================================= */
$('#restart').onclick = ()=>{
  state.movie=null; state.rating=0; state.reviewText='';
  state.aspects = Object.fromEntries(ASPECT_KEYS.map(k=>[k,3]));
  state.manualFilters = { genres:[], runtime:null, type:'all', decades:[], ott:[] };
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
   appRoot / mode2Root / mode3Root — 셋 중 하나만 보이도록 전환
   ========================================================= */
function showRoot(id){
  ['appRoot','mode2Root','mode3Root'].forEach(rid=>{
    const el = $('#'+rid);
    if(!el) return;
    if(rid===id){
      el.style.display='block';
      void el.offsetHeight; // 강제 리플로우 — display:none→block 직후에도 opacity 트랜지션이 실제로 애니메이션되도록
      el.classList.add('show');
    }else{
      el.classList.remove('show');
      el.style.display='none';
    }
  });
  window.scrollTo(0,0);
}

/* =========================================================
   인트로 티켓 → 3장 모드 티켓 선택 → 앱 화면 전환
   ========================================================= */
function setupIntro(){
  const intro = $('#introScreen');
  const ticket = $('#ticketBtn');
  const modeSelect = $('#modeSelect');
  if(!intro || !ticket || !modeSelect) return;

  ticket.addEventListener('click', ()=>{
    $('#introCaption').style.display='none';
    ticket.style.display='none';
    modeSelect.style.display='flex';
  }, {once:true});

  function enterMode(rootId, modeNumber, onFirstEnter){
    $('#appRoot').classList.remove('gallery-only');
    intro.classList.add('hide');
    setTimeout(()=>{ intro.style.display='none'; }, 450);
    showRoot(rootId);
    if(onFirstEnter) onFirstEnter();
    if(typeof gtag === 'function') gtag('event', 'mode_select', {mode: modeNumber});
  }

  function goToModeSelect(){
    showRoot(null);
    intro.style.display='flex';
    requestAnimationFrame(()=> intro.classList.remove('hide'));
  }

  $('#modeTicket1').addEventListener('click', ()=> enterMode('appRoot', 1));
  $('#modeTicket2').addEventListener('click', ()=> enterMode('mode2Root', 2, setupMode2));
  $('#modeTicket3').addEventListener('click', ()=> enterMode('mode3Root', 3, setupMode3));

  /* 메인 티켓 화면에서 바로 "추천 받았던 영화"/"내 리뷰 기록"으로 들어가는 팝콘·콜라 버튼 —
     01~05단계 전체 플로우는 숨기고(.gallery-only) 요청한 패널만 바로 보여줘요 */
  const snackRecs = $('#modeSnackRecs');
  const snackHistory = $('#modeSnackHistory');
  if(snackRecs) snackRecs.addEventListener('click', ()=>{
    enterMode('appRoot', 1);
    $('#appRoot').classList.add('gallery-only');
    recsGalleryOpen = true; historyOpen = false;
    renderRecsGallery(); renderHistory();
  });
  if(snackHistory) snackHistory.addEventListener('click', ()=>{
    enterMode('appRoot', 1);
    $('#appRoot').classList.add('gallery-only');
    historyOpen = true; recsGalleryOpen = false;
    renderHistory(); renderRecsGallery();
  });

  ['1','2','3'].forEach(n=>{
    const btn = $('#backToModes'+n);
    if(!btn) return;
    btn.addEventListener('click', goToModeSelect);
  });

  /* 로고를 누르면 어디서든 티켓 선택 화면(첫 페이지)으로 돌아가요 */
  document.querySelectorAll('.logo-btn').forEach(btn=>{
    btn.addEventListener('click', goToModeSelect);
  });
}

/* =========================================================
   모드 2: 나와 맞는 영화 찾기 — 별점·리뷰 없이 짧은 설문으로 바로 추천
   ========================================================= */
const MOOD_OPTIONS = [
  {value:'action', genres:[28,12]},
  {value:'comedy', genres:[35]},
  {value:'thriller', genres:[53]},
  {value:'mystery', genres:[9648,80]},
  {value:'drama', genres:[18]},
  {value:'horror', genres:[27]},
  {value:'romance', genres:[10749]},
  {value:'scifi', genres:[878]},
  {value:'fantasy', genres:[14]},
  {value:'family', genres:[16,10751]},
  {value:'history', genres:[10752,36]},
];
const FAME_VALUES = ['any','mainstream','hidden'];
const CAST_VALUES = ['any','famous','newcomer'];
let mode2State = { mood:[], runtime:null, decades:[], ott:[], fame:'any', cast:'any' };
let mode2Setup = false;

function updateMode2SubmitState(){
  $('#mode2Submit').disabled = mode2State.mood.length===0;
}

function mode2RenderChipGroup(container, options, getLabel, isSelected, onSelect){
  container.innerHTML='';
  options.forEach(opt=>{
    const chip = document.createElement('button');
    chip.type='button';
    chip.className = 'chip' + (isSelected(opt) ? ' selected' : '');
    chip.textContent = getLabel(opt);
    chip.onclick = ()=>{
      onSelect(opt);
      container.querySelectorAll('.chip').forEach(c=>c.classList.remove('selected'));
      chip.classList.add('selected');
      updateMode2SubmitState();
    };
    container.appendChild(chip);
  });
}

/* 무드처럼 복수 선택이 가능한 칩 그룹 — 선택해도 다른 칩이 안 풀리고 토글만 됨 */
function mode2RenderMultiChipGroup(container, options, getLabel, getValue, selectedArr){
  container.innerHTML='';
  options.forEach(opt=>{
    const val = getValue(opt);
    const chip = document.createElement('button');
    chip.type='button';
    chip.className = 'chip' + (selectedArr.includes(val) ? ' selected' : '');
    chip.textContent = getLabel(opt);
    chip.onclick = ()=>{
      const i = selectedArr.indexOf(val);
      if(i===-1) selectedArr.push(val); else selectedArr.splice(i,1);
      chip.classList.toggle('selected');
      updateMode2SubmitState();
    };
    container.appendChild(chip);
  });
}

/* 개봉연도 — 04단계와 동일하게 복수 선택 가능 (겹치지 않는 연대를 동시에 골라도 되도록) */
function renderMode2DecadeChips(){
  const box = $('#mode2DecadeChips');
  box.innerHTML = '';
  const anyChip = document.createElement('button');
  anyChip.type = 'button';
  anyChip.className = 'chip' + (mode2State.decades.length===0 ? ' selected' : '');
  anyChip.textContent = t('decadeOptionAny');
  anyChip.onclick = ()=>{
    mode2State.decades = [];
    box.querySelectorAll('.chip').forEach(c=>c.classList.remove('selected'));
    anyChip.classList.add('selected');
  };
  box.appendChild(anyChip);
  DECADE_OPTIONS.filter(opt=> opt.value!==null).forEach(opt=>{
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'chip' + (mode2State.decades.includes(opt.value) ? ' selected' : '');
    chip.textContent = t(opt.key);
    chip.onclick = ()=>{
      const i = mode2State.decades.indexOf(opt.value);
      if(i===-1) mode2State.decades.push(opt.value); else mode2State.decades.splice(i,1);
      chip.classList.toggle('selected');
      anyChip.classList.toggle('selected', mode2State.decades.length===0);
    };
    box.appendChild(chip);
  });
}

/* OTT — 04단계와 동일하게, 하드코딩 없이 loadProviderIds()로 받아온 provider ID로 복수 선택 */
function renderMode2OttChips(){
  const box = $('#mode2OttChips');
  box.innerHTML = '';
  const anyChip = document.createElement('button');
  anyChip.type = 'button';
  anyChip.className = 'chip' + (mode2State.ott.length===0 ? ' selected' : '');
  anyChip.textContent = t('ottOptionAny');
  anyChip.onclick = ()=>{
    mode2State.ott = [];
    box.querySelectorAll('.chip').forEach(c=>c.classList.remove('selected'));
    anyChip.classList.add('selected');
  };
  box.appendChild(anyChip);
  currentOttChips().forEach(o=>{
    if(!providerIds[o.key]) return;
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'chip' + (mode2State.ott.includes(o.key) ? ' selected' : '');
    chip.textContent = t(o.labelKey);
    chip.onclick = ()=>{
      const i = mode2State.ott.indexOf(o.key);
      if(i===-1) mode2State.ott.push(o.key); else mode2State.ott.splice(i,1);
      chip.classList.toggle('selected');
      anyChip.classList.toggle('selected', mode2State.ott.length===0);
    };
    box.appendChild(chip);
  });
}

function renderMode2Quiz(){
  mode2RenderMultiChipGroup($('#mode2MoodChips'), MOOD_OPTIONS,
    (opt)=> t('moodOptions')[opt.value],
    (opt)=> opt.value,
    mode2State.mood);
  mode2RenderChipGroup($('#mode2RuntimeChips'), RUNTIME_OPTIONS,
    (opt)=> t(opt.key),
    (opt)=> mode2State.runtime===opt.value,
    (opt)=>{ mode2State.runtime = opt.value; });
  renderMode2DecadeChips();
  renderMode2OttChips();
  mode2RenderChipGroup($('#mode2FameChips'), FAME_VALUES,
    (v)=> t('fameOptions')[v],
    (v)=> mode2State.fame===v,
    (v)=>{ mode2State.fame = v; });
  mode2RenderChipGroup($('#mode2CastChips'), CAST_VALUES,
    (v)=> t('castOptions')[v],
    (v)=> mode2State.cast===v,
    (v)=>{ mode2State.cast = v; });
  updateMode2SubmitState();
}

/* discover 후보(raw candidate)를 credits·제공처·외부ID·러닝타임까지 채운 카드 데이터로 확장.
   computeTmdbRecommendations()의 상세 조회 패턴과 동일 — 기준 영화(base) 없이 단독으로 사용 가능하게 뺀 버전 */
async function detailMovieForCard(c){
  const [credits, providers, ext, detail] = await Promise.all([
    apiGet('/movie/'+c.id+'/credits', {}).catch(()=>({crew:[],cast:[]})),
    tmdbWatchProviders(c.id),
    apiGet('/movie/'+c.id+'/external_ids', {}).catch(()=>({})),
    apiGet('/movie/'+c.id, {}).catch(()=>({})),
  ]);
  const cr = extractCredits(credits);
  const topCast = (credits.cast||[]).slice(0,10);
  const castAvgPopularity = topCast.length ? topCast.reduce((s,p)=> s+(p.popularity||0), 0)/topCast.length : 0;
  return {
    id: c.id, title:c.title, year:(c.release_date||'').slice(0,4)||'?',
    director: cr.director || t('unknownDirector'), actors:cr.actors||[],
    poster: c.poster_path ? IMG_W200+c.poster_path : null,
    overview: c.overview || '',
    genreIds: c.genre_ids || (detail.genres||[]).map(g=>g.id) || [],
    runtime: detail.runtime || null,
    imdbUrl: ext.imdb_id ? ('https://www.imdb.com/title/'+ext.imdb_id+'/') : imdbSearchUrl(c.title),
    ott: providers,
    castAvgPopularity,
  };
}

/* STEP5 .ticket 카드와 같은 마크업을 재사용 — 예상 별점 줄만 없는 간소 버전 (모드2·모드3 공용) */
function renderSimpleTicketCard(movie, reasonText){
  const div = document.createElement('div');
  div.className='ticket';
  const posterStyle = movie.poster ? `style="background-image:url('${movie.poster}')"` : '';
  div.innerHTML = `
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
      <div class="why"><b>${t('reasonLabel')}</b> · ${reasonText}</div>
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
  const saveBtnEl = div.querySelector('.save-btn');
  saveBtnEl.onclick = ()=>{
    saveRecToGallery(movie, [reasonText]);
    saveRecs();
    renderRecsGallery();
    saveBtnEl.textContent = t('savedBtn');
    saveBtnEl.classList.add('saved');
    saveBtnEl.disabled = true;
  };
  return div;
}

/* 관리자 페이지에서 볼 수 있도록 모드2(설문) 결과도 서버에 저장 — 화면 동작에는 영향 없음 */
function submitMode2ToServer(resultTitles){
  const payload = {
    mode: 'quiz',
    mood: mode2State.mood,
    runtime: mode2State.runtime,
    decades: mode2State.decades,
    ott: mode2State.ott,
    fame: mode2State.fame,
    cast: mode2State.cast,
    results: resultTitles,
    lang: state.lang,
  };
  fetch('/api/save-review', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(payload),
  }).catch(()=>{});
}

/* 카드마다 추천 이유가 다 똑같지 않도록, 실제로 그 영화에 겹치는 무드/장르와 고르신 조건을 바탕으로 이유를 구성해요 */
function buildMode2Reasons(movie, moods){
  const reasons = [];
  moods.forEach(m=>{
    if((movie.genreIds||[]).some(g=> m.genres.includes(g))){
      reasons.push(t('mode2ReasonMood')(t('moodOptions')[m.value]));
    }
  });
  if(mode2State.fame==='mainstream') reasons.push(t('mode2ReasonFameMain'));
  if(mode2State.fame==='hidden') reasons.push(t('mode2ReasonFameHidden'));
  if(mode2State.cast==='famous') reasons.push(t('mode2ReasonCastFamous'));
  if(mode2State.cast==='newcomer') reasons.push(t('mode2ReasonCastNew'));
  if(reasons.length===0) reasons.push(t('mode2ReasonText'));
  return [...new Set(reasons)].slice(0,3).join(' · ');
}

async function runMode2Recommend(){
  if(!mode2State.mood.length) return;
  const btn = $('#mode2Submit');
  btn.disabled = true;
  const originalText = btn.textContent;
  btn.textContent = t('loadingNote');
  try{
    const moods = MOOD_OPTIONS.filter(m=> mode2State.mood.includes(m.value));
    const genreIds = [...new Set(moods.flatMap(m=>m.genres))];
    const params = { sort_by:'popularity.desc', 'vote_count.gte':50, page:1, with_genres: genreIds.join('|') };
    if(mode2State.runtime) params['with_runtime.lte'] = mode2State.runtime;
    // 개봉연도 복수 선택 — params엔 직접 안 넣고 decadeRanges로 따로 들고 있다가 연대마다 조회해서 합쳐요
    const decadeRanges = (mode2State.decades||[]).map(decadeDateRange);
    // "나만 안 본 것 같은 영화"/"아무도 안 본 것 같은 영화" — 대중성 축(vote_count·평점 기준)을 다르게 조회
    if(mode2State.fame==='mainstream'){
      params['vote_count.gte'] = 1000;
    }else if(mode2State.fame==='hidden'){
      params['vote_count.gte'] = 50;
      params['vote_count.lte'] = 500;
      params['vote_average.gte'] = 7;
      params.sort_by = 'vote_average.desc';
      const indieKwId = await fetchKeywordId('independent film');
      if(indieKwId) params.with_keywords = params.with_keywords ? params.with_keywords+'|'+indieKwId : String(indieKwId);
    }

    // OTT를 고르셨어도 discover 자체는 제한하지 않고, "구독 중" / "그 외" 분류용으로
    // OTT로 제한한 후보를 별도 조회해서 풀에 보강만 해요 (모드1과 동일한 패턴). params를 여기서
    // 복사해야 무드(장르)·러닝타임·개봉연도·대중성(fame, 위에서 다 설정된 상태)이 OTT 보강 조회에도
    // 똑같이 반영돼요 — 예전엔 fame 설정 "전에" 복사해서 OTT+대중성을 같이 고르면 OTT 보강
    // 조회엔 대중성 조건이 빠지는 버그가 있었음.
    const ottIds = mode2State.ott.map(k=>providerIds[k]).filter(Boolean);
    const ottParams = ottIds.length
      ? {...params, with_watch_providers: ottIds.join('|'), watch_region: state.country, with_watch_monetization_types: 'flatrate'}
      : null;

    let results = await discoverAcrossDecades(params, decadeRanges);
    // OTT로 제한한 후보는 따로 들고 있다가 아래 pool 구성에서 맨 앞에 배치해요 — 그냥 results
    // 뒤에 붙이면 인기도 높은 일반 후보들이 이미 pool 자리를 다 차지해서 "구독 중인 OTT" 그룹이
    // 비고 스트리밍 정보 없는 영화만 나오는 문제가 있었음(모드1과 동일 원인)
    let ottResults = [];
    if(ottParams){
      try{ ottResults = await discoverAcrossDecades(ottParams, decadeRanges); }catch(e){}
    }
    if(results.length + ottResults.length < 4){
      const loose = { sort_by:'popularity.desc', 'vote_count.gte':20, page:1, with_genres: genreIds.join('|') };
      const more = await discoverAcrossDecades(loose, decadeRanges);
      const seen = new Set(results.map(r=>r.id));
      more.forEach(m=>{ if(!seen.has(m.id)){ results.push(m); seen.add(m.id); } });
    }

    // "유명한 배우" / "신예 배우" 선호는 discover가 직접 지원하지 않아서, 후보를 넉넉히 뽑아
    // 캐스팅 인지도(cast 평균 popularity)로 재정렬한 뒤 상위 4개만 남겨요.
    // OTT를 골랐으면 ottResults를 먼저 채워서 "구독 중인 OTT" 그룹이 상세 조회 대상에서 밀리지
    // 않게 하고, 일반 후보를 그 뒤에 섞어 "그 외" 그룹도 채울 수 있게 해요.
    const basePoolSize = mode2State.cast==='any' ? 4 : 10;
    const seenPool = new Set();
    const pool = [];
    ottResults.slice(0,8).concat(results.slice(0, basePoolSize)).forEach(m=>{
      if(!seenPool.has(m.id)){ pool.push(m); seenPool.add(m.id); }
    });
    let cards = await Promise.all(pool.map(detailMovieForCard));
    if(mode2State.cast!=='any'){
      cards.sort((a,b)=> mode2State.cast==='famous'
        ? (b.castAvgPopularity||0) - (a.castAvgPopularity||0)
        : (a.castAvgPopularity||0) - (b.castAvgPopularity||0));
    }

    // OTT를 골랐으면 결과를 "구독 중인 OTT" / "그 외" 두 그룹으로 나눠서 보여줘요
    let otherCards = [];
    if(ottIds.length){
      otherCards = cards.filter(c=> !movieOnSelectedOtt(c.ott, mode2State.ott)).slice(0,4);
      cards = cards.filter(c=> movieOnSelectedOtt(c.ott, mode2State.ott)).slice(0,4);
    }else{
      cards = cards.slice(0,4);
    }

    const list = $('#mode2ResultList');
    list.innerHTML='';
    if(cards.length===0){
      list.innerHTML = `<div class="sub">${t('noResultsFound')}</div>`;
    }else{
      cards.forEach(movie=> list.appendChild(renderSimpleTicketCard(movie, buildMode2Reasons(movie, moods))));
    }

    const ottTitleEl = $('#mode2ResultOttTitle');
    const otherSection = $('#mode2ResultOtherSection');
    const otherList = $('#mode2ResultListOther');
    otherList.innerHTML = '';
    if(ottIds.length){
      const ottNames = selectedOttLabel(mode2State.ott);
      ottTitleEl.textContent = t('resultOttSectionTitle')(ottNames);
      ottTitleEl.style.display = '';
      if(otherCards.length){
        $('#mode2ResultOtherTitle').textContent = t('resultOtherSectionTitle')(ottNames);
        otherCards.forEach(movie=> otherList.appendChild(renderSimpleTicketCard(movie, buildMode2Reasons(movie, moods))));
        otherSection.style.display = '';
      }else{
        otherSection.style.display = 'none';
      }
    }else{
      ottTitleEl.style.display = 'none';
      otherSection.style.display = 'none';
    }

    submitMode2ToServer([...cards, ...otherCards].map(c=>c.title));
    $('#mode2QuizPanel').style.display='none';
    $('#mode2ResultPanel').style.display='block';
    window.scrollTo({top:0, behavior:'smooth'});
    if(typeof gtag === 'function') gtag('event', 'mode2_result', {mood: mode2State.mood.join(',')});
  }catch(e){
    alert(t('alertRecommendFail'));
  }finally{
    btn.disabled = false;
    btn.textContent = originalText;
  }
}

function setupMode2(){
  if(mode2Setup) return;
  mode2Setup = true;
  renderMode2Quiz();
  $('#mode2Submit').onclick = runMode2Recommend;
  $('#mode2Back').onclick = ()=>{
    $('#mode2ResultPanel').style.display='none';
    $('#mode2QuizPanel').style.display='block';
    renderMode2Quiz();
    window.scrollTo({top:0, behavior:'smooth'});
  };
  $('#mode2Restart').onclick = ()=>{
    mode2State = { mood:[], runtime:null, decades:[], ott:[], fame:'any', cast:'any' };
    $('#mode2ResultPanel').style.display='none';
    $('#mode2QuizPanel').style.display='block';
    renderMode2Quiz();
  };
}

/* =========================================================
   모드 3: 인생영화로 나에 대해 분석하기 — 재미로 보는 결과 (실제 성격 분석 아님)
   ========================================================= */
const ARCHETYPE_BUCKETS = [
  {key:'adventurer', genres:[28,12]},
  {key:'entertainer', genres:[35]},
  {key:'empath', genres:[18]},
  {key:'thrillSeeker', genres:[27]},
  {key:'romantic', genres:[10749]},
  {key:'strategist', genres:[53,9648,80]},
  {key:'dreamer', genres:[878,14]},
  {key:'innocent', genres:[16,10751]},
  {key:'seeker', genres:[99]},
  {key:'warrior', genres:[10752,36]},
];
/* "당신과 잘 맞는 유형" — 서로 성향을 보완해주는 짝을 미리 정의 (신념가만 같은 유형끼리 잘 맞는다고 판단해 자기 자신으로 매칭) */
const COMPAT_MAP = {
  adventurer:'strategist', strategist:'adventurer',
  entertainer:'empath', empath:'entertainer',
  thrillSeeker:'freeSpirit', freeSpirit:'thrillSeeker',
  romantic:'innocent', innocent:'romantic',
  dreamer:'seeker', seeker:'dreamer',
  warrior:'warrior',
};
let mode3Picked = [];
let mode3Setup = false;
let mode3SearchDebounce = null;
let mode3LastResult = null;

function updateMode3PickedLabel(){
  $('#mode3PickedLabel').innerHTML = `${t('mode3PickedLabel')} (<span id="mode3PickedCount">${mode3Picked.length}</span>/5)`;
}

function renderMode3PickedChips(){
  updateMode3PickedLabel();
  const box = $('#mode3PickedChips');
  box.innerHTML='';
  mode3Picked.forEach(m=>{
    const chip = document.createElement('button');
    chip.type='button';
    chip.className='chip selected';
    chip.textContent = `${m.title} (${m.year}) ×`;
    chip.onclick = ()=>{
      mode3Picked = mode3Picked.filter(p=>p.id!==m.id);
      renderMode3PickedChips();
      renderMode3Grid($('#mode3Search').value);
      $('#mode3Submit').disabled = mode3Picked.length < 3;
    };
    box.appendChild(chip);
  });
  const remaining = Math.max(0, 3 - mode3Picked.length);
  $('#mode3MinHint').textContent = remaining>0 ? t('mode3MinHint')(remaining) : '';
}

async function renderMode3Grid(filter){
  const grid = $('#mode3Grid');
  if(!filter || !filter.trim()){ grid.innerHTML=''; return; }
  if(!serverAvailable){ grid.innerHTML = `<div class="empty-note">${t('emptyNoteNoServer')}</div>`; return; }
  grid.innerHTML = `<div class="loading-note">${t('loadingNote')}</div>`;
  try{
    const results = (await tmdbSearch(filter)).filter(m=> !mode3Picked.some(p=>p.id===m.tmdbId));
    if(results.length===0){ grid.innerHTML = `<div class="empty-note">${t('emptyNoteNoResults')}</div>`; return; }
    grid.innerHTML='';
    results.forEach(m=>{
      const div = document.createElement('div');
      div.className='movie-card';
      div.innerHTML = `${m.poster? `<img src="${m.poster}" alt="">` : '<img alt="">'}<div class="meta"><div class="t">${m.title}</div><div class="y">${m.year}</div></div>`;
      div.onclick = async ()=>{
        if(mode3Picked.length>=5) return;
        div.style.opacity='0.5';
        try{
          const detail = await tmdbMovieDetail(m.tmdbId);
          mode3Picked.push({id:m.tmdbId, title:detail.title, year:detail.year, genreIds:detail.genreIds});
          renderMode3PickedChips();
          renderMode3Grid(filter);
          $('#mode3Submit').disabled = mode3Picked.length < 3;
        }catch(e){ div.style.opacity='1'; }
      };
      grid.appendChild(div);
    });
  }catch(e){
    grid.innerHTML = `<div class="empty-note">${t('emptyNoteSearchFail')}</div>`;
  }
}

function pickArchetype(picks){
  const scores = {};
  picks.forEach(m=>{
    (m.genreIds||[]).forEach(gid=>{
      const bucket = ARCHETYPE_BUCKETS.find(b=> b.genres.includes(gid));
      if(bucket) scores[bucket.key] = (scores[bucket.key]||0) + 1;
    });
  });
  let best=null, bestScore=0;
  ARCHETYPE_BUCKETS.forEach(b=>{
    const s = scores[b.key]||0;
    if(s>bestScore){ bestScore=s; best=b.key; }
  });
  return best || 'freeSpirit';
}

/* 유형(archetype)마다 캐릭터가 하나로 고정되지 않도록, chars 배열(한국 영화 + 해외 영화 캐릭터) 중
   seedNum으로 하나를 결정적으로 골라요. 같은 영화를 고르면 항상 같은 결과가 나오게 돼요. */
function pickArchetypeChar(chars, seedNum){
  if(!chars || !chars.length) return {name:'', film:'', blurb:''};
  const idx = ((seedNum % chars.length) + chars.length) % chars.length;
  return chars[idx];
}

/* 고르신 영화들의 공통점(장르) 설명용 — 결과를 결정한 장르 중, 실제로 픽에 많이 등장한 순으로 이름을 뽑아요 */
function commonGenreNames(picks, bucketGenres){
  if(!bucketGenres || !bucketGenres.length || !genreMap) return [];
  const freq = {};
  picks.forEach(m=> (m.genreIds||[]).forEach(g=>{ if(bucketGenres.includes(g)) freq[g] = (freq[g]||0)+1; }));
  return Object.keys(freq)
    .sort((a,b)=> freq[b]-freq[a])
    .map(g=> genreMap[g])
    .filter(Boolean)
    .slice(0,2);
}

/* 관리자 페이지에서 볼 수 있도록 모드3(인생영화 분석) 결과도 서버에 저장 — 화면 동작에는 영향 없음 */
function submitMode3ToServer(archetypeKey, archetypeTitle, charName){
  const payload = {
    mode: 'life',
    pickedMovies: mode3Picked.map(p=>p.title),
    archetype: archetypeKey,
    archetypeTitle: archetypeTitle,
    charName: charName,
    lang: state.lang,
  };
  fetch('/api/save-review', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(payload),
  }).catch(()=>{});
}

/* 긴 캐릭터 분석 글을 카드에 다 넣으면 이미지가 너무 길어져서, 문장 단위로 앞부분만 잘라 보여줘요.
   마침표+공백(". ") 기준으로 자르되, 너무 짧게 잘리면(예: "이런 것도 있어요." 같은 감탄사) 어색하니
   최소 길이(minLen)를 넘는 첫 마침표에서 끊어요. */
function excerptText(text, maxLen, minLen){
  if(!text || text.length<=maxLen) return text||'';
  const cut = text.slice(0, maxLen);
  const lastPeriod = cut.lastIndexOf('. ');
  return (lastPeriod>=minLen ? cut.slice(0,lastPeriod+1) : cut) + '…';
}

/* 결과를 이미지로 만들어서 공유·저장할 수 있게 해요 — 화면엔 안 보이는 전용 카드(.share-card)를
   하나 만들어서 html2canvas로 캡처해요. 실제 결과 화면 전체(버튼·다른 섹션 포함)를 그대로 캡처하면
   너무 길고 지저분해서, 공유용으로 딱 필요한 내용만 담은 별도 레이아웃을 씀. */
function buildMode3ShareCardEl(){
  const r = mode3LastResult;
  const div = document.createElement('div');
  div.className = 'share-card';
  div.innerHTML = `
    <div class="share-card-brand">CINEREC</div>
    <div>
      <div class="share-card-eyebrow">${t('mode3ShareCardEyebrow')}</div>
      <div class="share-card-title">${t('mode3VerdictTitle')(r.charName)}</div>
      <div class="share-card-film">${t('mode3ShareCardFilm')(r.charFilm)}</div>
    </div>
    <div class="share-card-blurb">${excerptText(r.charBlurb, 160, 40)}</div>
    <div class="share-card-footer">cinereccc.vercel.app</div>
  `;
  return div;
}
async function generateMode3ShareImage(){
  if(typeof html2canvas === 'undefined' || !mode3LastResult) return null;
  const card = buildMode3ShareCardEl();
  document.body.appendChild(card);
  try{
    if(document.fonts && document.fonts.ready) await document.fonts.ready;
    const canvas = await html2canvas(card, {backgroundColor:null, scale:2});
    return await new Promise(resolve=> canvas.toBlob(resolve, 'image/png'));
  }finally{
    card.remove();
  }
}

/* 친구에게 공유하기 — 카카오 개발자 앱 키가 없어도 되도록 OS 공유 시트(navigator.share)를 사용해요.
   결과 요약 이미지를 먼저 만들어서, 공유 시트가 파일 공유를 지원하면(대부분의 모바일) 그 이미지와
   함께 공유해요. 지원 안 하면 기존처럼 텍스트+링크로, 그마저도 안 되면 클립보드 복사로 대신해요. */
async function shareMode3Result(){
  if(!mode3LastResult) return;
  const shareText = t('mode3ShareText')(mode3LastResult.charName);
  const shareUrl = 'https://cinereccc.vercel.app/';
  let file = null;
  try{
    const blob = await generateMode3ShareImage();
    if(blob) file = new File([blob], 'cinerec-result.png', {type:'image/png'});
  }catch(e){}

  if(file && navigator.canShare && navigator.canShare({files:[file]})){
    try{ await navigator.share({ title: t('pageTitle'), text: shareText, url: shareUrl, files:[file] }); return; }
    catch(e){ if(e && e.name==='AbortError') return; }
  }
  if(navigator.share){
    try{ await navigator.share({ title: t('pageTitle'), text: shareText, url: shareUrl }); return; }
    catch(e){ if(e && e.name==='AbortError') return; }
  }
  try{
    await navigator.clipboard.writeText(shareText + ' ' + shareUrl);
    alert(t('shareCopiedMsg'));
  }catch(e){
    alert(t('shareFailMsg'));
  }
}

/* 이미지로 저장 — 공유 시트를 거치지 않고 바로 다운로드해요(데스크톱에서 특히 유용) */
async function saveMode3ResultImage(){
  if(!mode3LastResult) return;
  const btn = $('#mode3SaveImageBtn');
  const original = btn.textContent;
  btn.disabled = true;
  btn.textContent = t('loadingNote');
  try{
    const blob = await generateMode3ShareImage();
    if(!blob){ alert(t('imageSaveFailMsg')); return; }
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cinerec-'+(mode3LastResult.archetypeKey||'result')+'.png';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(()=> URL.revokeObjectURL(url), 5000);
  }catch(e){
    alert(t('imageSaveFailMsg'));
  }finally{
    btn.disabled = false;
    btn.textContent = original;
  }
}

async function runMode3Analyze(){
  if(mode3Picked.length<3){ alert(t('mode3NeedMore')); return; }
  const btn = $('#mode3Submit');
  btn.disabled = true;
  const originalText = btn.textContent;
  btn.textContent = t('loadingNote');
  try{
    const archetypeKey = pickArchetype(mode3Picked);
    const archetype = t('archetypes')[archetypeKey];
    const compatKey = COMPAT_MAP[archetypeKey] || archetypeKey;
    const compatArchetype = t('archetypes')[compatKey];
    const bucket = ARCHETYPE_BUCKETS.find(b=>b.key===archetypeKey);
    const titlesStr = mode3Picked.map(p=>p.title).join(', ');
    const genreNames = commonGenreNames(mode3Picked, bucket ? bucket.genres : []);

    // 고르신 영화 id 합을 시드로 써서, 같은 유형이라도 한국 영화 캐릭터 하나로 고정되지 않고
    // chars 배열(한국 영화 + 해외 영화 캐릭터) 중 하나를 골라 다양성을 줘요. 같은 영화를 다시
    // 고르면 같은 결과가 나오도록 결정적으로 계산해요.
    const seedNum = mode3Picked.reduce((s,p)=> s + p.id, 0);
    const char = pickArchetypeChar(archetype.chars, seedNum);
    const compatChar = pickArchetypeChar(compatArchetype.chars, seedNum + 1);

    const common = $('#mode3Common');
    common.innerHTML = `<div>${genreNames.length
      ? t('mode3CommonIntro')(titlesStr, genreNames.join(state.lang==='ko' ? '·' : ', '))
      : t('mode3CommonIntroFallback')(titlesStr)}</div>`;

    const verdict = $('#mode3Verdict');
    verdict.classList.remove('negative');
    verdict.innerHTML = `
      <div>
        <div class="mode3-verdict-title">${t('mode3VerdictTitle')(char.name)}</div>
        <div class="mode3-char-blurb">${t('mode3CharBlurbTemplate')(char.name, char.film, char.blurb)}</div>
        <div class="mode3-trait">
          <span class="mode3-trait-label">${t('mode3LabelPersonality')}</span>
          <p>${archetype.personality}</p>
        </div>
        <div class="mode3-trait">
          <span class="mode3-trait-label">${t('mode3LabelCompat')(compatChar.name)}</span>
          <div class="mode3-char-blurb">${t('mode3CharBlurbTemplate')(compatChar.name, compatChar.film, compatChar.blurb)}</div>
          <p>${archetype.compatibility}</p>
        </div>
        <div class="mode3-trait">
          <span class="mode3-trait-label">${t('mode3LabelStrength')}</span>
          <p>${archetype.strength}</p>
        </div>
        <div class="mode3-trait">
          <span class="mode3-trait-label">${t('mode3LabelLifeGoal')}</span>
          <p>${archetype.lifeGoal}</p>
        </div>
      </div>
    `;
    mode3LastResult = { archetypeKey, charName: char.name, charFilm: char.film, charBlurb: char.blurb };
    const list = $('#mode3RecList');
    list.innerHTML='';
    if(bucket){
      const pickedIds = new Set(mode3Picked.map(p=>p.id));
      const params = { sort_by:'popularity.desc', 'vote_count.gte':50, page:1, with_genres: bucket.genres.join('|') };
      const results = (await tmdbDiscover(params)).filter(m=> !pickedIds.has(m.id));
      const top = results.slice(0,1);
      const cards = await Promise.all(top.map(detailMovieForCard));
      const reasonText = t('mode3ReasonTemplate')(archetype.fanTrait);
      cards.forEach(movie=> list.appendChild(renderSimpleTicketCard(movie, reasonText)));
    }
    submitMode3ToServer(archetypeKey, archetype.title, char.name);

    $('#mode3PickPanel').style.display='none';
    $('#mode3ResultPanel').style.display='block';
    window.scrollTo({top:0, behavior:'smooth'});
    if(typeof gtag === 'function') gtag('event', 'mode3_result', {archetype: archetypeKey});
  }catch(e){
    alert(t('alertRecommendFail'));
  }finally{
    btn.disabled = false;
    btn.textContent = originalText;
  }
}

function setupMode3(){
  if(mode3Setup) return;
  mode3Setup = true;
  renderMode3PickedChips();
  $('#mode3Search').addEventListener('input', e=>{
    clearTimeout(mode3SearchDebounce);
    const val = e.target.value;
    $('#mode3SearchClear').style.display = val ? 'block' : 'none';
    mode3SearchDebounce = setTimeout(()=> renderMode3Grid(val), 400);
  });
  $('#mode3SearchClear').addEventListener('click', ()=>{
    $('#mode3Search').value = '';
    $('#mode3SearchClear').style.display = 'none';
    renderMode3Grid('');
    $('#mode3Search').focus();
  });
  $('#mode3Submit').onclick = runMode3Analyze;
  $('#mode3Back').onclick = ()=>{
    $('#mode3ResultPanel').style.display='none';
    $('#mode3PickPanel').style.display='block';
    window.scrollTo({top:0, behavior:'smooth'});
  };
  $('#mode3ShareBtn').onclick = shareMode3Result;
  $('#mode3SaveImageBtn').onclick = saveMode3ResultImage;
  $('#mode3Restart').onclick = ()=>{
    mode3Picked = [];
    $('#mode3Search').value='';
    $('#mode3SearchClear').style.display = 'none';
    $('#mode3Grid').innerHTML='';
    renderMode3PickedChips();
    $('#mode3Submit').disabled = true;
    $('#mode3ResultPanel').style.display='none';
    $('#mode3PickPanel').style.display='block';
  };
}

(function init(){
  loadCountry();
  applyStaticI18n();
  setupIntro();
  checkServer();
  loadRecs();
  loadHistory();
  showStep(1);
})();
