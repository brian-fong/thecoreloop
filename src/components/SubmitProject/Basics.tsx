import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Text,
} from "@chakra-ui/react";
import { HiOutlineArrowNarrowRight as RightArrow } from "react-icons/hi";

export default function Basics({ setStage }: any) {
  return (
    <Flex
      flexDirection="column"
      justifyContent="start"
      alignItems="center"
      width="100%"
      maxWidth="715px"
    >
      <Heading 
        marginBottom="15px"
        width="100%" 
        fontSize="25px" 
        fontWeight="700"
      >
        Share your web3 gaming project with thecoreloop
      </Heading>
      <Flex flexDirection="column" gap="15px" marginBottom="45px">
        <Text>
          Are you running your own web3 gaming startup and you want to share it with the world? Or maybe you have your favorite web3 gaming startup that’s not listed at thecoreloop yet?
        </Text>
        <Text>
          Well, you're in the right spot! Just follow these simple steps and let's make it happen!
        </Text>
      </Flex>

      <Heading 
        marginBottom="10px"
        width="100%" 
        fontSize="1.5rem" 
        fontWeight="700"
      >
        Let's start with some basics!
      </Heading>

      <RadioGroup
        display="flex"
        flexDirection="column"
        gap="15px"
        marginLeft="30px"
        marginBottom="55px"
        width="100%"
      >
        <Radio value="founder">
          <Flex 
            flexDirection="column"
            justifyContent="start"
            alignItems="start"
            marginLeft="10px"
            position="relative"
            top="10px"
          >
            <Text fontSize="18px" fontWeight="700">
              I am the founder / belong to the team
            </Text>
            <Text fontSize="14px">
              I'll be listed as a builder for this project profile
            </Text>
          </Flex>
        </Radio>
        <Radio value="enthusiast">
          <Flex 
            flexDirection="column"
            justifyContent="start"
            alignItems="start"
            marginLeft="10px"
            position="relative"
            top="10px"
          >
            <Text fontSize="18px" fontWeight="700">
              I am an enthusiast of this project!
            </Text>
            <Text fontSize="14px">
              I'll be listed as a community contributor for this project!
            </Text>
          </Flex>
        </Radio>
      </RadioGroup>

      <Flex flexDirection="column" gap="30px" width="100%">
        <Box>
          <FormLabel htmlFor="project-name" marginBottom="5px">
            Name of the Project
          </FormLabel>
          <Input
            id="project-name"
            color="black"
            background="white"
            border="none"
            focusBorderColor="none"
            placeholder="What is it called?"
            _placeholder={{
              color: "black",
              fontStyle: "italic",
            }}
            autoFocus={true}
          />
        </Box>

        <Box>
          <FormLabel htmlFor="project-website" marginBottom="5px">
            Website/Twitter links to the project
          </FormLabel>
          <Input
            id="project-website"
            type="url"
            color="black"
            background="white"
            border="none"
            focusBorderColor="none"
            placeholder="https://"
            _placeholder={{
              color: "black",
              fontStyle: "italic",
            }}
          />
        </Box>

        {/* Next Button Container */}
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
            background="#D3E3F8"
            transition="filter 200ms"
            borderRadius="10px"
            _hover={{
              filter: "brightness(0.8)",
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
