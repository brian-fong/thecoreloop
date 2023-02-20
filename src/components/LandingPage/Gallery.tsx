import {
  Grid,
  Image,
  Link,
} from "@chakra-ui/react";
import uuid from "react-uuid";
import PlayerImage from "./PlayerImage";
import { useState, useEffect, ReactElement } from "react";

const min_image_width: number = 150;

export default function Gallery({ screen_width }: any) {
  const [columns, setColumns] = useState<number>(4);
  const [images, setImages] = useState<ReactElement[]>([]);
  const PLAYERS: string[] = ["gamer", "builder", "investor", "creator"];

  useEffect(() => {
    if (screen_width < 4*min_image_width + 3*50 + 100) setColumns(2);
    else setColumns(4);
  }, [screen_width]);

  useEffect(() => {
    setImages([]);
    for (const player of PLAYERS) {
      setImages(images => [...images, 
        <PlayerImage key={uuid()} player={player} />
      ]);
    }
  }, [columns]);

  return (
    <Grid
      id="gallery-container"
      templateColumns={`repeat(
        ${columns}, 
        minmax(${min_image_width}px, 300px)
      )`}
      gap="50px"
      justifyContent="center"
      alignItems="center"
      padding="20px 50px"
      width="100%"
    >
      {images}
    </Grid>
  );
}

