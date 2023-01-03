// Node Modules
import uuid from 'react-uuid';

// ChakraUI
import { 
  Flex,
  Text,
  Heading,
} from '@chakra-ui/react';

import { useState, useEffect } from "react";

import Card from "./Card";
import { CardProps } from "./Card";

export type PostProps = {
  special_insights: string;
  title: string; 
  date: string; 
  cards: CardProps[];
};

export default function Post({ 
  special_insights="",
  title="LAG # Not Found (⊙_☉)", 
  date="Date not found ( • ᴖ • ｡)", 
  cards=[],
}: PostProps) {
  const [SI_content, setSI_content] = useState<React.ReactElement[]>([]);

  useEffect(() => {
    if (special_insights.length > 0 && SI_content.length == 0) {
      const heading: React.ReactElement = (
        <Heading 
          key="heading"
          fontWeight="800" 
          fontSize="15px"
          color="black"
        >
          Special Insights
        </Heading>
      );
      const text: React.ReactElement =  (
        <Text
          key="text"
          fontSize="14px"
          textAlign="justify"
          color="black"
        >
          {special_insights}
        </Text>
      );
      setSI_content(SI_content => [...SI_content, heading, text]);
    }
  }, []);

  return (
    /* Outer Container */
    <Flex 
      flexDir="column" 
      justify="start" 
      align="center" 
      m="0px" 
      p="15px 15px 10px 15px" 
      width="100%" 
      bg="standard_bkg"
      border="6px double white" 
      boxShadow="0px 0px 0px 3px #c0c0c0, 
                 20px 20px 2px rgba(0, 0, 0, 0.5)"
      boxSizing="border-box"
    >
      { /* Inner Container */ }
      <Flex 
        flexDir="column" 
        justify="start" 
        align="start" 
        m="10px" 
        p="15px" 
        width="100%" 
        height="100%"
        border="1px solid gray" 
      >
        { /* Title Container */ }
        <Flex 
          position="relative" 
          top="-25px"
          flexDir="row" 
          justify="center" 
          align="center" 
          width="100%"
        >
          <Heading 
            fontFamily="JetBrains Mono"
            fontWeight="400" 
            fontSize="16px" 
            p="0px 15px" 
            color="black" 
            bg="standard_bkg"
          >
            {title}
          </Heading>
        </Flex>

        { /* Date Container */ }
        <Flex 
          position="relative" 
          top="-25px"
          flexDir="row" 
          justify="right" 
          align="center" 
          width="100%"
        >
          <Text color="black" fontSize="14px">
            {date}
          </Text>
        </Flex>

        { /* Special Insights Container */ }
        <Flex 
          position="relative"
          top="-10px"
          flexDir="column" 
          justify="start" 
          align="start"
          m="0px 0px 20px"
          p="1px 2px"
          _hover={{ bg: "tcl_pink" }}
        >
          {SI_content}
        </Flex>

        { /* Card Gallery Container */ }
        <Flex position="relative" top="-10px" flexDir="column" gap="30px" justify="start" align="start" width="100%">
          {
            cards.map(card => 
              <Card 
                key={uuid()}
                url={card.url} 
                caption={card.caption} 
                title={card.title} 
                description={card.description} 
                image={card.image} 
                source={card.source} 
                category={card.category} 
              />)
          }
        </Flex>
      </Flex>
    </Flex>
  );
}

