import InDepthForm from "./InDepthForm";

export default function Part2({
  image_width,
  image_height,
  submittedByTeam,
  name,
  setName,
  description,
  setDescription,
  thumbnail,
  setThumbnail
}: any) {
  return (
    <>
      <InDepthForm 
        image_width={image_width}
        image_height={image_height}
        submittedByTeam={submittedByTeam}
        name={name}
        setName={setName}
        description={description}
        setDescription={setDescription}
        thumbnail={thumbnail}
        setThumbnail={setThumbnail}
      />
    </>
  );
}

