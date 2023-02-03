import {   FetchBtn,
  CancelFetchBtn,
  InactiveFetchBtn,
} from "../Misc/Buttons";
import { ReactElement } from "react";
import { Flex } from "@chakra-ui/react";
import Translate from "../Misc/Translate";

export default function FetchMetadata({ 
  abort,
  status,
  setStatus,
  toggleFetch,
  lag,
}: any) {
  function mountFetchBtn(): boolean {
    let url_count: number = 0; 
    for (const article_group of lag.content) {
      for (const article of article_group.articles) {
        if (article.url.replace("<url>", "").length > 0) {
          url_count++;
        } 
      }
    }

    return url_count > 0;
  }

  function renderFetchBtn(): ReactElement {
    // Count number of articles with URLs
    let url_count: number = 0; 
    for (const article_group of lag.content) {
      for (const article of article_group.articles) {
        const empty_url: boolean = article.url
          .replace("<url>", "")
          .length == 0;
        if (!empty_url) url_count++;
      }
    }

    if (url_count > 0) {
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


  return (
    <Flex
      position="relative"
      top="-5px"
      flexDir="row"
      gap="30px"
      justify="center"
      align="center"
      width="100%"
    >
      {/* Show Fetch Button or Cancel Button */}
      <Translate mounting={mountFetchBtn()}>
        {renderFetchBtn()}
      </Translate>
    </Flex>
  );
}

