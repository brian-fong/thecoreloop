import { Flex } from "@chakra-ui/react";
import { useState, ReactElement } from "react";
import AddRemoveArticleBtns from "./AddRemoveArticleBtns";

export default function ArticleGroup({ category, set_update_LAG }: any) {
  const [articles, set_articles] = useState<ReactElement[]>([]);

  return (
    <Flex
      flexDir="column"
      gap="5px"
      justify="center"
      align="start"
      width="100%"
    >
      <Flex
        flexDir="row"
        gap="10px"
        justify="space-between"
        align="center"
        width="100%"
      >
        {/* Category Container */}
        <Flex 
          flexDir="row"
          justify="center"
          align="center"
          p="2px 10px"
          width="100%"
          fontSize="16px"
          fontWeight="800"
          color="white"
          bg="#114dcf"
          border="1px solid black"
          borderRadius="none"
          whiteSpace="nowrap"
          userSelect="none"
        >
          {category}
        </Flex>
        <AddRemoveArticleBtns 
          articles={articles}
          set_articles={set_articles}
          set_update_LAG={set_update_LAG}
        />
      </Flex>
      {/* Article Group Container */}
      <Flex
        flexDir="column"
        gap="20px"
        width="100%"
      >
        {articles}
      </Flex>
    </Flex>
  );
}

