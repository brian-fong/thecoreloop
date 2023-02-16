import {
  Box,
  Text,
  Flex,
  Grid,
  Link,
  Image,
  Button,
  Tooltip,
  useDimensions,
} from "@chakra-ui/react";
import Head from "next/head";
import uuid from "react-uuid";
import { useRef, useState, useEffect } from "react";
import { REFERENCES } from "../utils/references";
import Card from "../components/LandingPage/Card";

export default function landing_page() {
  const gallery_ref = useRef<any>();
  const dimensions = useDimensions(gallery_ref, true);
  const [orientation, setOrientation] = useState<string>()

  useEffect(() => {
    const limit: number = 500;
    if (dimensions?.contentBox?.width! > limit) {
      setOrientation("landscape");
    } else {
      setOrientation("portrait");
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
      <Flex
        id="root_container"
        flexDirection="column"
        justifyContent="start"
        alignItems="center"
        width="100vw"
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
          ref={gallery_ref}
          id="cards-gallery"
          templateColumns="repeat(3, minmax(350px, 1fr))"
          gap="30px"
          padding="30px 80px"
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
          padding="30px 100px"
          width="100%"
        >
          <Flex
            flexDirection="column"
            gap="20px"
            justifyContent="center"
            alignItems="center"
            maxWidth="1000px"
          >
            <Box fontSize="18px" textAlign="center">
              Say goodbye 👋 to scouring <Text display="inline" color="twitter">Twitter</Text>, <Text display="inline" color="telegram">Telegram</Text>, &#38; <Text display="inline" color="discord">Discord</Text> for gaming information!
            </Box>
            <Box fontSize="18px" textAlign="center">
              <Text display="inline" color="tcl_pink">thecoreloop</Text> is your go-to social discovery platform where community and web3 games intersect. Get ready to discover high-quality content on all things web3 gaming in one place!
            </Box>
          </Flex>

          <Image
            src="./player.png"
            margin="20px 0px"
            width="250px"
            borderRadius="10px"
          />

          <Text fontSize="20px" textAlign="center">
            Want to take a sneak peek &#38; be the first to try the platform?
          </Text>

          <Button
            margin="20px 0px"
            padding="5px 10px"
            colorScheme="blackAlpha"
          >
            LFG. I'd love to join the core team!
          </Button>
        </Flex>
      </Flex>
    </>
  );
}


