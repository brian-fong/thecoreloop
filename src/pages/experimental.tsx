// Components
import {
  Button,
  Flex,
} from "@chakra-ui/react";
import Head from "next/head";
import Header from "../components/Header/Header";

// Axios
import axios from "axios";

export default function experimental() {
  async function sendRequest() {
    await axios.post("/api/login")
  }

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
        width="100%"
        minHeight="100vh"
        color="white"
        userSelect="none"
      >
        {/* Header */}
        <Header />

        {/* Body Container */}
        <Flex
          id="body-container"
          flexDirection="column"
          justifyContent="start"
          alignItems="center"
          marginTop="20px"
          padding="0 30px 30px"
          width="100%"
          height="100%"
        >
          <Flex
            id="content-container"
            flexDirection="column"
            justifyContent="start"
            alignItems="center"
            width="100%"
            maxWidth="800"
            height="100%"
          >
            <Button onClick={sendRequest}>
              hello
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

