// Components
import {
  Box,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import NameModal from "./NameModal";

// Hooks
import { useEffect, useState } from "react";

// Types
import { ReactElement } from "react";

export default function Name({ name, setName }: any) {
  // State variables
  const [content, setContent] = useState<ReactElement>();

  // Disclosure: NameModal
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (!name) {
      // Display placeholder for name
      setContent(
        <Flex
          flexDirection="row"
          justifyContent="start"
          alignItems="center"
          gap="10px"
          padding="2px 4px"
          color="white"
          border="1px solid white"
          borderRadius="5px"
          cursor="pointer"
          transition="background 200ms ease-in-out"
          _hover={{
            background: "rgba(0, 0, 0, 0.4)"
          }}
          userSelect="none"
        >
          <Text fontSize="24px" fontWeight="700">
            🏗️
          </Text>
          <Text fontSize="24px" fontWeight="700">
            &lt;project_name&gt;
          </Text>
          <NameModal
            isOpen={isOpen}
            onClose={onClose}
          />
        </Flex>
      );
    } else {
      // Display user-inputted name
      setContent(
        <Text
          padding="2px 4px"
          color="white"
          fontSize="24px"
          fontWeight="700"
          border="1px solid transparent"
          cursor="pointer"
          whiteSpace="nowrap"
          transition="all 200ms ease-in-out"
          _hover={{ 
            background: "rgba(0, 0, 0, 0.4)",
            border: "1px solid white",
            borderRadius: "5px",
          }}
          _active={{ background: "rgba(255, 255, 255, 0.3)" }}
          userSelect="none"
        >
          {name}
        </Text>
      )
    }
  }, [name]);

  return (
    <Box onClick={onOpen}>
      {content}
      <NameModal 
        name={name}
        setName={setName}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Box>
  );
}

