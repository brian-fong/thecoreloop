// Components
import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import Header from "../components/CreateLAG/Header";
import InputLAG from "../components/CreateLAG/InputLAG";
import Logo from "../components/Core/Logo";
import NavBar from "../components/Core/NavBar";
import PreviewLAG from "../components/CreateLAG/PreviewLAG";
import ViewLAG from "../components/CreateLAG/ViewLAG";

// Hooks
import { useEffect } from "react";
import useCreateLAG from "../hooks/useCreateLAG";

export default function create_lag() {
  const { 
    abort, 
    status, 
    setStatus,
    toggleFetch, 
    lag, 
    lag_meta,
    setLAG,
  }: any = useCreateLAG();

  useEffect(() => {
    // Confirmation before closing browser tab/window
    window.onbeforeunload = () => "";
  }, [])

  return (
    <>
      {/* Head */}
      <Head>
        <title>tcl - Create Daily LAG</title>
        <link 
          rel="icon" 
          type="image/x-icon" 
          href="/thecoreloop-favicon.png" 
        />
        <meta name="viewport" content="viewport-fit=cover" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Body */}
      <Flex 
        id="root-container"
        flexDir="column" 
        justify="start" 
        align="center" 
        m="0px" 
        p="0px"
        minHeight="100vh"
      >
        <Header />

        <Flex 
          id="main-container"
          flexDir="column" 
          gap="40px" 
          justify="start" 
          align="center" 
          m="0px"
          p="40px 40px 60px" 
          width="100%"
          minWidth="550px" 
          maxWidth="800px"
          boxSizing="border-box"
        >
          <InputLAG
            abort={abort}
            status={status}
            setStatus={setStatus}
            toggleFetch={toggleFetch}
            lag={lag}
            lag_meta={lag_meta}
            setLAG={setLAG}
          />
          <PreviewLAG 
            lag={lag_meta}
          />
          <ViewLAG
            lag={lag_meta}
          />
        </Flex>
      </Flex>
    </>
  );
}

