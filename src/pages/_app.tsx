// Node Modules
import axios from "axios";
import uuid from 'react-uuid';

// React
import { useEffect, useState, ReactElement } from "react";

// ChakraUI
import { Flex } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from "../styles/theme";

// Components
import Head from "next/head";
import Logo from "../components/Logo";
import Post from "../components/Post";
import NavBar from "../components/NavBar";
import Card from "../components/Card";

// Types
import { LAG } from "../types";

export default function App() {
  // Initialize latest LAG state variable
  const [LAG, setLAG] = useState<LAG>({
    heading: "",
    subheading: "",
    message_id: -1,
    number: -1,
    date: "",
    content: [],
  });

  // Initialize Special Insights state variable
  const [SI, setSI] = useState<string>("");

  // Initialize Cards array state variable
  const [cards, setCards] = useState<ReactElement[]>([]);

  useEffect(() => {
    async function init(): Promise<void> {
      console.log("Sending GET request to /api endpoint . . .");
      let response: any = {};
      try {
        // Send GET request to /api endpoint
        response = await axios.get("/api");
        const lag: LAG = response.data;

        // Assign LAG and console-log LAG
        console.log("LAG: ", lag);
        setLAG(lag);

        for (const category_group of lag.content) {
          // Assign Special Insights caption
          if (category_group.category.toLowerCase().includes("special insights")) {
            setSI(category_group.articles[0].caption);
            continue;
          }
          
          // Build Cards array
          for (const article of category_group.articles) {
            const card: ReactElement = <Card 
              key={uuid()}
              url={article.url || ""}
              caption={article.caption || ""}
              title={article.title || ""}
              description={article.description || ""}
              image={article.image || ""}
              category={category_group.category || ""}
              source={article.source || ""}
            />;
            setCards(cards => [...cards, card])
          }
        }
      } catch (error) {
        console.log(error);
        return;
      }
    }

    init();
  }, []);

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
            special_insights={SI}
            heading={LAG.heading}
            date={LAG.date}
            cards={cards}
          />
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}
