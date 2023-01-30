import { 
  Flex,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { ChatIcon, LinkIcon } from "@chakra-ui/icons";

export default function Article() {
  return (
    <Flex
      className="article-container"
      flexDir="column"
      gap="5px"
    >
      {/* Caption Container */}
      <Flex
        flexDir="row"
        justify="center"
        align="center"
        border="1px solid black"
      >
        <Flex
          flexDir="row"
          justify="center"
          align="center"
          p="5px"
          height="100%"
          bg="category_bkg"
          borderRight="1px solid black"
        >
          <ChatIcon color="white" boxSize="15px" userSelect="none" />
        </Flex>
        <Textarea
          p="4px"
          height="30px"
          minHeight="50px"
          bg="white"
          fontSize="14px"
          placeholder="A look at..."
          resize="vertical"
          style={{
            border: "none",
            borderRadius: "0px",
          }}
          _focusVisible={{
            outline: "1px solid blue",
          }}
        />
      </Flex>
      {/* URL Container */}
      <Flex
        flexDir="row"
        justify="center"
        align="center"
        border="1px solid black"
      >
        <Flex
          flexDir="row"
          justify="center"
          align="center"
          p="5px"
          height="100%"
          bg="category_bkg"
          borderRight="1px solid black"
        >
          <LinkIcon color="white" boxSize="15px" userSelect="none" />
        </Flex>
        <Input
          type="url"
          p="4px"
          width="100%"
          height="100%"
          bg="white"
          fontSize="14px"
          placeholder="https://..."
          style={{
            border: "none",
            borderRadius: "0px",
          }}
          _focusVisible={{
            outline: "1px solid blue",
          }}
        />
      </Flex>
    </Flex>
  );
}

