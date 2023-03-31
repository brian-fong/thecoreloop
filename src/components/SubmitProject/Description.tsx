// Components
import {
  Box,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import DescriptionModal from "./DescriptionModal";

//Hooks
import { useEffect, useState } from "react";

// Types
import { ReactElement } from "react";

export default function Description({ description, setDescription }: any) {
  // State variables
  const [content, setContent] = useState<ReactElement>();

  // Disclosure: DescriptionModal
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (!description) {
      // Display placeholder for headline
      setContent(
        <Flex
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          gap="10px"
          padding="2px 4px"
          width="100%"
          height="100%"
          minHeight="72px"
          border="1px solid white"
          borderRadius="5px"
          cursor="pointer"
          transition="background 200ms ease-in-out"
          userSelect="none"
          _hover={{
            padding: "4px 8px",
            letterSpacing: "2px",
            background: "rgba(0, 0, 0, 0.4)",
          }}
        >
          <Text fontSize="16px">
            📰
          </Text>
          <Text fontSize="16px">
            &lt;description&gt;
          </Text>
        </Flex>
      );
    } else {
      // Display user-inputted headline
      setContent(
        <Flex
          flexDirection="row"
          justifyContent="start"
          alignItems="start"
          width="100%"
          height="100%"
        >
          <Text
            padding="0"
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
              padding: "4px 8px",
              fontSize: "15px",
              background: "rgba(0, 0, 0, 0.4)",
              border: "1px solid white",
              borderRadius: "5px",
            }}
            _active={{ background: "rgba(255, 255, 255, 0.3)" }}
            userSelect="none"
          >
            {description}
          </Text>
        </Flex>
      )
    }
  }, [description])

  return (
    <Box width="100%" height="100%" onClick={onOpen}>
      {content}
      <DescriptionModal
        description={description}
        setDescription={setDescription}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Box>
  )
}

