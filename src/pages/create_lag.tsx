import { 
  Flex,
} from "@chakra-ui/react";
import Logo from "../components/Logo";
import NavBar from "../components/NavBar";
import ScrollBtn from "../components/ScrollBtn";
import CreateLAG from "../components/CreateLAG";

export default function kietfonf() {
  return (
    <>
      <Flex 
        id="root_container"
        flexDir="column" 
        justify="start" 
        align="center" 
        m="0px" 
        p="0px"
        width="100vw" 
        height="100vh"
        bg="bkg"
        boxSizing="border-box"
        overflowX="hidden"
      >
        <NavBar />

        <Flex 
          id="main_container"
          flexDir="column" 
          gap="50px" 
          justify="start" 
          align="center" 
          m="0px"
          p="40px 40px 60px" 
          minWidth="300px" 
          width="100%"
          maxWidth="800px"
          boxSizing="border-box"
        >
          <Logo />
          <CreateLAG />
          <ScrollBtn 
            elem_id="navbar"
            text="Back to Top"
          />
        </Flex>
      </Flex>
    </>
  );
}

