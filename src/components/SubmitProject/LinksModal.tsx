// Components
import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
} from '@chakra-ui/react'
import {
  BsCircle as CircleIcon,
  BsGlobe as WebIcon,
  BsInstagram as InstagramIcon,
  BsLinkedin as LinkedinIcon,
  BsPlusCircle as PlusIcon,
  BsTwitter as TwitterIcon,
  BsTelegram as TelegramIcon,
  BsYoutube as YouTubeIcon,
} from "react-icons/bs";
import { 
  FaDiscord as DiscordIcon,
  FaMediumM as MediumIcon,
} from 'react-icons/fa';
import {
  SiSubstack as SubstackIcon,
} from "react-icons/si";

// Hooks
import { useFormik } from "formik";

// Types
import { FormikErrors, FormikValues } from "formik";

// Formik validation
function validate() {
  const errors: FormikErrors<FormikValues> = {};

  // No form validation

  return errors;
}

export default function LinksModal({
  links, setLinks,
  isOpen, onClose,
}: any) {
  // Formik props
  const formik = useFormik({
    initialValues: {
      links: links,
    },
    validate: validate,
    onSubmit: (values) => {
      // Update genres state variable
      setLinks(values.links);

      // Close NameModal
      onClose();
    },
  });

  function addLink() {
    console.log("Link added");
  }

  function handleCancel() {
    // Reset values
    formik.setErrors({});         // Reset errors
    formik.values.links = links   // Reset selected genres (formik)
    onClose();                    // Close NameModal
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
          <form onSubmit={formik.handleSubmit}>
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
                <WebIcon size="30px" />
                <Input
                  id="project-website"
                  padding="4px 8px"
                  width="100%"
                  background="rgba(0, 0, 0, 0.2)"
                  border="2px solid rgba(255, 255, 255, 0.7)"
                  // value={formik.values.name}
                  autoComplete="off"
                  spellCheck="false"
                  // isInvalid={formik.errors.name ? true : false}
                  // onChange={handleChange}
                  onFocus={(event) => { event.currentTarget.select() }}
                  transition="all 200ms ease-in-out"
                  placeholder="https://thecoreloop.gg/"
                  _placeholder={{
                    fontStyle: "italic",
                  }}
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
              marginBottom="30px"
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
              <Flex
                flexDirection="row"
                justifyContent="start"
                alignItems="center"
                gap="15px"
                paddingLeft="10px"
                width="100%"
              >
                <CircleIcon size="30px" />
                <Input
                  padding="4px 8px"
                  width="100%"
                  background="rgba(0, 0, 0, 0.2)"
                  border="2px solid rgba(255, 255, 255, 0.7)"
                  // value={formik.values.name}
                  autoComplete="off"
                  spellCheck="false"
                  // isInvalid={formik.errors.name ? true : false}
                  // onChange={handleChange}
                  onFocus={(event) => { event.currentTarget.select() }}
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
                  onClick={addLink}
                  transition="filter 200ms ease-in-out"
                  _hover={{
                    filter: "brightness(0.6)",
                  }}
                  _active={{
                    filter: "brightness(1.0)",
                  }}
                >
                  <PlusIcon size="30px" />
                </Box>
              </Flex>
            </Flex>

            {/* Icon Gallery */}
            <Flex
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              gap="20px"
              padding="20px 0 10px"
              width="100%"
            >
              <WebIcon size="30px" />
              <DiscordIcon size="30px" />
              <InstagramIcon size="30px" />
              <LinkedinIcon size="30px" />
              <MediumIcon size="30px" />
              <SubstackIcon size="30px" />
              <TelegramIcon size="30px" />
              <TwitterIcon size="30px" />
              <YouTubeIcon size="30px" />
            </Flex>

            <Flex
              flexDirection="row"
              justifyContent="end"
              alignItems="center"
              gap="30px"
              marginTop="20px"
              width="100%"
            >
              <Button
                background="red.400"
                boxShadow={`
                  1px 1px 1px gray,
                  2px 2px 1px gray,
                  3px 3px 1px gray,
                  4px 4px 1px gray
                `}
                transition="all 100ms ease-in-out"
                _hover={{
                  filter: "brightness(0.8)",
                }}
                _active={{
                  filter: "brightness(0.5)",
                  boxShadow: "none",
                  transform: "translate(3px, 3px)",
                }}
                onClick={handleCancel}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                background="green.400"
                boxShadow={`
                  1px 1px 1px gray,
                  2px 2px 1px gray,
                  3px 3px 1px gray,
                  4px 4px 1px gray
                `}
                transition="all 100ms ease-in-out"
                _hover={{
                  filter: "brightness(0.8)",
                }}
                _active={{
                  filter: "brightness(0.5)",
                  boxShadow: "none",
                  transform: "translate(3px, 3px)",
                }}
                isDisabled={!formik.isValid}
              >
                Save
              </Button>
            </Flex>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

