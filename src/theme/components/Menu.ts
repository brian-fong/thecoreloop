import { menuAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys)

// define custom variants
const variants = {
  thecoreloop: {
    button: {
      padding: "5px 0px",
      color: "black",
      fontSize: "14px",
      background: "none",
      border: "1px solid black",
      borderRadius: "30px",
      _hover: {
        background: "rgba(0, 0, 0, 0.1)",
      },
      _active: {
        background: "rgba(0, 0, 0, 0.1)",
      }
    },
    list: {
      background: "#1D203E",
      padding: "0px 30px",
    },
    item: {
      margin: "30px 0px",
      padding: "0px",
      color: "white",
      background: "#3A3D57",
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
