// Components
import {
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

// Hooks
import { useFormik } from "formik";
import { useRef, useState } from 'react';

// Types
import { FormikErrors, FormikValues } from "formik";

// Formik validation
const char_limit: number = 30;
function validate(values: any) {
  const errors: FormikErrors<FormikValues> = {};

  if (values.studio_name.length > char_limit) {
    errors.studio_name = "Studio name too long!";
  }

  return errors;
}

export default function StudioModal({ 
  isOpen, onClose,
  studio, setStudio,
}: any) {
  // Refs
  const input_ref = useRef<any>();

  // State variables
  const [char_count, setCharCount] = useState<number>(
    studio.name?.length
      ? studio.name?.length
      : 0
  );

  // Formik props
  const formik = useFormik({
    initialValues: {
      studio_name: studio.name,
      studio_link: studio.link,
    },
    validate: validate,
    onSubmit: (values) => {
      // Alert user input
      // alert(JSON.stringify(values, null, 2));

      // Update state variables
      values.studio_name = values.studio_name.trim();
      values.studio_link = values.studio_link.trim();
      setStudio({
        name: values.studio_name,
        link: values.studio_link,
      });
      setCharCount(values.studio_name.length);

      // Close NameModal
      onClose();
    },
  });

  function handleChange_Name(event: any) {
    const value: string = event.currentTarget.value;
    setCharCount(value.length);
    formik.values.studio_name = value;
    formik.handleChange(event);
  }

  function handleChange_Link(event: any) {
    const value: string = event.currentTarget.value.trim();
    formik.values.studio_link = value;
    formik.handleChange(event);
  }

  function handleCancel() {
    // Reset values
    formik.values.studio_name = studio.name;  // Reset name input value
    formik.values.studio_link = studio.link;  // Reset link input value
    formik.setErrors({});                     // Reset errors
    setCharCount(studio.name.length);         // Reset character count
    onClose();                                // Close NameModal
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
          padding="8px 20px 20px"
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
                Studio
              </Heading>
            </Flex>

            <Flex
              flexDirection="column"
              justifyContent="start"
              alignItems="start"
              gap="10px"
              width="100%"
            >
              <Flex justifyContent="space-between" width="100%">
                <FormLabel 
                  htmlFor="studio_name"
                  margin="0"
                  whiteSpace="nowrap"
                >
                  What is the studio building this project?
                </FormLabel>
                <Flex
                  flexDirection="row"
                  justifyContent="center"
                  alignItems="center"
                  gap="2px"
                  paddingRight="10px"
                >
                  <Text 
                    color={char_count <= char_limit
                      ? "white"
                      : "red"
                    } 
                    fontSize="16px"
                    transition="color 200ms ease-in-out"
                  >
                    {char_count}
                  </Text>
                  <Text fontSize="18px">/</Text>
                  <Text fontSize="16px">{char_limit}</Text>
                </Flex>
              </Flex>
              <Input
                id="studio_name"
                ref={input_ref}
                type="text"
                padding="4px 8px"
                width="100%"
                background="rgba(0, 0, 0, 0.2)"
                border="2px solid rgba(255, 255, 255, 0.7)"
                value={formik.values.studio_name}
                autoComplete="off"
                spellCheck="false"
                isInvalid={formik.errors.studio_name ? true : false}
                onChange={handleChange_Name}
                onFocus={(event: any) => { event.currentTarget.select(); }}
                transition="all 200ms ease-in-out"
                placeholder="thecoreloop labs"
                _placeholder={{
                  fontStyle: "italic",
                }}
                _hover={{}}
                _focusVisible={{}}
              />
            </Flex>

            <Flex
              flexDirection="column"
              justifyContent="start"
              alignItems="start"
              gap="10px"
              marginTop="30px"
              width="100%"
            >
              <Flex justifyContent="space-between" width="100%">
                <FormLabel 
                  htmlFor="studio_link"
                  margin="0"
                  whiteSpace="nowrap"
                >
                  Link to this studio's website
                </FormLabel>
              </Flex>
              <Input
                id="studio_link"
                type="url"
                padding="4px 8px"
                width="100%"
                background="rgba(0, 0, 0, 0.2)"
                border="2px solid rgba(255, 255, 255, 0.7)"
                value={formik.values.studio_link}
                autoComplete="off"
                spellCheck="false"
                isInvalid={formik.errors.studio_link ? true : false}
                onChange={handleChange_Link}
                onFocus={(event: any) => { event.currentTarget.select(); }}
                transition="all 200ms ease-in-out"
                placeholder="https://thecoreloop.gg/"
                _placeholder={{
                  fontStyle: "italic",
                }}
                _hover={{}}
                _focusVisible={{}}
              />
            </Flex>

            <Flex
              flexDirection="row"
              justifyContent="end"
              alignItems="center"
              marginTop="10px"
              width="100%"
              minHeight="21px"
            >
              <Text
                marginRight="10px"
                color="red.300"
                opacity={formik.errors.studio_name ? "100%" : "0%"}
                transition="all 200ms ease-in-out"
              >
                {formik.errors.studio_name as string}
              </Text>
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


