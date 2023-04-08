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
  }
})

const Button = defineStyleConfig({
  baseStyle: {
    margin: "0",
    padding: "0",
    background: "transparent",
    backgroundColor: "transparent",
    _hover: {},
    _active: {},
  },
  variants: {
    standard,
  },
});

export default Button;
