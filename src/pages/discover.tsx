// Components
import { Divider, Flex, Heading, Text } from "@chakra-ui/react";
import Card from "../components/Discover/Card";
import DATA from "../data/mock-data";
import Head from "next/head";
import Header from "../components/Header/Header";
import SignInModal from "../components/User/SignInModal";

// Hooks
import { useDisclosure } from "@chakra-ui/react";
import { useState, useEffect, ReactElement } from "react";

// Useful Functions & Constants
import uuid from "react-uuid";
const [image_width, image_height]: [string, string] = ["110px", "110px"];
function getRandInt(a: number, b: number): number {
  return Math.round(Math.random() * (b - a)) + a;
}
function getRandBool(p: number): boolean {
  return Math.random() > 1 - p;
}

export default function discovery() {
  // State variables
  const [action, setAction] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("popular"); // or "latest"
  const [cards, setCards] = useState<ReactElement[]>([]);

  // useDisclosure: SignIn Modal
  const {
    isOpen: isOpen_SignIn,
    onOpen: onOpen_SignIn,
    onClose: onClose_SignIn,
  } = useDisclosure();

  function compareUpvote(a: any, b: any): number {
    if (a.upvote_count < b.upvote_count) return 1;
    else if (a.upvote_count > b.upvote_count) return -1;
    else return 0;
  }

  useEffect(() => {
    setCards([]);
    DATA.gaming_startups.sort(compareUpvote);
    for (let entry of DATA.gaming_startups) {
      setCards((cards) => [
        ...cards,
        <Card
          key={uuid()}
          onOpen_SignIn={onOpen_SignIn}
          setAction={setAction}
          image_width={image_width}
          image_height={image_height}
          blockchain={entry.blockchain}
          fundraising={getRandBool(0.2)}
          genres={entry.genres}
          name={entry.name}
          stage={entry.stage}
          tagline={entry.description}
          thumbnail={entry.thumbnail}
          upvotes={getRandInt(0, 999)}
        />,
      ]);
    }
  }, []);

  return (
    <>
      <Head>
        <title>thecoreloop</title>
        <link rel="icon" type="image/x-icon" href="/thecoreloop-favicon.png" />
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
        userSelect="none"
      >
        {/* Header */}
        <Header setAction={setAction} onOpen_SignIn={onOpen_SignIn} />

        {/* Body Container */}
        <Flex
          id="body-container"
          flexDirection="column"
          justifyContent="start"
          alignItems="center"
          marginTop="20px"
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
            {/* Heading + Popular & Latest Container */}
            <Flex
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
            >
              <Heading
                fontSize="20px"
                fontWeight="800"
                width="100%"
                userSelect="none"
              >
                Discover tomorrow's gaming startups, today
              </Heading>

              <Flex
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                gap="10px"
                marginLeft="auto"
                userSelect="none"
              >
                <Text
                  fontSize="16px"
                  fontWeight="800"
                  filter={
                    sortBy == "popular" ? "brightness(100%)" : "brightness(70%)"
                  }
                  cursor="pointer"
                  onClick={() => setSortBy("popular")}
                  transition="filter 200ms ease-in-out"
                >
                  POPULAR
                </Text>
                <Divider
                  orientation="vertical"
                  height="24px"
                  border="1px solid white"
                />
                <Text
                  fontSize="16px"
                  fontWeight="800"
                  filter={
                    sortBy == "latest" ? "brightness(100%)" : "brightness(70%)"
                  }
                  cursor="pointer"
                  onClick={() => setSortBy("latest")}
                  transition="filter 200ms ease-in-out"
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

            {/* SignIn Modal */}
            <SignInModal
              isOpen={isOpen_SignIn}
              onClose={onClose_SignIn}
              action={action}
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
