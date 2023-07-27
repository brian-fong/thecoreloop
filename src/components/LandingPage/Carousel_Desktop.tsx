import { Flex, Grid } from "@chakra-ui/react";
import uuid from "react-uuid";
import ReferenceCard from "./ReferenceCard";
import CarouselCntrls from "./CarouselCtnrls";
import { REFERENCES } from "../../utils/references";
import { useState, useEffect, ReactElement } from "react";

const min_card_width: number = 250;

export default function Carousel_Desktop({ screen_width }: any) {
  const [index, setIndex] = useState<number>(0); // carousel index
  const [stages, setStages] = useState<number>(2); // carousel stage

  const [blinked, blink] = useState<boolean>(true); // stage number transition

  const [cards, setCards] = useState<ReactElement[]>([]); // reference cards

  function handlePrev() {
    // Decrement carousel index
    if (index > 0) setIndex((i: number) => i - 1);
    blink((blinked: boolean) => !blinked);
  }

  function handleNext() {
    // Increment carousel index
    if (index < stages - 1) setIndex((i: number) => i + 1);
    blink((blinked: boolean) => !blinked);
  }

  useEffect(() => {
    let columns: number = 1;
    for (let i = 1; i <= 3; i++) {
      const min_width: number = min_card_width * i + 40 * (i - 1) + 120;
      if (screen_width >= min_width) columns = i;
    }
    const stages_new: number = REFERENCES.length / columns;
    if (stages_new != stages) setStages(stages_new);
  }, [screen_width]);

  useEffect(() => {
    setCards([]);
    const a: number = (REFERENCES.length / stages) * index;
    const b: number = (REFERENCES.length / stages) * (index + 1);
    for (let i = a; i < b; i++) {
      setCards((cards) => [
        ...cards,
        <ReferenceCard
          key={uuid()}
          reference={REFERENCES[i]}
          desktop_mode={true}
        />,
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
      width="100%"
    >
      <Grid
        id="card-grid"
        gridTemplateColumns={`repeat(
          ${REFERENCES.length / stages}, 
          minmax(${min_card_width}px, 1fr)
        )`}
        gap="40px"
        justifyContent="center"
        alignItems="start"
        width="100%"
        maxWidth="1200px"
      >
        {cards}
      </Grid>

      <CarouselCntrls
        index={index}
        stages={stages}
        blinked={blinked}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
    </Flex>
  );
}
