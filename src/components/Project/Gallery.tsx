// Components
import { Button, Flex, Image } from "@chakra-ui/react";
import {
  BsChevronLeft as LeftArrowIcon,
  BsChevronRight as RightArrowIcon,
} from "react-icons/bs";

// Hooks
import { useEffect, useState } from "react";

// Types
import type { ReactElement } from "react";
import uuid from "react-uuid";

export default function Gallery({ min_width, gallery }: any) {
  // Image dimensions (in pixels)
  const image_width: number = min_width-100;
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
        key={uuid()}
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        width="100%"
        minWidth={`${image_width}px`}
        height="100%"
        minHeight={`${image_height}px`}
        background="rgba(0, 0, 0, 0.4)"
        borderRadius="5px"
      >
        <Image
          src={gallery[page]}
          objectFit="contain"
          width="100%"
          height="100%"
          maxWidth={`${image_width}px`}
          maxHeight={`${image_height}px`}
          borderRadius="5px"
          draggable={false}
        />
      </Flex>
    );

    // Build Gallery Indices
    const gallery_indices_new: ReactElement[] = [];
    for (let i = 0; i < gallery.length; i++) {
      gallery_indices_new.push(
        <Image
          key={uuid()}
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
        gap="10px"
        width="100%"
        minWidth="100%"
        height="100%"
        minHeight={`${image_height}px`}
      >
        <Button
          display="flex"
          flexShrink={4}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="40px"
          height="50px"
          background="rgba(0, 0, 0 ,0.4)"
          borderRadius="5px"
          cursor={page == 0
            ? "default"
            : "pointer"
          }
          userSelect="none"
          zIndex={1}
          onClick={() => navigatePage("prev")}
          transition="all 200ms ease-in-out"
          isDisabled={page == 0}
          _disabled={{
            filter: "brightness(25%)",
            _hover: { filter: "brightness(25%)" },
          }}
          _hover={{
            filter: "brightness(75%)"
          }}
          _active={{ filter: "brightness(50%) "}}
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
          width="40px"
          height="50px"
          background="rgba(0, 0, 0 ,0.4)"
          borderRadius="5px"
          cursor={page == gallery.length-1
            ? "default"
            : "pointer"
          }
          userSelect="none"
          zIndex={1}
          onClick={() => navigatePage("next")}
          transition="all 200ms ease-in-out"
          isDisabled={
            page == gallery.length-1
              || gallery.length == 0}
          _disabled={{
            filter: "brightness(25%)",
            _hover: { filter: "brightness(25%)" },
          }}
          _hover={{
            filter: "brightness(75%)"
          }}
          _active={{ filter: "brightness(50%) "}}
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
        <Flex
          flexDirection="row"
          justifyContent="start"
          alignItems="center"
          gap="30px"
          padding="20px"
          background="rgba(0, 0, 0, 0.3)"
          borderRadius="5px"
          transition="opacity 300ms ease-in-out"
        >
          {gallery_indices}
        </Flex>
      </Flex>
    </Flex>
  )
}

