// Components
import {
  Text,
  Tooltip,
} from "@chakra-ui/react";

export default function FundraisingIcon({ style = "emoji" }: any) {
  if (style == "emoji") {
    return (
      <Tooltip
        label="Currently fundraising"
        placement="top-start"
        arrowSize={12}
        hasArrow
      >
        <Text
          padding="2px"
          color="white"
          fontSize="22px"
          background="gray.500"
          border="1px solid transparent"
          borderRadius="full"
          whiteSpace="nowrap"
          userSelect="none"
          transition="all 200ms ease-in-out"
        >
          💸
        </Text>
      </Tooltip>
    );
  } else if (style == "label") {
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
        💸 Raising
      </Text>
    );
  } else {
    return null;
  }
}

