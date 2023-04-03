// Components
import {
  Box,
  Flex,
  Image,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { VscTriangleUp as UpvoteIcon } from "react-icons/vsc";

// Hooks
import { useDisclosure } from "@chakra-ui/react";

// Useful Constants & Functions
import { STAGES } from "../../data/stages";
import { BLOCKCHAINS } from "../../data/blockchains";

export default function DiscoveryCard({
  image_width, image_height,
  blockchain,
  fundraising,
  genres,
  name,
  stage,
  tagline,
  thumbnail,
  upvotes,
}: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Split genres into string array
  genres = genres.split(",");

  // Assign fundraising
  if (fundraising) fundraising = "yes";
  else fundraising = "undisclosed"

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
      <Box id="left-container">
        <Image
          src={thumbnail}
          width={image_width}
          minWidth={image_width}
          height={image_height}
          minHeight={image_height}
          borderRadius="5px"
        />
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
            <Text
              padding="0"
              color="white"
              fontSize="20px"
              fontWeight="700"
              lineHeight="none"
              border="1px solid transparent"
              whiteSpace="nowrap"
              transition="all 200ms ease-in-out"
            >
              {name}
            </Text>

            {/* Blockchain */}
            {
              blockchain == "TBA"
                ? (
                  null
                ) : (
                  <Tooltip
                    label={blockchain}
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
                      borderRadius="full"
                    />
                  </Tooltip>
                )
            }
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
            overflow="hidden"
            textOverflow="ellipsis"
            userSelect="none"
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
          {/* Genres */}
          <Flex
            flexDirection="row"
            justifyContent="start"
            alignItems="center"
            padding="2px 8px"
            background="gray.700"
            border="1px solid transparent"
            borderRadius="10px"
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
          >
            <Text
              color="white"
              fontSize="16px"
              fontWeight="700"
              transition="all 200ms ease-in-out"
              userSelect="none"
              whiteSpace="nowrap"
            >
              🏷️ {genres[0]}
            </Text>
            {genres.length > 1
              ?
              <Tooltip
                isOpen={isOpen}
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
                >
                  +{genres.length-1}
                </Text>
              </Tooltip>
              : null
            }
          </Flex>

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
            userSelect="none"
            transition="all 200ms ease-in-out"
          >
            {STAGES[stage]} {stage}
          </Text>

          {/* Fundraising */}
          {
            fundraising == "yes"
              ? null
              : (
                <Text
                  padding="2px 8px"
                  color="white"
                  fontSize="16px"
                  fontWeight="700"
                  background="gray.700"
                  border="1px solid transparent"
                  borderRadius="10px"
                  whiteSpace="nowrap"
                  userSelect="none"
                  transition="all 200ms ease-in-out"
                >
                  👋 Raising
                </Text>
              )
          }
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
        <Flex
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
        >
          <UpvoteIcon color="white" size="25px" />
          <Text fontSize="16px">
            {upvotes}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

