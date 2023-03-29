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
import { useState } from "react";

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

  return (
    <Flex
      flexDirection="column"
      justifyContent="start"
      alignItems="start"
      width="100%"
    >
      <Heading marginBottom="30px" fontSize="16px" fontWeight="300">
        The <Text display="inline" color="gray.300" fontSize="16px" fontStyle="italic" fontWeight="700">Discover</Text> section showcases a collection of web3-gaming startups submitted by fellow members of the project's community or team.
      </Heading>

      <Flex
        id="discover-container"
        flexDirection="row"
        justifyContent="start"
        alignItems="center"
        gap="15px"
        padding="10px"
        width="100%"
        background="rgba(0, 0, 0, 0.3)"
        borderRadius="10px"
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
          justifyContent="center"
          alignItems="start"
          gap="10px"
          width="100%"
        >
          <Flex
            flexDirection="row"
            justifyContent="space-between"
            alignItems="end"
            gap="10px" 
            width="100%"
          >
            <Flex alignItems="end" gap="10px">
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

          <Flex flexDirection="row" alignItems="center" gap="10px">
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
    </Flex>
  );
}

