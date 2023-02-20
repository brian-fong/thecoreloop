import {
  Grid,
  Image,
  Link,
} from "@chakra-ui/react";
import uuid from "react-uuid";
import { useState, useEffect, ReactElement } from "react";

export default function Gallery({ screen_width }: any) {
  const [columns, setColumns] = useState<number>(4);
  const [images, setImages] = useState<ReactElement[]>([]);
  const IMAGES: string[] = ["gamer", "builder", "investor", "creator"];

  useEffect(() => {
    if (screen_width < 750) setColumns(2);
    else setColumns(4);
  }, [screen_width]);

  useEffect(() => {
    setImages([]);
    for (const IMAGE of IMAGES) {
      setImages(images => [...images, 
        <Link key={uuid()} href="https://pm6hpw3zasy.typeform.com/to/kOc7e3N7">
          <Image
            key={uuid()}
            src={`${IMAGE}.png`}
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
  }, [columns]);

  return (
    <Grid
      id="gallery-container"
      templateColumns={`repeat(
        ${columns}, 
        minmax(100px, 300px)
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

