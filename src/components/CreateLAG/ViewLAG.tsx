import { 
  Flex,
  Text,
} from '@chakra-ui/react';
import wait from '../../utils/wait';
import CurveContainer from '../Core/CurveContainer';
import CurveSubContainer from '../Core/CurveSubContainer';
import { useEffect } from "react";

export default function ViewLAG({ lag, cards }: any) {
  useEffect(() => {
    async function init() {
      await wait(100);
      const card_gallery: HTMLElement = document.getElementById(
        "card-gallery"
      )!;
      const last_card: HTMLElement = (card_gallery.lastChild as HTMLElement)!;
      console.log("Last Card: ", last_card);
      if (last_card) last_card.scrollIntoView({ behavior: "smooth" })
    }

    init();
  }, [cards])

  return (
    <CurveContainer heading={lag.heading}>
        <Flex
          id="lag-view"
          flexDir="column"
          gap="30px"
          width="100%"
        >
        { /* Date */ }
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

        { /* Subheading */ }
        {
          lag.subheading 
          ? (
            <Flex
              flexDir="row"
              width="100%"
              fontSize="14px"
            >
              <Text
                fontSize="14px"
                color="black"
              >
                {lag.subheading}
              </Text>
            </Flex>
          ) : (
            ""
          )
        }

        { /* Special Insights */ }
        { lag.special_insights 
          ? (
            <CurveSubContainer heading={"‼️ SPECIAL INSIGHTS 👀"}>
              <Text
                fontSize="14px"
                color="black"
              >
                {lag.special_insights}
              </Text>
            </CurveSubContainer>
          ) : (
            ""
          )
        }

        {/* Card Gallery */}
        <Flex 
          id="card-gallery"
          flexDir="column" 
          gap="15px" 
          justify="start" 
          align="start" 
          margin="10px 0px 0px"
          width="100%"
        >
          {cards}
        </Flex>
      </Flex>
    </CurveContainer>
  );
}

