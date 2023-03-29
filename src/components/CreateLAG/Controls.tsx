import wait from "../../utils/wait";
import { Flex } from "@chakra-ui/react";
import ToggleBtn from "../Core/ToggleBtn";
import { pressBtn } from "../../utils/animations";
import { useState, useEffect, ReactElement } from "react";
import CurveSubContainer from "../Core/CurveSubContainer";

export default function Controls({ 
  abort,
  status,
  setStatus,
  toggleFetch,
  lag,
}: any) {
  const [urls, setURLs] = useState<number>(0);
  const [articles, setArticles] = useState<number>(0);

  useEffect(() => {
    setURLs(0);
    setArticles(0);
    for (const article_group of lag.content) {
      for (const article of article_group.articles) {
        if (article.url.length > 0) {
          setURLs(urls => urls+1);
        }
        if (article.caption.length > 0 && article.url.length > 0) {
          setArticles(articles => articles+1);
        }
      }
    }
  }, [lag])

  const atLeast1URL = (): boolean => urls > 0;
  const atLeast1Article = (): boolean => articles > 0;

  function renderFetchBtn(): ReactElement {
    if (urls > 0) {
      if (status == "fetching") {
        return <CancelFetchBtn 
          abort={abort} 
          setStatus={setStatus}
        />;
      } else {
        return <FetchBtn 
          abort={abort} 
          setStatus={setStatus}
          toggleFetch={toggleFetch} 
        />;
      }
    } else {
      return <InactiveFetchBtn />;
    }
  }

  function renderUploadBtn() {
    if (articles > 0) return <UploadBtn />;
    else return <InactiveUploadBtn />;
  }

  function renderPublishBtn() {
    if (articles > 0) return <PublishBtn />;
    else return <InactivePublishBtn />;
  }

  return (
    <CurveSubContainer heading="Controls">
      <Flex
        flexDir="row"
        wrap="wrap"
        gap="30px"
        justify="center"
        align="center"
        padding="20px 0px 10px"
        width="100%"
      >
        {/* Show Fetch Button or Cancel Button */}
        <ToggleBtn mounting={atLeast1URL()}>
          {renderFetchBtn()}
        </ToggleBtn>

        {/* Upload to Database Button */}
        <ToggleBtn mounting={atLeast1Article()}>
          {renderUploadBtn()}
        </ToggleBtn>

        {/* Publish Message Button */}
        <ToggleBtn mounting={atLeast1Article()}>
          {renderPublishBtn()}
        </ToggleBtn>
      </Flex>
    </CurveSubContainer>
  );
}

export function FetchBtn({ setStatus, toggleFetch }: any) {
  return (
    <Flex
      id="fetch-btn"
      flexDir="column" 
      justify="center" 
      align="center" 
      width="min-content" 
      padding="10px 15px"
      fontSize="14px"
      fontWeight="800"
      color="black"
      background="yellow.200"
      border="1px solid black" 
      boxShadow="3px 3px 2px rgba(0, 0, 0, 0.5)"
      transition="all 200ms ease-in-out"
      cursor="pointer"
      whiteSpace="nowrap"
      draggable="false" 
      userSelect="none"
      tabIndex={0}
      onClick={async (event: any) => {
        pressBtn(event.currentTarget);
        await wait(200);
        setStatus("starting");
        toggleFetch((toggled: boolean) => !toggled);
      }}
      onKeyPress={async (event: any) => {
        pressBtn(event.currentTarget);
        await wait(200);
        setStatus("starting");
        toggleFetch((toggled: boolean) => !toggled);
      }}
      _hover={{
        filter: "brightness(0.8)",
      }}
    >
      Fetch Metadata
    </Flex>
  );
}

