import {
  Grid,
  Image,
} from "@chakra-ui/react";
import uuid from "react-uuid";
import { useState, useEffect, ReactElement } from "react";

export const GALLERY_MODES: any[] = [
  // Mobile
  {
    card_width   : 150,
    card_columns : 2,
    gap: 30,
    // min_width = (2 cards) + (1 gap) + (left/right padding)
    min_width    : 2*150 + 1*30 + 2*50,
  }, 
  // Desktop (split-screen)
  {
    card_width   : 250,
    card_columns : 2,
    gap: 50,
    // min_width = (2 cards) + (1 gap) + (left/right padding)
    min_width    : 2*250 + 2*70,
  },
  // Desktop (full-screen)
  {
    card_width   : 250,
    card_columns : 4,
    gap: 50,
    // min_width = (4 cards) + 3 gaps + (left/right padding)
    min_width    : 4*250 + 3*30 + 2*70,
  }
];


export default function Gallery({ mode }: any) {
  const [images, setImages] = useState<ReactElement[]>([]);
  const IMAGES: string[] = ["gamer", "builder", "investor", "creator"];

  useEffect(() => {
    setImages([]);
    for (const IMAGE of IMAGES) {
      setImages(images => [...images, 
        <a 
          key={uuid()} 
          href="https://pm6hpw3zasy.typeform.com/to/kOc7e3N7"
          draggable={false}
        >
          <Image
            key={uuid()}
            src={`${IMAGE}.png`}
            width={`${GALLERY_MODES[mode].card_width}px`}
            height={`${GALLERY_MODES[mode].card_width}px`}
            borderRadius="10px"
            boxShadow="5px 5px 5px rgba(0, 0, 0, 0.5)"
            transition="all 200ms ease-in-out"
            userSelect="none"
            draggable={false}
            _hover={{
              transform: "scale(1.1)",
              boxShadow: "10px 10px 5px rgba(0, 0, 0, 0.5)"
            }}
          />
        </a>
      ]);
    }
  }, [mode]);

  return (
    <Grid
      id="images-gallery"
      templateColumns={`repeat(
        ${GALLERY_MODES[mode].card_columns}, 
        minmax(${GALLERY_MODES[mode].card_width}px, 1fr)
      )`}
      gap={`${GALLERY_MODES[mode].gap}px`}
      height="min-content"
    >
      {images}
    </Grid>
  );
}

