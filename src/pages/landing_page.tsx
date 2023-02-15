import Head from "next/head";
import {
  Text,
  Flex,
  Image,
  Button,
} from "@chakra-ui/react";
import Card from "../components/LandingPage/Card";

export default function landing_page() {

  return (
    <>
      <Flex
        id="root_container"
        flexDirection="column"
        justifyContent="start"
        alignItems="center"
        margin="0px"
        padding="0px"
        width="100vw"
        height="100vh"
        background="#CDE5EC"
        boxSizing="border-box"
        overflowX="hidden"
      >
        {/* Banner */}
        <Flex
          flexDirection="row"
          justifyContent="start"
          alignItems="start"
          width="100%"
          margin="0px 0px 5px"
        >
          <Image
            src="./tcl-logo.png"
            width="250px"
          />
        </Flex>

        {/* Cards Gallery */}
        <Flex
          flexDirection="row"
          gap="20px"
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          <Card
            pfp="./mickking3020-pfp.png"
            handle="Mickking3020"
            subhandle="[Web3 Gaming Enthusiast]"
            text="I've been finding it a bit tedious to keep up with infos. It's been a pain in the ass hovering from Discord to Twitter down to Telegram and other platforms just to get infos."
          />

          <Card
            pfp="./_sugs-pfp.png"
            handle="_sugs"
            subhandle="[Investments @ Newman Capital]"
            text="As a VC investor, I’d like a discovery tool for finding new projects based on whatever categories I'm searching for (ex. fps, mmorpg, latest trending, building in stealth) - this could give me a sense of what's out there, who's seeking funding, etc"
          />

          <Card
            pfp="./shloked_-pfp.png"
            handle="shloked_"
            subhandle="[Partnerships Lead @ Glip.gg]"
            text="What would matter to me is learning about new high quality projects that isn’t often covered compared to the established ones. "
          />
        </Flex>

        <Flex
          flexDirection="column"
          gap="10px"
          justifyContent="center"
          alignItems="center"
          margin="50px 0px 0px"
          maxWidth="800px"
        >
          <Text>
            Say goodbye to scouring Twitter, Telegram &#38; Discord for gaming information! 
          </Text>
          <Text>
            thecoreloop is your go-to social discovery platform where community and web3 games intersect. Get ready to discover high-quality content on all things web3 gaming in one place!
          </Text>
        </Flex>

        <Image
          src="./player.png"
          margin="20px 0px"
          width="150px"
        />

        <Text
          fontSize="20px"
        >
          Want to take a sneak peek &#38; be the first to try the platform?
        </Text>

        <Button
          margin="20px 0px"
          padding="5px 10px"
          colorScheme="blackAlpha"
        >
          LFG, I’d love to join the core team!
        </Button>

        <Flex
          flexDir="column"
          gap="10px"
          justifyContent="start"
          alignItems="start"
          padding="10px"
          width="100%"
        >
          <Text fontWeight="800">Want to stay in touch?</Text>
          <Flex flexDirection="row" gap="10px">
            <Image src="./paragraph-icon.avif" width="24px" />
            <Text>Subscribe to our newsletter</Text>
          </Flex>
          <Flex flexDirection="row" gap="10px">
            <Image src="./telegram-icon.png" width="24px" />
            <Text>Daily Gaming News Update on Telegram</Text>
          </Flex>
          <Flex flexDirection="row" gap="10px">
          <Image src="./twitter-icon.png" width="24px" />
            <Text>Follow us on Twitter</Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

