import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Image,
  Input,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import {
  HiOutlineArrowNarrowLeft as LeftArrow,
  HiOutlineArrowNarrowRight as RightArrow,
} from "react-icons/hi";
import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";

export default function Basics({ setStage }: any) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      setFile(
        Object.assign(acceptedFiles[0], {
          preview: URL.createObjectURL(acceptedFiles[0]),
        })
      );
    },
  });

  const [file, setFile] = useState<any>();

  useEffect(() => {
    console.log("File: ", file);
  }, [file]);

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

      <Flex flexDirection="column" gap="1.5rem" width="100%" maxWidth="550px">
        <Box>
          <FormLabel htmlFor="project-genre" margin="0 0 0.25rem">
            What genre best describes the project?
          </FormLabel>
          <Select
            id="project-genre"
            variant="thecoreloop"
            placeholder="Select genre"
            autoFocus={true}
          >
            <option value="FPS">FPS</option>
            <option value="RPG">RPG</option>
            <option value="Simulation">Simulation</option>
            <option value="TCG">TCG</option>
          </Select>
        </Box>
        <Box>
          <FormLabel htmlFor="project-chain" margin="0 0 0.25rem">
            What chain is the project built on?
          </FormLabel>
          <Input
            id="project-chain"
            type="url"
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
          <FormLabel htmlFor="project-description" margin="0 0 0.25rem">
            Description of the project
          </FormLabel>
          <Textarea
            id="project-description"
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
      </Flex>

      <hr
        style={{
          position: "relative",
          right: "2rem",
          margin: "2rem 0",
          width: "100%",
          maxWidth: "700px",
          borderTop: "1px solid white",
        }}
      />

      <Flex flexDirection="column" gap="1.5rem" width="100%" maxWidth="550px">
        <Heading fontSize="1.5rem" marginBottom="1rem">
          Images & Media
        </Heading>
        <Box>
          <FormLabel htmlFor="project-trailer" margin="0 0 0.25rem">
            YouTube link of the gameplay trailer?
          </FormLabel>
          <Input
            id="project-trailer"
            type="url"
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

        <Box>
          <FormLabel htmlFor="project-logo">
            Upload images related to the project!
          </FormLabel>
          <Flex
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            padding="3rem 1rem"
            color="black"
            background="rgba(255, 255, 255, 0.5)"
            borderRadius="15px"
            cursor="pointer"
            {...getRootProps({ className: "dropzone" })}
          >
            <input id="project-logo" {...getInputProps()} />
            <Text>Click to choose a file or drag here</Text>
          </Flex>
          <Flex
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            marginTop="1rem"
            width="100%"
          >
            {file?.preview ? (
              <Image
                src={file?.preview}
                objectFit="cover"
                width="100px"
                height="100px"
                padding="1rem"
                border="1px solid white"
                borderRadius="15px"
              />
            ) : null}
          </Flex>
        </Box>

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
