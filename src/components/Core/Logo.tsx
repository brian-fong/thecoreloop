import { 
  Flex,
  Link,
  Text,
  Image,
} from '@chakra-ui/react'
import CurveContainerAlt from './CurveContainerAlt';

export default function Logo() {
  return (
    <CurveContainerAlt>
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
    </CurveContainerAlt>
  );
}
