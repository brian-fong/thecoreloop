import {
  Box,
  Button,
  Flex,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Text,
} from "@chakra-ui/react";
import { useRef } from "react";
import wait from "../../utils/wait";

export const CHAINS: any[] = [
  {
    name: "Open to blockchain partnerships",
    icon: "https://em-content.zobj.net/thumbs/120/google/350/handshake_1f91d.png",
  },
  {
    name: "Aptos",
    icon: "https://pbs.twimg.com/profile_images/1582438667871625216/YMPBcHq5_400x400.jpg",
  },
  {
    name: "Arbitrum",
    icon: "https://pbs.twimg.com/profile_images/1490751860461953029/046qIxwT_400x400.jpg",
  },
  {
    name: "Avalance", 
    icon: "https://pbs.twimg.com/profile_images/1605605053901021184/9LNylZAA_400x400.png",
  },
  {
    name: "BSC",
    icon: "https://pbs.twimg.com/profile_images/1565354861616832513/ovh5FyDN_400x400.png",
  },
  {
    name: "IMX",
    icon: "https://pbs.twimg.com/profile_images/1635864512266924033/hUrm7bVI_400x400.jpg",
  },
  {
    name: "Ethereum",
    icon: "https://pbs.twimg.com/profile_images/1627642622645878784/TP1GH9TM_400x400.jpg",
  },
  {
    name: "Near",
    icon: "https://pbs.twimg.com/profile_images/1631021064171196431/_ahCp9jR_400x400.jpg",
  },
  {
    name: "Oasys",
    icon: "https://pbs.twimg.com/profile_images/1490610001936719876/VU9Bo7o__400x400.jpg",
  },
  {
    name: "Polygon",
    icon: "https://pbs.twimg.com/profile_images/1624229555333373952/JXGKFcO__400x400.jpg",
  },
  {
    name: "Ronin",
    icon: "https://pbs.twimg.com/profile_images/1483078570855571458/Ei_vW6GN_400x400.jpg",
  },
  {
    name: "Sui",
    icon: "https://pbs.twimg.com/profile_images/1582380655027052544/dK8glmZ3_400x400.jpg",
  },
  {
    name: "Solana",
    icon: "https://pbs.twimg.com/profile_images/1472933274209107976/6u-LQfjG_400x400.jpg",
  },
  {
    name: "Other",
    icon: "https://em-content.zobj.net/thumbs/120/google/350/magnifying-glass-tilted-left_1f50d.png",
  },
];

export default function ChainPopover({ chain, setChain }: any) {
  const chain_node = useRef<any>();

  async function handleClick(chain: any) {
    // Set chain
    setChain(chain);

    if (chain.name == "Other") {
      // Remove focus from popover window
      blurAll();

      // Focus new input element for other chain
      const chain_field: HTMLElement = document.getElementById(
        "project-chain"
      )!;
      await wait(100);      // Delay to wait for input element to mount
      chain_field.focus();  // Focus input element
    }
    else {
      // Remove focus from popover window
      blurAll();
    }
  }

  function blurAll(){
    // This function works to distract focus away
    var tmp = document.createElement("input");  // Assign input element
    tmp.style.position = "fixed";               // Prevent abrupt scrolling
    document.body.appendChild(tmp);             // Create input element
    tmp.focus();                                // Focus input element
    document.body.removeChild(tmp);             // Remove input element
  }

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          ref={chain_node}
          display="flex"
          flexDirection="row"
          justifyContent="start"
          alignItems="center"
          padding="2px"
          width="100%"
          color="black"
          backgroundColor="white"
          border="1px solid rgba(147, 147, 147, 0.5)"
          borderRadius="5px"
          transition="filter 200ms ease-in-out"
          _hover={{
            filter: "brightness(0.8)",
          }}
          _active={{}}
        >
          {
            chain.name == "Select Chain"
              ? (
                <Text marginLeft="10px">{chain.name}</Text>
              ) : (
                <Flex 
                  flexDirection="row" 
                  alignItems="center" 
                  gap="10px"
                  padding="2px"
                >
                  <Image
                    src={chain.icon}
                    alt={chain.name}
                    objectFit="cover"
                    padding="3px"
                    width="30px"
                    height="30px"
                    borderRadius="50%"
                  />
                  <Text fontSize="16px">
                    {chain.name}
                  </Text>
                </Flex>
              )
          }
        </Button>
      </PopoverTrigger>
      <PopoverContent
        width={chain_node.current?.clientWidth}
      >
        <PopoverBody
          display="flex"
          flexDirection="column"
          gap="5px"
          height="100%"
          maxHeight="200px"
          background="black"
          backgroundColor="black"
          border="1px solid rgba(147, 147, 147, 0.5)"
          borderRadius="5px"
          overflowY="scroll"
          css={{
            '&::-webkit-scrollbar': {
              width: "18px",
            },
            '&::-webkit-scrollbar-track': {
              width: "18px",
            },
            "&::-webkit-scrollbar-thumb": {
              borderRadius: "20px",
              border: "6px solid rgba(0, 0, 0, 0)",
              backgroundClip: "padding-box",
            },
            "&::-webkit-scrollbar-track-piece:start": {
              marginTop: "2px",
            },
            "&::-webkit-scrollbar-track-piece:end": {
              marginBottom: "2px",
            },
          }}
        >
          {CHAINS.map(chain => (
            <Flex 
              key={chain}
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              gap="10px"
              padding="2px"
              color="grey.100"
              borderRadius="5px"
              transition="all 200ms ease-in-out"
              cursor="pointer"
              _hover={{
                color: "white",
                background: "rgba(255, 255, 255, 0.2)",
              }}
              onClick={() => handleClick(chain)}
            >
              <Image
                src={chain.icon}
                alt={chain.name}
                objectFit="cover"
                padding="3px"
                width="40px"
                height="40px"
                borderRadius="50%"
              />
              <Text width="100%" fontSize="16px">
                {chain.name}
              </Text>
            </Flex>
          ))}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

