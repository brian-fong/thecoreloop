// ChakraUI
import { 
  Flex,
  Text,
  Link,
  Image,
} from '@chakra-ui/react'

// React
import { useEffect, useState } from "react";

// Types
import { Card as CardProps } from '../types';

export default function Card_Portrait(
  { 
    url="",
    caption="A look at . . . ", 
    title="Title not found (×﹏×)", 
    description="Description not found", 
    image="",
    category="", 
    source="???",
  }: CardProps) {

  const [image_bg, setImage_bg] = useState("black");

  useEffect(() => {
    // Change background color for images with default Twitter logo 
    if (image.includes("https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png")) {
      setImage_bg("white");
    }
  }, []);

  return (
    <Flex 
      id="card-portrait"
      flexDir="column" 
      gap="5px"
      justify="space-between" 
      align="center" 
      width="100%"
      height="min-content"
    >
      { /* Caption */ }
      <Text 
        fontSize="14px" 
        fontStyle="italic" 
        color="black"  
        width="100%"
      >
        {caption}
      </Text>

      { /* Image */}
      <Link 
        href={url} 
        target="_blank" 
        draggable="false"
        width="100%"
        height="100%"
      >
        <Flex 
          id="image_container"
          flexDir="column" 
          justify="center" 
          align="center" 
          width="100%"
          height="100%"
          bg={image_bg} 
          border="1px solid black" 
          boxSizing="border-box" 
          overflow="hidden"
        >
          <Image 
            src={image} 
            alt={image || "Image not found"} 
            objectFit="contain" 
            width="100%"
            height="100%"
            maxHeight="175px"
            fontSize="14px" 
            textAlign="center"
            draggable="false" 
            loading="lazy"
            _hover={{ cursor: "pointer" }}
          />
        </Flex>
      </Link>

      { /* Title */}
      <Link 
        id="title"
        href={url} 
        width="100%"
        fontSize="14px" 
        fontWeight="800" 
        color="blue"  
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
        {title}
      </Link>

      { /* Description */}
      <Text 
        fontSize="14px" 
        textAlign="left" 
        lineHeight="1.2" 
        color="description_fg"
      >
        {description}
      </Text>

      { /* Category */}
      <Flex 
        flexDir="row"
        justify="start" 
        align="start" 
        width="100%"
      >
        <Text 
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
          {category}
        </Text>
      </Flex>

      { /* Source */}
      <Text 
        width="100%"
        fontSize="13px" 
        color="black" 
      >
        Source: {source}
      </Text>
    </Flex>
  );
}

