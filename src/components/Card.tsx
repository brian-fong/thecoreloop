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

export function Card_Landscape(
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
      id="card-landscape"
      flexDir="column" 
      justify="center" 
      align="center" 
      width="100%"
    >
      { /* Container 1: caption */ }
      <Text 
        fontSize="14px" 
        fontStyle="italic" 
        color="black"  
        m="0px 0px 5px 0px" 
        width="100%"
      >
        {caption}
      </Text>

      { /* Container 2: title, description, image, source, category */ }
      <Flex 
        flexDir="row" 
        gap="10px" 
        justify="start" 
        align="start" 
        width="100%"
      >
        { /* Container 2.1: image */ }
        <Link 
          href={url} 
          target="_blank" 
          draggable="false"
          width="100%"
          maxWidth="400px" 
          height="100%"
        >
          <Flex 
            id="image_container"
            flexDir="column" 
            justify="center" 
            align="center" 
            width="100%"
            maxWidth="400px" 
            height="100%"
            bg={image_bg} 
            border="1px solid black" 
            boxSizing="border-box" 
          >
            <Image 
              src={image} 
              alt={image || "Image not found"} 
              objectFit="cover" 
              fontSize="14px" 
              textAlign="center"
              draggable="false" 
              loading="lazy"
              _hover={{ cursor: "pointer" }}
            />
          </Flex>
        </Link>

        { /* Container 2.2: title, description, category, source */ }
        <Flex 
          flexDir="column" 
          shrink="1" 
          justify="space-between" 
          align="start" 
          height="100%"
           width="100%"
        >
          { /* Container 2.2.1: title, description */ }
          <Flex 
            flexDir="column" 
            justify="start" 
            align="start" 
            width="100%"
          >
            { /* Title */ }
            <Link 
              id="title"
              fontSize="14px" 
              fontWeight="800" 
              color="blue"  
              width="100%"
              href={url} 
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

            { /* Description */ }
            <Text 
              fontSize="14px" 
              textAlign="left" 
              lineHeight="1.2" 
              color="black" 
              p="5px 0px 30px"
            >
              {description}
            </Text>
          </Flex>
          { /* Container 2.2.2: category/source */ }
          <Flex 
            flexDir="column" 
            justify="end" 
            align="start" 
            wrap="wrap" 
            width="100%"
          >
            { /* Category */ }
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
            { /* Source */ }
            <Text 
              p="2px 0px 0px"
              fontSize="13px" 
              color="black" 
            >
              Source: {source}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export function Card_Portrait(
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
        margin="5px 0px"
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
        color="black" 
        m="0px 0px 10px"
      >
        {description}
      </Text>

      { /* Container: Category & Source */}
      <Flex
        flexDirection="row"
        justify="space-between"
        align="center"
        width="100%"
      >
        { /* Category */ }
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
        { /* Source */ }
        <Text 
          fontSize="13px" 
          color="black" 
        >
          Source: {source}
        </Text>
      </Flex>
    </Flex>
  );
}

