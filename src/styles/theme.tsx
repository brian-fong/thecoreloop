import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  colors: {
    bkg: "#313244",
    logo_bkg: "#6711CF",
    card_bkg: "#adadad",
    standard_bkg: "#C0C0C0",
    category_bkg: "#909090",
    category_bkg_hover: "#606060",
    description_fg: "rgba(0, 0, 0, 0.7)",
    tcl_yellow: "#FAFF2F",
    tcl_yellow_hover: "#BCC024",
    tcl_blue: "#4FD1C5",
    tcl_blue_hover: "#40a89f",
    tcl_pink: "#F93CA3",
  },
  styles: {
    global: {
      "body": {
        "margin": "0px", 
        "padding": "0px",
        "fontSize": "20px",
        "fontFamily": "Jetbrains Mono",
        "scrollBehavior": "smooth",
      }
    }
  },
});

