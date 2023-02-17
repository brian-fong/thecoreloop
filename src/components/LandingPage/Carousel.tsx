import {
  Text,
  Flex,
  Button,
} from "@chakra-ui/react";
import {
  ChevronUpIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons"
import uuid from "react-uuid";
import { useState } from "react";
import wait from "../../utils/wait";
import ReferenceCard from "./ReferenceCard";
import { REFERENCES } from "../../utils/references";
import FadeTransition from "./Carousel/FadeTransition";
import CarouselTransition_1 from "./Carousel/CarouselTransition_1";
import CarouselTransition_2 from "./Carousel/CarouselTransition_2";

export default function Carousel() {
  const [transition_1, toggleTransition_1] = useState<boolean>(true);
  const [transition_2, toggleTransition_2] = useState<boolean>(false);
  const [transition_3, toggleTransition_3] = useState<boolean>(true);

  async function handlePrev(): Promise<void> {
    toggleTransition_2(false);
    toggleTransition_3(true);
    await wait(100);
    toggleTransition_1(true);
  }

  async function handleNext(): Promise<void> {
    toggleTransition_1(false);
    toggleTransition_3(false);
    await wait(100);
    toggleTransition_2(true);
  }

  return (
    <Flex
      id="carousel-container"
      position="relative"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      padding="30px"
      minHeight="220px"
    >
      <Flex
        id="references-container"
        flexDirection="row"
        gap="30px"
        justifyContent="center"
        alignItems="center"
        width="1320px"
        height="220px"
      >
        {REFERENCES.slice(0, 3).map(reference => (
          <CarouselTransition_1 _in={transition_1}>
            <ReferenceCard
              key={uuid()}
              reference={reference}
            />
          </CarouselTransition_1>
        ))}
      </Flex>
      <Flex
        id="references-container"
        position="absolute"
        flexDirection="row"
        gap="30px"
        justifyContent="center"
        alignItems="center"
        width="1320px"
        height="220px"
      >
        {REFERENCES.slice(3).map(reference => (
          <CarouselTransition_2 _in={transition_2}>
            <ReferenceCard
              key={uuid()}
              reference={reference}
            />
          </CarouselTransition_2>
        ))}
      </Flex>
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
          opacity={transition_2 ? 1.0 : 0.5}
          transition="opacity 100ms linear"
          zIndex={2}
          onClick={handlePrev}
        >
          <ChevronUpIcon color="white" boxSize="30px" />
        </Button>
        <Flex
          flexDirection="row"
          gap="5px"
          justifyContent="center"
          alignItems="center"
          padding="5px"
        >
          <FadeTransition _in={transition_3}>
            <Text fontSize="14px">{transition_3 ? 1 : 2}</Text>
          </FadeTransition>
          <Text fontSize="16px">/</Text>
          <Text fontSize="14px">2</Text>
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
          opacity={transition_1 ? 1.0 : 0.5}
          transition="opacity 100ms linear"
          zIndex={2}
          onClick={handleNext}
        >
          <ChevronDownIcon color="white" boxSize="30px" />
        </Button>
      </Flex>
    </Flex>
  );
}

