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
    const content: ICategoryGroup[] = [];
    for (let i = 0; i < LAG.content.length; i++) {
      const category_group: ICategoryGroup = {
        category: LAG.content[i].category,
        articles: [],
      };
      for (let j = 0; j < LAG.content[i].articles.length; j++) {
        let article: IArticle = { ...LAG.content[i].articles[j] };
        if (article.caption.length == 0 && isValidURL(article.link)) {
          const api_route: string = "/api/fetch-metadata";
          const response = await fetch(api_route, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ link: article.link }),
          });
          const metadata: IMetadata = await response.json();
          console.log("Metadata: ", metadata);
          if (metadata.title) {
            article.caption = metadata.title;
          } if (metadata.description) {
            article.caption = metadata.description;
          }
        }
        category_group.articles.push(article);
      }
      content.push(category_group);
    }
    setLAG({ ...LAG, content });
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
