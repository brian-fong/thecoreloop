// Components
import {
  Button,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";

// Hooks
import { useEffect, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { useSession, signIn, signOut } from "next-auth/react";

// Types
import type { ReactElement } from "react";

export default function ProfileDisplay() {

  // State variables
  const { data: session, status } = useSession();
  const [content, setContent] = useState<ReactElement>();

  // useDisclosure: SignUp Modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    console.log("Status: ", status);
    console.log("OAuth Data: ", session);

    if (status.toLowerCase() != "authenticated") {
      setContent(
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
          onClick={() => signIn("google")}
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

