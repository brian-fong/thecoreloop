// Components
import {
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { BsArrowLeftShort as LeftArrowIcon } from "react-icons/bs";
import Head from "next/head";
import Header from "../components/Header/Header";
import Part1 from "../components/SubmitProject/Part1";
import Part2 from "../components/SubmitProject/Part2";
import SignInModal from "../components/User/SignInModal";

// Hooks
import { useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import useProjectState from "../hooks/useProjectState";

export default function submit_project() {
  // Constants: Thumbnail Image Size
  const [image_width, image_height]: [string, string] = ["115px", "115px"];

  // State variables
  const {
    blockchain, setBlockchain,
    description, setDescription,
    fundraising, setFundraising,
    gallery, setGallery,
    genres, setGenres,
    links, setLinks,
    name, setName,
    stage, setStage,
    studio, setStudio,
    submittedAs, setSubmittedAs,
    tagline, setTagline,
    thumbnail, setThumbnail,
  } = useProjectState();
  const [part, setPart] = useState<number>(1);
  const [action, setAction] = useState<string>("");
  const { data: session, status } = useSession();

  // useDisclosure: SignIn Modal
  const {
    isOpen: isOpen_SignIn, 
    onOpen: onOpen_SignIn,
    onClose: onClose_SignIn,
  } = useDisclosure();

  useEffect(() => {
    if (status == "authenticated") {

    } else if (status =="unauthenticated") {

    }
  }, [status]);

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
        userSelect="none"
      >
        {/* Header */}
        <Header
          setAction={setAction}
          onOpen_SignIn={onOpen_SignIn}
        />

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
            alignItems="start"
            marginBottom="30px"
            width="100%"
          >
            <Flex flexDirection="column">
              <Heading fontSize="30px" whiteSpace="nowrap">
                Build{" "}
                <Text
                  display="inline"
                  color="gray.300"
                  fontStyle="italic"
                >
                  {part == 1 ? "Discovery" : "In-Depth"}
                </Text>
                {" "}View
              </Heading>

              <Flex
                display={part == 1
                  ? "none"
                  : "flex"
                }
                flexDirection="row"
                justifyContent="start"
                alignItems="center"
                marginTop="5px"
                onClick={() => setPart(1)}
                _hover={{
                  cursor: "pointer",
                  textDecoration: "underline",
                  filter: "brightness(80%)",
                }}
              >
                <LeftArrowIcon size="18px" />
                <Text>
                  Back to Discovery View
                </Text>
              </Flex>
            </Flex>

            <Flex
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              gap="30px"
            >
              <Text
                fontSize="16px"
                whiteSpace="nowrap"
              >
                Part {part} of 3
              </Text>
            </Flex>
          </Flex>

          {/* Content */}
          {part == 1 
            ? (
              <Part1
                image_width={image_width} image_height={image_height}
                blockchain={blockchain} setBlockchain={setBlockchain}
                fundraising={fundraising} setFundraising={setFundraising}
                genres={genres} setGenres={setGenres}
                name={name} setName={setName}
                stage={stage} setStage={setStage}
                submittedAs={submittedAs} setSubmittedAs={setSubmittedAs}
                tagline={tagline} setTagline={setTagline}
                thumbnail={thumbnail} setThumbnail={setThumbnail}
                setPart={setPart}
              />
            ) : (
              <Part2
                image_width={image_width} image_height={image_height}
                blockchain={blockchain} setBlockchain={setBlockchain}
                description={description} setDescription={setDescription}
                fundraising={fundraising} setFundraising={setFundraising}
                gallery={gallery} setGallery={setGallery}
                genres={genres} setGenres={setGenres}
                links={links} setLinks={setLinks}
                name={name} setName={setName}
                part={part} setPart={setPart}
                stage={stage} setStage={setStage}
                studio={studio} setStudio={setStudio}
                submittedAs={submittedAs}
                tagline={tagline} setTagline={setTagline}
                thumbnail={thumbnail} setThumbnail={setThumbnail}
              />
            )
          }
        </Flex>

        {/* SignIn Modal */}
        <SignInModal
          isOpen={isOpen_SignIn} onClose={onClose_SignIn}
          action={action}
        />
      </Flex>
    </>
  );
}

