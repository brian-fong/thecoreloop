// Components
import {
  Button,
  Flex,
  Image,
  Input,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import ProfileDisplay from "../User/ProfileDisplay";

export default function Header() {
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
      <Link href="/discovery">
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

      {/* Container: Contribute + Explore */}
      <Flex
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        gap="30px"
        marginLeft="30px"
        height="100%"
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
              color="gray.400"
              fontSize="18px"
              background="transparent"
              borderRadius="5px"
              transition="all 200ms ease-in-out"
              _focusVisible={{
                color: "gray.300",
                background: "rgba(0, 0, 0, 0.3)",
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
            maxWidth="130px"
            color="white"
            background="#1A1B23"
            border="none"
            borderRadius="5px"
            _focusVisible={{
              outline: "none",
              border: "none"
            }}
            zIndex={10}
          >
            <Link href="./submit_project">
              <Button
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
                borderRadius="5px 5px 0 0"
              >
                PROJECT
              </Button>
            </Link>
            <Button
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
            >
              EVENT
            </Button>
            <Button
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
            >
              DISCUSSION
            </Button>
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
          borderRadius="5px"
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
            _placeholder: {
              color: "gray.200",
            }
          }}
          border="none"
        />
      </Flex>

      {/* Profile Picture Container */}
      <ProfileDisplay />
    </Flex>
  );
}

