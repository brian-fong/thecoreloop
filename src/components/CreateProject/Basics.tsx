import {  
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import {
  HiOutlineArrowNarrowRight as RightArrow
} from "react-icons/hi";

export default function Basics({ setStage }: any) {
  return (
    <Flex
      flexDirection="column"
      justifyContent="start"
      alignItems="start"
      padding="3rem 5rem"
      width="100%"
    >
      <Heading fontSize="1.5rem">
        Share your web3 gaming project with thecoreloop
      </Heading>
      <Flex
        flexDirection="column"
        gap="1rem"
        padding="1rem 0"
        maxWidth="700px"
      >
        <Text color="rgba(255, 255, 255, 0.7)">
          Are you running your own web3 gaming startup and you want to share it with the world? Or maybe you have your favorite web3 gaming startup that’s not listed at thecoreloop yet?  
        </Text>
        <Text color="rgba(255, 255, 255, 0.7)">
          Well, you're in the right spot! Just follow these simple steps and let's make it happen!
        </Text>
      </Flex>

      <Heading margin="2rem 0 1rem" fontSize="1.5rem">
        Let's start with some basics!
      </Heading>

      <Flex
        flexDirection="column"
        gap="1.5rem"
        width="100%"
        maxWidth="700px"
      >
        <Box>
          <FormLabel htmlFor="project-name" margin="0 0 0.25rem">
            Name of the Project
          </FormLabel>
          <Input
            id="project-name"
            color="black"
            background="rgba(255, 255, 255, 0.5)"
            border="none"
            focusBorderColor="none"
            placeholder="What is it called?"
            _placeholder={{
              color: "black",
              fontStyle: "italic",
              opacity: "0.5",
            }}
            _focus={{
              background: "white",
            }}
            autoFocus={true}
          />
        </Box>
        <Box>
          <FormLabel htmlFor="project-website" margin="0 0 0.25rem">
            Website URL of the project
          </FormLabel>
          <Input
            id="project-website"
            color="black"
            background="rgba(255, 255, 255, 0.5)"
            border="none"
            focusBorderColor="none"
            placeholder="https://example.com"
            _placeholder={{
              color: "black",
              fontStyle: "italic",
              opacity: "0.5",
            }}
            _focus={{
              background: "white",
            }}
          />
        </Box>
        <Box>
          <FormLabel htmlFor="project-twitter" margin="0 0 0.25rem">
            Twitter Account of the project
          </FormLabel>
          <Input
            id="project-twitter"
            color="black"
            background="rgba(255, 255, 255, 0.5)"
            border="none"
            focusBorderColor="none"
            placeholder="https://twitter.com/example"
            _placeholder={{
              color: "black",
              fontStyle: "italic",
              opacity: "0.5",
            }}
            _focus={{
              background: "white",
            }}
          />
        </Box>
        <Flex
          flexDirection="row"
          justifyContent="end"
          alignItems="center"
          gap="1rem"
          marginTop="1rem"
          width="100%"
        >
          <Button
            width="min-content"
            color="black"
            background="#EAF3F4"
            filter="brightness(0.9)"
            transition="filter 200ms"
            borderRadius="10px"
            _hover={{
              filter: "brightness(1.0)",
            }}
            _active={{
              filter: "brightness(0.5)",
            }}
            onClick={() => setStage("Details")}
          >
            <RightArrow size="1.5rem" />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}



