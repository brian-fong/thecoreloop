import wait from "../../utils/wait";
import { Flex } from "@chakra-ui/react";

export async function pressButton(btn: any) {
  // Simulate button press
  btn.style.transform = "translate(2px, 2px)";
  btn.style.boxShadow = "none";
  await wait(100);
  btn.style.transform = "translate(0px, 0px)";
  btn.style.boxShadow = "3px 3px 2px rgba(0, 0, 0, 0.5)";
}

export function FetchBtn({ start_fetching }: any) {
  return (
    <Flex
      id="preview-btn"
      flexDir="column" 
      justify="center" 
      align="center" 
      width="min-content" 
      padding="10px 15px"
      fontSize="14px"
      fontWeight="800"
      color="black"
      background="tcl_green"
      border="1px solid black" 
      boxShadow="3px 3px 2px rgba(0, 0, 0, 0.5)"
      transition="background-color 200ms ease"
      cursor="pointer"
      whiteSpace="nowrap"
      draggable="false" 
      userSelect="none"
      tabIndex={0}
      onClick={(event: any) => {
        pressButton(event.currentTarget);
        start_fetching();
      }}
      onKeyPress={(event: any) => {
        pressButton(event.currentTarget);
        start_fetching();
      }}
      _focusVisible={{
        color: "white",
        bg: "tcl_green_hover",
        outline: "1px solid blue",
      }}
      _hover={{
        color: "white",
        bg: "tcl_green_hover",
      }}
    >
      Fetch Metadata
    </Flex>
  );
}

export function CancelBtn({ end_fetching }: any) {
  return (
    <Flex
      id="preview-btn"
      flexDir="column" 
      justify="center" 
      align="center" 
      width="min-content" 
      padding="10px 15px"
      fontSize="14px"
      fontWeight="800"
      color="black"
      background="tcl_red"
      border="1px solid black" 
      boxShadow="3px 3px 2px rgba(0, 0, 0, 0.5)"
      transition="background-color 200ms ease" 
      cursor="pointer"
      whiteSpace="nowrap"
      draggable="false" 
      userSelect="none"
      tabIndex={0}
      onClick={(event: any) => {
        pressButton(event.currentTarget);
        end_fetching();
      }}
      onKeyPress={(event: any) => {
        pressButton(event.currentTarget);
        end_fetching();
      }}
      _focusVisible={{
        color: "white",
        bg: "tcl_red_hover",
        outline: "1px solid blue",
      }}
      _hover={{
        color: "white",
        bg: "tcl_red_hover",
      }}
    >
      Cancel
    </Flex>
  );
}
