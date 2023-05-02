// Components
import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Text,
} from "@chakra-ui/react";
import { BsTwitter as TwitterIcon } from "react-icons/bs";
import { FcGoogle as GoogleIcon } from "react-icons/fc";
// NextAuth
import { signIn } from "next-auth/react";

export default function StartButton() {
  function handleStart(provider: string): void {
    // Prompt user to sign in
    signIn(provider);
  }

  return (
    <Popover offset={[-35, 0]}>
      <PopoverTrigger>
        <Button variant="header_base">START</Button>
      </PopoverTrigger>
      <PopoverContent
        display="flex"
        flexDirection="column"
        justifyContent="start"
        alignItems="start"
        width="min-content"
        background="#1A1B23"
        border="none"
        borderRadius="5px"
      >
        <Button
          variant="header_popover"
          borderRadius="5px 5px 0 0"
          onClick={() => handleStart("google")}
        >
          <GoogleIcon size="15px" />
          <Text>GOOGLE</Text>
        </Button>
        <Button
          variant="header_popover"
          borderRadius="0 0 5px 5px"
          onClick={() => handleStart("twitter")}
        >
          <TwitterIcon color="#1DA1F2" size="15px" />
          <Text>TWITTER</Text>
        </Button>
      </PopoverContent>
    </Popover>
  );
}
