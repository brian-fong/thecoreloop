import { 
  Flex,
  useDimensions,
} from '@chakra-ui/react';
import uuid from 'react-uuid';
import { useState, useEffect, useRef, ReactElement } from "react";

// Components
import Line from "./Line";
import Card from './Card';

export default function Gallery({ lag }: any) {
  const gallery_ref = useRef<any>();
  const dimensions = useDimensions(gallery_ref, true);
  const [orientation, setOrientation] = useState<string>("landscape");

  // Initialize array to store <Card> objects
  const [cards, setCards] = useState<ReactElement[]>([]);

  useEffect(() => {
    setCards([]);
    for (const [i, article_group] of lag.content.entries()) {
      const last_group: boolean = i == lag.content.length-1;
      for (const [j, article] of article_group.articles.entries()) {
        article.category = article_group.category;
        const last_article: boolean = j == article_group.articles.length-1;
        const card: ReactElement = <Card 
          key={uuid()}
          orientation={orientation}
          article={article}
        />;
        if (last_group && last_article) {
          setCards((cards: ReactElement[]) => [...cards, card]);
        } else {
          const line = <Line key={uuid()} />;
          setCards((cards: ReactElement[]) => [...cards, card, line]);
        }
      }
    }
  }, [lag, orientation]);

  useEffect(() => {
    const limit: number = 500;
    if (dimensions?.contentBox?.width! > limit) {
      setOrientation("landscape");
    } else {
      setOrientation("portrait");
    }
  }, [dimensions]);

  return (
    <Flex 
      ref={gallery_ref}
      id="card_gallery"
      flexDir="column" 
      gap="15px" 
      justify="start" 
      align="start" 
      width="100%"
    >
      {cards}
    </Flex>
  );
}

