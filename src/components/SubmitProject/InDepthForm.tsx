// Components
import {
  Button,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import {
  MdOutlineAddPhotoAlternate as AddImageIcon,
} from "react-icons/md";
import { VscTriangleUp as UpvoteIcon } from "react-icons/vsc";
import Description from "./Description";
import Name from "./Name";
import Thumbnail from "./Thumbnail";

export default function InDepthForm({ 
  image_width,
  image_height,
  name,
  setName,
  description,
  setDescription,
  thumbnail,
  setThumbnail
}: any) {
  // Event Handler: Submit Button
  function handleSubmit() {
    // Alert project submission form data
    const message: string = (
      "Project Details: \n"
      + ` - Name: "${name}" \n`
      + ` - Thumbnail: "${thumbnail}" \n`
      + ` - Description: "${description}" \n`
    );
    alert(message);
  }

  return (
    <Flex
      id="indepth-container"
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
        Build <Text display="inline" fontStyle="italic">In-Depth</Text> Preview
      </Heading>

      <Heading marginBottom="20px" fontSize="16px" fontWeight="300">
        The <Text display="inline" color="gray.300" fontSize="18px" fontStyle="italic" fontWeight="700">In-Depth</Text> page provides a deeper look for prospective gamers, investors, or creators.
      </Heading>

      <Heading marginBottom="30px" fontSize="16px" fontWeight="300">
        Click on the fields below to input details about the project. The result is what readers will see in the <Text display="inline" fontSize="18px" color="gray.300" fontStyle="italic" fontWeight="700">In-Depth</Text> page.
      </Heading>

      {/* Container: Thumbnail + Name + Links
+ Blockchain + Genre + Stage + Upvote */}
      <Flex
        flexDirection="row"
        justifyContent="start"
        alignItems="center"
        gap="10px"
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
          justifyContent="center"
          alignItems="start"
          gap="10px"
          height={image_height}
          minHeight={image_height}
        >
          {/* Container: Name + Links */}
          <Flex alignItems="center" gap="10px">
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

          <Flex gap="10px">
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
          justifyContent="center"
          alignItems="center"
          width="70px"
          minWidth="70px"
          height="80px"
          maxHeight="80px"
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

      {/* Container: Description + Gallery */}
      <Flex
        flexDirection="column"
        justifyContent="start"
        alignItems="center"
        gap="40px"
        padding="40px 0 20px"
        width="100%"
        height="100%"
      >

        {/* Description */}
        <Description 
          description={description} 
          setDescription={setDescription} 
        />

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
          onClick={handleSubmit}
        >
          SUBMIT
        </Button>
      </Flex>
    </Flex>
  )
}

