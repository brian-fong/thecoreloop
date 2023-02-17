import {
  Grid,
  Image,
} from "@chakra-ui/react";
import uuid from "react-uuid";
import { useState, useEffect, ReactElement } from "react";

export default function Gallery({ cols }: any) {
  const [images, setImages] = useState<ReactElement[]>([]);
  const IMAGES: string[] = ["gamer", "builder", "investor", "creator"];

  useEffect(() => {
    setImages([]);
    if (cols > 1) {
      for (const IMAGE of IMAGES) {
        setImages(images => [...images, <Image
          key={uuid()}
          src={`${IMAGE}.png`}
          width="250px"
          borderRadius="10px"
          boxShadow="5px 5px 5px rgba(0, 0, 0, 0.5)"
          loading="lazy"
        />]);
      }
    } else {
        setImages([<Image
          key={uuid()}
          src="gamer.png"
          width="250px"
          borderRadius="10px"
          boxShadow="5px 5px 5px rgba(0, 0, 0, 0.5)"
          loading="lazy"
        />]);
    }
  }, [cols]);

  return (
    <Grid
      id="images-gallery"
      templateColumns={`repeat(${cols}, minmax(250px, 1fr))`}
      gap="30px"
      padding="30px"
      height="min-content"
    >
      {images}
    </Grid>
  );
}

