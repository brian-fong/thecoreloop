// Components
import {
  Button,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { BsArrowLeft as LeftArrowIcon } from "react-icons/bs";
import ProfileForm from "./ProfileForm";

export default function Part2({
  image_width, image_height,
  blockchain, setBlockchain,
  description, setDescription,
  fundraising, setFundraising,
  gallery, setGallery,
  genres, setGenres,
  isTeam,
  links, setLinks,
  name, setName,
  part, setPart,
  stage, setStage,
  studio, setStudio,
  tagline, setTagline,
  thumbnail, setThumbnail,
}: any) {
  return (
    <>
      <Heading marginBottom="50px" fontSize="16px" fontWeight="300">
        Click on the fields below to input the corresponding information. The result is what readers will see on <Text display="inline" color="gray.400" fontStyle="italic" fontWeight="700">Profile</Text> page for this project.
      </Heading>

      <ProfileForm 
        image_width={image_width} image_height={image_height}
        blockchain={blockchain} setBlockchain={setBlockchain}
        description={description} setDescription={setDescription}
        fundraising={fundraising} setFundraising={setFundraising}
        gallery={gallery} setGallery={setGallery}
        genres={genres} setGenres={setGenres}
        isTeam={isTeam}
        links={links} setLinks={setLinks}
        name={name} setName={setName}
        stage={stage} setStage={setStage}
        studio={studio} setStudio={setStudio}
        tagline={tagline} setTagline={setTagline}
        thumbnail={thumbnail} setThumbnail={setThumbnail}
      />

      <Flex
        id="proceed-btn-container"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        marginTop="50px"
        width="100%"
      >
        <Flex
          display={part == 1
            ? "none"
            : "flex"
          }
          flexDirection="row"
          justifyContent="start"
          alignItems="center"
          marginTop="5px"
          gap="5px"
          onClick={() => setPart(1)}
          _hover={{
            cursor: "pointer",
            textDecoration: "underline",
            filter: "brightness(70%)",
          }}
        >
          <LeftArrowIcon size="18px" />
          <Text>
            Back to Discovery View
          </Text>
        </Flex>
        <Button
          variant="standard"
          padding="8px 16px"
          color="white"
          background="purple.600"
          onClick={() => setPart(3)}
        >
          Preview
        </Button>
      </Flex>
    </>
  );
}

