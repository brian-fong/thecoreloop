// Components
import {
  Button,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import {
  BsArrowLeft as LeftArrowIcon,
  BsArrowRight as RightArrowIcon,
} from "react-icons/bs";
import Head from "next/head";
import Header from "../components/Core/Header";
import Part1 from "../components/SubmitProject/Part1";
import Part2 from "../components/SubmitProject/Part2";

// Hooks
import { useState } from "react";
import useProjectState from "../hooks/useProjectState";

export default function submit_project() {
  // Constants: Thumbnail Image Size
  const [image_width, image_height]: [string, string] = ["125px", "125px"];

  // State variables
  const {
    blockchain, setBlockchain,
    description, setDescription,
    fundraising, setFundraising,
    genres, setGenres,
    isTeam, setIsTeam,
    links, setLinks,
    name, setName,
    stage, setStage,
    tagline, setTagline,
    thumbnail, setThumbnail,
  } = useProjectState();
  const [page, setPage] = useState<number>(1);

  // Event Handler: Previous Button
  function handleClick_Prev() {
    setPage(1);
  }
  function handleDisabled_Prev(): boolean {
    return page == 1;
  }

  // Event Handler: Next Button
  function handleClick_Next() {
    setPage(2);
  }
  function handleDisabled_Next(): boolean {
    if (name && thumbnail) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <>
      <Head>
        <title>Submit Project</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="/thecoreloop-favicon.png"
        />
        <meta name="viewport" content="viewport-fit=cover" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Main Container */}
      <Flex
        id="main-container"
        flexDirection="column"
        justifyContent="start"
        alignItems="center"
        position="relative"
        width="100%"
        minWidth="800px"
        minHeight="100vh"
        color="white"
      >
        {/* Header */}
        <Header />

        {/* Content Container */}
        <Flex
          id="content-container"
          flexDirection="column"
          justifyContent="start"
          alignItems="center"
          padding="20px 50px 60px"
          width="100%"
          maxWidth="800px"
          height="100%"
        >
          <Flex
            flexDirection="row"
            justifyContent="space-between"
            alignItems="end"
            marginBottom="30px"
            width="100%"
          >
            {
              page == 1 
                ? (
                  <Heading fontSize="30px" whiteSpace="nowrap">
                    Build <Text display="inline" color="gray.300" fontStyle="italic">Discovery</Text> View
                  </Heading>
                ) : (
                  <Heading fontSize="30px" whiteSpace="nowrap">
                    Build <Text display="inline" color="gray.300" fontStyle="italic">In-Depth</Text> View
                  </Heading>
                )
            }

            {/* Container: Prev + Next Buttons */}
            <Flex
              flexDirection="row"
              justifyContent="end"
              alignItems="center"
              gap="30px"
              width="100%"
            >
              {/* Prev Button */}
              <Button
                display="flex"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                padding="5px 10px"
                letterSpacing="2px"
                background="tcl_green"
                boxShadow={`
                  1px 1px 1px gray,
                  2px 2px 1px gray,
                  3px 3px 1px gray,
                  4px 4px 1px gray
                `}
                transition="all 100ms ease-in-out"
                _hover={{
                  filter: "brightness(0.8)",
                }}
                _active={{
                  filter: "brightness(0.5)",
                  boxShadow: "none",
                  transform: "translate(3px, 3px)",
                }}
                onClick={handleClick_Prev}
                // isDisabled={handleDisabled_Prev()}
              >
                <LeftArrowIcon color="white" size="30px" />
              </Button>

              {/* Next Button */}
              <Button
                display="flex"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                padding="5px 10px"
                letterSpacing="2px"
                background="tcl_green"
                boxShadow={`
                  1px 1px 1px gray,
                  2px 2px 1px gray,
                  3px 3px 1px gray,
                  4px 4px 1px gray
                `}
                transition="all 100ms ease-in-out"
                _hover={{
                  filter: "brightness(0.8)",
                }}
                _active={{
                  filter: "brightness(0.5)",
                  boxShadow: "none",
                  transform: "translate(3px, 3px)",
                }}
                onClick={handleClick_Next}
                // isDisabled={handleDisabled_Next()}
              >
                <RightArrowIcon color="white" size="30px" />
              </Button>
            </Flex>
          </Flex>

          {/* Content */}
          {page == 1 
            ? (
              <Part1
                image_width={image_width} image_height={image_height}
                blockchain={blockchain} setBlockchain={setBlockchain}
                fundraising={fundraising} setFundraising={setFundraising}
                genres={genres} setGenres={setGenres}
                name={name} setName={setName}
                isTeam={isTeam} setIsTeam={setIsTeam}
                stage={stage} setStage={setStage}
                tagline={tagline} setTagline={setTagline}
                thumbnail={thumbnail} setThumbnail={setThumbnail}
              />
            ) : (
              <Part2
                image_width={image_width} image_height={image_height}
                blockchain={blockchain} setBlockchain={setBlockchain}
                description={description} setDescription={setDescription}
                fundraising={fundraising} setFundraising={setFundraising}
                genres={genres} setGenres={setGenres}
                isTeam={isTeam}
                links={links} setLinks={setLinks}
                name={name} setName={setName}
                stage={stage} setStage={setStage}
                tagline={tagline} setTagline={setTagline}
                thumbnail={thumbnail} setThumbnail={setThumbnail}
              />
            )
          }
        </Flex>
      </Flex>
    </>
  );
}

