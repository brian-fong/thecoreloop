import { 
  Flex,
} from "@chakra-ui/react";
import uuid from "react-uuid";
import Article from "./Article";
import { ReactElement } from "react";

export default function AddRemoveArticleBtn({ articles, set_articles }: any) {
  function addArticle() {
    const article: ReactElement = <Article key={uuid()} />;
    set_articles((articles: any) => [...articles, article]);
  }

  function removeArticle() {
    if (articles.length == 1) {
      // Do nothing
    } else if (articles.length > 1) {
      // Remove last article 
      set_articles((articles: any) => articles.slice(0, -1));
    }
  }

  return (
    <Flex
      flexDir="row"
      gap="10px"
      justify="center"
      align="center"
      m="10px 0px"
      width="100%"
    >
      <Flex 
        flexDir="row" 
        justify="center" 
        align="center" 
        p="7px"
        height="100%"
        fontSize="12px"
        fontWeight="800"
        color="black"
        background="#47d685"
        border="1px solid black"
        boxShadow="2px 2px 2px rgba(0, 0, 0, 0.5)"
        transition="background-color 200ms ease" 
        tabIndex={0}
        userSelect="none"
        _focusVisible={{
          color: "white",
          background: "#32995f",
          boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
          outline: "1px solid blue",
        }}
        _hover={{
          color: "white",
          background: "#32995f",
          boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
          cursor: "pointer",
        }}
        _active={{
          transform: "translate(1px, 1px)",
          boxShadow: "none"
        }}
        onClick={() => addArticle()}
        onKeyPress={(event: any) => {
          if (event.key == "Enter") {
            console.log("Enter key pressed");
            addArticle()
          }
        }}
      >
        Add Article
      </Flex>
      <Flex 
        flexDir="row" 
        justify="center" 
        align="center" 
        p="7px"
        height="100%"
        fontSize="12px"
        fontWeight="800"
        color="black"
        background="#ff6666"
        border="1px solid black"
        boxShadow="2px 2px 2px rgba(0, 0, 0, 0.5)"
        transition="background-color 200ms ease" 
        tabIndex={0}
        userSelect="none"
        _focusVisible={{
          color: "white",
          background: "#993d3d",
          boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
          outline: "1px solid blue",
        }}
        _hover={{
          color: "white",
          background: "#993d3d",
          boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
          cursor: "pointer",
        }}
        _active={{
          transform: "translate(1px, 1px)",
          boxShadow: "none"
        }}
        onClick={() => removeArticle()}
        onKeyPress={(event: any) => {
          if (event.key == "Enter") {
            console.log("Enter key pressed");
            removeArticle();
          }
        }}
      >
        Remove Article
      </Flex>
    </Flex>
  );
}

