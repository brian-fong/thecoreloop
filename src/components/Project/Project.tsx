// Components
import { Flex, Text } from "@chakra-ui/react";
import Blockchain from "./Blockchain";
import Description from "./Description";
import Gallery from "./Gallery";
import Genres from "./Genres";
import Head from "next/head";
import Header from "../../components/Header/Header";
import Links from "./Links";
import Name from "./Name";
import SignInModal from "../../components/User/SignInModal";
import Stage from "./Stage";
import Story from "./Story";
import Studio from "./Studio";
import Thumbnail from "./Thumbnail";
import Upvote from "../../components/SubmitProject/Upvote";

// Hooks
import { useDisclosure } from "@chakra-ui/react";

export default function Project({ project }: any) {

  // Thumbnail dimensions (in pixels)
  const thumbnail_width: number = 115;
  const thumbnail_height: number = thumbnail_width;

  // useDisclosure: SignIn Modal
  const {
    isOpen: isOpen_SignIn,
    onOpen: onOpen_SignIn,
    onClose: onClose_SignIn,
  } = useDisclosure();

  return (
    <>
      <Head>
        <title>{project.name}</title>
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
            gap="10px"
            marginBottom="15px"
            width="100%"
            height="100%"
          >
            {/* Thumbnail Image */}
            <Thumbnail
              thumbnail={project.thumbnail}
              width={thumbnail_width}
              height={thumbnail_height}
            />

            <Flex
              id="middle-container"
              flexDirection="column"
              justifyContent="space-between"
              alignItems="start"
              width="100%"
              height={`${thumbnail_height}px`}
              minHeight={`${thumbnail_height}px`}
            >
              <Flex
                flexDirection="row"
                justifyContent="start"
                alignItems="center"
                gap="10px"
              >
                {/* Name */}
                <Name name={project.name} />

                {/* Blockchain */}
                <Blockchain blockchain={project.blockchain} />
              </Flex>

              {/* Genres */}
              <Genres genres={project.genres} />

              <Flex
                flexDirection="row"
                justifyContent="space-between"
                alignItems="end"
                width="100%"
              >
                {/* Stage */}
                <Stage stage={project.stage} />

                {/* Links */}
                <Links links={project.links} />
              </Flex>
            </Flex>

            {/* Upvote */}
            <Upvote />
          </Flex>

          <Flex
            flexDirection="column"
            justifyContent="start"
            alignItems="center"
            gap="20px"
            width="100%"
            height="100%"
          >
            {/* Studio */}
            <Flex
              justifyContent="space-between"
              alignItems="start"
              width="100%"
            >
              <Studio studio={project.studio} />

              <Text whiteSpace="nowrap">
                Submitted on {project.date}
              </Text>
            </Flex>

            {/* Description */}
            <Description description={project.description} />

            {/* Gallery */}
            <Gallery gallery={project.gallery} />

            {/* Story Container */}
            <Story story={project.story} submitter={project.submitter} />
          </Flex>
        </Flex>

        {/* SignIn Modal */}
        <SignInModal
          isOpen={isOpen_SignIn}
          onClose={onClose_SignIn}
        />
      </Flex>
    </>
  );
}

