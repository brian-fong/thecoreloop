import { selectAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(selectAnatomy.keys)

const thecoreloop = definePartsStyle({
  field: {
    color: "black",
    background: "rgba(255, 255, 255, 0.5)",
    _focus: {
      background: "white",
    }
  },
})

export const selectTheme = defineMultiStyleConfig({ variants: { thecoreloop } })

