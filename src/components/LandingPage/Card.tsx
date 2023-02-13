import { 
  Text,
  Flex,
  Image,
} from "@chakra-ui/react";

export default function Card({ pfp, handle, subhandle, text }: any) {
  return (
    <Flex
      flexDirection="column"
      padding="10px"
      maxWidth="360px"
      height="100%"
      background = "#A9D4FF"
      borderRadius="5px"
    >
      <Flex 
        flexDirection="row"
        gap="10px"
        justifyContent="center"
        alignItems="center"
      >
        <Image src={pfp} width="50px" />
        <Flex
          flexDirection="column"
          gap="3px"
          width="100%"
          height="100%"
        >
          <Text
            color="rgba(0, 0, 0, 0.50)"
            fontSize="12px"
            fontWeight="800"
          >
            @{handle}
          </Text>
          <Text
            color="rgba(0, 0, 0, 0.50)"
            fontSize="12px"
            fontWeight="800"
          >
            {subhandle}
          </Text>
        </Flex>
      </Flex>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Text
          margin="10px"
          fontSize="14px"
        >
          {text}
        </Text>
      </Flex>
    </Flex>
  );
}

