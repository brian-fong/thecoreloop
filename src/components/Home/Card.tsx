import {
  Flex,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import {
  RiArrowUpSFill
} from "react-icons/ri";

export default function Card({
  image,
  name,
  website,
  description, 
  genre,
  stage,
  upvote_count = 0,
}: any) {
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
        padding="10px 0px"
        height="100%"
      >
        <Link href={website}>{name}</Link>
        <Text>{description}</Text>
        <Flex
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          gap="20px"
          color="rgba(255, 255, 255, 0.7)"
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
        border="1px solid white"
        cursor="pointer"
      >
        <RiArrowUpSFill size="28px" />
        <Text>{upvote_count}</Text>
      </Flex>
    </Flex>
  );
}

