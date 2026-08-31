const values = [
  { word: "Aandacht", desc: "met echte interesse aanwezig zijn bij jezelf of de ander" },
  { word: "Acceptatie", desc: "mogen zijn wie je bent, zonder steeds te moeten veranderen" },
  { word: "Avontuur", desc: "nieuwe dingen beleven en uit je vaste patroon stappen" },
  { word: "Balans", desc: "ruimte houden voor meerdere kanten van je leven" },
  { word: "Betrouwbaarheid", desc: "doen wat je zegt en op elkaar kunnen rekenen" },
  { word: "Betekenis", desc: "het gevoel hebben dat je leven ergens over gaat" },
  { word: "Bijdragen", desc: "iets doen dat waarde heeft voor anderen of de wereld" },
  { word: "Blijheid", desc: "lichtheid, plezier en opgewektheid kunnen ervaren" },
  { word: "Compassie", desc: "mild en begripvol omgaan met jezelf en anderen" },
  { word: "Contact", desc: "echte verbinding voelen met mensen om je heen" },
  { word: "Controle", desc: "grip willen hebben op wat er gebeurt" },
  { word: "Creativiteit", desc: "iets maken, bedenken of op je eigen manier vormgeven" },
  { word: "Dankbaarheid", desc: "zien wat er goed is, ook als niet alles goed gaat" },
  { word: "Duidelijkheid", desc: "weten waar je aan toe bent en wat er verwacht wordt" },
  { word: "Eerlijkheid", desc: "oprecht zijn en de waarheid durven zeggen" },
  { word: "Eigenheid", desc: "jezelf mogen zijn, ook als dat anders is dan anderen" },
  { word: "Eenvoud", desc: "het leven overzichtelijk en niet onnodig ingewikkeld maken" },
  { word: "Energie", desc: "leven op een manier die je kracht geeft in plaats van leegtrekt" },
  { word: "Erbij horen", desc: "je welkom voelen en niet buitengesloten worden" },
  { word: "Erkenning", desc: "gezien worden in wie je bent en wat je doet" },
  { word: "Familie", desc: "verbonden zijn met je gezin, familie of naasten" },
  { word: "Flexibiliteit", desc: "kunnen meebewegen als dingen anders lopen" },
  { word: "Geborgenheid", desc: "je veilig, gedragen en thuis voelen bij iemand of ergens" },
  { word: "Geduld", desc: "tijd durven nemen en niet alles meteen hoeven oplossen" },
  { word: "Gelijkwaardigheid", desc: "het gevoel dat niemand boven of onder de ander staat" },
  { word: "Geloof", desc: "steun vinden in levensbeschouwing, religie of vertrouwen" },
  { word: "Geluk", desc: "een gevoel van tevredenheid en levensvreugde ervaren" },
  { word: "Gezondheid", desc: "goed zorgen voor je lichaam en geest" },
  { word: "Gezien worden", desc: "merken dat iemand echt aandacht heeft voor jou" },
  { word: "Groei", desc: "jezelf ontwikkelen en stap voor stap verder komen" },
  { word: "Harmonie", desc: "rustige verhoudingen zonder voortdurende spanning of strijd" },
  { word: "Helpen", desc: "er voor anderen zijn wanneer dat nodig is" },
  { word: "Hoop", desc: "blijven voelen dat verandering mogelijk is" },
  { word: "Humor", desc: "kunnen lachen en lucht houden in moeilijke momenten" },
  { word: "Innerlijke rust", desc: "van binnen kalmte ervaren, ook als het leven druk is" },
  { word: "Inspiratie", desc: "geraakt worden door ideeën, mensen of mogelijkheden" },
  { word: "Integriteit", desc: "leven op een manier die klopt met je geweten" },
  { word: "Intimiteit", desc: "emotioneel of lichamelijk dichtbij iemand kunnen zijn" },
  { word: "Keuzevrijheid", desc: "zelf richting kunnen geven aan je leven" },
  { word: "Kracht", desc: "voelen dat je iets aankunt, ook als het moeilijk is" },
  { word: "Kwaliteit", desc: "zorg en aandacht besteden aan wat je doet" },
  { word: "Leren", desc: "nieuwsgierig blijven en nieuwe inzichten opdoen" },
  { word: "Liefde", desc: "warmte, zorg en genegenheid geven en ontvangen" },
  { word: "Loyaliteit", desc: "trouw blijven aan mensen of afspraken die belangrijk zijn" },
  { word: "Moed", desc: "iets doen dat spannend is, omdat het belangrijk voor je is" },
  { word: "Nabijheid", desc: "mensen dichtbij je hebben op wie je kunt terugvallen" },
  { word: "Natuur", desc: "verbinding voelen met buiten zijn, dieren, planten of seizoenen" },
  { word: "Onafhankelijkheid", desc: "niet te veel afhankelijk hoeven zijn van anderen" },
  { word: "Ontspanning", desc: "kunnen loslaten, herstellen en niets hoeven" },
  { word: "Ontwikkeling", desc: "blijven groeien in wie je bent of wat je kunt" },
  { word: "Openheid", desc: "eerlijk kunnen delen wat er in je omgaat" },
  { word: "Orde", desc: "structuur, overzicht en netheid belangrijk vinden" },
  { word: "Passie", desc: "iets doen waar je vuur, zin of diepe interesse bij voelt" },
  { word: "Plezier", desc: "ruimte maken voor leuke, fijne en speelse momenten" },
  { word: "Privacy", desc: "ruimte hebben die van jou is en niet steeds gedeeld hoeft te worden" },
  { word: "Rechtvaardigheid", desc: "eerlijkheid belangrijk vinden in hoe mensen behandeld worden" },
  { word: "Respect", desc: "serieus genomen worden en anderen ook waardig behandelen" },
  { word: "Resultaat", desc: "merken dat je inspanning ergens toe leidt" },
  { word: "Ruimte", desc: "niet klem zitten, maar ademruimte en mogelijkheden voelen" },
  { word: "Rust", desc: "minder drukte, spanning of moeten ervaren" },
  { word: "Samenwerking", desc: "iets samen doen en elkaar aanvullen" },
  { word: "Schoonheid", desc: "geraakt worden door wat mooi, verzorgd of bijzonder is" },
  { word: "Speelsheid", desc: "niet alles zwaar maken en vrij kunnen proberen" },
  { word: "Spiritualiteit", desc: "verbinding voelen met iets groters dan jezelf" },
  { word: "Stabiliteit", desc: "vaste grond, voorspelbaarheid en continuiteit ervaren" },
  { word: "Status", desc: "waardering krijgen voor je positie, rol of prestatie" },
  { word: "Succes", desc: "doelen halen die voor jou belangrijk zijn" },
  { word: "Tijd", desc: "genoeg ruimte hebben voor wat echt belangrijk is" },
  { word: "Toewijding", desc: "ergens met aandacht en trouw voor blijven gaan" },
  { word: "Trots", desc: "met voldoening kunnen kijken naar wie je bent of wat je doet" },
  { word: "Uitdaging", desc: "geprikkeld worden om iets moeilijks of nieuws aan te gaan" },
  { word: "Veerkracht", desc: "weer kunnen opstaan na tegenslag" },
  { word: "Veiligheid", desc: "je beschermd voelen en niet voortdurend op je hoede zijn" },
  { word: "Verbondenheid", desc: "voelen dat je niet alleen bent" },
  { word: "Verantwoordelijkheid", desc: "zorg dragen voor wat van jou is of bij jou hoort" },
  { word: "Vertrouwen", desc: "durven rekenen op jezelf, anderen of het leven" },
  { word: "Verwondering", desc: "openstaan voor wat bijzonder, nieuw of mooi is" },
  { word: "Vrijheid", desc: "zelf mogen kiezen hoe je leeft en beweegt" },
  { word: "Vriendschap", desc: "gelijkwaardig contact met mensen die je dierbaar zijn" },
  { word: "Waarheid", desc: "willen dat dingen kloppen en niet worden weggestopt" },
  { word: "Waardering", desc: "merken dat je inzet of aanwezigheid ertoe doet" },
  { word: "Wijsheid", desc: "leren van ervaring en bewuste keuzes maken" },
  { word: "Zelfrespect", desc: "jezelf serieus nemen en niet over je grenzen gaan" },
  { word: "Zelfstandigheid", desc: "dingen op eigen kracht kunnen doen" },
  { word: "Zekerheid", desc: "houvast hebben en weten dat de basis klopt" },
  { word: "Zingeving", desc: "richting en betekenis ervaren in wat je doet" },
  { word: "Zorgzaamheid", desc: "aandacht hebben voor wat iemand nodig heeft" },
  { word: "Autonomie", desc: "zelf keuzes kunnen maken en je eigen richting mogen volgen" },
  { word: "Authenticiteit", desc: "leven op een manier die echt bij jou past" },
  { word: "Grenzen", desc: "kunnen aangeven wat wel en niet goed voor je is" },
  { word: "Vrede", desc: "innerlijke of onderlinge rust zonder strijd" },
  { word: "Vernieuwing", desc: "openstaan voor verandering en nieuwe mogelijkheden" },
  { word: "Zorgeloosheid", desc: "even vrij zijn van zorgen, druk of spanning" },
  { word: "Discipline", desc: "volhouden en doen wat nodig is, ook zonder zin" },
  { word: "Mildheid", desc: "zachter kijken naar jezelf en anderen" },
  { word: "Gulheid", desc: "kunnen geven zonder jezelf kwijt te raken" },
  { word: "Ambitie", desc: "willen groeien, bereiken of ergens beter in worden" },
  { word: "Thuiskomen", desc: "een plek of mens hebben waar je jezelf kunt laten zakken" },
  { word: "Invloed", desc: "het gevoel dat jouw stem en keuzes verschil maken" },
  { word: "Dapperheid", desc: "iets aangaan ondanks angst of onzekerheid" },
];

