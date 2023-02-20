import {
  Button,
  Flex, 
  Text,
} from "@chakra-ui/react";
import {
  ChevronUpIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import Blink from "./Blink";

export default function CarouselCntrls({ 
  index,
  stages,
  blinked,
  handlePrev,
  handleNext,
}: any) {

  return (
    <Flex
      id="btn-container"
      flexDirection="column"
      justifyContent="start"
      alignItems="center"
    >
      <Button 
        id="prev-btn"
        colorScheme="blackAlpha"
        margin="0px"
        padding="0px"
        width="min-content"
        minWidth="min-content"
        maxWidth="min-content"
        height="min-content"
        background="none"
        transition="all 100ms linear"
        zIndex={2}
        tabIndex={0}
        onClick={handlePrev}
      >
        <ChevronUpIcon color="white" boxSize="30px" />
      </Button>
      <Flex
        flexDirection="row"
        gap="8px"
        justifyContent="center"
        alignItems="center"
        padding="5px"
        userSelect="none"
        draggable={false}
        zIndex={2}
      >
        <Blink _in={blinked}>
          <Text fontSize="14px">{index+1}</Text>
        </Blink>
        <Text fontSize="18px">/</Text>
        <Text fontSize="14px">{stages}</Text>
      </Flex>
      <Button
        id="next-btn"
        colorScheme="blackAlpha"
        margin="0px"
        padding="0px"
        width="min-content"
        minWidth="min-content"
        maxWidth="min-content"
        height="min-content"
        background="none"
        transition="all 100ms linear"
        zIndex={2}
        tabIndex={0}
        onClick={handleNext}
      >
        <ChevronDownIcon color="white" boxSize="30px" />
      </Button>
    </Flex>
  );
}

