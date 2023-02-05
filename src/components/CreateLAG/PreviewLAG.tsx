import wait from "../../utils/wait";import { Flex, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import CurveContainer from "../Core/CurveContainer";

export default function PreviewLAG({ lag }: any) {
  const [msg, setMsg] = useState<string>("");

  async function handleCopy() {
    const tgram_preview: any = document.getElementById("telegram-preview");
    navigator.clipboard.writeText(tgram_preview.textContent);
    const copy_btn: any = document.getElementById("copy-btn");
    copy_btn.style.opacity = 0.5;
    await wait(100);
    copy_btn.style.opacity = 1.0;
  }

  useEffect(() => {
    // === Build Telegram message string ===
    setMsg("");

    if (!lag.number) lag.number = "<number>";
    if (!lag.date) lag.date = "<date>";
    
    let msg_new: string = "";

    // Heading
    msg_new += `Look at Gaming #${lag.number} | ${lag.date}` + "\n";
    msg_new += "\n";

    // Subheading
    if (lag.subheading) {
      msg_new += lag.subheading + "\n"; 
      msg_new += "\n\n";
    } else msg_new += "\n";

    // Special Insights
    if (lag.special_insights) {
      msg_new += "‼️ SPECIAL INSIGHTS 👀" + "\n";
      msg_new += lag.special_insights + "\n";
      msg_new += "\n\n";
    }

    // Iterate through Article Groups
    for (const [i, article_group] of lag.content.entries()) {
      const last_group: boolean = i == lag.content.length-1;
      msg_new += article_group.category + "\n"; 
      for (const [j, article] of article_group.articles.entries()) {
        const last_article: boolean = j == article_group.articles.length-1;
        if (article.caption) msg_new += article.caption + "\n";
        else if (!article.caption && article.title) {
          msg_new += `A look at ${article.title}` + "\n";
        } else msg_new += "<caption>" + "\n";
        if (article.url) msg_new += article.url + "\n";
        else msg_new += "<url>" + "\n";
        if (!last_article) msg_new += "\n";
      }
      if (!last_group) msg_new += "\n\n";
    }

    setMsg(msg_new);
  }, [lag]);

  return (
    <CurveContainer heading="Telegram Preview">
      <Flex
        flexDir="column"
        gap="20px"
        justify="center"
        align="start"
        width="100%"
      >
        <Flex
          flexDir="column"
          justify="space-between"
          align="center"
          width="100%"
          maxWidth="100%"
          height="100%"
        >
          <Flex
            flexDir="row"
            justify="center"
            align="start"
            width="100%"
            maxWidth="100%"
            height="100%"
            background="standard_bkg_alt"
            borderRadius="5px"
          >
            <Text
              id="telegram-preview"
              p="10px 10px"
              width="90%"
              maxWidth="100%"
              height="100%"
              fontSize="14px"
              color="black"
              whiteSpace="pre-wrap"
            >
              {msg}
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
                          opacity 200ms ease" 
              userSelect="none"
              onClick={handleCopy}
              _hover={{
                color: "white",
                background: "category_bkg_hover",
              }}
            >
              Copy
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </CurveContainer>
  );
}

