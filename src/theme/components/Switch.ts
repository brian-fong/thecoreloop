import { switchAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys)

const CommunityTeam = definePartsStyle({
  track: {
    background: "yellow.400",
    border: "none",
    _checked: {
      background: "blue.400",
    }
  },
  thumb: {
    background: "white",
  },
})

export const switchTheme = defineMultiStyleConfig({ 
  variants: { CommunityTeam }
})

