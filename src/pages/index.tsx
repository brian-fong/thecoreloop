import {
  Box,
  Text,
  Flex,
  Link,
  Image,
  Tooltip,
  useDimensions,
} from "@chakra-ui/react";
import Head from "next/head";
import { useRef, useState, useEffect } from "react";
import Gallery from "../components/LandingPage/Gallery";
import Carousel from "../components/LandingPage/Carousel/Carousel";

export default function landing_page() {
  const main_ref = useRef<any>();
  const [cols, setCols] = useState<number>(4);
  const dimensions = useDimensions(main_ref, true);

  useEffect(() => {
    const width: number = dimensions?.contentBox?.width!;
    
    // Set number of columns for image gallery
    if (width > 1210) setCols(4);
    else if (width > 610) setCols(2);
    else setCols(1);
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
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>
      <Flex
        id="main_container"
        ref={main_ref}
        flexDirection="column"
        justifyContent="start"
        alignItems="center"
        minHeight="100vh"
        color="white"
        background="#282A36"
      >
        {/* Banner */}
        <Flex
          id="banner"
          flexDirection="row"
          gap="10px"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          background="tcl_yellow"
          draggable={false}
        >
          <Image
            src="./tcl-logo.png"
            objectFit="cover"
            height="50px"
            draggable={false}
          />
          <Flex
            id="socials-container"
            flexDirection="row"
            gap="20px"
            justifyContent="center"
            alignItems="center"
            padding="10px 30px 10px 10px"
          >
            <Tooltip label="Subscribe to our newsletter">
              <Link href="https://substack.com/" isExternal>
                <Image src="./substack-icon.svg" height="24px" borderRadius="" />
              </Link>
            </Tooltip>
            <Tooltip label="Follow us on Twitter">
              <Link href="https://twitter.com/thecoreloop" isExternal>
                <Image src="./twitter-icon.png" height="24px" />
              </Link>
            </Tooltip>
            <Tooltip label="Daily updates on Telegram">
              <Link href="https://t.me/thecoreloop" isExternal>
                <Image src="./telegram-icon.png" height="24px" />
              </Link>
            </Tooltip>
          </Flex>
        </Flex>

        {/* References Carousel */}
        <Carousel />

        {/* Body */}
        <Flex
          id="body"
          flexDirection="column"
          gap="10px"
          justifyContent="center"
          alignItems="center"
          padding="0px 0px 30px"
          zIndex={3}
        >
          <Flex
            flexDirection="column"
            gap="20px"
            justifyContent="center"
            alignItems="center"
            padding="0px 40px"
            maxWidth="1200px"
          >
            <Box fontSize="18px" textAlign="center">
              Say goodbye 👋 to scouring <Text display="inline" color="twitter">Twitter</Text>, <Text display="inline" color="white">Notion</Text>, <Text display="inline" color="telegram">Telegram</Text>, &#38; <Text display="inline" color="discord">Discord</Text> for gaming information!
            </Box>
            <Box fontSize="18px" textAlign="center">
              <Text display="inline" color="tcl_pink">thecoreloop</Text> is your go-to social discovery platform where community and web3 games intersect.
            </Box>
          </Flex>

          {/* Player Gallery */}
          <Gallery cols={cols} />

          <Text fontSize="20px" fontWeight="800" textAlign="center">
            Select your class and join the core team!
          </Text>
        </Flex>
      </Flex>
    </>
  );
}


