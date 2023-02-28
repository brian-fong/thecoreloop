import {
  Box,
  Text,
  Flex,
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
  const [desktop_mode, setDesktopMode] = useState<boolean>(true);

  useEffect(() => {
    const touch_enabled: boolean = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const screen_width: number = dimensions?.contentBox?.width!;

    console.log("Screen Width: ", dimensions);

    if (touch_enabled && screen_width <= 400) {
      setDesktopMode(false);
    } else {
      setDesktopMode(true);
    }
  }, [dimensions]);

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

        <Flex
          id="top-container"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="100%"
          background="body"
        >
          {/* Heading */}
          <Text 
            margin="20px 0px"
            width="100%"
            fontSize="20px" 
            fontStyle="italic"
            fontWeight="800" 
            textAlign="center"
          >
            === WELCOME TO THECORELOOP ===
          </Text>

          {/* Carousel */}
          <Flex
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            padding="20px"
            width="100%"
          >
            {
              desktop_mode
                ? <Carousel_Desktop screen_width={dimensions?.contentBox?.width!} />
                : <Carousel_Mobile />
            }
          </Flex>

          {/* Body */}
          <Flex
            id="body-text"
            flexDirection="column"
            gap="20px"
            justifyContent="center"
            alignItems="center"
            padding="20px 10px 30px"
            width="100%"
            fontSize="18px"
            textAlign="center"
          >
            <Box>
              Say goodbye 👋 to scouring
              <Image
                src="./icons/twitter-logo.png"
                display="inline"
                position="relative"
                top="5px"
                padding="0px 0px 0px 10px"
                height="32px"
              />
              ,
              <Image
                src="./icons/discord-logo.png"
                display="inline"
                position="relative"
                top="5px"
                padding="0px 0px 0px 10px"
                height="32px"
              />
              , and
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
            <Box>
              <Text 
                display="inline" 
                color="tcl_pink" 
                fontStyle="italic" 
                fontWeight="800"
              >thecoreloop </Text>
              is your go-to social discovery platform where 
              <Text 
                display="inline" 
                fontStyle="italic" 
                opacity="0.7"
              > community </Text> 
              and 
              <Text 
                display="inline" 
                fontStyle="italic" 
                opacity="0.7"
              > web3 games </Text> 
              intersect
            </Box>
          </Flex>
        </Flex>

        <Flex
          id="bottom-container"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="100%"
          background="gallery"
        >
          {/* Player Gallery */}
          <Gallery screen_width={dimensions?.contentBox?.width!} />

          {/* Player Heading */}
          <Link
            href="https://pm6hpw3zasy.typeform.com/to/kOc7e3N7"
          >
            <Text 
              margin="20px 0px"
              padding="4px 20px"
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
    </>
  );
}


