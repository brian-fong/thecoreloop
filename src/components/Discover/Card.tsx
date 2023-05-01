// Components
import {
  Box,
  Button,
  Flex,
  Image,
  // Link,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { VscTriangleUp as UpvoteIcon } from "react-icons/vsc";
import Link from "next/link";
import FundraisingIcon from "../SubmitProject/FundraisingIcon";

// Hooks
import { useSession } from "next-auth/react";

// Useful Constants
import { STAGES } from "../../data/stages";
import { BLOCKCHAINS } from "../../data/blockchains";

export default function DiscoveryCard({
  onOpen_SignIn,
  setAction,
  image_width, image_height,
  blockchain,
  fundraising,
  genres,
  name,
  stage,
  studio,
  tagline,
  thumbnail,
  upvotes,
}: any) {

  // State variables
  const { status } = useSession();

  function getProfileRoute() {
    const studio_route: string = studio
      .toLowerCase()
      .replaceAll("&", "and")
      .replaceAll(" ", "-");
    const project_route: string = name
      .toLowerCase()
      .replaceAll("&", "and")
      .replaceAll(" ", "-");
    return "/projects/" + studio_route + "/" + project_route;
  }
  
  function handleUpvote() {
    if (status.toLowerCase() != "authenticated") {
      setAction("upvote");
      onOpen_SignIn();
    }
  }

  return (
    <Flex
      flexDirection="row"
      justifyContent="start"
      alignItems="center"
      gap="10px"
      width="100%"
      minWidth="600px"
      height="100%"
      transition="all 200ms ease-in-out"
    >
      {/* Thumbnail Image */}
      <Box id="left-container" position="relative">
        <Image
          src={thumbnail}
          width={image_width}
          minWidth={image_width}
          height={image_height}
          minHeight={image_height}
          borderRadius="full"
          cursor="pointer"
          transition="all 200ms ease-in-out"
          _hover={{
            filter: "brightness(75%)",
          }}
        />
        <FundraisingIcon fundraising={fundraising} />
      </Box>

      <Flex
        id="middle-container"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="start"
        width="100%"
        height="100%"
        minHeight={image_height}
      >
        <Flex flexDirection="column" width="100%">
          <Flex
            flexDirection="row"
            justifyContent="start"
            alignItems="center"
            gap="20px"
            width="100%"
            minHeight="32px"
          >
            {/* Name */}
            <Link href={getProfileRoute()}>
              <Text
                padding="0"
                color="white"
                fontSize="20px"
                fontWeight="700"
                lineHeight="none"
                border="1px solid transparent"
                cursor="pointer"
                whiteSpace="nowrap"
                transition="all 200ms ease-in-out"
                _hover={{
                  filter: "brightness(75%)",
                  textDecoration: "underline",
                }}
              >
                {name}
              </Text>
            </Link>

            {/* Blockchain */}
            <Tooltip
              label={blockchain == "TBA"
                ? "Blockchain to be announced"
                : blockchain
              }
              placement="right-start"
              hasArrow
            >
              <Image
                src={Object.keys(BLOCKCHAINS).includes(blockchain) 
                  ? BLOCKCHAINS[blockchain]
                  : BLOCKCHAINS["Other"]
                }
                width="30px"
                height="30px"
                borderRadius={blockchain == "TBA" ? "none" : "full"}
              />
            </Tooltip>
          </Flex>

          {/* Tagline */}
          <Text
            padding="0"
            width="100%"
            height="100%"
            color="white"
            fontSize="16px"
            lineHeight="5"
            lang="en"
            border="1px solid transparent"
            cursor="default"
            overflow="hidden"
            textOverflow="ellipsis"
            transition="all 200ms ease-in-out"
            style={{
              display: "-webkit-box",
              hyphens: "auto",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
            }}
          >
            {tagline}
          </Text>
        </Flex>

        <Flex flexDirection="row" alignItems="start" gap="10px">
          {/* Stage */}
          <Text
            padding="2px 8px"
            color="white"
            fontSize="16px"
            fontWeight="700"
            background="gray.700"
            border="1px solid transparent"
            borderRadius="10px"
            whiteSpace="nowrap"
            transition="all 200ms ease-in-out"
          >
            {STAGES[stage]} {stage}
          </Text>

          {/* Genres */}
          <Flex
            flexDirection="row"
            justifyContent="start"
            alignItems="center"
            padding="2px 8px"
            background="gray.700"
            border="1px solid transparent"
            borderRadius="10px"
          >
            <Text
              color="white"
              fontSize="16px"
              fontWeight="700"
              transition="all 200ms ease-in-out"
              cursor="default"
              whiteSpace="nowrap"
            >
              🏷️ {genres[0]}
            </Text>
            {genres.length > 1
              ?
              <Tooltip
                label={[...genres].slice(1).sort().join(", ")}
                placement="bottom-end"
                offset={[10, 10]}
                arrowSize={12}
                hasArrow
              >
                <Text
                  marginLeft="5px"
                  padding="0 4px"
                  color="white"
                  fontSize="16px"
                  fontWeight="700"
                  background="rgba(0, 0, 0, 0.3)"
                  borderRadius="7px"
                  cursor="default"
                >
                  +{genres.length-1}
                </Text>
              </Tooltip>
              : null
            }
          </Flex>
        </Flex>
      </Flex>

      {/* Upvote */}
      <Flex
        id="right-container"
        flexDirection="column"
        justifyContent="start"
        alignItems="center"
        gap="10px"
        height={image_height}
        minHeight={image_height}
      >
        <Button
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          padding="10px 0"
          width="80px"
          minWidth="80px"
          maxWidth="80px"
          height="100%"
          border="1px solid white"
          borderRadius="5px"
          cursor="pointer"
          userSelect="none"
          transition="all 200ms ease-in-out"
          _hover={{ background: "rgba(255, 255, 255, 0.1)" }}
          _active={{ background: "rgba(255, 255, 255, 0.2)" }}
          onClick={handleUpvote}
        >
          <UpvoteIcon color="white" size="25px" />
          <Text fontSize="16px">
            {upvotes}
          </Text>
        </Button>
      </Flex>
    </Flex>
  );
}

