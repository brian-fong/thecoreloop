import axios from "axios";
import uuid from "react-uuid";
import validURL from "../utils/url";
import { useRef, useState, useEffect, ReactElement } from "react";
import { LAG, ArticleGroup, Article, LinkPreview } from "../types";
import Card_Landscape from "../components/DailyLAG/Card_Landscape";

export default function useCreateLAG() {
  const abort = useRef(false);
  const [status, setStatus] = useState<string>("idle"); 
  const [toggled, toggleFetch] = useState<boolean>(false);
  const [lag, setLAG] = useState<LAG>({
    heading: "",
    subheading: "",
    number: "",
    date: "",
    special_insights: "",
    content: [],
  });
  const [cards, setCards] = useState<ReactElement[]>([]);

  useEffect(() => {
    async function fetch(): Promise<void> {
      if (status == "starting") {
        // === Build LAG with metadata ===
        setCards([]);
        const lag_new: LAG = {
          ...lag,
          content: [],
        };

        for (const article_group of lag.content) {
          const article_group_meta: ArticleGroup = {
            category: article_group.category,
            articles: [],
          };
          for (const article of article_group.articles) {
            article.category = article_group.category;

            // Skip empty URLs
            if (!article.url) continue;

            // Alert user if URL is invalid
            if (!validURL(article.url)) {
              const alert_msg: string = 
              `Invalid URL detected!\n\n`
              + `Category: ${article_group.category}\n`
              + `Caption: ${article.caption}\n`
              + `URL: ${article.url}`;
              alert(alert_msg);
              return;
            }

            // BEFORE FETCH: Abort if fetching cancelled
            if (abort.current) {
              abort.current = false; 
              return;
            }

            // Fetch metadata for article
            setStatus("fetching");
            const response: any = await axios({
              method: "POST",
              url: "/api/fetch_metadata", 
              data: { url: article.url },
            });

            // AFTER FETCH: Abort if fetching cancelled
            if (abort.current) {
              abort.current = false; 
              return;
            }

            // Unpack response from /api/fetch_metadata.tsx
            const link_preview: LinkPreview = response.data;
            const article_meta: Article = {
              ...article, 
              title: link_preview.title,
              description: link_preview.description,
              image: link_preview.image,
              source: link_preview.source,
            };

            // If no caption present, then auto-generate caption
            if (!article.caption) {
              article_meta.caption = `A look at "${link_preview.title}"`;
            }

            const card: ReactElement = <Card_Landscape 
              key={uuid()}
              article={article_meta}
            />
            setCards((cards: ReactElement[]) => [...cards, card]);

            // Append Article to Articles array
            article_group_meta.articles.push(article_meta)
          }

          // Append ArticleGroup to content array
          lag_new.content.push(article_group_meta)
        }
        
        // Reset status back to idle
        setStatus("idle")

        // Update LAG state variable
        setLAG(lag_new);
      }
    }

    fetch();
  }, [toggled]);

  return { 
    abort, 
    status, 
    setStatus, 
    toggleFetch, 
    lag, 
    setLAG, 
    cards, 
  };
}

