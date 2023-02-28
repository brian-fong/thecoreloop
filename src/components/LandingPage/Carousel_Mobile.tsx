import {
  Flex,
  Grid,
} from "@chakra-ui/react";
import uuid from "react-uuid";
import ReferenceCard from "./ReferenceCard";
import CarouselTrack from "./CarouselTrack";
import { REFERENCES } from "../../utils/references";
import { useState, useEffect, ReactElement, TouchEvent } from "react";
import { useSwipeable } from "react-swipeable";

const min_card_width: number = 250;

export default function Carousel_Mobile({ screen_width }: any) {
  const [index, setIndex] = useState<number>(0);          // carousel index
  const [stages, setStages] = useState<number>(2);        // carousel stage

  const [cards, setCards] = useState<ReactElement[]>([]); // reference cards

  const card_handlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
  });

  function handleSwipeLeft() {
    if (index < REFERENCES.length-1) setIndex((i: number) => i+1);
  }

  function handleSwipeRight() {
    if (index > 0) setIndex((i: number) => i-1);
  }

  useEffect(() => {
    let columns: number = 1;
    for (let i = 1; i <= 3; i++) {
      const min_width: number = min_card_width*i + 40*(i-1) + 120;
      if (screen_width >= min_width) columns = i;
    }
    const stages_new: number = REFERENCES.length/columns;
    if (stages_new != stages) setStages(stages_new);
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
          desktop_mode={false}
        />
      ]);
    }
  }, [index, stages]);

  return (
    <Flex
      id="carousel-container"
      flexDirection="column"
      gap="30px"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <Grid
        id="card-grid"
        gridTemplateColumns={`repeat(
          ${REFERENCES.length/stages}, 
          minmax(${min_card_width}px, 1fr)
        )`}
        gap="40px"
        justifyContent="center"
        alignItems="start"
        width="100%"
        {...card_handlers}
      >
        {cards}
      </Grid>

      <CarouselTrack 
        index={index}
        setIndex={setIndex}
        stages={stages}
      />
    </Flex>
  );
}

