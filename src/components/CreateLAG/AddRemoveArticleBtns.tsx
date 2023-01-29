import { 
  Flex,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import uuid from "react-uuid";
import Article from "./Article";
import { ReactElement } from "react";

export default function AddRemoveArticleBtns({ articles, set_articles }: any) {
  function addArticle() {
    const article: ReactElement = <Article key={uuid()} />;
    set_articles((articles: any) => [...articles, article]);
  }

  function removeArticle() {
    if (articles.length > 0) {
      set_articles((articles: any) => articles.slice(0, -1));
    }
  }

function wait(ms: number) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, ms);
    })
}

  async function pressButton(btn: any) {
    btn.style.transform = "translate(1px, 1px)";
    btn.style.boxShadow = "none";
    await wait(100);
    btn.style.transform = "translate(0px, 0px)";
    btn.style.boxShadow = "2px 2px 2px rgba(0, 0, 0, 0.5)";
  }

  return (
    <Flex
      flexDir="row"
      gap="10px"
      justify="center"
      align="center"
    >
      <Flex 
        flexDir="row" 
        justify="center" 
        align="center" 
        p="7px"
        height="100%"
        fontSize="12px"
        fontWeight="800"
        whiteSpace="nowrap"
        color="black"
        background="#47d685"
        border="1px solid black"
        boxShadow="2px 2px 2px rgba(0, 0, 0, 0.5)"
        transition="background-color 200ms ease" 
        tabIndex={0}
        userSelect="none"
        cursor="pointer"
        _focusVisible={{
          color: "white",
          background: "#32995f",
          outline: "1px solid blue",
        }}
        _hover={{
          color: "white",
          background: "#32995f",
        }}
        onClick={(event: any) => {
          event.preventDefault();
          pressButton(event.currentTarget);
          addArticle()
        }}
        onKeyPress={(event: any) => {
          if (event.key == "Enter") {
            event.preventDefault();
            pressButton(event.currentTarget);
            addArticle()
          }
        }}
        zIndex={2}
      >
        <AddIcon boxSize="10px" />
      </Flex>
      <Flex 
        flexDir="row" 
        justify="center" 
        align="center" 
        p="7px"
        height="100%"
        fontSize="12px"
        fontWeight="800"
        whiteSpace="nowrap"
        color="black"
        background="#ff6666"
        border="1px solid black"
        boxShadow="2px 2px 2px rgba(0, 0, 0, 0.5)"
        transition="background-color 200ms ease"
        tabIndex={0}
        userSelect="none"
        cursor="pointer"
        _focusVisible={{
          color: "white",
          background: "#993d3d",
          outline: "1px solid blue",
        }}
        _hover={{
          color: "white",
          background: "#993d3d",
        }}
        onClick={(event: any) => {
          event.preventDefault();
          pressButton(event.currentTarget);
          removeArticle()
        }}
        onKeyPress={(event: any) => {
          if (event.key == "Enter") {
            event.preventDefault();
            pressButton(event.currentTarget);
            removeArticle();
          }
        }}
      >
        <MinusIcon boxSize="10px" />
      </Flex>
    </Flex>
  );
}

