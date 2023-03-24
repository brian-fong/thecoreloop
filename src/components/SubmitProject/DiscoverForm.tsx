// Components
import {
  Flex,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import Name from "./Name";
import Thumbnail from "./Thumbnail";
import { VscTriangleUp as UpvoteIcon } from "react-icons/vsc";

export default function DiscoverForm({ 
  image_width,
  image_height,
  name,
  setName,
  thumbnail,
  setThumbnail,
}: any) {

  return (
    <Flex
      flexDirection="column"
      justifyContent="start"
      alignItems="start"
      width="100%"
    >
      <Heading
        marginBottom="10px"
        color="white"
        fontSize="24px"
        fontWeight="700"
      >
        Build Discover Preview
      </Heading>

      <Text marginBottom="20px" fontSize="16px">
        The{" "}
        <Link
          href="./discover" 
          color="purple.400"
          fontSize="18px"
          fontStyle="italic"
          fontWeight="700"
          textDecoration="underline"
          whiteSpace="pre-wrap"
        >
          Discover
        </Link>
        {" "}section showcases a collection of web3-gaming startups submitted by fellow members of the project's community or team.
      </Text>

      <Text fontSize="16px">
        2. Click on the fields below and fill in the corresponding information. The result is what users will see in the{" "}
        <Link
          href="./discover" 
          color="purple.400"
          fontSize="18px"
          fontStyle="italic"
          fontWeight="700"
          textDecoration="underline"
          whiteSpace="pre-wrap"
        >
          Discover
        </Link>
        {" "}section.
      </Text>

      <Flex
        id="discover-container"
        flexDirection="row"
        justifyContent="start"
        alignItems="center"
        gap="15px"
        marginTop="30px"
        width="100%"
        height={image_height}
        minHeight={image_height}
      >
        {/* Thumbnail Image */}
        <Thumbnail
          width={image_width}
          height={image_height}
          thumbnail={thumbnail} 
          setThumbnail={setThumbnail} 
        />

        {/* Container: Name + Links + Blockchain + Genres + Stage */}
        <Flex
          flexDirection="column"
          justifyContent="space-between"
          alignItems="start"
          gap="15px"
          height={image_height}
          minHeight={image_height}
        >
          {/* Container: Name + Links */}
          <Flex alignItems="center" gap="15px">
            <Name name={name} setName={setName} />

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

          <Flex gap="15px">
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
                  ⚙️
                </Text>
                <Text fontSize="14px">
                  &lt;stage&gt;
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        {/* Upvote */}
        <Flex
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          marginLeft="auto"
          padding="20px 15px"
          minWidth="60px"
          height="100%"
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
    </Flex>
  );
}

