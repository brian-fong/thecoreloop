import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const underline = defineStyle({
  transition: `
    background-size 200ms, \
    background-position 0ms 200ms, \
    filter 200ms ease-in
  `,
  backgroundImage: "linear-gradient(#A0AEC0 0 0)",
  backgroundPosition: "0 100%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "0% 1px",
  _hover: {
    cursor: "pointer",
    filter: "brightness(80%)",
    backgroundPosition: "100% 100%",
    backgroundSize: "100% 1px",
  },
})
const Link = defineStyleConfig({
  baseStyle: {
    color: "gray.400",
    fontStyle: "italic",
    textDecoration: "none",
    transition: "all 200ms",
    _hover: {
      textDecoration: "none",
    }
  },
  variants: {
    underline,
  }
});

export default Link;

