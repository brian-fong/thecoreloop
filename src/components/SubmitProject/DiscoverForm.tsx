// Components
import {
  Flex,
  Heading,
  Image,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { VscTriangleUp as UpvoteIcon } from "react-icons/vsc";
import Blockchain from "./Blockchain";
import Genres from "./Genres";
import Name from "./Name";
import Tagline from "./Tagline";
import Thumbnail from "./Thumbnail";

export default function DiscoverForm({
  image_width, image_height,
  blockchain, setBlockchain,
  fundraising,
  genres, setGenres,
  name, setName,
  tagline, setTagline,
  thumbnail, setThumbnail,
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
        Build <Text display="inline" fontStyle="italic">Discover</Text> Preview
      </Heading>

      <Heading marginBottom="20px" fontSize="16px" fontWeight="300">
        The <Text display="inline" color="gray.300" fontSize="18px" fontStyle="italic" fontWeight="700">Discover</Text> section showcases a collection of web3-gaming startups submitted by fellow members of the project's community or team.
      </Heading>

      <Heading marginBottom="40px" fontSize="16px" fontWeight="300">
        2. Click on the fields below to input details about the project. The result is what readers will see in the <Text display="inline" fontSize="18px" color="gray.300" fontStyle="italic" fontWeight="700">Discover</Text> section.
      </Heading>

      <Flex
        id="discover-container"
        flexDirection="row"
        justifyContent="start"
        alignItems="center"
        gap="15px"
        padding="10px"
        width="100%"
        background="rgba(0, 0, 0, 0.3)"
        borderRadius="10px"
      >
        {/* Thumbnail Image */}
        <Thumbnail
          image_width={image_width} image_height={image_height}
          thumbnail={thumbnail} setThumbnail={setThumbnail} 
        />

        {/* Container: Name + Links + Blockchain + Genres + Stage */}
        <Flex
          id="middle-container"
          flexDirection="column"
          justifyContent="center"
          alignItems="start"
          gap="10px"
          width="100%"
        >
          <Flex 
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            gap="10px" 
            width="100%"
          >
            {/* Name */}
            <Name name={name} setName={setName} />

            {/* Fundraising Icon */}
            <Tooltip 
              label="This project is currently fundraising" 
              whiteSpace="nowrap"
              placement="top-start"
              visibility={fundraising == "yes" ? "visible" : "hidden"}
              offset={[10, 12]}
              arrowSize={15}
              hasArrow
            >
              <Image
                src="./piggy-bank-icon.png"
                width="30px"
                height="30px"
                opacity={fundraising == "yes" ? "100%" : "0%"}
                transition="all 300ms ease-in-out"
              />
            </Tooltip>
          </Flex>

          <Tagline
            tagline={tagline}
            setTagline={setTagline}
          />

          <Flex flexDirection="row" alignItems="center" gap="10px">
            <Blockchain 
              blockchain={blockchain}
              setBlockchain={setBlockchain}
            />

            <Genres
              genres={genres}
              setGenres={setGenres}
            />
          </Flex>

        </Flex>

        {/* Upvote */}
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          padding="10px 0"
          width="70px"
          minWidth="70px"
          maxWidth="70px"
          height="100%"
          minHeight={image_height}
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

