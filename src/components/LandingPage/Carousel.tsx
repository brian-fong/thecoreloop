import {
  Flex,
  Button,
} from "@chakra-ui/react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons"
import { useRef, useState, useEffect, ReactElement } from "react";
import ReferenceCard from "./ReferenceCard";
import CarouselMotion from "../Misc/CarouselMotion";
import { REFERENCES } from "../../utils/references";

export default function Carousel() {
  const [shift, toggleShift] = useState<boolean>(true);
  const [mode_left, setModeLeft] = useState<string>("fade");
  const [mode_right, setModeRight] = useState<string>("shift");
  const [direction, setDirection] = useState<string>("left");
  const [ref_num, setRefNum] = useState<number>(1);

  function handlePrev(): void {
    if (ref_num > 1) {
      toggleShift(!shift);
      setDirection("right");
      setModeLeft("shift");
      setModeRight("fade");
      setRefNum(ref_num-1);
    }
  }

  function handleNext(): void {
    if (ref_num < 4) {
      toggleShift(!shift);
      setDirection("left");
      setModeLeft("fade");
      setModeRight("shift");
      setRefNum(ref_num+1);
    }
  }

  return (
    <Flex
      id="carousel-container"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      marginTop="30px"
      padding="30px"
      minHeight="200px"
      border="1px solid white"
    >
      <Button 
        id="left-btn"
        colorScheme="blackAlpha"
        margin="0px"
        padding="0px"
        width="min-content"
        minWidth="min-content"
        maxWidth="min-content"
        height="min-content"
        background="none"
        onClick={handlePrev}
      >
        <ChevronLeftIcon color="white" boxSize="30px" />
      </Button>
      <Flex
        id="card-container"
        flexDirection="row"
        gap="30px"
        justifyContent="center"
        alignItems="center"
        padding="0px 30px"
      >
        <ReferenceCard reference={REFERENCES[ref_num-1]} />
        <ReferenceCard reference={REFERENCES[ref_num]} />
        <ReferenceCard reference={REFERENCES[ref_num+1]} />
      </Flex>
      <Button
        id="right-btn"
        colorScheme="blackAlpha"
        margin="0px"
        padding="0px"
        width="min-content"
        minWidth="min-content"
        maxWidth="min-content"
        height="min-content"
        background="none"
        onClick={handleNext}
      >
        <ChevronRightIcon color="white" boxSize="30px" />
      </Button>
    </Flex>
  );
}

