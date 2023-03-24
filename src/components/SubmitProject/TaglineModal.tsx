// Components
import {
  Button,
  Flex,
  FormLabel,
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  Textarea,
} from '@chakra-ui/react'

// Hooks
import { useFormik } from "formik";
import { useRef, useState } from 'react';

// Types
import { FormikErrors, FormikValues } from "formik";

// Formik validation
const char_limit: number = 60;
function validate(values: any) {
  const errors: FormikErrors<FormikValues> = {};

  if (values.tagline.length > char_limit) {
    errors.tagline = "Tagline too long!";
  }

  return errors;
}

export default function TaglineModal({
  tagline,
  setTagline,
  isOpen,
  onClose,
}: any) {
  // Refs
  const input_ref = useRef<any>();

  // State variables
  const [char_count, setCharCount] = useState<number>(0);

  // Formik props
  const formik = useFormik({
    initialValues: {
      tagline: tagline,
    },
    validate: validate,
    onSubmit: (values) => {
      // Alert user input
      // alert(JSON.stringify(values, null, 2));

      // Update state variables
      values.tagline = values.tagline.trim(); // Remove surrounding whitespace
      setTagline(values.tagline);
      setCharCount(values.tagline.length);

      // Close NameModal
      onClose();
    },
  });

  function handleChange(event: any) {
    const value: string = event.currentTarget.value.trim();
    setCharCount(value.length);
    formik.values.tagline = value;
    formik.handleChange(event);
  }

  function handleCancel() {
    // Reset values
    formik.values.tagline = tagline;    // Reset input field value
    formik.setErrors({});               // Reset errors
    setCharCount(tagline.length);       // Reset character count
    onClose();                          // Close NameModal
  }

  return (
    <Modal isOpen={isOpen} onClose={handleCancel} isCentered>
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
                Project Tagline
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
                  htmlFor="tagline" 
                  margin="0"
                  whiteSpace="nowrap"
                >
                  Provide a tagline for this project
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
              <Textarea
                id="tagline"
                ref={input_ref}
                placeholder="Social discovery platform at the intersection of gaming and web3."
                _placeholder={{
                  fontStyle: "italic",
                }}
                minHeight="64px"
                background="rgba(0, 0, 0, 0.1)"
                border="2px solid rgba(255, 255, 255, 0.7)"
                value={formik.values.tagline}
                autoComplete="off"
                spellCheck="false"
                isInvalid={formik.errors.tagline ? true : false}
                onChange={handleChange}
                onFocus={(event) => { event.currentTarget.select(); }}
                transition="all 200ms ease-in-out"
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
                opacity={formik.errors.tagline ? "100%" : "0%"}
                transition="all 200ms ease-in-out"
              >
                {formik.errors.tagline as string}
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
                  boxShadow: `
                    1px 1px 1px gray,
                    2px 2px 1px gray
                  `,
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
                  boxShadow: `
                    1px 1px 1px gray,
                    2px 2px 1px gray
                  `,
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

