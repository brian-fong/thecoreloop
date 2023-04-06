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

export default function Genres({
  format = "discover",
  genres, setGenres,
}: any) {
  // State variables
  const [content, setContent] = useState<ReactElement>();
  const [genres_selected, setGenresSelected] = useState<string[]>(genres);

  // Disclosure: GenresModal
  const { isOpen, onOpen, onClose } = useDisclosure();

  function renderAdditionalGenres() {
    if (format == "discover") {
      return (
        <Flex
          flexDirection="row"
          justifyContent="start"
          alignItems="center"
          padding="2px 8px"
          background="gray.700"
          border="1px solid transparent"
          borderRadius="10px"
          cursor="pointer"
          userSelect="none"
          transition="all 200ms ease-in-out"
          _hover={{ 
            padding: "2px 12px",
            background: "rgba(0, 0, 0, 0.4)",
            border: "1px solid white",
            borderRadius: "5px",
          }}
        >
          <Text
            color="white"
            fontSize="16px"
            fontWeight="700"
          >
            🏷️ {genres[0]}
          </Text>

          {/* Display +1 or +2 for additional genres */}
          {genres.length > 1
            ?
            <Tooltip
              label={[...genres].slice(1).sort().join(", ")}
              placement="bottom-end"
              offset={[10, 12]}
              arrowSize={12}
              hasArrow
            >
              <Text
                marginLeft="5px"
                padding="0 4px"
                color="white"
                fontSize="16px"
                fontWeight="700"
                background="rgba(0, 0, 0, 0.3)"
                borderRadius="7px"
              >
                +{genres.length-1}
              </Text>
            </Tooltip>
            : null
          }
        </Flex>
      );
    } else if (format == "in-depth") {
      return (
        <Text
          padding="2px 8px"
          color="white"
          fontSize="16px"
          fontWeight="700"
          background="gray.700"
          border="1px solid transparent"
          borderRadius="10px"
          cursor="pointer"
          transition="all 200ms ease-in-out"
          _hover={{ 
            padding: "2px 12px",
            background: "rgba(0, 0, 0, 0.4)",
            border: "1px solid white",
            borderRadius: "5px",
          }}
          userSelect="none"
        >
          🏷️ {[...genres].sort().join(" • ")}
        </Text>
      );
    }
  }

  useEffect(() => {
    if (genres.length == 0) {
      // Display placeholder for genres
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
      setContent(renderAdditionalGenres());
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



