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
    step3subPositive: (title) => `“${title}”이 좋으셨다니 다행이에요. 10가지 항목 중 어떤 부분이 특히 마음에 드셨는지 알려주세요.`,
    step3subNegative: () => `아쉬우셨군요. 어떤 항목이 특히 별로였는지 알려주시면, 그 반대 성향의 영화를 찾아드릴게요.`,
    step3Title: '세부적으로 평가해 주세요',
    aspects: {
      direction: '연출', script: '각본 · 대사', originality: '독창성', theme: '주제',
      miseEnScene: '미장센', acting: '연기', genre: '장르', editing: '편집', music: '음악', immersion: '몰입도',
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

    modeSelectCaption: '어떤 티켓으로 시작할까요?',
    modeTicket1Label: '방금 본 영화와<br>비슷한 영화 찾기',
    modeTicket2Label: '내 취향 영화<br>빠르게 찾기',
    modeTicket3Label: '인생 영화를 통해<br>나에 대해 분석하기',
    backToModesText: '다른 방식으로 찾기',

    mode2Eyebrow: '내 취향 영화 빠르게 찾기',
    mode2QuizTitle: '몇 가지만 골라주세요',
    mode2QuizSub: '별점이나 리뷰 없이, 지금 취향으로 바로 찾아드려요.',
    mode2MoodLabel: '지금 어떤 영화가 끌리세요?',
    mode2RuntimeLabel: '러닝타임',
    mode2DecadeLabel: '개봉연도',
    mode2SubmitBtn: '추천 받기',
    mode2ResultTitle: '이런 영화 어때요?',
    mode2RestartBtn: '다시 고르기',
    mode2Disclaimer: '고르신 조건에 맞춰 실시간으로 찾은 영화예요.',
    mode2ReasonText: '고르신 무드와 조건에 맞춰 추천했어요',
    moodOptions: {
      action: '신나고 짜릿한 게 좋아요', comedy: '웃고 싶어요', thriller: '몰입해서 긴장하고 싶어요',
      drama: '마음 울리는 이야기가 좋아요', horror: '짜릿하게 무서운 것도 좋아요', romance: '설레는 로맨스가 좋아요',
    },

    mode3Eyebrow: '인생 영화를 통해 나에 대해 분석하기',
    mode3PickTitle: '🎬 인생 영화를 골라주세요',
    mode3PickSub: '3~5편 정도 고르면 더 정확하게 분석돼요. (재미로 보는 결과예요!)',
    mode3SearchPlaceholder: '예: 라라랜드, 인터스텔라, 기생충',
    mode3PickedLabel: '고른 영화',
    mode3SubmitBtn: '분석하기',
    mode3RestartBtn: '다시 고르기',
    mode3RecLabel: '나랑 잘 맞을 영화',
    mode3Disclaimer: '취향을 재미로 풀어본 결과예요. 실제 성격 분석이 아니에요 :)',
    mode3ReasonTemplate: (trait) => `${trait} 사람들이 이 영화를 좋아했어요`,
    mode3NeedMore: '영화를 3편 이상 골라주세요.',
    mode3VerdictTitle: (archetypeTitle) => `당신은 <b>"${archetypeTitle}"</b> 유형이에요`,
    mode3LabelPersonality: '🎭 어떤 사람인 것 같냐면',
    mode3LabelCompat: '💞 이런 사람과 잘 맞아요',
    mode3LabelStrength: '💪 가장 큰 장점',
    mode3LabelLifeGoal: '🧭 지향하는 삶',
    archetypes: {
      adventurer: {title:'모험가',
        personality:'가만히 있는 걸 못 견디는 타입이에요. 새로운 자극과 도전 앞에서 오히려 눈이 반짝이고, 망설임보다 행동이 먼저 나가는 사람이죠. 계획을 세우느라 시간을 쓰기보다는 일단 몸을 던지고 나서 부딪히며 배우는 쪽에 가까워요.',
        compatibility:'계획적이고 차분한 사람과 만나면 서로의 빈틈을 잘 채워줘요. 함께 즉흥적으로 떠날 수 있는 사람이면 더할 나위 없고, 당신의 무모해 보이는 결정을 믿고 따라와 주는 사람과는 평생 갈 파트너가 될 수 있어요.',
        strength:'결단력과 추진력이에요. 남들이 재고 따지는 동안 이미 한 발짝 나가 있는 실행력이 최대 무기고, 위기 상황에서도 남들보다 빠르게 다음 선택을 내리는 순발력도 돋보이죠.',
        lifeGoal:'안정보다 경험이 남는 삶을 지향해요. 나중에 후회하는 것보다, 일단 해보고 얻은 이야기가 더 값지다고 믿는 사람이에요. 인생을 통틀어 "해봤다"는 말을 더 많이 하고 싶은 쪽이죠.',
        fanTrait:'모험심이 많고 망설임 없이 행동하는'},
      entertainer: {title:'분위기 메이커',
        personality:'무거운 공기를 못 참는 타입이에요. 어디서든 웃음 포인트를 찾아내고, 사람들 사이의 분위기를 자연스럽게 풀어주는 사람이죠. 정작 본인은 힘들어도 그 티를 잘 안 내고, 주변 사람들 기분부터 살피는 편이에요.',
        compatibility:'진지하고 속 깊은 사람과 있으면 서로 좋은 균형을 이뤄요. 당신의 유머에 진심으로 웃어주는 사람이면 오래갈 인연이고, 가끔은 당신의 진짜 속마음까지 물어봐주는 사람이 곁에 있으면 더 편안해질 거예요.',
        strength:'공간의 온도를 바꾸는 힘이에요. 당신이 있으면 어색함이 오래 못 버티고, 처음 만난 사람들 사이에서도 자연스럽게 대화의 물꼬를 트는 능력이 있죠.',
        lifeGoal:'심각하게 사는 것보다 즐겁게 사는 삶을 지향해요. 매일이 재밌어야 진짜 잘 살고 있는 거라 믿는 사람이에요. 훗날 돌아봤을 때 "그래도 많이 웃었다"는 기억을 남기고 싶어 하죠.',
        fanTrait:'유머 감각이 좋고 분위기를 잘 살리는'},
      empath: {title:'감성 관찰자',
        personality:'사람과 감정의 결을 세심하게 들여다보는 타입이에요. 겉으로 드러나지 않는 마음까지 알아차리고, 깊이 있는 대화를 좋아하죠. 누군가 말투가 평소와 조금만 달라도 금방 눈치채는 편이에요.',
        compatibility:'솔직하게 감정을 표현하는 사람과 잘 맞아요. 말하지 않아도 알아주길 바라기보다, 서로 표현해주는 관계에서 더 편안함을 느껴요. 당신의 세심함을 당연하게 여기지 않고 고마워하는 사람이면 관계가 훨씬 깊어질 거예요.',
        strength:'공감 능력이에요. 사람의 진짜 마음을 읽어내는 섬세함이 당신 곁에 사람이 모이는 이유고, 힘든 이야기를 털어놓기에 가장 편한 사람으로 꼽히는 경우가 많아요.',
        lifeGoal:'얕고 넓은 관계보다 깊고 진한 관계를 지향해요. 몇 명이어도 진심으로 통하는 사람이 있으면 충분하다고 생각하는 편이에요. 관계의 숫자보다 밀도를 더 중요하게 여기죠.',
        fanTrait:'감정을 세심하게 살피고 깊은 대화를 좋아하는'},
      thrillSeeker: {title:'스릴 추구자',
        personality:'적당히 무서운 걸 오히려 즐기는 타입이에요. 긴장감 있는 상황에서 심장이 뛰는 걸 좋아하고, 예측 불가능한 전개에 끌리죠. 뻔한 결말보다는 끝까지 어떻게 될지 모르는 이야기에 훨씬 몰입해요.',
        compatibility:'겁 없이 같이 달려줄 사람과 죽이 잘 맞아요. 너무 신중한 사람보다는, 그냥 같이 저지르는 사람이 편해요. 당신의 즉흥적인 제안에 "콜"이라고 바로 답해주는 사람이 최고의 짝이죠.',
        strength:'위기 앞에서 오히려 침착해지는 담대함이에요. 다른 사람이 얼어있을 때 당신은 이미 움직이고 있고, 예상 밖의 상황을 오히려 재미있는 변수로 받아들이는 여유도 있어요.',
        lifeGoal:'무난한 삶보다 짜릿한 삶을 지향해요. 예측 가능한 하루보다는, 무슨 일이 생길지 모르는 하루가 더 살아있다고 느껴요. 안전벨트를 매고도 늘 창밖 풍경보다 다음 모퉁이가 더 궁금한 사람이에요.',
        fanTrait:'긴장감을 즐기고 두려움 없이 부딪히는'},
      romantic: {title:'로맨티스트',
        personality:'설렘과 감정선을 소중히 여기는 타입이에요. 작은 순간에도 의미를 부여하고, 관계 속에서 진심을 나누는 걸 중요하게 생각하죠. 기념일이나 사소한 디테일을 잘 챙기고, 잘 기억하는 편이에요.',
        compatibility:'표현에 인색하지 않은 사람과 잘 맞아요. 사소한 다정함을 알아채고 되돌려주는 사람이면 관계가 오래갈 거예요. 무뚝뚝해도 마음이 깊은 사람보다는, 표현이 자연스러운 사람과 더 오래 편안하게 지낼 수 있어요.',
        strength:'사람과 순간을 소중히 여기는 마음이에요. 당신과 함께한 기억은 유난히 더 특별하게 남고, 상대방이 자신이 소중한 사람이라고 느끼게 만드는 재주가 있죠.',
        lifeGoal:'효율적인 삶보다 마음이 남는 삶을 지향해요. 결과보다 그 과정에서 느낀 감정을 더 오래 기억하는 사람이에요. 남는 건 성과가 아니라 그때 느꼈던 감정이라고 믿는 편이죠.',
        fanTrait:'감성적이고 솔직하게 마음을 표현하는'},
      strategist: {title:'전략가',
        personality:'퍼즐이 맞춰지는 순간을 좋아하는 타입이에요. 단서를 하나씩 모아 스스로 답을 찾아내는 과정에서 짜릿함을 느끼죠. 결론만 듣는 것보다 그 과정을 직접 추리해보는 걸 훨씬 좋아해요.',
        compatibility:'직관적이고 자유로운 사람과 만나면 서로를 잘 보완해요. 당신의 계획에 예상 밖의 재미를 더해주는 사람이 좋은 짝이에요. 너무 즉흥적이기만 한 사람보다는, 가끔은 당신의 논리를 존중해주는 사람과 더 잘 맞아요.',
        strength:'논리적으로 파고드는 분석력이에요. 남들이 놓친 디테일을 당신은 이미 눈치채고 있고, 복잡한 상황을 차근차근 정리해서 설명하는 능력도 뛰어나죠.',
        lifeGoal:'감으로 사는 삶보다 이해하고 넘어가는 삶을 지향해요. 왜 그런지 납득이 돼야 진짜 내 것이 된다고 믿는 편이에요. 대충 아는 채로 넘어가는 걸 유난히 못 견디는 편이죠.',
        fanTrait:'논리적이고 차근차근 답을 찾아가는'},
      dreamer: {title:'몽상가',
        personality:'현실 너머의 세계를 상상하는 걸 즐기는 타입이에요. 남들이 안 된다고 할 때, 오히려 "그럼 어떻게 되면 좋을까"를 먼저 그려보죠. 머릿속에 늘 몇 가지 다른 세계가 동시에 펼쳐져 있는 편이에요.',
        compatibility:'현실감각이 있는 사람과 함께면 상상이 진짜가 될 수 있어요. 당신의 아이디어를 비웃지 않고 함께 궁금해해 주는 사람이 좋아요. 엉뚱한 이야기에도 눈을 반짝이며 끝까지 들어주는 사람과 유난히 잘 맞아요.',
        strength:'남들이 못 보는 가능성을 보는 상상력이에요. 아직 없는 걸 그려내는 힘이 당신의 무기고, 남들이 지루해하는 것에서도 새로운 이야기를 뽑아내는 재능이 있죠.',
        lifeGoal:'정해진 틀보다 상상한 걸 실현하는 삶을 지향해요. 남들이 다 가는 길보다, 아직 아무도 안 가본 길에 더 끌리는 사람이에요. 남들이 정해놓은 답보다 스스로 그린 지도를 더 믿는 편이죠.',
        fanTrait:'상상력이 풍부하고 새로운 가능성을 그리는'},
      innocent: {title:'동심 지킴이',
        personality:'따뜻하고 단순한 것에서 진짜 행복을 찾는 타입이에요. 복잡한 것보다 소박하고 다정한 이야기에 마음이 더 크게 움직이죠. 작은 친절이나 사소한 배려에도 오래 마음이 머무는 편이에요.',
        compatibility:'꾸밈없고 다정한 사람과 편안함을 느껴요. 계산 없이 진심으로 대해주는 사람이면 마음을 활짝 열게 돼요. 복잡한 관계보다는, 있는 그대로 편하게 대해줄 수 있는 사람과 훨씬 잘 맞아요.',
        strength:'사람을 있는 그대로 봐주는 순수함이에요. 당신 앞에서는 다들 방어를 내려놓게 되고, 꾸미지 않은 진심이 오히려 사람들의 마음을 여는 열쇠가 되죠.',
        lifeGoal:'복잡하고 화려한 삶보다 따뜻하고 편안한 삶을 지향해요. 큰 성취보다 소소한 행복이 쌓인 하루하루를 더 값지게 여겨요. 특별한 날이 아니어도 평범한 하루에서 행복을 찾을 줄 아는 사람이에요.',
        fanTrait:'따뜻하고 꾸밈없이 진심을 나누는'},
      seeker: {title:'탐구자',
        personality:'"진짜" 이야기에 끌리는 타입이에요. 꾸며진 것보다 사실 그 자체에 흥미를 느끼고, 궁금한 건 끝까지 파고드는 성격이죠. 하나를 알게 되면 그 뒤에 숨은 배경까지 찾아보는 편이에요.',
        compatibility:'호기심을 존중해주는 사람과 잘 맞아요. 당신의 질문을 귀찮아하지 않고 같이 답을 찾아주는 사람이 좋은 인연이에요. 대충 아는 척하는 사람보다는, 모르면 모른다고 솔직히 말하는 사람과 더 신뢰가 쌓여요.',
        strength:'끝까지 파고드는 집요함이에요. 대충 아는 걸로 만족 못 하는 성격이 결국 진짜 답을 찾아내고, 남들이 지나친 사실 하나까지 놓치지 않는 꼼꼼함도 있죠.',
        lifeGoal:'믿고 넘어가는 삶보다 직접 확인하는 삶을 지향해요. 남이 알려준 답보다, 스스로 찾아낸 진실을 더 신뢰하는 사람이에요. 누가 뭐라 해도 결국 제 눈으로 확인해야 직성이 풀리는 편이죠.',
        fanTrait:'호기심이 많고 끝까지 파고드는'},
      warrior: {title:'신념가',
        personality:'역사와 대의를 소중히 여기는 타입이에요. 큰 흐름 속에서 자신의 자리를 고민하고, 옳다고 믿는 걸 위해 움직이는 사람이죠. 눈앞의 이익보다 원칙을 먼저 따지는 편이에요.',
        compatibility:'신념이 뚜렷한 사람과 서로 존중하며 잘 지내요. 당신의 원칙을 이해해주는 사람이면 든든한 동료가 될 거예요. 의견이 달라도 진지하게 논쟁해줄 수 있는 사람과 오히려 더 깊은 신뢰가 쌓이죠.',
        strength:'쉽게 흔들리지 않는 뚝심이에요. 한번 옳다고 믿으면 끝까지 밀고 나가는 힘이 있고, 다수의 의견에도 쉽게 휩쓸리지 않는 소신도 갖고 있죠.',
        lifeGoal:'그냥저냥 사는 삶보다 의미 있는 삶을 지향해요. 내가 왜 이렇게 사는지 스스로 설명할 수 있어야 한다고 믿는 사람이에요. 편한 길보다 옳다고 믿는 길을 택하는 쪽에 더 가깝죠.',
        fanTrait:'신념이 뚜렷하고 옳다고 믿는 걸 밀고 나가는'},
      freeSpirit: {title:'자유로운 영혼',
        personality:'한 가지 장르에 갇히지 않는 타입이에요. 다양한 이야기를 골고루 즐기면서, 그때그때 끌리는 대로 선택하는 걸 좋아하죠. 정해진 취향보다 그 순간의 기분을 더 따르는 편이에요.',
        compatibility:'당신처럼 열린 사람과 잘 맞아요. 틀에 가두지 않고 있는 그대로 봐주는 사람이면 편안한 관계가 될 거예요. 관계에 규칙을 너무 많이 정하지 않는 사람과 오히려 더 자연스럽게 오래갈 수 있어요.',
        strength:'어디에도 얽매이지 않는 유연함이에요. 상황에 맞게 자유자재로 바뀌는 적응력이 당신의 무기고, 새로운 환경에도 크게 스트레스받지 않고 잘 녹아드는 편이죠.',
        lifeGoal:'한 가지 정답보다 다양한 가능성이 열린 삶을 지향해요. 하나로 규정되지 않는 삶이 당신에게는 더 자연스러워요. 지금의 선택이 평생 갈 필요는 없다고 믿는, 유연한 인생관을 가진 사람이에요.',
        fanTrait:'틀에 얽매이지 않고 자유롭게 선택하는'},
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
    step3subPositive: (title) => `Glad you enjoyed "${title}"! Tell us which of the 10 aspects stood out to you.`,
    step3subNegative: () => `Sorry to hear that. Tell us which aspects fell short and we'll find something with the opposite vibe.`,
    step3Title: 'Rate the details',
    aspects: {
      direction: 'Direction', script: 'Script & Dialogue', originality: 'Originality', theme: 'Theme',
      miseEnScene: 'Mise-en-scène', acting: 'Acting', genre: 'Genre', editing: 'Editing', music: 'Music', immersion: 'Immersion',
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

    modeSelectCaption: 'Pick your ticket to start',
    modeTicket1Label: 'Similar to What<br>I Just Watched',
    modeTicket2Label: 'Quickly Find My<br>Kind of Movie',
    modeTicket3Label: 'Analyze Me Through<br>My Favorite Films',
    backToModesText: 'Try another way',

    mode2Eyebrow: 'Quickly Find My Kind of Movie',
    mode2QuizTitle: 'Just answer a few things',
    mode2QuizSub: "No rating or review needed — we'll find something for your mood right now.",
    mode2MoodLabel: 'What are you in the mood for?',
    mode2RuntimeLabel: 'Runtime',
    mode2DecadeLabel: 'Release Era',
    mode2SubmitBtn: 'Get Recommendations',
    mode2ResultTitle: 'How about these?',
    mode2RestartBtn: 'Start Over',
    mode2Disclaimer: 'Found live, right now, based on what you picked.',
    mode2ReasonText: 'Matched to your mood and picks',
    moodOptions: {
      action: 'Something exciting and thrilling', comedy: 'I want to laugh', thriller: 'Something tense and gripping',
      drama: 'A story that moves me', horror: 'A good scare works too', romance: 'A swoony romance',
    },

    mode3Eyebrow: 'Analyze Me Through My Favorite Films',
    mode3PickTitle: '🎬 Pick your all-time favorites',
    mode3PickSub: 'Pick 3-5 for a more accurate read. (Just for fun!)',
    mode3SearchPlaceholder: 'e.g. La La Land, Interstellar, Parasite',
    mode3PickedLabel: 'Your picks',
    mode3SubmitBtn: 'Analyze',
    mode3RestartBtn: 'Start Over',
    mode3RecLabel: 'Your movie match',
    mode3Disclaimer: "A playful read on your taste — not a real personality analysis :)",
    mode3ReasonTemplate: (trait) => `People who are ${trait} loved this movie`,
    mode3NeedMore: 'Pick at least 3 movies.',
    mode3VerdictTitle: (archetypeTitle) => `You're the <b>"${archetypeTitle}"</b> type`,
    mode3LabelPersonality: '🎭 What you seem like',
    mode3LabelCompat: "💞 Who you'd click with",
    mode3LabelStrength: '💪 Your biggest strength',
    mode3LabelLifeGoal: "🧭 The life you're after",
    archetypes: {
      adventurer: {title:'The Adventurer',
        personality:"You can't sit still. New thrills and challenges make your eyes light up, and you act before you hesitate. Rather than spend time planning, you'd rather jump in and learn by doing.",
        compatibility:"You balance well with someone calm and deliberate. Best of all is someone who'll drop everything and go with you on a whim, and someone who trusts your wild-seeming decisions can become a lifelong partner.",
        strength:"Decisiveness and drive. While others are still weighing options, you're already a step ahead, and you make your next move faster than most even in a crisis.",
        lifeGoal:'You value experience over stability — a good story beats a safe regret. More than anything, you want to spend your life saying "I tried it" more often than not.',
        fanTrait:'adventurous and quick to act without hesitation'},
      entertainer: {title:'The Entertainer',
        personality:"You can't stand a heavy mood. You find the funny angle in any room and naturally loosen things up. You rarely show it when you're struggling yourself — you check on everyone else's mood first.",
        compatibility:'You balance well with someone thoughtful and grounded. Someone who genuinely laughs at your jokes is a keeper, and it helps even more to have someone who occasionally asks how you\'re really doing.',
        strength:"You change the temperature of a room. Awkward silences don't survive long around you, and you have a knack for breaking the ice even among total strangers.",
        lifeGoal:"You'd rather live joyfully than seriously — every day should have some fun in it. Looking back, you want to remember a life full of laughter more than anything else.",
        fanTrait:'funny and great at lifting the mood'},
      empath: {title:'The Empath',
        personality:"You look closely at people and feelings, noticing what's left unsaid, and you love a deep conversation. Even the smallest change in someone's tone doesn't escape you.",
        compatibility:'You do well with someone who expresses their feelings openly — mutual honesty feels safer than assumed understanding. A relationship deepens fast with someone who doesn\'t take your thoughtfulness for granted.',
        strength:"Empathy. Your sensitivity to what people really feel is why they gravitate toward you, and you're often the person people trust with their hardest stories.",
        lifeGoal:"You value a few deep connections over many shallow ones. You'd rather have a handful of people who truly get you than a big circle that barely does.",
        fanTrait:'emotionally attuned and drawn to deep conversation'},
      thrillSeeker: {title:'The Thrill-Seeker',
        personality:"You actually enjoy a good scare. Tension makes your heart race, and unpredictable turns pull you in. A story you can't predict the ending of grips you far more than a safe, familiar one.",
        compatibility:"You click with someone fearless enough to jump in with you — overly cautious types slow you down. The best match says \"I'm in\" the moment you suggest something spontaneous.",
        strength:"A calm that shows up right when things get intense — you're already moving while others freeze, and you treat the unexpected as a fun twist rather than a problem.",
        lifeGoal:"You'd rather live an exciting life than a safe one — an unpredictable day feels more alive. Even buckled in, you're always more curious about what's around the next corner than the view outside.",
        fanTrait:'thrill-loving and fearless in the face of tension'},
      romantic: {title:'The Romantic',
        personality:'You treasure butterflies and emotional arcs, finding meaning in small moments and sincerity in relationships. You remember anniversaries and tiny details most people forget.',
        compatibility:"You do well with someone who isn't stingy with affection — small gestures returned in kind keep things going. You'll stay far more comfortable with someone whose warmth shows, even over someone quietly deep.",
        strength:'You cherish people and moments — memories with you tend to stay especially vivid, and you have a gift for making people feel like they truly matter.',
        lifeGoal:"You'd rather live a life that leaves feeling behind than one optimized for efficiency. You believe what stays with you isn't the outcome, but how it felt at the time.",
        fanTrait:'sentimental and openly affectionate'},
      strategist: {title:'The Strategist',
        personality:"You love the moment a puzzle clicks into place — piecing clues together to find your own answer. You'd much rather work out the reasoning yourself than just be told the conclusion.",
        compatibility:'You\'re complemented well by someone intuitive and free — they add unexpected fun to your plans. You get along even better with someone who respects your logic instead of being purely spontaneous.',
        strength:"Analytical depth — you notice the details everyone else missed, and you're just as good at breaking down something complicated so it actually makes sense.",
        lifeGoal:"You'd rather understand your way through life than just go by gut feeling. It has to make sense to really become yours — you can't stand leaving something half-understood.",
        fanTrait:'logical and methodical about finding answers'},
      dreamer: {title:'The Dreamer',
        personality:"You love imagining worlds beyond this one. When others say something's impossible, you're already picturing how it could work. There are usually a few different worlds running in your head at once.",
        compatibility:'Grounded people help your ideas become real — you like someone who gets curious with you instead of laughing it off. You click especially well with someone who\'ll listen to your wildest idea with genuine interest.',
        strength:"Imagination — the ability to see possibilities no one else can yet, and a knack for finding a new story in things everyone else finds boring.",
        lifeGoal:"You'd rather chase an imagined path than follow a set one. You're drawn to the road no one's walked yet, and you trust the map you drew yourself more than the one everyone else follows.",
        fanTrait:'imaginative and always picturing new possibilities'},
      innocent: {title:'The Warm Heart',
        personality:'You find real happiness in warm, simple things. A gentle story moves you more than a complicated one, and even a small kindness stays with you a long time.',
        compatibility:'You feel at ease with someone unguarded and kind — sincerity without calculation opens you right up. You do far better with someone who treats you simply and warmly than with anything complicated.',
        strength:'A purity that sees people as they are — everyone drops their guard around you, and your unfiltered sincerity is exactly what puts people at ease.',
        lifeGoal:"You'd rather live warm and comfortable than complicated and grand. Small daily happiness means more to you than one big achievement — you know how to find joy in an ordinary day.",
        fanTrait:'warm and sincere without pretense'},
      seeker: {title:'The Seeker',
        personality:"You're drawn to true stories — real facts interest you more than fiction, and once curious, you dig all the way down. Learning one thing usually sends you looking for the story behind it.",
        compatibility:"You do well with someone who respects your curiosity — a good match digs for answers with you instead of brushing you off. Trust builds faster with someone who admits what they don't know instead of faking it.",
        strength:"Persistence — you're never satisfied with a half-known answer, which is exactly how you find the real one, and you catch the one detail everyone else skipped past.",
        lifeGoal:"You'd rather verify things yourself than take them on faith. You trust a truth you found yourself more than any answer someone handed you — you need to see it to believe it.",
        fanTrait:'curious and relentless about digging deeper'},
      warrior: {title:'The Believer',
        personality:'You value history and cause, thinking about your place in the bigger picture and acting on what you believe is right. Principle tends to come before convenience for you.',
        compatibility:"You get along well with someone equally principled — a partner who understands your convictions becomes a steady ally. Trust actually deepens with someone who'll argue their case seriously instead of just agreeing.",
        strength:"An unshakeable resolve — once you believe something's right, you follow through, and you don't get swept up just because the majority thinks otherwise.",
        lifeGoal:"You'd rather live a meaningful life than just get by — you want to be able to explain why you live the way you do. You lean toward the right path over the easy one.",
        fanTrait:'principled and resolute about what they believe'},
      freeSpirit: {title:'The Free Spirit',
        personality:"You're not boxed into one genre — you enjoy a wide range of stories and pick whatever calls to you in the moment. You follow the mood of the moment more than any fixed taste.",
        compatibility:'You do well with someone equally open — a relationship works best when neither of you tries to define the other. Things stay natural longer with someone who doesn\'t over-structure the relationship with rules.',
        strength:'Flexibility — you adapt freely to whatever the moment calls for, and you settle into new environments without much stress at all.',
        lifeGoal:"You'd rather keep your options open than settle on one right answer. A life that can't be pinned down feels more natural to you — today's choice doesn't have to last forever, and that's exactly how you like it.",
        fanTrait:'unconventional and free in how they choose'},
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
const ASPECT_KEYS = ['direction','script','originality','theme','miseEnScene','acting','genre','editing','music','immersion'];
/* 03단계엔 핵심 6개만, 나머지(독창성/연기/편집/음악)는 04단계 "세부 평가 더 보기"로 이동 — 전부 선택 사항 */
const STEP3_ASPECT_KEYS = ['genre','direction','script','theme','miseEnScene','immersion'];
const EXTRA_ASPECT_KEYS = ['originality','acting','editing','music'];
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

  document.querySelectorAll('[data-lang="ko"]').forEach(b=> b.classList.toggle('active', state.lang==='ko'));
  document.querySelectorAll('[data-lang="en"]').forEach(b=> b.classList.toggle('active', state.lang==='en'));

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
  ['1','2','3'].forEach(n=> $('#backToModes'+n+'Text').textContent = t('backToModesText'));

  $('#mode2Eyebrow').textContent = t('mode2Eyebrow');
  $('#mode2QuizTitle').textContent = t('mode2QuizTitle');
  $('#mode2QuizSub').textContent = t('mode2QuizSub');
  $('#mode2MoodLabel').textContent = t('mode2MoodLabel');
  $('#mode2RuntimeLabel').textContent = t('mode2RuntimeLabel');
  $('#mode2DecadeLabel').textContent = t('mode2DecadeLabel');
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
  $('#mode3DisclaimerText').textContent = t('mode3Disclaimer');
  if($('#mode3Root').classList.contains('show')) renderMode3PickedChips();
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
document.querySelectorAll('[data-lang="ko"]').forEach(b=> b.onclick = ()=> setLang('ko'));
document.querySelectorAll('[data-lang="en"]').forEach(b=> b.onclick = ()=> setLang('en'));

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
    d.predictedRating = predictRating(score, positive);
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

$('#historyBtn').onclick = ()=>{
  historyOpen = !historyOpen;
  if(historyOpen) recsGalleryOpen = false;
  renderHistory();
  renderRecsGallery();
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
    intro.classList.add('hide');
    setTimeout(()=>{ intro.style.display='none'; }, 450);
    showRoot(rootId);
    if(onFirstEnter) onFirstEnter();
    if(typeof gtag === 'function') gtag('event', 'mode_select', {mode: modeNumber});
  }

  $('#modeTicket1').addEventListener('click', ()=> enterMode('appRoot', 1));
  $('#modeTicket2').addEventListener('click', ()=> enterMode('mode2Root', 2, setupMode2));
  $('#modeTicket3').addEventListener('click', ()=> enterMode('mode3Root', 3, setupMode3));

  ['1','2','3'].forEach(n=>{
    const btn = $('#backToModes'+n);
    if(!btn) return;
    btn.addEventListener('click', ()=>{
      showRoot(null);
      intro.style.display='flex';
      requestAnimationFrame(()=> intro.classList.remove('hide'));
    });
  });
}

/* =========================================================
   모드 2: 나와 맞는 영화 찾기 — 별점·리뷰 없이 짧은 설문으로 바로 추천
   ========================================================= */
const MOOD_OPTIONS = [
  {value:'action', genres:[28,12]},
  {value:'comedy', genres:[35]},
  {value:'thriller', genres:[53,9648]},
  {value:'drama', genres:[18]},
  {value:'horror', genres:[27]},
  {value:'romance', genres:[10749]},
];
let mode2State = { mood:null, runtime:null, decade:null };
let mode2Setup = false;

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
      $('#mode2Submit').disabled = !mode2State.mood;
    };
    container.appendChild(chip);
  });
}

