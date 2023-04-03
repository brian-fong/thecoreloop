// Components
import {
  Box,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import StageModal from "./StageModal";

// Hooks
import { useEffect, useState } from "react";

// Types
import { ReactElement } from "react";

// Useful Functions & Constants
import { STAGES } from "../../data/stages";

export default function Stage({ stage, setStage }: any) {
  // State variables
  const [content, setContent] = useState<ReactElement>();
  const [stage_selected, setStageSelected] = useState<string>(stage);

  // Disclosure: NameModal
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (!stage) {
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
          whiteSpace="nowrap"
          userSelect="none"
          transition="all 200ms ease-in-out"
          _hover={{
            letterSpacing: "2px",
            background: "rgba(0, 0, 0, 0.4)",
          }}
        >
          🏗️  &lt;stage&gt;
        </Text>
      );
    } else {
      // Display user-inputted stage
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
          {STAGES[stage]} {stage}
        </Text>
      )
    }
  }, [stage]);

  return (
    <Box onClick={onOpen}>
      {content}
      <StageModal
        stage={stage} setStage={setStage}
        stage_selected={stage_selected} setStageSelected={setStageSelected}
        isOpen={isOpen} onClose={onClose}
      />
    </Box>
  );
}


