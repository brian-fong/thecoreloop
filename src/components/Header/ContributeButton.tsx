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
        <Button
          display="flex"
          flexDirection="row"
          justifyContent="start"
          alignItems="center"
          margin="0"
          padding="5px 10px"
          height="min-content"
          color="gray.400"
          fontSize="18px"
          background="transparent"
          borderRadius="5px"
          transition="all 200ms ease-in-out"
          _focusVisible={{
            color: "gray.300",
            background: "rgba(0, 0, 0, 0.3)",
          }}
          _hover={{
            color: "gray.200",
          }}
          _active={{}}
        >
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
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            border="none"
            borderRadius="5px 5px 0 0"
          >
            🤖 PROJECT
          </Button>
        </Link>
        <Button
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          border="none"
          borderRadius="0"
          isDisabled={true}
        >
          📅 EVENT
        </Button>
        <Button
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          border="none"
          borderRadius="0 0 5px 5px"
          isDisabled={true}
        >
          🗨️ DISCUSSION
        </Button>
      </PopoverContent>
    </Popover>
  );
}

