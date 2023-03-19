import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import {
  HiOutlineArrowNarrowLeft as LeftArrow,
  HiOutlineArrowNarrowRight as RightArrow,
} from "react-icons/hi";

// React
import { useState, useEffect } from "react";

export default function Story({ setStage }: any) {
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
        Share your story!
      </Heading>
      <Text marginBottom="45px">
        Your comments will be included when the project gets listed on thecoreloop! Adding the first comment will get the conversation going.
      </Text>

      <Flex flexDirection="column" width="100%">
        <Box>
          <FormLabel 
            htmlFor="project-story" 
            width="100%"
            marginBottom="5px"
          >
            Suggestions
          </FormLabel>
          <Textarea
            id="project-twitter"
            minHeight="100px"
            color="black"
            background="white"
            border="none"
            focusBorderColor="none"
            autoFocus={true}
            placeholder="I started XYZ to . . . "
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
      </Flex>

      <hr
        style={{
          margin: "30px 0",
          width: "100%",
          borderTop: "1px solid white",
        }}
      />

      <Heading 
        width="100%"
        fontSize="25px"
        fontWeight="700"
        marginBottom="15px"
      >
        One Last Thing!
      </Heading>

      <Flex flexDirection="column" marginBottom="30px" width="100%">
        <FormLabel htmlFor="user-contact" marginBottom="5px">
          How can we get in touch with you? (Optional)
        </FormLabel>
        <Input
          id="user-contact"
          color="black"
          background="white"
          border="none"
          focusBorderColor="none"
          placeholder="Telegram/Twitter ID"
          _placeholder={{
            color: "black",
            fontStyle: "italic",
          }}
        />
      </Flex>

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
          <LeftArrow size="1.5rem" />
        </Button>
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
        >
          <RightArrow size="1.5rem" />
        </Button>
      </Flex>
    </Flex>
  );
}
