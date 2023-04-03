// Components
import {
  Text,
} from "@chakra-ui/react";

export default function FundraisingIcon({ style = "icon-only" }: any) {
  return (
    <Text
      padding="2px 8px"
      color="white"
      fontSize="16px"
      background="gray.700"
      border="1px solid transparent"
      borderRadius="10px"
      whiteSpace="nowrap"
      userSelect="none"
      transition="all 200ms ease-in-out"
    >
      👋 {style == "icon-only" ? null : "Raising"}
    </Text>
  )
}

