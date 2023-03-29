import {
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import {
  RiArrowUpSFill
} from "react-icons/ri";

export default function Card({
  title,
  image,
  description, 
  genre,
  stage,
  upvote_count = 0,
}: any) {

  function shortenDesc(desc: string) {
    const char_limit: number = 100;
    if (desc.length > char_limit) return desc.slice(0, char_limit) + "...";
    else return desc;
  }

  return (
    <Flex
      flexDirection="row"
      justifyContent="start"
      alignItems="center"
      gap="20px"
      width="100%"
      minHeight="88px"
      height="100%"
    >
      <Image
        src={image}
        objectFit="cover"
        width="88px"
        height="88px"
        borderRadius="50%"
      />
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        alignItems="start"
        gap="8px"
        padding="10px 0"
        height="100%"
      >
        <Heading 
          fontSize="20px"
          fontWeight="700"
        >
          {title}
        </Heading>
        <Text 
          fontSize="16px"
        >
          {shortenDesc(description)}
        </Text>
        <Flex
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          gap="50px"
          color="white"
        >
          <Text>{genre}</Text>
          <Text>{stage}</Text>
        </Flex>
      </Flex>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="0.5rem"
        marginLeft="auto"
        padding="1rem 1rem 0.5rem"
        background="rgba(255, 255, 255, 0.1)"
        border="1px solid white"
        cursor="pointer"
      >
        <RiArrowUpSFill 
          size="28px" 
          color="white"
        />
        <Text fontSize="14px">{upvote_count}</Text>
      </Flex>
    </Flex>
  );
}

