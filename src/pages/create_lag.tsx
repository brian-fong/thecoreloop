import Head from "next/head";
import { LAG } from "../types";
import { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import Logo from "../components/Core/Logo";
import NavBar from "../components/Core/NavBar";
import ViewLAG from "../components/CreateLAG/ViewLAG";
import InputLAG from "../components/CreateLAG/InputLAG";
import PreviewLAG from "../components/CreateLAG/PreviewLAG";
import useFetchMetadata from "../hooks/useFetchMetadata";

export default function create_lag() {
  const [lag, set_lag] = useState<LAG>({
    heading: "",
    subheading: "",
    number: "",
    date: "",
    special_insights: "",
    content: [],
  });

  const {fetching, set_fetching, abort, cards} = useFetchMetadata(lag.content);

  useEffect(() => {
    window.onbeforeunload = () => "";
  }, [])

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
            lag={lag}
            set_lag={set_lag}
            fetching={fetching}
            set_fetching={set_fetching}
            abort={abort}
          />
          <PreviewLAG 
            lag={lag}
          />
          <ViewLAG
            lag={lag}
            cards={cards}
          />
        </Flex>
      </Flex>
    </>
  );
}

