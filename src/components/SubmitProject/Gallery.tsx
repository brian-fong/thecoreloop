// Components
import {
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import {
  BsArrowLeftSquare as LeftArrowIcon,
  BsArrowRightSquare as RightArrowIcon,
} from "react-icons/bs";
import DropzoneBox from "../Core/DropzoneBox";

//Hooks
import { useState } from "react";

export default function Gallery({ gallery, setGallery }: any) {

  // State variables
  const [page, setPage] = useState<number>(0);
  
  const max_pages: number = 5;
  function handlePageShift(dir: string): void {
    if (dir == "next") {
      // Move to next page (limit: 5 pages)
      if (page < (max_pages-1)) setPage(page + 1);
    } else if (dir == "prev") {
      // Move to previous page
      if (page > 0) setPage(page - 1);
    }
  }

  return (
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      gap="20px"
      position="relative"
      width="100%"
      height="100%"
    >
      <Box
        id="prev-btn-container"
        cursor="pointer"
        userSelect="none"
        onClick={() => handlePageShift("prev")}
        transition="filter 200ms ease-in-out"
        _hover={{ filter: "brightness(0.7)" }}
        _active={{ filter: "brightness(0.9)" }}
      >
        <LeftArrowIcon size="30px" color="white" />
      </Box>

      <DropzoneBox
        index={page}
        data={gallery} setData={setGallery}
      />

      <Box
        id="next-btn-container"
        cursor="pointer"
        userSelect="none"
        onClick={() => handlePageShift("next")}
        transition="filter 200ms ease-in-out"
        _hover={{ filter: "brightness(0.7)" }}
        _active={{ filter: "brightness(0.9)" }}
      >
        <RightArrowIcon size="30px" color="white" />
      </Box>

      <Flex
        id="page-number-container"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="0"
        right="-5px"
        gap="5px"
        userSelect="none"
      >
        <Text
          fontSize="16px"
          transition="opacity 100ms ease-in-out"
        >
          {page+1}
        </Text>
        <Text fontSize="18px">
          /
        </Text>
        <Text fontSize="16px">
          {max_pages}
        </Text>
      </Flex>
    </Flex>
  )
}

