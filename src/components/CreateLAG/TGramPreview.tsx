import wait from "../../utils/wait";
import TGramSubmit from "./TGramSubmit";
import { useState, useEffect } from "react";
import { Flex, Text } from "@chakra-ui/react";
import CurveContainer from "../Core/CurveContainer";

export default function TGramPreview({ lag }: any) {
  const [tgram_msg, set_tgram_msg] = useState<string>("");

  async function handleCopy() {
    const tgram_preview: any = document.getElementById("telegram-preview");
    navigator.clipboard.writeText(tgram_preview.textContent);
    const copy_btn: any = document.getElementById("copy-btn");
    copy_btn.style.opacity = 0.5;
    await wait(300);
    copy_btn.style.opacity = 1.0;
  }

  useEffect(() => {
    // === Build Telegram message string ===
    let msg: string = "";

    // Heading
    msg += `Look at Gaming #${lag.number} | ${lag.date}`;
    msg += "\n\n";

    // Subheading
    if (lag.subheading) {
      msg += lag.subheading + "\n"; 
      msg += "\n\n";
    }

    // Special Insights
    if (lag.special_insights) {
      msg += "‼️ SPECIAL INSIGHTS 👀" + "\n";
      msg += lag.special_insights + "\n";
      msg += "\n\n";
    }

    // Iterate through Article Groups
    for (const [i, article_group] of lag.content.entries()) {
      const last_group: boolean = i == lag.content.length-1;
      msg += article_group.category + "\n"; 
      for (const [j, article] of article_group.articles.entries()) {
        const last_article: boolean = j == article_group.articles.length-1;
        msg += article.caption + "\n"; 
        msg += article.url + "\n";
        if (!last_article) msg += "\n";
      }
      if (!last_group) msg += "\n\n";
    }

    // Update Telegram preview
    set_tgram_msg(msg);
  }, [lag]);

  return (
    <CurveContainer heading="Telegram Message">
      <Flex
        flexDir="column"
        gap="20px"
        justify="space-between"
        align="center"
        width="100%"
        height="100%"
      >
        <Flex
          flexDir="row"
          justify="center"
          align="start"
          width="100%"
          background="standard_bkg_alt"
        >
          <Text
            id="telegram-preview"
            p="10px 10px"
            width="100%"
            height="100%"
            fontSize="14px"
            color="black"
            whiteSpace="pre-line"
          >
            {tgram_msg}
          </Text>
          <Flex
            id="copy-btn"
            flexDir="row"
            justify="center"
            align="center"
            margin="10px"
            padding="2px 5px"
            fontSize="14px"
            background="category_bkg"
            borderRadius="5px"
            cursor="pointer"
            transition="background-color 200ms ease,
                        opacity 300ms ease" 
            onClick={handleCopy}
            _hover={{
              color: "white",
              background: "category_bkg_hover",
            }}
          >
            Copy
          </Flex>
        </Flex>

        {/* Add Copy to Clipboard Button */}
        <TGramSubmit />
      </Flex>
    </CurveContainer>
  );
}

