import Head from "next/head";
import { useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import Logo from "../components/Core/Logo";
import NavBar from "../components/Core/NavBar";
import useCreateLAG from "../hooks/useCreateLAG";
import ViewLAG from "../components/CreateLAG/ViewLAG";
import InputLAG from "../components/CreateLAG/InputLAG";
import PreviewLAG from "../components/CreateLAG/PreviewLAG";

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
    window.onbeforeunload = () => "";
  }, [])

  return (
    <>
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
      <Flex 
        id="root_container"
        flexDir="column" 
        justify="start" 
        align="center" 
        m="0px" 
        p="0px"
        width="100vw" 
        height="100vh"
        bg="body"
        boxSizing="border-box"
        overflowX="hidden"
      >
        <NavBar />

        <Flex 
          id="main_container"
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
          <Logo />
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

