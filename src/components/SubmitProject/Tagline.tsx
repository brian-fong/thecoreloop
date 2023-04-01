// Components
import {
  Box,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import TaglineModal from "./TaglineModal";

//Hooks
import { useEffect, useState } from "react";

// Types
import { ReactElement } from "react";

export default function Tagline({ tagline, setTagline }: any) {
  // State variables
  const [content, setContent] = useState<ReactElement>();

  // Disclosure: DescriptionModal
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (!tagline) {
      // Display placeholder for tagline
      setContent(
        <Text
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          padding="4px 8px"
          width="100%"
          height="100%"
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
          📰  &lt;tagline&gt;
        </Text>
      );
    } else {
      // Display user-inputted tagline
      setContent(
        <Text
          padding="0"
          width="100%"
          height="100%"
          color="white"
          fontSize="16px"
          lineHeight="5"
          lang="en"
          border="1px solid transparent"
          overflow="hidden"
          textOverflow="ellipsis"
          cursor="pointer"
          userSelect="none"
          transition="all 200ms ease-in-out"
          _hover={{ 
            margin: "10px 0",
            padding: "4px 8px",
            fontSize: "14px",
            background: "rgba(0, 0, 0, 0.4)",
            border: "1px solid white",
            borderRadius: "5px",
          }}
          style={{
            display: "-webkit-box",
            hyphens: "auto",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
          }}
        >
          {tagline}
        </Text>
      )
    }
  }, [tagline])

  return (
    <Box width="100%" height="100%" onClick={onOpen}>
      {content}
      <TaglineModal
        tagline={tagline}
        setTagline={setTagline}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Box>
  )
}

