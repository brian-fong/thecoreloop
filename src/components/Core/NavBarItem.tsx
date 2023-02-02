import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Flex,
  Button,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

export function NavBarItem({ children, link }: any) {
  return (
    <Link 
      m="0px 30px" 
      p="0px 10px"
      fontSize="13px" 
      fontWeight="800" 
      color="black" 
      bg="standard_bkg"
      _hover={{ 
        color: "white", 
        bg: "rgba(0, 0, 0, 0.5)",
      }}
      transition="background-color 200ms ease" 
      draggable="false" 
      userSelect="none"
      href={link}
      target="_blank"
    >
      {children}
    </Link>
  );
}

export function NavBarItemDropDown() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button
          margin="0px 30px" 
          padding="0px 10px"
          height="100%"
          fontSize="13px" 
          fontWeight="800"
          color="black"
          background="none"
          border="none"
          borderRadius="0px"
          cursor="pointer"
          userSelect="none"
          _hover={{
            color: "white", 
            bg: "rgba(0, 0, 0, 0.5)",
          }}
        >
          GitHub
        </Button>
      </PopoverTrigger>
      <PopoverContent
        position="relative"
        top="-8px"
        width="min-content"
        border="1px solid black"
        borderRadius="0px"
      >
        <PopoverBody
          padding="0px"
        >
          <Flex
            flexDir="column"
            width="100%"
            borderRadius="none"
          >
            <Link 
              href={"https://github.com/0xfrian/thecoreloop-frontend"}
              p="0px 10px"
              fontSize="13px" 
              fontWeight="800" 
              color="black" 
              bg="standard_bkg"
              transition="background-color 200ms ease" 
              draggable="false" 
              userSelect="none"
              target="_blank"
              _hover={{ 
                color: "white", 
                bg: "rgba(0, 0, 0, 0.5)",
              }}
            >
              frontend
            </Link>
            <Link 
              href={"https://github.com/0xfrian/thecoreloop-backend"}
              p="0px 10px"
              fontSize="13px" 
              fontWeight="800" 
              color="black" 
              bg="standard_bkg"
              transition="background-color 200ms ease" 
              draggable="false" 
              userSelect="none"
              target="_blank"
              _hover={{ 
                color: "white", 
                bg: "rgba(0, 0, 0, 0.5)",
              }}
            >
              backend
            </Link>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

