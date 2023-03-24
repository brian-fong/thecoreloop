// Components
import {
  Box,
  Flex,
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
        <Flex
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          gap="10px"
          padding="2px 4px"
          width="100%"
          height="100%"
          border="1px solid white"
          borderRadius="5px"
          cursor="pointer"
          transition="background 200ms ease-in-out"
          userSelect="none"
          _hover={{
            background: "rgba(0, 0, 0, 0.4)",
          }}
        >
          <Text fontSize="16px">
            📰
          </Text>
          <Text fontSize="16px">
            &lt;tagline&gt;
          </Text>
        </Flex>
      );
    } else {
      // Display user-inputted tagline
      setContent(
        <Flex
          flexDirection="row"
          justifyContent="start"
          alignItems="start"
          width="100%"
          height="100%"
        >
          <Text
            padding="2px 4px"
            width="100%"
            minWidth="320px"
            height="100%"
            color="white"
            fontSize="16px"
            fontWeight="700"
            border="1px solid transparent"
            cursor="pointer"
            transition="all 200ms ease-in-out"
            _hover={{ 
              background: "rgba(0, 0, 0, 0.4)",
              border: "1px solid white",
              borderRadius: "5px",
            }}
            _active={{ background: "rgba(255, 255, 255, 0.3)" }}
            userSelect="none"
          >
            {tagline}
          </Text>
        </Flex>
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

