import { selectAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(selectAnatomy.keys)

const thecoreloop = definePartsStyle({
  field: {
    color: "black",
    background: "white",
    border: "none",
  },
})

export const selectTheme = defineMultiStyleConfig({ variants: { thecoreloop } })

