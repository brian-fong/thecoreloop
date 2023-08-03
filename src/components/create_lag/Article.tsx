import React, { useContext } from "react";
import {
  BsChatRight as ChatIcon,
  BsLink as LinkIcon,
  BsFonts as FontIcon,
  BsXLg as DeleteIcon,
} from "react-icons/bs";
import styles from "./LAG_Create.module.css";
import { ICategoryGroup, ILAG } from "@/utils/types";


export default function Article({
  category,
  index,
  context,
  updateLAG,
}: any): React.ReactElement {

  const { LAG, setLAG }: {
    LAG: ILAG, setLAG: any
  } = useContext(context) as any;

  function handleDelete() {
    const content: ICategoryGroup[] = [...LAG.content];
    for (let i = 0; i < content.length; i++) {
      const category_group: ICategoryGroup = content[i];
      if (category_group.category == category) {
        category_group.articles.splice(index, 1);
        break;
      }
    }
    setLAG({ ...LAG, content });
  }

  return (
    <div className={styles["article"]}>
      <div className={styles["content"]}>
        <div className={`${styles["row"]} ${styles["caption"]}`}>
          <div className={styles["icon"]}>
            <ChatIcon size="18px" />
          </div>
          <textarea
            className={styles["textarea"]}
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            onChange={() => updateLAG("content")}
            value={LAG.content.filter((category_group: ICategoryGroup) => (
              category_group.category == category
            ))[0].articles[index].caption}
          />
        </div>
        <div className={`${styles["row"]} ${styles["link"]}`}>
          <div className={styles["icon"]}>
            <LinkIcon size="18px" />
          </div>
          <input
            type="text"
            className={styles["input"]}
            placeholder="https://loremipsum.io/"
            onChange={() => updateLAG("content")}
            value={LAG.content.filter((category_group: ICategoryGroup) => (
              category_group.category == category
            ))[0].articles[index].link}
          />
        </div>
        <div className={`${styles["row"]} ${styles["alt-text"]}`}>
          <div className={styles["icon"]}>
            <FontIcon size="18px" />
          </div>
          <input
            type="text"
            className={styles["input"]}
            placeholder="Alt-Text for Hyperlink"
            onChange={() => updateLAG("content")}
            value={LAG.content.filter((category_group: ICategoryGroup) => (
              category_group.category == category
            ))[0].articles[index].alt_text}
          />
        </div>
      </div>

      <button
        className={styles["delete"]}
        onClick={handleDelete}
      >
        <DeleteIcon color="white" size="24px" />
      </button>
    </div>
  );
}
