import axios from "axios";
import validURL from "../utils/url";
import Line from "../components/DailyLAG/Line";
import { ArticleGroup, Article } from "../types";
import { useState, useEffect, ReactElement } from "react";
import Card_Landscape from "../components/DailyLAG/Card_Landscape";
import uuid from "react-uuid";

export default function useFetchMetadata(content: ArticleGroup[]) {
  const [fetching, set_fetching] = useState<boolean>(false);
  const [cards, set_cards] = useState<ReactElement[]>([]);

  useEffect(() => {
    async function fetch(): Promise<void> {
      if (fetching) {
        // Reset cards
        set_cards([]);

        // Build cards
        for (const [i, article_group] of content.entries()) {
          const last_group: boolean = i == content.entries.length-1;

          for (const [j, article] of article_group.articles.entries()) {
            const last_article: boolean = j == article_group.articles.length-1;

            // Skip for empty URLs
            if (article.url.includes("<url>")) continue

            // Alert user if URL is invalid
            if (!validURL(article.url)) {
              const alert_msg: string = 
              `Invalid URL detected!\n\n`
              + `Category: ${article_group.category}\n`
              + `Caption: ${article.caption}\n`
              + `URL: ${article.url}`;
              alert(alert_msg);
              set_fetching(false);
              return;
            }

            // Fetch metadata for article
            const response: any = await axios({
              method: "POST",
              url: "/api/fetch_metadata", 
              data: { article: article },
            });
            const article_meta: Article = response.data;
            console.log("Article Meta: ", article_meta);
            const card: ReactElement = <Card_Landscape
              key={uuid()}
              article={article_meta}
            />

            console.log("Last Group: ", last_group);
            console.log("Last Article: ", last_article);

            if (!last_group && !last_article) {
              const line: ReactElement = <Line key={uuid()} />
              set_cards((cards: any) => [...cards, card, line]);
            } else {
              set_cards((cards: any) => [...cards, card]);
            }
          }
        }
        set_fetching(false);
      }
    }

    fetch();
  }, [fetching]);

  return { fetching, set_fetching, cards };
}

