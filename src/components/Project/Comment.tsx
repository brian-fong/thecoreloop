// Components
import {
  Box,
  Flex,
  Image,
  Link,
  Text
} from "@chakra-ui/react";
import {
  IoMdThumbsUp as UpvoteIcon,
} from "react-icons/io";

export default function Comment({
  user = { name: "", image: "" },
  date = "",
  content = "",
  upvotes = 0,
}: any) {
  return (
    <Flex
      flexDirection="column"
      width="100%"
      background="rgba(0, 0, 0, 0.4)"
      borderRadius="5px"
    >
      {/* Story Header */}
      <Flex
        flexDirection="row"
        justifyContent="start"
        alignItems="center"
        gap="10px"
        padding="5px"
        width="100%"
        background="gray.600"
        borderRadius="5px 5px 0 0 "
      >
        <Image
          // Profile Picture
          src={user.image}
          width="48px"
          height="48px"
          borderRadius="5px"
          // borderRadius="full"
          cursor="pointer"
          draggable={false}
        />

        <Flex
          flexDirection="column"
          justifyContent="space-between"
          height="48px"
        >
          <Link
            // Username
            variant="underline"
            color="white"
            backgroundImage="linear-gradient(#FFFFFF 0 0)"
          >
            {user.name}
          </Link>
        </Flex>
      </Flex>

      {/* Story Body */}
      <Flex
        flexDirection="column"
        justifyContent="start"
        padding="5px 0 10px"
        width="100%"
      >
        <Flex
          flexDirection="column"
          marginLeft="15px"
          padding="10px 10px 10px 15px"
          gap="10px"
          borderLeft="1px solid white"
        >
          <Text
            whiteSpace="pre-line"
            wordBreak="break-word"
            userSelect="text"
            style={{ hyphens: "auto", wordWrap: "break-word" }}
          >
            {content}
          </Text>

          {/* Story Footer */}
          <Flex
            gap="15px"
          >
            <Flex
              // Upvote container
              justifyContent="space-between"
              alignItems="center"
              gap="5px"
              background="gray.700"
              borderRadius="5px"
              cursor="pointer"
              transition="all 200ms ease-in-out"
              _hover={{
              }}
            >
              <Box
                padding="4px"
                height="100%"
                backgroundColor="gray.600"
                borderRadius="5px 0 0 5px"
              >
                <UpvoteIcon size="18px" />
              </Box>
              <Text padding="0 6px 0 2px">
                {upvotes}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

