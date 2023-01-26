import { 
  Flex,
} from '@chakra-ui/react';
import uuid from 'react-uuid';
import { Gallery as GalleryProps } from '../types';
import { useState, useEffect, useRef, ReactElement } from "react";

// Components
import Line from "../components/Line";
import Card_Portrait from "../components/Card_Portrait";
import Card_Landscape from "../components/Card_Landscape";

function detectDevice(): string {
  const user_agent: string = window?.navigator?.userAgent?.toLowerCase();
  let device: string = "desktop";
  const MOBILE_DEVICES: string[] = [
    "android",
    "iphone",
    // "ipad",
    "ipod",
    "blackberry",
    "windows phone",
  ];

  for (const DEVICE of MOBILE_DEVICES) {
    if (user_agent.includes(DEVICE)) {
      device = "mobile";
      break;
    }
  }

  return device;
}

export default function Gallery({ lag }: GalleryProps) {
  // Initialize number to store current width of window
  const [window_width, set_window_width] = useState<Number>(
    (typeof window != "undefined")
    ? window.innerWidth
    : 0
  );

  // Initialize boolean to store throttled status
  const throttled = useRef<boolean>(false);

  // Initialize string to store card mode
  const [card_mode, set_card_mode] = useState<String>("landscape");

  // Initialize array to store <Card> objects
  const [cards, set_cards] = useState<ReactElement[]>([]);

  useEffect(() => {
    // Updates state variable representing width of window
    function updateWidth() {
      set_window_width(window.innerWidth);
    }

    // Callback function for event listener on "resize"
    function handleResize() {
      // Throttle function execution to optimize performance
      const delay: number = 100;
      if (throttled && !throttled.current) {
        updateWidth();
        throttled.current = true;
        setTimeout(function() {
          throttled.current = false;
        }, delay);
      }
    }
    window.addEventListener("resize", handleResize);

    // Toggle between Portrait vs Landscape card layout
    const min_pixel_limit: number = 700;
    const device: string = detectDevice();
    if (
      window_width < min_pixel_limit 
      && card_mode == "landscape"
    ) {
      set_card_mode("portrait");
    } else if (
      window_width >= min_pixel_limit 
      && card_mode == "portrait"
    ) {
      set_card_mode("landscape");
    }

    // Build Cards array
    set_cards([]);
    for (const [i, article_group] of lag.content.entries()) {
      const last_group: boolean = i == lag.content.length-1;
      for (const [j, article] of article_group.articles.entries()) {
        const last_article: boolean = j == article_group.articles.length;
        const card: ReactElement = (card_mode == "portrait")
          ? <Card_Portrait
            key={uuid()}
            url={article.url || ""}
            caption={article.caption || ""}
            title={article.title || ""}
            description={article.description || ""}
            image={article.image || ""}
            category={article_group.category || ""}
            source={article.source || ""}
          />
          : <Card_Landscape
            key={uuid()}
            url={article.url || ""}
            caption={article.caption || ""}
            title={article.title || ""}
            description={article.description || ""}
            image={article.image || ""}
            category={article_group.category || ""}
            source={article.source || ""}
          />;
        if (!last_group && !last_article) {
          const line: ReactElement = <Line />;
          set_cards(cards => [...cards, card, line]);
        } else {
          set_cards(cards => [...cards, card]);
        }
      }
    }

    // Clean up "resize" event listener
    return () => window.removeEventListener("resize", handleResize);
  }, [lag, card_mode, window_width]);

  return (
    <Flex 
      id="card_gallery"
      flexDir="column" 
      gap="15px" 
      justify="start" 
      align="start" 
      margin="10px 0px 0px"
      width="100%"
    >
      {cards}
    </Flex>
  );
}

