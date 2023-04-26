// Components
import { Box, Button, Flex, Image } from "@chakra-ui/react";
import {
  BsChevronLeft as LeftArrowIcon,
  BsChevronRight as RightArrowIcon,
} from "react-icons/bs";

// Hooks
import { useEffect, useState } from "react";

// Types
import type { ReactElement } from "react";

export default function Gallery({ gallery }: any) {
  // Image dimensions (in pixels)
  const image_width: number = 600;
  const image_height: number = Math.ceil(image_width * 9/16);

  // State variables
  const [page, setPage] = useState<number>(0);
  const [gallery_content, setGalleryContent] = useState<ReactElement>();
  const [gallery_indices, setGalleryIndices] = useState<ReactElement[]>();

  // Navigate Gallery images
  function navigatePage(dir: string): void {
    if (dir == "next") {
      // Move to next page (limit: 5 pages)
      if (page < (gallery.length-1)) setPage(page + 1);
    } else if (dir == "prev") {
      // Move to previous page
      if (page > 0) setPage(page - 1);
    }
  }

  useEffect(() => {
    // Build Gallery Content
    setGalleryContent(
      <Flex
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="100%"
        minHeight={`${image_height}px`}
        maxHeight={`${image_height}px`}
      >
        <Image
          src={gallery[page]}
          objectFit="contain"
          padding="1px"
          maxHeight={`${image_height}px`}
          borderRadius="5px"
        />
      </Flex>
    );

    // Build Gallery Indices
    const gallery_indices_new: ReactElement[] = [];
    for (let i = 0; i < gallery.length; i++) {
      gallery_indices_new.push(
        <Image
          src={gallery[i]}
          objectFit="cover"
          width="64px"
          height="64px"
          borderRadius="5px"
          boxShadow="5px 5px 3px black"
          filter={page == i ? "none" : "brightness(75%)"}
          transform={
            page == i
              ? "scale(1.15)"
              : "scale(1.0)"
          }
          cursor="pointer"
          draggable={false}
          onClick={() => setPage(i)}
          transition="all 300ms ease-in-out"
          _hover={{
            filter: "brightness(100%)",
          }}
        />
      );
    }
    setGalleryIndices(gallery_indices_new);
  }, [page]);

  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="15px"
      width="100%"
    >
      <Flex
        id="gallery-container"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        minWidth="100%"
        height="100%"
      >
        <Button
          display="flex"
          flexShrink={4}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          padding="0 10px"
          width="100%"
          height="100%"
          minHeight={`${image_height-20}px`}
          maxHeight={`${image_height-20}px`}
          border="1px solid transparent"
          borderRadius="5px"
          cursor="pointer"
          userSelect="none"
          zIndex={1}
          isDisabled={page == 0 || gallery.length == 0}
          _disabled={{
            opacity: "0%",
            cursor: "default",
            _hover: {},
          }}
          onClick={() => navigatePage("prev")}
          transition="all 200ms ease-in-out"
          _hover={{
            background: "rgba(0, 0, 0, 0.4)",
          }}
        >
          <LeftArrowIcon size="25px" />
        </Button>

        {gallery_content}

        <Button
          display="flex"
          flexShrink={4}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          padding="0 10px"
          width="100%"
          height="100%"
          minHeight={`${image_height-20}px`}
          maxHeight={`${image_height-20}px`}
          border="1px solid transparent"
          borderRadius="5px"
          cursor="pointer"
          userSelect="none"
          zIndex={1}
          isDisabled={
            page == gallery.length-1
              || gallery.length == 0}
          _disabled={{
            opacity: "0%",
            cursor: "default",
            _hover: {},
          }}
          onClick={() => navigatePage("next")}
          transition="all 200ms ease-in-out"
          _hover={{
            background: "rgba(0, 0, 0, 0.4)",
          }}
        >
          <RightArrowIcon size="25px" />
        </Button>
      </Flex>

      {/* Gallery Indices Container */}
      <Flex
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        <Box
          padding="20px"
          background="rgba(0, 0, 0, 0.3)"
          borderRadius="5px"
          transition="all 300ms ease-in-out"
        >
          <Flex
            flexDirection="row"
            justifyContent="start"
            alignItems="center"
            gap="30px"
            transition="opacity 300ms ease-in-out"
          >
            {gallery_indices}
          </Flex>
        </Box>
      </Flex>
    </Flex>
  )
}

