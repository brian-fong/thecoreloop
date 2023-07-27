// Components
import { Box, Image, Tooltip } from "@chakra-ui/react";

// Blockchain icons
import { BLOCKCHAINS } from "../../utils/data/project-form-options";

export default function Blockchain({ blockchain }: any) {
  return (
    <Tooltip 
      label={blockchain == "TBA"
        ? "Blockchain to be announced"
        : blockchain
      }
      placement="right-start"
      arrowSize={12}
      hasArrow
    >
      <Box border="1px solid transparent">
        <Image
          src={Object.keys(BLOCKCHAINS).includes(blockchain) 
            ? BLOCKCHAINS[blockchain]
            : BLOCKCHAINS["Other"]
          }
          width="30px"
          height="30px"
          borderRadius={blockchain == "TBA" ? "none" : "full"}
          draggable={false}
        />
      </Box>
    </Tooltip>
  );
}

