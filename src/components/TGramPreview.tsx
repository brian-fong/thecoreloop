import { 
  Flex,
  Text,
  Heading,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";
import { formatTgramMsg } from "../utils/lag";
import CurveContainer from "./CurveContainer";

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
    <CurveContainer heading="Telegram Message">
      <Text
        id="telegram-preview"
        fontSize="14px"
        whiteSpace="pre-line"
      >
        {tgram_msg}
      </Text>
    </CurveContainer>
  );
}

