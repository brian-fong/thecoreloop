import { 
  Flex,
  Text,
  Input,
  Select,
  Heading,
  Textarea,
} from "@chakra-ui/react";
import { 
  AddIcon, 
  MinusIcon,
  ChatIcon,
  LinkIcon,
} from "@chakra-ui/icons";

import { useState, useEffect } from "react";
import { getTodaysDate, formatDate } from "../utils/date";

export default function CreateLAG() {
  const [lag_date, set_lag_date] = useState<string>("Enter date above")

  function handleDateChange(event: any) {
    const lag_date_input: any = document.getElementById(
      "lag-date"
    )!;
    set_lag_date(formatDate(lag_date_input.value))
    console.log(`LAG Date: ${lag_date_input.value}`);
  }

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
          gap="15px"
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
              bg="input_label"
              border="1px solid black"
            >
              <label 
                htmlFor="lag-number"
                style={{
                  "padding": "2px 10px",
                  "width": "min-content",
                  "height": "100%",
                  "color": "black",
                  "fontSize": "16px",
                  "whiteSpace": "nowrap",
                }}
              >
                LAG #
              </label>
              <Input
                id="lag-number"
                p="2px 10px"
                fontSize="16px"
                letterSpacing="3px"
                width="60px"
                bg="white"
                border="none"
                placeholder="123"
                minLength={1}
                maxLength={3}
                style={{
                  "border": "none",
                  "borderLeft": "1px solid black",
                  "borderRadius": "0px",
                }}
                isRequired
                autoFocus
              />
            </Flex>

            { /* LAG Date */ }
            <Flex
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
                bg="input_label"
                border="1px solid black"
              >
                <label 
                  htmlFor="lag-date"
                  style={{
                    "margin": "0px",
                    "padding": "2px 10px",
                    "width": "min-content",
                    "height": "100%",
                    "color": "black",
                    "fontSize": "16px",
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
                  isRequired
                />
              </Flex>
              <Text
                position="relative"
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
                "padding": "2px 10px",
                "width": "min-content",
                "fontSize": "16px",
                "color": "black",
                "background": "#eed49f",
                "border": "1px solid black",
                "borderBottom": "none",
                "whiteSpace": "nowrap",
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
              resize="vertical"
              isRequired
            />
          </Flex>

          {/* Spotlight */ }
          <Flex
            flexDir="column"
            width="100%"
          >
            <Flex
              flexDir="row"
              justify="space-between"
              align="start"
            >
              <label 
                htmlFor="special-insights"
                style={{
                  "padding": "2px 10px",
                  "width": "min-content",
                  "fontSize": "16px",
                  "color": "black",
                  "background": "#eed49f",
                  "border": "1px solid black",
                  "borderBottom": "none",
                  "whiteSpace": "nowrap",
                }}
              >
                🔦 Spotlight 🌟
              </label>
              <Flex
                flexDir="row"
                gap="10px"
                justify="center"
                align="center"
                p="2px"
              >
                <Flex 
                  p="3px" 
                  color="black"
                  border="1px solid black"
                  boxShadow="2px 2px 2px rgba(0, 0, 0, 0.5)"
                  _hover={{
                    "color": "white",
                    "background": "category_bkg",
                    "boxShadow": "1px 1px 1px rgba(0, 0, 0, 0.5)",
                    "cursor": "pointer",
                  }}
                  _active={{
                    "transform": "translate(1px, 1px)",
                    "boxShadow": "none"
                  }}
                >
                  <AddIcon boxSize="12px" userSelect="none" />
                </Flex>
                <Flex 
                  p="3px" 
                  border="1px solid black"
                  color="black"
                  boxShadow="2px 2px 2px rgba(0, 0, 0, 0.5)"
                  _hover={{
                    "color": "white",
                    "background": "category_bkg",
                    "boxShadow": "1px 1px 1px rgba(0, 0, 0, 0.5)",
                    "cursor": "pointer",
                  }}
                  _active={{
                    "transform": "translate(1px, 1px)",
                    "boxShadow": "none"
                  }}
                >
                  <MinusIcon boxSize="12px" userSelect="none" />
                </Flex>
              </Flex>
            </Flex>

            {/* Caption/Article Pair */ }
            <Flex
              flexDir="row"
              justify="center"
              align="center"
              border="1px solid black"
            >
              <Flex
                flexDir="row"
                justify="center"
                align="center"
                p="5px"
                height="100%"
                bg="#A8A8A8"
                borderRight="1px solid black"
              >
                <ChatIcon color="black" boxSize="15px" userSelect="none" />
              </Flex>
              <Textarea
                id="spotlight-caption"
                p="4px"
                fontSize="14px"
                bg="white"
                style={{
                  "border": "none",
                  "borderRadius": "0px",
                }}
                minHeight="30px"
                height="30px"
                placeholder="A look at..."
                resize="vertical"
                isRequired
              />
            </Flex>
            <Flex
              flexDir="row"
              justify="center"
              align="center"
              border="1px solid black"
              borderTop="none"
            >
              <Flex
                flexDir="row"
                justify="center"
                align="center"
                p="5px"
                height="100%"
                bg="#A8A8A8"
                borderRight="1px solid black"
              >
                <LinkIcon color="black" boxSize="15px" />
              </Flex>
              <Input
                id="spotlight-url"
                type="url"
                p="4px"
                fontSize="14px"
                bg="white"
                style={{
                  "border": "none",
                  "borderRadius": "0px",
                }}
                width="100%"
                height="100%"
                placeholder="https://..."
                isRequired
              />
            </Flex>
          </Flex>

          {/* Market */ }
          <Flex
            flexDir="column"
            width="100%"
          >
            <Flex
              flexDir="row"
              justify="space-between"
              align="center"
              width="100%"
              height="100%"
            >
              <Select 
                position="relative"
                top="3px"
                width="200px"
                height="100%"
                fontSize="16px"
                placeholder="Select Category"
                bg="#eed49f"
                borderRadius="none"
                style={{
                  margin: "0px",
                  padding: "0px 4px",
                  border: "1px solid black",
                  borderBottom: "none",
                }}
                userSelect="none"
                isRequired
              >
                <option 
                  value="🌊 MARKET ☎️"
                >
                  🌊 MARKET ☎️
                </option>
                <option 
                  value="💎 Deep Dives 🔎"
                >
                  💎 Deep Dives 🔎
                </option>
                <option 
                  value="🌈 Platforms ⛰️"
                >
                  🌈 Platforms ⛰️
                </option>
                <option 
                  value="✨ Web 3️⃣ + Meta 🌎"
                >
                  ✨ Web 3️⃣ + Meta 🌎
                </option>
                <option 
                  value="🧠 Knowledge Hub 📚"
                >
                  🧠 Knowledge Hub 📚
                </option>
                <option 
                  value="💰 Fundraising 🧧"
                >
                  💰 Fundraising 🧧
                </option>
                <option 
                  value="👾 Game & Stats Releases 🎮"
                >
                  👾 Game & Stats Releases 🎮
                </option>
              </Select>
              <Flex
                flexDir="row"
                gap="10px"
                justify="center"
                align="center"
                p="2px"
                userSelect="none"
              >
                <Flex 
                  p="3px" 
                  color="black"
                  border="1px solid black"
                  boxShadow="2px 2px 2px rgba(0, 0, 0, 0.5)"
                  _hover={{
                    color: "white",
                    background: "category_bkg",
                    boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)",
                    cursor: "pointer",
                  }}
                  _active={{
                    transform: "translate(1px, 1px)",
                    boxShadow: "none"
                  }}
                >
                  <AddIcon boxSize="12px" userSelect="none" />
                </Flex>
                <Flex 
                  p="3px" 
                  border="1px solid black"
                  color="black"
                  boxShadow="2px 2px 2px rgba(0, 0, 0, 0.5)"
                  _hover={{
                    color: "white",
                    background: "category_bkg",
                    boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)",
                    cursor: "pointer",
                  }}
                  _active={{
                    transform: "translate(1px, 1px)",
                    boxShadow: "none"
                  }}
                >
                  <MinusIcon boxSize="12px" userSelect="none" />
                </Flex>
              </Flex>
            </Flex>

            {/* Caption/Article Pair */ }
            <Flex
              flexDir="row"
              justify="center"
              align="center"
              border="1px solid black"
            >
              <Flex
                flexDir="row"
                justify="center"
                align="center"
                p="5px"
                height="100%"
                bg="#A8A8A8"
                borderRight="1px solid black"
              >
                <ChatIcon color="black" boxSize="15px" userSelect="none" />
              </Flex>
              <Textarea
                p="4px"
                fontSize="14px"
                bg="white"
                style={{
                  "border": "none",
                  "borderRadius": "0px",
                }}
                minHeight="30px"
                height="30px"
                placeholder="A look at..."
                resize="vertical"
                isRequired
              />
            </Flex>
            <Flex
              flexDir="row"
              justify="center"
              align="center"
              border="1px solid black"
              borderTop="none"
            >
              <Flex
                flexDir="row"
                justify="center"
                align="center"
                p="5px"
                height="100%"
                bg="#A8A8A8"
                borderRight="1px solid black"
              >
                <LinkIcon color="black" boxSize="15px" userSelect="none" />
              </Flex>
              <Input
                type="url"
                p="4px"
                fontSize="14px"
                bg="white"
                style={{
                  "border": "none",
                  "borderRadius": "0px",
                }}
                width="100%"
                height="100%"
                placeholder="https://..."
                isRequired
              />
            </Flex>
          </Flex>

          {/* Add Category Group */}
          <Flex
            flexDir="row"
            justify="center"
            align="center"
            width="100%"
            color="white"
          >
            <Flex
              p="2px 10px"
              fontSize="16px"
              width="min-content"
              whiteSpace="nowrap"
              color="black"
              bg="tcl_blue"
              border="1px solid black"
              boxShadow="5px 5px 2px rgba(0, 0, 0, 0.5)"
              _hover={{
                bg: "tcl_blue_hover",
                textDecoration: "underline",
                boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)",
                cursor: "pointer",
              }}
              _active={{
                boxShadow: "none",
                transform: "translate(1px, 1px)",
              }}
            >
              Add Category Group
            </Flex>
          </Flex>

        </Flex>
      </Flex>
    </Flex>
  );
}

