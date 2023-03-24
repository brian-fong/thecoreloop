import {
  Button,
  Flex, 
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import {
  AddIcon,
  ChatIcon,
  SearchIcon,
} from "@chakra-ui/icons"

export default function LeftColumn() {
  return (
    <Flex
      id="left-column"
      flexDirection="column"
      justifyContent="start"
      alignItems="center"
      gap="2rem"
      margin="1.5rem 0"
      padding="2rem"
      maxWidth="320px"
      minHeight="100vh"
      borderRight="1px solid white"
    >
      <InputGroup
        background="#1e1f24"
        transition="all 200ms ease-in-out"
      >
        <InputLeftElement
          children={ <SearchIcon /> }
          pointerEvents="none"  
        />
        <Input
          placeholder="Search"
          borderRadius="0"
          focusBorderColor="tcl_teal"
        />
      </InputGroup>

      <Button 
        leftIcon={ <AddIcon /> }
        appearance="none"
        width="100%"
        background="#1e1f24"
        border="1px solid white"
        borderRadius="0"
        transition="all 200ms ease-in-out"
        _active={{
          background: "black",
        }}
        _hover={{
          color: "#4FD1C5",
          border: "1px solid #4FD1C5"
        }}
      >
        <Text
          margin="0"
          padding="0"
          paddingLeft="0.5rem"
          width="100%"
          textAlign="start"
        >
          Submit a project!
        </Text>
      </Button>

      <Flex
        flexDirection="column"
        width="100%"
      >
        <Button 
          leftIcon={ <ChatIcon /> }
          appearance="none"
          width="100%"
          background="#1e1f24"
          border="1px solid white"
          borderRadius="0"
          transition="all 200ms ease-in-out"
          _active={{
            background: "black",
          }}
          _hover={{
            color: "#4FD1C5",
            border: "1px solid #4FD1C5"
          }}
        >
          <Text 
            margin="0"
            padding="0"
            paddingLeft="0.5rem"
            width="100%"
            textAlign="start"
          >
            Start a Discussion
          </Text>
        </Button>
        <Text width="100%" textAlign="end">Coming Soon</Text>
      </Flex>
    </Flex>
  );
}

