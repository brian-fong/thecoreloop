import InDepthForm from "./InDepthForm";

export default function Part2({
  image_width, image_height,
  blockchain, setBlockchain,
  description, setDescription,
  fundraising, setFundraising,
  genres, setGenres,
  name, setName,
  isTeam,
  stage, setStage,
  tagline, setTagline,
  thumbnail, setThumbnail,
}: any) {
  return (
    <>
      <InDepthForm 
        image_width={image_width} image_height={image_height}
        blockchain={blockchain} setBlockchain={setBlockchain}
        description={description} setDescription={setDescription}
        fundraising={fundraising} setFundraising={setFundraising}
        genres={genres} setGenres={setGenres}
        isTeam={isTeam}
        name={name} setName={setName}
        stage={stage} setStage={setStage}
        tagline={tagline} setTagline={setTagline}
        thumbnail={thumbnail} setThumbnail={setThumbnail}
      />
    </>
  );
}

