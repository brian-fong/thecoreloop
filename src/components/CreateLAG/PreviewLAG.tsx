import { 
  Flex,
  Text,
} from "@chakra-ui/react";

import { LAG, Article, ArticleGroup } from "../types";

export default function PreviewLAG({ set_lag }: any) {
  function handlePreview() {
    // === Collect data from all input fields ===
    // LAG number
    const lag_number: number = Number((document.getElementById(
      "lag-number"
    ) as HTMLInputElement).value);
    // LAG date
    const lag_date: string = (document.getElementById(
      "lag-date"
    ) as HTMLInputElement).value;
    // LAG subheading 
    const lag_subheading: string = (document.getElementById(
      "subheading"
    ) as HTMLInputElement).value;
    // Special Insights
    const lag_special_insights: string = (document.getElementById(
      "special-insights"
    ) as HTMLInputElement).value;
    // Category Groups 
    const article_group_container = document.getElementById(
      "article-group-container"
    )!;
    
    const lag: LAG = {
      heading: `Look at Gaming #${lag_number}`,
      subheading: lag_subheading,
      number: lag_number, 
      date: lag_date,
      special_insights: lag_special_insights,
      content:  [],
    };
    for (const _article_group of Array.from(
      article_group_container.childNodes
    )) {
      const article_container: ChildNode = _article_group.lastChild!;
      const articles: ChildNode[] = Array.from(article_container.childNodes);
      const category: string = _article_group
        .firstChild!
        .firstChild!
        .textContent!;
      if (articles.length > 0) {
        const article_group: ArticleGroup = {
          category: category,
          articles: [],
        };
        for (const _article of articles) {
          let caption: string = (_article
            .firstChild!
            .lastChild! as HTMLInputElement)
            .value!;
          let url: string = (_article
            .lastChild!
            .lastChild! as HTMLInputElement)
            .value!;
          if (!caption || caption.length == 0) {
            caption = "<empty_caption>";
          }
          if (!url || url.length == 0) {
            url = "<empty_url>";
          }
          const article: Article = {
            caption: caption, 
            url: url, 
          };
          article_group.articles.push(article);
        }
        lag.content.push(article_group);
      }
    }
    set_lag(lag);
  }

  return (
    <Flex
      flexDir="column"
      justify="start"
      align="center"
      width="100%"
    >
      <Flex
        id="preview-btn"
        flexDir="column" 
        justify="center" 
        align="center" 
        width="min-content" 
        padding="10px 15px"
        bg="tcl_blue"
        border="1px solid black" 
        boxShadow="2px 2px 2px rgba(0, 0, 0, 0.5)"
        transition="background-color 200ms ease" 
        cursor="pointer"
        draggable="false" 
        userSelect="none"
        tabIndex={0}
        onClick={handlePreview}
        _focusVisible={{
          color: "white",
          bg: "tcl_blue_hover",
          outline: "1px solid blue",
        }}
        _hover={{
          color: "white",
          bg: "tcl_blue_hover",
        }}
        _active={{
          boxShadow: "none",
          transform: "translate(1px, 1px)",
        }}
      >
        <Text
          fontSize="14px"
          fontWeight="800"
          whiteSpace="nowrap"
        >
          Preview
        </Text>
      </Flex>
    </Flex>
  );
}
