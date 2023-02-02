import { Flex } from '@chakra-ui/react'
import { NavBarItem, NavBarItemDropDown } from './NavBarItem';

export default function NavBar() {
  return (
    <Flex 
      id="navbar"
      flexDir="row" 
      gap="0px" 
      justify="center" 
      align="start" 
      wrap="wrap"
      width="100%" 
      minWidth="420px"
      bg="standard_bkg"
    >
      <NavBarItem link=".">
        Home
      </NavBarItem>
      <NavBarItem link="https://t.me/thecoreloop">
        Telegram
      </NavBarItem>
      <NavBarItem link="https://twitter.com/0xkapital_k">
        Twitter
      </NavBarItem>
      <NavBarItemDropDown />
    </Flex>
  );
}

