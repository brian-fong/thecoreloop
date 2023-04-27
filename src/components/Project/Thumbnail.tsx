// Components
import { Image } from "@chakra-ui/react";

export default function Thumbnail({ thumbnail, width, height }: any) {

  return (
    <Image
      id="project-thumbnail"
      src={thumbnail}
      padding="1px"
      width={`${width}px`}
      minWidth={`${width}px`}
      height={`${height}px`}
      minHeight={`${height}px`}
      borderRadius="full"
      draggable={false}
      // onLoad={() => { 
      //   URL.revokeObjectURL(files[0].preview); 
      // }}
    />
  );
}

