import {
  Button,
} from "@chakra-ui/react";

export default function ContentModeBtn({ text, active, onClick }: any) {
  const active_color: string = "rgba(255, 255, 255, 1.0)";
  const inactive_color: string = "rgba(255, 255, 255, 0.5)";
  const hover_effect: string = (active) 
    ? active_color
    : inactive_color;

  return (
    <Button
      appearance="none"
      margin="0.5rem"
      padding="0"
      width="min-content"
      height="min-content"
      background="none"
      borderRadius="0"
      outlineOffset="5px"
      color={ active ? active_color : inactive_color }
      transition="color 200ms ease-in"
      _active={{
        color: active_color,
      }}
      _hover={{
        color: hover_effect,
      }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}

