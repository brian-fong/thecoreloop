// ChakraUI
import { 
  Flex,
  Text,
  Link,
  Image,
} from '@chakra-ui/react'

export function Card_Tweet(
  { 
    url="URL not found",
    caption="A look at . . . ", 
    title="Title not found (×﹏×)", 
    description="Description not found", 
    category="Category not found", 
    source="???",
    image=" Image not found (⊙_⊙) " 
  }: any) {

  return (
    <Flex 
      flexDir="column" 
      justify="center" 
      align="start" 
      width="100%"
    >
      { /* Container 1: caption */ }
      <Text 
        fontSize="14px" 
        fontStyle="italic" 
        color="black"  
        m="0px 0px 5px 0px" 
        width="100%"
      >
        {caption}
      </Text>

      { /* Container 2: title, description, image, source, category */ }
      <Flex 
        flexDir="row" 
        gap="10px" 
        justify="start" 
        align="start" 
        width="100%"
      >
        { /* Container 2.1: image */ }
        <Flex 
          flexDir="column" 
          shrink="2" 
          justify="center" 
          align="center" 
          maxWidth="250px" 
          height="100%"
          bg="black" 
          border="1px solid black" 
          boxSizing="border-box" 
        >
          <Link 
            href={url} 
            target="_blank" 
            draggable="false"
          >
            <Image 
              src={image} 
              alt={image} 
              objectFit="cover" 
              fontSize="14px" 
              textAlign="center"
              draggable="false" 
              loading="lazy"
              _hover={{ cursor: "pointer" }}
            />
          </Link>
        </Flex>

        { /* Container 2.2: title, description, category, source */ }
        <Flex 
          flexDir="column" 
          shrink="1" 
          justify="space-between" 
          align="start" 
          height="100%"
           width="100%"
        >
          { /* Container 2.2.1: title, description */ }
          <Flex 
            flexDir="column" 
            justify="start" 
            align="start" 
            width="100%"
          >
            { /* Title */ }
            <Link 
              fontSize="14px" 
              fontWeight="800" 
              color="blue"  
              width="100%"
              href={url} 
              target="_blank" 
              transition="background-color 200ms ease" 
              _hover={{ 
                color: "white", 
                bg: "blue",
                textDecoration: "underline", 
                cursor: "pointer", 
              }}
              draggable="false"
            >
              {title}
            </Link>

            { /* Description */ }
            <Text 
              fontSize="14px" 
              textAlign="left" 
              lineHeight="1.2" 
              color="black" 
              p="5px 0px 10px"
            >
              {description}
            </Text>
          </Flex>
          { /* Container 2.2.2: category/source */ }
          <Flex 
            flexDir="row" 
            justify="space-between" 
            align="center" 
            wrap="wrap" 
            width="100%"
          >
            <Flex 
              flexDir="row" 
              justify="start" 
              align="center"
            >
              { /* Category */ }
              <Text 
                fontSize="13px" 
                color="white" 
                bg="category_bkg" 
                m="0px 40px 0px 0px" 
                p="0px 1px"
                transition="background-color 200ms ease" 
                _hover={{ 
                  bg: "category_bkg_hover",
                  cursor: "pointer", 
                  textDecoration: "underline", 
                }}
              >
                {category}
              </Text>
            </Flex>
            <Flex 
              flexDir="row" 
              justify="end" 
              align="center"
            >
              { /* Source */ }
              <Text fontSize="13px" color="black" >
                Source: {source}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export function Embedded_Tweet() {
  const embedded_tweet: any = <blockquote className="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr">A <a href="https://twitter.com/cloudxgmf?ref_src=twsrc%5Etfw">@cloudxgmf</a> and <a href="https://twitter.com/0xkapital_k?ref_src=twsrc%5Etfw">@0xkapital_k</a> collab: <br /><br />&quot;Fund of Fun&quot;  aka FoF -- an exploration of the gaming investment landscape, focusing on Web2 &amp; Web3 VCs. <br /><br />Episode 4: Portfolio Breakdown -- a16z GAMES FUND ONE <a href="https://t.co/eDukunAriP">pic.twitter.com/eDukunAriP</a></p>&mdash; kiet 🦇🔊 (@0xkapital_k) <a href="https://twitter.com/0xkapital_k/status/1550655795083128833?ref_src=twsrc%5Etfw">July 23, 2022</a></blockquote>;

  return (
    <>
      { embedded_tweet }
    </>
  );
}

