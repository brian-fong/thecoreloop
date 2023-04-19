// Components
import { Input } from "@chakra-ui/react";

export default function ExploreInput() {
  return (
    <Input
      type="text"
      placeholder="EXPLORE"
      margin="0"
      padding="5px 10px"
      width="min-content"
      maxWidth="200px"
      height="min-content"
      fontSize="18px"
      background="transparent"
      borderRadius="5px"
      transition="all 300ms ease-in-out"
      _placeholder={{
        color: "gray.400",
        opacity: "100%",
        fontSize: "18px",
        fontWeight: "700",
      }}
      _focusVisible={{
        background: "rgba(0, 0, 0, 0.6)",
      }}
      _hover={{
        background: "rgba(0, 0, 0, 0.6)",
      }}
      border="none"
    />
  );
}