const categoryInfo = {
  verbinding: {
    title: "Verbinding en nabijheid",
    desc: "Relaties, gezien worden, liefde en emotionele steun lijken veel gewicht te hebben.",
    question: "Waar voelt u zich op dit moment echt gezien, en waar juist niet?",
  },
  autonomie: {
    title: "Autonomie en eigenheid",
    desc: "Vrijheid, zelf richting geven en trouw blijven aan uzelf lijken belangrijk.",
    question: "Waar kunt u nu eigen keuzes maken, en waar voelt u zich klemgezet?",
  },
  veiligheid: {
    title: "Rust, veiligheid en houvast",
    desc: "Kalmte, voorspelbaarheid, herstel en bescherming lijken belangrijke behoeften.",
    question: "Welke situaties geven u rust, en welke zetten uw systeem steeds aan?",
  },
  groei: {
    title: "Groei en ontwikkeling",
    desc: "Leren, uitdaging, ontwikkeling en vooruitkomen lijken veel betekenis te hebben.",
    question: "Waar voelt u dat u groeit, en waar staat u al langer stil?",
  },
  betekenis: {
    title: "Betekenis en zingeving",
    desc: "Iets doen dat klopt, bijdraagt of ergens over gaat lijkt belangrijk.",
    question: "Wat maakt voor u dat een dag of keuze echt de moeite waard voelt?",
  },
  erkenning: {
    title: "Erkenning en waardering",
    desc: "Serieus genomen worden, respect en waardering lijken gevoelig en belangrijk.",
    question: "Waar wordt uw inzet gezien, en waar voelt u zich tekortgedaan?",
  },
  plezier: {
    title: "Plezier en lichtheid",
    desc: "Humor, blijheid, speelsheid en ontspanning lijken nodig om lucht te houden.",
    question: "Waar zit nog plezier in uw leven, en wat is de laatste tijd verdwenen?",
  },
  integriteit: {
    title: "Eerlijkheid en innerlijk kompas",
    desc: "Oprechtheid, rechtvaardigheid en leven naar uw geweten lijken belangrijk.",
    question: "Waar doet u iets dat eigenlijk niet meer klopt voor uw gevoel?",
  },
  kracht: {
    title: "Kracht en veerkracht",
    desc: "Moed, volhouden en kunnen opstaan na tegenslag lijken bij u te resoneren.",
    question: "Wanneer merkt u dat u sterker bent dan u zelf soms denkt?",
  },
};

