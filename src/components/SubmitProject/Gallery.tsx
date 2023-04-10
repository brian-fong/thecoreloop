// Components
import {
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import {
  Bs1SquareFill as Square1Icon,
  Bs2SquareFill as Square2Icon,
  Bs3SquareFill as Square3Icon,
  Bs4SquareFill as Square4Icon,
  Bs5SquareFill as Square5Icon,
  BsArrowLeftSquare as LeftArrowIcon,
  BsArrowRightSquare as RightArrowIcon,
  BsPlusCircleFill as PlusIcon,
} from "react-icons/bs";
import DropzoneBox from "../Core/DropzoneBox";

//Hooks
import { useState } from "react";

// Types
import type { ReactElement } from "react";

export default function Gallery({ gallery, setGallery }: any) {
  // State variables
  const [page, setPage] = useState<number>(0);
  const [pages, setPages] = useState<number>(1);
  
  const max_pages: number = 5;
  function handlePageShift(dir: string): void {
    if (dir == "next") {
      // Move to next page (limit: 5 pages)
      if (page < (pages-1)) setPage(page + 1);
    } else if (dir == "prev") {
      // Move to previous page
      if (page > 0) setPage(page - 1);
    }
  }

  function handleAddPage() {
    if (pages < (max_pages)) setPages(pages+1);
    else return;
  }

  function renderPageIndex(index: number): ReactElement {
    switch (index) {
      case 0: return <Square1Icon size="20px" />
      case 1: return <Square2Icon size="20px" />
      case 2: return <Square3Icon size="20px" />
      case 3: return <Square4Icon size="20px" />
      case 4: return <Square5Icon size="20px" />
      default: return <div></div>;
    }
  }

  function renderPageIndices(): ReactElement[] {
    const page_indices: ReactElement[] = [];
    for (let i = 0; i < pages; i++) {
      page_indices.push(
        <Box
          cursor="pointer"
          userSelect="none"
          filter={i == page 
            ? "brightness(1.0)"
            : "brightness(0.5)"
          }
          onClick={() => setPage(i)}
          transition="filter 200ms ease-in-out"
          _hover={{
            filter: "brightness(1.0)"
          }}
        >
          {renderPageIndex(i)}
        </Box>
      );
    }
    return page_indices;
  }

  return (
    <Flex flexDirection="column" gap="10px" width="100%">
      <Flex
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        gap="20px"
        position="relative"
        width="100%"
        minWidth="100%"
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
          setPage={setPage}
          pages={pages} setPages={setPages}
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
      </Flex>

      <Flex
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        gap="10px"
        position="relative"
        width="100%"
      >
        {renderPageIndices()}
        <Box
          position="absolute"
          marginLeft="200px"
          display={pages == 5 ? "none" : "flex"}
          cursor="pointer"
          filter="brightness(0.6)"
          onClick={handleAddPage}
          transition="filter 200ms ease-in-out"
          _hover={{ filter: "brightness(1.0)" }}
          _active={{ filter: "brightness(0.5)" }}
        >
          <PlusIcon size="20px" />
        </Box>
      </Flex>
    </Flex>
  );
}

