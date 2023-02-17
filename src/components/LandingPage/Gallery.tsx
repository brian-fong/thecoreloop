import {
  Grid,
  Image,
  Link,
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
        setImages(images => [...images, 
          <Link key={uuid()} href="https://pm6hpw3zasy.typeform.com/to/kOc7e3N7">
            <Image
              key={uuid()}
              src={`${IMAGE}.png`}
              width="250px"
              borderRadius="10px"
              boxShadow="5px 5px 5px rgba(0, 0, 0, 0.5)"
              transition="all 200ms ease-in-out"
              _hover={{
                transform: "scale(1.1)",
                boxShadow: "10px 10px 5px rgba(0, 0, 0, 0.5)"
              }}
            />
          </Link>
        ]);
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
      gap="50px"
      padding="30px"
      height="min-content"
    >
      {images}
    </Grid>
  );
}