const categoryByWord = {
  Aandacht: "verbinding",
  Acceptatie: "veiligheid",
  Avontuur: "groei",
  Balans: "veiligheid",
  Betrouwbaarheid: "veiligheid",
  Betekenis: "betekenis",
  Bijdragen: "betekenis",
  Blijheid: "plezier",
  Compassie: "verbinding",
  Contact: "verbinding",
  Controle: "veiligheid",
  Creativiteit: "groei",
  Dankbaarheid: "betekenis",
  Duidelijkheid: "veiligheid",
  Eerlijkheid: "integriteit",
  Eigenheid: "autonomie",
  Eenvoud: "veiligheid",
  Energie: "kracht",
  "Erbij horen": "verbinding",
  Erkenning: "erkenning",
  Familie: "verbinding",
  Flexibiliteit: "groei",
  Geborgenheid: "veiligheid",
  Geduld: "veiligheid",
  Gelijkwaardigheid: "erkenning",
  Geloof: "betekenis",
  Geluk: "plezier",
  Gezondheid: "veiligheid",
  "Gezien worden": "erkenning",
  Groei: "groei",
  Harmonie: "veiligheid",
  Helpen: "betekenis",
  Hoop: "kracht",
  Humor: "plezier",
  "Innerlijke rust": "veiligheid",
  Inspiratie: "groei",
  Integriteit: "integriteit",
  Intimiteit: "verbinding",
  Keuzevrijheid: "autonomie",
  Kracht: "kracht",
  Kwaliteit: "integriteit",
  Leren: "groei",
  Liefde: "verbinding",
  Loyaliteit: "verbinding",
  Moed: "kracht",
  Nabijheid: "verbinding",
  Natuur: "veiligheid",
  Onafhankelijkheid: "autonomie",
  Ontspanning: "plezier",
  Ontwikkeling: "groei",
  Openheid: "verbinding",
  Orde: "veiligheid",
  Passie: "betekenis",
  Plezier: "plezier",
  Privacy: "autonomie",
  Rechtvaardigheid: "integriteit",
  Respect: "erkenning",
  Resultaat: "erkenning",
  Ruimte: "autonomie",
  Rust: "veiligheid",
  Samenwerking: "verbinding",
  Schoonheid: "betekenis",
  Speelsheid: "plezier",
  Spiritualiteit: "betekenis",
  Stabiliteit: "veiligheid",
  Status: "erkenning",
  Succes: "erkenning",
  Tijd: "autonomie",
  Toewijding: "betekenis",
  Trots: "erkenning",
  Uitdaging: "groei",
  Veerkracht: "kracht",
  Veiligheid: "veiligheid",
  Verbondenheid: "verbinding",
  Verantwoordelijkheid: "integriteit",
  Vertrouwen: "veiligheid",
  Verwondering: "betekenis",
  Vrijheid: "autonomie",
  Vriendschap: "verbinding",
  Waarheid: "integriteit",
  Waardering: "erkenning",
  Wijsheid: "groei",
  Zelfrespect: "autonomie",
  Zelfstandigheid: "autonomie",
  Zekerheid: "veiligheid",
  Zingeving: "betekenis",
  Zorgzaamheid: "verbinding",
  Autonomie: "autonomie",
  Authenticiteit: "autonomie",
  Grenzen: "autonomie",
  Vrede: "veiligheid",
  Vernieuwing: "groei",
  Zorgeloosheid: "plezier",
  Discipline: "kracht",
  Mildheid: "veiligheid",
  Gulheid: "verbinding",
  Ambitie: "groei",
  Thuiskomen: "veiligheid",
  Invloed: "autonomie",
  Dapperheid: "kracht",
};

