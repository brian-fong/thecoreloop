import {
  Button,
  Flex, 
} from "@chakra-ui/react";

export default function LeftColumn({ stage, setStage }: any) {
  return (
    <Flex
      id="nav-column"
      flexDirection="column"
      justifyContent="start"
      alignItems="center"
      paddingRight="1px"
      background="linear-gradient(to top, black, white)"
    >
      <Flex
        flexDirection="column"
        justifyContent="start"
        alignItems="center"
        gap="30px"
        padding="40px 30px"
        height="100%"
        background="black"
      >
        <Button
          padding="5px 30px"
          width="100%"
          color="black"
          background="white"
          filter={stage == "Basics" ? "brightness(0.7)" : "brightness(1.0)"}
          borderRadius="30px"
          textAlign="center"
          whiteSpace="nowrap"
          transition="filter 200ms"
          _hover={{}}
          _active={{}}
          onClick={() => setStage("Basics")}
        >
          Basics
        </Button>
        <Button
          padding="5px 30px"
          width="100%"
          color="black"
          background="white"
          filter={stage == "Details" ? "brightness(0.7)" : "brightness(1.0)"}
          borderRadius="30px"
          textAlign="center"
          whiteSpace="nowrap"
          transition="filter 200ms"
          _hover={{}}
          _active={{}}
          onClick={() => setStage("Details")}
        >
          Details
        </Button>
        <Button
          padding="5px 30px"
          width="100%"
          color="black"
          background="white"
          filter={stage == "Story" ? "brightness(0.7)" : "brightness(1.0)"}
          borderRadius="30px"
          textAlign="center"
          whiteSpace="nowrap"
          transition="filter 200ms"
          _hover={{}}
          _active={{}}
          onClick={() => setStage("Story")}
        >
          Story
        </Button>
      </Flex>
    </Flex>
  );
}

