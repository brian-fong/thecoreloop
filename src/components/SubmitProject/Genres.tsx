// Components
import {
  Box,
  Image,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import GenresModal from "./GenresModal";

// Hooks
import { useEffect, useState } from "react";

// Types
import { ReactElement } from "react";

// Useful Constants
import { BLOCKCHAINS } from "../../data/blockchains";

export default function Genres({ genres, setGenres }: any) {
  // State variables
  const [content, setContent] = useState<ReactElement>();
  const [genre_selected, setGenreSelected] = useState<string>("");

  // Disclosure: NameModal
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (!genres) {
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
      // Display user-inputted name
      setContent(
        <Tooltip 
          label={genres}
          placement="right"
          gutter={13}
          hasArrow
        >
          <Box 
            border="1px solid transparent"
            cursor="pointer"
            transition="all 200ms ease-in-out"
            _hover={{
              padding:"4px",
              border: "1px solid white",
              borderRadius: "5px",
              filter: "brightness(0.8)",
            }}
          >
            {genre_selected == "Other"
              ? <Image
                src="./icons/blockchain-icon.png"
                width="25px"
                height="25px"
                borderRadius="5px"
              />
              : <Image
                src={BLOCKCHAINS[genres]}
                width="25px"
                height="25px"
                borderRadius="5px"
              />
            }
          </Box>
        </Tooltip>
      )
    }
  }, [genres]);

  return (
    <Box onClick={onOpen}>
      {content}
      <GenresModal 
        blockchain={genres}
        setBlockchain={setGenres}
        blockchain_selected={genre_selected}
        setBlockchainSelected={setGenreSelected}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Box>
  );
}