const enrichedValues = values.map((value) => ({
  ...value,
  category: categoryByWord[value.word] || "betekenis",
}));

const state = {
  screen: "intro",
  cycle: 0,
  page: 0,
  currentOptions: [],
  selectedThisRound: [],
  pool: [],
  cycleSelections: [],
  allChosen: [],
  history: [],
  profile: null,
  finalValues: [],
};

const app = document.querySelector("#app");

function iconCompass() {
  return `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Z" stroke="currentColor" stroke-width="1.8"/>
      <path d="m15.7 8.3-2.1 5.3-5.3 2.1 2.1-5.3 5.3-2.1Z" fill="currentColor"/>
    </svg>`;
}

function valueIcon(category) {
  const icons = {
    verbinding: `
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M17 22a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM31 22a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" stroke="currentColor" stroke-width="2.4"/>
        <path d="M8 38c1.5-7 6.2-11 12-11 2.1 0 4 .5 5.6 1.5M40 38c-1.5-7-6.2-11-12-11-2.1 0-4 .5-5.6 1.5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>
      </svg>`,
    autonomie: `
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M24 40V10" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>
        <path d="M24 25c-8 0-13-5-14-14 9 1 14 6 14 14ZM25 26c8 0 13-5 14-14-9 1-14 6-14 14Z" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/>
      </svg>`,
    veiligheid: `
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M24 7 38 12v11c0 9-5.7 15.2-14 18-8.3-2.8-14-9-14-18V12l14-5Z" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/>
        <path d="m17 24 5 5 10-11" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
    groei: `
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M10 36h28M14 32l8-8 6 5 10-13" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M32 16h6v6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
    betekenis: `
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M24 39s-14-8.7-14-19a7.5 7.5 0 0 1 14-3.8A7.5 7.5 0 0 1 38 20c0 10.3-14 19-14 19Z" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/>
      </svg>`,
    erkenning: `
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M24 8 28.5 18l10.5 1-8 7.2 2.4 10.4L24 31.2l-9.4 5.4L17 26.2l-8-7.2 10.5-1L24 8Z" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/>
      </svg>`,
    plezier: `
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M24 40c8.8 0 16-7.2 16-16S32.8 8 24 8 8 15.2 8 24s7.2 16 16 16Z" stroke="currentColor" stroke-width="2.4"/>
        <path d="M17 21h.1M31 21h.1M17 28c3.8 4 10.2 4 14 0" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
      </svg>`,
    integriteit: `
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M24 9v30M12 17h24M15 17l-7 13h14l-7-13ZM33 17l-7 13h14l-7-13Z" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
    kracht: `
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M27 7 12 27h11l-2 14 15-20H25l2-14Z" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/>
      </svg>`,
  };

  return icons[category] || icons.betekenis;
}

function shell(content, showReset = true) {
  return `
    <section class="shell">
      <div class="topbar">
        <div class="brand"><span class="mark">${iconCompass()}</span><span>Kernwaardenkompas</span></div>
        ${showReset ? `<button class="ghost" data-action="reset">Begin opnieuw</button>` : ""}
      </div>
      ${content}
    </section>`;
}

function shuffle(items) {
  return [...items]
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

function startCompass() {
  state.screen = "choice";
  state.cycle = 1;
  state.page = 0;
  state.pool = shuffle(enrichedValues);
  state.currentOptions = [];
  state.selectedThisRound = [];
  state.cycleSelections = [];
  state.allChosen = [];
  state.history = [];
  state.profile = null;
  state.finalValues = [];
  drawCurrentPage();
}

function drawCurrentPage() {
  state.currentOptions = state.pool.slice(state.page * 9, state.page * 9 + 9);
  state.selectedThisRound = [];
  render();
}

function uniqueByWord(items) {
  const seen = new Set();
  return items.filter((item) => {
    if (seen.has(item.word)) return false;
    seen.add(item.word);
    return true;
  });
}

function toggleValue(word) {
  if (state.selectedThisRound.includes(word)) {
    state.selectedThisRound = state.selectedThisRound.filter((item) => item !== word);
    render();
    return;
  }

  state.selectedThisRound = [...state.selectedThisRound, word];
  render();
}

function submitRound() {
  state.history.push({
    cycle: state.cycle,
    page: state.page,
    pool: state.pool,
    currentOptions: state.currentOptions,
    selectedThisRound: state.selectedThisRound,
    cycleSelections: state.cycleSelections,
    allChosen: state.allChosen,
  });

  const selectedValues = state.selectedThisRound
    .map((word) => enrichedValues.find((value) => value.word === word))
    .filter(Boolean);
  state.cycleSelections = uniqueByWord([...state.cycleSelections, ...selectedValues]);
  state.allChosen = [...state.allChosen, ...selectedValues];

  if (state.page < totalPages() - 1) {
    state.page += 1;
    drawCurrentPage();
    return;
  }

  finishCycle();
}

function goBack() {
  const previous = state.history.pop();
  if (!previous) return;
  state.cycle = previous.cycle;
  state.page = previous.page;
  state.pool = previous.pool;
  state.currentOptions = previous.currentOptions;
  state.selectedThisRound = previous.selectedThisRound;
  state.cycleSelections = previous.cycleSelections;
  state.allChosen = previous.allChosen;
  render();
}

function finishCycle() {
  const chosen = uniqueByWord(state.cycleSelections);

  if (chosen.length === 0) {
    state.screen = "noSelection";
    render();
    return;
  }

  if (chosen.length <= 3) {
    state.finalValues = chosen;
    buildProfile();
    state.screen = "rank";
    render();
    return;
  }

  state.cycle += 1;
  state.page = 0;
  state.pool = shuffle(chosen);
  state.cycleSelections = [];
  drawCurrentPage();
}

function totalPages() {
  return Math.ceil(state.pool.length / 9);
}

function selectedValues() {
  return state.finalValues.length ? state.finalValues : state.allChosen;
}

function categoryScores() {
  return selectedValues().reduce((scores, value) => {
    scores[value.category] = (scores[value.category] || 0) + 1;
    return scores;
  }, {});
}

function topCategories(limit = 3) {
  return Object.entries(categoryScores()).sort((a, b) => b[1] - a[1]).slice(0, limit);
}

function buildProfile() {
  state.profile = {
    categories: topCategories(3).map(([category, score]) => ({
      key: category,
      score,
      ...categoryInfo[category],
    })),
    totalSelected: selectedValues().length,
    rounds: state.cycle,
  };
}

function moveRank(index, direction) {
  const target = index + direction;
  if (target < 0 || target >= state.finalValues.length) return;
  const updated = [...state.finalValues];
  [updated[index], updated[target]] = [updated[target], updated[index]];
  state.finalValues = updated;
  render();
}

function renderIntro() {
  app.innerHTML = shell(
    `<section class="panel intro">
      <div class="intro-grid">
        <div class="shell">
          <h1>Wat is belangrijk voor u?</h1>
          <p class="lead">Uw hulpverlener heeft u gevraagd dit kernwaardenkompas in te vullen. Kies steeds de kaarten die jou aanspreken en voor jou belangrijk zijn.</p>
          <button class="primary" data-action="start">Start het kompas</button>
        </div>
        <aside class="intro-card">
          <h3>Zo werkt het</h3>
          <ol class="steps">
            <li><span>1</span><p>U bekijkt 100 kernwaarden, steeds negen kaarten tegelijk.</p></li>
            <li><span>2</span><p>Kies per scherm een of meer waarden die belangrijk voelen. Overslaan mag ook.</p></li>
            <li><span>3</span><p>Uw gekozen kaarten komen opnieuw terug, net zolang tot er drie kernwaarden overblijven.</p></li>
          </ol>
          <p class="small-note">Er worden geen gegevens opgeslagen. De uitslag blijft op uw scherm, zodat u die mee kunt nemen naar het gesprek.</p>
        </aside>
      </div>
    </section>`,
    false,
  );
}

function renderChoice() {
  const selectedCount = state.cycleSelections.length + state.selectedThisRound.length;
  const pageCount = totalPages();
  const progress = Math.round(((state.page + 1) / pageCount) * 100);
  const phaseLabel = state.cycle === 1 ? "Alle kaarten" : `Keuzeronde ${state.cycle}`;
  app.innerHTML = shell(
    `<section class="panel choice-panel">
      <div class="progress-wrap">
        <div class="progress-label">
          <span>${phaseLabel} · stap ${state.page + 1} van ${pageCount}</span>
          <span>${selectedCount} gekozen in deze ronde</span>
        </div>
        <div class="progress" style="--progress: ${progress}%"><span></span></div>
      </div>
      <div class="choice-head">
        <h2>Welke waarden zijn voor u belangrijk?</h2>
        <p class="body-text">${state.cycle === 1 ? "Kies een of meerdere kaarten die jou aanspreken of belangrijk zijn." : "Kies uit deze eerder gekozen kaarten opnieuw wat het meest klopt. Zo wordt de stapel kleiner."}</p>
        <p class="choice-count">${state.selectedThisRound.length} gekozen op dit scherm</p>
      </div>
      <div class="choice-grid">
        ${state.currentOptions.map(renderChoiceButton).join("")}
      </div>
      <div class="toolbar">
        <div class="quiet-actions">
          <button class="ghost" data-action="back" ${state.history.length ? "" : "disabled"}>Vorige</button>
          <button class="ghost" data-action="skip-page">Geen van deze</button>
        </div>
        <button class="primary" data-action="submit-round">Verder</button>
      </div>
      <p class="small-note">${state.cycle === 1 ? "Eerst komen alle kaarten langs. Daarna gaat u verder met alleen de kaarten die u zelf gekozen heeft." : `Deze ronde bestaat uit ${state.pool.length} gekozen kaarten. Het doel is om uiteindelijk op 3 uit te komen.`}</p>
    </section>`,
  );
}

function renderChoiceButton(value) {
  const selected = state.selectedThisRound.includes(value.word);
  return `
    <button class="choice ${selected ? "selected" : ""}" data-action="choose" data-word="${value.word}" aria-pressed="${selected}">
      <span class="value-illustration category-${value.category}">${valueIcon(value.category)}</span>
      <span class="choice-word">${value.word}</span>
      <span class="choice-desc">${value.desc}</span>
    </button>`;
}

function renderRank() {
  app.innerHTML = shell(
    `<section class="panel choice-panel">
      <div class="choice-head">
        <h2>Zet uw drie kernwaarden op volgorde</h2>
        <p class="body-text">Dit zijn de waarden die overblijven na het kiezen. Zet ze in de volgorde die voor u het meest klopt. Nummer 1 heeft het meeste gewicht.</p>
      </div>
      <ol class="rank-list">
        ${state.finalValues.map(renderRankItem).join("")}
      </ol>
      <div class="toolbar">
        <button class="ghost" data-action="choice-back">Terug naar vorige stap</button>
        <button class="primary" data-action="finish">Bekijk uitslag</button>
      </div>
    </section>`,
  );
}

function renderRankItem(value, index) {
  return `
    <li class="rank-item">
      <span class="rank-number">${index + 1}</span>
      <span class="mini-illustration category-${value.category}">${valueIcon(value.category)}</span>
      <span class="rank-copy"><strong>${value.word}</strong><span>${value.desc}</span></span>
      <span class="move-actions">
        <button class="icon-button" data-action="rank-up" data-index="${index}" ${index === 0 ? "disabled" : ""} aria-label="${value.word} omhoog">↑</button>
        <button class="icon-button" data-action="rank-down" data-index="${index}" ${index === state.finalValues.length - 1 ? "disabled" : ""} aria-label="${value.word} omlaag">↓</button>
      </span>
    </li>`;
}

function resultText() {
  const profile = profileText();
  const valuesText = state.finalValues
    .map((value, index) => `${index + 1}. ${value.word} - ${value.desc}`)
    .join("\n");
  return `${valuesText}\n\nProfielschets:\n${profile}`;
}

function profileText() {
  if (!state.profile) return "";
  return state.profile.categories
    .map((item) => `${item.title}: ${item.desc} Gespreksvraag: ${item.question}`)
    .join("\n");
}

function renderResult() {
  const mailSubject = encodeURIComponent("Mijn kernwaardenkompas");
  const mailBody = encodeURIComponent(`Mijn kernwaardenkompas:\n\n${resultText()}`);
  app.innerHTML = shell(
    `<section class="panel choice-panel result">
      <div class="choice-head">
        <h2>Uw kernwaardenkompas</h2>
        <p class="body-text">Neem deze uitslag mee naar het gesprek. Dit is geen oordeel en geen diagnose, maar een startpunt om samen verder te onderzoeken.</p>
      </div>
      <div class="result-card">
        <h3>Uw drie kernwaarden</h3>
        ${state.finalValues.map(renderResultItem).join("")}
      </div>
      <div class="profile-card">
        <h3>Eerste profielschets</h3>
        ${renderProfile()}
      </div>
      <div class="share-box">
        <h3>Meenemen naar de afspraak</h3>
        <p class="body-text">Er is niets opgeslagen. U kunt dit scherm laten zien, afdrukken of via uw eigen mailprogramma naar uzelf sturen.</p>
        <div class="share-actions">
          <button class="secondary" data-action="print">Print of bewaar als PDF</button>
          <a class="secondary" href="mailto:?subject=${mailSubject}&body=${mailBody}">Mail naar uzelf</a>
          <button class="secondary" data-action="copy">Kopieer tekst</button>
        </div>
        <p class="small-note hidden" id="copy-status">De tekst is gekopieerd.</p>
      </div>
    </section>`,
  );
}

function renderResultItem(value, index) {
  return `
    <div class="result-item">
      <span class="rank-number">${index + 1}</span>
      <span class="mini-illustration category-${value.category}">${valueIcon(value.category)}</span>
      <span><strong>${value.word}</strong><span>${value.desc}</span></span>
    </div>`;
}

function renderProfile() {
  if (!state.profile?.categories.length) {
    return `<p class="body-text">Er is nog weinig patroon zichtbaar. Bespreek vooral welke losse waarden toch belangrijk voelen.</p>`;
  }

  return `
    <div class="profile-list">
      ${state.profile.categories
        .map(
          (item) => `
            <article class="profile-item">
              <strong>${item.title}</strong>
              <p>${item.desc}</p>
              <span>${item.question}</span>
            </article>`,
        )
        .join("")}
    </div>
    <p class="small-note">Gebaseerd op de laatste ${state.profile.totalSelected} kaarten na ${state.profile.rounds} keuzerondes.</p>`;
}

function renderNoSelection() {
  app.innerHTML = shell(
    `<section class="panel choice-panel">
      <div class="choice-head">
        <h2>Er zijn nog geen kaarten gekozen</h2>
        <p class="body-text">Kies bij het doorlopen van de kaarten in ieder geval de waarden die een beetje raken. Het hoeft niet perfect te zijn; het is bedoeld als startpunt voor het gesprek.</p>
      </div>
      <div class="toolbar">
        <button class="ghost" data-action="reset">Begin opnieuw</button>
        <button class="primary" data-action="start">Opnieuw proberen</button>
      </div>
    </section>`,
  );
}

function reset() {
  state.screen = "intro";
  state.cycle = 0;
  state.page = 0;
  state.currentOptions = [];
  state.selectedThisRound = [];
  state.pool = [];
  state.cycleSelections = [];
  state.allChosen = [];
  state.history = [];
  state.profile = null;
  state.finalValues = [];
  render();
}

async function copyResultText() {
  const text = `Mijn kernwaardenkompas:\n\n${resultText()}`;
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return true;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand("copy");
  document.body.removeChild(textarea);
  return copied;
}

function render() {
  if (state.screen === "intro") renderIntro();
  if (state.screen === "choice") renderChoice();
  if (state.screen === "rank") renderRank();
  if (state.screen === "result") renderResult();
  if (state.screen === "noSelection") renderNoSelection();
}

app.addEventListener("click", async (event) => {
  const actionTarget = event.target.closest("[data-action]");
  if (!actionTarget) return;

  const action = actionTarget.dataset.action;
  if (action === "start") startCompass();
  if (action === "reset") reset();
  if (action === "choose") {
    toggleValue(actionTarget.dataset.word);
  }
  if (action === "back") goBack();
  if (action === "skip-page") {
    state.selectedThisRound = [];
    submitRound();
  }
  if (action === "submit-round") submitRound();
  if (action === "choice-back") {
    state.screen = "choice";
    goBack();
  }
  if (action === "rank-up") moveRank(Number(actionTarget.dataset.index), -1);
  if (action === "rank-down") moveRank(Number(actionTarget.dataset.index), 1);
  if (action === "finish") {
    state.screen = "result";
    render();
  }
  if (action === "print") window.print();
  if (action === "copy") {
    const copied = await copyResultText();
    const status = document.querySelector("#copy-status");
    if (status) {
      status.textContent = copied ? "De tekst is gekopieerd." : "Kopieren lukte niet automatisch.";
      status.classList.remove("hidden");
    }
  }
});

render();
