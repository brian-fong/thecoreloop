import { 
  Flex,
} from "@chakra-ui/react";

export default function CurveContainerAlt({ 
  children, 
}: any) {
  return (
    <Flex 
      id="outer_container"
      flexDir="column" 
      justify="start" 
      align="center" 
      width="100%" 
      minWidth="300px"
      bg="tcl_purple"
      border="6px double white" 
      boxShadow="0px 0px 0px 3px #6711CF, 
                 20px 20px 2px rgba(0, 0, 0, 0.5)"
      boxSizing="border-box"
    >
      {children}
    </Flex>
  );
}


