// Components
import { Flex, Text } from "@chakra-ui/react";

export default function Description({ description }: any) {
  return (
    <Flex
      flexDirection="row"
      justifyContent="start"
      alignItems="start"
      width="100%"
      height="100%"
    >
      <Text
        padding="0"
        width="100%"
        minWidth="320px"
        height="100%"
        color="white"
        fontSize="16px"
        border="1px solid transparent"
      >
        {description}
      </Text>
    </Flex>
  );
}

