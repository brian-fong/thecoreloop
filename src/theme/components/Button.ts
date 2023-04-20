import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const standard = defineStyle({
  margin: "0",
  padding: "4px 8px",
  width: "min-content",
  height: "min-content",
  color: "#282a36",
  fontWeight: "normal",
  background: "#f8f8f2",
  backgroundColor: "#f8f8f2",
  border: "none",
  borderRadius: "0",
  boxShadow: "5px 5px 1px black",
  transition: "all 100ms ease-in-out",
  _hover: {
    filter: "brightness(0.8)",
  },
  _active: {
    boxShadow: "none",
    filter: "brightness(1.0)",
    transform: "translate(5px, 5px)",
  },
})

const header_base = defineStyle({
  display: "flex",
  flexDirection: "row",
  justifyContent: "start",
  alignItems: "center",
  margin: "0",
  padding: "5px 10px",
  height: "min-content",
  color: "gray.400",
  fontSize: "18px",
  background: "transparent",
  borderRadius: "5px",
  transition: "all 200ms ease-in-out",
  _focusVisible: {
    color: "gray.300",
    background: "rgba(0, 0, 0, 0.3)",
  },
  _hover: { color: "gray.200" },
  _active: {},
});

const header_popover = defineStyle({
  display: "flex",
  flexDirection: "row",
  justifyContent: "start",
  alignItems: "center",
  gap: "15px",
  width: "100%",
  background: "gray.800",
  borderRadius: "5px",
  transition: "all 200ms ease-in-out",
  _hover: { background: "gray.700" }
});

const Button = defineStyleConfig({
  baseStyle: {
    margin: "0",
    padding: "0",
    fontSize: "16px",
    background: "transparent",
    backgroundColor: "transparent",
    userSelect: "none",
    _hover: {},
    _active: {},
  },
  variants: {
    header_base,
    header_popover,
    standard,
  },
});

export default Button;
