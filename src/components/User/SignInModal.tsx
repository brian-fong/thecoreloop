// Components
import {
  Box,
  Button,
  Flex,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  Text,
} from "@chakra-ui/react";
import { BsTwitter as TwitterIcon } from "react-icons/bs";
import { FcGoogle as GoogleIcon } from "react-icons/fc";
import { ImEyeBlocked as HiddenIcon } from "react-icons/im";

// Functions and Hooks
import { signIn } from "next-auth/react";

export default function SignInModal({ isOpen, onClose, action }: any) {

  function handleStart(provider: string): void {
    // Prompt user to sign in
    signIn(provider);
  }

  return (
    <Modal
      isOpen={isOpen} onClose={onClose}
      motionPreset="slideInRight"
      size="lg"
      isCentered
    >
      <ModalOverlay />
      <ModalContent
        display="flex"
        flexDirection="row"
        justifyContent="start"
        alignItems="center"
        background="rgba(0, 0, 0, 0.5)"
        backdropFilter="blur(8px)"
        borderRadius="5px"
      >
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          padding="20px"
          position="relative"
          height="100%"
        >
          <Image
            src="./thecoreloop-favicon.png"
            width="100px"
            minWidth="100px"
            maxWidth="100px"
            height="100px"
            minHeight="100px"
            maxHeight="100px"
          />
          <Box position="absolute">
            <HiddenIcon color="white" size="50px" />
          </Box>
        </Flex>

        <Flex
          flexDirection="column"
          justifyContent="start"
          alignItems="start"
          gap="20px"
          padding="20px"
          width="100%"
          background="rgba(255, 255, 255, 0.04)"
        >
          <Flex
            flexDirection="row"
            alignItems="center"
            gap="15px"
          >
            <Text fontSize="16px">
              ACTION:
            </Text>
            <Text
              padding="0 8px"
              color="white"
              fontSize="16px"
              fontWeight="bold"
              background="tcl_blue"
              borderRadius="5px"
            >
              {`<${action}>`}
            </Text>
          </Flex>

          <Flex
            flexDirection="row"
            alignItems="center"
            gap="15px"
          >
            <Text fontSize="16px">
              ERR:
            </Text>
            <Text
              padding="0 8px"
              color="white"
              fontSize="16px"
              fontWeight="bold"
              background="tcl_pink"
              borderRadius="5px"
            >
              {`<unknown_user> detected`}
            </Text>
          </Flex>

          <Text fontSize="16px">
            {`Please identify yourself using the following options:`}
          </Text>

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
              border="1px solid transparent"
              borderRadius="5px"
              autoFocus={false}
              onClick={() => handleStart("google")}
              transition="all 200ms ease-in-out"
              _hover={{
                background: "rgba(255, 255, 255, 0.1)",
                border: "1px solid white",
              }}
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
              border="1px solid transparent"
              borderRadius="5px"
              autoFocus={false}
              onClick={() => handleStart("twitter")}
              transition="all 200ms ease-in-out"
              _hover={{
                background: "rgba(255, 255, 255, 0.1)",
                border: "1px solid white",
              }}
            >
              <TwitterIcon color="#1DA1F2" size="18px" />
              <Text>TWITTER</Text>
            </Button>
          </Flex>
        </Flex>
      </ModalContent>
    </Modal>
  );
}

