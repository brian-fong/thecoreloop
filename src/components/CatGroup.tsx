import { 
  Flex,
} from "@chakra-ui/react";

import AddRemoveArticleBtn from "./AddRemoveArticleBtn";
import { useState, useEffect, ReactElement } from "react";

export default function CatGroup({ category }: any) {
  const [articles, set_articles] = useState<ReactElement[]>([]);

  useEffect(() => {
    console.log("Article Count: ", articles.length);
  }, [articles]);

  return (
    <>
      <Flex
        flexDir="row"
        gap="10px"
        justify="space-between"
        align="center"
        width="100%"
      >
        <Flex 
          flexDir="row"
          justify="center"
          align="center"
          p="2px 10px"
          width="100%"
          fontSize="16px"
          color="white"
          bg="#114dcf"
          border="1px solid black"
          borderRadius="none"
          whiteSpace="nowrap"
          userSelect="none"
        >
          {category}
        </Flex>
        <AddRemoveArticleBtn 
          articles={articles}
          set_articles={set_articles}
        />
      </Flex>
      <Flex
        flexDir="column"
        gap="20px"
        width="100%"
      >
        {articles}
      </Flex>
    </>
  );
}

