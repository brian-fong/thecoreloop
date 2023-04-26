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
        padding="15px"
        width="100%"
        background="gray.700"
        borderRadius="5px 5px 0 0 "
      >
        <Image
          src={submitter.image}
          width="48px"
          borderRadius="full"
        />
        <Heading
          fontSize="15px"
        >
          @{submitter.username}
        </Heading>
      </Flex>

      {/* Story Content */}
      <Text
        marginTop="-5px"
        marginLeft="48px"
        textAlign="justify"
        whiteSpace="pre-line"
        userSelect="text"
      >
        {story}
      </Text>
    </Flex>
  );
}

