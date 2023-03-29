import {
  Flex,
  Heading,
} from "@chakra-ui/react";

export default function CurveSubContainer({ children, heading }: any) {
  return (
    <Flex
      position="relative"
      flexDirection="column"
      padding="10px"
      width="100%"
      border="1px solid gray"
    >
        { /* Heading Container */ }
        <Flex 
          position="absolute" 
          top="-10px"
          flexDirection="row" 
          justifyContent="center" 
          alignItems="center" 
          width="100%"
        >
          <Heading 
            position="relative"
            fontFamily="JetBrains Mono"
            fontWeight="400" 
            fontSize="14px" 
            padding="0px 8px" 
            color="black" 
            background="curve"
          >
            {heading}
          </Heading>
        </Flex>

        {/* React Component Children */}
        {children}
    </Flex>
  );
}

