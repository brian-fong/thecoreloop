// Components
import {
  Button,
  Flex,
  Divider,
  Heading,
  Text,
} from "@chakra-ui/react";
import CommunityTeamForm from "./CommunityTeamForm";
import DiscoverForm from "./DiscoverForm";

// Hooks
import { useEffect, useState } from "react";

export default function Part1({
  image_width, image_height,
  blockchain, setBlockchain,
  fundraising, setFundraising,
  genres, setGenres,
  name, setName,
  stage, setStage,
  submittedAs, setSubmittedAs,
  tagline, setTagline,
  thumbnail, setThumbnail,
  setPart,
}: any) {

  // State variables
  const [isFinished, setIsFinished] = useState<boolean>(true);

  // Update isFinished state variable
  // useEffect(() => {
  //   if (
  //     blockchain
  //       && genres.length > 0
  //       && name
  //       && stage
  //       && submittedAs
  //       && tagline
  //       && thumbnail
  //   ) {
  //     setIsFinished(true);
  //   } else {
  //     setIsFinished(false);
  //   }
  // }, [blockchain, genres, name, stage, submittedAs, tagline, thumbnail]);

  return (
    <>
      <Heading marginBottom="30px" fontSize="16px" fontWeight="300">
        Click on the fields below to input the corresponding information. The result is what readers will see on the <Text display="inline" color="gray.400" fontStyle="italic" fontWeight="700">Discovery</Text> section.
      </Heading>

      <DiscoverForm
        image_width={image_width} image_height={image_height}
        blockchain={blockchain} setBlockchain={setBlockchain}
        fundraising={fundraising}
        genres={genres} setGenres={setGenres}
        name={name} setName={setName}
        stage={stage} setStage={setStage}
        tagline={tagline} setTagline={setTagline}
        thumbnail={thumbnail} setThumbnail={setThumbnail}
      />

      <Divider margin="50px 0 30px" width="100%" borderWidth="1px" />

      <CommunityTeamForm
        fundraising={fundraising} setFundraising={setFundraising}
        submittedAs={submittedAs} setSubmittedAs={setSubmittedAs}
      />
      
      <Flex
        id="proceed-btn-container"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        marginTop="30px"
        width="100%"
      >
        <Button
          variant="standard"
          padding="8px 16px"
          color="white"
          background="purple.600"
          onClick={() => setPart(2)}
          isDisabled={!isFinished}
          _disabled={{
            background: "green.400",
            boxShadow: "none",
            filter: "brightness(50%) grayscale(100%)",
            cursor: "not-allowed",
            _hover: {
              boxShadow: "none",
              background: "green.400",
            },
            _active: {
              boxShadow: "none",
              transform: "none",
            },
          }}
        >
          Proceed to In-Depth View
        </Button>
      </Flex>
    </>
  );
}

