import {
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import { pressBtn } from "../../utils/animations";

export default function SubmitBtn() {
  return (
    <Button
      id="submit-btn"
      type="submit"
      color="white"
      backgroundColor="tcl_green"
      boxShadow="3px 3px 2px rgba(0, 0, 0, 0.5)"
      transition={`
        background-color 200ms ease-in,
        transform 100ms ease-in,
        box-shadow 100ms 0 ease-in
      `}
      _hover={{
        backgroundColor: "tcl_green_hover",
      }}
    >
      <Flex
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        gap="0.5rem"
      >
        SUBMIT
      </Flex>
    </Button>
  );
}

