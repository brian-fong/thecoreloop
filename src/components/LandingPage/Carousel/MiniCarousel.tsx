import uuid from "react-uuid";
import { Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ReferenceCard from "../ReferenceCard";
import WarpTransition from "./WarpTransition";
import { REFERENCES } from "../../../utils/references";

export default function MiniCarousel() {
  // Carousel Index
  const [ci, setCi] = useState<number>(0);
  const [warped, toggleWarp] = useState<boolean>(true);

  useEffect(() => {

  }, [ci]);

  return (
    <Flex
      id="mini-carousel"
      position="relative"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      padding="30px"
      minHeight="220px"
    >
      <Flex
        id="references-container"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="30px"
      >
        {REFERENCES.map(reference => (
          <WarpTransition _in={warped}>
            <ReferenceCard
              key={uuid()}
              reference={reference}
              visible={warped}
            />
          </WarpTransition>
        ))}
      </Flex>
    </Flex>
  )
}

