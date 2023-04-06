// Components
import {
  Box,
  Image,
  Text,
  Tooltip,
} from "@chakra-ui/react";

export default function FundraisingIcon({ fundraising }: any) {
  const fundraising_icon: string = "https://cdn-icons-png.flaticon.com/512/5292/5292572.png";

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
        top="-5px"
        left="-5px"
        opacity={fundraising == "yes" ? "100%" : "0%"}
        transition="all 200ms ease-in-out"
      >
        <Image
          src={fundraising_icon}
          padding="2px"
          width="32px"
          height="32px"
          background="gray.500"
          borderRadius="full"
          transition="all 200ms ease-in-out"
        />
      </Box>
    </Tooltip>
  );
}

