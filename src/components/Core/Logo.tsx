// Components
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
      {/* Container: Image */}
      <Flex 
        flexDir="row"
        justifyContent="center"
        alignItems="center"
        gap="30px"
        padding="20px 20px 0"
        width="100%"
      >
        <Image 
          src="./thecoreloop-logo-alt.png"
          objectFit="cover"
          height="100px"
        />
      </Flex>

      {/* Container: Inspired by Curve Finance */}
      <Flex
        flexDirection="row"
        justifyContent="end"
        alignItems="center"
        paddingBottom="10px"
        paddingRight="10px"
        width="100%"
      >
        <Text 
          fontSize="12px"
          fontStyle="italic"
          color="white"
          draggable="false"
          userSelect="none"
        >
          UI inspired by&nbsp;
          <Link 
            href="https://classic.curve.fi/" 
            color="blue.300" 
            textDecoration="underline" 
            target="_blank"
            transition="filter 200ms ease-in-out"
            _hover={{ filter: "brightness(0.8)" }}
          >
            Curve Finance
          </Link>
        </Text>
      </Flex>
    </CurveContainerAlt>
  );
}
