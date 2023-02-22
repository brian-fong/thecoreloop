import {
  Text,
  Flex,
  Image,
  Link,
} from "@chakra-ui/react";

export default function ReferenceCard({ reference }: any) {
  return (
    <Flex
      flexDirection="column"
      color="white"
      background={reference.bkg_head}
      border="none"
      borderRadius="5px"
      boxShadow="10px 10px 5px rgba(0, 0, 0, 0.4)"
      transition="transform 400ms ease-in-out, opacity 300ms linear"
    >
      <Flex
        flexDirection="row"
        gap="15px"
        justifyContent="center"
        alignItems="center"
        padding="10px"
        background={reference.bkg_head}
        border="none"
        borderRadius="5px 5px 0px 0px"
      >
        <Link 
          href={`https://twitter.com/${reference.handle}`} 
          target="_blank"
          tabIndex={-1}
        >
          <Image 
            src={`./pfps/${reference.handle.toLowerCase()}-pfp.png`} 
            width="50px" 
            tabIndex={-1}
          />
        </Link>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="start"
          gap="3px"
          width="100%"
          height="100%"
        >
          <Text
            color="white"
            fontSize="15px"
            transition={`
              background-size 200ms, \
              background-position 0ms 200ms, \
              filter 200ms ease-in
              `}
            backgroundImage={`linear-gradient(#fff 0 0)`}
            backgroundPosition="0 100%"
            backgroundRepeat="no-repeat"
            backgroundSize="0% 1px"
            _hover = {{
              cursor: "pointer",
              filter: "brightness(0.80)",
              backgroundPosition: "100% 100%",
              backgroundSize: "100% 1px",
            }}
          >
            <a 
              href={`https://twitter.com/${reference.handle}`} 
              target="_blank"
              tabIndex={0}
            >
              @{reference.handle}
            </a>
          </Text>
          <Text
            color="white"
            opacity="0.8"
            fontSize="15px"
            fontStyle="italic"
          >
            {reference.subhandle}
          </Text>
        </Flex>
      </Flex>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
        background="#4A505A"
        borderRadius="0px 0px 5px 5px"
      >
        <Text
          margin="10px"
          color="white"
          fontSize="14px"
          textIndent="30px"
        >
          "{reference.text}"
        </Text>
      </Flex>
    </Flex>
  );
}

