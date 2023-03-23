// Components
import {
  Button,
  Flex,
  FormLabel,
  Heading,
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
import { VscTriangleUp as UpvoteIcon } from "react-icons/vsc";
import Name from "../components/SubmitProject/Name";

// Hooks
import { useFormik } from "formik";
import { useRef } from "react";
import useProjectState from "../hooks/useProjectState";

export default function submit_project() {
  // State Variable: Project
  const { isTeamMember, setIsTeamMember } = useProjectState();

  // Refs: Fundraising + Partnerships
  const raising_node = useRef<any>();
  const partnerships_node = useRef<any>();

  const formik = useFormik({
    initialValues: {
      isTeamMember: false,
      isRaising: false,
      isPartnerships: false,
    },
    onSubmit: (values) => {
      // Alert user input
      alert(JSON.stringify(values, null, 2));
    },
  });

  function handleChangeTeam() {
    // Case: Switching from Part-of-team to Not-part-of-team
    if (isTeamMember) {
      if (raising_node.current?.checked) raising_node.current.click();
      if (partnerships_node.current?.checked) partnerships_node.current.click();
    }

    // Toggle isTeamMember state variable
    setIsTeamMember((isTeamMember: boolean) => !isTeamMember);
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
        background="#282a36"
      >
        {/* Header */}
        <Header />

        {/* Content Container */}
        <form onSubmit={formik.handleSubmit}>
          <Flex
            id="content-container"
            flexDirection="column"
            justifyContent="start"
            alignItems="center"
            padding="20px 50px 30px"
            width="100%"
            minWidth="800px"
            maxWidth="1000px"
            height="100%"
          >
            <Flex
              flexDirection="column"
              justifyContent="start"
              alignItems="start"
              marginBottom="30px"
              width="100%"
            >
              <Heading
                color="white"
                fontSize="32px"
                marginBottom="20px"
              >
                Submit a Project
              </Heading>

              {/* Part-of-the-team? */}
              <Flex
                flexDirection="row"
                justifyContent="space-between"
                alignItems="start"
                gap="10px"
              >
                <FormLabel htmlFor="isTeamMember" fontSize="16px">
                  Are you part of the team building this project?
                </FormLabel>
                <Switch
                  id="isTeamMember"
                  name="isTeamMember"
                  position="relative"
                  top="3px"
                  colorScheme="purple"
                  value={formik.values.isTeamMember.toString()}
                  onChange={(event) => {
                    handleChangeTeam();
                    formik.handleChange(event);
                  }}
                />
              </Flex>

              <Flex flexDirection="column">
                {/* Fundraising-at-the-moment? */}
                <Flex
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="start"
                  gap="10px"
                  width="100%"
                  filter={isTeamMember
                    ? "brightness(1.0)"
                    : "brightness(0.5)"
                  }
                  transition="filter 300ms ease-in-out"
                >
                  <Flex gap="10px" marginLeft="30px">
                    <IndentArrowIcon fontSize="16px" />
                    <FormLabel
                      htmlFor="isFundraising"
                      fontSize="16px"
                    >
                      Is your project fundraising at the moment?
                    </FormLabel>
                  </Flex>
                  <Switch
                    id="isRaising"
                    name="isRaising"
                    ref={raising_node}
                    position="relative"
                    top="3px"
                    colorScheme="blue"
                    value={formik.values.isRaising.toString()}
                    onChange={formik.handleChange}
                    isDisabled={!isTeamMember}
                  />
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
                    {/* Project Name */}
                    <Name />

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

              <Button
                type="submit"
                display="flex"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                marginTop="20px"
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
              >
                SUBMIT
              </Button>
            </Flex>
          </Flex>
        </form>
      </Flex>
    </>
  );
}

