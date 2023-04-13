// Components
import Button from "./components/Button";
import Heading from "./components/Heading";
import Link from "./components/Link";
import { menuTheme as Menu } from './components/Menu'
import { selectTheme as Select } from "./components/Select";
import { switchTheme as Switch } from "./components/Switch";

// Hooks
import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  colors: {
    // Dracula
    dracula_bg: "#282A36",

    // Curve Finance
    curve: "#C0C0C0",
    curve_alt: "#909090",

    // Socials
    discord: "#7289da",
    substack: "#FF5A00",
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
    tcl_green: "#58bf85",
    tcl_green_hover: "#32995f",
    tcl_pink: "#F93CA3",
    tcl_pink_hover: "#b02c74",
  },
  styles: {
    global: {
      body: {
        margin: "0px", 
        padding: "0px",
        color: "white",
        fontSize: "14px",
        fontFamily: `"JetBrains Mono", sans-serif`,
        background: "#282a36",
        scrollBehavior: "smooth",
      },
      "*::-webkit-scrollbar": {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        width: "5px",
      },
      "*::-webkit-scrollbar-thumb": {
        backgroundColor: "rgba(255, 255, 255, 0.8)",
      },
    },
  },
  components: {
    Button,
    Heading,
    Link,
    Menu,
    Select,
    Switch,
  }
});

