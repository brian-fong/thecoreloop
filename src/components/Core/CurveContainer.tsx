import { Flex, Heading } from "@chakra-ui/react";

export default function CurveContainer({ children, heading }: any) {
  return (
    <Flex 
      className="outer_container"
      flexDir="column" 
      justify="start" 
      align="center" 
      m="0px" 
      p="15px 15px 10px 15px" 
      width="100%" 
      minWidth="300px"
      minHeight="150px"
      bg="standard_bkg"
      border="6px double white" 
      boxShadow="0px 0px 0px 3px #c0c0c0, 
                 20px 20px 2px rgba(0, 0, 0, 0.5)"
      boxSizing="border-box"
    >
      <Flex 
        className="inner_container"
        position="relative"
        flexDir="column" 
        justify="start" 
        align="start" 
        m="10px" 
        p="15px" 
        width="100%" 
        height="100%"
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

        { /* React component children */ }
        {children}
      </Flex>
    </Flex>
  );
}

