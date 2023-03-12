import {
  Box,
  Button,
  Radio,
  RadioGroup,
  Flex,
  FormLabel,
  Heading,
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
  const [isRaising, setIsRaising] = useState<string>("undefined");

  useEffect(() => {
    console.log("Raising: ", isRaising);
  }, [isRaising]);

  return (
    <Flex
      flexDirection="column"
      justifyContent="start"
      alignItems="start"
      padding="3rem 5rem"
      width="100%"
    >
      <Heading fontSize="1.5rem">Are you from the founding team?</Heading>
      <Text marginBottom="1rem" maxWidth="550px">
        Note: If you are not from the founding team but submitting as a
        community member, you may ignore this section!
      </Text>

      <Flex flexDirection="column" gap="1.5rem" width="100%" maxWidth="550px">
        <Box>
          <FormLabel htmlFor="project-story" margin="0 0 0.25rem">
            Share your founding story with the world! :D
          </FormLabel>
          <Textarea
            id="project-twitter"
            minHeight="100px"
            color="black"
            background="rgba(255, 255, 255, 0.5)"
            border="none"
            focusBorderColor="none"
            autoFocus={true}
            placeholder="Please describe your startup/project in a few words. This will show up as the tagline on the discovery page"
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

        <Box maxWidth="550px">
          <FormLabel htmlFor="project-website" margin="0 0 1rem">
            Are you raising money for your project right now?
          </FormLabel>
          <RadioGroup onChange={setIsRaising} value={isRaising}>
            <Flex flexDirection="column" gap="1.5rem" marginLeft="1rem">
              <Radio value="true">
                <Text lineHeight="1.2rem">
                  Yes, we would appreciate thecoreloop giving us a shoutout on
                  our fundraising stage right now.
                </Text>
              </Radio>
              <Radio value="false">
                <Text lineHeight="none">
                  No, we’re not raising at the moment.
                </Text>
              </Radio>
            </Flex>
          </RadioGroup>
        </Box>
      </Flex>

      <hr
        style={{
          width: "100%",
          margin: "2rem 0",
          borderTop: "1px solid white",
        }}
      />

      <Flex flexDirection="column">
        <Heading fontSize="1.5rem">Are you from the founding team?</Heading>
        <Text marginBottom="1rem" maxWidth="550px">
          Note: If you are not from the founding team but submitting as a
          community member, you may ignore this section!
        </Text>

        <Box>
          <FormLabel htmlFor="project-twitter" margin="0 0 0.25rem">
            Share with us on your excitement/conviction on this project!
          </FormLabel>
          <Textarea
            id="project-twitter"
            minHeight="100px"
            color="black"
            background="rgba(255, 255, 255, 0.5)"
            border="none"
            focusBorderColor="none"
            placeholder="Eg: I am bullish on XYZ because..........."
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
            <LeftArrow size="1.5rem" />
          </Button>
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
          >
            <RightArrow size="1.5rem" />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
