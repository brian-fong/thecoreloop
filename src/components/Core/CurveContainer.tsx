import { Flex, Heading } from "@chakra-ui/react";

export default function CurveContainer({ children, heading }: any) {
  return (
    <Flex
      id="outer-container"
      flexDirection="column" 
      justifyContent="start" 
      alignItems="center" 
      margin="0px" 
      padding="15px" 
      width="100%" 
      height="100%"
      color="black"
      background="curve"
      border="6px double white" 
      boxShadow="0px 0px 0px 3px #C0C0C0, 
                 20px 20px 2px black"
    >
      <Flex 
        id="inner-container"
        position="relative"
        flexDirection="column"
        justifyContent="start"
        alignItems="start"
        margin="10px"
        padding="15px"
        width="100%"
        height="100%"
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
            fontWeight="400" 
            fontSize="14px" 
            padding="0px 8px" 
            color="black" 
            background="curve"
          >
            {heading}
          </Heading>
        </Flex>

        { /* React component children */ }
        {children}
      </Flex>
    </Flex>
  );
}

