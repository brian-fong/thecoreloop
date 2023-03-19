import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Image,
  Input,
  Radio,
  RadioGroup,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import {
  HiOutlineArrowNarrowLeft as LeftArrow,
  HiOutlineArrowNarrowRight as RightArrow,
} from "react-icons/hi";
import {
  FaImages as ImageIcon
} from "react-icons/fa";
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
        Help us understand it better
      </Heading>

      <Flex flexDirection="column" gap="30px" width="100%">
        <Box>
          <FormLabel htmlFor="project-genre" marginBottom="5px">
            What genre best describes the project?
          </FormLabel>
          <Select
            id="project-genre"
            variant="thecoreloop"
            color="black"
            background="white"
            border="none"
            focusBorderColor="none"
            placeholder="Tower Defense"
            _placeholder={{
              color: "black",
              fontStyle: "italic",
            }}
            autoFocus={true}
          >
            <option value="FPS">FPS</option>
            <option value="RPG">RPG</option>
            <option value="Simulation">Simulation</option>
            <option value="TCG">TCG</option>
          </Select>
        </Box>

        <Box>
          <FormLabel htmlFor="project-chain" marginBottom="5px">
            What chain is your project built on?
          </FormLabel>
          <Input
            id="project-chain"
            type="url"
            color="black"
            background="white"
            border="none"
            focusBorderColor="none"
            placeholder="Polygon"
            _placeholder={{
              color: "black",
              fontStyle: "italic",
            }}
          />
        </Box>

        <Box>
          <FormLabel htmlFor="project-chain" marginBottom="5px">
            What is the stage of development for this project?
          </FormLabel>
          <Input
            id="project-chain"
            type="url"
            color="black"
            background="white"
            border="none"
            focusBorderColor="none"
            placeholder="In Development"
            _placeholder={{
              color: "black",
              fontStyle: "italic",
            }}
          />
        </Box>

        <Box>
          <FormLabel htmlFor="project-description" marginBottom="5px">
            Tagline
          </FormLabel>
          <Textarea
            id="project-description"
            minHeight="100px"
            color="black"
            background="white"
            border="none"
            focusBorderColor="none"
            placeholder="Please describe your startup/project in a few words. This will show up as the tagline on the discovery page"
            _placeholder={{
              color: "black",
              fontStyle: "italic",
            }}
          />
        </Box>

        <Box>
          <FormLabel marginBottom="10px">
            Are you fundraising at the moment?
          </FormLabel>
          <RadioGroup
            display="flex"
            flexDirection="column"
            gap="15px"
            marginLeft="15px"
            width="100%"
          >
            <Radio value="founder">
              <Flex 
                flexDirection="column"
                justifyContent="start"
                alignItems="start"
                marginLeft="10px"
              >
                <Text>
                  Yes
                </Text>
              </Flex>
            </Radio>
            <Radio value="enthusiast">
              <Flex 
                flexDirection="column"
                justifyContent="start"
                alignItems="start"
                marginLeft="10px"
              >
                <Text>
                  No
                </Text>
              </Flex>
            </Radio>
          </RadioGroup>
        </Box>
      </Flex>

      <hr
        style={{
          margin: "30px 0",
          width: "105%",
          borderTop: "1px solid white",
        }}
      />

      <Heading fontSize="25px" width="100%" marginBottom="15px">
        Images & Media
      </Heading>

      <Flex flexDirection="column" gap="15px" marginBottom="45px">
        <Text>
          Note: This section is optional if you are submitting as a community member.
        </Text>
        <Text>
          If you are submitting as part of a team, we highly recommend you take advantage of this opportunity to share your brilliant concepts with the world!
        </Text>
      </Flex>

      <Flex flexDirection="column" width="100%">
        <FormLabel
          htmlFor="project-thumbnail"
        >
          Thumbnail - Let's make your profile look cool!
        </FormLabel>
        <Flex
          flexDirection="row"
          justifyContent="start"
          alignItems="center"
          gap="20px"
          marginBottom="30px"
          width="100%"
          maxWidth="220px"
          color="white"
          background="none"
          borderRadius="15px"
          cursor="pointer"
          {...getRootProps({ className: "dropzone" })}
        >
          <input id="project-thumbnail" {...getInputProps()} />
          <Box
            padding="10px"
            background="white"
            borderRadius="10px"
          >
            <ImageIcon color="black" size="35px" />
          </Box>
          <Text textAlign="center">
            Click to choose a file or drag here
          </Text>
        </Flex>
      </Flex>

      <Flex flexDirection="column" gap="30px" width="100%">
        <Box>
          <FormLabel htmlFor="project-images">
            Upload images or concepts related to how your game will look like!
          </FormLabel>
          <Flex
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            padding="3rem 1rem"
            color="black"
            background="white"
            borderRadius="15px"
            cursor="pointer"
            {...getRootProps({ className: "dropzone" })}
          >
            <input id="project-images" {...getInputProps()} />
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

        <Box>
          <FormLabel htmlFor="project-trailer" marginBottom="5px">
            YouTube link of the gameplay trailer?
          </FormLabel>
          <Input
            id="project-trailer"
            type="url"
            color="black"
            background="white"
            border="none"
            focusBorderColor="none"
            placeholder="Show us what you've got!"
            _placeholder={{
              color: "black",
              fontStyle: "italic",
            }}
          />
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
            background="#D3E3F8"
            transition="filter 200ms"
            borderRadius="10px"
            _hover={{
              filter: "brightness(0.8)",
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
            background="#D3E3F8"
            transition="filter 200ms"
            borderRadius="10px"
            _hover={{
              filter: "brightness(0.8)",
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
