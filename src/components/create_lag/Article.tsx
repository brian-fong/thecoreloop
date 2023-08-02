// Packages
import React, { useContext } from "react";
import {
  BsChatRight as ChatIcon,
  BsLink as LinkIcon,
  BsFonts as FontIcon,
  BsXLg as DeleteIcon,
} from "react-icons/bs";

// utils
import { ICategoryGroup } from "@/utils/types";


export default function Article({
  category,
  index,
  context,
  updateLAG,
}: any): React.ReactElement {

  const { LAG, setLAG } = useContext(context) as any;

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
    <div className="article" draggable>
      <div className="content">
        <div className="row caption">
          <div className="icon">
            <ChatIcon size="18px" />
          </div>
          <textarea
            className="input"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            onChange={() => updateLAG("content")}
            value={LAG.content.filter((category_group: ICategoryGroup) => (
              category_group.category == category
            ))[0].articles[index].caption}
          />
        </div>
        <div className="row link">
          <div className="icon">
            <LinkIcon size="18px" />
          </div>
          <input
            type="text"
            className="input"
            placeholder="https://loremipsum.io/"
            onChange={() => updateLAG("content")}
          />
        </div>
        <div className="row alt-text">
          <div className="icon">
            <FontIcon size="18px" />
          </div>
          <input
            type="text"
            className="input"
            placeholder="Alt-Text for Hyperlink"
            onChange={() => updateLAG("content")}
          />
        </div>
      </div>

      <button
        className="btn delete"
        onClick={handleDelete}
      >
        <DeleteIcon color="white" size="24px" />
      </button>
    </div>
  );
}
