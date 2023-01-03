// ChakraUI
import { 
  Flex,
} from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from "../styles/theme";

// Components
import Head from "next/head";
import Logo from "./Logo";
import Post from "./Post";
import { CardProps } from "./Card";
import NavBar from "./NavBar";

export default function App() {
  const special_insights: string = "powered by AppMagic.rocks 😎\n\nSorry no insights today frens.  Currently feeling sick. 🤒  Let's get straight to the news.";
  const cards: CardProps[] = [
    {
      url: "https://mobiledevmemo.com/the-duopoly-is-over-because-everything-is-an-ad-network/",
      caption: "A look at everything being an ad network by @eric_seufert",
      title: "The Duopoly is over (because Everything is an Ad Network) | Mobile Dev Memo by Eric Seufert",
      description: "The Duopoly is over (because Everything is an Ad Network). Mobile marketing and advertising, freemium monetization strategy, and marketing science. Mobile Dev",
      image: "https://mobiledevmemo.com/wp-content/uploads/2022/12/mdm_duopoly_over.jpg",
      source: "Mobile Dev Memo",
      category: "🔦 Spotlight 🌟",
    },
    {
      url: "https://newzoo.com/insights/articles/the-games-market-in-2022-the-year-in-numbers",
      caption: "A look at the games market in 2022 by the numbers",
      title: "The Games Market in 2022: The Year in Numbers | Newzoo",
      description: "Take a look back at the games market in 2022, featuring the latest market figures, trends, and quotes from Newzoo's expert analysts.",
      image: "https://newzoo.com/wp-content/uploads/2022/12/Games-Market-in-Numbers-2022-Look-Back-post-tiny.png",
      source: "Newzoo",
      category: "🌊 MARKET ☎️",
    },
    {
      url: "https://www.theblockresearch.com/2022-review-of-metaverse-194134",
      caption: "A look at a 2022 Review of Metaverse",
      title: "2022 Review of Metaverse",
      description: "The term “metaverse” became one of the most overused words in 2022 due to its wide variety of interpretations. The Block Research defines “metaverse” as a",
      image: "https://www.tbstat.com/wp/uploads/2022/12/Gaming_Text-1200x675.jpg",
      source: "The Block",
      category: "🌊 MARKET ☎️",
    },
    {
      url: "https://www.gamesindustry.biz/games-of-the-year-2022-podcast",
      caption: "A look at some favorite titles of the year ",
      title: "Games of the Year 2022 | Podcast",
      description: "For our final podcast of 2022, the GamesIndustry.biz team gathers around their mics and discusses their favourite games…",
      image: "https://assets.reedpopcdn.com/goty2022-LEAD.jpg/BROK/thumbnail/1600x900/format/jpg/quality/80/goty2022-LEAD.jpg",
      source: "GamesIndustry.biz",
      category: "🌊 MARKET ☎️",
    },
    {
      url: "https://venturebeat.com/games/apex-legends-was-ea-games-most-popular-in-house-ip-in-2022/",
      caption: "A look at EA Games' most successful in-house IP ",
      title: "Apex Legends was EA Games’ most popular in-house IP in 2022",
      description: "Electronic Arts released its year-end report, which highlights various stats for its most popular games, such as Apex Legends.",
      image: "https://venturebeat.com/wp-content/uploads/2019/02/apex-14.jpg?w=1200&strip=all",
      source: "VentureBeat",
      category: "💎 Deep Dives 🔎",
    },
    {
      url: "https://mobiledevmemo.com/the-duopoly-is-over-because-everything-is-an-ad-network/",
      caption: "A look at everything being an ad network by @eric_seufert",
      title: "The Duopoly is over (because Everything is an Ad Network) | Mobile Dev Memo by Eric Seufert",
      description: "The Duopoly is over (because Everything is an Ad Network). Mobile marketing and advertising, freemium monetization strategy, and marketing science. Mobile Dev",
      image: "https://mobiledevmemo.com/wp-content/uploads/2022/12/mdm_duopoly_over.jpg",
      source: "Mobile Dev Memo",
      category: "💎 Deep Dives 🔎",
    },
  ];

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>thecoreloop</title>
        <link 
          rel="icon" 
          type="image/x-icon" 
          href="/thecoreloop-favicon.png" 
        />
        <meta name="viewport" content="viewport-fit=cover" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Flex 
        flexDir="column" 
        justify="start" 
        align="center" 
        m="0px" 
        p="0px"
        width="100vw" 
        height="100vh" 
        bg="bkg"
        boxSizing="border-box"
        overflowX="auto"
      >
        <NavBar />

        { /* Main Column Container */ }
        <Flex 
          flexDir="column" 
          gap="50px" 
          justify="start" 
          align="center" 
          m="40px 40px 60px" 
          p="0px"
          minWidth="400px" 
          maxWidth="750px"
          boxSizing="border-box"
        >
          <Logo />
          <Post 
            special_insights={special_insights}
            title="Look At Gaming: #123"
            date="Wed Dec 21 2022"
            cards={cards}
          />
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}
