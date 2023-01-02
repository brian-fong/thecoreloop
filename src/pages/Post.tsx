import { 
  Flex,
  Text,
  Heading,
} from '@chakra-ui/react';

import Card from "./Card";
import { CardProps } from "./Card";

export type PostProps = {
  title: string; 
  date: string; 
  cards: CardProps[];
};

export default function LAG_Post({ 
  title="LAG # Not Found (⊙_☉)", 
  date="Date not found ( • ᴖ • ｡)", 
  cards=[] 
}: PostProps) {
  return (
    /* Outer Container */
    <Flex flexDir="column" justify="start" align="center" m="0px" p="15px 15px 10px 15px" width="100%" bg="standard_bkg"
      border="6px" borderStyle="double" borderColor="white"
      boxShadow="0px 0px 0px 3px #c0c0c0, 
                 20px 20px 2px rgba(0, 0, 0, 0.5)"
      boxSizing="border-box"
    >
      { /* Inner Container */ }
      <Flex flexDir="column" justify="start" align="start" m="10px" p="15px" width="100%" height="100%" minHeight="500px"
        border="2px solid" borderColor="border_line"
      >
        <Flex position="relative" top="-27px" flexDir="row" justify="center" align="center" width="100%">
          <Heading fontWeight="400" fontSize="20px" p="0px 15px" color="black" backgroundColor="standard_bkg">
            {title}
          </Heading>
        </Flex>
        { /* LAG Date Container */ }
        <Flex pos="relative" top="-25px" flexDir="row" justify="right" align="center" width="100%">
          <Text color="black" fontSize="16px">
            {date}
          </Text>
        </Flex>
        { /* Card Gallery Container */ }
        <Flex position="relative" top="-10px" flexDir="column" gap="30px" justify="start" align="start" width="100%">
          {
            cards.map(card => {
              return <Card 
                url={card.url}
                caption={card.caption}
                title={card.title}
                description={card.description}
                category={card.category}
                source={card.source}
                image={card.image}
              />
            })
          }
        </Flex>
      </Flex>
    </Flex>
  );
}

