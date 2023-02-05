import axios from "axios";
import uuid from "react-uuid";
import wait from "../utils/wait";
import validURL from "../utils/url";
import { useRef, useState, useEffect } from "react";
import { LAG, Article, LinkPreview } from "../types";

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
  const [lag_meta, setLAG_meta] = useState<LAG>({
    heading: "",
    subheading: "",
    number: "",
    date: "",
    special_insights: "",
    content: [],
  });

  useEffect(() => {
    setLAG_meta({...lag});
  }, [lag]);

  useEffect(() => {
    async function fetch(): Promise<void> {
      if (status == "starting") {
        // === Build LAG with metadata ===
        const lag_new: LAG = {
          ...lag, 
          content: lag.content.map(article_group => {
            return {
              category: article_group.category, 
              articles: [...article_group.articles],
            };
          }),
        };
        setLAG_meta({...lag_new});

        for (const [i, article_group] of lag.content.entries()) {
          for (const [j, article] of article_group.articles.entries()) {
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
            await wait(100);

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

            // Update lag_meta state 
            lag_new.content[i].articles[j] = article_meta;
            setLAG_meta({...lag_new});
          }
        }
        setStatus("idle");
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
    lag_meta,
    setLAG,
  };
}

