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
import {
  MdSubdirectoryArrowRight as IndentArrow,
} from "react-icons/md";

export default function Basics({ setStage }: any) {
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

        <hr style={{ borderTop: "1px solid white" }} />

        <Heading fontSize="1.5rem" marginBottom="1rem">
          Images & Media
        </Heading>
        <Box>
          <FormLabel htmlFor="project-website" margin="0 0 0.25rem">
            YouTube link of the gameplay trailer? 
          </FormLabel>
          <Input
            id="project-website"
            color="black"
            background="rgba(255, 255, 255, 0.5)"
            border="none"
            focusBorderColor="none"
            placeholder="https://www.youtube.com/"
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
          flexDirection="column"
          gap="1rem"
        >
          <FormLabel htmlFor="project-logo">
            Upload images related to the project!
          </FormLabel>
          <Flex
            flexDirection="column"
            gap="1rem"
          >
            <Flex
              flexDirection="row"
              justifyContent="start"
              alignItems="center"
              marginLeft="2rem"
            >
              <FormLabel htmlFor="project-logo" width="150px">Project Logo:</FormLabel>
              <Input
                id="project-logo"
                type="file"
                width="min-content"
                height="min-content"
                color="white"
                background="none"
                border="none"
              />
            </Flex>
            <Flex
              flexDirection="row"
              justifyContent="start"
              alignItems="center"
              marginLeft="2rem"
            >
              <FormLabel htmlFor="project-image" width="150px">Project Image:</FormLabel>
              <Input
                id="project-image"
                type="file"
                width="min-content"
                height="min-content"
                color="white"
                background="none"
                border="none"
              />
            </Flex>
          </Flex>
        </Flex>

        {/* Prev/Next Container */}
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
            onClick={() => setStage("Basics")}
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
            onClick={() => setStage("Story")}
          >
            <RightArrow size="1.5rem" />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}




