import { 
  Flex,
  Text,
} from '@chakra-ui/react';
import Gallery from "./Gallery";
import CurveContainer from '../Core/CurveContainer';
import CurveSubContainer from '../Core/CurveSubContainer';

export default function Post({ lag }: any) {
  return (
    <CurveContainer heading={lag.heading || "Look at Gaming #XYZ"}>
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
          {lag.date || "<Date>"}
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
      
      <Gallery 
        lag={lag}
      />
    </CurveContainer>
  );
}

