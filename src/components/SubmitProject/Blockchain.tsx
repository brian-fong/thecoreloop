// Components
import {
  Box,
  Image,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import BlockchainModal from "./BlockchainModal";

// Hooks
import { useEffect, useState } from "react";

// Types
import { ReactElement } from "react";

// Useful Constants
import { BLOCKCHAINS } from "../../data/blockchains";

export default function Blockchain({ blockchain, setBlockchain }: any) {
  // State variables
  const [content, setContent] = useState<ReactElement>();
  const [blockchain_selected, setBlockchainSelected] = useState<string>(
    blockchain
  );

  // Disclosure: NameModal
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    // Reset selected blockchain so BlockchainName input will be visible
    if (blockchain && !Object.keys(BLOCKCHAINS).includes(blockchain)) {
      setBlockchainSelected("Other");
    }
  }, []);

  useEffect(() => {
    if (!blockchain) {
      // Display placeholder for name
      setContent(
        <Text
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          gap="10px"
          padding="2px 4px"
          fontSize="14px"
          border="1px solid white"
          borderRadius="5px"
          cursor="pointer"
          whiteSpace="nowrap"
          userSelect="none"
          transition="all 200ms ease-in-out"
          _hover={{
            letterSpacing: "2px",
            background: "rgba(0, 0, 0, 0.4)",
          }}
        >
          ⛓️  &lt;chain&gt;
        </Text>
      );
    } else {
      // Display user-inputted blockchain
      setContent(
        <Tooltip 
          label={blockchain}
          placement="right-start"
          arrowSize={12}
          hasArrow
        >
          <Box 
            border="1px solid transparent"
            cursor="pointer"
            transition="all 200ms ease-in-out"
            _hover={{
              padding:"0 8px",
              border: "1px solid white",
              borderRadius: "5px",
              filter: "brightness(0.8)",
            }}
          >
            <Image
              src={Object.keys(BLOCKCHAINS).includes(blockchain) 
                ? BLOCKCHAINS[blockchain]
                : BLOCKCHAINS["Other"]
              }
              width="30px"
              height="30px"
              borderRadius="full"
            />
          </Box>
        </Tooltip>
      )
    }
  }, [blockchain]);

  return (
    <Box onClick={onOpen}>
      {content}
      <BlockchainModal 
        blockchain={blockchain}
        setBlockchain={setBlockchain}
        blockchain_selected={blockchain_selected}
        setBlockchainSelected={setBlockchainSelected}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Box>
  );
}


