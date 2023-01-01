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
      <Flex flexDir="column" justify="start" align="center" m="0px" p="20px" width="100%" bg="logo_bkg"
        border="6px" borderStyle="double" borderColor="white"
        boxShadow="0px 0px 0px 3px #6711CF, 
                   20px 20px 2px rgba(0, 0, 0, 0.5)"
        boxSizing="border-box"
      >
        <Flex flexDir="row" justify="center" align="center" gap="30px" m="0px" p="20px 40px">
          <Image  src="/thecoreloop-favicon.png" height="75px" draggable="false" />
          <Heading color="white" fontWeight="400" fontSize="50px" fontFamily="Urbanist" letterSpacing="3px">
            thecoreloop
          </Heading>
        </Flex>
      </Flex>

      { /* Sub-Logo Container */ }
      <Flex flexDir="row" justify="start" align="center" width="100%" p="5px"
        bg="logo_bkg" border="6px" borderStyle="double" borderColor="white"
        boxShadow="0px 0px 0px 3px #6711CF, 
                   20px 20px 2px rgba(0, 0, 0, 0.5)"
        boxSizing="border-box"
      >
        <Image src="/mario-question-box.png" height="60px" draggable="false" />
        <Heading color="white" fontSize="16px">
          Hint: join the&nbsp;
          <Link color="tcl_yellow" textDecoration="underline" fontStyle="italic"
            href="https://t.me/thecoreloop"
            _hover={{ color: "tcl_yellow_hover" }}
          >
            Telegram channel
          </Link> 
          &nbsp;to receive the latest&nbsp;
          <Text display="inline" fontWeight="bold">
            Look-At-Gaming
          </Text> 
          &nbsp;posts!
        </Heading>
      </Flex>
    </>
  );
}
