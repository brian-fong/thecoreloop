// Components
import { Link, Text } from "@chakra-ui/react";

export default function Studio({ studio }: any) {
  return (
    <Text
      width="100%"
      color="white"
      fontSize="16px"
      fontWeight="700"
      whiteSpace="nowrap"
      userSelect="none"
    >
      Created by{" "}
      <Link
        variant="underline"
        color="gray.400"
        backgroundImage="linear-gradient(#A0AEC0 0 0)"
      >
        {studio}
      </Link>
    </Text>
  );
}

