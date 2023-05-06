// ChakraUI
import {
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";

// utils
import { faker } from "@faker-js/faker";
import { generateComment } from "../../utils/data/mock";

export default function Comments() {
  const story: any = generateComment();

  const FOUNDER_QUOTE: string = "    Motivation: There is an element of the unknown, Otero also points to. “I haven’t personally, and I don’t think any of us here, have seen a game that we’re satisfied with where its longterm economics are going to sustain the game.” He goes so far as to say there may not be one, and it may just be about the collection of NFTs. “We simply don’t know, but what we do know is that the NFTs are going to play a very key role in our game,” he says. One of these ways is that players will be able to collect NFTs, but the other is that they’ll be able to create their own content to share and trade amongst other players. “There’s an interesting ecosystem that we’re building within the game, where people are going to be able to share and have different roles together. That’s a big part of our aspiration in building this.” Source: THR\n\n"
  + "    Vision: “As a kid, I spent countless hours role playing with all of my different toys,” said Otero. “At Azra, we are making a game to recreate this joy, to re-engage adults’ imaginations once again with the ultimate collectibles fantasy, combined with the ultimate fast-paced mix-and-match combat that is accessible yet deeply strategic. Imagine role playing giant monsters, robots and creatures, and leading your favorite heroes and villains to battle – and on top of satisfying game sessions, a vibrant marketplace and a sustainable economy based on real value that only web3 can unlock to deliver the most compelling and complete play experience.” Source: Venture beat";

  const SUBMITTER_QUOTE: string = "    Hey guys, Conglo here and I’m excited to share about Azra’s flagship game — Legions & Legends.\n\n"
  + "    One thing to know about Azra Games is that it is led by Mark Otero, a seasoned AAA core RPG game designer who is responsible for the success of Star Wars: Galaxy of Heroes, EA's most successful mobile game 6 years in a row with over 100M+ downloads and over $1B in revenue.\n\n"
  + "    The game itself — Legions & Legends is a strategic collectable and combat RPG game where players immerse themselves in an endless war in the Corvus galaxy. It features boss battles and craftable & upgradeable legionnaires, commanders, and behemoths to elevate the combat experience.\n\n"
  + "    Having been a Day 1 Holder of their NFT [(The Hopeful)](https://opensea.io/collection/azragames-thehopeful), I thought I’ll share some perks that you’ll enjoy:\n"
  + "  - Beta test for Legions & Legends\n"
  + "  - Access to insider alpha\n"
  + "  - Private chat with Azra development team\n"
  + "  - Exclusive Airdrop\n\n"
  + "    Overall, Legions & Legends is a promising project. It boasts a capable team with strong and proven credentials who have worked on blockbuster games. They have great compatibility since several members of the team have worked for the same company before (EA, Swimply). The team is visionary and capable, and all the pressure is on them for the execution of the project.\n\n"
  + "    I certainly hope that they do not disappoint.";

  return (
    <Flex
      // Macro Container
      flexDirection="column"
      marginTop="20px"
      gap="20px"
    >
      <Flex
        // Founder Quote Container
        flexDirection="column"
      >
        <Heading
          padding="4px 16px"
          width="min-content"
          color="white"
          fontSize="18px"
          whiteSpace="nowrap"
          backgroundColor="#553C9A"
          borderRadius="5px 5px 0 0"
        >
          FOUNDER QUOTE
        </Heading>

        <Flex
          padding="2px"
          background="linear-gradient(
            165deg,
            #553C9A,
            transparent 50% 100%
          )"
          borderRadius="0 5px 5px 5px"
        >
          <Text
            padding="12px 16px"
            width="100%"
            fontSize="16px"
            whiteSpace="pre-wrap"
            backgroundColor="#171923"
          >
            {FOUNDER_QUOTE}
          </Text>
        </Flex>
      </Flex>

      <Flex
        // Submitter Quote Container
        flexDirection="column"
      >
        <Heading
          padding="4px 16px"
          width="min-content"
          color="white"
          fontSize="18px"
          whiteSpace="nowrap"
          backgroundColor="#0987A0"
          borderRadius="5px 5px 0 0"
        >
          SUBMITTER QUOTE
        </Heading>

        <Flex
          padding="2px"
          background="linear-gradient(
            165deg,
            #0987A0,
            transparent 50% 100%
          )"
          borderRadius="0 5px 5px 5px"
        >
          <Text
            padding="12px 16px"
            width="100%"
            fontSize="16px"
            whiteSpace="pre-line"
            backgroundColor="#171923"
          >
            {SUBMITTER_QUOTE}
          </Text>
        </Flex>
      </Flex>

      <Flex
        // TEAM Container
        flexDirection="column"
      >
        <Heading
          padding="4px 16px"
          width="min-content"
          color="white"
          fontSize="18px"
          whiteSpace="nowrap"
          backgroundColor="#2C5282"
          borderRadius="5px 5px 0 0"
        >
          TEAM
        </Heading>

        <Flex
          padding="2px"
          background="linear-gradient(
            165deg,
            #2C5282,
            transparent 50% 100%
          )"
          borderRadius="0 5px 5px 5px"
        >
          <Text
            padding="12px 16px"
            width="100%"
            fontSize="16px"
            whiteSpace="pre-wrap"
            backgroundColor="#171923"
          >
            {SUBMITTER_QUOTE}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

