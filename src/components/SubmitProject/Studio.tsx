// Components
import {
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import StudioModal from "./StudioModal";

// Hooks
import { useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";

// Types
import type { ReactElement } from "react";

export default function Studio({ studio, setStudio }: any) {
  // State variables
  const [content, setContent] = useState<ReactElement>();

  // useDisclosure: StudioModal
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (!studio) {
      // Display placeholder for studio
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
          🧠 &lt;studio&gt;
        </Text>
      )
    } else {
      setContent(
        <Text
          padding="2px 8px"
          color="white"
          fontSize="16px"
          fontWeight="700"
          border="1px solid transparent"
          borderRadius="10px"
          cursor="pointer"
          whiteSpace="nowrap"
          userSelect="none"
          transition="all 200ms ease-in-out"
          _hover={{ 
            padding: "2px 12px",
            color: "white",
            background: "rgba(0, 0, 0, 0.4)",
            border: "1px solid white",
            borderRadius: "5px",
          }}
          _active={{ background: "rgba(255, 255, 255, 0.3)" }}
        >
          Created by {studio}
        </Text>
      )
    }
  }, [studio]);
  
  return (
    <Flex width="100%">
      <Box onClick={onOpen}>
        {content}
        <StudioModal
          isOpen={isOpen} onClose={onClose}
          studio={studio} setStudio={setStudio}
        />
      </Box>
    </Flex>
  )
}

