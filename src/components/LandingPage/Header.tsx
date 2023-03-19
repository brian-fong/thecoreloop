import {
  Flex, 
  Image, 
  Link, 
  Tooltip,
} from "@chakra-ui/react";
import {
  SiSubstack as SubstackIcon,
  SiTwitter as TwitterIcon,
  SiTelegram as TelegramIcon,
} from "react-icons/si";

export default function Header() {
  return (
    <Flex
      id="header-container"
      flexDirection="row"
      gap="10px"
      justifyContent="space-between"
      alignItems="center"
      position="sticky"
      top="0"
      width="100%"
      backdropFilter="blur(12px)"
      zIndex={1}
      draggable={false}
    >
      <Image
        src="./thecoreloop-logo-alt.png"
        objectFit="cover"
        width="auto"
        height="70px"
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
          <Link 
            href="https://thecoreloop.substack.com/" 
            isExternal
            transition="color 200ms ease-in-out"
            _hover={{
              color: "substack",
            }}
          >
            <SubstackIcon size={25}/>
          </Link>
        </Tooltip>
        <Tooltip label="Follow us on Twitter">
          <Link 
            href="https://twitter.com/thecoreloop"
            isExternal
            transition="color 200ms ease-in-out"
            _hover={{
              color: "twitter",
            }}
          >
            <TwitterIcon size={25}/>
          </Link>
        </Tooltip>
        <Tooltip label="Daily updates on Telegram">
          <Link 
            href="https://t.me/thecoreloop" 
            isExternal
            transition="color 200ms ease-in-out"
            _hover={{
              color: "telegram",
            }}
          >
            <TelegramIcon size={25}/>
          </Link>
        </Tooltip>
      </Flex>
    </Flex>
  );
}

