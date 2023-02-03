import { Flex } from "@chakra-ui/react";
import { useState, ReactElement } from "react";
import AddRemoveArticleBtns from "./AddRemoveArticleBtns";

export default function ArticleGroup({ category, updateLAG }: any) {
  const [articles, setArticles] = useState<ReactElement[]>([]);

  return (
    <Flex
      flexDir="column"
      gap="10px"
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
          fontSize="14px"
          fontWeight="800"
          color="white"
          bg="tcl_blue"
          border="1px solid black"
          borderRadius="none"
          boxShadow="3px 3px 2px rgba(0, 0, 0, 0.5)"
          whiteSpace="nowrap"
          userSelect="none"
        >
          {category}
        </Flex>
        <AddRemoveArticleBtns 
          articles={articles}
          setArticles={setArticles}
          updateLAG={updateLAG}
        />
      </Flex>

      {/* Articles Container */}
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

