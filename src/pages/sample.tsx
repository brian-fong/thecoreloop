import {
  Flex, 
  Image,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import Logo from "../components/Core/Logo";
import AuthBtn from "../components/Core/AuthBtn";
import CurveContainer from "../components/Core/CurveContainer";
import CurveSubContainer from "../components/Core/CurveSubContainer";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

export default function sample_page() {
  const { data: session, status } = useSession();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [expiration, setExpiration] = useState<string>("");

  useEffect(() => {
    console.log("Session: ", session);
    console.log("Status: ", status);

    setName(session?.user?.name!)
    setEmail(session?.user?.email!)
    setImage(session?.user?.image!)
    setExpiration(session?.expires!);
  }, [session, status]);

  return (
    <>
      <Head>
        <title>thecoreloop</title>
        <link 
          rel="icon" 
          type="image/x-icon" 
          href="/thecoreloop-favicon.png" 
        />
        <meta name="viewport" content="viewport-fit=cover" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Main Container */}
      <Flex
        id="main-container"
        flexDirection="column"
        justifyContent="start"
        alignItems="center"
        minHeight="100vh"
        padding="2rem"
        background="body"
      >
        <Flex
          flexDirection="column"
          justifyContent="start"
          alignItems="center"
          gap="3rem"
          width="100%"
          minWidth="550px"
          maxWidth="800px"
          height="100%"
        >
          <Logo />

          <CurveContainer heading="Authentication">
            Sign in using the following:
            <Flex
              flexDirection="row"
              justifyContent="start"
              alignItems="center"
              gap="2rem"
              marginBottom="1rem"
              padding="1rem"
              width="100%"
            >
              <AuthBtn 
                provider="google"
              />
              <AuthBtn 
                provider="twitter"
              />
            </Flex>
            <CurveSubContainer heading="User Credentials">
              <Flex
                flexDirection="row"
                justifyContent="start"
                alignItems="center"
                gap="0.5rem"
              >
                {
                  (status == "authenticated")
                  ? <Image 
                      src={image}
                      alt="Image"
                      height="128px"
                  />
                  : <Flex
                      flexDirection="column"
                      width="128px"
                      height="128px"
                      border="1px solid black"
                    >

                  </Flex>
                }
                <Flex
                  flexDirection="column"
                  justifyContent="space-between"
                  alignItems="start"
                  gap="0.5rem"
                  width="100%"
                  height="128px"
                >
                  <Flex gap="0.5rem">
                    <Text>Status: </Text>
                    <Text
                      color={(status == "authenticated")
                        ? "green"
                        : "red"
                      }
                    >
                      {status.toUpperCase()}
                    </Text>
                  </Flex>
                  <Flex gap="0.5rem">
                    <Text>Name: </Text>
                    <Text color="blue">{name}</Text>
                  </Flex>
                  <Flex gap="0.5rem">
                    <Text>Email: </Text>
                    <Text color="blue">{email}</Text>
                  </Flex>
                  <Flex gap="0.5rem">
                    <Text>Access Token Expires: </Text>
                    <Text color="blue">{expiration?.slice(0, 10)}</Text>
                  </Flex>
                </Flex>
              </Flex>
            </CurveSubContainer>
          </CurveContainer>
        </Flex>
      </Flex>
    </>
  );
}

