import { 
  Flex,
  Link,
  Text,
  Image,
  Heading,
} from '@chakra-ui/react'
import CurveContainerAlt from '../Core/CurveContainerAlt'

export default function Hint() {
  return (
    <CurveContainerAlt>
      <Flex
        flexDir="row"
        justify="center"
        align="center"
        p="10px"
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
    </CurveContainerAlt>
  )
}

