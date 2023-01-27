import { 
  Flex,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { 
  ChatIcon,
  LinkIcon,
} from "@chakra-ui/icons";

export default function Article() {
  return (
    <Flex
      flexDir="column"
      gap="5px"
    >
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
          minHeight="30px"
          bg="white"
          style={{
            "border": "none",
            "borderRadius": "0px",
          }}
          _focusVisible={{
            outline: "1px solid blue",
          }}
          fontSize="14px"
          placeholder="A look at..."
          resize="vertical"
          isRequired
        />
      </Flex>
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
          style={{
            "border": "none",
            "borderRadius": "0px",
          }}
          _focusVisible={{
            outline: "1px solid blue",
          }}
          fontSize="14px"
          placeholder="https://..."
          isRequired
        />
      </Flex>
    </Flex>
  );
}

