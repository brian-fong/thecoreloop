// Components
import { Flex } from "@chakra-ui/react";
import Blockchain from "./Blockchain";
import FundraisingIcon from "./FundraisingIcon";
import Genres from "./Genres";
import Name from "./Name";
import Stage from "./Stage";
import Tagline from "./Tagline";
import Thumbnail from "./Thumbnail";
import Upvote from "./Upvote";

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
  const [isFinished, setIsFinished] = useState<boolean>(true);

  // Update isFinished state variable
  useEffect(() => {
    // console.log("Blockchain: ", blockchain);
    // console.log("Fundraising: ", fundraising);
    // console.log("Name: ", name);
    // console.log("Stage: ", stage);
    // console.log("Tagline: ", tagline);
    // console.log("Thumbnail: ", thumbnail);

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
  }, [blockchain, genres, name, stage, tagline, thumbnail]);

  return (
    <Flex
      id="discover-container"
      flexDirection="row"
      justifyContent="start"
      alignItems="center"
      gap="10px"
      width="100%"
      height="100%"
      background={isFinished ? "transparent" : "rgba(0, 0, 0, 0.2)"}
      borderRadius="5px"
      boxShadow={isFinished ? "none" : "0 0 0 15px rgba(0, 0, 0, 0.2)"}
      transition="all 300ms ease-in-out 500ms"
    >
      {/* Thumbnail Image */}
      <Thumbnail
        image_width={image_width} image_height={image_height}
        fundraising={fundraising}
        thumbnail={thumbnail} setThumbnail={setThumbnail} 
      />

      {/* Container: Name + Links + Blockchain + Genres + Stage */}
      <Flex
        id="middle-container"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="start"
        gap={(name && tagline && blockchain) ? "0" : "10px"}
        width="100%"
        height="100%"
        minHeight={image_height}
      >
        <Flex
          flexDirection="column"
          gap={(name && tagline && blockchain) ? "0" : "10px"}
          width="100%"
        >
          <Flex
            flexDirection="row"
            justifyContent="start"
            alignItems="center"
            gap="10px"
            width="100%"
          >
            {/* Name */}
            <Name name={name} setName={setName} />

            {/* Blockchain */}
            <Blockchain 
              blockchain={blockchain}
              setBlockchain={setBlockchain}
            />
          </Flex>

          <Tagline
            tagline={tagline}
            setTagline={setTagline}
          />
        </Flex>

        <Flex gap="10px" width="100%">
          {/* Genres */}
          <Genres
            genres={genres}
            setGenres={setGenres}
          />

          {/* Stage */}
          <Stage 
            stage={stage} setStage={setStage}
          />
        </Flex>
      </Flex>

      {/* Upvote */}
      <Flex
        id="right-container"
        flexDirection="column"
        justifyContent="start"
        alignItems="center"
        gap="10px"
        height={image_height}
        minHeight={image_height}
      >
        <Upvote />
      </Flex>
    </Flex>
  );
}

