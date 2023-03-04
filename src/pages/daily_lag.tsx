import axios from "axios";
import theme from "../styles/theme";
import { Flex } from '@chakra-ui/react'
import { useEffect, useState } from "react";
import { ChakraProvider } from '@chakra-ui/react'

// Components
import Logo from "../components/Core/Logo";
import Hint from "../components/DailyLAG/Hint";
import ScrollBtn from "../components/Misc/ScrollBtn";
import NavBar from "../components/Core/NavBar";
import Post from "../components/DailyLAG/Post";

// Types
import { LAG } from "../types";

export default function daily_lag() {
  // Initialize latest LAG state variable
  const [lag, set_lag] = useState<LAG>({
    heading: "",
    subheading: "",
    message_id: -1,
    number: "",
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
      <Flex 
        id="root_container"
        flexDir="column" 
        justify="start" 
        align="center" 
        m="0px" 
        p="0px"
        width="100vw" 
        height="100vh"
        bg="body"
        boxSizing="border-box"
        overflowX="hidden"
      >
        <NavBar />

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
          <Hint />
          <Post 
            lag={lag}
          />
          <ScrollBtn 
            elem_id="navbar"
            text="Back to Top"
          />
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

