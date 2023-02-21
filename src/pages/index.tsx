import {
  Box,
  Text,
  Flex,
  Heading,
  Image,
  Link,
  useDimensions,
} from "@chakra-ui/react";
import Head from "next/head";
import { useRef, useState, useEffect } from "react";
import Header from "../components/LandingPage/Header";
import Gallery from "../components/LandingPage/Gallery";
import Carousel_Mobile from "../components/LandingPage/Carousel_Mobile";
import Carousel_Desktop from "../components/LandingPage/Carousel_Desktop";

export default function landing_page() {
  const main_ref = useRef<any>();
  const dimensions = useDimensions(main_ref, true);
  const [touch_enabled, setTouch] = useState<boolean>(false);

  useEffect(() => {
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setTouch(false);
    } else {
      setTouch(true);
    }

    console.log("Touch Enabled: ", touch_enabled);
  }, []);

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
        id="main_container"
        ref={main_ref}
        flexDirection="column"
        justifyContent="start"
        alignItems="center"
        minHeight="100vh"
        color="white"
        background="body"
      >
        {/* Header */}
        <Header />

        {/* Carousel Container */}
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          {/* Carousel Heading */}
          <Text 
            margin="30px 0px 0px"
            padding="4px 8px"
            fontSize="20px" 
            fontStyle="italic"
            fontWeight="800" 
            textAlign="center"
            width="100%"
          >
            === WELCOME TO THECORELOOP ===
          </Text>

          {/* Carousel */}
          {
            touch_enabled
              ? <Carousel_Desktop 
                screen_width={dimensions?.contentBox?.width!} 
              />
              : <Carousel_Mobile 

              />
          }
        </Flex>

        {/* Body */}
        <Flex
          id="body-container"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="100%"
          zIndex={3}
        >
          {/* Body Text */}
          <Flex
            id="body-text"
            flexDirection="column"
            gap="20px"
            justifyContent="center"
            alignItems="center"
            padding="20px 10px 30px"
            width="100%"
            background="bkg"
          >
            <Box maxWidth="1200px" fontSize="18px" textAlign="center">
              Say goodbye 👋 to scouring
              {/* <Text display="inline" fontWeight="800"> Twitter </Text> */}
              <Image
                src="./icons/twitter-logo.png"
                display="inline"
                position="relative"
                top="5px"
                padding="0px 0px 0px 10px"
                height="32px"
              />
              ,
              {/* <Text display="inline" fontWeight="800"> Discord</Text> */}
              <Image
                src="./icons/discord-logo.png"
                display="inline"
                position="relative"
                top="5px"
                padding="0px 0px 0px 10px"
                height="32px"
              />
              , &
              {/* <Text display="inline" fontWeight="800"> Telegram</Text> */}
              <Image
                src="./icons/telegram-logo.png"
                display="inline"
                position="relative"
                top="5px"
                padding="0px 10px 0px 10px"
                height="32px"
              />
              for gaming information!
            </Box>
            <Box maxWidth="1200px" fontSize="18px" textAlign="center">
              <Text display="inline" color="tcl_pink" fontStyle="italic" fontWeight="800">thecoreloop </Text>
              is your go-to social discovery platform where 
              <Text display="inline" fontStyle="italic" opacity="0.7"> community </Text> 
              and 
              <Text display="inline" fontStyle="italic" opacity="0.7"> web3 games </Text> 
              intersect.
            </Box>
          </Flex>

          {/* Player Heading */}
          <Flex
            id="player-heading"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            padding="30px"
            width="100%"
            background="gallery"
          >
            {/* Player Gallery */}
            <Gallery screen_width={dimensions?.contentBox?.width!} />

            <Link
              href="https://pm6hpw3zasy.typeform.com/to/kOc7e3N7"
            >
              <Text 
                marginTop="20px"
                padding="4px 8px"
                fontSize="20px" 
                fontStyle="italic"
                fontWeight="800" 
                textAlign="center"
                width="100%"
              >
                === SELECT YOUR CLASS AND JOIN THE CORE TEAM! ===
              </Text>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}


