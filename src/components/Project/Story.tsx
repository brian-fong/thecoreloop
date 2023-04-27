// Components
import { Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function Story({ story, submitter}: any) {
  return (
    <Flex
      flexDirection="column"
      gap="10px"
      width="100%"
      background="rgba(0, 0, 0, 0.3)"
      borderRadius="5px"
    >
      {/* Submitter Info */}
      <Flex
        flexDirection="row"
        justifyContent="start"
        alignItems="center"
        gap="10px"
        padding="10px"
        width="100%"
        background="gray.700"
        borderRadius="5px 5px 0 0 "
      >
        <Image
          src={submitter.image}
          width="48px"
          height="48px"
          borderRadius="full"
          draggable={false}
        />
        <Heading
          fontSize="15px"
        >
          @{submitter.username}
        </Heading>
      </Flex>

      {/* Story Content */}
      <Text
        margin="-5px 28px 0 34px"
        padding="10px"
        textAlign="justify"
        borderLeft="1px solid white"
        whiteSpace="pre-line"
        userSelect="text"
      >
        {story}
      </Text>
    </Flex>
  );
}

