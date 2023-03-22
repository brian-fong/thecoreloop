// Components
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import Header from "../components/Home/Header";
import {
  MdOutlineAddAPhoto as AddThumbnailIcon,
  MdOutlineAddPhotoAlternate as AddImageIcon,
} from "react-icons/md";
import {
  BsTwitter as TwitterIcon,
} from "react-icons/bs";
import {
  SiDiscord as DiscordIcon,
} from "react-icons/si";
import {
  TbWorld as WorldIcon,
} from "react-icons/tb";
import {
  VscTriangleUp as UpvoteIcon,
} from "react-icons/vsc";
import {
  IoText as TextIcon,
} from "react-icons/io5";

export default function submit_project() {
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
        background="black"
      >
        {/* Header */}
        <Header />

        {/* Content Container */}
        <Flex
          id="content-container"
          flexDirection="column"
          justifyContent="start"
          alignItems="center"
          padding="50px"
          width="100%"
          minWidth="800px"
          maxWidth="1000px"
          height="100%"
        >
          {/* Container: Thumbnail + Title + Links + Genre + Upvote */}
          <Flex
            flexDirection="row"
            justifyContent="start"
            alignItems="center"
            gap="30px"
            width="100%"
            minWidth="670px"
          >
            {/* Thumbnail Image */}
            <Flex 
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              width="80px"
              minWidth="80px"
              height="80px"
              minHeight="80px"
              border="2px solid white"
              borderRadius="50%"
              cursor="pointer"
              transition="background 200ms ease-in-out"
              _hover={{ background: "rgba(255, 255, 255, 0.1)" }}
            >
              <AddThumbnailIcon color="white" size="28px" />
            </Flex>

            {/* Name + Genre(s) */}
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="start"
              gap="15px"
              height="100%"
            >
              <Heading 
                padding="5px 10px"
                width="400px"
                minHeight="40px"
                color="white" 
                fontSize="24px"
                border="1px solid white"
                borderRadius="5px"
                cursor="pointer"
                transition="background 200ms ease-in-out"
                _hover={{ background: "rgba(255, 255, 255, 0.1)" }}
              >
                &lt;project_name&gt;
              </Heading>
              <Text 
                padding="5px 10px"
                width="250px"
                minHeight="32px"
                color="white" 
                fontSize="14px"
                border="1px solid white"
                borderRadius="5px"
                cursor="pointer"
                transition="background 200ms ease-in-out"
                _hover={{ background: "rgba(255, 255, 255, 0.1)" }}
              >
                &lt;genres&gt;
              </Text>
            </Flex>

            {/* Links */}
            <Flex
              flexDirection="row"
              justifyContent="start"
              alignItems="center"
              gap="20px"
              padding="0px 20px"
            >
              <Box 
                filter="brightness(0.8)"
                cursor="pointer"
                transition="filter 200ms ease-in-out"
                _hover={{ filter: "brightness(1.0)" }}
              >
                <WorldIcon color="white" size="25px" />
              </Box>
              <Box 
                filter="brightness(0.8)"
                cursor="pointer"
                transition="filter 200ms ease-in-out"
                _hover={{ filter: "brightness(1.0)" }}
              >
                <TwitterIcon color="#1DA1F2" size="25px" />
              </Box>
              <Box 
                filter="brightness(0.8)"
                cursor="pointer"
                transition="filter 200ms ease-in-out"
                _hover={{ filter: "brightness(1.0)" }}
              >
                <DiscordIcon color="#7289da" size="25px" />
              </Box>
            </Flex>

            {/* Upvote */}
            <Flex
              flexDirection="column"
              justifyContent="space-between"
              alignItems="center"
              marginLeft="auto"
              padding="20px 15px"
              height="100%"
              border="1px solid white"
              borderRadius="10px"
              cursor="pointer"
              transition="background 200ms ease-in-out"
              _hover={{ background: "rgba(255, 255, 255, 0.1)" }}
            >
              <UpvoteIcon color="white" size="25px" />
              <Text fontSize="16px">0</Text>
            </Flex>
          </Flex>

          {/* Container: Gallery + Description */}
          <Flex
            flexDirection="column"
            justifyContent="start"
            alignItems="center"
            gap="30px"
            padding="40px 20px 20px"
            width="100%"
            maxWidth="700px"
            height="100%"
          >
            {/* Description */}
            <Flex
              flexDirection="row"
              justifyContent="start"
              alignItems="start"
              padding="10px"
              width="100%"
              minWidth="100%"
              minHeight="64px"
              border="1px solid white"
              borderRadius="5px"
              cursor="pointer"
              transition="background 200ms ease-in-out"
              _hover={{ background: "rgba(255, 255, 255, 0.1)" }}
            >
              <Flex
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                gap="15px"
                position="relative"
                top="8px"
                width="100%"
                height="100%"
              >
                <TextIcon size="20px" />
                <Text fontSize="16px">
                  &lt;description&gt;
                </Text>
              </Flex>
            </Flex>
            
            {/* Gallery */}
            <Flex
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              width="100%"
              height="100%"
              minHeight="400px"
              maxHeight="400px"
              border="1px solid white"
              borderRadius="5px"
              cursor="pointer"
              transition="background 200ms ease-in-out"
              _hover={{ background: "rgba(255, 255, 255, 0.1)" }}
            >
              <Flex 
                flexDirection="column" 
                justifyContent="center" 
                alignItems="center" 
                gap="15px"
              >
                <AddImageIcon color="white" fontSize="40px" />
                <Text>
                  &lt;gallery_images&gt;
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

