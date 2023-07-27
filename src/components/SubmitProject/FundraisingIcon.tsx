// Components
import {
  Box,
  Image,
  Text,
  Tooltip,
} from "@chakra-ui/react";

export default function FundraisingIcon({ fundraising }: any) {
  const fundraising_icon: string = "https://cdn-icons-png.flaticon.com/512/3588/3588711.png";

  return (
    <Tooltip
      label="Currently fundraising"
      placement="top-start"
      arrowSize={12}
      hasArrow
    >
      <Box
        visibility={fundraising == "yes" ? "visible" : "hidden"}
        position="absolute"
        top="-10px"
        right="-5px"
        opacity={fundraising == "yes" ? "100%" : "0%"}
        transition="all 200ms ease-in-out"
      >
        <Image
          src={fundraising_icon}
          width="36px"
          height="36px"
        />
      </Box>
    </Tooltip>
  );
}

