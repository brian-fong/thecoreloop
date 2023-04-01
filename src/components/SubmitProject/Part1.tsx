// Components
import {
  Divider,
  Heading,
  Text,
} from "@chakra-ui/react";
import CommunityTeamForm from "./CommunityTeamForm";
import DiscoverForm from "./DiscoverForm";

export default function Part1({
  image_width, image_height,
  blockchain, setBlockchain,
  fundraising, setFundraising,
  genres, setGenres,
  name, setName,
  isTeam, setIsTeam,
  stage, setStage,
  tagline, setTagline,
  thumbnail, setThumbnail,
}: any) {

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
        isTeam={isTeam} setIsTeam={setIsTeam}
      />
    </>
  );
}

