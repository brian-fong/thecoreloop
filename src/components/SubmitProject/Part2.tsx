// Components
import {
  Divider,
  Heading,
  Text,
} from "@chakra-ui/react";
import InDepthForm from "./InDepthForm";

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
  stage, setStage,
  tagline, setTagline,
  thumbnail, setThumbnail,
}: any) {
  return (
    <>
      <Heading marginBottom="50px" fontSize="16px" fontWeight="300">
        Click on the fields below to input the corresponding information. The result is what readers will see on the <Text display="inline" color="gray.400" fontStyle="italic" fontWeight="700">In-Depth</Text> section.
      </Heading>

      <InDepthForm 
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
        tagline={tagline} setTagline={setTagline}
        thumbnail={thumbnail} setThumbnail={setThumbnail}
      />
    </>
  );
}

