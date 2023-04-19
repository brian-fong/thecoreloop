// Components
import {
  Button,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import StartButton from "./StartButton";

// Hooks
import { useEffect, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { useSession, signOut } from "next-auth/react";

// Types
import type { ReactElement } from "react";

export default function ProfileDisplay() {

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
        <Image
          src={session?.user?.image!}
          objectFit="cover"
          borderRadius="50%"
          marginRight="20px"
          width="50px"
          minWidth="50px"
          height="50px"
          minHeight="50px"
          boxShadow="3px 3px 3px black"
          cursor="pointer"
          onClick={() => signOut()}
          transition="filter 200ms ease-in-out"
          _hover={{
            filter: "brightness(80%)",
          }}
        />
      );
    }
  }, [session]);

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

