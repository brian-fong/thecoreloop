import { 
  Flex,
  Text,
  Heading,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";
import { formatTgramMsg } from "../utils/lag";

export default function TGramPreview({ lag }: any) {
  const [tgram_msg, set_tgram_msg] = useState<string>("");

  useEffect(() => {
    set_tgram_msg(formatTgramMsg(lag));
    const tgram_preview: HTMLElement = document.getElementById(
      "telegram-preview"
    )!;
    tgram_preview!.scrollIntoView({
      behavior: "smooth",
    });
  }, [lag]);

  return (
    <Flex 
      id="outer_container"
      flexDir="column" 
      justify="start" 
      align="center" 
      m="0px" 
      p="15px 15px 10px 15px" 
      width="100%" 
      minWidth="300px"
      minHeight="300px"
      bg="standard_bkg"
      border="6px double white" 
      boxShadow="0px 0px 0px 3px #c0c0c0, 
                 20px 20px 2px rgba(0, 0, 0, 0.5)"
      boxSizing="border-box"
    >
      <Flex 
        id="inner_container"
        position="relative"
        flexDir="column" 
        justify="start" 
        align="start" 
        m="10px" 
        p="15px" 
        width="100%" 
        height="100%"
        border="1px solid gray" 
      >
        { /* Heading */ }
        <Flex 
          id="telegram-preview"
          position="absolute" 
          top="-10px"
          flexDir="row" 
          justify="center" 
          align="center" 
          width="100%"
          userSelect="none"
        >
          <Heading 
            position="relative"
            fontFamily="JetBrains Mono"
            fontWeight="400" 
            fontSize="16px" 
            p="0px 15px" 
            color="black" 
            bg="standard_bkg"
          >
            Telegram Preview
          </Heading>
        </Flex>

        <Text
          fontSize="14px"
          whiteSpace="pre-line"
        >
          {tgram_msg}
        </Text>
      </Flex>
    </Flex>
  );
}

