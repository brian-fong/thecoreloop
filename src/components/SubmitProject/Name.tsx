// Components
import {
  Box,
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
        <Text
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          gap="10px"
          padding="4px 8px"
          fontSize="24px"
          fontWeight="700"
          border="1px solid white"
          borderRadius="5px"
          cursor="pointer"
          whiteSpace="nowrap"
          userSelect="none"
          transition="all 200ms ease-in-out"
          _hover={{
            padding: "4px 8px",
            letterSpacing: "2px",
            background: "rgba(0, 0, 0, 0.4)",
          }}
        >
          🤖 &lt;project_name&gt;
        </Text>
      );
    } else {
      // Display user-inputted name
      setContent(
        <Text
          padding="0"
          color="white"
          fontSize="24px"
          fontWeight="700"
          lineHeight="none"
          border="1px solid transparent"
          cursor="pointer"
          whiteSpace="nowrap"
          transition="all 200ms ease-in-out"
          _hover={{ 
            padding: "4px 8px",
            background: "rgba(0, 0, 0, 0.4)",
            border: "1px solid white",
            borderRadius: "5px",
          }}
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

