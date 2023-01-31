import Head from "next/head";
import { LAG } from "../types";
import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import Logo from "../components/Core/Logo";
import NavBar from "../components/Core/NavBar";
import InputLAG from "../components/CreateLAG/InputLAG";
import useFetchMetadata from "../hooks/useFetchMetadata";
import TGramPreview from "../components/CreateLAG/TGramPreview";

export default function create_lag() {
  const [lag, set_lag] = useState<LAG>({
    heading: "",
    subheading: "",
    number: "",
    date: "",
    special_insights: "",
    content: [],
  });

  const { 
    fetching, 
    start_fetching, 
    end_fetching, 
    lag_meta 
  } = useFetchMetadata();

  return (
    <>
      <Head>
        <title>tcl - Create Daily LAG</title>
        <link 
          rel="icon" 
          type="image/x-icon" 
          href="/thecoreloop-favicon.png" 
        />
        <meta name="viewport" content="viewport-fit=cover" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
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
          width="100%"
          minWidth="300px" 
          maxWidth="800px"
          boxSizing="border-box"
        >
          <Logo />
          <InputLAG
            set_lag={set_lag}
          />
          <TGramPreview 
            lag={lag}
            fetching={fetching}
            start_fetching={start_fetching}
            end_fetching={end_fetching}
          />
        </Flex>
      </Flex>
    </>
  );
}

