import {   Flex,
} from "@chakra-ui/react";
import { LAG } from "../types";
import Logo from "../components/Logo";
import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";
import CreateLAG from "../components/CreateLAG";
import TGramPreview from "../components/TGramPreview";

export default function create_lag() {
  const [lag, set_lag] = useState<LAG>({
    heading: "",
    number: -1,
    date: "",
    special_insights: "",
    content: [],
  });

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
      bg="bkg"
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
        <CreateLAG
          set_lag={set_lag}
        />
        {lag.heading ? <TGramPreview lag={lag} /> : ""}
      </Flex>
    </Flex>
  );
}

