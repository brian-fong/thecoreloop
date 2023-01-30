import { Flex, Text } from "@chakra-ui/react";
import { pressButton } from "../../styles/ButtonPress";
import { LAG, Article, ArticleGroup } from "../../types";

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
    // Article Groups 
    const article_group_container = document.getElementById(
      "article-group-container"
    )!;
    
    // Assign data values to new <LAG> object
    const lag: LAG = {
      heading: `Look at Gaming #${lag_number}`,
      subheading: lag_subheading,
      number: lag_number, 
      date: lag_date,
      special_insights: lag_special_insights,
      content:  [],
    };

    // Iterate through Article Groups and build content array
    for (const article_group_input of Array.from(
      article_group_container.childNodes
    )) {
      // Parse Articles 
      const article_container: ChildNode = article_group_input.lastChild!;
      const articles: ChildNode[] = Array.from(article_container.childNodes);
      if (articles.length > 0) {
        // Parse category
        const category: string = article_group_input
          .firstChild!
          .firstChild!
          .textContent!;

        // Instantiate new <ArticleGroup> object
        const article_group: ArticleGroup = {
          category: category,
          articles: [],
        };

        // Iterate through Articles, parsing caption + URL
        for (const _article of articles) {
          // Parse caption + URL
          let caption: string = (_article
            .firstChild!
            .lastChild! as HTMLInputElement)
            .value!;
          let url: string = (_article
            .lastChild!
            .lastChild! as HTMLInputElement)
            .value!;

          // If caption/URL are empty, then assign <empty_input> value
          if (!caption || caption.replaceAll("\n", "").trim().length == 0) {
            caption = "<empty_caption>";
          }
          if (!url || url.replaceAll("\n", "").trim().length == 0) {
            url = "<empty_url>";
          }

          // Instantiate new <Article> object
          const article: Article = {
            caption: `A look at ${caption}`, 
            url: url, 
          };

          // Append Article to Articles array
          article_group.articles.push(article);
        }

        // Append Article Group to content array
        lag.content.push(article_group);
      }
    }

    // Set LAG to update state (trigger Telegram Preview)
    set_lag(lag);
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
        bg="tcl_blue"
        border="1px solid black" 
        boxShadow="2px 2px 2px rgba(0, 0, 0, 0.5)"
        transition="background-color 200ms ease" 
        cursor="pointer"
        draggable="false" 
        userSelect="none"
        tabIndex={0}
        onClick={(event: any) => {
          event.preventDefault();
          pressButton(event.currentTarget);
          handlePreview();
        }}
        onKeyPress={(event: any) => {
          if (event.key == "Enter") {
            event.preventDefault();
            pressButton(event.currentTarget);
            handlePreview();
          }
        }}
        _focusVisible={{
          color: "white",
          bg: "tcl_blue_hover",
          outline: "1px solid blue",
        }}
        _hover={{
          color: "white",
          bg: "tcl_blue_hover",
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
