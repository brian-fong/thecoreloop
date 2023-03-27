// Components
import {
  Divider,
  Text,
} from "@chakra-ui/react";
import CommunityTeamForm from "./CommunityTeamForm";
import DiscoverForm from "./DiscoverForm";

export default function Part1({
  image_width,
  image_height,
  blockchain, setBlockchain,
  fundraising, setFundraising,
  genres, setGenres,
  name, setName,
  isTeam, setIsTeam,
  tagline, setTagline,
  thumbnail, setThumbnail,
}: any) {

  return (
    <>
      <Text marginBottom="30px" width="100%" fontSize="18px">
        Have a web3 gaming project that you'd like to share with the world? Let's get it listed on thecoreloop!
      </Text>

      <CommunityTeamForm
        fundraising={fundraising} setFundraising={setFundraising}
        isTeam={isTeam} setIsTeam={setIsTeam}
      />

      <Divider margin="30px 0" width="100%" borderWidth="1px" />

      <DiscoverForm
        image_width={image_width} image_height={image_height}
        blockchain={blockchain} setBlockchain={setBlockchain}
        fundraising={fundraising}
        genres={genres} setGenres={setGenres}
        name={name} setName={setName}
        tagline={tagline} setTagline={setTagline}
        thumbnail={thumbnail} setThumbnail={setThumbnail}
      />
    </>
  );
}

