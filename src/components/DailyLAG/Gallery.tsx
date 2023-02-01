import { 
  Flex,
} from '@chakra-ui/react';
import uuid from 'react-uuid';
import { useState, useEffect, useRef, ReactElement } from "react";

// Components
import Line from "./Line";
import Card_Portrait from "./Card_Portrait";
import Card_Landscape from "./Card_Landscape";

export default function Gallery({ lag }: any) {
  // Initialize number to store current width of window
  const [window_width, set_window_width] = useState<Number>(
    (typeof window != "undefined")
    ? window.innerWidth
    : 0
  );

  // Initialize boolean to store throttled status
  const throttled = useRef<boolean>(false);

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

    // Set minimum pixel limit for screen width to switch between 
    //   portrait and landscape cards
    const min_pixel_limit: number = 700;

    // Build Cards array
    set_cards([]);
    for (const [i, article_group] of lag.content.entries()) {
      const last_group: boolean = i == lag.content.length-1;
      for (const [j, article] of article_group.articles.entries()) {
        const last_article: boolean = j == article_group.articles.length-1;
        article.category = article_group.category;
        const card: ReactElement = window_width <= min_pixel_limit
          ? <Card_Portrait article={article} />
          : <Card_Landscape article={article} />;

        // Append line between each article
        if (last_article && last_group) {
          set_cards(cards => [...cards, card]);
        } else {
          const line: ReactElement = <Line key={uuid()} />;
          set_cards(cards => [...cards, card, line]);
        }
      }
    }

    // Clean up "resize" event listener
    return () => window.removeEventListener("resize", handleResize);
  }, [lag, window_width]);

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

