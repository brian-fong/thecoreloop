// Components
import {
  Flex,
  Image,
} from "@chakra-ui/react";
import SubmitButton from "./SubmitButton";
import ExploreInput from "./ExploreInput";
import Link from "next/link";
import Profile from "./Profile";

export default function Header({ min_width, onOpen_SignIn }: any) {
  return (
    <Flex
      id="header-container"
      flexDirection="row"
      gap="10px"
      justifyContent="start"
      alignItems="start"
      position="sticky"
      top="0"
      paddingRight="30px"
      width="100%"
      minWidth={`${min_width}px`}
      height="70px"
      backdropFilter="blur(5px)"
      zIndex={10}
      draggable={false}
    >
      {/* Thumbnail */}
      <Link href="/discover">
        <Image
          src="/thecoreloop-logo-alt.png"
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
        <SubmitButton
          onOpen_SignIn={onOpen_SignIn}
        />

        {/* Explore */}
        <ExploreInput />
      </Flex>

      {/* Profile Picture Container */}
      <Profile />
    </Flex>
  );
}

