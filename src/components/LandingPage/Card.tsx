import {
  Text,
  Flex,
  Image,
} from "@chakra-ui/react";

export default function Card({ 
  handle, 
  subhandle, 
  text,
  bkg_head,
}: any) {
  return (
    <Flex
      flexDirection="column"
      color="white"
      background={bkg_head}
      border="none"
      borderRadius="5px"
      boxShadow="10px 10px 5px rgba(0, 0, 0, 0.5)"
      overflow="hidden"
    >
      <Flex
        flexDirection="row"
        gap="15px"
        justifyContent="center"
        alignItems="center"
        padding="10px"
        background={bkg_head}
        border="none"
        borderRadius="5px 5px 0px 0px"
      >
        <Image src={`./${handle.toLowerCase()}-pfp.png`} width="50px" />
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
            <a href={`https://twitter.com/${handle}`} target="_blank">
              @{handle}
            </a>
          </Text>
          <Text
            color="white"
            fontSize="15px"
          >
            {subhandle}
          </Text>
        </Flex>
      </Flex>
      <Flex
        flexDirection="column"
        justifyContent="start"
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
          "{text}"
        </Text>
      </Flex>
    </Flex>
  );
}

