// Components
import {
  Button,
  Flex,
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

  // Popover dimensions (in pixels)
  const popover_width: number = 130;

  function handleStart(provider: string): void {
    // Prompt user to sign in
    signIn(provider);
  }

  return (
    <Popover offset={[-40, 0]}>
      <PopoverTrigger>
        <Button
          display="flex"
          flexDirection="row"
          justifyContent="start"
          alignItems="center"
          marginRight="20px"
          padding="5px 10px"
          height="min-content"
          color="gray.400"
          fontSize="18px"
          background="transparent"
          // onClick={() => signIn("google")}
          transition="all 200ms ease-in-out"
          _focusVisible={{ 
            color: "gray.300",
            background: "rgba(0, 0, 0, 0.3)",
            borderRadius: "10px",
          }}
          _hover={{
            color: "gray.200",
          }}
          _active={{}}
        >
          START
        </Button>
      </PopoverTrigger>
      <PopoverContent
        display="flex"
        flexDirection="column"
        justifyContent="start"
        alignItems="start"
        width={`${popover_width}px`}
        background="#1A1B23"
        border="none"
        borderRadius="5px"
      >
        <Button
          display="flex"
          flexDirection="row"
          justifyContent="start"
          alignItems="center"
          gap="15px"
          width="100%"
          borderRadius="5px 5px 0 0"
          onClick={() => handleStart("google")}
        >
          <GoogleIcon size="15px" />
          <Text>GOOGLE</Text>
        </Button>
        <Button
          display="flex"
          flexDirection="row"
          justifyContent="start"
          alignItems="center"
          gap="15px"
          width="100%"
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

