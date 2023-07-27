// Components
import { Flex, Link, Text } from "@chakra-ui/react";
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
import Studio from "./Studio";
import Thumbnail from "./Thumbnail";
import Upvote from "../../components/SubmitProject/Upvote";

// Hooks
import { useDisclosure } from "@chakra-ui/react";

export default function Project({ project }: any) {

  // Thumbnail dimensions (in pixels)
  const thumbnail_width: number = 115;
  const thumbnail_height: number = thumbnail_width;

  // Refs
  const min_container_width: number = 700;
  const max_container_width: number = 1000;

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
        minWidth={`${min_container_width}px`}
        minHeight="100vh"
        color="white"
        userSelect="none"
      >
        {/* Header */}
        <Header
          min_width={min_container_width}
          onOpen_SignIn={onOpen_SignIn}
        />

        {/* Content Container */}
        <Flex
          id="content-container"
          flexDirection="column"
          justifyContent="start"
          alignItems="center"
          margin="0 auto"
          padding="20px 50px 60px"
          width="100%"
          minWidth={`${min_container_width+100}px`}
          maxWidth={`${max_container_width}px`}
          height="100%"
        >
          {/* Top Section */}
          <Flex
            flexDirection="row"
            justifyContent="space-between"
            alignItems="start"
            gap="10px"
            marginBottom="15px"
            width="100%"
            minWidth={`${min_container_width}px`}
            maxWidth={`${max_container_width}px`}
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

          {/* Body Section */}
          <Flex
            flexDirection="column"
            justifyContent="start"
            alignItems="center"
            gap="20px"
            width="100%"
            minWidth={`${min_container_width}px`}
            maxWidth={`${max_container_width}px`}
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
                Submitted on{" "}
                <Link
                  variant="underline"
                  color="gray.400"
                  fontStyle="normal"
                  backgroundImage="linear-gradient(#A0AEC0 0 0)"
                >
                  {project.date}
                </Link>
                {" "}by{" "}
                <Link
                  variant="underline"
                  color="gray.400"
                  backgroundImage="linear-gradient(#A0AEC0 0 0)"
                >
                  {project.submitter.name}
                </Link>
              </Text>
            </Flex>

            {/* Description */}
            <Description description={project.description} />

            {/* Gallery */}
            <Gallery
              min_width={min_container_width}
              gallery={project.gallery}
            />

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

