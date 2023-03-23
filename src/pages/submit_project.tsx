// Components
import {
  Flex,
  FormLabel,
  Heading,
  Radio,
  RadioGroup,
  Switch,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import Header from "../components/Home/Header";
import {
  MdOutlineAddAPhoto as AddThumbnailIcon,
  MdOutlineAddPhotoAlternate as AddImageIcon,
  MdSubdirectoryArrowRight as IndentArrowIcon,
} from "react-icons/md";
import {
  VscTriangleUp as UpvoteIcon,
} from "react-icons/vsc";
import { useState, useEffect } from "react";

export default function submit_project() {
  const [isTeam, setIsTeam] = useState<boolean>(false);
  const [isRaising, setIsRaising] = useState<boolean>(false);
  const [isPartnering, setIsPartnering] = useState<boolean>(false);

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

          <Flex
            flexDirection="column"
            justifyContent="start"
            alignItems="start"
            marginBottom="50px"
            width="100%"
          >
            <Heading
              width="100%"
              color="white"
              fontSize="32px"
              marginBottom="10px"
            >
              Submit a Project
            </Heading>

            {/* Part-of-the-team? */}
            <Flex
              flexDirection="row"
              justifyContent="start"
              alignItems="start"
              gap="10px"
            >
              <FormLabel htmlFor="user-type" fontSize="16px">
                Are you part of the team building this project?
              </FormLabel>
              <RadioGroup
                display="flex"
                flexDirection="row"
                justifyContent="start"
                alignItems="center"
                gap="20px"
                value={isTeam ? "yes" : "no"}
                onChange={(value) => setIsTeam(value == "yes")}
              >
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </RadioGroup>
            </Flex>

            <Flex 
              id="team-fields-container"
              flexDirection="column"
            >
            {/* Fundraising-at-the-moment? */}
              <Flex
                flexDirection="row"
                justifyContent="start"
                alignItems="start"
                marginLeft="30px"
                gap="10px"
              >
                <IndentArrowIcon fontSize="16px" />
                <FormLabel 
                  htmlFor="project-fundraising" 
                  fontSize="16px"
                  filter={isTeam ? "brightness(1.0)" : "brightness(0.5)"}
                  transition="filter 300ms ease-in-out"
                >
                  Is your project fundraising at the moment?
                </FormLabel>
                <RadioGroup
                  display="flex"
                  flexDirection="row"
                  justifyContent="start"
                  alignItems="center"
                  gap="20px"
                  value={isRaising ? "yes" : "no"}
                  onChange={(value) => setIsRaising(value == "yes")}
                  isDisabled={!isTeam}
                >
                  <Radio value="yes">Yes</Radio>
                  <Radio value="no">No</Radio>
                </RadioGroup>
              </Flex>

              {/* Open-to-partnerships? */}
              <Flex
                flexDirection="row"
                justifyContent="start"
                alignItems="start"
                marginLeft="30px"
                gap="10px"
              >
                <IndentArrowIcon fontSize="16px" />
                <FormLabel 
                  htmlFor="project-partnerships" 
                  fontSize="16px"
                  filter={isTeam ? "brightness(1.0)" : "brightness(0.5)"}
                  transition="filter 300ms ease-in-out"
                >
                  Is your project open to blockchain partnerships?
                </FormLabel>
                <RadioGroup
                  display="flex"
                  flexDirection="row"
                  justifyContent="start"
                  alignItems="center"
                  gap="20px"
                  value={isPartnering ? "yes" : "no"}
                  onChange={(value) => setIsPartnering(value == "yes")}
                  isDisabled={!isTeam}
                >
                  <Radio value="yes">Yes</Radio>
                  <Radio value="no">No</Radio>
                </RadioGroup>
              </Flex>
            </Flex>
          </Flex>

          {/* Container: Thumbnail + Title + Links + Genre + Upvote */}
          <Flex
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            height="100px"
            minHeight="100px"
          >
            <Flex
              flexDirection="row"
              justifyContent="start"
              alignItems="center"
              gap="30px"
              height="100%"
            >
              {/* Thumbnail Image */}
              <Flex 
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                width="100px"
                minWidth="100px"
                height="100px"
                minHeight="100px"
                border="2px solid white"
                borderRadius="50%"
                cursor="pointer"
                userSelect="none"
                transition="background 200ms ease-in-out"
                _hover={{ background: "rgba(255, 255, 255, 0.1)" }}
              >
                <AddThumbnailIcon color="white" size="28px" />
              </Flex>

              {/* Name + Genre(s) */}
              <Flex
                flexDirection="column"
                justifyContent="space-between"
                alignItems="start"
                height="100%"
              >
                <Flex alignItems="center" gap="15px">
                  <Flex 
                    padding="5px 15px"
                    color="white" 
                    letterSpacing="3px"
                    border="1px solid white"
                    borderRadius="5px"
                    cursor="pointer"
                    whiteSpace="nowrap"
                    transition="background 200ms ease-in-out"
                    _hover={{ background: "rgba(255, 255, 255, 0.1)" }}
                  >
                    <Flex alignItems="center" gap="10px" userSelect="none">
                      <Text fontSize="24px">
                        🏗️
                      </Text>
                      <Text fontSize="24px">
                        &lt;project_name&gt;
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex
                    flexDirection="row"
                    justifyContent="center"
                    alignItems="center"
                    padding="5px 10px"
                    height="min-content"
                    border="1px solid white"
                    borderRadius="5px"
                    cursor="pointer"
                    transition="background 200ms ease-in-out"
                    _hover={{ background: "rgba(255, 255, 255, 0.1)" }}
                  >
                    <Flex gap="10px" userSelect="none">
                      <Text fontSize="16px">
                        🌎
                      </Text>
                      <Text fontSize="16px">
                        &lt;links&gt;
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>

                <Flex gap="20px">
                  <Flex
                    padding="5px 10px"
                    minHeight="32px"
                    color="white" 
                    border="1px solid white"
                    borderRadius="5px"
                    cursor="pointer"
                    transition="background 200ms ease-in-out"
                    _hover={{ background: "rgba(255, 255, 255, 0.1)" }}
                  >
                    <Flex alignItems="center" gap="10px" userSelect="none">
                      <Text fontSize="14px">
                        ⚙️
                      </Text>
                      <Text fontSize="14px">
                        &lt;stage&gt;
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex
                    padding="5px 10px"
                    minHeight="32px"
                    color="white" 
                    border="1px solid white"
                    borderRadius="5px"
                    cursor="pointer"
                    transition="background 200ms ease-in-out"
                    _hover={{ background: "rgba(255, 255, 255, 0.1)" }}
                  >
                    <Flex alignItems="center" gap="10px" userSelect="none">
                      <Text fontSize="14px">
                        🏷️
                      </Text>
                      <Text fontSize="14px">
                        &lt;genres&gt;
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex
                    padding="5px 10px"
                    minHeight="32px"
                    color="white" 
                    border="1px solid white"
                    borderRadius="5px"
                    cursor="pointer"
                    transition="background 200ms ease-in-out"
                    _hover={{ background: "rgba(255, 255, 255, 0.1)" }}
                  >
                    <Flex alignItems="center" gap="10px" userSelect="none">
                      <Text fontSize="14px">
                        ⛓️
                      </Text>
                      <Text fontSize="14px">
                        &lt;blockchain&gt;
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>

            {/* Upvote */}
            <Flex
              flexDirection="column"
              justifyContent="space-between"
              alignItems="center"
              padding="20px 15px"
              minWidth="60px"
              height="100%"
              minHeight="90px"
              border="1px solid white"
              borderRadius="10px"
              userSelect="none"
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
            gap="40px"
            padding="40px 0 20px"
            width="100%"
            maxWidth="700px"
            height="100%"
          >

            {/* Description */}
            <Flex
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
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
              <Flex alignItems="center" gap="10px" userSelect="none">
                <Text fontSize="16px">
                  📝
                </Text>
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
                gap="20px"
              >
                <AddImageIcon size="50px" />
                <Flex alignItems="center" gap="10px" userSelect="none">
                  <Text fontSize="16px">
                    🖼️
                  </Text>
                  <Text fontSize="16px">
                    &lt;gallery_images&gt;
                  </Text>
                </Flex>
              </Flex>
            </Flex>

            {/* Contributors */}
            <Flex
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              padding="10px"
              width="100%"
              minWidth="100%"
              minHeight="120px"
              border="1px solid white"
              borderRadius="5px"
              cursor="pointer"
              transition="background 200ms ease-in-out"
              _hover={{ background: "rgba(255, 255, 255, 0.1)" }}
            >
              <Flex alignItems="center" gap="10px" userSelect="none">
                <Text fontSize="16px">
                  👷
                </Text>
                <Text fontSize="16px">
                  &lt;contributors&gt;
                </Text>
              </Flex>
            </Flex>

            <hr 
              style={{
                width: "100%",
                borderTop: "2px solid white",
              }}
            />

            {/* Story */}
            <Flex
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              padding="10px"
              width="100%"
              minWidth="100%"
              minHeight="150px"
              border="1px solid white"
              borderRadius="5px"
              cursor="pointer"
              transition="background 200ms ease-in-out"
              _hover={{ background: "rgba(255, 255, 255, 0.1)" }}
            >
              <Flex alignItems="center" gap="10px" userSelect="none">
                <Text fontSize="16px">
                  📖
                </Text>
                <Text fontSize="16px">
                  &lt;story&gt;
                </Text>
              </Flex>
            </Flex>

          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

