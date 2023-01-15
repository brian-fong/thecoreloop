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

export default function Card(
  { 
    key="",
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
    if (image.includes("https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png")) setImage_bg("white");

    // Enable hover effect between title & image 
    const image_container: HTMLElement = document.getElementById("image_container")!;
    const title_node: HTMLElement = document.getElementById("title")!;
    image_container.addEventListener("mouseover", () => {
      title_node.style.color="white";
      title_node.style.background = "blue";
    });
    image_container.addEventListener("mouseout", () => {
      title_node.style.color="blue";
      title_node.style.background = "transparent";
    });
  }, []);

  return (
    <Flex 
      id={key}
      flexDir="column" 
      justify="center" 
      align="start" 
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
          <Link 
            href={url} 
            target="_blank" 
            draggable="false"
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
          </Link>
        </Flex>

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
            flexDir="row" 
            justify="space-between" 
            align="center" 
            wrap="wrap" 
            width="100%"
          >
            <Flex 
              flexDir="row" 
              justify="start" 
              align="center"
            >
              { /* Category */ }
              <Text 
                fontSize="13px" 
                color="white" 
                bg="category_bkg" 
                m="0px 40px 0px 0px" 
                p="0px 1px"
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
            <Flex 
              flexDir="row" 
              justify="end" 
              align="center"
            >
              { /* Source */ }
              <Text fontSize="13px" color="black" >
                Source: {source}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

