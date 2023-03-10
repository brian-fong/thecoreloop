import {
  Button,
  Flex, 
  Text,
} from "@chakra-ui/react";

export default function LeftColumn({ stage, setStage }: any) {
  return (
    <Flex
      id="nav-column"
      flexDirection="column"
      justifyContent="start"
      alignItems="center"
      gap="30px"
      padding="20px"
      borderRight="1px solid white"
    >
      <Button
        padding="5px 30px"
        width="100%"
        color="black"
        background="white"
        filter={stage == "Basics" ? "brightness(1.0)" : "brightness(0.7)"}
        borderRadius="30px"
        textAlign="center"
        whiteSpace="nowrap"
        transition="filter 200ms"
        _hover={{
          filter: "brightness(1.0)",
        }}
        _active={{
          filter: "brightness(0.5)",
        }}
        onClick={() => setStage("Basics")}
      >
        Basics
      </Button>
      <Button
        padding="5px 30px"
        width="100%"
        color="black"
        background="white"
        filter={stage == "Details" ? "brightness(1.0)" : "brightness(0.7)"}
        borderRadius="30px"
        textAlign="center"
        whiteSpace="nowrap"
        transition="filter 200ms"
        _hover={{
          filter: "brightness(1.0)",
        }}
        _active={{
          filter: "brightness(0.5)",
        }}
        onClick={() => setStage("Details")}
      >
        Details
      </Button>
      <Button
        padding="5px 30px"
        width="100%"
        color="black"
        background="white"
        filter={stage == "Story" ? "brightness(1.0)" : "brightness(0.7)"}
        borderRadius="30px"
        textAlign="center"
        whiteSpace="nowrap"
        transition="filter 200ms"
        _hover={{
          filter: "brightness(1.0)",
        }}
        _active={{
          filter: "brightness(0.5)",
        }}
        onClick={() => setStage("Story")}
      >
        Story
      </Button>
    </Flex>
  );
}

