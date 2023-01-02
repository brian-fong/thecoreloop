// ChakraUI
import { ChakraProvider } from '@chakra-ui/react'
import theme from "../styles/theme";

// React Components
import Head from "./Head";
import Main from "./Main";

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <Head />
      <Main />
    </ChakraProvider>
  );
}
