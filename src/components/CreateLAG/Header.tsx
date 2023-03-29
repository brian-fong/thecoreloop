import {
  Box,
  Flex, 
  Image, 
  Input,
  Link, 
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import {
  RxCrosshair2
} from "react-icons/rx";
import {
  AiOutlineDown,
} from "react-icons/ai";
import {
  MdOutlinePostAdd,
  MdEditCalendar,
} from "react-icons/md";
import {
  IoMdChatboxes
} from "react-icons/io";
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
      justifyContent="start"
      alignItems="center"
      position="sticky"
      top="0"
      backdropFilter="blur(12px)"
      width="100%"
      minWidth="800px"
      height="70px"
      background="transparent"
      zIndex={10}
      draggable={false}
    >
      {/* Thumbnail */}
      <Link href="/discover">
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


      {/* Socials Container */}
      <Flex
        id="socials-container"
        flexDirection="row"
        gap="20px"
        justifyContent="center"
        alignItems="center"
        marginLeft="auto"
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
      
      {/* Profile Picture Container */}
      <Flex
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        height="100%"
        cursor="pointer"
        transition="filter 200ms ease-in-out"
        _hover={{ filter: "brightness(0.8)" }}
      >
        <Image
          src="https://pbs.twimg.com/profile_images/1551347350618025984/Ica0XNb-_400x400.jpg"
          objectFit="cover"
          borderRadius="50%"
          marginRight="20px"
          width="50px"
          minWidth="50px"
          height="50px"
          minHeight="50px"
          boxShadow="4px 4px 3px black"
        />
      </Flex>
    </Flex>
  );
}


