import {
  Flex, 
  Image,
  Text,
} from "@chakra-ui/react";
import {
  BsFillChatRightFill
} from "react-icons/bs";
import {
  FaStar,
  FaRegStar,
} from "react-icons/fa";
import { useState } from "react";


export default function MainCard({
  image, 
  title, 
  description, 
  comment_count, 
  stage, 
  genre, 
  upvote_count,
}: any) {
  const [hovering, setHovering] = useState<boolean>(false);

  return (
    <Flex
      flexDirection="row"
      justifyContent="start"
      alignItems="center"
      gap="2rem"
      width="100%"
    >
      {/* Image Container */}
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
        maxWidth="100px"
        height="100%"
      >
        <Image
          src={image}
          alt={title}
          objectFit="cover"
          loading="lazy"
          cursor="pointer"
        />
      </Flex>

      {/* Description Container */}
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        alignItems="start"
        width="100%"
        height="100%"
      >
        <Text
          fontSize="1rem"
          fontWeight="800"
        >
          {title}
        </Text>
        <Text>
          {description}
        </Text>
        <Flex
          flexDirection="row"
          justifyContent="start"
          alignItems="center"
          width="100%"
          height="100%"
        >
          <Flex
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            gap="1.5rem"
          >
            <Flex
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
            >
              <BsFillChatRightFill 
                style={{
                  position: "relative",
                  bottom: "2px"
                }}
              />
              <Text>{comment_count}</Text>
            </Flex>
            <Text>{stage}</Text>
            <Text>{genre}</Text>
          </Flex>
        </Flex>
      </Flex>

      {/* Upvote Container */}
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="0.5rem"
        padding="1rem 1rem 0.5rem"
        border="1px solid white"
        transition="all 200ms ease-in"
        cursor="pointer"
        onMouseOver={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        _hover={{
          borderColor: ""
        }}
      >
        {hovering 
          ? <FaStar size="1rem" />
          : <FaRegStar size="1rem" />
        }
        <Text>{upvote_count}</Text>
      </Flex>
    </Flex>
  );
}

