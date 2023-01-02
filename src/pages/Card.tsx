// ChakraUI
import { 
  Flex,
  Text,
  Link,
  Image,
} from '@chakra-ui/react'

export type CardProps = {
  url: string;
  caption: string; 
  title: string; 
  description: string; 
  category: string; 
  source: string;
  image: string;
};

export default function Card({ 
    url="URL not found",
    caption="A look at . . . ", 
    title="Title not found (×﹏×)", 
    description="Description not found", 
    category="Category not found", 
    source="???",
    image=" Image not found (⊙_⊙) " 
  }: CardProps) {

  return (
    <Flex flexDir="column" justify="center" align="start" width="100%">
      { /* Container 1: caption */ }
      <Text color="black" fontSize="14px" fontStyle="italic" m="0px 0px 5px 0px" width="100%">
        {caption}
      </Text>
      { /* Container 2: title/description/category/image/source */ }
      <Flex flexDir="row" gap="10px" justify="start" align="start" width="100%">
        { /* Container 2.1: image */ }
        <Flex flexDir="column" shrink="2" justify="center" align="center" maxWidth="250px" height="100%"
          bg="black" border="1px solid black" boxSizing="border-box" 
        >
          <Link href={url} target="_blank" draggable="false">
            <Image src={image} objectFit="cover" alt={image} 
              fontSize="15px" textAlign="center"
              draggable="false" loading="lazy"
              _hover={{ cursor: "pointer"}}
            />
          </Link>
        </Flex>
        { /* Container 2.2: title/description/category/source */ }
        <Flex flexDir="column" shrink="1" justify="space-between" align="start" height="100%" width="100%">
          { /* Container 2.2.1: title/description */ }
          <Flex flexDir="column" justify="start" align="start" width="100%">
            { /* Title */ }
            <Link color="blue" fontSize="14px" fontWeight="800" width="100%"
              transition="background-color 200ms ease" 
              _hover={{ textDecoration: "underline", cursor: "pointer", color: "white", bg: "blue" }}
              href={url} target="_blank" draggable="false"
            >
              {title}
            </Link>
            { /* Description */ }
            <Text color="black" fontSize="14px" textAlign="left" lineHeight="1.2" p="5px 0px 10px">
              {description}
            </Text>
          </Flex>
          { /* Container 2.2.2: category/source */ }
          <Flex flexDir="row" justify="space-between" align="center" wrap="wrap" width="100%">
            <Flex flexDir="row" gap="15px" justify="start" align="center">
              { /* Category */ }
              <Text color="white" bg="category_bkg" fontSize="13px" p="1px 2px" 
                transition="background-color 200ms ease" 
                _hover={{ textDecoration: "underline", cursor: "pointer", bg: "category_bkg_hover" }}
              >
                {category}
              </Text>
            </Flex>
            <Flex flexDir="row" justify="end" align="center">
              { /* Source */ }
              <Text color="black" fontSize="13px">
                Source: {source}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

