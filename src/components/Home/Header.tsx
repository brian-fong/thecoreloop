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
      <Link href="/home">
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
        marginLeft="30px"
        height="100%"
      >
        <Flex
          id="contribute-menu-container"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          padding="20px 0px"
          height="100%"
        >
          <Menu variant="thecoreloop">
            <MenuButton>
              <Flex
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
              >
                <Text
                  margin="0px 5px 0px 20px"
                  color="white"
                >
                  Contribute
                </Text>
                <Box
                  position="relative"
                  top="1px"
                  margin="0px 10px"
                >
                  <AiOutlineDown 
                    size="16px" 
                    color="white"
                  />
                </Box>
              </Flex>
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Link 
                  href="/submit_project"
                  margin="0px"
                  padding="5px 20px 5px 10px"
                  width="100%"
                >
                  <Flex
                    flexDirection="row"
                    justifyContent="start"
                    alignItems="center"
                    width="100%"
                  >
                    <Box
                      position="relative"
                      bottom="2px"
                      margin="0px 5px"
                    >
                      <MdOutlinePostAdd size="20px" />
                    </Box>
                    <Text>Submit a Project</Text>
                  </Flex>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link 
                  href="/create_project"
                  margin="0px"
                  padding="5px 20px 5px 10px"
                  width="100%"
                >
                  <Flex
                    flexDirection="row"
                    justifyContent="start"
                    alignItems="center"
                  >
                    <Box
                      position="relative"
                      bottom="2px"
                      margin="0px 5px"
                    >
                      <MdEditCalendar size="20px" />
                    </Box>
                    <Text>Submit an Event</Text>
                  </Flex>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link 
                  href="/create_project"
                  margin="0px"
                  padding="5px 20px 5px 10px"
                  width="100%"
                >
                  <Flex
                    flexDirection="row"
                    justifyContent="start"
                    alignItems="center"
                  >
                    <Box
                      margin="0px 5px"
                    >
                      <IoMdChatboxes size="20px" />
                    </Box>
                    <Text>Start a Discussion</Text>
                  </Flex>
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>

        {/* Explore Container */}
        <Flex
          id="explore-input-container"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          position="relative"
          padding="20px 0px"
          height="100%"
        >
          <Box
            position="absolute"
            left="0"
            marginLeft="10px"
          >
            <RxCrosshair2 color="white" size="16px" />
          </Box>
          <Input 
            type="text"
            padding="0px 20px 0px 30px"
            color="white"
            fontSize="14px"
            width="min-content"
            maxWidth="180px"
            height="35px"
            border="2px solid white"
            borderRadius="30px"
            autoComplete="off"
            placeholder="Explore..."
            _hover={{}}
            _placeholder={{
              color: "rgba(255, 255, 255, 0.8)",
            }}
            _focusVisible={{}}
            style={{
              caretColor: "white",
            }}
          />
        </Flex>
      </Flex>

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
        />
      </Flex>
    </Flex>
  );
}

