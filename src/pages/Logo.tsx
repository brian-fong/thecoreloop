import { 
  Flex,
  Link,
  Text,
  Image,
  Heading,
} from '@chakra-ui/react'

export default function Logo() {
  return (
    <>
      { /* Logo Container */ }
      <Flex flexDir="column" justify="start" align="center" width="100%" bg="logo_bkg"
        border="6px" borderStyle="double" borderColor="white"
        boxShadow="0px 0px 0px 3px #6711CF, 
                   20px 20px 2px rgba(0, 0, 0, 0.5)"
        boxSizing="border-box"
      >
        <Flex flexDir="row" justify="center" align="center" gap="30px" p="25px 0px 10px" width="100%">
          <Image  src="/thecoreloop-favicon.png" height="60px" draggable="false" userSelect="none" />
          <Heading color="white" fontWeight="400" fontSize="40px" fontFamily="Urbanist" letterSpacing="3px" 
            draggable="false" userSelect="none"
          >
            thecoreloop
          </Heading>
        </Flex>
        <Flex flexDir="row" justify="end" align="center" width="100%" p="0px 10px 10px 0px">
          <Text color="white" fontSize="11px" fontStyle="italic" draggable="false" userSelect="none">
            UI inspired by&nbsp;
            <Link color="tcl_yellow" textDecoration="underline" 
              _hover={{ color: "tcl_yellow_hover" }}
              href="https://classic.curve.fi/" target="_blank"
            >
              Curve Finance
            </Link>
          </Text>
        </Flex>
      </Flex>

      { /* Sub-Logo Container */ }
      <Flex flexDir="row" justify="start" align="center" width="100%" p="5px"
        bg="logo_bkg" border="6px" borderStyle="double" borderColor="white"
        boxShadow="0px 0px 0px 3px #6711CF, 
                   20px 20px 2px rgba(0, 0, 0, 0.5)"
        boxSizing="border-box"
      >
        <Image src="/mario-question-box.png" height="60px" draggable="false" userSelect="none" />
        <Heading color="white" fontSize="16px">
          Hint: join the&nbsp;
          <Link color="tcl_yellow" textDecoration="underline" fontStyle="italic"
            href="https://t.me/thecoreloop" target="_blank"
            _hover={{ color: "tcl_yellow_hover" }}
          >
            Telegram channel
          </Link> 
          &nbsp;to receive the latest&nbsp;
          <Text display="inline" fontWeight="bold">
            Look At Gaming
          </Text> 
          &nbsp;posts!
        </Heading>
      </Flex>
    </>
  );
}
