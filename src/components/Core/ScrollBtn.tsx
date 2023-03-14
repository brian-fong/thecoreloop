import scrollTo from '../../utils/scroll';
import { Flex, Text } from '@chakra-ui/react';

export default function ScrollBtn({ elem_id, text }: any) {
  return (
    <Flex
      flexDir="column" 
      justify="center" 
      align="center" 
      width="min-content" 
      padding="10px 15px"
      color="black"
      bg="tcl_teal"
      border="1px solid black" 
      boxShadow="10px 10px 2px rgba(0, 0, 0, 0.5)"
      boxSizing="border-box"
      cursor="pointer"
      transition="background-color 200ms ease" 
      _focusVisible={{
        color: "white",
        bg: "tcl_teal_hover",
        outline: "1px solid blue",
      }}
      _hover={{
        color: "white",
        bg: "tcl_teal_hover",
      }}
      draggable="false" 
      userSelect="none"
      onClick={() => scrollTo(elem_id)}
    >
      <Text
        fontSize="14px"
        fontWeight="800"
        whiteSpace="nowrap"
      >
        {text}
      </Text>
    </Flex>
  );
}

