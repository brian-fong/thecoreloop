import { 
  Flex,
  Text,
  Input,
  Textarea,
} from "@chakra-ui/react";
import uuid from "react-uuid";
import PreviewLAG from "./PreviewLAG";
import ArticleGroup from "./ArticleGroup";
import { formatDate } from "../../utils/date";
import CurveContainer from "../Core/CurveContainer";
import { useState, useEffect, ReactElement } from "react";

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

export default function CreateLAG({ set_lag }: any) {
  const [lag_num, set_lag_num] = useState<string>("");
  const [lag_date, set_lag_date] = useState<string>("Enter date above")
  const [groups, set_groups] = useState<ReactElement[]>([]);

  function handleNumChange() {
    // Read LAG number from input element
    const lag_number: number = Number((document.getElementById(
      "lag-number"
    ) as HTMLInputElement).value);

    // Indicate if LAG number is valid/invalid
    if (isNaN(lag_number)) {
      set_lag_num("Not a number!");
    } else {
      set_lag_num("");
    }
  }

  function handleDateChange() {
    // Read LAG date from input element
    const lag_date: string = (document.getElementById(
      "lag-date"
    )! as HTMLInputElement).value;

    // Indicate if LAG date is valid/invalid
    try {
      const date_string: string = formatDate(lag_date, false);
      set_lag_date(date_string)
    } catch (error: any) {
      console.log(error.message);
      set_lag_date("Enter date above");
    }
  }

  useEffect(() => {
    // Focus on LAG number input on start-up
    const lag_number_input: HTMLElement = document.getElementById(
      "lag-number"
    )!;
    lag_number_input!.focus();

    // Initialize <ArticleGroup> components for each CATEGORY
    for (const CATEGORY of CATEGORIES) {
      const group: ReactElement = <ArticleGroup 
        key={uuid()} 
        category={CATEGORY} 
      />
      set_groups((groups: any) => [...groups, group]);
    }
  }, []);

  return (
    <CurveContainer heading="Create Daily LAG">
      <Flex
        flexDir="row"
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
              fontSize: "16px",
              fontWeight: "800",
              background: "#114dcf",
              border: "1px solid black",
              borderRight: "none",
              whiteSpace: "nowrap",
            }}
          >
            LAG #
          </label>
          <Input
            id="lag-number"
            p="2px 10px"
            fontSize="16px"
            letterSpacing="3px"
            width="65px"
            height="100%"
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
            color="description_fg"
            fontSize="14px"
            whiteSpace="nowrap"
          >
            {lag_num}
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
                fontSize: "16px",
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
              fontSize="16px"
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
            color="description_fg"
            width="100%"
            whiteSpace="nowrap"
          >
            "{lag_date}"
          </Text>
        </Flex>
      </Flex>

      { /* LAG Subheading */ }
      <Flex
        flexDir="column"
        width="100%"
      >
        <label 
          htmlFor="subheading"
          style={{
            padding: "2px 10px",
            width: "min-content",
            fontSize: "16px",
            fontWeight: "800",
            color: "white",
            background: "#114dcf",
            border: "1px solid black",
            borderBottom: "none",
            whiteSpace: "nowrap",
          }}
        >
          Subheading
        </label>
        <Textarea
          id="subheading"
          p="4px"
          fontSize="14px"
          bg="white"
          borderRadius="0px"
          height="90px"
          minHeight="30px"
          border="1px solid black"
          placeholder="GM.  Happy 100th Daily LAG ❤️"
          _placeholder={{
            "color": "rgba(0, 0, 0, 0.5)",
          }}
          style={{
            "border": "1px solid black",
          }}
          _focusVisible={{
            outline: "1px solid blue",
          }}
          resize="vertical"
        />
      </Flex>

      { /* Special Insights */ }
      <Flex
        flexDir="column"
        width="100%"
      >
        <label 
          htmlFor="special-insights"
          style={{
            padding: "2px 10px",
            width: "min-content",
            fontSize: "16px",
            fontWeight: "800",
            color: "white",
            background: "#114dcf",
            border: "1px solid black",
            borderBottom: "none",
            whiteSpace: "nowrap",
          }}
        >
          ‼️ SPECIAL INSIGHTS 👀
        </label>
        <Textarea
          id="special-insights"
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
          _focusVisible={{
            outline: "1px solid blue",
          }}
          resize="vertical"
        />
      </Flex>

      <Flex
        id="article-group-container"
        flexDir="column"
        gap="10px"
        width="100%"
        height="100%"
      >
        {groups}
      </Flex>

      <PreviewLAG set_lag={set_lag} />
    </CurveContainer>
  );
}

