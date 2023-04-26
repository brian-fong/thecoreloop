// Components
import {
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";

// Hooks
import { useEffect, useState } from "react";

// Types
import type { ReactElement } from "react";

export default function GalleryImage({
  index,
  gallery,
  image_width, image_height
}: any) {
  // State variables
  const [content, setContent] = useState<ReactElement>();

  useEffect(() => {
    if (!gallery[index]?.preview) {
      // Display placeholder for GalleryImage
      setContent(
        <Text
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
          minWidth={`${image_width}px`}
          maxWidth={`${image_width}px`}
          height="100%"
          minHeight={`${image_height}px`}
          maxHeight={`${image_height}px`}
          fontSize="16px"
          border="1px solid white"
          borderRadius="5px"
          cursor="not-allowed"
          userSelect="none"
        >
          {`🖼️ <gallery>`}
        </Text>
      );
    } else {
      // Display user-uploaded image for GalleryImage
      setContent(
        <Image
          src={gallery[index]?.preview}
          objectFit="contain"
          padding="1px"
          maxHeight={`${image_height}px`}
          borderRadius="5px"
        />
      );
    }
  }, [gallery, index]);

  return (
    <Flex
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100%"
      minHeight={`${image_height}px`}
      maxHeight={`${image_height}px`}
    >
      {content}
    </Flex>
  )
}

