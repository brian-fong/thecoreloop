import Button from "./components/Button";
import Heading from "./components/Heading";
import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  colors: {
    // Core
    body: "#282A36",
    gallery: "#1d1e26",
    standard_bkg: "#C0C0C0",
    standard_bkg_alt: "#adadad",
    category_bkg: "#909090",
    category_bkg_hover: "#606060",
    text: "black",
    text_alt: "rgba(0, 0, 0, 0.7)",

    // Socials
    discord: "#7289da",
    telegram: "#249DD9",
    telegram_hover: "#186e99",
    twitter: "#1DA1F2",

    // thecoreloop colors
    tcl_purple: "#6711CF",
    tcl_yellow: "#FAFF2F",
    tcl_yellow_hover: "#BCC024",
    tcl_orange: "#d17c4f",
    tcl_orange_hover: "#995b3a",
    tcl_red: "#ff6666",
    tcl_red_hover: "#993d3d",
    tcl_blue: "#114dcf",
    tcl_blue_hover: "#0c3999",
    tcl_teal: "#4FD1C5",
    tcl_teal_hover: "#40a89f",
    tcl_green: "#47d685",
    tcl_green_hover: "#32995f",
    tcl_pink: "#F93CA3",
    tcl_pink_hover: "#b02c74",
  },
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
      },
      body: {
        margin: "0px", 
        padding: "0px",
        color: "white",
        fontSize: "14px",
        fontFamily: `"JetBrains Mono", sans-serif`,
        scrollBehavior: "smooth",
      },
    },
  },
  components: {
    Button,
    Heading,
  }
});

