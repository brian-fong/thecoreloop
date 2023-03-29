// Components
import { Flex } from "@chakra-ui/react";

export default function CurveContainerAlt({ children }: any) {
  return (
    <Flex 
      className="outer_container"
      flexDir="column" 
      justify="start" 
      align="center" 
      width="100%" 
      minWidth="300px"
      background="#6711CF"
      border="6px double white" 
      boxShadow="0px 0px 0px 3px #6711CF,
                 20px 20px 2px black"
      boxSizing="border-box"
    >
      { /* React component children */ }
      {children}
    </Flex>
  );
}


