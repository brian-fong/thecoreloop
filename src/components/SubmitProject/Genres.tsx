// Components
import {
  Box,
  Flex,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import GenresModal from "./GenresModal";

// Hooks
import { useEffect, useState } from "react";

// Types
import { ReactElement } from "react";

export default function Genres({ genres, setGenres }: any) {
  // State variables
  const [content, setContent] = useState<ReactElement>();
  const [genres_selected, setGenresSelected] = useState<string[]>([]);

  // Disclosure: GenresModal
  const { isOpen, onOpen, onClose } = useDisclosure();

  function renderGenres(): ReactElement {
    if (genres.length == 1) {
      // Display only 1 genre
      return (
        <Text
          padding="2px 4px"
          color="white"
          fontSize="16px"
          background="#424a54"
          border="1px solid transparent"
          borderRadius="10px"
          cursor="pointer"
          whiteSpace="nowrap"
          userSelect="none"
          transition="all 200ms ease-in-out"
          _hover={{ 
            padding: "4px 8px",
            color: "white",
            background: "rgba(0, 0, 0, 0.4)",
            border: "1px solid white",
            borderRadius: "5px",
          }}
          _active={{ background: "rgba(255, 255, 255, 0.3)" }}
        >
          {genres[0]}
        </Text>
      );
    } else {
      return (
        // Display primary genre with tooltip to disclose the other genres
        <Flex
          flexDirection="row"
          justifyContent="start"
          alignItems="center"
          gap="5px"
          padding="2px 4px"
          background="#424a54"
          border="1px solid transparent"
          borderRadius="10px"
          cursor="pointer"
        >
          <Text
            color="white"
            fontSize="16px"
            transition="all 200ms ease-in-out"
            _hover={{ 
              padding: "4px 8px",
              background: "rgba(0, 0, 0, 0.4)",
              border: "1px solid white",
              borderRadius: "5px",
            }}
            userSelect="none"
          >
            {genres[0]}
          </Text>
          <Tooltip
            label={genres.slice(1).join(", ")}
            placement="bottom-end"
            offset={[10, 12]}
            arrowSize={12}
            hasArrow
          >
            <Text
              padding="2px 4px"
              color="white"
              fontSize="14px"
              fontWeight="700"
              background="rgba(0, 0, 0, 0.2)"
              borderRadius="7px"
            >
              +{genres.length-1}
            </Text>
          </Tooltip>
        </Flex>
      );
    }
  }

  useEffect(() => {
    console.log("Genres: ", genres);

    if (genres.length == 0) {
      // Display placeholder for name
      setContent(
        <Text
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          gap="10px"
          padding="4px 8px"
          fontSize="16px"
          border="1px solid white"
          borderRadius="5px"
          cursor="pointer"
          whiteSpace="nowrap"
          userSelect="none"
          transition="all 200ms ease-in-out"
          _hover={{
            letterSpacing: "2px",
            background: "rgba(0, 0, 0, 0.4)",
          }}
        >
          🏷️  &lt;genres&gt;
        </Text>
      );
    } else {
      // Display user-inputted genres
      setContent(renderGenres())
    }
  }, [genres]);

  return (
    <Box onClick={onOpen}>
      {content}
      <GenresModal 
        genres={genres} setGenres={setGenres}
        genres_selected={genres_selected} setGenresSelected={setGenresSelected}
        isOpen={isOpen} onClose={onClose}
      />
    </Box>
  );
}



