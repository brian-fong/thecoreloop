// Components
import {
  Box,
  Flex,
  Link,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  BsGlobe as WebIcon,
} from "react-icons/bs";
import LinkIcon from "./LinkIcon";
import LinksModal from "./LinksModal";

// Hooks
import { useEffect, useState } from "react";

// Types
import { ReactElement } from "react";

export default function Links({
  links, setLinks,
}: any) {
  // State variables
  const [content, setContent] = useState<ReactElement>();

  // Disclosure: GenresModal
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (links.length == 0) return;
    if (!links[0].length) {
      // Display placeholder for name if first link (main website) is empty
      setContent(
        <Text
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          gap="10px"
          padding="2px 4px"
          fontSize="16px"
          border="1px solid white"
          borderRadius="5px"
          cursor="pointer"
          whiteSpace="nowrap"
          userSelect="none"
          transition="all 200ms ease-in-out"
          _hover={{
            letterSpacing: "2px",
            background: "rgba(0, 0, 0, 0.4)",
          }}
        >
          🌐  &lt;links&gt;
        </Text>
      );
    } else {
      // Display user-inputted links
      setContent(
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          gap="20px"
          // background="gray.700"
          border="1px solid transparent"
          borderRadius="10px"
          cursor="pointer"
          whiteSpace="nowrap"
          userSelect="none"
          transition="all 200ms ease-in-out"
          _hover={{
            padding: "0 1px",
            gap: "25px",
            color: "white",
            background: "rgba(0, 0, 0, 0.4)",
            border: "1px solid white",
            borderRadius: "10px",
          }}
          _active={{ background: "rgba(255, 255, 255, 0.3)" }}
        >
          {links.map((link: string, index: number) => {
            if (index == 0) return (
              <Link 
                // href={link}
                target="_blank"
                pointerEvents={link ? "all" : "none"}
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
                pointerEvents={link ? "all" : "none"}
                transition="all 200ms ease-in-out"
                _hover={{ filter: "brightness(0.7)" }}
              >
                <LinkIcon url={link} size="25px" />
              </Link>
            );
          })}
        </Flex>
      )
    }
  }, [links]);

  return (
    <Box onClick={onOpen}>
      {content}
      <LinksModal 
        links={links} setLinks={setLinks}
        isOpen={isOpen} onClose={onClose}
      />
    </Box>
  );
}



