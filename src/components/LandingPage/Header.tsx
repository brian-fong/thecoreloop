import {
  Flex, 
  Image, 
  Link, 
  Tooltip,
} from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex
      id="header-container"
      flexDirection="row"
      gap="10px"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      background="tcl_yellow"
      zIndex={10}
      draggable={false}
    >
      <Image
        src="./tcl-logo.png"
        objectFit="cover"
        height="50px"
        draggable={false}
      />
      <Flex
        id="socials-container"
        flexDirection="row"
        gap="20px"
        justifyContent="center"
        alignItems="center"
        padding="10px 30px 10px 10px"
      >
        <Tooltip label="Subscribe to our newsletter">
          <Link href="https://thecoreloop.substack.com/" isExternal>
            <Image 
              src="./icons/newsletter-icon.png" 
              height="32px" 
              borderRadius="50%"
              transition="background-color 300ms linear"
              _hover={{
                backgroundColor: "white",
              }}
            />
          </Link>
        </Tooltip>
        <Tooltip label="Follow us on Twitter">
          <Link href="https://twitter.com/thecoreloop" isExternal>
            <Image 
              src="./icons/twitter-icon.png" 
              height="32px" 
              borderRadius="50%"
              transition="background-color 300ms linear"
              _hover={{
                backgroundColor: "twitter",
              }}
            />
          </Link>
        </Tooltip>
        <Tooltip label="Daily updates on Telegram">
          <Link href="https://t.me/thecoreloop" isExternal>
            <Image 
              src="./icons/telegram-icon.png" 
              height="32px" 
              borderRadius="50%"
              transition="background-color 300ms linear"
              _hover={{
                backgroundColor: "telegram",
              }}
            />
          </Link>
        </Tooltip>
      </Flex>
    </Flex>
  );
}

