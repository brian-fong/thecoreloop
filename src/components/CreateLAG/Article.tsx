import { 
  Flex,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { ChatIcon, LinkIcon } from "@chakra-ui/icons";

export default function Article({ updateLAG }: any) {
  return (
    <Flex
      className="article"
      flexDir="column"
      gap="5px"
    >
      {/* Caption Container */}
      <Flex
        flexDir="row"
        justify="center"
        align="center"
        background="gray.500"
        border="1px solid black"
      >
        <Flex
          flexDir="row"
          justify="center"
          align="center"
          p="5px"
          minWidth="30px"
          height="100%"
        >
          <ChatIcon
            boxSize="15px"
            color="white"
            userSelect="none"
          />
        </Flex>
        <Textarea
          className="caption"
          p="10px"
          height="30px"
          minHeight="50px"
          background="white"
          fontSize="14px"
          resize="vertical"
          style={{
            border: "none",
            borderRadius: "0px",
          }}
          onChange={() => updateLAG((updated: boolean) => !updated)}
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
        background="gray.500"
        border="1px solid black"
      >
        <Flex
          flexDir="row"
          justify="center"
          align="center"
          p="10px 5px"
          minWidth="30px"
          height="100%"
        >
          <LinkIcon 
            boxSize="15px" 
            color="white" 
            userSelect="none" 
          />
        </Flex>
        <Input
          className="url"
          type="url"
          p="10px"
          width="100%"
          height="100%"
          background="white"
          fontSize="14px"
          placeholder="https://..."
          style={{
            border: "none",
            borderRadius: "0px",
          }}
          onChange={() => updateLAG((updated: boolean) => !updated)}
          _focusVisible={{
            outline: "1px solid blue",
          }}
        />
      </Flex>
    </Flex>
  );
}

