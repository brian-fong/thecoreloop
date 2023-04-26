// Components
import { Flex, Link } from "@chakra-ui/react";
import { BsGlobe as WebIcon } from "react-icons/bs";
import LinkIcon from "../SubmitProject/LinkIcon";

export default function Links({ links }: any) {
  return (
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      gap="20px"
      whiteSpace="nowrap"
      userSelect="none"
    >
      {links.map((link: string, index: number) => {
        if (index == 0) return (
          <Link 
            href={link}
            target="_blank"
            transition="all 200ms ease-in-out"
            _hover={{ filter: "brightness(0.7)" }}
          >
            <WebIcon size="22px" />
          </Link>
        );
        else return (
          <Link 
            href={link}
            target="_blank"
            transition="all 200ms ease-in-out"
            _hover={{ filter: "brightness(0.7)" }}
          >
            <LinkIcon url={link} size="25px" />
          </Link>
        );
      })}
    </Flex>
  );
}

