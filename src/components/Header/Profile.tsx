// Components
import {
  Button,
  Flex,
  Image,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import StartButton from "../Header/StartButton";

// Hooks
import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";

// Types
import type { ReactElement } from "react";

export default function Profile() {

  // Generic profile picture: thecoreloop icon
  const thecoreloop_icon: string = "https://i.imgur.com/2px36wp.png";

  // State variables
  const { data: session, status } = useSession();
  const [content, setContent] = useState<ReactElement>();

  useEffect(() => {
    console.log("Status: ", status);
    console.log("OAuth Data: ", session);

    if (status.toLowerCase() != "authenticated") {
      setContent(
        <StartButton />
      );
    } else if (status == "authenticated") {
      setContent(
        <Popover placement="bottom-start">
          <PopoverTrigger>
            <Button
              margin="0"
              padding="0"
              transition="all 200ms ease-in-out"
              _hover={{
                filter: "brightness(75%)",
              }}
            >
              <Image
                // src={session?.user?.image!}
                src={thecoreloop_icon}
                objectFit="cover"
                width="60px"
                height="60px"
                background="gray.700"
                borderRadius="full"
                boxShadow="3px 3px 3px black"
              />
            </Button>
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
            >
              <Text>PROFILE</Text>
            </Button>
            <Button
              variant="header_popover"
              borderRadius="0 0 5px 5px"
              onClick={() => signOut()}
            >
              <Text>LOG OUT</Text>
            </Button>
          </PopoverContent>
        </Popover>
      );
    }
  }, [session, status]);

  return (
    <Flex
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      marginLeft="auto"
      height="100%"
    >
      {content}
    </Flex>
  );
}

