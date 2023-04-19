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
import ContributeButton from "../Header/ContributeButton";
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
        {/* Contribute */}
        <ContributeButton />

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

