// Components
import {
  Box,
  Flex,
  Input,
  Text,
} from "@chakra-ui/react";
import Blockchain from "./Blockchain";
import Description from "./Description";
import Gallery from "./Gallery";
import Genres from "./Genres";
import Links from "./Links";
import Name from "./Name";
import Stage from "./Stage";
import Studio from "./Studio";
import Thumbnail from "./Thumbnail";
// import Upvote from "./Upvote";

// Hooks
import { useEffect, useState } from "react";

export default function InDepthForm({ 
  image_width, image_height,
  blockchain, setBlockchain,
  description, setDescription,
  fundraising,
  gallery, setGallery,
  genres, setGenres,
  links, setLinks,
  name, setName,
  stage, setStage,
  studio, setStudio,
  tagline,
  thumbnail, setThumbnail,
}: any) {

  // State Variables
  const [isFinished, setIsFinished] = useState<boolean>(true);

  useEffect(() => {
    // console.log("Blockchain: ", blockchain);
    // console.log("Fundraising: ", fundraising);
    // console.log("Name: ", name);
    // console.log("Stage: ", stage);
    // console.log("Tagline: ", tagline);
    // console.log("Thumbnail: ", thumbnail);

    if (
      blockchain
        && description
        && gallery.length > 0
        && genres.length > 0
        && name 
        && links[0].length > 0
        && stage 
        && tagline 
        && thumbnail
    ) {
      setIsFinished(true);
    } else {
      setIsFinished(false);
    }
  }, [blockchain, description, gallery, genres, links, name, stage, tagline, thumbnail]);

  return (
    <Flex
      id="indepth-container"
      flexDirection="column"
      justifyContent="start"
      alignItems="start"
      width="100%"
      background={isFinished ? "transparent" : "rgba(0, 0, 0, 0.2)"}
      boxShadow={isFinished ? "none" : "0 0 0 20px rgba(0, 0, 0, 0.2)"}
      borderRadius="5px"
      transition="all 300ms ease-in-out 500ms"
    >
      <Flex
        id="discover-container"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="start"
        gap="10px"
        marginBottom="15px"
        width="100%"
        height="100%"
      >
        {/* Thumbnail Image */}
        <Thumbnail
          fundraising={fundraising}
          image_width={image_width} image_height={image_height}
          thumbnail={thumbnail} setThumbnail={setThumbnail} 
        />

        <Flex
          id="middle-container"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="start"
          width="100%"
          height={image_height}
          minHeight={image_height}
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

          {/* Genres */}
          <Genres
            format={"in-depth"}
            genres={genres} setGenres={setGenres}
          />

          <Flex
            flexDirection="row"
            justifyContent="space-between"
            alignItems="end"
            gap="10px"
            width="100%"
          >
            {/* Stage */}
            <Stage stage={stage} setStage={setStage} />

            {/* Links */}
            <Links links={links} setLinks={setLinks} />
          </Flex>
        </Flex>

        {/* Upvote */}
      </Flex>

      {/* Container: Description + Gallery */}
      <Flex
        flexDirection="column"
        justifyContent="start"
        alignItems="center"
        gap="20px"
        width="100%"
        height="100%"
      >
        {/* Studio */}
        <Studio
          studio={studio} setStudio={setStudio}
        />

        {/* Description */}
        <Description 
          description={description}  setDescription={setDescription} 
          tagline={tagline}
        />

        {/* Gallery */}
        <Gallery
          gallery={gallery} setGallery={setGallery}
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
          cursor="not-allowed"
          transition="background 200ms ease-in-out"
          _hover={{ background: "rgba(0, 0, 0, 0.3)" }}
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
  )
}