function renderMode2Quiz(){
  mode2RenderChipGroup($('#mode2MoodChips'), MOOD_OPTIONS,
    (opt)=> t('moodOptions')[opt.value],
    (opt)=> mode2State.mood===opt.value,
    (opt)=>{ mode2State.mood = opt.value; });
  mode2RenderChipGroup($('#mode2RuntimeChips'), RUNTIME_OPTIONS,
    (opt)=> t(opt.key),
    (opt)=> mode2State.runtime===opt.value,
    (opt)=>{ mode2State.runtime = opt.value; });
  mode2RenderChipGroup($('#mode2DecadeChips'), DECADE_OPTIONS,
    (opt)=> t(opt.key),
    (opt)=> mode2State.decade===opt.value,
    (opt)=>{ mode2State.decade = opt.value; });
  $('#mode2Submit').disabled = !mode2State.mood;
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
  return {
    id: c.id, title:c.title, year:(c.release_date||'').slice(0,4)||'?',
    director: cr.director || t('unknownDirector'), actors:cr.actors||[],
    poster: c.poster_path ? IMG_W200+c.poster_path : null,
    overview: c.overview || '',
    genreIds: c.genre_ids || (detail.genres||[]).map(g=>g.id) || [],
    runtime: detail.runtime || null,
    imdbUrl: ext.imdb_id ? ('https://www.imdb.com/title/'+ext.imdb_id+'/') : imdbSearchUrl(c.title),
    ott: providers,
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

async function runMode2Recommend(){
  if(!mode2State.mood) return;
  const btn = $('#mode2Submit');
  btn.disabled = true;
  const originalText = btn.textContent;
  btn.textContent = t('loadingNote');
  try{
    const mood = MOOD_OPTIONS.find(m=>m.value===mode2State.mood);
    const params = { sort_by:'popularity.desc', 'vote_count.gte':50, page:1, with_genres: mood.genres.join('|') };
    if(mode2State.runtime) params['with_runtime.lte'] = mode2State.runtime;
    if(mode2State.decade==='classic') params['primary_release_date.lte'] = '1979-12-31';
    else if(mode2State.decade){
      params['primary_release_date.gte'] = mode2State.decade + '-01-01';
      params['primary_release_date.lte'] = (mode2State.decade + 9) + '-12-31';
    }
    let results = await tmdbDiscover(params);
    if(results.length < 4){
      const loose = { sort_by:'popularity.desc', 'vote_count.gte':20, page:1, with_genres: mood.genres.join('|') };
      const more = await tmdbDiscover(loose);
      const seen = new Set(results.map(r=>r.id));
      more.forEach(m=>{ if(!seen.has(m.id)){ results.push(m); seen.add(m.id); } });
    }
    const top = results.slice(0,4);
    const cards = await Promise.all(top.map(detailMovieForCard));
    const list = $('#mode2ResultList');
    list.innerHTML='';
    if(cards.length===0){
      list.innerHTML = `<div class="sub">${t('noResultsFound')}</div>`;
    }else{
      cards.forEach(movie=> list.appendChild(renderSimpleTicketCard(movie, t('mode2ReasonText'))));
    }
    $('#mode2QuizPanel').style.display='none';
    $('#mode2ResultPanel').style.display='block';
    window.scrollTo({top:0, behavior:'smooth'});
    if(typeof gtag === 'function') gtag('event', 'mode2_result', {mood: mode2State.mood});
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
  $('#mode2Restart').onclick = ()=>{
    mode2State = { mood:null, runtime:null, decade:null };
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
let mode3Picked = [];
let mode3Setup = false;
let mode3SearchDebounce = null;

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
}

async function renderMode3Grid(filter){
  const grid = $('#mode3Grid');
  if(!filter || !filter.trim()){ grid.innerHTML=''; return; }
  if(!serverAvailable){ grid.innerHTML = `<div class="empty-note">${t('emptyNoteNoServer')}</div>`; return; }
  grid.innerHTML = `<div class="loading-note">${t('loadingNote')}</div>`;
  try{
    const results = await tmdbSearch(filter);
    if(results.length===0){ grid.innerHTML = `<div class="empty-note">${t('emptyNoteNoResults')}</div>`; return; }
    grid.innerHTML='';
    results.forEach(m=>{
      const picked = mode3Picked.some(p=>p.id===m.tmdbId);
      const div = document.createElement('div');
      div.className='movie-card' + (picked ? ' selected' : '');
      div.innerHTML = `${m.poster? `<img src="${m.poster}" alt="">` : '<img alt="">'}<div class="meta"><div class="t">${m.title}</div><div class="y">${m.year}</div></div>`;
      if(picked){
        div.style.opacity='0.5';
      }else{
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
      }
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

async function runMode3Analyze(){
  if(mode3Picked.length<3){ alert(t('mode3NeedMore')); return; }
  const btn = $('#mode3Submit');
  btn.disabled = true;
  const originalText = btn.textContent;
  btn.textContent = t('loadingNote');
  try{
    const archetypeKey = pickArchetype(mode3Picked);
    const archetype = t('archetypes')[archetypeKey];
    const verdict = $('#mode3Verdict');
    verdict.classList.remove('negative');
    verdict.innerHTML = `
      <div>
        <div>${t('mode3VerdictTitle')(archetype.title)}</div>
        <div class="mode3-trait"><b>${t('mode3LabelPersonality')}</b> ${archetype.personality}</div>
        <div class="mode3-trait"><b>${t('mode3LabelCompat')}</b> ${archetype.compatibility}</div>
        <div class="mode3-trait"><b>${t('mode3LabelStrength')}</b> ${archetype.strength}</div>
        <div class="mode3-trait"><b>${t('mode3LabelLifeGoal')}</b> ${archetype.lifeGoal}</div>
      </div>
    `;

    const bucket = ARCHETYPE_BUCKETS.find(b=>b.key===archetypeKey);
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
    mode3SearchDebounce = setTimeout(()=> renderMode3Grid(val), 400);
  });
  $('#mode3Submit').onclick = runMode3Analyze;
  $('#mode3Restart').onclick = ()=>{
    mode3Picked = [];
    $('#mode3Search').value='';
    $('#mode3Grid').innerHTML='';
    renderMode3PickedChips();
    $('#mode3Submit').disabled = true;
    $('#mode3ResultPanel').style.display='none';
    $('#mode3PickPanel').style.display='block';
  };
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
