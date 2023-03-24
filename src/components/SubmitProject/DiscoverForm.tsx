// Components
import {
  Flex,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import { VscTriangleUp as UpvoteIcon } from "react-icons/vsc";
import Name from "./Name";
import Tagline from "./Tagline";
import Thumbnail from "./Thumbnail";

export default function DiscoverForm({ 
  image_width,
  image_height,
  name,
  setName,
  tagline,
  setTagline,
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
        gap="10px"
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
          gap={(!name && !tagline) ? "10px" : "0"}
          width="100%"
          height={image_height}
          minHeight={image_height}
        >
          <Name name={name} setName={setName} />

          <Tagline
            tagline={tagline}
            setTagline={setTagline}
          />
        </Flex>

        {/* Upvote */}
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          padding="20px 15px"
          width="60px"
          maxWidth="60px"
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

