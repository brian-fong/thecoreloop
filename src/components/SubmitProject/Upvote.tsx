// Components
import { Flex, Text } from "@chakra-ui/react";
import { VscTriangleUp as UpvoteIcon } from "react-icons/vsc";

// Hooks
import { useState } from "react";

export default function Upvote() {
  // State Variables
  const [upvotes, setUpvotes] = useState<number>(0);

  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      marginLeft="10px"
      padding="10px 0"
      width="80px"
      minWidth="80px"
      maxWidth="80px"
      height="115px"
      border="1px solid white"
      borderRadius="5px"
      cursor="pointer"
      userSelect="none"
      onClick={() => setUpvotes(upvotes => upvotes+1)}
      transition="all 200ms ease-in-out"
      _hover={{ background: "rgba(255, 255, 255, 0.1)" }}
      _active={{ background: "rgba(255, 255, 255, 0.2)" }}
    >
      <UpvoteIcon color="white" size="25px" />
      <Text fontSize="16px">
        {upvotes}
      </Text>
    </Flex>
  );
}

