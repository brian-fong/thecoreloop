import React, { useContext } from "react";
import {
  BsDot as BulletPoint,
} from "react-icons/bs";
import { v4 as uuid } from "uuid";
import { formatDate, getTodaysDate } from "@/utils/date";
import { IArticle, ICategoryGroup, ILAG } from "@/utils/types";
import { LAG_CATEGORIES_EMOJI } from "@/utils/lag-categories";
import styles from "./LAG_Preview.module.css";


export default function LAG_Preview({
  context,
}: any): React.ReactElement {

  const { LAG }: { LAG: ILAG } = useContext(context) as any;

  function renderCategories(): React.ReactElement[] {
    const result: React.ReactElement[] = [];

    for (let i = 0; i < LAG.content.length; i++) {
      const cg: ICategoryGroup = LAG.content[i];
      if (cg.articles.length == 0) continue;
      
      result.push(
        <h3 key={uuid()} className={styles["category"]}>
          {LAG_CATEGORIES_EMOJI[cg.category]}
        </h3>
      );

      for (let j = 0; j < cg.articles.length; j++) {
        const article: IArticle = cg.articles[j];

        if (article.caption) {
          result.push(
            <div key={uuid()} className={styles["article"]}>
              <div className={styles["bullet-point"]}>
                <BulletPoint size="1.5rem" color="white" />
              </div>
              <p className={styles["caption"]}>
                {article.caption} |
                <a
                  className={styles["link"]}
                  href={article.link}
                  target="_blank"
                >
                  {article.alt_text
                    ? article.alt_text
                    : article.link
                  }
                </a>
              </p>
            </div>
          );
        }
      }
    }

    return result;
  }

  return (
    <div className="tcl-container gray">
      <h2>
        Preview LAG
      </h2>

      <div className={styles["preview-section"]}>
        <p className={styles["heading"]}>
          {`Look at Gaming #`}
          <span>
            {LAG.num
              ? LAG.num
              : "XYZ"
            }
          </span>
          {` | `}
          <span>
            {LAG.date
              ? formatDate(LAG.date)
              : getTodaysDate()
            }
          </span>
        </p>

        <p className={styles["subheading"]}>
          {LAG.subheading}
        </p>

        {renderCategories()}
      </div>
    </div>
  );
}
