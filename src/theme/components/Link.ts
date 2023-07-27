import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const underline = defineStyle({
  fontStyle: "italic",
  textDecoration: "none",
  backgroundPosition: "0 100%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "0% 1px",
  transition: `
    background-size 200ms, \
    background-position 0ms 200ms, \
    filter 200ms ease-in
  `,
  _hover: {
    cursor: "pointer",
    textDecoration: "none",
    backgroundPosition: "100% 100%",
    backgroundSize: "100% 1px",
    filter: "brightness(80%)",
  },
})
const Link = defineStyleConfig({
  variants: {
    underline,
  }
});

export default Link;

