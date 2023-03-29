// Components
import { 
  Flex,
  Text,
  Input,
  Textarea,
} from "@chakra-ui/react";
import ArticleGroup from "./ArticleGroup";
import Controls from "./Controls";
import CurveContainer from "../Core/CurveContainer";

// Hooks
import { useState, useEffect, ReactElement } from "react";

// Helpful Constans & Functions
import uuid from "react-uuid";
import { formatDate } from "../../utils/date";
export const CATEGORIES: string[] = [
  "🔦 Spotlight 🌟",
  "🌊 MARKET ☎️",
  "💎 Deep Dives 🔎",
  "🌈 Platforms 🏔️",
  "✨ Web 3️⃣ + Meta 🌎",
  "🧠 Knowledge Hub 📚",
  "💰 Fundraising 🧧",
  "👾 Game & Stats Releases 🎮",
];

// Types
import { 
  LAG, 
  ArticleGroup as ArticleGroupType,
  Article as ArticleType,
} from "../../types";

export default function InputLAG({ 
  abort, 
  status, 
  setStatus,
  toggleFetch, 
  lag_meta,
  setLAG,
}: any) {
  const [num_msg, setNumMsg] = useState<string>("");
  const [date_msg, setDateMsg] = useState<string>("Enter date above");
  const [updated, updateLAG] = useState<boolean>(false);
  const [article_groups, setArticleGroups] = useState<ReactElement[]>([]);

  function buildLAG() {
    // Note: this function should run whenever the user: 
    //  1. Clicks add/remove article button 
    //  2. Enters something for LAG Number
    //  3. Enters something for LAG Date
    //  4. Enters something for LAG Subheading
    //  5. Enters something for LAG Special Insights
    //  6. Enters something for an article's caption/URL 

    // === Collect data from all input fields ===
    // LAG number
    let lag_number: string = (document.getElementById(
      "lag-number"
    ) as HTMLInputElement).value || "<number>";
    // LAG date
    let lag_date: string = (document.getElementById(
      "lag-date"
    ) as HTMLInputElement).value || "<date>";
    // LAG subheading 
    const lag_subheading: string = (document.getElementById(
      "lag-subheading"
    ) as HTMLInputElement).value;
    // Special Insights
    const lag_special_insights: string = (document.getElementById(
      "lag-special-insights"
    ) as HTMLInputElement).value;
    // Article Groups 
    const article_group_container = document.getElementById(
      "lag-articles"
    )!;

    try {
      lag_date = formatDate(lag_date);
    } catch (error: any) {
      console.log(`Error with LAG Date: ${error.message}`);
    }

    // === Build LAG without metadata ===
    const lag_new: LAG = {
      heading: `Look at Gaming #${lag_number}`,
      subheading: lag_subheading,
      number: lag_number, 
      date: lag_date,
      special_insights: lag_special_insights,
      content: [],
    };

    for (const article_group_node of Array.from(
      article_group_container.childNodes
    )) {
      // Parse Articles 
      const article_container: ChildNode = article_group_node.lastChild!;
      const articles_nodes: ChildNode[] = Array.from(
        article_container.childNodes
      );
      if (articles_nodes.length > 0) {
        // Parse category
        const category: string = article_group_node
          .firstChild!
          .firstChild!
          .textContent!;

        // Instantiate new <ArticleGroup> object
        const article_group: ArticleGroupType = {
          category: category,
          articles: [],
        };

        // Iterate through Articles, parsing caption + URL
        for (const article_node of articles_nodes) {
          // Parse caption + URL
          let caption: string = (article_node
            .firstChild!
            .lastChild! as HTMLInputElement)
            .value;
          let url: string = (article_node
            .lastChild!
            .lastChild! as HTMLInputElement)
            .value;

          // Instantiate new <Article> object
          const article: ArticleType = {
            caption: caption,
            url: url, 
          };

          // Append Article to Articles array
          article_group.articles.push(article);
        }

        // Append Article Group to content array
        lag_new.content.push(article_group);
      }
    }

    // Set LAG to update state
    setLAG(lag_new);
  }

  function handleNumChange() {
    // Indicate if LAG number is valid/invalid
    const lag_number: number = Number((document.getElementById(
      "lag-number"
    ) as HTMLInputElement).value);
    if (isNaN(lag_number)) {
      setNumMsg("Not a number!");
    } else {
      setNumMsg("");
    }

    // (Re)try building LAG to include updated LAG number
    buildLAG();
  }

  function handleDateChange() {
    // Read LAG date from input element
    const lag_date: string = (document.getElementById(
      "lag-date"
    )! as HTMLInputElement).value;

    // Indicate if LAG date is valid/invalid
    try {
      const date_string: string = formatDate(lag_date, false);
      setDateMsg(date_string)
    } catch (error: any) {
      // console.log(error.message);
      setDateMsg("Enter date above");
    }
    
    // (Re)try building LAG to include updated date
    buildLAG();
  }

  useEffect(() => {
    // === Initialization ===
    
    // Focus on LAG number input on start-up
    const lag_number_input: HTMLElement = document.getElementById(
      "lag-number"
    )!;
    lag_number_input!.focus();

    for (const CATEGORY of CATEGORIES) {
      const article_group: ReactElement = <ArticleGroup 
        key={uuid()} 
        category={CATEGORY} 
        updateLAG={updateLAG}
      />;
      setArticleGroups((article_groups: ReactElement[]) => {
        return [...article_groups, article_group];
      });
    }

    buildLAG();
  }, []);

  useEffect(() => {
    // Update LAG state
    buildLAG();
  }, [updated]);

  return (
    <CurveContainer heading="Create Daily LAG">
      <Flex
        id="input-lag"
        flexDir="column"
        gap="30px"
        width="100%"
        height="100%"
      >
        <Flex
          flexDir="row"
          gap="10px"
          justify="space-between"
          align="start"
          width="100%"
        >
          { /* LAG Number */ }
          <Flex
            flexDir="row"
            justify="center"
            align="center"
            width="min-content"
            height="100%"
          >
            <label 
              htmlFor="lag-number"
              style={{
                padding: "10px 10px",
                width: "min-content",
                height: "100%",
                color: "white",
                fontSize: "14px",
                fontWeight: "800",
                background: "#114dcf",
                border: "1px solid black",
                borderRight: "none",
                whiteSpace: "nowrap",
              }}
            >
              Look at Gaming #
            </label>
            <Input
              id="lag-number"
              p="2px 10px"
              fontSize="14px"
              letterSpacing="3px"
              width="65px"
              height="100%"
              minHeight="43px"
              color="black"
              bg="white"
              border="none"
              placeholder="123"
              minLength={1}
              maxLength={3}
              style={{
                border: "1px solid black",
                borderRadius: "0px",
              }}
              onChange={handleNumChange}
              _focusVisible={{
                outline: "1px solid blue",
              }}
            />
            <Flex
              flexDir="row"
              justify="end"
              align="end"
              p="2px 10px"
              color="text_alt"
              fontSize="14px"
              whiteSpace="nowrap"
            >
              {num_msg}
            </Flex>
          </Flex>

          { /* LAG Date */ }
          <Flex
            position="relative"
            flexDir="column"
            justify="start"
            align="start"
          >
            <Flex
              flexDir="row"
              justify="center"
              align="center"
              width="min-content"
              height="min-content"
              color="black"
              bg="#114dcf"
              border="1px solid black"
            >
              <label 
                htmlFor="lag-date"
                style={{
                  margin: "0px",
                  padding: "2px 10px",
                  width: "min-content",
                  height: "100%",
                  color: "white",
                  fontSize: "14px",
                  fontWeight: "800",
                  whiteSpace: "nowrap",
                }}
                >
                Date
              </label>
              <Input
                id="lag-date"
                type="date"
                m="0px"
                p="0px 5px 0px 0px"
                fontSize="14px"
                textAlign="center"
                bg="white"
                border="none"
                borderRadius="0px"
                overflow="hidden"
                onChange={handleDateChange}
                style={{
                  "borderLeft": "1px solid black",
                }}
                _focusVisible={{
                  outline: "1px solid blue",
                }}
              />
            </Flex>
            <Text
              position="absolute"
              top="42px"
              p="4px 0px"
              fontSize="14px"
              textAlign="center"
              color="text_alt"
              width="100%"
              whiteSpace="nowrap"
            >
              "{date_msg}"
            </Text>
          </Flex>
        </Flex>

        { /* LAG Subheading */ }
        <Flex
          flexDir="column"
          width="100%"
        >
          <label 
            htmlFor="lag-subheading"
            style={{
              padding: "2px 10px",
              width: "min-content",
              fontSize: "14px",
              fontWeight: "800",
              color: "white",
              background: "#114dcf",
              border: "1px solid black",
              borderBottom: "none",
              boxShadow: "3px 3px 2px rgba(0, 0, 0, 0.5)",
              whiteSpace: "nowrap",
            }}
          >
            Subheading
          </label>
          <Textarea
            id="lag-subheading"
            p="4px"
            fontSize="14px"
            bg="white"
            borderRadius="0px"
            height="90px"
            minHeight="30px"
            border="1px solid black"
            resize="vertical"
            placeholder="GM.  Happy 100th Daily LAG ❤️"
            _placeholder={{
              "color": "rgba(0, 0, 0, 0.5)",
            }}
            style={{
              "border": "1px solid black",
            }}
            onChange={buildLAG}
            _focusVisible={{
              outline: "1px solid blue",
            }}
          />
        </Flex>

        { /* Special Insights */ }
        <Flex
          flexDir="column"
          width="100%"
        >
          <label 
            htmlFor="lag-special-insights"
            style={{
              padding: "2px 10px",
              width: "min-content",
              fontSize: "14px",
              fontWeight: "800",
              color: "white",
              background: "#114dcf",
              border: "1px solid black",
              borderBottom: "none",
              boxShadow: "3px 3px 2px rgba(0, 0, 0, 0.5)",
              whiteSpace: "nowrap",
            }}
          >
            ‼️ SPECIAL INSIGHTS 👀
          </label>
          <Textarea
            id="lag-special-insights"
            p="4px"
            fontSize="14px"
            bg="white"
            borderRadius="0px"
            height="90px"
            minHeight="30px"
            border="1px solid black"
            placeholder="powered by AppMagic.rocks 😎"
            _placeholder={{
              "color": "rgba(0, 0, 0, 0.5)",
            }}
            style={{
              "border": "1px solid black",
            }}
            onChange={buildLAG}
            _focusVisible={{
              outline: "1px solid blue",
            }}
            resize="vertical"
          />
        </Flex>

        {/* Article Groups Container */}
        <Flex
          id="lag-articles"
          flexDir="column"
          gap="10px"
          width="100%"
          height="100%"
        >
          {article_groups}
        </Flex>

        {/* Fetch Button Container */}
        <Flex
          position="relative"
          top="-10px"
          flexDir="row"
          justify="center"
          align="center"
          width="100%"
        >
          <Controls 
            abort={abort}
            status={status}
            setStatus={setStatus}
            toggleFetch={toggleFetch}
            lag={lag_meta}
          />
        </Flex>
      </Flex>
    </CurveContainer>
  );
}

