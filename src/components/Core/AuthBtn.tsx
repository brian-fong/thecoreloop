import {
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import { FcGoogle as GoogleIcon } from "react-icons/fc";
import { FaTwitter as TwitterIcon } from "react-icons/fa";
import { pressBtn } from "../../utils/animations";

export default function AuthBtn({ provider }: any) {
  const PROVIDERS: any = {
    google: {
      icon: <GoogleIcon size="1.2rem" />,
      text: "Google",
    },
    twitter: {
      icon: <TwitterIcon size="1.2rem" color="#1DA1F2" />,
      text: "Twitter",
    },
  };

  async function handleClick(event: any): Promise<void> {
    await pressBtn(event.currentTarget);
    signIn(provider);
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
        {PROVIDERS[provider].icon}
        <Text>{PROVIDERS[provider].text}</Text>
      </Flex>
    </Button>
  );
}

