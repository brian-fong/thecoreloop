// Components
import { Text } from "@chakra-ui/react";

export default function Name({ name }: any) {
  return (
    <Text
      padding="0"
      color="white"
      fontSize="20px"
      fontWeight="700"
      lineHeight="none"
      border="1px solid transparent"
      whiteSpace="nowrap"
      userSelect="none"
    >
      {name}
    </Text>
  );
}

