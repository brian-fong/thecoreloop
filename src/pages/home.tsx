import {
  Flex, 
} from "@chakra-ui/react";
import Head from "next/head";
import Header from "../components/LandingPage/Header";
import LeftColumn from "../components/Home/LeftColumn";
import MainColumn from "../components/Home/MainColumn";
import RightColumn from "../components/Home/RightColumn";

export default function Home() {
  return (
    <>
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
      {/* Main Container */}
      <Flex
        id="main-container"
        flexDirection="column"
        justifyContent="start"
        alignItems="center"
        position="relative"
        minHeight="100vh"
        color="white"
        background="body"
      >
        {/* Header */}
        <Header />

        <Flex
          id="body-container"
          flexDirection="row"
          justifyContent="start"
          alignItems="start"
          width="100%"
          minHeight="100vh"
        >
          <LeftColumn />
          
          <MainColumn />

          <RightColumn />
        </Flex>
      </Flex>
    </>
  );
}
