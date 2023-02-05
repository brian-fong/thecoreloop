import { 
  Flex,
  Text,
} from '@chakra-ui/react';
import Gallery from "../DailyLAG/Gallery";
import CurveContainer from '../Core/CurveContainer';
import CurveSubContainer from '../Core/CurveSubContainer';

export default function ViewLAG({ lag }: any) {
  return (
    <CurveContainer heading={lag.heading}>
      <Flex
        id="lag-view"
        flexDir="column"
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
        <Gallery 
          lag={lag}
        />
      </Flex>
    </CurveContainer>
  );
}

