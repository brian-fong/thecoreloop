// Components
import BasicsForm from "./BasicsForm";
import DiscoverForm from "./DiscoverForm";

export default function Part1({
  image_width,
  image_height,
  description,
  setDescription,
  fundraising,
  setFundraising,
  name,
  setName,
  submittedByTeam,
  setSubmittedByTeam,
  thumbnail,
  setThumbnail,
}: any) {

  return (
    <>
      {/* Basics Form */}
      <BasicsForm
        fundraising={fundraising}
        setFundraising={setFundraising}
        submittedByTeam={submittedByTeam}
        setSubmittedByTeam={setSubmittedByTeam}
      />

      <hr
        style={{
          margin: "30px 0",
          width: "100%",
          borderTop: "2px solid white",
        }}
      />

      <DiscoverForm
        image_width={image_width}
        image_height={image_height}
        description={description}
        setDescription={setDescription}
        name={name}
        setName={setName}
        thumbnail={thumbnail}
        setThumbnail={setThumbnail}
      />
    </>
  );
}

