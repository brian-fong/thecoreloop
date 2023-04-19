// Components
import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@chakra-ui/react";
import Link from "next/link";

export default function ContributeButton() {

  // Popover dimensions (in pixels)
  const popover_width: number = 150;

  return (
    <Popover offset={[0, 0]}>
      <PopoverTrigger>
        <Button variant="header_base">
          CONTRIBUTE
        </Button>
      </PopoverTrigger>
      <PopoverContent 
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="start"
        gap="10px"
        width={popover_width}
        color="white"
        background="#1A1B23"
        border="none"
        borderRadius="5px"
        _focusVisible={{
          outline: "none",
          border: "none"
        }}
        zIndex={10}
      >
        <Link href="./submit_project" style={{ width: "100%" }}>
          <Button
            variant="header_popover"
            borderRadius="5px 5px 0 0"
          >
            🤖 PROJECT
          </Button>
        </Link>
        <Button
          variant="header_popover"
          borderRadius="0"
          isDisabled={true}
        >
          📅 EVENT
        </Button>
        <Button
          variant="header_popover"
          borderRadius="0 0 5px 5px"
          isDisabled={true}
        >
          🗨️ DISCUSSION
        </Button>
      </PopoverContent>
    </Popover>
  );
}

