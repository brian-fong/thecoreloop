import {
  Box,
  Text,
  Flex,
  Grid,
  Link,
  Image,
  Tooltip,
  useDimensions,
} from "@chakra-ui/react";
import Head from "next/head";
import uuid from "react-uuid";
import wait from "../utils/wait";
import { useRef, useState, useEffect } from "react";
import { REFERENCES } from "../utils/references";
import Card from "../components/LandingPage/Card";
import Gallery from "../components/LandingPage/Gallery";

export default function landing_page() {
  const main_ref = useRef<any>();
  const [card_cols, setCardCols] = useState<number>(3);
  const [image_cols, setImageCols] = useState<number>(4);
  const dimensions = useDimensions(main_ref, true);

  useEffect(() => {
    const width: number = dimensions?.contentBox?.width!;

    // Set number of columns for card gallery
    if (width > 1110) setCardCols(3);
    else if (width > 760) setCardCols(2);
    else setCardCols(1);
    
    // Set number of columns for image gallery
    if (width > 1150) setImageCols(4);
    else if (width > 590) setImageCols(2);
    else setImageCols(1);
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
        overflowX="hidden"
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
        >
          <Image
            src="./tcl-logo.png"
            objectFit="cover"
            height="50px"
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

        {/* Cards Gallery */}
        <Grid
          id="cards-gallery"
          templateColumns={`repeat(${card_cols}, minmax(350px, 1fr))`}
          gap="30px"
          padding="30px"
          height="min-content"
        >
          {REFERENCES.map(reference => (
            <Card
              key={uuid()}
              handle={reference.handle}
              subhandle={reference.subhandle}
              text={reference.text}
              bkg_head={reference.bkg_head}
            />
          ))}
        </Grid>

        {/* Body */}
        <Flex
          id="body"
          flexDirection="column"
          gap="10px"
          justifyContent="center"
          alignItems="center"
          padding="30px 0px 60px"
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
              <Text display="inline" color="tcl_pink">thecoreloop</Text> is your go-to social discovery platform where community and web3 games intersect. Get ready to discover high-quality content on all things web3 gaming in one place!
            </Box>
          </Flex>

          {/* Images Gallery */}
          <Gallery image_cols={image_cols} />

          <Text fontSize="20px" textAlign="center">
            Want to take a sneak peek &#38; be the first to try the platform?
          </Text>
          <Link 
            id="typeform-btn"
            href="https://pm6hpw3zasy.typeform.com/to/kOc7e3N7"
            padding="5px 10px"
            color="black"
            fontWeight="800"
            background="tcl_teal"
            border="2px solid black"
            borderRadius="5px"
            boxShadow="10px 10px 5px rgba(0, 0, 0, 0.5)"
            transition="background-color 200ms ease-in"
            _hover={{
              background: "tcl_teal_hover",
            }}
            onClick={async () => {
              const btn = document.getElementById("typeform-btn")!;
              btn.style.transform = "translate(3px, 3px)";
              btn.style.boxShadow = "none";
              await wait(100);
              btn.style.transform = "translate(0px, 0px)";
              btn.style.boxShadow = "10px 10px 5px rgba(0, 0, 0, 0.5)";
            }}
          >
            <Flex
              flexDirection="row"
              justifyContent="align"
              alignItems="center"
            >
              LFG. I'd love to join the core team!
            </Flex>
          </Link>
        </Flex>
      </Flex>
    </>
  );
}


