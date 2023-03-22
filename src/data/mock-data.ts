function getRandInt(a: number, b: number): number {
  return Math.round(Math.random() * (b-a)) + a;
}

const DATA: any = {
  gaming_startups: [
    {
      title: "Call of the VoYd",
      image: "https://pbs.twimg.com/profile_images/1600489517097619457/_S3Yqs2i_400x400.jpg",
      description: "New Free to Play to Own Roguelike ARPG Mobile Game Coming Soon!",
      genre: "RPG, Action-RPG",
      stage: "In Development",
      upvote_count: getRandInt(0, 999),
    },
    {
      title: "Halfwish",
      image: "https://pbs.twimg.com/profile_images/1496439975671316481/S8xEvYLy_400x400.jpg",
      description: "PVP roguelite card game that blends the term 'Wizard Poker' with Streetfighter.",
      genre: "TCG, RTS",
      stage: "Demo Soon",
      upvote_count: getRandInt(0, 999),
    },
    {
      title: "Paradise Tycoon",
      image: "https://pbs.twimg.com/profile_images/1493583534157611010/_FJb-Rg6_400x400.png",
      description: "Build your Paradise, Have fun with your Friends and Compete to become the Ultimate Tycoon in our immersive Multiplayer.",
      genre: "Adventure, Sandbox",
      stage: "Live",
      upvote_count: getRandInt(0, 999),
    },
    {
      title: "Legions & Legends",
      image: "https://pbs.twimg.com/profile_images/1631055277003816962/W4fAXTn3_400x400.jpg",
      description: "A New Sci-fi / Fantasy Action RPG from the Creators of Star Wars: Galaxy of Heroes.",
      genre: "RPG, Action-RPG",
      stage: "In Development",
      upvote_count: getRandInt(0, 999),
    },
    {
      title: "Sipher",
      image: "https://pbs.twimg.com/profile_images/1630762842273247239/WUWeosk9_400x400.jpg",
      description: "Sipher is a multiplayer looter shooter ARPG, set in a dream-like universe of alien worlds, vibrant characters, and dangerous mysteries.",
      genre: "Shooter, Action-RPG",
      stage: "Demo Soon",
      upvote_count: getRandInt(0, 999),
    },
    {
      title: "Mighty Action Heroes",
      image: "https://pbs.twimg.com/profile_images/1601211631513399296/aeX0s1qi_400x400.jpg",
      description: "Web3 battle royale in development by @MightyBearGames",
      genre: "Shooter, Battle Royale",
      stage: "Live",
      upvote_count: getRandInt(0, 999),
    },
    {
      title: "Parallel",
      image: "https://pbs.twimg.com/profile_images/1491123866051043334/F97r-w8__400x400.png",
      description: "Parallel is a Sci-Fi Franchise and Card Game.",
      genre: "Card, Sci-Fi",
      stage: "Live",
      upvote_count: getRandInt(0, 999),
    },
    {
      title: "Webaverse",
      image: "https://pbs.twimg.com/profile_images/1468893294759342081/K9-JVFT4_400x400.jpg",
      description: "Immersive open source virtual worlds.",
      genre: "Sandbox",
      stage: "Pre-Launch",
      upvote_count: getRandInt(0, 999),
    },
    {
      title: "Fableborne",
      image: "https://pbs.twimg.com/profile_images/1557713237369659392/S2k3vfSi_400x400.jpg",
      description: "Raid real players, defend your base and fight amongst heroes, while you embark on a journey to explore the Shatterlands.",
      genre: "Casual, RPG",
      stage: "Demo Soon",
      upvote_count: getRandInt(0, 999),
    },
    {
      title: "Shrapnel",
      image: "https://pbs.twimg.com/profile_images/1635406776647688193/xiIQ_JMF_400x400.jpg",
      description: "The 1st blockchain-enabled AAA customizable extraction FPS to be owned by players.",
      genre: "Shooter, FPS",
      stage: "In Development",
      upvote_count: getRandInt(0, 999),
    },
    {
      title: "Duskbreakers",
      image: "https://pbs.twimg.com/profile_images/1443947652450766849/jq1NPHt4_400x400.jpg",
      description: "DuskBreakers is a sci-fi inspired metaverse and gaming experience powered by blockchain.",
      genre: "Shooter, TPS",
      stage: "In Development",
      upvote_count: getRandInt(0, 999),
    },
    {
      title: "Tatsumeeko",
      image: "https://pbs.twimg.com/profile_images/1508003560125984770/DDUqMMb4_400x400.jpg",
      description: "The modern fantasy idle MMO-lite for Discord & Mobile! Adventure Across Dimensions.",
      genre: "RPG, MMORPG",
      stage: "In Development",
      upvote_count: getRandInt(0, 999),
    },
  ],
};

export default DATA;

