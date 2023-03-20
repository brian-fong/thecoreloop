// Components
import {
  Flex,
} from "@chakra-ui/react";
import Basics from "../components/SubmitProject/Basics";
import Details from "../components/SubmitProject/Details";
import Head from "next/head";
import Header from "../components/Home/Header";
import LeftColumn from "../components/SubmitProject/LeftColumn";
import Story from "../components/SubmitProject/Story";

// React
import { ReactElement, useState, useEffect } from "react";

export default function submit_project() {
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
        <title>Submit Project</title>
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
        background="black"
      >
        {/* Header */}
        <Header />

        <Flex
          flexDirection="row"
          width="100%"
          height="100%"
          minHeight="90vh"
        >
          {/* Left Column */}
          <LeftColumn 
            stage={stage}
            setStage={setStage}
          />

          {/* Content Container */}
          <Flex
            id="content-container"
            flexDirection="column"
            justifyContent="start"
            alignItems="start"
            padding="40px 40px 40px 80px"
            width="100%"
          >
            {stageContent}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

