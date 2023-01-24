// Node Modules
import axios from "axios";

// React
import { useEffect, useState } from "react";

// ChakraUI
import { Flex } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from "../styles/theme";

// Components
import Head from "next/head";
import Logo from "../components/Logo";
import Post from "../components/Post";
import NavBar from "../components/NavBar";

// Types
import { LAG } from "../types";

export default function App() {
  // Initialize latest LAG state variable
  const [lag, set_lag] = useState<LAG>({
    heading: "",
    subheading: "",
    message_id: -1,
    number: -1,
    date: "",
    special_insights: "",
    content: [],
  });

  useEffect(() => {
    // Send GET request to /api endpoint
    async function init(): Promise<void> {
      console.log("Sending GET request to /api endpoint . . .");
      let response: any = {};
      try {
        // Send GET request to /api endpoint
        response = await axios.get("/api");
        const lag: LAG = response.data;

        // Assign LAG and console-log LAG
        console.log("LAG: ", lag);
        set_lag(lag);

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
        overflowX="hidden"
      >
        <NavBar />

        { /* Main Column Container */ }
        <Flex 
          id="main_container"
          flexDir="column" 
          gap="50px" 
          justify="start" 
          align="center" 
          m="0px"
          p="40px 40px 60px" 
          minWidth="300px" 
          width="100%"
          maxWidth="800px"
          boxSizing="border-box"
        >
          <Logo />
           <Post 
              lag={lag}
            />
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}
