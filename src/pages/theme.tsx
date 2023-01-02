import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  colors: {
    bkg: "#313244",
    logo_bkg: "#6711CF",
    standard_bkg: "#C0C0C0",
    category_bkg: "#909090",
    category_bkg_hover: "#606060",
    border_line: "rgba(0, 0, 0, 0.5)",
    tcl_yellow: "#FAFF2F",
    tcl_yellow_hover: "#BCC024",
    tcl_pink: "#F93CA3",
  },
  styles: {
    global: {
      "body": {
        "margin": "0px", 
        "padding": "0px",
        "fontSize": "20px",
        "fontFamily": "Jetbrains Mono",
        "caretColor": "rgba(0, 0, 0, 0.6)",
      }
    }
  },
});

