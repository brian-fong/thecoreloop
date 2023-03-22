import { menuAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys)

// define custom variants
const variants = {
  thecoreloop: {
    button: {
      padding: "5px 0px",
      width: "100%",
      color: "black",
      fontSize: "14px",
      background: "none",
      border: "2px solid white",
      borderRadius: "30px",
      _hover: {
        background: "rgba(0, 0, 0, 0.1)",
      },
      _active: {
        background: "rgba(0, 0, 0, 0.1)",
      }
    },
    list: {
      padding: "0px 30px",
      width: "100%",
      background: "#2C2C2C",
    },
    item: {
      margin: "30px 0px",
      padding: "0px",
      width: "100%",
      color: "white",
      background: "black",
      border: "2px solid white",
      borderRadius: "30px",
      transition: "filter 200ms",
      _hover: {
        filter: "brightness(0.9)",
      },
      _active: {
        filter: "brightness(0.9)",
      }
    },
  },
}

// export the custom variants in the component theme
export const menuTheme = defineMultiStyleConfig({ variants })
