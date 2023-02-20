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
import Gallery, { GALLERY_MODES } from "../components/LandingPage/Gallery";
import Carousel from "../components/LandingPage/Carousel/Carousel";

export default function landing_page() {
  const main_ref = useRef<any>();
  const dimensions = useDimensions(main_ref, true);
  const [gallery_mode, setGalleryMode] = useState<number>(0);

  useEffect(() => {
    const width: number = dimensions?.contentBox?.width!;

    let _gallery_mode: number = 0;
    for (let i = 0; i < GALLERY_MODES.length; i++) {
      const min_width: number = GALLERY_MODES[i].min_width;
      if (width > min_width) _gallery_mode = i;
    }

    setGalleryMode(_gallery_mode);
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
          zIndex={10}
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
        <Carousel screen_width={dimensions?.contentBox?.width!} />

        {/* Body */}
        <Flex
          id="body"
          flexDirection="column"
          gap="10px"
          justifyContent="center"
          alignItems="center"
          zIndex={3}
        >
          <Flex
            id="body-text"
            flexDirection="column"
            gap="20px"
            justifyContent="center"
            alignItems="center"
            padding="30px"
            maxWidth="1200px"
          >
            <Box fontSize="18px" textAlign="center">
              Say goodbye 👋 to scouring <Text display="inline" color="twitter">Twitter</Text>, <Text display="inline" color="telegram">Telegram</Text>, &#38; <Text display="inline" color="discord">Discord</Text> for gaming information!
            </Box>
            <Box fontSize="18px" textAlign="center">
              <Text display="inline" color="tcl_pink">thecoreloop</Text> is your go-to social discovery platform where <Text display="inline" fontStyle="italic">community</Text> and <Text display="inline" fontStyle="italic">web3 games</Text> intersect.
            </Box>
          </Flex>

          {/* Player Gallery */}
          <Gallery mode={gallery_mode} />

          <Text 
            id="footer-text"
            fontSize="20px" 
            fontWeight="800" 
            textAlign="center"
            margin="10px 40px 30px"
            padding="4px 8px"
            color="black"
            background="white"
            borderRadius="10px"
          >
            Select your class and join the core team!
          </Text>
        </Flex>
      </Flex>
    </>
  );
}


