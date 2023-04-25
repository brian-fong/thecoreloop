// Components
import {
  Box,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import {
  BsChevronLeft as LeftArrowIcon,
  BsChevronRight as RightArrowIcon,
} from "react-icons/bs";
import { MdOutlineAddPhotoAlternate as AddImageIcon } from "react-icons/md";
import DropzoneBox from "../Core/DropzoneBox";
import GalleryImage from "./GalleryImage";
import GalleryIndex from "./GalleryIndex";

//Hooks
import { useEffect, useState } from "react";

// Types
import type { ReactElement } from "react";

// Helper functions
// import uuid from "react-uuid";
import wait from "../../utils/wait";
import readFile from "../../utils/read-file";

export default function Gallery({ gallery, setGallery }: any) {
  // Constants
  const max_pages: number = 5;
  const image_width: number = 600;
  const image_height: number = Math.ceil(image_width * 9/16)

  // State variables
  const [page, setPage] = useState<number>(0);
  const [gallery_content, setGalleryContent] = useState<ReactElement>();
  const [gallery_indices, setGalleryIndices] = useState<ReactElement[]>();

  async function uploadImages(files: any) {
    const gallery_new: any[] = [...gallery];
    for (let i = 0; i < files.length; i++) {
      const file: any = files[i];
      const file_new: any = {
        name: file.path,
        preview: URL.createObjectURL(file),
        data: await readFile(file),
        type: file.type,
      };
      gallery_new.push(file_new);
    }
    setGallery(gallery_new);

    // Shift page focus
    if (gallery.length == 0) setPage(0);  // to 1st page if gallery was empty
    else setPage(gallery.length); // to first of latest set of uploaded images
  }
  
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
    async function init() {
      if (gallery.length == 0) {
        setGalleryContent(
          <DropzoneBox
            gallery={gallery} setGallery={setGallery}
            handleOnDrop={uploadImages}
            maxFiles={5}
          >
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap='10px'
              padding="20px"
              position="relative"
              width={image_width}
              height={image_height}
              border="1px dashed white"
              borderRadius="5px"
              transition="all 200ms ease-in-out"
              _hover={{
                letterSpacing: "2px",
                background: "rgba(0, 0, 0, 0.4)"
              }}
            >
              <Text>{"🖼️ <gallery>"}</Text>
              <Text letterSpacing="normal" opacity="50%">
                (click or drag'n'drop to upload images)
              </Text>
              <Flex
                flexDirection="row"
                justifyContent="start"
                alignItems="center"
                position="absolute"
                bottom="20px"
                padding="10px"
                paddingLeft="15px"
                background="rgba(255, 255, 143, 0.1)"
                borderRadius="5px"
              >
                <Box
                  position="absolute"
                  left="0"
                  width="6px"
                  height="40px"
                  background="rgba(255, 255, 143, 0.8)"
                  borderRadius="5px 0 0 5px"
                ></Box>
                <Text letterSpacing="normal">
                  ⚠️ Please upload at least 1 image related to this project
                </Text>
              </Flex>

            </Flex>
          </DropzoneBox>  
          );
        setGalleryIndices([]);
      } else {
        setGalleryContent(
          <GalleryImage
            index={page}
            gallery={gallery}
            image_width={image_width} image_height={image_height}
          />
        );

        // Build GalleryIndices array
        const gallery_indices_new: ReactElement[] = [];
        for (let i = 0; i < gallery.length; i++) {
          gallery_indices_new.push(
            <GalleryIndex
              // key={uuid()} uncommenting would remove transition
              index={i}
              gallery={gallery} setGallery={setGallery}
              page={page} setPage={setPage}
            />
          );
        }

        if (gallery.length < max_pages) {
          gallery_indices_new.push(
            <DropzoneBox
              gallery={gallery} setGallery={setGallery}
              handleOnDrop={uploadImages}
              maxFiles={5}
            >
              <Flex
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                width="64px"
                height="64px"
                border="1px solid white"
                borderRadius="5px"
                transition="filter 200ms ease-in-out"
                _hover={{ filter: "brightness(0.8)" }}
              >
                <AddImageIcon size="32px" />
              </Flex>
            </DropzoneBox>
          )
        }

        if (gallery_indices?.length == 0) {
          // Wait for container to expand and then display images
          await wait(320);
        }

        setGalleryIndices(gallery_indices_new);
      }
    }

    init();
  }, [gallery, page]);

  return (
    <Flex flexDirection="column" gap="10px" width="100%">
      {/* Gallery Container */}
      <Flex
        id="gallery-container"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        marginBottom="10px"
        position="relative"
        width="100%"
        minWidth="100%"
        height="100%"
      >
        <Button
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          padding="0 10px"
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
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          padding="0 10px"
          height="100%"
          minHeight={`${image_height-20}px`}
          maxHeight={`${image_height-20}px`}
          border="1px solid transparent"
          borderRadius="5px"
          cursor="pointer"
          userSelect="none"
          zIndex={1}
          isDisabled={page == gallery.length-1 || gallery.length == 0}
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
        position="relative"
        width="100%"
      >
        <Box
          padding={gallery.length == 0
            ? "0"
            : "20px"
          }
          minWidth="480px"
          height="104px"
          maxHeight={gallery.length == 0
            ? "0"
            : "104px"
          }
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
  );
}

