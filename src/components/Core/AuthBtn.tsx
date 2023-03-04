import {
  Button,
  Flex,
} from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import pressBtn from "../../utils/press-btn";

export default function AuthBtn() {
  async function handleClick(event: any): Promise<void> {
    await pressBtn(event.currentTarget);
    signIn("google");
  }

  return (
    <Button
      backgroundColor="category_bkg"
      boxShadow="3px 3px 2px rgba(0, 0, 0, 0.5)"
      transition="filter 200ms ease-in"
      _hover={{
        filter: "brightness(0.8)",
      }}
      _active={{}}
      onClick={(event) => handleClick(event)}
    >
      <Flex
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        gap="0.5rem"
      >
        <FcGoogle size="1.2rem" />
        Continue with Google
      </Flex>
    </Button>
  );
}

