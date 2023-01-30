import { Flex, Text } from '@chakra-ui/react';

function scrollTo(elem_id: string) {
  const scroll_elem: HTMLElement = document.getElementById(elem_id)!;
  scroll_elem.scrollIntoView();
}

export default function ScrollBtn({ elem_id, text }: any) {

  return (
    <Flex
      flexDir="column" 
      justify="center" 
      align="center" 
      width="min-content" 
      padding="10px 15px"
      bg="tcl_blue"
      border="1px solid black" 
      boxShadow="10px 10px 2px rgba(0, 0, 0, 0.5)"
      boxSizing="border-box"
      cursor="pointer"
      transition="background-color 200ms ease" 
      _focusVisible={{
        color: "white",
        bg: "tcl_blue_hover",
        outline: "1px solid blue",
      }}
      _hover={{
        color: "white",
        bg: "tcl_blue_hover",
      }}
      _active={{
        boxShadow: "none",
        transform: "translate(2px, 2px)",
      }}
      draggable="false" 
      userSelect="none"
      onClick={() => scrollTo(elem_id)}
      tabIndex={0}
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

