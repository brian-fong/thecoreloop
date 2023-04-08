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
const char_limit: number = 300;
function validate(values: any) {
  const errors: FormikErrors<FormikValues> = {};

  if (values.description.length > char_limit) {
    errors.description = "Description too long!";
  }

  return errors;
}

export default function DescriptionModal({ 
  isOpen, onClose,
  description, setDescription,
}: any) {
  // Refs
  const input_ref = useRef<any>();

  // State variables
  const [char_count, setCharCount] = useState<number>(description.length);

  // Formik props
  const formik = useFormik({
    initialValues: {
      description: description,
    },
    validate: validate,
    onSubmit: (values) => {
      // Alert user input
      // alert(JSON.stringify(values, null, 2));

      // Update state variables
      values.description = values.description.trim(); // Remove surrounding whitespace
      setDescription(values.description);
      setCharCount(values.description.length);

      // Close NameModal
      onClose();
    },
  });

  function handleChange(event: any) {
    const value: string = event.currentTarget.value.trim();
    setCharCount(value.length);
    formik.values.description = value;
    formik.handleChange(event);
  }

  function handleCancel() {
    // Reset values
    formik.values.description = description;  // Reset input field value
    formik.setErrors({});                     // Reset errors
    setCharCount(description.length);         // Reset character count
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
                Description
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
                  htmlFor="description" 
                  margin="0"
                  whiteSpace="nowrap"
                >
                  Provide a description for this project
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
                id="description"
                ref={input_ref}
                placeholder="Social discovery platform at the intersection of gaming and web3."
                _placeholder={{
                  fontStyle: "italic",
                }}
                minHeight="150px"
                background="rgba(0, 0, 0, 0.1)"
                border="2px solid rgba(255, 255, 255, 0.7)"
                value={formik.values.description}
                autoComplete="off"
                spellCheck="false"
                isInvalid={formik.errors.description ? true : false}
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
                opacity={formik.errors.description ? "100%" : "0%"}
                transition="all 200ms ease-in-out"
              >
                {formik.errors.description as string}
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

