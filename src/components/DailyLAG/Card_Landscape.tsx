import { 
  Flex,
  Text,
  Link,
  Image,
} from '@chakra-ui/react'
import { useEffect, useState } from "react";

export default function Card_Landscape({ article }: any) {
  if (!article.title) article.title = "title not found (×﹏×)";
  if (!article.description) article.description = "Description not found";
  if (!article.image) article.image = "Image not found ╥﹏╥";
  if (!article.source) article.source = "Unknown";

  const [image_bg, setImage_bg] = useState("black");

  useEffect(() => {
    // Change background color for images with default Twitter logo 
    if (article.image.includes(
      "https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"
    )) {
      setImage_bg("white");
    }
  }, []);

  return (
    <Flex 
      id="card-container"
      flexDir="column" 
      justify="center" 
      align="center" 
      width="100%"
    >
      { /* Caption */ }
      <Text 
        fontSize="14px" 
        fontStyle="italic" 
        color="tcl_purple"  
        m="0px 0px 5px 0px" 
        padding="2px 5px"
        width="100%"
      >
        {article.caption}
      </Text>

      { /* Container: Title, Description, Image, Source, Category */ }
      <Flex 
        flexDir="row" 
        gap="10px" 
        justify="start" 
        align="start" 
        width="100%"
      >
        { /* Thumbnail */ }
        <Link 
          href={article.url} 
          target="_blank" 
          draggable="false"
          width="100%"
          maxWidth="400px" 
          height="100%"
          border="1px solid black" 
        >
          <Flex 
            id="thumbnail_container"
            flexDir="column" 
            justify="center" 
            align="center" 
            width="100%"
            maxWidth="400px" 
            height="100%"
            bg={image_bg} 
            boxSizing="border-box" 
          >
            <Image 
              id="thumbnail"
              src={article.image} 
              alt={article.image || "Image not found ╥﹏╥"} 
              objectFit="cover" 
              color="white"
              fontSize="14px" 
              textAlign="center"
              draggable="false" 
              loading="lazy"
              _hover={{ cursor: "pointer" }}
            />
          </Flex>
        </Link>

        { /* Container: Title, Description, Category, Source */ }
        <Flex 
          flexDir="column" 
          shrink="1" 
          justify="space-between" 
          align="start" 
          height="100%"
           width="100%"
        >
          <Flex
            flexDir="column"
            justify="space-between"
            align="start"
            width="100%"
          >
            { /* Title */ }
            <Link 
              id="title"
              fontSize="14px" 
              fontWeight="800" 
              textAlign="justify" 
              color="blue"  
              width="100%"
              href={article.url} 
              target="_blank" 
              transition="background-color 200ms ease" 
              _hover={{ 
                color: "white",
                bg: "blue",
                textDecoration: "underline", 
                cursor: "pointer", 
              }}
              draggable="false"
            >
              {article.title}
            </Link>

            { /* Description */ }
            <Text 
              fontSize="13px" 
              textAlign="justify" 
              lineHeight="1.2" 
              color="black"
              p="0px 0px 30px"
            >
              {article.description}
            </Text>
          </Flex>

          <Flex
            flexDir="column"
            justify="space-between"
            align="start"
            padding="2px 0px"
            width="100%"
          >
            { /* Category */ }
            <Text 
              m="5px 0px"
              fontSize="13px" 
              color="white" 
              bg="category_bkg" 
              transition="background-color 200ms ease" 
              _hover={{ 
                bg: "category_bkg_hover",
                cursor: "pointer", 
                textDecoration: "underline", 
              }}
            >
              {article.category}
            </Text>

            { /* Source */ }
            <Text 
              fontSize="13px" 
              lineHeight="0.9"
              color="black" 
            >
              Source: {article.source}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

