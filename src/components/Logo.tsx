import { 
  Flex,
  Link,
  Text,
  Image,
} from '@chakra-ui/react'

export default function Logo() {
  return (
    <>
      { /* Logo Container */ }
      <Flex 
        flexDir="column" 
        justify="start" 
        align="center" 
        width="100%" 
        minWidth="300px"
        bg="logo_bkg"
        border="6px double white"
        boxShadow="0px 0px 0px 3px #6711CF, 
                   20px 20px 2px rgba(0, 0, 0, 0.5)"
        boxSizing="border-box"
      >
        <Flex 
          flexDir="row" 
          gap="30px" 
          justify="center" 
          align="center" 
          p="20px 20px 0px" 
          width="100%"
        >
          <Image 
            src="./thecoreloop-logo.png"
            objectFit="contain"
            height="100px"
          />
        </Flex>
        <Flex 
          flexDir="row" 
          justify="end" 
          align="center" 
          p="0px 10px 10px 0px" 
          width="100%"
        >
          <Text 
            fontSize="11px" 
            fontStyle="italic" 
            color="white" 
            draggable="false" 
            userSelect="none"
          >
            UI inspired by&nbsp;
            <Link 
              color="tcl_yellow" 
              textDecoration="underline" 
              _hover={{ color: "tcl_yellow_hover" }}
              href="https://classic.curve.fi/" 
              target="_blank"
            >
              Curve Finance
            </Link>
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
