import React from "react";
import {
  BsChatRight as ChatIcon,
  BsLink as LinkIcon,
  BsFonts as FontIcon,
} from "react-icons/bs";

export default function Article(): React.ReactElement {
  return (
    <div className="article">
      <div className="row caption">
        <div className="icon">
          <ChatIcon size="18px" />
        </div>
        <textarea
          className="input"
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
        />
      </div>
    </div>
  );
}
