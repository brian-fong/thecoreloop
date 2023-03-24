// Components
import {
  Button,
  Flex,
  Heading,
} from "@chakra-ui/react";
import {
  BsArrowLeft as LeftArrowIcon,
  BsArrowRight as RightArrowIcon,
} from "react-icons/bs";
import Head from "next/head";
import Header from "../components/Discover/Header";
import Part1 from "../components/SubmitProject/Part1";
import Part2 from "../components/SubmitProject/Part2";

// Hooks
import { useEffect, useState } from "react";
import useProjectState from "../hooks/useProjectState";

export default function submit_project() {
  // Constants: Thumbnail Image Size
  const [ image_width, image_height]: [string, string] = ["96px", "96px"];

  // State variables
  const {
    description, setDescription,
    fundraising, setFundraising,
    name, setName,
    submittedByTeam, setSubmittedByTeam,
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

  useEffect(() => {
    console.log(`Name: "${name}"`);
  }, [name]);

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
        background="#282a36"
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
            alignItems="center"
            marginBottom="30px"
            width="100%"
          >
            <Heading
              width="100%"
              color="white"
              fontSize="32px"
              fontWeight="700"
              whiteSpace="nowrap"
            >
              Submitting a Project
            </Heading>

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
                  boxShadow: `
                    1px 1px 1px gray,
                    2px 2px 1px gray
                    `,
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
                  boxShadow: `
                    1px 1px 1px gray,
                    2px 2px 1px gray
                    `,
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
                image_width={image_width}
                image_height={image_height}
                fundraising={fundraising}
                setFundraising={setFundraising}
                name={name}
                setName={setName}
                submittedByTeam={submittedByTeam}
                setSubmittedByTeam={setSubmittedByTeam}
                tagline={tagline}
                setTagline={setTagline}
                thumbnail={thumbnail}
                setThumbnail={setThumbnail}
              />
            ) : (
              <Part2
                image_width={image_width}
                image_height={image_height}
                description={description}
                setDescription={setDescription}
                name={name}
                setName={setName}
                thumbnail={thumbnail}
                setThumbnail={setThumbnail}
              />
            )
          }
        </Flex>
      </Flex>
    </>
  );
}

