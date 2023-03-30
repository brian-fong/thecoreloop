// Components
import {
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { VscTriangleUp as UpvoteIcon } from "react-icons/vsc";
import Blockchain from "./Blockchain";
import FundraisingIcon from "./FundraisingIcon";
import Genres from "./Genres";
import Name from "./Name";
import Stage from "./Stage";
import Tagline from "./Tagline";
import Thumbnail from "./Thumbnail";

// Hooks
import { useEffect, useState } from "react";

export default function DiscoverForm({
  image_width, image_height,
  blockchain, setBlockchain,
  fundraising,
  genres, setGenres,
  name, setName,
  stage, setStage,
  tagline, setTagline,
  thumbnail, setThumbnail,
}: any) {
  // State Variables
  const [upvotes, setUpvotes] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(true);

  useEffect(() => {
    console.log("Blockchain: ", blockchain);
    console.log("Fundraising: ", fundraising);
    console.log("Name: ", name);
    console.log("Stage: ", stage);
    console.log("Tagline: ", tagline);
    console.log("Thumbnail: ", thumbnail);

    if (
      blockchain
        && genres.length > 0
        && name 
        && stage 
        && tagline 
        && thumbnail
    ) {
      setIsFinished(true);
    } else {
      setIsFinished(false);
    }
  }, [blockchain, fundraising, genres, name, stage, tagline, thumbnail]);

  return (
    <Flex
      id="discover-container"
      flexDirection="row"
      justifyContent="start"
      alignItems="center"
      gap="10px"
      padding="15px 20px"
      width="100%"
      height="100%"
      minHeight={image_height}
      background="rgba(0, 0, 0, 0.2)"
      // background={isFinished ? "transparent" : "rgba(0, 0, 0, 0.2)"}
      border={isFinished ? "2px dashed transparent" : "2px dashed white"}
      borderRadius="10px"
      transition="all 300ms ease-in-out 500ms"
    >
      {/* Thumbnail Image */}
      <Thumbnail
        image_width={image_width} image_height={image_height}
        thumbnail={thumbnail} setThumbnail={setThumbnail} 
      />

      {/* Container: Name + Links + Blockchain + Genres + Stage */}
      <Flex
        id="middle-container"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="start"
        width="100%"
        height="100%"
        minHeight={image_height}
      >
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          alignItems="start"
          gap="10px" 
          width="100%"
        >
          <Flex alignItems={blockchain ? "center" : "end"} gap="10px">
            {/* Name */}
            <Name name={name} setName={setName} />

            {/* Blockchain */}
            <Blockchain 
              blockchain={blockchain}
              setBlockchain={setBlockchain}
            />
          </Flex>

          {/* Fundraising */}
          <FundraisingIcon fundraising={fundraising} />
        </Flex>

        <Tagline
          tagline={tagline}
          setTagline={setTagline}
        />

        <Flex flexDirection="row" alignItems="start" gap="10px">
          <Genres
            genres={genres}
            setGenres={setGenres}
          />

          <Stage 
            stage={stage} setStage={setStage}
          />
        </Flex>
      </Flex>

      {/* Upvote */}
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding="10px 0"
        width="80px"
        minWidth="80px"
        maxWidth="80px"
        height="100%"
        minHeight={image_height}
        border="1px solid white"
        borderRadius="10px"
        cursor="pointer"
        userSelect="none"
        onClick={() => setUpvotes(upvotes => upvotes+1)}
        transition="background 200ms ease-in-out"
        _hover={{ background: "rgba(255, 255, 255, 0.1)" }}
        _active={{ background: "rgba(255, 255, 255, 0.2)" }}
      >
        <UpvoteIcon color="white" size="25px" />
        <Text fontSize="16px">
          {upvotes}
        </Text>
      </Flex>
    </Flex>
  );
}

