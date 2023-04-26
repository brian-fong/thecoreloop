// Components
import { Text } from "@chakra-ui/react";

export default function Genres({ genres }: any) {
  return (
    <Text
      padding="2px 8px"
      color="white"
      fontSize="16px"
      fontWeight="700"
      background="gray.700"
      border="1px solid transparent"
      borderRadius="10px"
      userSelect="none"
    >
      🏷️ {genres.sort().join(" • ")}
    </Text>
  );
}

