export const photos = {
  harbourNight: {
    src: "https://images.unsplash.com/photo-1693807010837-5d849a65fe00?auto=format&fit=crop&w=2000&q=80",
    alt: "Auckland CBD at night from the Waitematā Harbour, sailboat in the foreground",
    credit: "Uran Wang",
    href: "https://unsplash.com/photos/_LkCpx3QVm4",
  },
  skylineWater: {
    src: "https://images.unsplash.com/photo-1745550663491-6cec967ce6e9?auto=format&fit=crop&w=1800&q=80",
    alt: "Auckland skyline seen from the water",
    credit: "Yulin Wang",
    href: "https://unsplash.com/photos/bX28tyj1VTw",
  },
  rangitoto: {
    src: "https://images.unsplash.com/photo-1577690486649-43539192f0f7?auto=format&fit=crop&w=1800&q=80",
    alt: "Rangitoto Island seen from North Head in Devonport",
    credit: "Jeevan Jose",
    href: "https://unsplash.com/photos/gw_9gz_n4x8",
  },
  grassyHill: {
    src: "https://images.unsplash.com/photo-1768350329703-3037a29afdac?auto=format&fit=crop&w=1800&q=80",
    alt: "Auckland skyline from a grassy volcanic hill",
    credit: "Yulin Wang",
    href: "https://unsplash.com/photos/Fg79f5AbPss",
  },
  waihekeVines: {
    src: "https://images.unsplash.com/photo-1545309451-fc04a9c4bc5b?auto=format&fit=crop&w=1800&q=80",
    alt: "Rows of grape vines at Casa Miro on Waiheke Island",
    credit: "Unsplash photo, Casa Miro, Waiheke Island",
    href: "https://unsplash.com/photos/yfFqWxzblrI",
  },
  piha: {
    src: "https://images.unsplash.com/photo-1683768070502-a0b93b53231f?auto=format&fit=crop&w=1800&q=80",
    alt: "Piha Beach and Lion Rock from the west-coast clifftop",
    credit: "Toby Hall",
    href: "https://unsplash.com/photos/0EreVb5wxK8",
  },
  devonport: {
    src: "https://images.unsplash.com/photo-1492475816753-1be8798b4f22?auto=format&fit=crop&w=1800&q=80",
    alt: "Wooden villas on the hill in Devonport, Auckland",
    credit: "Werner Sevenster",
    href: "https://unsplash.com/photos/6hCm6Jr0RYc",
  },
} as const;

export const hero = {
  kicker: "October · dates TBA",
  title: "Six days on the Waitemata, plus a volcano and a west-coast beach.",
  titleHtml:
    "Six days on the Waitematā, plus a volcano and a west-coast beach.",
  sub: "Auckland in October. Dates TBA. Spring, about 17-18°C days, 11-12°C nights, showers. Pack a shell, merino, grip shoes.",
  byline: "Gerald Ho · a first-person plan for Tāmaki Makaurau",
};

export const intro = {
  heading: "Why this shape",
  body: [
    "I am going to Auckland in October. Spring. Dates still moving. Six days, maybe seven.",
    "I want the harbour, one volcano island, one west-coast beach, and enough time to eat properly. This is the plan I would actually follow, not a list of every attraction in Tāmaki Makaurau.",
    "NZDT is already on from 27 September 2026. Labour Day is Monday 26 October. If the trip lands on that weekend, Piha patrol starts, and the city gets busy.",
  ],
};

