import {
  Image,
  Tooltip,
} from "@chakra-ui/react";

export default function FundraisingIcon({ fundraising }: any) {
  const fundraising_icon: string = "https://cdn-icons-png.flaticon.com/512/3588/3588711.png";

  return (
    <Tooltip
      label="This project is currently fundraising" 
      whiteSpace="nowrap"
      placement="top-start"
      visibility={fundraising == "yes" ? "visible" : "hidden"}
      offset={[10, 12]}
      arrowSize={15}
      hasArrow
    >
      <Image
        src={fundraising_icon}
        width="30px"
        height="30px"
        opacity={fundraising == "yes" ? "100%" : "0%"}
        transition="all 300ms ease-in-out"
      />
    </Tooltip>
  )
}

