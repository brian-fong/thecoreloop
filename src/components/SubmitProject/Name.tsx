// Components
import {
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import NameModal from "./NameModal";

// Types
import { ReactElement } from "react";

// Hooks
import { useEffect, useState } from "react";
import useProjectState from "../../hooks/useProjectState";

export default function Name() {
  // State Variables
  const { name, setName } = useProjectState();
  const [content, setContent] = useState<ReactElement>();

  // Disclosure: Name Modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    console.log("Name: ", name);

    if (!name) {
      // Display placeholder for project name
      setContent(
        <Flex
          flexDirection="row"
          justifyContent="start"
          alignItems="center" 
          gap="10px" 
          padding="5px 15px"
          color="white" 
          fontWeight="700"
          letterSpacing="3px"
          border="1px solid white"
          borderRadius="5px"
          cursor="pointer"
          transition="background 200ms ease-in-out"
          _hover={{ background: "rgba(255, 255, 255, 0.1)" }}
          _active={{ background: "rgba(255, 255, 255, 0.3)" }}
          userSelect="none"
        >
          <Text fontSize="24px">
            🏗️
          </Text>
          <Text fontSize="24px">
            &lt;project_name&gt;
          </Text>
          <NameModal
            isOpen={isOpen}
            onClose={onClose}
          />
        </Flex>
      );
    } else {
      // Display user-inputted project name
      setContent(
        <Text
          padding="5px 0"
          color="white"
          fontSize="24px"
          fontWeight="700"
          letterSpacing="wide"
          cursor="pointer"
          whiteSpace="nowrap"
          transition="all 200ms ease-in-out"
          _hover={{ 
            padding: "5px 15px",
            letterSpacing: "3px",
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
    <Flex onClick={onOpen}>
      {content}
      <NameModal 
        name={name}
        setName={setName}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Flex>
  );
}