export function CancelFetchBtn({ abort, setStatus }: any) {
  return (
    <Flex
      id="preview-btn"
      flexDir="column" 
      justify="center" 
      align="center" 
      width="min-content" 
      padding="10px 15px"
      fontSize="14px"
      fontWeight="800"
      color="black"
      background="red.400"
      border="1px solid black" 
      boxShadow="3px 3px 2px rgba(0, 0, 0, 0.5)"
      transition="all 200ms ease-in-out"
      cursor="pointer"
      whiteSpace="nowrap"
      draggable="false" 
      userSelect="none"
      tabIndex={0}
      onClick={async (event: any) => {
        pressBtn(event.currentTarget);
        await wait(200);
        setStatus("idle")
        abort.current = true;
      }}
      onKeyPress={async (event: any) => {
        pressBtn(event.currentTarget);
        await wait(200);
        setStatus("idle")
        abort.current = true;
      }}
      _hover={{
        filter: "brightness(0.8)",
      }}
    >
      Cancel
    </Flex>
  );
}

export function InactiveFetchBtn() {
  return (
    <Flex
      id="preview-btn"
      flexDir="column" 
      justify="center" 
      align="center" 
      width="min-content" 
      padding="10px 15px"
      fontSize="14px"
      fontWeight="800"
      color="black"
      background="yellow.200"
      border="1px solid black" 
      opacity="60%"
      transition="all 200ms ease-in-out"
      whiteSpace="nowrap"
      cursor="default"
      draggable="false" 
      userSelect="none"
      tabIndex={0}
    >
      Fetch Metadata
    </Flex>
  );
}

export function UploadBtn() {
  return (
    <Flex
      id="update-btn"
      flexDir="column" 
      justify="center" 
      align="center" 
      width="min-content" 
      padding="10px 15px"
      fontSize="14px"
      fontWeight="800"
      color="black"
      background="green.300"
      border="1px solid black" 
      boxShadow="3px 3px 2px rgba(0, 0, 0, 0.5)"
      transition="all 200ms ease-in-out"
      cursor="pointer"
      whiteSpace="nowrap"
      draggable="false" 
      userSelect="none"
      tabIndex={0}
      onClick={async (event: any) => {
        pressBtn(event.currentTarget);
        await wait(200);
      }}
      onKeyPress={async (event: any) => {
        pressBtn(event.currentTarget);
        await wait(200);
      }}
      _hover={{
        filter: "brightness(0.8)",
      }}
    >
      Upload to Database
    </Flex>
  )
}

export function InactiveUploadBtn() {
  return (
    <Flex
      id="preview-btn"
      flexDir="column" 
      justify="center" 
      align="center" 
      width="min-content" 
      padding="10px 15px"
      fontSize="14px"
      fontWeight="800"
      color="black"
      background="green.300"
      border="1px solid black" 
      opacity="60%"
      transition="background-color 200ms ease"
      whiteSpace="nowrap"
      cursor="default"
      draggable="false" 
      userSelect="none"
      tabIndex={0}
    >
      Upload to Database
    </Flex>
  );
}

function PublishBtn() {
  return (
    <Flex
      id="push-btn"
      flexDir="column" 
      justify="center" 
      align="center" 
      width="min-content" 
      padding="10px 15px"
      fontSize="14px"
      fontWeight="800"
      color="black"
      background="telegram"
      border="1px solid black" 
      boxShadow="3px 3px 2px rgba(0, 0, 0, 0.5)"
      transition="all 200ms ease-in-out"
      cursor="pointer"
      whiteSpace="nowrap"
      draggable="false" 
      userSelect="none"
      tabIndex={0}
      onClick={async (event: any) => {
        pressBtn(event.currentTarget);
        await wait(200);
      }}
      onKeyPress={async (event: any) => {
        pressBtn(event.currentTarget);
        await wait(200);
      }}
      _hover={{
        filter: "brightness(0.8)",
      }}
    >
      Publish Daily LAG
    </Flex>
  );
}

export function InactivePublishBtn() {
  return (
    <Flex
      id="preview-btn"
      flexDir="column" 
      justify="center" 
      align="center" 
      width="min-content" 
      padding="10px 15px"
      fontSize="14px"
      fontWeight="800"
      color="black"
      background="telegram"
      border="1px solid black" 
      opacity="0.6"
      transition="background-color 200ms ease"
      whiteSpace="nowrap"
      cursor="default"
      draggable="false" 
      userSelect="none"
      tabIndex={0}
    >
      Publish Daily LAG
    </Flex>
  );
}


