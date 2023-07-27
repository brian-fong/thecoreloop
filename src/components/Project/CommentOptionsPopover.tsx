import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@chakra-ui/react";
import { BsThreeDots as MoreIcon } from "react-icons/bs";

export default function CommentOptionsPopover() {
  return (
    <Popover placement="right" offset={[0, 0]}>
      <PopoverTrigger>
        <Button
          margin="0"
          padding="0"
          height="min-content"
          backgroundColor="transparent"
          borderRadius="10px"
          _hover={{
            backgroundColor: "gray.700",
          }}
        >
          <MoreIcon size="20px" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        display="flex"
        flexDirection="column"
        width="min-content"
        background="dracula_bg"
        border="none"
        borderRadius="5px"
      >
        <Button
          margin="0"
          padding="4px 8px"
          width="min-content"
          height="min-content"
          color="white"
          fontSize="14px"
          fontWeight="normal"
          background="dracula_bg"
          backgroundColor="dracula_bg"
          border="none"
          borderRadius="5px"
          userSelect="none"
          transition="all 100ms ease-in-out"
          _hover={{ filter: "brightness(80%)" }}
          _active={{ filter: "brightness(1.0)" }}
        >
          Report
        </Button>
      </PopoverContent>
    </Popover>
  );
}

