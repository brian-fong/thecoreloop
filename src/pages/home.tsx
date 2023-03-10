import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import Head from "next/head";
import Header from "../components/Home/Header";
import Card from "../components/Home/Card";
import { useState, useEffect, ReactElement } from "react";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [projectData, setProjectData] = useState<any[]>([]);

  const [cards, setCards] = useState<ReactElement[]>([]);

  function handleSubmit() {
    const name: string = (document.getElementById("project-name") as HTMLInputElement).value;
    const website: string = (document.getElementById("project-website") as HTMLInputElement).value;
    const twitter: string = (document.getElementById("project-twitter") as HTMLInputElement).value;
    const genre: string = (document.getElementById("project-genre") as HTMLInputElement).value;
    const chain: string = (document.getElementById("project-chain") as HTMLInputElement).value;
    const description: string = (document.getElementById("project-description") as HTMLInputElement).value;
    const image: string = (document.getElementById("project-image") as HTMLInputElement).value;
    const trailer: string = (document.getElementById("project-trailer") as HTMLInputElement).value;

    const new_project: any = {
      name, 
      website, 
      twitter, 
      genre, 
      chain, 
      description, 
      image, 
      trailer, 
    };

    setProjectData(data => [...data, new_project]);
  }

  useEffect(() => {
    setCards([]);
    for (let i = 0; i < projectData.length; i++) {
      const {
        name, 
        website, 
        twitter, 
        genre, 
        chain, 
        description, 
        image, 
        trailer, 
      }: any = projectData[i];

      const new_card: ReactElement = <Card
        name={name}
        website={website}
        twitter={twitter}
        genre={genre}
        chain={chain}
        description={description}
        image={image}
        trailer={trailer}
      />

      setCards(cards => [...cards, new_card]);
    }
  }, [projectData]);

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

        {/* Modal */}
        <Modal 
          closeOnOverlayClick={false} 
          isOpen={isOpen} 
          onClose={onClose}
          isCentered
        >
          <ModalOverlay />
          <ModalContent
            justifyContent="center"
            alignItems="center"
            background="#1d3a3e"
          >
            <ModalHeader>Share Web3 Gaming Project</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <Flex
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="start"
                  gap="20px"
                >
                  <Box width="100%">
                    <FormLabel htmlFor="project-name" margin="0px">
                      Name of the Project
                    </FormLabel>
                    <Input
                      id="project-name"
                      placeholder="What is it called?"
                    />
                  </Box>
                  <Box width="100%">
                    <FormLabel htmlFor="project-website" margin="0px">
                      Website URL of the Project
                    </FormLabel>
                    <Input
                      id="project-website"
                      type="url"
                      placeholder="https://"
                    />
                  </Box>
                  <Box width="100%">
                    <FormLabel htmlFor="project-twitter" margin="0px">
                      Twitter Account of the Project
                    </FormLabel>
                    <Input
                      id="project-twitter"
                      type="url"
                      placeholder="https://twitter.com/"
                    />
                  </Box>
                  <Box width="100%">
                    <FormLabel htmlFor="project-genre" margin="0px">
                      What genre best describes your project?
                    </FormLabel>
                    <Input
                      id="project-genre"
                      placeholder="What is it called?"
                    />
                  </Box>
                  <Box width="100%">
                    <FormLabel htmlFor="project-stage" margin="0px">
                      What development stage best describes your project?
                    </FormLabel>
                    <Input
                      id="project-stage"
                      placeholder="What is it called?"
                    />
                  </Box>
                  <Box width="100%">
                    <FormLabel htmlFor="project-chain" margin="0px">
                      What chain is your project built on? 
                    </FormLabel>
                    <Input
                      id="project-chain"
                      placeholder="https://"
                    />
                  </Box>
                  <Box width="100%">
                    <FormLabel htmlFor="project-description" margin="0px">
                      Short Description of the Project
                    </FormLabel>
                    <Textarea
                      id="project-description"
                      minHeight="100px"
                      placeholder="Please describe your startup/project in a few words. This will show up as the tagline on the discovery page"
                    />
                  </Box>
                  <Box width="100%">
                    <FormLabel htmlFor="project-image" margin="0px">
                      Image of the Project
                    </FormLabel>
                    <Input
                      id="project-image"
                      type="url"
                      placeholder="https://"
                    />
                  </Box>
                  <Box width="100%">
                    <FormLabel htmlFor="project-trailer" margin="0px">
                      YouTube Trailer for Project
                    </FormLabel>
                    <Input
                      id="project-trailer"
                      type="url"
                      placeholder="This is optional but we highly recommend it!"
                    />
                  </Box>
                </Flex>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Flex
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                gap="30px"
              >
                <Button onClick={handleSubmit} >
                  Submit
                </Button>
                <Button onClick={onClose} >
                  Cancel
                </Button>
              </Flex>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Flex
          id="body-container"
          flexDirection="column"
          justifyContent="start"
          alignItems="center"
          padding="30px 0px"
          width="100%"
          height="100%"
        >
          <Flex
            id="content-container"
            flexDirection="column"
            justifyContent="start"
            alignItems="center"
            width="100%"
            maxWidth="800"
            height="100%"
          >
            <Flex
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
            >
              <Text
                fontSize="1.2rem"
                fontWeight="800"
              >
                Discover tomorrow's gaming startups, today
              </Text>
              <Flex
                id="content-mode-container"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                gap="10px"
              >
                <Text
                  fontSize="1.2rem"
                  fontWeight="800"
                >
                  POPULAR
                </Text>
                <Text
                  color="rgba(255, 255, 255, 0.5)"
                  fontSize="2rem"
                  fontWeight="300"
                >
                  |
                </Text>
                <Text
                  color="rgba(255, 255, 255, 0.5)"
                  fontSize="1.2rem"
                  fontWeight="800"
                >
                  LATEST
                </Text>
              </Flex>
            </Flex>
            <Flex
              id="card-container"
              flexDirection="column"
              justifyContent="center"
              alignItems="start"
              gap="50px"
              padding="30px 0px"
              width="100%"
              height="100%"
            >
              {/* Sample Card Component */}
              {cards}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
