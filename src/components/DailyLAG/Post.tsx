import { 
  Flex,
  Text,
  Heading,
} from '@chakra-ui/react';
import uuid from 'react-uuid';
import Gallery from "./Gallery";
import { Post as PostProps } from "../../types";
import { useState, useEffect, ReactElement } from "react";
import CurveContainer from '../Core/CurveContainer';

export default function Post({ lag }: PostProps) {
  // Initialize Special Insights text array 
  const [special_insights, set_special_insights] = useState<ReactElement[]>([]);

  useEffect(() => {
    // Toggle Special Insights section 
    if (lag.special_insights) {
      lag.special_insights = lag.special_insights;

      const container: HTMLElement = document.getElementById(
        "special_insights_container"
      )!;
      container.style.display = "block";

      for (const line of lag.special_insights.split("\n")) {
        const text: ReactElement = <Text
          key={uuid()}
          fontSize="14px"
          textAlign="justify"
          color="black"
        >
          {line}
        </Text>;
        set_special_insights(special_insights => [...special_insights, text]);
      }
    }

  }, [lag]);

  return (
    <CurveContainer heading={lag.heading}>
      { /* Date Container */ }
      <Flex 
        flexDir="row" 
        justify="right" 
        align="center" 
        width="100%"
      >
        <Text 
          fontSize="14px"
          color="black" 
        >
          {lag.date}
        </Text>
      </Flex>

      { /* Special Insights Container */ }
      <Flex 
        display="none"
        id="special_insights_container"
        position="relative"
        top="-20px"
        flexDir="column" 
        justify="start" 
        align="start"
        m="0px 0px 20px"
        p="1px 2px"
        width="100%"
        // bg="tcl_pink"
        transition="background-color 200ms ease" 
        _hover={{ bg: "tcl_pink" }}
      >
        <Heading 
          fontWeight="800" 
          fontSize="15px"
          color="black"
        >
          Special Insights
        </Heading>
        {special_insights}
      </Flex>
      
      <Gallery 
        lag={lag}
      />
    </CurveContainer>
  );
}

