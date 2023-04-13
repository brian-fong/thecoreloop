// Components
import {
  Flex,
  Text,
} from "@chakra-ui/react";
import {
  BsChevronLeft as LeftArrowIcon,
  BsChevronRight as RightArrowIcon,
} from "react-icons/bs";
import { MdOutlineAddPhotoAlternate as AddImageIcon } from "react-icons/md";
import DropzoneBoxV2 from "../Core/DropzoneBoxV2";
import GalleryImage from "./GalleryImage";
import GalleryIndex from "./GalleryIndex";

//Hooks
import { useEffect, useState } from "react";

// Types
import type { ReactElement } from "react";

// Helper functions
import uuid from "react-uuid";
import readFile from "../../utils/read-file";

async function uploadGallery(files: any, gallery: any, setGallery: any) {
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
}

export default function Gallery({ gallery, setGallery }: any) {
  // Gallery image dimensions (in pixels)
  const image_width: number = 600;
  const image_height: number = Math.ceil(image_width * 9/16)

  // Maximum number of pages in Gallery
  const max_pages: number = 5;

  // State variables
  const [page, setPage] = useState<number>(0);
  const [gallery_indices, setGalleryIndices] = useState<ReactElement>();
  
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
    if (gallery.length == 0) {
      setGalleryIndices(
        <DropzoneBoxV2
          gallery={gallery} setGallery={setGallery}
          handleOnDrop={uploadGallery}
          maxFiles={5}
        >
          <Text
            display="flex"
            justifyContent="center"
            alignItems="center"
            padding="20px"
            minWidth="440px"
            minHeight="104px"
            border="1px dashed white"
            borderRadius="5px"
            transition="background 200ms ease-in-out"
            _hover={{
              background: "rgba(0, 0, 0, 0.4)"
            }}
          >
            click or drag'n'drop to upload images
          </Text>
        </DropzoneBoxV2>  
      );
    } else {
      const gallery_indices_new: ReactElement[] = [];
      for (let i = 0; i < gallery.length; i++) {
        gallery_indices_new.push(
          <GalleryIndex
            key={uuid()}
            index={i}
            gallery={gallery} setGallery={setGallery}
            page={page} setPage={setPage}
          />
        );
      }
      setGalleryIndices(
        <Flex
          flexDirection="row"
          justifyContent="start"
          alignItems="center"
          gap="20px"
          padding="20px"
          minWidth="440px"
          minHeight="104px"
          background="rgba(0, 0, 0, 0.3)"
          borderRadius="5px"
        >
          {gallery_indices_new}
          {
            gallery.length < max_pages
              ? (
                <DropzoneBoxV2
                  gallery={gallery} setGallery={setGallery}
                  handleOnDrop={uploadGallery}
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
                </DropzoneBoxV2>
              ) : (
                null
              )
          }
        </Flex>
      );
    }
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
        <Flex
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
          onClick={() => navigatePage("prev")}
          transition="all 200ms ease-in-out"
          _hover={{
            background: "rgba(0, 0, 0, 0.4)",
          }}
        >
          <LeftArrowIcon size="25px" />
        </Flex>

        <GalleryImage
          index={page}
          gallery={gallery}
          image_width={image_width} image_height={image_height}
        />

        <Flex
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
          onClick={() => navigatePage("next")}
          transition="all 200ms ease-in-out"
          _hover={{
            background: "rgba(0, 0, 0, 0.4)",
          }}
        >
          <RightArrowIcon size="25px" />
        </Flex>
      </Flex>

      {/* Page Indices Container */}
      <Flex
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        gap="20px"
        position="relative"
        width="100%"
      >
        {gallery_indices}
      </Flex>
    </Flex>
  );
}

