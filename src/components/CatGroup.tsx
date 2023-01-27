import { 
  Flex,
  Select,
} from "@chakra-ui/react";

import uuid from "react-uuid";
import Article from "./Article";
import AddRemoveArticleBtn from "./AddRemoveArticleBtn";
import { useState, useEffect, ReactElement } from "react";

export default function CatGroup() {
  const [articles, set_articles] = useState<ReactElement[]>(
    [<Article key={uuid()} />]
  );

  useEffect(() => {
    console.log("Article Count: ", articles.length);
  }, [articles]);

  return (
    <>
      <Flex
        flexDir="row"
        justify="center"
        align="center"
        width="100%"
      >
        <Select 
          className="select-field"
          width="100%"
          minWidth="100%"
          height="100%"
          fontSize="18px"
          color="white"
          bg="#114dcf"
          border="1px solid black"
          borderRadius="none"
          size="sm"
          style={{
            margin: "0px",
            padding: "6px 4px",
            width: "100%",
            minWidth: "100%",
          }}
          _focusVisible={{
            bg: "#0c3999",
            outline: "1px solid blue",
          }}
          _hover={{
            bg: "#0c3999",
            cursor: "pointer",
          }}
          userSelect="none"
          isRequired
        >
          <option 
            value="🌊 MARKET ☎️"
            style={{
              color: "black",
            }}
          >
            🌊 MARKET ☎️
          </option>
          <option 
            value="💎 Deep Dives 🔎"
            style={{
              color: "black"
            }}
          >
            💎 Deep Dives 🔎
          </option>
          <option 
            value="🌈 Platforms ⛰️"
            style={{
              color: "black"
            }}
          >
            🌈 Platforms ⛰️
          </option>
          <option 
            value="✨ Web 3️⃣ + Meta 🌎"
            style={{
              color: "black"
            }}
          >
            ✨ Web 3️⃣ + Meta 🌎
          </option>
          <option 
            value="🧠 Knowledge Hub 📚"
            style={{
              color: "black"
            }}
          >
            🧠 Knowledge Hub 📚
          </option>
          <option 
            value="💰 Fundraising 🧧"
            style={{
              color: "black"
            }}
          >
            💰 Fundraising 🧧
          </option>
          <option 
            value="👾 Game & Stats Releases 🎮"
            style={{
              color: "black"
            }}
          >
            👾 Game & Stats Releases 🎮
          </option>
        </Select>
      </Flex>
      <Flex
        flexDir="column"
        width="100%"
      >
        {articles}
        <AddRemoveArticleBtn 
          articles={articles}
          set_articles={set_articles}
        />
      </Flex>
    </>
  );
}

