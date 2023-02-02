import { 
  FetchBtn,
  CancelBtn,
  InactiveBtn,
} from "../Misc/Buttons";
import { Flex } from "@chakra-ui/react";

export default function FetchMetadata({ 
  lag,
  fetching, 
  set_fetching,
  abort,
}: any) {

  function renderButton() {
    // Count number of articles with URLs
    let article_count: number = 0;
    for (const article_group of lag.content) {
      for (const article of article_group.articles) {
        if (article.url.includes("<url>")) {
          continue;
        }
        article_count++;
      }
    }

    if (article_count == 0) {
      return <InactiveBtn />;
    } else {
      if (fetching) {
        return <CancelBtn set_fetching={set_fetching} abort={abort} />;
      } else {
        return <FetchBtn set_fetching={set_fetching} />;
      }
    }
  }
  return (
    <Flex
      flexDir="row"
      gap="30px"
      justify="center"
      align="center"
      width="100%"
    >
      {/* Show Fetch Button or Cancel Button */}
      {renderButton()}
    </Flex>
  );
}

