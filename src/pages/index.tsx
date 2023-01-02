// _app.tsx 

import { 
  ChakraProvider,
} from '@chakra-ui/react'
import theme from "./theme";
import Head from "./Head";
import Main from "./Main";
import type { AppProps } from "next/app";
import NavBar from "./NavBar";

export default function Home({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head />
      <Main />
    </ChakraProvider>
  );
}
