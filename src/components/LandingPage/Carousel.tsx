import {
  Button,
  Flex,
  Grid,
  Text,
} from "@chakra-ui/react";
import {
  ChevronUpIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import Blink from "./Blink";
import uuid from "react-uuid";
import ReferenceCard from "./ReferenceCard";
import { useRef, useState, useEffect, ReactElement } from "react";
import { REFERENCES } from "../../utils/references";

const min_card_width: number = 250;

export default function Carousel({ screen_width }: any) {
  const [index, setIndex] = useState<number>(0);          // carousel index
  const [stages, setStages] = useState<number>(2);        // carousel stage
  const [cards, setCards] = useState<ReactElement[]>([]); // reference cards

  const [blinked, blink] = useState<boolean>(true);

  function handlePrev() {
    // Decrement carousel index
    if (index > 0) setIndex(i => i-1);
    blink(blinked => !blinked);
  }

  function handleNext() {
    // Increment carousel index
    if (index < stages-1) setIndex(i => i+1);
    blink(blinked => !blinked);
  }

  useEffect(() => {
    let columns: number = 1;
    for (let i = 1; i <= 3; i++) {
      const min_width: number = min_card_width*i + 40*(i-1) + 120;
      if (screen_width >= min_width) columns = i;
    }
    setStages(REFERENCES.length/columns);
  }, [screen_width]);

  useEffect(() => {
    setCards([]);
    const a: number = REFERENCES.length/stages * index;
    const b: number = (REFERENCES.length/stages) * (index+1);
    for (let i = a; i < b; i++) {
      setCards(cards => [...cards, 
        <ReferenceCard 
          key={uuid()}
          reference={REFERENCES[i]}
        />
      ]);
    }
  }, [index, stages]);

  return (
    <Flex
      id="carousel-container"
      flexDirection="row"
      gap="30px"
      justifyContent="center"
      alignItems="start"
      margin="30px 60px"
    >
      <Grid
        id="card-grid"
        gridTemplateColumns={`repeat(
          ${REFERENCES.length/stages}, 
          minmax(${min_card_width}px, 1fr)
        )`}
        gap="40px"
        justifyContent="center"
        alignItems="center"
      >
        {cards}
      </Grid>

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
    </Flex>
  );
}