export const days = [
  {
    id: "day-1",
    number: "01",
    title: "Harbour legs",
    where: "Downtown, Britomart, Viaduct, Wynyard",
    photo: photos.skylineWater,
    lead: "Arrive, get a HOP card in my pocket, and walk the Waitematā edge until the jet lag thins out.",
    stops: [
      "Downtown Ferry Terminal first. I want the water in view before I unpack.",
      "Te Komititanga / Britomart for coffee and a sit. The square is the city's front door.",
      "Viaduct to Wynyard on foot. Silo Park if the legs still work. Cranes, boardwalk, kids on scooters.",
      "Dinner at Baduzzi in Wynyard Quarter. Origine if I cannot get a table, or if I want a quieter room.",
    ],
    rain: "Rain plan: Auckland Art Gallery Toi o Tāmaki. Indoor, close, and I can still walk home along the water.",
    eat: "Baduzzi (Wynyard). Alternate: Origine.",
    note: "No car. InnerLink or walk. Tag on with AT HOP or contactless.",
  },
  {
    id: "day-2",
    number: "02",
    title: "Rangitoto",
    where: "Fullers360 Pier 13, summit, lava caves",
    photo: photos.rangitoto,
    lead: "The cone I have been looking at since the plane banked in. A pest-free island, a lava field, and no shops.",
    stops: [
      "Fullers360 from Pier 13. I must pre-book. AT HOP is not accepted on Rangitoto.",
      "Summit Track. Slow on the scoria. Water and lunch in the pack. There is nothing to buy on the island.",
      "Lava caves if the legs and the light allow. Headlamp. Do not count on phone signal.",
      "Back on the last sensible ferry. Dinner at Depot on Federal Street (walk-in only) or Federal Delicatessen next door.",
    ],
    rain: "If the summit is in cloud, I turn around early. Redo this on the optional seventh day if I have one.",
    eat: "Packed lunch on the island. Depot or Federal Delicatessen after.",
    note: "Book the ferry when dates lock. Wear grip shoes. The scoria chews smooth soles.",
  },
  {
    id: "day-3",
    number: "03",
    title: "Ponsonby, K Road, Maungawhau",
    where: "Ponsonby Road, crater rim, St Kevin's Arcade",
    photo: photos.grassyHill,
    lead: "A ridge of villas, a tapu crater, and a long evening on Karangahape Road.",
    stops: [
      "Daily Bread at 108 Ponsonby Road. Bread, coffee, then a slow walk of the strip.",
      "Maungawhau / Mt Eden in the afternoon. The crater rim is tapu. Stay on the path. No private cars to the summit.",
      "Karangahape Road and St Kevin's Arcade when the light drops. I will pick a room and stay put.",
      "Dinner: Return, or Gemmayze Street, or Coco's Cantina. Book Return and Gemmayze Street when dates lock.",
    ],
    rain: "Skip the crater if it is slick. The arcade still works in weather.",
    eat: "Daily Bread in the morning. Return, Gemmayze Street, or Coco's Cantina at night.",
    note: "Bus or walk from Ponsonby to Maungawhau. InnerLink covers a lot of this day.",
  },
  {
    id: "day-4",
    number: "04",
    title: "Waiheke",
    where: "Matiatia, Oneroa, one cellar door",
    photo: photos.waihekeVines,
    lead: "Forty to forty-five minutes on the gulf. One village, one cellar door, last ferry home. I will not try to do the whole island.",
    stops: [
      "Ferry to Matiatia. Fullers360 or Island Direct. The $50 weekly HOP cap does not apply to Waiheke.",
      "Oneroa on foot or by island bus. Beach, shops, a sit looking back at the city.",
      "One cellar door only: Stonyridge, Mudbrick, Cable Bay, or Tantalus. Book that one when dates lock.",
      "The Oyster Inn in Oneroa if hours have moved off winter. Their site still lists winter hours (closed Tuesday and Wednesday). I will confirm closer to the trip, not lock a table now.",
    ],
    rain: "Cellar door still works in rain. I keep the day short and catch an earlier ferry.",
    eat: "One vineyard lunch, or oysters in Oneroa if The Oyster Inn is open that day.",
    note: "Watch the last ferry. Summer delays happen. Spring can still run late on a Friday.",
  },
  {
    id: "day-5",
    number: "05",
    title: "Piha",
    where: "Waitakere west coast, Lion Rock from the sand",
    photo: photos.piha,
    lead: "Black sand, a Tasman swell, and a road that asks for a car. This is the one day I leave the AT network.",
    stops: [
      "Car or shuttle. There is no AT bus to Piha. Fill the tank before Titirangi. No petrol, ATM, or supermarket at the beach.",
      "Lion Rock from the beach only. The summit track is closed.",
      "I do not swim unless the flags are up and lifeguards are on. Patrol starts Labour Weekend, Monday 26 October 2026. Before that, I stay dry.",
      "Kitekite Falls only if the track is open. Picnic in the pack either way.",
      "Dinner back in town: Farina, for Toto pizza.",
    ],
    rain: "West-coast rain is sideways. If the Piha Road is closed, I stay in town and eat Farina anyway.",
    eat: "Picnic at Piha. Farina in the evening.",
    note: "Download the map before the ridge. Coverage drops. This is the only day a car is required.",
  },
  {
    id: "day-6",
    number: "06",
    title: "Devonport, museum, Parnell",
    where: "North Shore ferry, Takarunga, Tāmaki Paenga Hira",
    photo: photos.devonport,
    lead: "A twelve-minute ferry, wooden villas, two volcanic cones, then the museum and Parnell for a last dinner.",
    stops: [
      "Devonport ferry. About 12 minutes. This one counts toward the $50 weekly HOP cap.",
      "Victoria Road for a slow village walk. Villas, the water, a coffee.",
      "Takarunga / Mt Victoria and Maungauika / North Head. Rangitoto sits right there. I came from that cone two days ago.",
      "Auckland Museum, Tāmaki Paenga Hira. The Māori Court and Pacific galleries may still be closed. Te Ripo o te Moana is listed from 29 August 2026. I will check the day I go.",
      "Parnell on the way back. Dinner at Tala (book when dates lock) or Oh Calcutta (closed Monday). Tala for umu chicken and palolo. Oh Calcutta for black dahl and Awadhi mutton.",
    ],
    rain: "Museum first, Parnell after. The ferry still runs.",
    eat: "Tala (book). Alternate: Oh Calcutta, closed Monday.",
    note: "HOP on the Devonport ferry. No car.",
  },
] as const;

