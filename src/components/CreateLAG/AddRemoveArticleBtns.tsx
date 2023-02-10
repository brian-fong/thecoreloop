import uuid from "react-uuid";
import Article from "./Article";
import { ReactElement } from "react";
import { Flex } from "@chakra-ui/react";
import { pressBtn } from "../Misc/Buttons";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

export default function AddRemoveArticleBtns({ 
  articles, 
  setArticles, 
  updateLAG 
}: any) {
  function shorten(s: string) {
    const limit: number = 40;
    if (s.length > limit) {
      return s.slice(0, limit) + "...";
    } else {
      return s;
    }
  }

  function addArticle() {
    // Append new article to Article Group
    const article: ReactElement = (
      <Article 
        key={uuid()} 
        updateLAG={updateLAG}
      />
    );
    setArticles((articles: ReactElement[]) => [...articles, article]);
    updateLAG((updated: boolean) => !updated);
  }

  function removeArticle(event: any) {
    // Remove last article in Article Group
    if (articles.length > 0) {
      // Parse category, caption, and URL of article to be removed
      const category: string = event 
        .currentTarget
        .parentElement 
        .parentElement
        .firstChild
        .textContent;
      const caption: string = event
        .currentTarget
        .parentElement
        .parentElement
        .parentElement
        .lastChild
        .lastChild
        .firstChild
        .lastChild
        .value;
      const url: string = event 
        .currentTarget
        .parentElement
        .parentElement
        .parentElement
        .lastChild
        .lastChild
        .lastChild
        .lastChild
        .value;

      if (caption.length > 0 || url.length > 0) {
        // If article contains non-empty caption/URL, then 
        //  prompt user for confirmation
        const conf_msg: string = 
          `Non-empty article caption/URL detected!\n\n`
          + `Category: "${category}"\n`
          + `Caption: "${shorten(caption)}"\n`
          + `URL: "${shorten(url)}"\n\n`
          + `Are you sure you want to remove this article?`;
        const confirmation: boolean = confirm(conf_msg);
        if (confirmation) {
          // If confirmed, then remove article
          setArticles((articles: ReactElement[]) => articles.slice(0, -1));
        } else {
          // If cancelled, then do nothing
        }
      } else {
        // If article contains empty caption/URL, then remove article
        setArticles((articles: ReactElement[]) => articles.slice(0, -1));
      }
    }
    updateLAG((updated: boolean) => !updated);
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
        background="tcl_green"
        border="1px solid black"
        boxShadow="3px 3px 2px rgba(0, 0, 0, 0.5)"
        transition="background-color 200ms ease,
                    transform 10ms linear" 
        tabIndex={0}
        userSelect="none"
        cursor="pointer"
        _focusVisible={{
          color: "white",
          background: "tcl_green_hover",
          outline: "1px solid blue",
        }}
        _hover={{
          color: "white",
          background: "tcl_green_hover",
        }}
        onClick={(event: any) => {
          event.preventDefault();
          pressBtn(event.currentTarget);
          addArticle()
        }}
        onKeyPress={(event: any) => {
          if (event.key == "Enter") {
            event.preventDefault();
            pressBtn(event.currentTarget);
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
        background="tcl_red"
        border="1px solid black"
        boxShadow="3px 3px 2px rgba(0, 0, 0, 0.5)"
        transition="background-color 200ms ease,
                    transform 10ms linear" 
        tabIndex={0}
        userSelect="none"
        cursor="pointer"
        _focusVisible={{
          color: "white",
          background: "tcl_red_hover",
          outline: "1px solid blue",
        }}
        _hover={{
          color: "white",
          background: "tcl_red_hover",
        }}
        onClick={(event: any) => {
          event.preventDefault();
          pressBtn(event.currentTarget);
          removeArticle(event);
        }}
        onKeyPress={(event: any) => {
          if (event.key == "Enter") {
            event.preventDefault();
            pressBtn(event.currentTarget);
            removeArticle(event);
          }
        }}
      >
        <MinusIcon boxSize="10px" />
      </Flex>
    </Flex>
  );
}

