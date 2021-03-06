const heros = [
  {
    id: 30,
    name: "Ant-Man",
    slug: "30-ant-man",
    powerstats: {
      intelligence: 100,
      strength: 18,
      speed: 23,
      durability: 28,
      power: 32,
      combat: 32,
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'11", "211 cm"],
      weight: ["270 lb", "122 kg"],
      eyeColor: "Blue",
      hairColor: "Blond",
    },
    biography: {
      fullName: "Hank Pym",
      alterEgos: "Giant-Man, Goliath, Wasp II, Yellowjacket",
      aliases: [
        "Hank Pym",
        "Doctor Pym",
        "Ant-Man",
        "Goliath",
        "Yellowjacket",
        "Wasp",
        "Earth's Scientist Supreme",
      ],
      placeOfBirth: "Elmsford, New York",
      firstAppearance:
        "Tales to Astonish #27 (January, 1962) (as Hank Pym)  Tales to Astonish #35 (September, 1962) (as Ant-Man)",
      publisher: "Giant-Man",
      alignment: "good",
    },
    work: {
      occupation: "Adventurer, Biochemist, former manager of Avengers Compound",
      base: "Avengers Compound, Los Angeles; formerly Infinite Avengers Mansion; Captive aboard a Skrull ship; Avengers Mansion, New York City, New York",
    },
    connections: {
      groupAffiliation:
        "Avengers Academy, Secret Avengers; formerly Mighty Avengers, Avengers (founding member), Defenders, Future Iron Man's Team",
      relatives: "-",
    },
    images: {
      xs: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/30-ant-man.jpg",
      sm: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/30-ant-man.jpg",
      md: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/30-ant-man.jpg",
      lg: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/30-ant-man.jpg",
    },
  },
  {
    id: 63,
    name: "Batgirl",
    slug: "63-batgirl",
    powerstats: {
      intelligence: 88,
      strength: 11,
      speed: 33,
      durability: 40,
      power: 34,
      combat: 90,
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["5'7", "170 cm"],
      weight: ["126 lb", "57 kg"],
      eyeColor: "Green",
      hairColor: "Red",
    },
    biography: {
      fullName: "Barbara Gordon",
      alterEgos: "Oracle",
      aliases: ["Oracle", "Bluebelle"],
      placeOfBirth: "-",
      firstAppearance: "Detective Comics #359",
      publisher: "Oracle",
      alignment: "good",
    },
    work: {
      occupation: "-",
      base: "Gotham City, formerly Metropolis, Platinum Flats",
    },
    connections: {
      groupAffiliation: "-",
      relatives:
        "James Gordon (father) ? Barbara Eileen (mother) ? James Gordon, Jr. (brother)",
    },
    images: {
      xs: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/63-batgirl.jpg",
      sm: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/63-batgirl.jpg",
      md: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/63-batgirl.jpg",
      lg: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/63-batgirl.jpg",
    },
  },

  {
    id: 70,
    name: "Batman",
    slug: "70-batman",
    powerstats: {
      intelligence: 100,
      strength: 26,
      speed: 27,
      durability: 50,
      power: 47,
      combat: 100,
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'2", "188 cm"],
      weight: ["210 lb", "95 kg"],
      eyeColor: "blue",
      hairColor: "black",
    },
    biography: {
      fullName: "Bruce Wayne",
      alterEgos: "No alter egos found.",
      aliases: ["Insider", "Matches Malone"],
      placeOfBirth: "Crest Hill, Bristol Township; Gotham County",
      firstAppearance: "Detective Comics #27",
      publisher: "DC Comics",
      alignment: "good",
    },
    work: {
      occupation: "Businessman",
      base: "Batcave, Stately Wayne Manor, Gotham City; Hall of Justice, Justice League Watchtower",
    },
    connections: {
      groupAffiliation:
        "Batman Family, Batman Incorporated, Justice League, Outsiders, Wayne Enterprises, Club of Heroes, formerly White Lantern Corps, Sinestro Corps",
      relatives:
        "Damian Wayne (son), Dick Grayson (adopted son), Tim Drake (adopted son), Jason Todd (adopted son), Cassandra Cain (adopted ward)\nMartha Wayne (mother, deceased), Thomas Wayne (father, deceased), Alfred Pennyworth (former guardian), Roderick Kane (grandfather, deceased), Elizabeth Kane (grandmother, deceased), Nathan Kane (uncle, deceased), Simon Hurt (ancestor), Wayne Family",
    },
    images: {
      xs: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/70-batman.jpg",
      sm: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/70-batman.jpg",
      md: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/70-batman.jpg",
      lg: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/70-batman.jpg",
    },
  },
  {
    id: 106,
    name: "Black Panther",
    slug: "106-black-panther",
    powerstats: {
      intelligence: 88,
      strength: 16,
      speed: 30,
      durability: 60,
      power: 41,
      combat: 100,
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'0", "183 cm"],
      weight: ["200 lb", "90 kg"],
      eyeColor: "Brown",
      hairColor: "Black",
    },
    biography: {
      fullName: "T'Challa",
      alterEgos: "No alter egos found.",
      aliases: [
        "Mr. Okonkwo",
        "The Man Without Fear",
        "Luke Charles",
        "Black Leopard",
        "the Client",
        "Coal Tiger",
        "has impersonated Daredevil and others on occasion",
      ],
      placeOfBirth: "Wakanda, Africa",
      firstAppearance: "Fantastic Four Vol. 1 #52 (1966)",
      publisher: "Marvel Comics",
      alignment: "good",
    },
    work: {
      occupation:
        "King and Chieftain of Wakanda, scientist; former school teacher",
      base: "Wakanda, Mobile",
    },
    connections: {
      groupAffiliation:
        "Formerly Fantastic Four, Secret Avengers, Avengers, Pendragons, Queen's Vengeance, former Fantastic Force financier",
      relatives:
        "Bashenga (paternal ancestor, deceased), Azzuri the Wise (paternal grandfather, deceased), Nanali (paternal grandmother, deceased), Chanda (paternal grandfather, presumably deceased), T?Chaka (father, deceased), S'Yan (uncle, deceased), N?Yami (mother, deceased), Ramonda (stepmother), Hunter (adopted brother), Jakarra (half-brother), Shuri (sister), Ororo Munroe (wife), Joshua Itobo, Ishanta, Zuni, M'Koni, T'Shan (cousins), Wheeler (cousin by marriage, deceased), Billy Wheeler (1st cousin once removed)",
    },
    images: {
      xs: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/106-black-panther.jpg",
      sm: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/106-black-panther.jpg",
      md: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/106-black-panther.jpg",
      lg: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/106-black-panther.jpg",
    },
  },
  {
    id: 107,
    name: "Black Widow",
    slug: "107-black-widow",
    powerstats: {
      intelligence: 75,
      strength: 13,
      speed: 33,
      durability: 30,
      power: 36,
      combat: 100,
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["5'7", "170 cm"],
      weight: ["131 lb", "59 kg"],
      eyeColor: "Green",
      hairColor: "Auburn",
    },
    biography: {
      fullName: "Natasha Romanoff",
      alterEgos: "No alter egos found.",
      aliases: [
        "Yelena Belova",
        "Natasha Romanoff",
        "Natasha",
        "Tasha",
        "Madame Natasha",
        "Nancy Rushman",
        "Laura Matthers",
        "Nadine Roman",
        '"Oktober"',
        "Black Pearl",
        "Ebon Flame",
      ],
      placeOfBirth: "-",
      firstAppearance: "Tales of Suspense #52",
      publisher: "Marvel Comics",
      alignment: "good",
    },
    work: {
      occupation: "Adventurer, Intelligence agent, former ballerina",
      base: "Mobile",
    },
    connections: {
      groupAffiliation:
        'Secret Avengers; formerly Thunderbolts (as Yelena Belova), Nick Fury, Mighty Avengers, S.H.I.E.L.D., Avengers, Champions of Los Angeles, Lady Liberators, KGB, "Marvel Knights", partner of Daredevil, Hawkeye, Boris Turgenov, Logan',
      relatives:
        "Unnamed parents (presumed deceased); Alexi Shostakov (Red Guardian, estranged husband); Vindiktor (alleged brother, deceased)",
    },
    images: {
      xs: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/107-black-widow.jpg",
      sm: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/107-black-widow.jpg",
      md: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/107-black-widow.jpg",
      lg: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/107-black-widow.jpg",
    },
  },
  {
    id: 149,
    name: "Captain America",
    slug: "149-captain-america",
    powerstats: {
      intelligence: 69,
      strength: 19,
      speed: 38,
      durability: 55,
      power: 60,
      combat: 100,
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'2", "188 cm"],
      weight: ["240 lb", "108 kg"],
      eyeColor: "blue",
      hairColor: "blond",
    },
    biography: {
      fullName: "Steve Rogers",
      alterEgos: "No alter egos found.",
      aliases: ["Nomad", "The Captain"],
      placeOfBirth: "Manhattan, New York City, New York",
      firstAppearance: "Captain America Comics #1 (March 1941)",
      publisher: "Marvel Comics",
      alignment: "good",
    },
    work: {
      occupation:
        "Adventurer, federal official, intelligence operative; former soldier, Hydra agent, liaison between S.H.I.E.L.D. and the Avengers, police officer, teacher, sparring partner.",
      base: "New York City",
    },
    connections: {
      groupAffiliation:
        "Secret Avengers (Black OPS Unit Formerly,The Avengers, Secret Avengers (Civil War), New Avengers, formerly The Invaders, Secret Defenders The Redeemers; formerly partner of Bucky, Golden Girl, Rick Jones, Falcon, Demolition-Man and Nomad (Jack Monroe)",
      relatives:
        "Joseph (father, deceased), Sara (mother, deceased), Ian Zola (Nomad) (adopted son)",
    },
    images: {
      xs: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/149-captain-america.jpg",
      sm: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/149-captain-america.jpg",
      md: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/149-captain-america.jpg",
      lg: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/149-captain-america.jpg",
    },
  },

  {
    id: 157,
    name: "Captain Marvel",
    slug: "157-captain-marvel",
    powerstats: {
      intelligence: 84,
      strength: 88,
      speed: 71,
      durability: 95,
      power: 100,
      combat: 90,
    },
    appearance: {
      gender: "Female",
      race: "Human-Kree",
      height: ["5'11", "180 cm"],
      weight: ["165 lb", "74 kg"],
      eyeColor: "Blue",
      hairColor: "Blond",
    },
    biography: {
      fullName: "Carol Danvers",
      alterEgos: "Binary, Warbird",
      aliases: [
        "Ace",
        "Binary",
        "Lady Marvel",
        "Warbird",
        "others used during her espionage career",
      ],
      placeOfBirth: "Boston, Massachusetts",
      firstAppearance: "Ms. Marvel #1",
      publisher: "Binary",
      alignment: "good",
    },
    work: {
      occupation:
        "Former National Aeronautics and Space Administration security Chief, former magazine editor, former freelance writer, former military intelligence officer.",
      base: "Avengers Mansion",
    },
    connections: {
      groupAffiliation:
        "currently Avengers, former companion to the X-Men (as Carol Danvers), former member of the Starjammers (as Binary), Former Avenger (as Ms. Marvel)",
      relatives:
        'Marie Danvers (mother), Joseph Danvers, Sr. (father), Joseph Danvers, Jr. (brother), Steve Danvers (brother, deceased), Marcus Immortus (Danvers) ("son", deceased)',
    },
    images: {
      xs: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/157-captain-marvel.jpg",
      sm: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/157-captain-marvel.jpg",
      md: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/157-captain-marvel.jpg",
      lg: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/157-captain-marvel.jpg",
    },
  },
  {
    id: 162,
    name: "Carnage",
    slug: "162-carnage",
    powerstats: {
      intelligence: 63,
      strength: 63,
      speed: 70,
      durability: 84,
      power: 88,
      combat: 90,
    },
    appearance: {
      gender: "Male",
      race: "Symbiote",
      height: ["6'1", "185 cm"],
      weight: ["190 lb", "86 kg"],
      eyeColor: "Green",
      hairColor: "Red",
    },
    biography: {
      fullName: "Cletus Kasady",
      alterEgos: "No alter egos found.",
      aliases: ["Mass Carnage", "999th"],
      placeOfBirth: "-",
      firstAppearance: "Amazing Spider-Man #344 (February, 1991)",
      publisher: "Marvel Comics",
      alignment: "bad",
    },
    work: {
      occupation: "-",
      base: "New York City",
    },
    connections: {
      groupAffiliation:
        "Maximum Carnage: (Carrion, Shriek, Demogoblin, Doppelganger)",
      relatives:
        'Venom ("father"); Shriek ("wife"); Hybrid, Lasher, Phage, Riot ("brothers"); Agony, Scream ("sisters"); Carrion, Demogoblin, Doppelganger, Toxin ("sons"); Scorn ("Daughter")',
    },
    images: {
      xs: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/162-carnage.jpg",
      sm: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/162-carnage.jpg",
      md: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/162-carnage.jpg",
      lg: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/162-carnage.jpg",
    },
  },
  {
    id: 185,
    name: "Colossus",
    slug: "185-colossus",
    powerstats: {
      intelligence: 63,
      strength: 83,
      speed: 33,
      durability: 100,
      power: 45,
      combat: 80,
    },
    appearance: {
      gender: "Male",
      race: "Mutant",
      height: ["7'5", "226 cm"],
      weight: ["500 lb", "225 kg"],
      eyeColor: "Silver",
      hairColor: "Black",
    },
    biography: {
      fullName: "Piotr Nikolaievitch Rasputin",
      alterEgos: "No alter egos found.",
      aliases: ["Pete", "Peter Nicholas", "The Proletarian", "Little Brother"],
      placeOfBirth:
        "Ust-Ordynski Collective, near Lake Baikal, Siberia, Russia",
      firstAppearance: "Giant-Size X-Men #1 (May, 1975)",
      publisher: "Marvel Comics",
      alignment: "good",
    },
    work: {
      occupation: "(current) Adventurer, student, (former) Artist",
      base: "(current) Professor Charles Xavier's Institute for Higher Learning, Salem Center, Westchester County, New York (former) Muir Isle, Scotland,; a loft in Soho, Manhattan, Ust-Ordynski Collective, Lake Baikal, Siberia, U.S.S.R., X-Men Headquarters in Austra",
    },
    connections: {
      groupAffiliation: "X-Men; formerly Excalibur, Acolytes, Defender",
      relatives:
        "Grigory Efimovich Rasputin (great-grandfather, deceased), Elena (great-grandmother, deceased), Ivan Rasputin (great-grand uncle, deceased), Grigory Rasputin (grandfather, deceased), Nikolai Rasputin (father, deceased), Alexandra Rasputina (mother, deceased), Vladimir Rasputin (uncle, deceased), unidentified aunt & uncle (deceased), Illyana Nikolievna Rasputina (Magik, sister, deceased), Mikhail Rasputin (brother), Peter Jr. (son), Larissa Mishchenko (cousin, deceased), Konstantin (cousin, deceased), Klara (cousin, deceased), Dimitriy (cousin, deceased)",
    },
    images: {
      xs: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/185-colossus.jpg",
      sm: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/185-colossus.jpg",
      md: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/185-colossus.jpg",
      lg: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/185-colossus.jpg",
    },
  },
  {
    id: 194,
    name: "Cyborg",
    slug: "194-cyborg",
    powerstats: {
      intelligence: 75,
      strength: 53,
      speed: 42,
      durability: 85,
      power: 71,
      combat: 64,
    },
    appearance: {
      gender: "Male",
      race: "Cyborg",
      height: ["6'6", "198 cm"],
      weight: ["385 lb", "173 kg"],
      eyeColor: "Brown",
      hairColor: "Black",
    },
    biography: {
      fullName: "Victor Stone",
      alterEgos: "No alter egos found.",
      aliases: ["Cyberion Technis", "Omegadrome", "Planet Cyberion"],
      placeOfBirth: "New York City, New York",
      firstAppearance: "DC Comics Presents #26 (October, 1980)",
      publisher: "DC Comics",
      alignment: "good",
    },
    work: {
      occupation: "Adventurer, Teen Titan",
      base: "San Francisco",
    },
    connections: {
      groupAffiliation:
        "Justice League; formerly Teen Titans, Titans, Titans East, New Teen Titans",
      relatives:
        "Silas Stone (father), Elinore Stone (mother), Tucker Stone (grandfather), Maude Stone (grandmother)",
    },
    images: {
      xs: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/194-cyborg.jpg",
      sm: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/194-cyborg.jpg",
      md: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/194-cyborg.jpg",
      lg: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/194-cyborg.jpg",
    },
  },
  {
    id: 196,
    name: "Cyclops",
    slug: "196-cyclops",
    powerstats: {
      intelligence: 75,
      strength: 10,
      speed: 23,
      durability: 42,
      power: 76,
      combat: 80,
    },
    appearance: {
      gender: "Male",
      race: "Mutant",
      height: ["6'3", "191 cm"],
      weight: ["195 lb", "88 kg"],
      eyeColor: "Brown",
      hairColor: "Brown",
    },
    biography: {
      fullName: "Scott Summers",
      alterEgos: "No alter egos found.",
      aliases: [
        "Scotty",
        "Cyke",
        "Slim",
        "Fearless Leader",
        "One-Eye",
        "Erik the Red",
        "Slym Dayspring",
        "Mutate 007",
        "Apocalypse",
      ],
      placeOfBirth: "Anchorage, Alaska",
      firstAppearance: "X-Men #1 (September, 1963)",
      publisher: "Marvel Comics",
      alignment: "good",
    },
    work: {
      occupation:
        "Leader of mutant race, adventurer, headmaster, former student, radio announcer",
      base: "Xavier Institute, Salem Center, Westchester County, New York",
    },
    connections: {
      groupAffiliation:
        "X-Men (leader, founding member); formerly X-Force (founder); Corsairs (squad leader); The Twelve; X-Factor/X-Terminators (founding member); 198",
      relatives:
        "Oscar Summers (adoptive paternal distant ancestor, deceased); Daniel Summers (paternal distant ancestor, deceased); Amanda Mueller (Black Womb) (paternal distant ancestor); unnamed great-grandfather, deceased; Gloria Dayne (Fontanelle) (paternal distant ancestor); Philip Summers (paternal grandfather); Deborah Summers (paternal grandmother); Christopher Summers (Corsair) (father, deceased); Katherine Ann Summers (mother, deceased); Jack Winters (Jack O'Diamonds) (former foster father); Alexander Summers (Havok) (brother); Gabriel Summers (Vulcan) (brother, deceased); Madelyne Pryor-Summers (Red Queen) (first wife/second wife's clone, deceased); Jean Grey-Summers (Phoenix) (second wife, deceased); Nathan Summers (Cable) (son, deceased); Gailyn Bailey (niece, deceased); Joseph Bailey (nephew, deceased); Adam Neramani (X-Treme) (nephew, alleged half-brother); Hope Summers (adoptive granddaughter); Stryfe (son's clone); Summers and Grey Family Tree (more relatives)",
    },
    images: {
      xs: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/196-cyclops.jpg",
      sm: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/196-cyclops.jpg",
      md: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/196-cyclops.jpg",
      lg: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/196-cyclops.jpg",
    },
  },
  {
    id: 201,
    name: "Daredevil",
    slug: "201-daredevil",
    powerstats: {
      intelligence: 75,
      strength: 13,
      speed: 25,
      durability: 35,
      power: 61,
      combat: 100,
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'0", "183 cm"],
      weight: ["200 lb", "90 kg"],
      eyeColor: "Blue",
      hairColor: "Red",
    },
    biography: {
      fullName: "Matt Murdock",
      alterEgos: "No alter egos found.",
      aliases: [
        "Matt",
        "Jack Batlin",
        "Kingpin of Crime",
        "Laurent LeVasseur",
        'Michael "Mike" Murdock',
        "Scarlet Swashbuckler",
        "Nameless One",
        "Kingpin of Hell's Kitchen",
        "The Man Without Fear",
        "The Guardian Devil",
        "DD",
        "Red",
        "Hornhead",
        "Cooper Peyton",
        "Captain Universe",
      ],
      placeOfBirth: "New York City, New York",
      firstAppearance: "Daredevil #1 (April, 1964)",
      publisher: "Marvel Comics",
      alignment: "good",
    },
    work: {
      occupation: "Adventurer, vigilante, Attorney at Law",
      base: "Hell's Kitchen, New York, New York, Shadowland (formerly)",
    },
    connections: {
      groupAffiliation:
        "none; Formerly: partner of Black Widow (Natasha Romanoff), Defenders, S.H.I.E.L.D., Marvel Knights, Secret Avengers (Civil War), Hand leader.",
      relatives:
        'Jonathan "Battling Jack" Murdock (Father, deceased), Maggie Murdock (aka Sister Maggie, Mother), Milla Donovan (ex-wife)',
    },
    images: {
      xs: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/201-daredevil.jpg",
      sm: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/201-daredevil.jpg",
      md: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/201-daredevil.jpg",
      lg: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/201-daredevil.jpg",
    },
  },
  {
    id: 414,
    name: "Loki",
    slug: "414-loki",
    powerstats: {
      intelligence: 88,
      strength: 63,
      speed: 46,
      durability: 85,
      power: 100,
      combat: 60,
    },
    appearance: {
      gender: "Male",
      race: "Asgardian",
      height: ["6'4", "193 cm"],
      weight: ["525 lb", "236 kg"],
      eyeColor: "Green",
      hairColor: "Black",
    },
    biography: {
      fullName: "Loki Laufeyson",
      alterEgos: "No alter egos found.",
      aliases: [
        "God of Mischief",
        "Gem-Keeper",
        "Walter Lawson",
        "Lester",
        "Loren Olsen",
        "Tyfon",
        "Father Williams",
        "Willie",
        "Tso Zhung; has also impersonated hundreds of others.",
      ],
      placeOfBirth: "Jotunheim, Asgard",
      firstAppearance: "Journey into Mystery Vol. 1 #85",
      publisher: "Marvel Comics",
      alignment: "bad",
    },
    work: {
      occupation: "God of evil; former god of mischief and madness",
      base: "Asgard",
    },
    connections: {
      groupAffiliation:
        'Asgardians, Karnilla, Enchantress, Skurge the Executioner, Cobra, Mister Hyde, Absorbing Man, Igron, Tyr, Lorelei, Hela, Ulik, Frost Giants, Storm Giants (former), Dormammu, "Acts of Vengeance" prime movers (Dr. Doom, Magneto, Red Skull, Mandari',
      relatives:
        "Laufey (father, deceased), Farbauti (mother, deceased), Sigyn (wife, deceased), Odin (foster father, deceased), Frigga (foster mother, deceased), Thor, Vidar (foster brothers, deceased), Hela,Fenris (Wolf), Jordmungand (Midgard Serpent) (children, deceased), Arkin (cousin, deceased)",
    },
    images: {
      xs: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/414-loki.jpg",
      sm: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/414-loki.jpg",
      md: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/414-loki.jpg",
      lg: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/414-loki.jpg",
    },
  },
  {
    id: 561,
    name: "Robin",
    slug: "561-robin",
    powerstats: {
      intelligence: 88,
      strength: 11,
      speed: 27,
      durability: 28,
      power: 32,
      combat: 85,
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'10", "178 cm"],
      weight: ["175 lb", "79 kg"],
      eyeColor: "Blue",
      hairColor: "Black",
    },
    biography: {
      fullName: "Dick Grayson",
      alterEgos: "Batman II, Nightwing",
      aliases: ["Renegade", "The Target", "Freddie Dinardo"],
      placeOfBirth: "-",
      firstAppearance: "Detective Comics #38 (April, 1940)",
      publisher: "Batman II",
      alignment: "good",
    },
    work: {
      occupation: "-",
      base: "Wayne Tower, Gotham City; formerly the Batcave;  formerly Bl?dhaven;  formerly New York City",
    },
    connections: {
      groupAffiliation:
        "Batman Family, Batman Incorporated, Justice League; formerly Teen Titans, Outsiders, Bludhaven Police Department, Secret Society of Super-Villains",
      relatives:
        "John Grayson (father), Mary Grayson (mother), Bruce Wayne (adoptive father), Damian Wayne (adoptive brother), Jason Todd (adoptive brother), Tim Drake (adoptive brother), Cassandra Cain (adoptive sister)",
    },
    images: {
      xs: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/561-robin.jpg",
      sm: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/561-robin.jpg",
      md: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/561-robin.jpg",
      lg: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/561-robin.jpg",
    },
  },
  {
    id: 620,
    name: "Spider-Man",
    slug: "620-spider-man",
    powerstats: {
      intelligence: 90,
      strength: 55,
      speed: 67,
      durability: 75,
      power: 74,
      combat: 85,
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'10", "178 cm"],
      weight: ["165 lb", "74 kg"],
      eyeColor: "Hazel",
      hairColor: "Brown",
    },
    biography: {
      fullName: "Peter Parker",
      alterEgos: "No alter egos found.",
      aliases: [
        "Spiderman",
        "Bag-Man",
        "Black Marvel",
        "Captain Universe",
        "Dusk",
        "Green Hood",
        "Hornet",
        "Mad Dog 336",
        "Peter Palmer",
        "Prodigy",
        "Ricochet",
        "Scarlet Spider",
        "Spider-Boy",
        "Spider-Hulk",
        "Spider-Morphosis",
      ],
      placeOfBirth: "New York, New York",
      firstAppearance: "Amazing Fantasy #15",
      publisher: "Marvel Comics",
      alignment: "good",
    },
    work: {
      occupation: "Freelance photographer, teacher",
      base: "New York, New York",
    },
    connections: {
      groupAffiliation:
        "Member of the Avengers, formerly member of Outlaws, alternate Fantastic Four",
      relatives:
        "Richard Parker (father, deceased), Mary Parker(mother, deceased), Benjamin Parker (uncle, deceased), May Parker (aunt), Mary Jane Watson-Parker (wife), May Parker (daughter, allegedly deceased)",
    },
    images: {
      xs: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/620-spider-man.jpg",
      sm: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/620-spider-man.jpg",
      md: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/620-spider-man.jpg",
      lg: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/620-spider-man.jpg",
    },
  },
  {
    id: 630,
    name: "Star-Lord",
    slug: "630-star-lord",
    powerstats: {
      intelligence: 69,
      strength: 20,
      speed: 33,
      durability: 50,
      power: 25,
      combat: 70,
    },
    appearance: {
      gender: "Male",
      race: "Human-Spartoi",
      height: ["6'2", "188 cm"],
      weight: ["175 lb", "79 kg"],
      eyeColor: "Blue",
      hairColor: "Blond",
    },
    biography: {
      fullName: "Peter Jason Quill",
      alterEgos: "No alter egos found.",
      aliases: ["Starlord"],
      placeOfBirth: "-",
      firstAppearance: "Marvel Preview #4 (January, 1976)",
      publisher: "Marvel Comics",
      alignment: "good",
    },
    work: {
      occupation: "Adventurer; Royal Prince of Spartax",
      base: "C.I.T.T.; formerly Kree space; Hala, Daedalus 5",
    },
    connections: {
      groupAffiliation:
        "Guardians of the Galaxy (leader); formerly unnamed commando team, United Front, Imperial Guard, partner of Ship, NASA",
      relatives:
        "Eson (grandfather, deceased), Gareth (great-uncle, deceased), Jason of Sparta (father), Meredith Quill (mother, deceased), Victoria (half-sister), Kip Holm (adopted brother), Sandy (adopted sister in-law), Alain (adopted niece), Rhys, Robyn (adopted nephews), Kitty Pryde (fiance), Unnamed former Symbiote",
    },
    images: {
      xs: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/630-star-lord.jpg",
      sm: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/630-star-lord.jpg",
      md: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/630-star-lord.jpg",
      lg: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/630-star-lord.jpg",
    },
  },

  {
    id: 638,
    name: "Storm",
    slug: "638-storm",
    powerstats: {
      intelligence: 75,
      strength: 10,
      speed: 47,
      durability: 30,
      power: 88,
      combat: 75,
    },
    appearance: {
      gender: "Female",
      race: "Mutant",
      height: ["5'11", "180 cm"],
      weight: ["127 lb", "57 kg"],
      eyeColor: "Blue",
      hairColor: "White",
    },
    biography: {
      fullName: "Ororo Munroe",
      alterEgos: "No alter egos found.",
      aliases: [
        "Ororo Iqadi T'Challa",
        "Queen Ororo",
        "Ororo Komo Wakandas,White Queen",
        "Weather Witch",
        "Windrider",
        "Goddess",
        "Mistress of the Elements",
        "Princess of N'Dare",
        "High Priestess Windrider",
        "Goddess",
        "Mistress of the Elements",
        "Princess of N'Dare",
        "High Priestess",
      ],
      placeOfBirth: "New York, New York",
      firstAppearance: "Giant-Size X-Men #1 (May, 1975)",
      publisher: "Marvel Comics",
      alignment: "good",
    },
    work: {
      occupation: "Adventurer",
      base: "Xavier Institute, Salem Center, Westchester County, New York State",
    },
    connections: {
      groupAffiliation:
        "X-Men (Jean Grey School member, leader); formerly X-Force (Strike Team); Murder Circus (brainwashed), Extinction Team, Avengers[3], Fantastic Four, X.S.E., X-Treme X-Men, Tokyo Arena, The Twelve, Seven Brides of Set, Hellfire Club (Inner Circle), Morlocks",
      relatives:
        "Ayesha of Balobedu (ancestor), Ashake of Egypt (ancestor), Ashake of Mero? (ancestor), unnamed ancestor, Harriet Munroe (paternal grandmother), unnamed paternal grandfather, unnamed maternal grandmother, David Munroe (father, deceased), N'Dar? Munroe (mother, deceased), Ainet (unofficial foster mother), Achmed El Gib?r (unofficial foster father), Colonel Shetani (maternal uncle), unnamed paternal aunt (deceased), David Munroe, Jr. (cousin), Munroe Family (relatives), Black Panther (T'Challa) (ex-husband, marriage annulled)",
    },
    images: {
      xs: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/638-storm.jpg",
      sm: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/638-storm.jpg",
      md: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/638-storm.jpg",
      lg: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/638-storm.jpg",
    },
  },
];
export default heros;
