import {
  Flex,
  Text,
  Heading,
} from "@chakra-ui/react";

export default function CurveSubContainer({ children, heading }: any) {
  return (
    <Flex
      position="relative"
      flexDir="column"
      padding="10px"
      width="100%"
      border="1px solid gray"
    >
        { /* Heading Container */ }
        <Flex 
          position="absolute" 
          top="-10px"
          flexDir="row" 
          justify="center" 
          align="center" 
          width="100%"
        >
          <Heading 
            position="relative"
            fontFamily="JetBrains Mono"
            fontWeight="400" 
            fontSize="14px" 
            p="0px 8px" 
            color="black" 
            bg="standard_bkg"
          >
            {heading}
          </Heading>
        </Flex>

        {/* React Component Children */}
        {children}
    </Flex>
  );
}

