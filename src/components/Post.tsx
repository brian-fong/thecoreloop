import { 
  Flex,
  Text,
  Heading,
} from '@chakra-ui/react';
import uuid from 'react-uuid';
import Card from "../components/Card";
import { Post as PostProps } from "../types";
import { useState, useEffect, ReactElement } from "react";

export default function Post({ lag }: PostProps) {
  // Initialize Cards array
  const [cards, set_cards] = useState<ReactElement[]>([]);

  // Initialize Special Insights text array 
  const [special_insights, set_special_insights] = useState<ReactElement[]>([]);

  useEffect(() => {
    // Toggle Special Insights section 
    if (lag.special_insights) {
      lag.special_insights = lag.special_insights;

      const container: HTMLElement = document.getElementById("special_insights_container")!;
      container.style.display = "block";

      for (const line of lag.special_insights.split("\n")) {
        const text: ReactElement = <Text
          fontSize="14px"
          textAlign="justify"
          color="black"
        >
          {line}
        </Text>;
        set_special_insights(special_insights => [...special_insights, text]);
      }
    }

    // Build Cards array
    for (const category_group of lag.content) {
      for (const article of category_group.articles) {
        const card: ReactElement = <Card 
          key={uuid()}
          url={article.url || ""}
          caption={article.caption || ""}
          title={article.title || ""}
          description={article.description || ""}
          image={article.image || ""}
          category={category_group.category || ""}
          source={article.source || ""}
        />;
        set_cards(cards => [...cards, card])
      }
    }
  }, [lag]);

  return (
    /* Outer Container */
    <Flex 
      flexDir="column" 
      justify="start" 
      align="center" 
      m="0px" 
      p="15px 15px 10px 15px" 
      width="100%" 
      bg="standard_bkg"
      border="6px double white" 
      boxShadow="0px 0px 0px 3px #c0c0c0, 
                 20px 20px 2px rgba(0, 0, 0, 0.5)"
      boxSizing="border-box"
    >
      { /* Inner Container */ }
      <Flex 
        flexDir="column" 
        justify="start" 
        align="start" 
        m="10px" 
        p="15px" 
        width="100%" 
        height="100%"
        minHeight="200px"
        border="1px solid gray" 
      >
        { /* Heading Container */ }
        <Flex 
          position="relative" 
          top="-25px"
          flexDir="row" 
          justify="center" 
          align="center" 
          width="100%"
        >
          <Heading 
            fontFamily="JetBrains Mono"
            fontWeight="400" 
            fontSize="16px" 
            p="0px 15px" 
            color="black" 
            bg="standard_bkg"
          >
            {lag.heading}
          </Heading>
        </Flex>

        { /* Date Container */ }
        <Flex 
          position="relative" 
          top="-25px"
          flexDir="row" 
          justify="right" 
          align="center" 
          width="100%"
        >
          <Text color="black" fontSize="14px">
            {lag.date}
          </Text>
        </Flex>

        { /* Special Insights Container */ }
        <Flex 
          display="none"
          id="special_insights_container"
          position="relative"
          top="-20px"
          flexDir="column" 
          justify="start" 
          align="start"
          m="0px 0px 20px"
          p="1px 2px"
          width="100%"
          bg="tcl_pink"
        >
          <Heading 
            fontWeight="800" 
            fontSize="15px"
            color="black"
          >
            Special Insights
          </Heading>
          {special_insights}
        </Flex>

        { /* Card Gallery Container */ }
        <Flex 
          flexDir="column" 
          gap="30px" 
          justify="start" 
          align="start" 
          mt="-20px"
          width="100%"
        >
          {cards}
        </Flex>
      </Flex>
    </Flex>
  );
}

