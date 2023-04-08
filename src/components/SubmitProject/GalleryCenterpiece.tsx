// Components
import { Flex, Image } from "@chakra-ui/react";

// Hooks
import { useDropzone } from "react-dropzone";

// Types
import type { ReactElement } from "react";
import type { DropzoneOptions } from "react-dropzone";

export default function GalleryCenterpiece({
  image_src,
  page,
}: any) {

  function renderCenterpiece() {
    if (image_src) {
      // Display placeholder for Gallery field
      return (
        <Image
          src={image_src}
          width="600px"
          height="400px"
        />
      );
    } else {
      return (
        <DropzoneBox />
      )
    }
  }

  return (
    <Flex
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100%"
      minHeight="400px"
      maxHeight="400px"
      border="1px solid white"
      borderRadius="5px"
      cursor="pointer"
      transition="all 200ms ease-in-out"
      _hover={{
        background: "rgba(255, 255, 255, 0.1)"
      }}
    >
      {renderCenterpiece()}
    </Flex>
  )
}

