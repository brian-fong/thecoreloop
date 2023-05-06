// Components
import {
  Box,
  Flex,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { BsReplyFill as ReplyIcon } from "react-icons/bs";
import { IoMdThumbsUp as UpvoteIcon } from "react-icons/io";
import { GoAlert as ReportIcon } from "react-icons/go";
import CommentOptionsPopover from "./CommentOptionsPopover";

export default function Comment({
  user = { name: "", image: "" },
  date = "",
  content = "",
  level = 0,
  upvotes = 0,
}: any) {
  return (
    <Flex
      flexDirection="row"
      justifyContent="start"
      alignItems="start"
      gap="10px"
      marginLeft={`${level * 30}px`}
      padding="10px"
      background="gray.700"
      borderRadius="5px"
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

      <Flex flexDirection="column">
        <Link
          // Username
          variant="underline"
          width="min-content"
          color="white"
          backgroundImage="linear-gradient(#FFFFFF 0 0)"
        >
          {user.name}
        </Link>

        {/* Story Body */}
        <Flex
          flexDirection="column"
          padding="10px"
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
            alignItems="center"
            gap="15px"
            marginTop="10px"
          >
            <Flex
              // Upvote container
              alignItems="center"
              gap="5px"
              background="gray.700"
              borderRadius="5px"
              cursor="pointer"
            >
              <Box
                padding="4px"
                height="100%"
                backgroundColor="gray.600"
                borderRadius="5px 0 0 5px"
              >
                <UpvoteIcon size="16px" />
              </Box>
              <Text padding="0 6px 0 2px">
                {upvotes}
              </Text>
            </Flex>

            <Flex
              // Reply Container
              alignItems="center"
              gap="5px"
              background="gray.700"
              borderRadius="5px"
              cursor="pointer"
            >
              <Box
                padding="4px"
                height="100%"
                backgroundColor="gray.600"
                borderRadius="5px 0 0 5px"
              >
                <ReplyIcon size="16px" />
              </Box>
              <Text padding="0 6px 0 2px">
                Reply
              </Text>
            </Flex>

            <CommentOptionsPopover />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

