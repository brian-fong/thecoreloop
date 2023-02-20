import {  Text,
  Flex,
  Grid,
  Button,
} from "@chakra-ui/react";
import {
  ChevronUpIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons"
import uuid from "react-uuid";
import { useState, useEffect } from "react";
import ReferenceCard from "../ReferenceCard";
import BlinkTransition from "./BlinkTransition";
import CarouselTransition from "./CarouselTransition";
import { REFERENCES } from "../../../utils/references";

export default function Carousel({ screen_width }: any) {
  const [shift, toggleShift] = useState<boolean>(true);
  const [page_fade, togglePageFade] = useState<boolean>(true);
  const [btn_pos, setBtnPos] = useState<string>("50px");

  async function handlePrev(): Promise<void> {
    toggleShift(true);
    togglePageFade(true);
  }

  async function handleNext(): Promise<void> {
    toggleShift(false);
    togglePageFade(false);
  }

  useEffect(() => {
    const ref_cont: HTMLElement = document.getElementById(
      "references-container"
    )!;
    const _btn_pos: number = (screen_width - ref_cont.offsetWidth)/4 - 45;
    console.log("Btn Pos: ", _btn_pos);
    setBtnPos(`${_btn_pos}px`);
  }, [screen_width]);

  return (
    <Flex
      id="carousel-container"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <Flex
        id="references-container"
        position="relative"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        margin="30px 0px"
        maxWidth="70%"
        minHeight="250px"
      >
        <Grid
          id="references-1"
          templateColumns={`repeat(
            3, 
            minmax(200px, 1fr)
          )`}
          gap="30px"
          alignItems="center"
          zIndex={shift ? 2 : 1}
          pointerEvents={shift ? "all" : "none"}
        >
          {REFERENCES.slice(0, 3).map(reference => (
            <CarouselTransition direction="up" _in={shift}>
              <ReferenceCard
                key={uuid()}
                reference={reference}
                focusable={shift}
              />
            </CarouselTransition>
          ))}
        </Grid>
        <Grid
          id="references-2"
          position="absolute"
          templateColumns={`repeat(
            3, 
            minmax(300px, 1fr)
          )`}
          gap="30px"
          alignItems="center"
          zIndex={!shift ? 2 : 1}
          pointerEvents={!shift ? "all" : "none"}
        >
          {REFERENCES.slice(3).map(reference => (
            <CarouselTransition direction="down"_in={!shift}>
              <ReferenceCard
                key={uuid()}
                reference={reference}
                focusable={!shift}
              />
            </CarouselTransition>
          ))}
        </Grid>
      </Flex>

      <Flex
        id="btn-container"
        position="absolute"
        right="0"
        marginRight={btn_pos}
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
          opacity={!shift ? 1.0 : 0.3}
          transition="all 100ms linear"
          zIndex={2}
          tabIndex={0}
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
          zIndex={2}
        >
          <BlinkTransition _in={page_fade}>
            <Text fontSize="14px">{page_fade ? 1 : 2}</Text>
          </BlinkTransition>
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
          opacity={shift ? 1.0 : 0.3}
          transition="all 100ms linear"
          zIndex={2}
          tabIndex={0}
          onClick={handleNext}
        >
          <ChevronDownIcon color="white" boxSize="30px" />
        </Button>
      </Flex>
    </Flex>
  );
}

