const Button = {
  // 1. We can update the base styles
  baseStyle: {
    color: "white",
    background: "#114dcf",
    backgroundColor: "#114dcf",
    fontSize: "14px",
    borderRadius: "0px",
    transition: "background-color 200ms ease-in",
    _hover: {
      background: "#0c3999",
      backgroundColor: "#0c3999",
    },
    _active: {
      filter: "brightness(0.8)",
      background: "#0c3999",
      backgroundColor: "#0c3999",
    }
  },
}

export default Button;

