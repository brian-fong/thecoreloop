import { 
  Flex,
  Link,
  Button,
} from '@chakra-ui/react'

export default function NavBar() {
  return (
    <Flex flexDir="row" gap="80px" justify="center" align="center" width="100%" bg="standard_bkg">
      <Button size="xs" m="0px" p="0px 10px" fontSize="13px" fontWeight="800" borderRadius="0px" color="white" bg="blue"
        _hover={{ color:"white", bg: "blue" }} draggable="false"
      >
        Home
      </Button>
      <Button size="xs" m="0px" p="0px 10px" fontSize="13px" fontWeight="800" borderRadius="0px" bg="standard_bkg"
        _hover={{ color:"white", bg: "blue" }} draggable="false"
      >
        Archive
      </Button>
      <Button size="xs" m="0px" p="0px 10px" fontSize="13px" fontWeight="800" borderRadius="0px" bg="standard_bkg"
        _hover={{ color:"white", bg: "blue" }} draggable="false"
      >
        <Link href="https://twitter.com/0xkapital_k" target="_blank" draggable="false"
          _hover={{ textDecoration: "none" }}
        >
          Twitter
        </Link>
      </Button>
      <Button size="xs" m="0px" p="0px 10px" fontSize="13px" fontWeight="800" borderRadius="0px" bg="standard_bkg"
        _hover={{ color:"white", bg: "blue" }} draggable="false"
      >
        <Link href="https://t.me/thecoreloop" target="_blank" draggable="false"
          _hover={{ textDecoration: "none" }}
        >
          Telegram
        </Link>
      </Button>
      <Button size="xs" m="0px" p="0px 10px" fontSize="13px" fontWeight="800" borderRadius="0px" bg="standard_bkg"
        _hover={{ color:"white", bg: "blue" }} draggable="false"
      >
        <Link href="https://github.com/0xFrian/thecoreloop" target="_blank" draggable="false"
          _hover={{ textDecoration: "none" }}
        >
          GitHub
        </Link>
      </Button>
    </Flex>
  );
}

