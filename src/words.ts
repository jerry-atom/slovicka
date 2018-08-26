const words: Array<[string, string]> = [
  [
      "former",
      "bývalý",
  ],
  [
      "merely",
      "pouze",
  ],
  [
      "earnest",
      "seriozní",
  ],
  [
      "plow",
      "pluh",
  ],
  [
      "solemn",
      "vážný, obřadný",
  ],
  [
      "remedy",
      "odškodnění, lék na bolest",
  ],
  [
      "lump",
      "kus, hrouda",
  ],
  [
      "gaiety",
      "veselost",
  ],
  [
      "vain",
      "marný, ješitný, pyšný",
  ],
  [
      "ditch",
      "příkop, kanál",
  ],
  [
      "sorrow",
      "zármutek",
  ],
  [
      "estate",
      "nemovitost, majetek",
  ],
  [
      "persuasion",
      "přesvědčení",
  ],
  [
      "mat",
      "rohož",
  ],
  [
      "nuisance",
      "neřád, zlořád",
  ],
  [
      "hinder",
      "překážet",
  ],
  [
      "hindrance",
      "překážka",
  ],
  [
      "pastry",
      "pečivo",
  ],
  [
      "cowardice",
      "zbabělost",
  ],
  [
      "scold",
      "nadávat",
  ],
  [
      "oar",
      "veslo",
  ],
  [
      "sow",
      "prasnice",
  ],
  [
      "artery",
      "tepna",
  ],
  [
      "virtue",
      "ctnost",
  ],
  [
      "bureau",
      "kancelar",
  ],
  [
      "allude",
      "zminovat se, delat narazky",
  ],
  [
      "ascribe",
      "připsat, přičítat",
  ],
  [
      "assent",
      "svolení",
  ],
  [
      "assess",
      "posoudit",
  ],
  [
      "haul",
      "dopravovat, vléci, táhnout",
  ],
  [
      "subsidy",
      "dotace",
  ],
  [
      "booth",
      "bouda, stánek",
  ],
  [
      "midst",
      "uprostřed",
  ],
  [
      "foster",
      "živit, pěstovat, podporovat",
  ],
  [
      "dough",
      "těsto",
  ],
  [
      "disclose",
      "zveřejnit",
  ],
  [
      "merit",
      "zásluha, hodnota věci",
  ],
  [
      "retailer",
      "maloobchodník",
  ],
  [
      "deem",
      "mínit, považovat",
  ],
  [
      "parish",
      "farní, farnost",
  ],
  [
      "plunge",
      "ponořit se do něčeho",
  ],
  [
      "municipal",
      "obecní",
  ],
  [
      "enact",
      "ustanovit",
  ],
  [
      "prevail",
      "převládat",
  ],
  [
      "mutter",
      "zamumlal",
  ],
  [
      "timber",
      "dříví",
  ],
  [
      "plea",
      "prosba, výzva",
  ],
  [
      "hitch",
      "zádrhel, potíž",
  ],
  [
      "dingy",
      "omšelý",
  ],
  [
      "slumped",
      "klesl",
  ],
  [
      "hasty",
      "ukvapený, chvatný",
  ],
  [
      "whirl",
      "kroužit, točit, vír, kotouč",
  ],
  [
      "guise",
      "maska, převlek",
  ],
  [
      "pulley",
      "kladka",
  ],
  [
      "subtly",
      "jemně",
  ],
  [
      "willow",
      "vrba",
  ],
  [
      "sprouting",
      "klíčení, rašení",
  ],
  [
      "enchanted",
      "okouzlený, zakletý",
  ],
  [
      "solace",
      "útěcha, utěšit",
  ],
  [
      "knead",
      "hníst",
  ],
  [
      "adroit",
      "obratný, zručný",
  ],
  [
      "allot",
      "přidělovat, vylosovat",
  ],
  [
      "secede",
      "odloučit se, vystoupit",
  ],
  [
      "salvage",
      "záchrana, sběr",
  ],
  [
      "zest",
      "říz, nadšení, elán",
  ],
  [
      "manure",
      "hnůj, hnojivo",
  ],
  [
      "stew",
      "dušená, dusit (maso)",
  ],
  [
      "wry",
      "ironicky, křivý, pokřivený, jízlivý",
  ],
  [
      "vile",
      "oplzlý, odporný, hnusný",
  ],
  [
      "congestion",
      "přetížení, přeplnění",
  ],
  [
      "bail",
      "kauce",
  ],
  [
      "deluge",
      "potopa",
  ],
  [
      "rehearsal",
      "zkouška, opakování",
  ],
  [
      "beads",
      "korálky",
  ],
  [
      "rowdy",
      "hlučný, sprostý, uličnický",
  ],
  [
      "lavish",
      "bohatý, přepychový, plýtvající",
  ],
  [
      "gallop",
      "cval",
  ],
  [
      "squire",
      "zeman, statkář",
  ],
  [
      "quell",
      "potlačit, zkrotit, zaplašit",
  ],
  [
      "maverick",
      "neortodoxní, svobodomyslný",
  ],
  [
      "astride",
      "obkročmo",
  ],
  [
      "guttural",
      "hrdelní",
  ],
  [
      "slant",
      "tendenčnost, sklon k něčemu",
  ],
  [
      "bleak",
      "mrzutý",
  ],
  [
      "cluck",
      "kdákat, kvokat",
  ],
  [
      "turf",
      "rašelina, drn",
  ],
  [
      "maroon",
      "hnědočervená barva",
  ],
  [
      "illicit",
      "pokoutný, nedovolený, zakázaný",
  ],
  [
      "gouging",
      "drážkování",
  ],
  [
      "yoke",
      "jho, jařmo, zapřáhnout",
  ],
  [
      "burly",
      "rozložitý, statný, urostlý",
  ],
  [
      "savor",
      "vychutnávání",
  ],
  [
      "sprawl",
      "rozrůstat se, roztahovat se, protáhnout si údy",
  ],
  [
      "mutilated",
      "zmrzačený",
  ],
  [
      "aptly",
      "vhodně",
  ],
  [
      "throng",
      "dav, mačkanice, zástup",
  ],
  [
      "excise",
      "spotřební daň",
  ],
  [
      "vivacious",
      "živá, veselá, temperamentní",
  ],
  [
      "impudent",
      "drzý, nestoudný",
  ],
  [
      "ramble",
      "pěší toulka, trampování",
  ],
  [
      "audacity",
      "smělost, troufalost",
  ],
  [
      "thaw",
      "rozmrazit, roztát, obleva",
  ],
  [
      "loot",
      "rabovat, ukořistit, kořist, uloupit, lup",
  ],
  [
      "glee",
      "veselí, nespoutaná radost",
  ],
  [
      "bevy",
      "houf, hejno",
  ],
  [
      "dew",
      "rosa",
  ],
  [
      "hilt",
      "jílec, rukojeť",
  ],
  [
      "exuberance",
      "hojnost, přemíra",
  ],
  [
      "prosecute",
      "stíhání",
  ],
  [
      "gale",
      "vychřice",
  ],
  [
      "ebb",
      "ustupovat, ubývat, odliv",
  ],
  [
      "wring",
      "ždímat",
  ],
  [
      "salacious",
      "chlípný",
  ],
  [
      "calloused",
      "mozolnatý",
  ],
  [
      "belligerence",
      "bojovnost",
  ],
  [
      "sinew",
      "šlacha",
  ],
  [
      "knob",
      "knoflík, boule",
  ],
  [
      "abate",
      "snížit, ubýt něčeho",
  ],
  [
      "spurt",
      "vytrystkout",
  ],
  [
      "palsy",
      "paralýza vyvolaná záchvatem",
  ],
  [
      "crumble",
      "rozpadat se",
  ],
  [
      "destitute",
      "životapustý",
  ],
  [
      "stagger",
      "vrávorat, potácet se",
  ],
  [
      "pervading",
      "prostupující",
  ],
  [
      "rumple",
      "zmačkat, zmuchlat",
  ],
  [
      "pantry",
      "spíž, komora",
  ],
  [
      "fatuous",
      "pošetilý",
  ],
  [
      "appease",
      "uklidnit, utišit",
  ],
  [
      "jilt",
      "dát někomu košem",
  ],
  [
      "wedge",
      "klín, špalek, zaklínit",
  ],
  [
      "elude",
      "uniknout, uprchnout, vyhnout se",
  ],
  [
      "elation",
      "euforie, radostná nálada",
  ],
  [
      "chivalry",
      "kavalírství",
  ],
  [
      "apostle",
      "apoštol",
  ],
  [
      "bewitching smile",
      "uhrančivý úsměv",
  ],
  [
      "alleviate",
      "zmírnit, utišit (bolest)",
  ],
  [
      "avowal",
      "prohlášení, doznání",
  ],
  [
      "innocuous",
      "neškodný",
  ],
  [
      "tuition",
      "výuka (v malé skupině nebo ve dvou)",
  ],
  [
      "remnant",
      "zbyek",
  ],
  [
      "effusion",
      "výlev",
  ],
  [
      "grisly",
      "hrozný, hrůzu ze smrti nahánějící",
  ],
  [
      "credulous",
      "důvěřivý, lehkověrný",
  ],
  [
      "atonement",
      "pokání",
  ],
  [
      "meticulous",
      "úzkostlivý, pečlivý",
  ],
  [
      "hasten",
      "uspíšit",
  ],
  [
      "vicarious",
      "zprostředkovaný",
  ],
  [
      "vicar",
      "kněz, farář",
  ],
  [
      "to slake",
      "ukojit, uhasit (chuť na něco)",
  ],
  [
      "wager",
      "předmět sázky",
  ],
  [
      "huckster",
      "podomní obchodník",
  ],
  [
      "cunning",
      "zchytralý",
  ],
  [
      "covet",
      "horoucně si přát, bažit po něčem",
  ],
  [
      "scourge",
      "bič, sužovat",
  ],
  [
      "mortify",
      "ponížit někoho, umrtvit",
  ],
  [
      "incessant",
      "neustálý (o něčem nepříjemném)",
  ],
  [
      "strenuous",
      "usilovný, vytrvalý",
  ],
  [
      "cupidity",
      "chamtivost",
  ],
  [
      "avarice",
      "lakomství",
  ],
  [
      "edifice",
      "velká impozantní budova",
  ],
  [
      "inculcate",
      "naučit biflováním",
  ],
  [
      "maim",
      "zmrzačit",
  ],
  [
      "whim",
      "rozmar",
  ],
  [
      "caprice",
      "rozmar",
  ],
  [
      "moribund",
      "zkomírající",
  ],
  [
      "mordant",
      "břidký, kousavý",
  ],
  [
      "succumb",
      "podlehnout komu",
  ],
  [
      "apparition",
      "zjevení (o duchu)",
  ],
  [
      "almighty",
      "všemohoucí",
  ],
  [
      "accompany",
      "doprovázet někoho",
  ],
  [
      "admonish",
      "připomínat (někomu jeho chybu)",
  ],
  [
      "gruesome",
      "příšerný, strašidelný",
  ],
  [
      "inept",
      "neobratný",
  ],
  [
      "excavate",
      "vyhloubit",
  ],
  [
      "fervent",
      "horlivý",
  ],
  [
      "abade",
      "oslabit",
  ],
  [
      "sepulchre",
      "náhrobní kámen",
  ],
  [
      "clergy",
      "duchovenstvo, klérus",
  ],
  [
      "vestige",
      "pozůstatek po něčem, stopa",
  ],
  [
      "mediocre",
      "podprůměrný, nepřliš dobrý",
  ],
  [
      "supercilious",
      "arogantní",
  ],
  [
      "fallacy",
      "klam, blud",
  ],
  [
      "innate",
      "vrozený",
  ],
  [
      "anguish",
      "utrpení",
  ],
  [
      "fetter",
      "poroba",
  ],
  [
      "osprey",
      "orlovec říční (dravý pták, který se živí rybami)",
  ],
  [
      "swoop",
      "vrhnout se střemhlav dolů na něco (jako když loví sokol)",
  ],
  [
      "contrivance",
      "důmyslný vynález nebo mechanismus",
  ],
  [
      "inimitable",
      "nenapodobitelný",
  ],
  [
      "encumbrance",
      "břemeno (o hypotéce nebo dluhu)",
  ],
  [
      "callous",
      "bezcitný",
  ],
  [
      "capricious",
      "rozmarný, náladový",
  ],
  [
      "exuberant",
      "velmi živý nebo energický (o lidech)",
  ],
  [
      "teeming",
      "přeplněný lidmi",
  ],
  [
      "inundate",
      "zahltit někoho prací",
  ],
  [
      "elucidate",
      "objasnit",
  ],
  [
      "daunt",
      "zastrašit",
  ],
  [
      "endowement",
      "vloha nebo talent přeneseně, spíše věno",
  ],
  [
      "scarcity ",
      "nedostatek něčeho, nouze o něco",
  ],
  [
      "faculty",
      "nadání",
  ],
  [
      "discernment",
      "schopnost soudit lidi",
  ],
  [
      "immaculate",
      "neposkvrněný",
  ],
  [
      "slay, slew, slein",
      "zabít někoho/něco násilným způsobem",
  ],
  [
      "reverence",
      "úcta k někomu",
  ],
  [
      "bridle",
      "uzda (koně)",
  ],
  [
      "municipal",
      "obecní, městský",
  ],
  [
      "quarry",
      "důl (jako velká díra v zemi)",
  ],
  [
      "malady",
      "choroba",
  ],
  [
      "ghastly",
      "otřesně, hrozně",
  ],
  [
      "muster",
      "shromáždit (k nástupu, k podpoře něčeho)",
  ],
  [
      "smallpox",
      "neštovice",
  ],
  [
      "polio",
      "obrna",
  ],
  [
      "veil",
      "závoj, opona, rouška",
  ],
  [
      "mallable",
      "kujný, poddajný",
  ],
  [
      "perilous",
      "nebezpečný, riskantní",
  ],
  [
      "condemn",
      "odsoudit (v kritice)",
  ],
  [
      "boon",
      "dobrodiní",
  ],
  [
      "eviscerate",
      "vykuchat, vyjmout orgán z těla (odborně)",
  ],
  [
      "prepuce",
      "předkožka (odborně)",
  ],
  [
      "covenant",
      "smlouva, dohoda",
  ],
  [
      "infringe",
      "porušit (smlouvu), přestoupit (zákon)",
  ],
  [
      "recur",
      "vracet se, opakovat se (např. o myšlence)",
  ],
  [
      "infibulation",
      "ženská obřízka (odborně)",
  ],
  [
      "twine",
      "motouz, ovázat",
  ],
  [
      "stench",
      "smrad",
  ],
  [
      "flog",
      "",
  ],
  [
      "parish",
      "farnost",
  ],
  [
      "filicide",
      "vražda vlastního potomka",
  ],
  [
      "redeem",
      "vykoupit",
  ],
  [
      "acolyte",
      "ministrant",
  ],
  [
      "sheer",
      "čirý, naprostý",
  ],
  [
      "relish",
      "pochutnat si, libovat si",
  ],
  [
      "larded",
      "našpikovaný",
  ],
  [
      "unctuous manner/smile",
      "podbízivě vtíravý až falešný, olejovaný",
  ],
  [
      "surreptitious",
      "tajný, nepozorovaný",
  ],
  [
      "bestow",
      "udělit (ceremoniálně, např. o ceně)",
  ],
  [
      "menace",
      "hrozba",
  ],
  [
      "scowl",
      "mračit se",
  ],
  [
      "obliterate",
      "vymazat (záměrným zničením nebo skrytím)",
  ],
  [
      "exorbitant",
      "přemrštěný",
  ],
  [
      "votary",
      "stoupenec, ctitel",
  ],
  [
      "coercion",
      "donucování, nátlak",
  ],
  [
      "fumble",
      "pátrat, šmátrat, tápat (především rukama)",
  ],
  [
      "blunder",
      "přehmat",
  ],
  [
      "vicinity",
      "sousedství, okolí",
  ],
  [
      "utter futility",
      "naprostá zbytečnost",
  ],
  [
      "appall",
      "poděsit, polekat",
  ],
  [
      "compel",
      "nutit",
  ],
  [
      "stubborn",
      "tvrdohlavý",
  ],
  [
      "jettison",
      "hodit přes palubu, (přeneseně) odvrhnout",
  ],
  [
      "sworn deposition",
      "místopřísežné prohlášení",
  ],
  [
      "willful perjury",
      "křivé svědectví",
  ],
  [
      "culpable negligance",
      "trestuhodné zanedbání",
  ],
  [
      "flattery",
      "lichotky",
  ],
  [
      "pela",
      "prosba",
  ],
  [
      "malice",
      "zlomyslnost",
  ],
  [
      "like the back of my hand",
      "jako svoje boty",
  ],
  [
      "stupendous",
      "úžasné, ohromné (v pozitivním smyslu)",
  ],
  [
      "finch",
      "pěnkava",
  ],
  [
      "beak",
      "zobák",
  ],
  [
      "affidaivit",
      "přísežné prohlášení",
  ],
  [
      "ancillary",
      "pomocný, podpůrný",
  ],
  [
      "caveat",
      "varovnání, upozornění",
  ],
  [
      "decisive",
      "rozhodný",
  ],
  [
      "secretive",
      "tajnůstkřský",
  ],
  [
      "sovereign",
      "svrchovaný, nejvyšší",
  ],
  [
      "tribute",
      "úcta, hold",
  ],
  [
      "adversary",
      "protivník",
  ],
  [
      "pillage",
      "drancování",
  ],
  [
      "inmate",
      "chovanec, vězeň",
  ],
  [
      "incorrigible",
      "nenapravitelný",
  ],
  [
      "littered with",
      "poseté",
  ],
  [
      "annunciation",
      "zvěstování",
  ],
  [
      "staunch",
      "spolehlivý, oddaný",
  ],
  [
      "splinter",
      "tříska, střep",
  ],
  [
      "lineage",
      "rodokmen",
  ],
  [
      "kin",
      "rod, příbuzenstvo",
  ],
  [
      "keel",
      "kýl",
  ],
  [
      "sconce",
      "držák na lampu",
  ],
  [
      "rapids",
      "pe5eje",
  ],
  [
      "gorge",
      "rokle",
  ],
  [
      "crumpled",
      "zmačkaný",
  ],
  [
      "limb",
      "končetina, pahýl, větev",
  ],
  [
      "ragged",
      "otrhaný (o šatech)",
  ],
  [
      "uproar",
      "povstání, demonstrace, vřava",
  ],
  [
      "deranged",
      "duševně vyšinutý",
  ],
  [
      "chanting",
      "zpívat, skandovat, opěvovat",
  ],
  [
      "slog",
      "dřina",
  ],
  [
      "waddle",
      "kolébat se",
  ],
  [
      "scoop up",
      "nabrat",
  ],
  [
      "lozenge",
      "kosočtverec",
  ],
  [
      "din",
      "rámus",
  ],
  [
      "morel",
      "smrž",
  ],
  [
      "tattered",
      "rozedraný (o hadrech)",
  ],
  [
      "slouch",
      "hrbit se",
  ],
  [
      "concussion",
      "otřes",
  ],
  [
      "clutch",
      "svírat",
  ],
  [
      "to cobble sth. together",
      "slátat něco",
  ],
  [
      "deliberate",
      "záměrný",
  ],
  [
      "meager",
      "skromný",
  ],
  [
      "flaunt",
      "chlubit se (za účelem provokace)",
  ],
  [
      "brash",
      "drzý (o příliš sebejistých lidech s nedostatkem respektu)",
  ],
  [
      "disdain",
      "pohrdání, přezírání",
  ],
  [
      "contempt",
      "pohrdání, přezírání",
  ],
  [
      "scrawny",
      "vychrtlý",
  ],
  [
      "unlatch",
      "odblokovat",
  ],
  [
      "lumber",
      "rachotit",
  ],
  [
      "emaciation",
      "vyhublost",
  ],
  [
      "collared",
      "ozdobený",
  ],
  [
      "frail",
      "slabý, křehký (o osobě)",
  ],
  [
      "rummage",
      "přehrabovat se v něčem, neuspořádaně prohledávat",
  ],
  [
      "charred",
      "ohořelé",
  ],
  [
      "billet",
      "tlustý kus dřeva, poleno",
  ],
  [
      "tousled",
      "rozcuchané",
  ],
  [
      "anointing",
      "pomazání (relig.)",
  ],
  [
      "mortar",
      "malta",
  ],
  [
      "rivet",
      "nýt",
  ],
  [
      "chalice",
      "kalich",
  ],
  [
      "embers",
      "žhavé uhlíky",
  ],
  [
      "ravine",
      "rokle (úzká, s příkrými srázy)",
  ],
  [
      "infuriating",
      "rozzuřující",
  ],
  [
      "iron hoops",
      "železné obruče",
  ],
  [
      "rubble",
      "suť",
  ],
  [
      "plodded",
      "trmácet se",
  ],
  [
      "wink",
      "mrknout",
  ],
  [
      "gnarled",
      "sukovitý, zkroucený (věkem)",
  ],
  [
      "stubble",
      "strniště (vousy, pole)",
  ],
  [
      "haul away",
      "odtáhnout",
  ],
  [
      "viscera",
      "vnitřnosti",
  ],
  [
      "furrow",
      "brázda",
  ],
  [
      "abreast",
      "bok po boku, vedle sebe (o skupině lidí)",
  ],
  [
      "buldgeon",
      "palcát",
  ],
  [
      "crude",
      "surový (jako přirozený stav)",
  ],
  [
      "bleakly",
      "mrzutě",
  ],
  [
      "wade",
      "brodit se",
  ],
  [
      "lope",
      "běžet dlouhými kroky",
  ],
  [
      "accrue",
      "narůstat",
  ],
  [
      "slate",
      "břidlice",
  ],
  [
      "tread, trod, trodden",
      "šlapat",
  ],
  [
      "rasp",
      "škrábat",
  ],
  [
      "ransack",
      "vyplenit",
  ],
  [
      "ravage",
      "zpustošit, devastovat",
  ],
  [
      "loathe",
      "štítit se, nesnášet",
  ],
  [
      "drawer",
      "šuplík",
  ],
  [
      "patio",
      "dvorek (dlážděný, nezastřešený), nádvoří",
  ],
  [
      "spade",
      "rýč, rýt",
  ],
  [
      "hasp",
      "petlice",
  ],
  [
      "crate",
      "bedna, přepravka",
  ],
  [
      "spatula",
      "špachtle",
  ],
  [
      "sumptuous",
      "luxusní",
  ],
  [
      "skulk",
      "krást se",
  ],
  [
      "pall",
      "hustý dým",
  ],
  [
      "soot",
      "saze",
  ],
  [
      "scrimmage",
      "lítá bitva, rvačka",
  ],
  [
      "ravage",
      "zpustošit, devastovat",
  ],
  [
      "loathe",
      "štítit se, nesnášet něco/někoho",
  ],
  [
      "drawer",
      "šuplík",
  ],
  [
      "waterbuckled",
      "vodotěsný",
  ],
  [
      "patio",
      "dvorek (vydlážděný)",
  ],
  [
      "spade",
      "rýč, rýt",
  ],
  [
      "hasp",
      "petlice",
  ],
  [
      "crate",
      "bedna",
  ],
  [
      "spatula",
      "špachtle",
  ],
  [
      "sumptuous",
      "luxusní",
  ],
  [
      "skulk",
      "krást se",
  ],
  [
      "pall",
      "hustý dým, špatná nálada",
  ],
  [
      "soot",
      "saze",
  ],
  [
      "scrim",
      "plátno, opona, něco čím je cosi zakryto",
  ],
  [
      "decoy",
      "vějička, návnada",
  ],
  [
      "shudder",
      "chvět se, třást se, zachvění, otřesení",
  ],
  [
      "mattock",
      "krumpáč",
  ],
  [
      "bolus",
      "natrávená hrudka potravy",
  ],
  [
      "writhe",
      "svíjet se, kroutit se",
  ],
  [
      "mire",
      "bažina",
  ],
  [
      "lintel",
      "překlad (stavebnictví), nosný trám",
  ],
  [
      "wheelbarrow",
      "kolečko (ten vozík)",
  ],
  [
      "by-heart",
      "naučit se něco zpaměti",
  ],
  [
      "comber",
      "dlouhá zakřivneá mořská vlna",
  ],
  [
      "leaden",
      "olověný",
  ],
  [
      "squall",
      "bouře (prudká s deštěm)",
  ],
  [
      "scamper",
      "poskakovat",
  ],
  [
      "vigilant",
      "ostražitý, bdělý",
  ],
  [
      "promontory",
      "mys",
  ],
  [
      "stanchion",
      "sloup",
  ],
  [
      "mast",
      "stožár",
  ],
  [
      "cleat",
      "příchytka tvaru T k uvázání lodě",
  ],
  [
      "transom",
      "příčka, např. horizontální rám uprostřed okna",
  ],
  [
      "davit",
      "malý jeřáb na spouštění záchraného člunu",
  ],
  [
      "prowl",
      "slídit",
  ],
  [
      "grope",
      "tápat, šmátrat",
  ],
  [
      "strew",
      "rozprostřít",
  ],
  [
      "pelt",
      "házet něco na někoho",
  ],
  [
      "slosh",
      "cákat",
  ],
  [
      "rekindled a fire",
      "znovu zapálil oheň",
  ],
  [
      "tabernacle",
      "svatostánek",
  ],
  [
      "swath",
      "řádek v poli vzniklý po žni",
  ],
  [
      "dimpling",
      "drážkování",
  ],
  [
      "abutment",
      "opěra na rozložení horizonálního tlaku, např. na koncích mostu",
  ],
  [
      "stipple",
      "tečkovat",
  ],
  [
      "effigy",
      "podobizna",
  ],
  [
      "isthmus",
      "šíje (geograf.), mořská úžina",
  ],
  [
      "hove in sight/view",
      "zjevit se, dostat se do výhledu",
  ],
  [
      "skirmish",
      "krátká bitva, přestřelka",
  ],
  [
      "bandolier",
      "prsní pás na náboje a sumky",
  ],
  [
      "obsequious",
      "servilní, podbízívy",
  ],
  [
      "flout",
      "záměrně obcházet zákon nebo pravidlo",
  ],
  [
      "brazenly",
      "okatě, neskrývaně",
  ],
  [
      "grievously",
      "bolestně",
  ],
  [
      "insipid",
      "bezvýrazný, bez chuti",
  ],
  [
      "contrite",
      "kát se, kajícný, litovat něčeho způsobeného vlastní vinou",
  ],
];

export default words;
