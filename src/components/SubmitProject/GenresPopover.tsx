// Components
import {
  Button,
  Flex,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Text,
} from "@chakra-ui/react";

// Hooks
import { useRef } from "react";

// Helper Functions
import uuid from "react-uuid";
import wait from "../../utils/wait";
import blur from "../../utils/blur";

// Helpful Constants
import { BLOCKCHAINS } from "../../data/blockchains";

export default function GenresPopover({ 
  genres,
  genres_selected, setGenresSelected,
}: any) {
  // Refs
  const blockchain_btn_ref = useRef<any>();

  async function handleClick(blockchain_name: string) {
    console.log("Selected Blockchain: ", blockchain_name);

    // Update (selected) blockchain state variable
    setGenresSelected(blockchain_name);

    if (blockchain_name == "Other") {
      // Remove focus to close popover window
      blur();

      // Focus new input element for other chain
      await wait(100);  // NOTE: Need to wait for input node to mount
      const blockchain_input_node: HTMLElement = document.getElementById(
        "other_blockchain"
      )!;
      blockchain_input_node.focus();

    } else {
      blur();
    }
  }

  function renderPopoverBtn() {
    if (!genres && !genres_selected) {
      // Case: Blockchain state variable is not defined and user has not selected
      // a blockchain yet.
      return (
        // Display placeholder
        <Text marginLeft="10px">Select Chain</Text>
      );
    } else if (genres_selected) {
      // Case: Blockchain state variable is not defined but user has
      // selected a blockchain
      return (
        // Display selected blockchain
        <Flex alignItems="center" gap="10px" padding="2px">
          <Image
            src={BLOCKCHAINS[genres_selected]}
            objectFit="cover"
            padding="3px"
            width="30px"
            height="30px"
            borderRadius="5px"
          />
          <Text
            id="blockchain-name"
            color="white"
            fontSize="16px"
            fontStyle="normal"
            fontWeight="300"
          >
            {genres_selected}
          </Text>
        </Flex>
      );
    }
  }

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          ref={blockchain_btn_ref}
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
          {Object.keys(BLOCKCHAINS).map((blockchain_name: string) => (
            <Flex
              key={uuid()}
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              gap="10px"
              padding="2px"
              color="grey.100"
              border="1px solid transparent"
              borderRadius="5px"
              cursor="pointer"
              userSelect="none"
              tabIndex={0}
              onClick={() => handleClick(blockchain_name)}
              transition="all 100ms ease-in-out"
              _focusVisible={{
                background: "rgba(0, 0, 0, 0.4)",
                border: "1px solid white",
              }}
              _hover={{
                background: "rgba(0, 0, 0, 0.4)",
                border: "1px solid white",
              }}
            >
              <Image
                src={BLOCKCHAINS[blockchain_name]}
                objectFit="contain"
                padding="3px"
                width="40px"
                height="40px"
                borderRadius="5px"
              />
              <Text width="100%" fontSize="16px">
                {blockchain_name}
              </Text>
            </Flex>
          ))}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

