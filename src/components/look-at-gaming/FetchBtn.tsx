import React, { useContext } from "react";
import { isValidURL } from "@/utils/metadata";
import { IArticle, ICategoryGroup, ILAG, IMetadata } from "@/utils/types";
import styles from "@/components/look-at-gaming/LAG_Create.module.css";


export default function FetchBtn({
  context,
}: any): React.ReactElement {

  const { LAG, setLAG }: {
    LAG: ILAG, setLAG: any
  } = useContext(context) as any;

  async function handleFetch(): Promise<void> {
    const content: ICategoryGroup[] = [...LAG.content];
    for (let i = 0; i < LAG.content.length; i++) {
      const category_group: ICategoryGroup = content[i];
      for (let j = 0; j < category_group.articles.length; j++) {
        let article: IArticle = category_group.articles[j];
        if (article.caption.length == 0) {
          if (!isValidURL(article.link)) {
            console.debug(`Invalid URL: ${article.link}`);
            continue;
          }

          try {
            const api_route: string = "/api/fetch-metadata";
            const response: Response = await fetch(api_route, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ link: article.link }),
            });
            const metadata: IMetadata = await response.json();
            if (metadata.title) {
              article.caption = metadata.title;
            } if (metadata.description) {
              article.caption = metadata.description;
            }
          } catch (error) {
            console.debug(`Failed to fetch metadata for ${article.link}`);
            continue;
          }
        }
        setLAG({ ...LAG, content })
      }
    }
  }

  return (
    <div>
      <button
        className={styles["fetch"]}
        onClick={handleFetch}
      >
        Fetch Metadata
      </button>
    </div>
  );
}
