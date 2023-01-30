import { 
  Flex,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { ChatIcon, LinkIcon } from "@chakra-ui/icons";

export default function Article({ set_update_LAG }: any) {
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
          minWidth="30px"
          height="100%"
          bg="category_bkg"
          borderRight="1px solid black"
        >
          <ChatIcon 
            boxSize="15px" 
            color="white" 
            userSelect="none" 
          />
        </Flex>
        <Textarea
          p="5px 10px"
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
          onChange={() => set_update_LAG((update_LAG: boolean) => !update_LAG)}
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
          minWidth="30px"
          height="100%"
          bg="category_bkg"
          borderRight="1px solid black"
        >
          <LinkIcon 
            boxSize="15px" 
            color="white" 
            userSelect="none" 
          />
        </Flex>
        <Input
          type="url"
          p="5px 10px"
          width="100%"
          height="100%"
          bg="white"
          fontSize="14px"
          placeholder="https://..."
          style={{
            border: "none",
            borderRadius: "0px",
          }}
          onChange={() => set_update_LAG((update_LAG: boolean) => !update_LAG)}
          _focusVisible={{
            outline: "1px solid blue",
          }}
        />
      </Flex>
    </Flex>
  );
}

