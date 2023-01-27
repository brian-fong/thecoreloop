import { 
  Flex,
  Text,
  Input,
  Select,
  Heading,
  Textarea,
} from "@chakra-ui/react";
import { 
  ChatIcon,
  LinkIcon,
} from "@chakra-ui/icons";

import CatGroup from "./CatGroup";
import { formatDate } from "../utils/date";
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

export default function CreateLAG() {
  const [lag_date, set_lag_date] = useState<string>("Enter date above")
  const [groups, set_groups] = useState<ReactElement[]>([
    <CatGroup />
  ]);

  function handleDateChange() {
    const lag_date_input: any = document.getElementById(
      "lag-date"
    )!;
    set_lag_date(formatDate(lag_date_input.value))
    console.log(`LAG Date: ${lag_date_input.value}`);
  }

  useEffect(() => {
    console.log("Category Groups: ", groups);
  }, [groups]);

  return (
    <Flex 
      id="outer_container"
      flexDir="column" 
      justify="start" 
      align="center" 
      m="0px" 
      p="15px 15px 10px 15px" 
      width="100%" 
      minWidth="300px"
      minHeight="300px"
      bg="standard_bkg"
      border="6px double white" 
      boxShadow="0px 0px 0px 3px #c0c0c0, 
                 20px 20px 2px rgba(0, 0, 0, 0.5)"
      boxSizing="border-box"
    >
      <Flex 
        id="inner_container"
        flexDir="column" 
        justify="start" 
        align="start" 
        m="10px" 
        p="15px" 
        width="100%" 
        height="100%"
        border="1px solid gray" 
      >
        <Flex
          id="create_container"
          flexDir="column"
          gap="30px"
          justify="start"
          align="start"
          width="100%"
          height="100%"
        >
          { /* Heading */ }
          <Flex 
            position="relative" 
            top="-15px"
            flexDir="row" 
            justify="center" 
            align="center" 
            width="100%"
            userSelect="none"
          >
            <Heading 
              position="absolute"
              fontFamily="JetBrains Mono"
              fontWeight="400" 
              fontSize="16px" 
              p="0px 15px" 
              color="black" 
              bg="standard_bkg"
            >
              Create Daily LAG
            </Heading>
          </Flex>

          <Flex
            flexDir="row"
            justify="space-between"
            align="start"
            width="100%"
          >
          { /* LAG Number */ }
            <Flex
              flexDir="row"
              justify="start"
              align="center"
              width="min-content"
              height="min-content"
              color="white"
              bg="#114dcf"
              border="1px solid black"
            >
              <label 
                htmlFor="lag-number"
                style={{
                  padding: "2px 10px",
                  width: "min-content",
                  height: "100%",
                  fontSize: "18px",
                  whiteSpace: "nowrap",
                }}
              >
                LAG #
              </label>
              <Input
                id="lag-number"
                p="2px 10px"
                fontSize="18px"
                letterSpacing="3px"
                width="63px"
                bg="white"
                border="none"
                placeholder="123"
                minLength={1}
                maxLength={3}
                style={{
                  border: "none",
                  borderLeft: "1px solid black",
                  borderRadius: "0px",
                }}
                _focusVisible={{
                  outline: "1px solid blue",
                }}
                isRequired
                autoFocus
              />
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
                    "margin": "0px",
                    "padding": "2px 10px",
                    "width": "min-content",
                    "height": "100%",
                    "color": "white",
                    "fontSize": "18px",
                    "whiteSpace": "nowrap",
                  }}
                  >
                  Date
                </label>
                <Input
                  id="lag-date"
                  type="date"
                  m="0px"
                  p="0px 5px 0px 0px"
                  fontSize="18px"
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
                  isRequired
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
                fontSize: "18px",
                color: "white",
                background: "#114dcf",
                border: "1px solid black",
                borderBottom: "none",
                whiteSpace: "nowrap",
              }}
            >
              Special Insights
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
            flexDir="column"
            gap="5px"
            width="100%"
            height="100%"
          >
            {groups}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

