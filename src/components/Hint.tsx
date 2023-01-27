import { 
  Flex,
  Link,
  Text,
  Image,
  Heading,
} from '@chakra-ui/react'

export default function Hint() {
  return (
    <Flex 
      flexDir="row" 
      justify="start" 
      align="center" 
      p="5px 5px 5px 10px"
      width="100%" 
      minWidth="300px"
      bg="logo_bkg" 
      border="6px double white"
      boxShadow="0px 0px 0px 3px #6711CF, 
                 20px 20px 2px rgba(0, 0, 0, 0.5)"
      boxSizing="border-box"
    >
      <Image 
        src="/mario-question-box.png" 
        alt={"(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧	"}
        m="-5px" 
        height="50px" 
        draggable="false" 
        userSelect="none" 
      />
      <Heading 
        fontFamily="JetBrains Mono"
        fontWeight="400"
        fontSize="16px"
        color="white" 
        letterSpacing="0px"
        pr="5px"
      >
        Hint: join&nbsp;
        <Link 
          fontStyle="italic"
          color="tcl_yellow" 
          textDecoration="underline" 
          href="https://t.me/thecoreloop" 
          target="_blank"
          _hover={{ color: "tcl_yellow_hover" }}
        >
          Telegram channel 
        </Link> 
        &nbsp;to get a&nbsp;
        <Text 
          display="inline" 
          fontWeight="bold"
        >
          Look At Gaming
        </Text> 
        &nbsp;every weekday
      </Heading>
    </Flex>
  )
}
