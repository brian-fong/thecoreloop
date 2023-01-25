import { 
  Flex,
  Text,
} from '@chakra-ui/react';
import { ScrollBtn as ScrollBtnProps } from '../types';

function scrollTo(elem_id: string) {
  const scroll_elem: HTMLElement = document.getElementById(elem_id)!;
  scroll_elem.scrollIntoView();
}

export default function ScrollBtn({ elem_id, text }: ScrollBtnProps) {

  return (
    <Flex
      flexDir="column" 
      justify="center" 
      align="center" 
      width="min-content" 
      padding="10px 15px"
      bg="tcl_blue"
      border="6px double black" 
      boxShadow="0px 0px 0px 3px #4FD1C5, 
                 10px 10px 2px rgba(0, 0, 0, 0.5)"
      boxSizing="border-box"
      cursor="pointer"
      transition="background-color 200ms ease" 
      draggable="false" 
      userSelect="none"
      _hover={{
        bg: "tcl_blue_hover",
        boxShadow: "0px 0px 0px 3px #40a89f, \
                    10px 10px 2px rgba(0, 0, 0, 0.5)",
      }}
      onClick={() => scrollTo(elem_id)}
    >
      <Text
        fontSize="14px"
        color="black"
        whiteSpace="nowrap"
      >
        {text}
      </Text>
    </Flex>
  );
}

