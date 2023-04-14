// Components
import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
} from '@chakra-ui/react'
import {
  BsXCircle as MinusIcon,
  BsGlobe as WebIcon,
  BsPlus as PlusIcon,
} from "react-icons/bs";
import LinkIcon from './LinkIcon';

// Hooks
import { useState } from "react";

export default function LinksModal({
  links, setLinks,
  isOpen, onClose,
}: any) {

  // State Variables
  const [links_inputted, setLinksInputted] = useState<string[]>([...links]);

  function addLink() {
    // Append element to links state variable
    setLinksInputted((links_inputted: string[]) => [...links_inputted, ""]);
  }

  function removeLink(index: number) {
    const links_inputted_new: string[] = [...links_inputted];
    links_inputted_new.splice(index, 1);
    setLinksInputted(links_inputted_new);
  }

  function handleChange(event: any, index: number) {
    // Update links_inputted state variable
    const link_inputted: string = event.currentTarget.value;
    const links_inputted_new: string[] = [...links_inputted];
    links_inputted_new[index] = link_inputted;
    setLinksInputted(links_inputted_new);
  }

  function handleCancel() {
    setLinksInputted(links); // Reset inputted links to official
    onClose();  // Close LinkModal
  }

  function handleSubmit() {
    const links_inputted_new: string[] = links_inputted.filter(
      link => link.trim().length > 0
    );
    setLinksInputted(links_inputted_new); // Update inputted links
    setLinks(links_inputted_new)  // Set official to inputted links
    onClose();  // Close LinkModal
  }

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={handleCancel} 
      closeOnOverlayClick={false}
      isCentered
    >
      <ModalOverlay />
      <ModalContent
        display="flex"
        flexDirection="column"
        justifyContent="start"
        alignItems="start"
        padding="15px 10px 10px"
        position="relative"
        width="100%"
        maxWidth="600px"
        minHeight="200px"
        background="#282a36"
        borderRadius="10px"
      >
        <ModalBody
          padding="8px 20px 30px"
          width="100%"
          border="2px solid rgba(255, 255, 255, 0.7)"
          borderRadius="5px"
        >
          {/* Container: Heading */}
          <Flex justifyContent="center" width="100%">
            <Heading
              position="relative"
              bottom="18px"
              padding="0 20px"
              fontSize="20px"
              textAlign="center"
              whiteSpace="nowrap"
              background="#282a36"
            >
              Links
            </Heading>
          </Flex>

          <Flex
            id="project-website-container"
            flexDirection="column"
            justifyContent="start"
            alignItems="start"
            gap="10px"
            marginBottom="30px"
            width="100%"
          >
            <Flex 
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
            >
              <FormLabel htmlFor="project-website" margin="0">
                Official website or social page:
              </FormLabel>
              <Text color="gray.400" fontSize="16px">
                Required
              </Text>
            </Flex>

            <Flex
              flexDirection="row"
              justifyContent="start"
              alignItems="center"
              gap="15px"
              paddingLeft="10px"
              width="100%"
            >
              <Link 
                href={links_inputted[0]}
                target="_blank"
                cursor="pointer"
                pointerEvents={links_inputted[0] ? "all" : "none"}
                transition="all 200ms ease-in-out"
                _hover={{ filter: "brightness(0.7)" }}
              >
                <WebIcon size="30px" />
              </Link>
              <Input
                id="project-website"
                type="url"
                padding="4px 8px"
                width="100%"
                background="rgba(0, 0, 0, 0.2)"
                border="2px solid rgba(255, 255, 255, 0.7)"
                autoComplete="off"
                spellCheck="false"
                placeholder="https://thecoreloop.gg/"
                _placeholder={{
                  fontStyle: "italic",
                }}
                value={links_inputted[0]}
                onChange={(event) => handleChange(event, 0)}
                transition="all 200ms ease-in-out"
                _hover={{}}
                _focusVisible={{}}
              />
            </Flex>
          </Flex>
          
          <Flex
            id="links-container"
            flexDirection="column"
            justifyContent="start"
            alignItems="start"
            gap="10px"
            marginBottom="20px"
            width="100%"
          >
            <Flex
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
            >
              <FormLabel margin="0">
                Additional links:
              </FormLabel>
              <Text color="gray.400" fontSize="16px">
                Optional
              </Text>
            </Flex>

            {/* Additional Links */}
            {links_inputted.map((link: string, index: number) => (
              index == 0
              ? null
              : <Flex
                  flexDirection="row"
                  justifyContent="start"
                  alignItems="center"
                  gap="15px"
                  paddingLeft="10px"
                  width="100%"
                  transition="max-height 300ms ease-in-out"
                >
                  <Link 
                    href={link}
                    target="_blank"
                    pointerEvents={link ? "all" : "none"}
                    transition="all 200ms ease-in-out"
                    _hover={{ filter: "brightness(0.7)" }}
                  >
                    <LinkIcon url={link} size="30px" />
                  </Link>
                  <Input
                    key={index}
                    type="url"
                    padding="4px 8px"
                    width="100%"
                    background="rgba(0, 0, 0, 0.2)"
                    border="2px solid rgba(255, 255, 255, 0.7)"
                    autoComplete="off"
                    spellCheck="false"
                    value={link}
                    onChange={(event) => handleChange(event, index)}
                    transition="all 200ms ease-in-out"
                    placeholder="https://twitter.com/thecoreloop"
                    _placeholder={{
                      fontStyle: "italic",
                    }}
                    _hover={{}}
                    _focusVisible={{}}
                  />
                  <Box 
                    cursor="pointer" 
                    userSelect="none"
                    borderRadius="full"
                    onClick={() => removeLink(index)}
                    transition="all 200ms ease-in-out"
                    _hover={{
                      filter: "brightness(0.8)",
                      background: "rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    <MinusIcon size="30px" />
                  </Box>
                </Flex>
            ))}
          </Flex>

          {/* Add-Link Button */}
          <Flex justifyContent="center" width="100%">
            <Button
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              marginBottom="30px"
              padding="4px 0"
              width="100%"
              maxWidth="500px"
              border="2px solid white"
              borderRadius="5px"
              cursor="pointer" 
              userSelect="none"
              isDisabled={links_inputted.length == 5}
              onClick={addLink}
              transition="all 200ms ease-in-out"
              _hover={{
                filter: "brightness(0.8)",
                background: "rgba(0, 0, 0, 0.3)",
              }}
            >
              <PlusIcon size="30px" />
            </Button>
          </Flex>


          <Flex
            flexDirection="row"
            justifyContent="end"
            alignItems="center"
            gap="30px"
            width="100%"
          >
            <Button
              variant="standard"
              color="white"
              fontWeight="bold"
              background="red.400"
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="standard"
              color="white"
              fontWeight="bold"
              background="green.400"
              onClick={handleSubmit}
            >
              Save
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

