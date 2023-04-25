// Components
import {
  Box,
  Flex,
  Image,
} from "@chakra-ui/react";
import { BsXSquare as CloseIcon } from "react-icons/bs";
import { TfiPencilAlt as EditIcon } from "react-icons/tfi";
import DropzoneBox from "../Core/DropzoneBox";

// Types
import type { ReactElement } from "react";

// Helper Functions
import readFile from "../../utils/read-file";


export default function GalleryIndex({
  index,
  gallery, setGallery,
  page, setPage,
}: any): ReactElement {


  async function editImage(
    files: any[],
  ) {
    const gallery_new: any[] = [...gallery];
    const file_new: any = {
      name: files[0].path,
      preview: URL.createObjectURL(files[0]),
      data: await readFile(files[0]),
      type: files[0].type,
    };
    gallery_new.splice(index, 1, file_new);
    setGallery(gallery_new);
    setPage(index);
  }

  function deleteImage() {
    // Remove image from Gallery
    const gallery_new: any[] = [...gallery];
    gallery_new.splice(index, 1);
    setGallery(gallery_new);

    // Navigate to nearest, latest page 
    if (index == gallery.length) setPage(index-1);

    // If gallery is empty, then navigate back to 1st image
    if (gallery.length == 0) setPage(0);
  }

  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <Image
        src={gallery[index]?.preview}
        objectFit="cover"
        width="64px"
        height="64px"
        borderRadius="5px"
        boxShadow="5px 5px 3px black"
        filter={page == index ? "none" : "brightness(75%)"}
        transform={
          page == index
            ? "scale(1.1)"
            : "scale(1.0)"
        }
        cursor="pointer"
        draggable={false}
        onClick={() => setPage(index)}
        transition="all 300ms ease-in-out"
        _hover={{
          filter: "brightness(100%)",
        }}
      />
      <Flex
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="-10px"
        right="-10px"
      >
        <DropzoneBox
          gallery={gallery} setGallery={setGallery}
          handleOnDrop={editImage}
          maxFiles={1}
        >
          <Box
            padding="2px"
            background="gray.300"
            borderRadius="5px 0 0 5px"
            cursor="pointer"
            userSelect="none"
            transition="filter 200ms ease-in-out"
            _hover={{ filter: "brightness(0.8)" }}
          >
            <EditIcon color="black" size="15px" />
          </Box>
        </DropzoneBox>
        <Box
          padding="2px"
          background="gray.300"
          borderRadius="0 5px 5px 0"
          cursor="pointer"
          onClick={deleteImage}
          userSelect="none"
          transition="filter 200ms ease-in-out"
          _hover={{ filter: "brightness(0.8)" }}
        >
          <CloseIcon color="black" size="15px" />
        </Box>
      </Flex>
    </Flex>
  );
}

