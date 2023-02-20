import {
  Flex,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { SyntheticEvent } from "react";
import uuid from "react-uuid";

export default function PlayerImage({ player }: any) {
  function handleEnter(event: SyntheticEvent) {
    const target_element: HTMLElement = event.currentTarget as HTMLElement;
    const image: HTMLElement = event.currentTarget
      ?.firstChild! as HTMLElement;
    const caption: HTMLElement = event.currentTarget
      ?.lastChild?.firstChild! as HTMLElement;

    target_element.style.transform = "scale(1.1)";
    image.style.boxShadow = "10px 10px 5px rgba(0, 0, 0, 0.5)";
    image.style.borderRadius = "10px"
    caption.style.color="#4FD1C5";
  }

  function handleLeave(event: SyntheticEvent) {
    const target_element: HTMLElement = event.currentTarget as HTMLElement;
    const image: HTMLElement = event.currentTarget
      ?.firstChild! as HTMLElement;
    const caption: HTMLElement = event.currentTarget
      ?.lastChild?.firstChild! as HTMLElement;

    target_element.style.transform = "scale(1.0)";
    image.style.boxShadow = "5px 5px 5px rgba(0, 0, 0, 0.5)";
    image.style.borderRadius="10px"
    caption.style.color="white";
  }

  return (
    <Flex
      flexDirection="column"
      gap="15px"
      justifyContent="center"
      alignItems="center"
      transition="all 200ms ease-in-out"
      onMouseEnter={(event: SyntheticEvent) => handleEnter(event)}
      onMouseLeave={(event: SyntheticEvent) => handleLeave(event)}
    >
      <Link key={uuid()} href="https://pm6hpw3zasy.typeform.com/to/kOc7e3N7">
        <Image
          key={uuid()}
          src={`${player}.png`}
          alt={player}
          borderRadius="10px"
          boxShadow="5px 5px 5px rgba(0, 0, 0, 0.5)"
        />
      </Link>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Text
          fontWeight="800"
          letterSpacing="3px"
          textTransform="capitalize"
          transition="all 300ms linear"
        >
          {player.toUpperCase()}
        </Text>
      </Flex>
    </Flex>
  );
}

