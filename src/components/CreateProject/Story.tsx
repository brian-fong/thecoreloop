import {  
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import {
  HiOutlineArrowNarrowLeft as LeftArrow,
  HiOutlineArrowNarrowRight as RightArrow
} from "react-icons/hi";

export default function Story({ setStage }: any) {
  return (
    <Flex
      flexDirection="column"
      justifyContent="start"
      alignItems="start"
      padding="3rem 5rem"
      width="100%"
    >
      <Heading fontSize="1.5rem" marginBottom="1rem">
        Help us understand it better
      </Heading>

      <Flex
        flexDirection="column"
        gap="1.5rem"
        width="100%"
        maxWidth="700px"
      >
        <Box>
          <FormLabel htmlFor="project-genre" margin="0 0 0.25rem">
            What genre best describes the project?
          </FormLabel>
          <Select 
            id="project-genre" 
            variant="thecoreloop" 
            placeholder='Select genre'
            autoFocus={true}
          >
            <option value="FPS">FPS</option>
            <option value="RPG">RPG</option>
            <option value="Simulation">Simulation</option>
            <option value="TCG">TCG</option>
          </Select>
        </Box>
        <Box>
          <FormLabel htmlFor="project-website" margin="0 0 0.25rem">
            What chain is the project built on? 
          </FormLabel>
          <Input
            id="project-website"
            color="black"
            background="rgba(255, 255, 255, 0.5)"
            border="none"
            focusBorderColor="none"
            placeholder="Ethereum"
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
            Description of the project
          </FormLabel>
          <Textarea
            id="project-twitter"
            minHeight="100px"
            color="black"
            background="rgba(255, 255, 255, 0.5)"
            border="none"
            focusBorderColor="none"
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

