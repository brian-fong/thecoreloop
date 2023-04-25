// Components
import { Flex, Text } from '@chakra-ui/react'
import Logo from '../../components/Core/Logo';
import Hint from '../../components/DailyLAG/Hint';
import NavBar from '../../components/Core/NavBar';
import Post from "../../components/DailyLAG/Post";

// Hooks
import { useEffect, useState } from "react";

// Helper
import axios from "axios";
import scrollTo from '../../utils/scroll';

// Types
import { LAG } from '../../types';

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

        <Post lag={lag} />

        <Flex
          flexDir="column" 
          justify="center" 
          align="center" 
          width="min-content" 
          padding="10px 15px"
          color="black"
          bg="tcl_teal"
          border="1px solid black" 
          boxShadow="10px 10px 2px rgba(0, 0, 0, 0.5)"
          boxSizing="border-box"
          cursor="pointer"
          transition="background-color 200ms ease" 
          _focusVisible={{
            color: "white",
            bg: "tcl_teal_hover",
            outline: "1px solid blue",
          }}
          _hover={{
            color: "white",
            bg: "tcl_teal_hover",
          }}
          draggable="false" 
          userSelect="none"
          onClick={() => scrollTo("navbar")}
        >
          <Text
            fontSize="14px"
            fontWeight="800"
            whiteSpace="nowrap"
          >
            Back to Top
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

