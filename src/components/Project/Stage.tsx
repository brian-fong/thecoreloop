// Components
import { Text } from "@chakra-ui/react";

// Stages of development
import { STAGES } from "../../data/stages";

export default function Stage({ stage }: any) {
  return (
    <Text
      padding="2px 8px"
      color="white"
      fontSize="16px"
      fontWeight="700"
      background="gray.700"
      border="1px solid transparent"
      borderRadius="10px"
      whiteSpace="nowrap"
      userSelect="none"
    >
      {STAGES[stage]} {stage}
    </Text>
  );
}

