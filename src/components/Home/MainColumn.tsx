import {
  Flex, 
  Text,
} from "@chakra-ui/react";
import uuid from "react-uuid";
import MainCard from "./MainCard";
import ContentModeBtn from "./ContentModeBtn";
import axios from "axios";
import { useState, useEffect } from "react";

export default function MainColumn() {
  const [contentMode, setContentMode] = useState("POPULAR");
  const [data, setData] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards([]);
    for (let i = 0; i < data.length; i++) {
      const entry: any = data[i];
      console.log(entry);
      setCards((cards: any) => [...cards, 
        <MainCard
          key={uuid()}
          image={entry.image}
          title={entry.title}
          description={entry.description}
          comment_count={entry.comment_count}
          stage={entry.stage}
          genre={entry.genre}
          upvote_count={entry.upvote_count}
        />
      ]);
    }
  }, [data]);

  useEffect(() => {
    async function readData() {
      const response: any = await axios.get("/api/prisma_test");
      console.log("Data: ", response.data);
      setData(response.data);
      return response;
    }

    readData();
  }, []);

  return (
    <Flex
      id="main-column"
      flexDirection="column"
      margin="1.5rem 0"
      padding="2rem"
      width="100%"
      minHeight="100vh"
    >
      {/* Content Mode Container */}
      <Flex
        id="mode-container"
        flexDirection="row"
        justifyContent="end"
        alignItems="center"
        width="100%"
        gap="0.2rem"
      >
        <ContentModeBtn 
          text="POPULAR" 
          active={contentMode == "POPULAR"}
          onClick={() => setContentMode("POPULAR")}
        />
        <Text fontSize="1.5rem">|</Text>
        <ContentModeBtn 
          text="NEWEST" 
          active={contentMode == "NEWEST"}
          onClick={() => setContentMode("NEWEST")}
        />
      </Flex>

      {/* Main Content Container */}
      <Flex
        id="main-content-container"
        flexDirection="column"
        justifyContent="start"
        alignItems="center"
        gap="3rem"
        padding="1rem"
        width="100%"
      >
        {cards}
      </Flex>
    </Flex>
  );
}

