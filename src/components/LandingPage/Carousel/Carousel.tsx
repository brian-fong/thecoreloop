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
import ReferenceCard from "../ReferenceCard";
import FadeTransition from "./FadeTransition";
import CarouselTransition from "./CarouselTransition";
import { REFERENCES } from "../../../utils/references";

export default function Carousel() {
  const [shift, toggleShift] = useState<boolean>(true);
  const [page_fade, togglePageFade] = useState<boolean>(true);

  async function handlePrev(): Promise<void> {
    toggleShift(true);
    togglePageFade(true);
  }

  async function handleNext(): Promise<void> {
    toggleShift(false);
    togglePageFade(false);
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
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
          <Flex
            id="references-container-1"
            flexDirection="row"
            gap="30px"
            justifyContent="center"
            alignItems="center"
            width="1320px"
            height="220px"
            zIndex={shift ? 2 : 1}
          >
            {REFERENCES.slice(0, 3).map(reference => (
              <CarouselTransition direction="up" _in={shift}>
                <ReferenceCard
                  key={uuid()}
                  reference={reference}
                />
              </CarouselTransition>
            ))}
          </Flex>
          <Flex
            id="references-container-2"
            position="absolute"
            flexDirection="row"
            gap="30px"
            justifyContent="center"
            alignItems="center"
            width="1320px"
            height="220px"
            zIndex={shift ? 1 : 2}
          >
            {REFERENCES.slice(3).map(reference => (
              <CarouselTransition direction="down"_in={!shift}>
                <ReferenceCard
                  key={uuid()}
                  reference={reference}
                />
              </CarouselTransition>
            ))}
          </Flex>
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
          opacity={!shift ? 1.0 : 0.5}
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
          userSelect="none"
          draggable={false}
        >
          <FadeTransition _in={page_fade}>
            <Text fontSize="14px">{page_fade ? 1 : 2}</Text>
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
          opacity={shift ? 1.0 : 0.5}
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

