// Components
import {
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import Card from "../components/Discovery/Card";
import DATA from "../data/mock-data";
import Head from "next/head";
import Header from "../components/Core/Header";

// Hooks
import { useState, useEffect, ReactElement } from "react";

// Useful Functions & Constants
import uuid from "react-uuid";
const [image_width, image_height]: [string, string] = ["110px", "110px"];
function getRandInt(a: number, b: number): number {
  return Math.round(Math.random() * (b-a)) + a;
}
function getRandBool(p: number): boolean {
  return Math.random() > p;
}

export default function discovery() {
  // State variables
  const [cards, setCards] = useState<ReactElement[]>([]);

  function compareUpvote(a: any, b: any): number {
    if (a.upvote_count < b.upvote_count) return 1;
    else if (a.upvote_count > b.upvote_count) return -1;
    else return 0;
  }

  useEffect(() => {
    setCards([]);
    DATA.gaming_startups.sort(compareUpvote);
    for (let entry of DATA.gaming_startups) {
      setCards(cards => [...cards, 
        <Card
          key={uuid()}
          image_width={image_width} image_height={image_height}
          blockchain={entry.blockchain}
          fundraising={getRandBool(0.40)}
          genres={entry.genres}
          name={entry.name}
          stage={entry.stage}
          tagline={entry.description}
          thumbnail={entry.thumbnail}
          upvotes={getRandInt(0, 999)}
        />
      ]);
    }
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
        id="main-container"
        flexDirection="column"
        justifyContent="start"
        alignItems="center"
        position="relative"
        width="100%"
        minHeight="100vh"
        color="white"
      >
        {/* Header */}
        <Header />

        {/* Body Container */}
        <Flex
          id="body-container"
          flexDirection="column"
          justifyContent="start"
          alignItems="center"
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
            {/* Popular | Latest Buttons */}
            <Flex
              id="content-mode-container"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              gap="10px"
              marginLeft="auto"
            >
              <Text
                fontSize="1.2rem"
                fontWeight="800"
              >
                POPULAR
              </Text>
              <Text
                color="rgba(255, 255, 255, 0.5)"
                fontSize="2rem"
                fontWeight="300"
              >
                |
              </Text>
              <Text
                color="rgba(255, 255, 255, 0.5)"
                fontSize="1.2rem"
                fontWeight="800"
              >
                LATEST
              </Text>
            </Flex>

            {/* Popular & Latest Container */}
            <Heading
              fontSize="20px"
              fontWeight="800"
              width="100%"
            >
              Discover tomorrow's gaming startups, today
            </Heading>


            {/* Card Gallery */}
            <Flex
              id="card-container"
              flexDirection="column"
              justifyContent="center"
              alignItems="start"
              gap="40px"
              padding="30px 0px"
              width="100%"
              height="100%"
            >
              {cards}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
