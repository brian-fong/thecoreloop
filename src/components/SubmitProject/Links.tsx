// Components
import {
  Box,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import LinksModal from "./LinksModal";

// Hooks
import { useEffect, useState } from "react";

// Types
import { ReactElement } from "react";

export default function Links({
  links, setLinks,
}: any) {
  // State variables
  const [content, setContent] = useState<ReactElement>();

  // Disclosure: GenresModal
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (!links[0].length) {
      // Display placeholder for name if first link is empty
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
          🌐  &lt;links&gt;
        </Text>
      );
    } else {
      // Display user-inputted genres
      setContent(
        <Text
          padding="2px 8px"
          color="white"
          fontSize="16px"
          fontWeight="700"
          background="gray.700"
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
          {links}
        </Text>
      )
    }
  }, [links]);

  return (
    <Box onClick={onOpen}>
      {content}
      <LinksModal 
        links={links} setLinks={setLinks}
        isOpen={isOpen} onClose={onClose}
      />
    </Box>
  );
}



