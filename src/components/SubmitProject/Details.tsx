import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Select,
  Text,
  Textarea,
  useDimensions,
} from "@chakra-ui/react";
import {
  IoCloseCircleOutline as CloseIcon,
} from "react-icons/io5";
import {
  HiOutlineArrowNarrowLeft as LeftArrowIcon,
  HiOutlineArrowNarrowRight as RightArrowIcon,
} from "react-icons/hi";
import {
  FaImages as ImageIcon
} from "react-icons/fa";
import React, { useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import ChainPopover from "./ChainPopover";
import GenrePopover from "./GenrePopoverV2";

export default function Details({ 
  genres, 
  setGenres, 
  chain,
  setChain,
  setStage 
}: any) {
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

  // State variables for styling GenrePopover component
  const genre_node = useRef<any>();
  const dimensions = useDimensions(genre_node, true);

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

      {/* Details Form Container */}
      <Flex flexDirection="column" gap="30px" width="100%">

        {/* Primary and Secondary Genres Container */}
        <Flex flexDirection="column" gap="20px" width="100%">
          <Box>
            <FormLabel 
              htmlFor="project-chain" 
              margin="0"
              marginRight="10px"
              width="100%"
              whiteSpace="nowrap"
            >
              What is the main genre of this project?
            </FormLabel>
            <GenrePopover
              width={dimensions?.contentBox?.width! + 32}
              genre={genres.main}
              setGenre={(genre: any) => setGenres((genres: any) => {
                return {
                  ...genres, 
                  main: genre
                };
              })}
            />
          </Box>
          <Box>
            <FormLabel 
              htmlFor="project-chain" 
              margin="0"
              marginRight="10px"
              width="100%"
              whiteSpace="nowrap"
            >
              What is the sub-genre of this project?
            </FormLabel>
            <GenrePopover
              width={dimensions?.contentBox?.width! + 32}
              genre={genres.sub}
              setGenre={(genre: any) => setGenres((genres: any) => {
                return {
                  ...genres, 
                  sub: genre
                };
              })}
            />
          </Box>
        </Flex>

        <Flex flexDirection="column" gap="15px">
          <Box>
            <FormLabel 
              htmlFor="project-chain" 
              margin="0"
              marginRight="10px"
              width="100%"
              whiteSpace="nowrap"
            >
              What chain is this project built on?
            </FormLabel>
            <ChainPopover
              chain={chain}
              setChain={setChain}
            />
          </Box>
          <Input
            id="project-chain"
            display={chain.name == "Other" 
              ? "flex"
              : "none"
            }
            type="text"
            color="black"
            background="white"
            border="none"
            focusBorderColor="none"
            placeholder="e.g. BlockchainName"
            _placeholder={{
              color: "black",
              fontStyle: "italic",
            }}
          />
        </Flex>

        <Flex flexDirection="column" gap="15px">
          <Box>
            <FormLabel 
              htmlFor="project-stage" 
              margin="0"
              marginRight="10px"
              width="100%"
              whiteSpace="nowrap"
            >
              What is the stage of development for this project?
            </FormLabel>
            <Select variant="thecoreloop">
              <option hidden>Select Stage</option>
              <option>In Development</option>
              <option>Demo Testing</option>
              <option>Pre-Launch</option>
              <option>Game Launch</option>
            </Select>
          </Box>
        </Flex>

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
            <LeftArrowIcon size="1.5rem" />
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
            <RightArrowIcon size="1.5rem" />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
