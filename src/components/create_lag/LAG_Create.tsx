import React, { useContext } from "react";
import {
  BsPlusLg as PlusIcon,
} from "react-icons/bs";
import { v4 as uuid } from "uuid";
import Article from "@/components/create_lag/Article";
import { ICategoryGroup, ILAG } from "@/utils/types";
import styles from "./LAG_Create.module.css"


export default function LAG_Create({
  context,
}: any): React.ReactElement {

  const { LAG, setLAG }: {
    LAG: ILAG, setLAG: any
  } = useContext(context) as any;

  function renderCategories(): React.ReactElement[] {
    let result: React.ReactElement[] = [];

    for (let i = 0; i < LAG.content.length; i++) {
      const category_group: ICategoryGroup = LAG.content[i];

      const Articles: React.ReactElement[] = [];
      for (let j = 0; j < category_group.articles.length; j++) {
        Articles.push(
          <Article
            key={uuid()}
            category={category_group.category}
            index={j}
            context={context}
            updateLAG={updateLAG}
          />
        );
      }

      result.push(
        <div key={uuid()} className={styles["category-container"]}>
          <div className={styles["category"]}>
            <label className={styles["label"]}>
              {category_group.category}
            </label>
          </div>
          <div className={styles["article-container"]}>
            {Articles}
          </div>
          <button
            className={styles["add"]}
            onClick={() => addArticle(category_group.category)}
          >
            <PlusIcon color="white" size="24px" />
          </button>
        </div>
      );
    }

    return result;
  }

  function updateLAG(LAG_param: string): void {
    switch (LAG_param) {
      case "num": {
        const lag_num: HTMLInputElement = document.getElementById(
          "lag-number"
        ) as HTMLInputElement;

        try {
          const num: number = Number(lag_num.value);
          setLAG({ ...LAG, num });
          return;
        } catch (err) {
          console.log(err);
        }
      } case "date": {
        const lag_date: HTMLInputElement = document.getElementById(
          "lag-date"
        ) as HTMLInputElement;

        try {
          const date: string = lag_date.value;
          setLAG({ ...LAG, date });
          return;
        } catch (err) {
          console.log(err);
        }
      } case "subheading": {
        const lag_subheading: HTMLInputElement = document.getElementById(
          "lag-subheading"
        ) as HTMLInputElement;

        try {
          const subheading: string = lag_subheading.value;
          setLAG({ ...LAG, subheading });
          return;
        } catch (err) {
          console.log(err);
        }
      } case "content": {
        const content: ICategoryGroup[] = [];

        const cgc: HTMLDivElement = document.getElementById(
          "category-group-container"
        ) as HTMLDivElement;

        for (let i = 0; i < cgc.children.length; i++) {
          const cc: HTMLDivElement = cgc.children[i] as HTMLDivElement;
          const category: string = cc
            .children[0]
            .children[0]
            .textContent!;
          const category_group: ICategoryGroup = {
            category,
            articles: [],
          };
          for (let j = 0; j < cc.children[1].children.length; j++) {
            const article = cc
              .children[1]
              .children[j]
              .children[0]
              .children;

            category_group.articles.push({
              caption: (
                article[0].lastChild as HTMLTextAreaElement
              ).value || "",
              link: (
                article[1].lastChild as HTMLInputElement
              ).value || "",
              alt_text: (
                article[2].lastChild as HTMLInputElement
              ).value || "",
            });
          }
          content.push(category_group);
        }

        setLAG({ ...LAG, content });
        return;
      }
    }
  }

  function addArticle(category: string): void {
    const content: ICategoryGroup[] = LAG.content;
    const category_group: ICategoryGroup = content.filter(
      category_group => category_group.category == category
    )[0];
    category_group.articles.push({
      caption: "",
      link: "",
      alt_text: "",
    });
    setLAG({ ...LAG, content });
  }

  function handleSubmit(): void {
    console.log("LAG: ", LAG);
  }

  return (
    <div className={`tcl-container gray ${styles["create-section"]}`}>
      <h2>
        Create LAG
      </h2>

      <div className={styles["num-date-container"]}>
        <div className={styles["row"]}>
          <label
            className={styles["label"]}
            htmlFor="lag-number"
          >
            Look at Gaming #:
          </label>
          <input
            id="lag-number"
            className={styles["lag-number"]}
            type="text"
            maxLength={4}
            placeholder="1234"
            autoFocus={true}
            autoComplete="off"
            onChange={(event) => {
              event.target.value = event.target.value.trim();
              updateLAG("num");
            }}
            value={LAG.num}
          />
        </div>

        <div className={styles["row"]}>
          <label
            className={styles["label"]}
            htmlFor="lag-date"
          >
            Date:
          </label>
          <input
            id="lag-date"
            className={styles["lag-date"]}
            type="date"
            onChange={() => updateLAG("date")}
            value={LAG.date}
          />
        </div>
      </div>

      <div className={styles["subheading-container"]}>
        <label
          className={styles["label"]}
          htmlFor="lag-subheading"
        >
          Subheading:
        </label>
        <textarea
          id="lag-subheading"
          className={styles["input"]}
          placeholder="gm gm"
          onChange={() => updateLAG("subheading")}
          value={LAG.subheading}
        />
      </div>

      <div
        id="category-group-container"
        className={styles["category-group-container"]}
      >
        {renderCategories()}
      </div>
    </div>
);
}
