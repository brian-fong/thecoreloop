import { 
  Flex,
} from '@chakra-ui/react';
import uuid from 'react-uuid';
import { Gallery as GalleryProps } from '../types';
import { useState, useEffect, useRef, ReactElement } from "react";
import { Card_Landscape, Card_Portrait } from "../components/Card";

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
  const [card_mode, set_card_mode] = useState<String>("Landscape");

  // Initialize array to store <Card> objects
  const [cards, set_cards] = useState<ReactElement[]>([]);

  useEffect(() => {
    // Updates state variable representing width of window
    function updateWidth() {
      console.log("Window Width: ", window.innerWidth);
      set_window_width(window.innerWidth);
    }

    // Callback function for event listener on "resize"
    function handleResize() {
      // Throttle function execution to optimize performance
      if (throttled && !throttled.current) {
        updateWidth();
        throttled.current = true;
        setTimeout(function() {
          throttled.current = false;
        }, 300);
      }
    }
    window.addEventListener("resize", handleResize);

    // Toggle between Portrait vs Landscape card layout
    const min_pixel_limit: number = 600;
    const orientation: string = screen.orientation.type;
    console.log("Screen Orientation: ", orientation);
    if (window_width < min_pixel_limit && card_mode == "Landscape") {
      set_card_mode("Portrait");
      console.log("Switching card mode to Portrait");
    } else if (window_width >= min_pixel_limit && card_mode == "Portrait"){
      set_card_mode("Landscape");
      console.log("Switching card mode to Landscape");
    } else if (
      orientation.includes("portrait") 
      && window_width < min_pixel_limit
    ) {
      set_card_mode("Portrait");
      console.log("Portrait display detected");
    }

    // Build Cards array
    set_cards([]);
    for (const article_group of lag.content) {
      for (const article of article_group.articles) {
        const card: ReactElement = (card_mode == "Portrait")
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
        set_cards(cards => [...cards, card])
      }
    }

    // 
    return () => window.removeEventListener("resize", handleResize);
  }, [lag, card_mode, window_width]);

  return (
    <Flex 
      id="card_gallery"
      flexDir="column" 
      gap="30px" 
      justify="start" 
      align="start" 
      margin="10px 0px 0px"
      width="100%"
    >
      {cards}
    </Flex>
  );
}

