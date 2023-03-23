import {
  Flex,
  Text,
} from "@chakra-ui/react";
import Card from "../components/Home/Card";
import DATA from "../data/mock-data";
import Head from "next/head";
import Header from "../components/Home/Header";
import { useState, useEffect, ReactElement } from "react";
import uuid from "react-uuid";

export default function Home() {
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
          title={entry.title}
          image={entry.image}
          description={entry.description}
          genre={entry.genre}
          stage={entry.stage}
          upvote_count={entry.upvote_count}
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
        minHeight="100vh"
        color="white"
        background="black"
      >
        {/* Header */}
        <Header />

        {/* Body Container */}
        <Flex
          id="body-container"
          flexDirection="column"
          justifyContent="start"
          alignItems="center"
          padding="30px 0px"
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
            {/* Popular & Latest Container */}
            <Flex
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
            >
              <Text
                fontSize="1.2rem"
                fontWeight="800"
              >
                Discover tomorrow's gaming startups, today
              </Text>
              <Flex
                id="content-mode-container"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                gap="10px"
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
            </Flex>

            {/* Card Gallery */}
            <Flex
              id="card-container"
              flexDirection="column"
              justifyContent="center"
              alignItems="start"
              gap="50px"
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
