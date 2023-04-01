// Components
import {
  Button,
  Flex,
  Image,
  Input,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Text,
} from "@chakra-ui/react";
import {
  BsFillArrowRightSquareFill as RightArrow
} from "react-icons/bs";

// Hooks
import { useDisclosure } from "@chakra-ui/react";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      id="header-container"
      flexDirection="row"
      gap="10px"
      justifyContent="start"
      alignItems="start"
      position="sticky"
      top="0"
      width="100%"
      minWidth="800px"
      height="70px"
      backdropFilter="blur(5px)"
      zIndex={10}
      draggable={false}
    >
      {/* Thumbnail */}
      <Link href="/discovery" _focusVisible={{}} tabIndex={-1}>
        <Image
          src="./thecoreloop-logo-alt.png"
          objectFit="cover"
          width="auto"
          minWidth="70px"
          height="70px"
          loading="lazy"
          draggable={false}
        />
      </Link>

      {/* Contribute Container */}
      <Flex
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        gap="30px"
        marginTop="15px"
        marginLeft="30px"
      >
        <Popover gutter={0}>
          <PopoverTrigger>
            <Button
              display="flex"
              flexDirection="row"
              justifyContent="start"
              alignItems="center"
              margin="0"
              padding="5px 10px"
              height="min-content"
              color={!isOpen ? "gray.400" : "gray.300"}
              fontSize="18px"
              background={!isOpen ? "transparent" : "rgba(0, 0, 0, 0.3)"}
              borderRadius={!isOpen ? "0" : "10px"}
              transition="all 200ms ease-in-out"
              _focusVisible={{ 
                color: "gray.300",
                background: "rgba(0, 0, 0, 0.3)",
                borderRadius: "10px",
              }}
              _hover={{
                color: "gray.200",
              }}
              _active={{}}
            >
              CONTRIBUTE
            </Button>
          </PopoverTrigger>
          <PopoverContent 
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="start"
            gap="10px"
            padding="5px 10px"
            maxWidth="140px"
            color="white"
            background="#1A1B23"
            border="none"
            borderRadius="10px"
            _focusVisible={{
              outline: "none",
              border: "none"
            }}
            zIndex={10}
          >
            <Link
              href="./submit_project"
              width="100%"
              color="white"
              letterSpacing="1px"
              fontWeight="700"
              whiteSpace="nowrap"
              cursor="pointer"
              transition="all 200ms ease-in-out"
              _focusVisible={{
                letterSpacing: "3px",
                filter: "brightness(0.8)",
              }}
              _hover={{
                letterSpacing: "3px",
                filter: "brightness(0.8)",
              }}
            >
              PROJECT
            </Link>
            <Text
              width="100%"
              color="white"
              letterSpacing="1px"
              fontWeight="700"
              whiteSpace="nowrap"
              cursor="not-allowed"
              transition="all 200ms ease-in-out"
              _focusVisible={{
                letterSpacing: "3px",
                filter: "brightness(0.8)",
              }}
              _hover={{
                letterSpacing: "3px",
                filter: "brightness(0.8)",
              }}
            >
              EVENT
            </Text>
            <Text
              width="100%"
              color="white"
              letterSpacing="1px"
              fontWeight="700"
              whiteSpace="nowrap"
              cursor="not-allowed"
              transition="all 200ms ease-in-out"
              _focusVisible={{
                letterSpacing: "3px",
                filter: "brightness(0.8)",
              }}
              _hover={{
                letterSpacing: "3px",
                filter: "brightness(0.8)",
              }}
            >
              DISCUSSION
            </Text>
          </PopoverContent>
        </Popover>

        {/* Explore */}
        <Input
          type="text"
          margin="0"
          padding="5px 10px"
          width="min-content"
          maxWidth="200px"
          height="min-content"
          fontSize="18px"
          background="transparent"
          placeholder="EXPLORE"
          _placeholder={{
            color: "gray.400",
            fontSize: "18px",
            fontWeight: "700",
          }}
          transition="all 300ms ease-in-out"
          _focusVisible={{
            background: "rgba(0, 0, 0, 0.6)",
          }}
          _hover={{
            background: "rgba(0, 0, 0, 0.6)",
          }}
          border="none"
        />
      </Flex>

      {/* Profile Picture Container */}
      <Flex
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        marginLeft="auto"
        height="100%"
        cursor="pointer"
        transition="filter 200ms ease-in-out"
        _hover={{
          filter: "brightness(0.8)",
        }}
      >
        <Image
          src="https://pbs.twimg.com/profile_images/1635117890440695808/j3Ww7-z7_400x400.jpg"
          objectFit="cover"
          borderRadius="50%"
          marginRight="20px"
          width="50px"
          minWidth="50px"
          height="50px"
          minHeight="50px"
          boxShadow="3px 3px 3px black"
        />
      </Flex>
    </Flex>
  );
}

