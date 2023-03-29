// Components
import {
  Button,
  Divider,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import {
  MdOutlineAddPhotoAlternate as AddImageIcon,
} from "react-icons/md";
import { VscTriangleUp as UpvoteIcon } from "react-icons/vsc";
import Blockchain from "./Blockchain";
import Description from "./Description";
import FundraisingIcon from "./FundraisingIcon";
import Genres from "./Genres";
import Name from "./Name";
import Stage from "./Stage";
import Tagline from "./Tagline";
import Thumbnail from "./Thumbnail";

// Hooks
import { useState } from "react";

export default function InDepthForm({ 
  image_width, image_height,
  blockchain, setBlockchain,
  description, setDescription,
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
      id="indepth-container"
      flexDirection="column"
      justifyContent="start"
      alignItems="start"
      width="100%"
    >
      <Heading marginBottom="50px" fontSize="16px" fontWeight="300">
        The <Text display="inline" color="gray.300" fontSize="18px" fontStyle="italic" fontWeight="700">In-Depth</Text> page provides a deeper look for prospective gamers, investors, or creators.
      </Heading>

      {/* Top-Section Container */}
      <Flex
        flexDirection="column"
        justifyContent="start"
        alignItems="start"
        width="100%"
        background="rgba(0, 0, 0, 0.4)"
        borderRadius="5px"
        boxShadow="0 0 0 20px rgba(0, 0, 0, 0.4)"
      >
        <Flex
          id="discover-container"
          flexDirection="row"
          justifyContent="start"
          alignItems="center"
          gap="15px"
          width="100%"
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
            justifyContent="start"
            alignItems="start"
            gap="10px"
            width="100%"
            height={image_height}
            minHeight={image_height}
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

            <Flex flexDirection="row" alignItems="center" gap="10px">
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

          {/* Container: Description + Gallery */}
        <Flex
          flexDirection="column"
          justifyContent="start"
          alignItems="center"
          gap="40px"
          padding="40px 0 20px"
          width="100%"
          height="100%"
        >

          {/* Description */}
          <Description 
            description={description} 
            setDescription={setDescription} 
          />

          {/* Gallery */}
          <Flex
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            width="100%"
            height="100%"
            minHeight="400px"
            maxHeight="400px"
            border="1px solid white"
            borderRadius="5px"
            cursor="pointer"
            transition="background 200ms ease-in-out"
            _hover={{ background: "rgba(255, 255, 255, 0.1)" }}
          >
            <Flex 
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap="20px"
            >
              <AddImageIcon size="50px" />
              <Flex alignItems="center" gap="10px" userSelect="none">
                <Text fontSize="16px">
                  🖼️
                </Text>
                <Text fontSize="16px">
                  &lt;gallery_images&gt;
                </Text>
              </Flex>
            </Flex>
          </Flex>

          <hr 
            style={{
              width: "100%",
              borderTop: "2px solid white",
            }}
          />

          {/* Story */}
          <Flex
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            padding="10px"
            width="100%"
            minWidth="100%"
            minHeight="150px"
            border="1px solid white"
            borderRadius="5px"
            cursor="pointer"
            transition="background 200ms ease-in-out"
            _hover={{ background: "rgba(255, 255, 255, 0.1)" }}
          >
            <Flex alignItems="center" gap="10px" userSelect="none">
              <Text fontSize="16px">
                📖
              </Text>
              <Text fontSize="16px">
                &lt;story&gt;
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

