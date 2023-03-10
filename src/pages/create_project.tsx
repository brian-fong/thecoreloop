// Components
import {
  Flex,
} from "@chakra-ui/react";
import Head from "next/head";
import Header from "../components/Home/Header";
import LeftColumn from "../components/CreateProject/LeftColumn";
import Basics from "../components/CreateProject/Basics";
import Details from "../components/CreateProject/Details";
import Story from "../components/CreateProject/Story";

// React
import { ReactElement, useState, useEffect } from "react";

export default function create_project() {
  const [stage, setStage] = useState<string>("Basics");

  const [stageContent, setStageContent] = useState<ReactElement>();
  
  useEffect(() => {
    if (stage == "Basics") {
      setStageContent(<Basics setStage={setStage} />);
    } else if (stage == "Details") {
      setStageContent(<Details setStage={setStage} />);
    } else if (stage == "Story") {
      setStageContent(<Story setStage={setStage} />);
    }
  }, [stage]);

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
        position="relative"
        minHeight="100vh"
        color="white"
        background="#1D203E"
      >
        {/* Header */}
        <Header />

        <Flex
          flexDirection="row"
          width="100%"
          minHeight="100vh"
        >
          {/* Left Column */}
          <LeftColumn 
            stage={stage}
            setStage={setStage}
          />

          <Flex
            flexDirection="column"
            justifyContent="start"
            alignItems="start"
            padding="3rem 5rem"
            width="100%"
          >
            {stageContent}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

