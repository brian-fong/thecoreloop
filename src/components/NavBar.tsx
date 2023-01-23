import { 
  Flex,
  Link,
} from '@chakra-ui/react'

export default function NavBar() {
  return (
    <Flex 
      flexDir="row" 
      gap="0px" 
      justify="center" 
      align="start" 
      wrap="wrap"
      width="100%" 
      minWidth="420px"
      bg="standard_bkg"
    >
      <Link 
        m="0px 30px" 
        p="0px 10px"
        fontSize="13px" 
        fontWeight="800" 
        color="white" 
        bg="blue"
        draggable="false" 
        userSelect="none"
        href="."
      >
        Home
      </Link>
      <Link 
        m="0px 30px" 
        p="0px 10px"
        fontSize="13px" 
        fontWeight="800" 
        color="black" 
        bg="standard_bkg"
        _hover={{ color: "white", bg: "blue" }}
        transition="background-color 200ms ease" 
        draggable="false" 
        userSelect="none"
      >
        Archive
      </Link>
      <Link 
        m="0px 30px" 
        p="0px 10px"
        fontSize="13px" 
        fontWeight="800" 
        color="black" 
        bg="standard_bkg"
        _hover={{ color: "white", bg: "blue" }}
        transition="background-color 200ms ease" 
        draggable="false" 
        userSelect="none"
        href="https://t.me/thecoreloop" 
        target="_blank"
      >
        Telegram
      </Link>
      <Link 
        m="0px 30px" 
        p="0px 10px"
        fontSize="13px" 
        fontWeight="800" 
        color="black" 
        bg="standard_bkg"
        _hover={{ color: "white", bg: "blue" }}
        transition="background-color 200ms ease" 
        draggable="false" 
        userSelect="none"
        href="https://twitter.com/0xkapital_k" 
        target="_blank"
      >
        Twitter
      </Link>
      <Link 
        m="0px 30px" 
        p="0px 10px"
        fontSize="13px" 
        fontWeight="800" 
        color="black" 
        bg="standard_bkg"
        _hover={{ color: "white", bg: "blue" }}
        transition="background-color 200ms ease" 
        draggable="false" 
        userSelect="none"
        href="https://github.com/0xfrian/thecoreloop" 
        target="_blank"
      >
        GitHub
      </Link>
    </Flex>
  );
}

