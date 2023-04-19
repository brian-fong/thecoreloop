// Components
import {
  Button,
  Flex,
  Heading,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  Text,
} from "@chakra-ui/react";
import { BsTwitter as TwitterIcon } from "react-icons/bs";
import { FcGoogle as GoogleIcon } from "react-icons/fc";

// NextAuth
import { signIn } from "next-auth/react";

export default function SignInModal({ isOpen, onClose }: any) {

  // Modal dimensions (in pixels)
  const modal_width: number = 600;
  const modal_height: number = Math.floor(modal_width * 9/16);

  function handleStart(provider: string): void {
    // Prompt user to sign in
    signIn(provider);
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        display="flex"
        flexDirection="column"
        justifyContent="start"
        alignItems="start"
        padding="20px"
        width={`${modal_width}px`}
        minWidth={`${modal_width}px`}
        maxWidth={`${modal_width}px`}
        // height={`${modal_height}px`}
        // minHeight={`${modal_height}px`}
        // maxHeight={`${modal_height}px`}
        background="rgba(0, 0, 0, 0.2)"
        backdropFilter="blur(10px)"
        borderRadius="5px"
        // backgroundImage="./wassie.jpg"
        // backgroundRepeat="no-repeat"
        // backgroundPosition="center center"
        // backgroundSize="contain"
      >
        <Flex justifyContent="center" width="100%">
          <Heading
            marginBottom="15px"
            fontSize="32px"
            textAlign="center"
          >
            START GAME
          </Heading>
        </Flex>

        <Image
          src="./wassie.jpg"
          marginBottom="15px"
          borderRadius="10px"
        />

        <Flex
          flexDirection="row"
          justifyContent="center"
          marginTop="auto"
          gap="30px"
          width="100%"
        >
          <Button
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            gap="15px"
            fontSize="18px"
            background="blackAlpha.500"
            borderRadius="5px"
            autoFocus={false}
            onClick={() => handleStart("google")}
          >
            <GoogleIcon size="18px" />
            <Text>GOOGLE</Text>
          </Button>

          <Button
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            gap="15px"
            fontSize="18px"
            background="blackAlpha.500"
            borderRadius="5px"
            autoFocus={false}
            onClick={() => handleStart("twitter")}
          >
            <TwitterIcon color="#1DA1F2" size="18px" />
            <Text>TWITTER</Text>
          </Button>
        </Flex>
      </ModalContent>
    </Modal>
  );
}

