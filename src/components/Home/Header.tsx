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

export default function Header() {
  return (
    <Flex
      id="header-container"
      flexDirection="row"
      gap="10px"
      justifyContent="start"
      alignItems="center"
      width="100%"
      height="70px"
      background="#EAF3F4"
      zIndex={10}
      draggable={false}
    >
      <Link href="/home">
        <Image
          src="./tcl-logo-transparent.png"
          objectFit="cover"
          height="70px"
          draggable={false}
        />
      </Link>
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
                  />
                </Box>
              </Flex>
            </MenuButton>
            <MenuList>
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
            <RxCrosshair2 color="black" size="16px" />
          </Box>
          <Input 
            type="text"
            padding="0px 20px 0px 30px"
            color="black"
            fontSize="14px"
            width="min-content"
            maxWidth="180px"
            height="100%"
            placeholder="Explore..."
            border="1px solid black"
            borderRadius="30px"
            autoComplete="off"
          />
        </Flex>
      </Flex>
      <Flex
        id="socials-container"
        flexDirection="row"
        gap="20px"
        justifyContent="center"
        alignItems="center"
        padding="10px 30px 10px 10px"
        marginLeft="auto"
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

