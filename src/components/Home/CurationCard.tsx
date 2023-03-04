import {
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";

export default function CurationCard({
  description,
  image,
}: any) {
  return (
    <Flex
      flexDirection="row"
      justifyContent="start"
      alignItems="center"
      gap="1rem"
    >
      <Text>
        {description}
      </Text>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
        maxWidth="120px"
        height="100%"
      >
        <Image
          src={image}
          alt="Image"
        />
      </Flex>
    </Flex>
  )
}