export const optionalDay = {
  id: "day-7",
  number: "07",
  title: "If I have a seventh day",
  body: "Tāmaki Drive to Mission Bay for a harbour walk. Or Ahi, if I want the scampi corn dog and Miann chocolate and the dates have locked. Sky Tower only if rain or night. Or redo Rangitoto if day two sat in cloud.",
};

export const logistics = {
  heading: "How I get around",
  items: [
    {
      title: "AKL to the city",
      body: "SkyDrive from the airport to Hobson Street by SkyCity, or AirportLink bus to Puhinui then the train to Waitematā Station. I will pick based on landing time and how much I am carrying.",
    },
    {
      title: "AT HOP",
      body: "The card is $5 plus a top-up. Tag on and off. The $50 seven-day cap covers bus, train, and inner-harbour ferries (including Devonport). It does not cover Waiheke or Rangitoto.",
    },
    {
      title: "Ferries",
      body: "Rangitoto: Fullers360, Pier 13, pre-book, no HOP. Waiheke: Fullers360 or Island Direct to Matiatia, 40 to 45 minutes, HOP cap does not apply. Devonport: about 12 minutes, HOP counts toward the weekly cap.",
    },
    {
      title: "Car",
      body: "Only for Piha. The rest of the week is walk, bus, train, ferry. I will not keep a car in the city just to sit in traffic.",
    },
  ],
};

export const packing = {
  heading: "What I am packing",
  climate:
    "October in Auckland: spring, about 17-18°C by day, 11-12°C at night, showers on roughly half the days. Four seasons in an afternoon is not a joke here.",
  items: [
    "Waterproof shell, not a fashion coat",
    "One merino layer for nights and the ferry deck",
    "Grip walking shoes (Rangitoto scoria, Piha sand, crater paths)",
    "Daypack, 1L bottle, picnic kit for Piha and Rangitoto",
    "Headlamp for lava caves",
    "Sun hat and sunscreen even if the morning looks grey",
  ],
};

export const food = {
  heading: "Where I will actually eat",
  intro:
    "Only rooms I could still verify in August 2026. I am not listing Sidart. Cassia was still fitting out at 58 Albert Street when I checked, so it stays off this page.",
  places: [
    { name: "Daily Bread", where: "108 Ponsonby Road", note: "Morning of day three." },
    { name: "Bestie Cafe", where: "City", note: "Backup coffee if Daily Bread is a queue." },
    { name: "Baduzzi", where: "Wynyard Quarter", note: "Day one dinner." },
    { name: "Origine", where: "City", note: "Day one alternate." },
    { name: "Depot", where: "Federal Street", note: "Walk-in. Day two after Rangitoto." },
    { name: "Federal Delicatessen", where: "Federal Street", note: "If Depot is a long wait." },
    { name: "Return", where: "City fringe", note: "Book when dates lock. Day three." },
    { name: "Gemmayze Street", where: "St Kevin's Arcade", note: "Book when dates lock. Day three." },
    { name: "Coco's Cantina", where: "Karangahape Road", note: "Day three alternate." },
    { name: "The Oyster Inn", where: "Oneroa, Waiheke", note: "Confirm hours. Winter list still shows Tuesday and Wednesday closed." },
    { name: "Farina", where: "Ponsonby", note: "Toto pizza. Day five after Piha." },
    { name: "Tala", where: "Parnell", note: "Umu chicken, palolo. Book when dates lock." },
    { name: "Oh Calcutta", where: "Parnell", note: "Black dahl, Awadhi mutton. Closed Monday." },
    { name: "Ahi", where: "Commercial Bay", note: "Scampi corn dog, Miann chocolate. Optional seventh day. Book when dates lock." },
  ],
  book: [
    "Tala",
    "Return",
    "Ahi",
    "Gemmayze Street",
    "Rangitoto ferry",
    "One Waiheke cellar door",
  ],
};

export const notes = {
  heading: "Small things I keep in the notes app",
  items: [
    "Te reo on first use: Waitematā Harbour, Tāmaki Makaurau / Auckland, Maungawhau / Mt Eden, Maungauika / North Head, Takarunga / Mt Victoria, Tāmaki Paenga Hira / Auckland Museum.",
    "Maungawhau crater rim is tapu. Stay on the path.",
    "Lion Rock track is closed. Look from the sand.",
    "Piha swim only with flags and lifeguards. Patrol from Labour Weekend 26 October 2026.",
    "No shops on Rangitoto. Water and lunch in the bag.",
    "Dates are TBA. This page is the shape, not a locked calendar.",
  ],
};

export const nav = [
  { href: "#day-1", label: "01 Harbour" },
  { href: "#day-2", label: "02 Rangitoto" },
  { href: "#day-3", label: "03 Ponsonby" },
  { href: "#day-4", label: "04 Waiheke" },
  { href: "#day-5", label: "05 Piha" },
  { href: "#day-6", label: "06 Devonport" },
  { href: "#logistics", label: "Getting around" },
] as const;
