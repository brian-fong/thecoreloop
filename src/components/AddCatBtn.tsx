import { 
  Flex,
} from "@chakra-ui/react";
import CatGroup from "./CatGroup";
import { ReactElement } from "react";

export default function AddCatBtn({ groups, set_groups }: any) {
  function addGroup() {
    const group: ReactElement = <CatGroup />;
    set_groups((groups: any) => [...groups, group]);
  }

  return (
    <Flex
      flexDir="row"
      justify="center"
      align="center"
      m="20px 0px 10px"
      width="100%"
      color="white"
    >
      <Flex
        p="2px 10px"
        fontSize="14px"
        fontWeight="800"
        width="min-content"
        whiteSpace="nowrap"
        color="black"
        bg="tcl_blue"
        border="1px solid black"
        boxShadow="5px 5px 2px rgba(0, 0, 0, 0.5)"
        transition="background-color 200ms ease" 
        _focusVisible={{
          color: "white",
          background: "tcl_blue_hover",
          boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
          outline: "1px solid blue",
        }}
        _hover={{
          color: "white",
          bg: "tcl_blue_hover",
          textDecoration: "underline",
          boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)",
          cursor: "pointer",
        }}
        _active={{
          boxShadow: "none",
          transform: "translate(1px, 1px)",
        }}
        onClick={() => addGroup}
        onKeyPress={(event: any) => {
          if (event.key == "Enter") addGroup();
        }}
        tabIndex={0}
        userSelect="none"
      >
        Add Category Group
      </Flex>
    </Flex>
  );
}

