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
  // Stages of Project-Submission form
  const [stage, setStage] = useState<string>("Basics");

  // React Component for given Stage
  const [stageContent, setStageContent] = useState<ReactElement>();

  // Links to project website or Twitter
  const [links, setLinks] = useState<string[]>([""]);

  // Genres of project
  const [main_genre, setMainGenre] = useState<string>("");
  const [sub_genre, setSubGenre] = useState<string>("");

  // Chain of project
  const [chain, setChain] = useState<any>({ 
    name: "",
    icon: "",
  });
  
  useEffect(() => {
    // Update Stage Content
    if (stage == "Basics") {
      setStageContent(<Basics 
        links={links} 
        setLinks={setLinks} 
        setStage={setStage} 
      />);
    } else if (stage == "Details") {
      setStageContent(<Details 
        main_genre={main_genre}
        setMainGenre={setMainGenre}
        sub_genre={sub_genre}
        setSubGenre={setSubGenre}
        chain={chain}
        setChain={setChain}
        setStage={setStage}
      />);
    } else if (stage == "Story") {
      setStageContent(<Story setStage={setStage} />);
    }
  }, [stage, links, main_genre, sub_genre, chain]);

  useEffect(() => {
    // Remove empty website fields
    if (links.length > 1) {
      const links_filtered: string[] = [links[0]];
      for (const link of links.slice(1)) {
        if (link.trim().length > 0) links_filtered.push(link);
      }
      setLinks(links_filtered);
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
            padding="40px 80px"
            width="100%"
          >
            {stageContent}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

