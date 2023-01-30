import { Flex, Text } from "@chakra-ui/react";
import { toggleButton } from "../../styles/ButtonActions";

export default function TGramSubmit() {
  function handlePush() {

  }

  return (
    <Flex
      flexDir="column"
      justify="start"
      align="center"
      width="100%"
    >
      {/* Preview Button */}
      <Flex
        id="preview-btn"
        flexDir="column" 
        justify="center" 
        align="center" 
        width="min-content" 
        padding="10px 15px"
        bg="tcl_pink"
        border="1px solid black" 
        boxShadow="2px 2px 2px rgba(0, 0, 0, 0.5)"
        transition="background-color 200ms ease" 
        cursor="pointer"
        draggable="false" 
        userSelect="none"
        tabIndex={0}
        onClick={(event: any) => {
          toggleButton(event.currentTarget, false);
          handlePush();
        }}
        onKeyPress={(event: any) => {
          toggleButton(event.currentTarget, false);
          handlePush();
        }}
        _focusVisible={{
          color: "white",
          bg: "tcl_pink_hover",
          outline: "1px solid blue",
        }}
        _hover={{
          color: "white",
          bg: "tcl_pink_hover",
        }}
      >
        <Text
          fontSize="14px"
          fontWeight="800"
          whiteSpace="nowrap"
        >
          Push to Telegram
        </Text>
      </Flex>
    </Flex>
  );
}

