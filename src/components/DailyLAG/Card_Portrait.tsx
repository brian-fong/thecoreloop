import { 
  Flex,
  Text,
  Link,
  Image,
} from '@chakra-ui/react'
import { useEffect, useState } from "react";

export default function Card_Portrait({ article }: any) {
  if (!article.title) article.title = "title not found (×﹏×)";
  if (!article.description) article.description = "Description not found";
  if (!article.image) article.image = "Image not found ╥﹏╥";
  if (!article.source) article.source = "Unknown";

  const [image_bg, setImage_bg] = useState("black");

  useEffect(() => {
    // Change background color for images with default Twitter logo 
    if (article.image.includes("https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png")) {
      setImage_bg("white");
    }
  }, []);

  return (
    <Flex 
      id="card-container"
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
        color="tcl_purple"  
        width="100%"
      >
        {article.caption}
      </Text>

      { /* Image */}
      <Link 
        href={article.url} 
        target="_blank" 
        draggable="false"
        width="100%"
        height="100%"
        border="1px solid black" 
      >
        <Flex 
          id="image_container"
          flexDir="column" 
          justify="center" 
          align="center" 
          width="100%"
          height="100%"
          color="white"
          bg={image_bg} 
          boxSizing="border-box" 
          overflow="hidden"
        >
          <Image 
            src={article.image} 
            alt={article.image || "Image not found"} 
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
        href={article.url} 
        width="100%"
        fontSize="14px" 
        fontWeight="800" 
        color="blue"  
        textAlign="justify"
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

      { /* Description */}
      <Text 
        width="100%"
        fontSize="14px" 
        textAlign="justify" 
        lineHeight="1.2" 
        color="black"
      >
        {article.description}
      </Text>

      { /* Container: Category + Source */}
      <Flex 
        flexDir="column"
        justify="start" 
        marginTop="5px"
        align="start" 
        width="100%"
      >
        { /* Category */}
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
          {article.category}
        </Text>
        { /* Source */}
        <Text 
          width="100%"
          fontSize="13px" 
          color="black" 
        >
          Source: {article.source}
        </Text>
      </Flex>
    </Flex>
  );
}
