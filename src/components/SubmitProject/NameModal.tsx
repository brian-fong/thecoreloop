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
const char_limit: number = 25;
function validate(values: any) {
  const errors: FormikErrors<FormikValues> = {};

  if (values.name.length > char_limit) {
    errors.name = "Name is too long!";
  }

  return errors;
}

export default function NameModal({ name, setName, isOpen, onClose }: any) {
  // Refs
  const input_ref = useRef<any>();

  // State variables
  const [char_count, setCharCount] = useState<number>(0);

  // Formik props
  const formik = useFormik({
    initialValues: {
      name: name,
    },
    validate: validate,
    onSubmit: (values) => {
      // Update state variables
      values.name = values.name.trim(); // Remove surrounding whitespace
      setName(values.name);
      setCharCount(values.name.length);

      // Close NameModal
      onClose();
    },
  });

  function handleChange(event: any) {
    const value: string = event.currentTarget.value.trim();
    setCharCount(value.length);
    formik.values.name = value;
    formik.handleChange(event);
  }

  function handleCancel() {
    // Reset values
    formik.values.name = name;  // Reset input field value
    formik.setErrors({});       // Reset errors
    setCharCount(name.length);  // Reset character count
    onClose();                  // Close NameModal
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
                Project Name
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
                  htmlFor="name" 
                  margin="0"
                  whiteSpace="nowrap"
                >
                  What is the project called?
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
                      : "red.400"
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
                id="name"
                ref={input_ref}
                placeholder="thecoreloop"
                _placeholder={{
                  fontStyle: "italic",
                }}
                background="rgba(0, 0, 0, 0.2)"
                border="2px solid rgba(255, 255, 255, 0.7)"
                value={formik.values.name}
                autoComplete="off"
                spellCheck="false"
                isInvalid={formik.errors.name ? true : false}
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
                color="red.400"
                opacity={formik.errors.name ? "100%" : "0%"}
                transition="all 300ms ease-in-out"
              >
                {formik.errors.name as string}
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

