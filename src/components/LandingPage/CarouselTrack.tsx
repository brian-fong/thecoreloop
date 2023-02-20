import {
  Box,
  Flex,
} from "@chakra-ui/react";
import uuid from "react-uuid";
import { useState, useEffect, ReactElement } from "react";

export default function CarouselTrack({
  index,
  stages,
}: any) {
  const [track, setTrack] = useState<ReactElement[]>([]);

  useEffect(() => {
    setTrack([]);
    for (let i = 0; i < stages; i++) {
      if (i == index) {
        setTrack(track => [...track,
          <Box
            key={uuid()}
            width="24px"
            height="24px"
            backgroundColor="white"
            border="rgba(255, 255, 255, 0.5)"
            borderRadius="5px"
          ></Box>
        ]);
      } else {
        setTrack(track => [...track,
          <Box
            key={uuid()}
            width="24px"
            height="24px"
            backgroundColor="rgba(255, 255, 255, 0.5)"
            border="rgba(255, 255, 255, 0.5)"
            borderRadius="5px"
          ></Box>
        ]);
      }
    }
  }, [index, stages])

  return (
    <Flex
      flexDirection="row"
      gap="15px"
      justifyContent="center"
      alignItems="center"
    >
      {track}
    </Flex>
  );
}

