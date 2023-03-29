// Components
import {
  Button,
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Text,
} from "@chakra-ui/react";

// Helper Functions
import uuid from "react-uuid";
import blur from "../../utils/blur";

// Helpful Constants
import { STAGES } from "../../data/stages";

export default function StagePopover({
  stage,
  stage_selected, setStageSelected,
}: any) {

  async function handleClick(stage: string) {
    // Update (selected) stage state variable
    setStageSelected(stage);
    
    // Close StagePopover window
    blur();
  }

  function renderPopoverBtn() {
    if (!stage && !stage_selected) {
      return (
        // Display placeholder
        <Text marginLeft="10px">Select Development Stage</Text>
      );
    } else if (stage_selected) {
      return (
        // Display selected stage
        <Flex padding="4px 8px">
          <Text
            padding="2px 4px"
            color="white"
            fontWeight="300"
            fontStyle="normal"
          >
            {stage_selected}
          </Text>
        </Flex>
      );
    }
  }

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          display="flex"
          flexDirection="row"
          justifyContent="start"
          alignItems="center"
          padding="2px"
          width="100%"
          color="gray.400"
          fontSize="16px"
          fontStyle="italic"
          backgroundColor="rgba(0, 0, 0, 0.2)"
          border="2px solid rgba(255, 255, 255, 0.7)"
          borderRadius="5px"
          transition="background 200ms ease-in-out"
          _hover={{ background: "rgba(255, 255, 255, 0.1)" }}
          _active={{}}
        >
          {renderPopoverBtn()}
        </Button>
      </PopoverTrigger>
      <PopoverContent width="536px">
        <PopoverBody
          display="flex"
          flexDirection="column"
          gap="5px"
          padding="10px 5px"
          height="100%"
          maxHeight="200px"
          background="#282a36"
          backgroundColor="#282a36"
          border="1px solid rgba(147, 147, 147, 0.5)"
          borderRadius="5px"
          overflowY="scroll"
          css={{
            '&::-webkit-scrollbar': {
              width: "18px",
              background: "transparent",
            },
            '&::-webkit-scrollbar-track': {
              width: "18px",
            },
            "&::-webkit-scrollbar-thumb": {
              borderRadius: "20px",
              border: "6px solid rgba(0, 0, 0, 0)",
              backgroundClip: "padding-box",
            },
            "&::-webkit-scrollbar-track-piece:start": {
              marginTop: "2px",
            },
            "&::-webkit-scrollbar-track-piece:end": {
              marginBottom: "2px",
            },
          }}
        >
          {STAGES.map((stage: string) => (
            <Flex
              key={uuid()}
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              gap="10px"
              padding="4px 8px"
              color="gray.400"
              borderRadius="10px"
              cursor="pointer"
              userSelect="none"
              tabIndex={0}
              onClick={() => handleClick(stage)}
              transition="color 200ms ease-in-out"
              _focusVisible={{
                color: "white",
              }}
              _hover={{
                color: "white",
                background: "rgba(0, 0, 0, 0.4)",
              }}
            >
              <Text width="100%" fontSize="16px">
                {stage}
              </Text>
            </Flex>
          ))}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}


