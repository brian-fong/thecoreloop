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
import GenresPopover from './GenresPopover';

// Hooks
import { useFormik } from "formik";
import { useRef, useState } from 'react';

// Types
import { FormikErrors, FormikValues } from "formik";

// Formik validation
const char_limit: number = 30;
function validate(values: any) {
  const errors: FormikErrors<FormikValues> = {};

  if (values.other_blockchain.length > char_limit) {
    errors.other_blockchain = "Genre is too long!";
  }

  return errors;
}

export default function GenresModal({
  blockchain, setBlockchain,
  blockchain_selected, setBlockchainSelected,
  isOpen, onClose,
}: any) {
  // Refs
  const input_ref = useRef<any>();

  // State variables
  const [char_count, setCharCount] = useState<number>(0);

  // Formik props
  const formik = useFormik({
    initialValues: {
      other_blockchain: "",
    },
    validate: validate,
    onSubmit: (values) => {
      // If "Other" selected, then update blockchain state variable
      if (blockchain_selected == "Other") {
        values.other_blockchain = values.other_blockchain.trim(); // Remove surrounding whitespace
        setBlockchain(values.other_blockchain);
        setCharCount(values.other_blockchain.length);
      } else {
        setBlockchain(blockchain_selected);
      }

      // Close NameModal
      onClose();
    },
  });

  function handleChange(event: any) {
    const value: string = event.currentTarget.value.trim();
    setCharCount(value.length);
    formik.values.other_blockchain = value;
    formik.handleChange(event);
  }

  function handleCancel() {
    // Reset values
    formik.values.other_blockchain = blockchain;  // Reset input field value
    formik.setErrors({});                         // Reset errors
    setCharCount(blockchain.length);              // Reset character count
    onClose();                                    // Close NameModal
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
                Genres
              </Heading>
            </Flex>

            <Flex
              flexDirection="column"
              justifyContent="start"
              alignItems="start"
              gap="10px"
              width="100%"
            >
              <FormLabel
                htmlFor="blockchain-name"
                margin="0"
                whiteSpace="nowrap"
              >
                What genre(s) apply to this project's game?
              </FormLabel>

              <GenresPopover
                blockchain={blockchain}
                setBlockchain={setBlockchain}
                blockchain_selected={blockchain_selected}
                setBlockchainSelected={setBlockchainSelected}
              />

              <Flex
                id="other-blockchain-container"
                flexDirection="column"
                justifyContent="start"
                alignItems="start"
                width="100%"
                maxHeight={blockchain_selected == "Other" ? "100px" : "0"}
                overflow="hidden"
                transition="max-height 300ms ease-in-out"
              >
                <Flex
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                  marginTop="20px"
                  width="100%"
                >
                  <FormLabel htmlFor="other_blockchain" fontSize="16px">
                    Blockchain Name:
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
                  id="other_blockchain"
                  name="other_blockchain"
                  ref={input_ref}
                  padding="4px 8px"
                  width="100%"
                  background="rgba(0, 0, 0, 0.2)"
                  border="2px solid rgba(255, 255, 255, 0.7)"
                  value={formik.values.other_blockchain}
                  autoComplete="off"
                  spellCheck="false"
                  isInvalid={formik.errors.other_blockchain ? true : false}
                  onChange={handleChange}
                  onFocus={(event) => event.currentTarget.select()}
                  transition="all 200ms ease-in-out"
                  placeholder=""
                  _placeholder={{
                    fontStyle: "italic",
                  }}
                  _hover={{}}
                  _focusVisible={{}}
                />
              </Flex>
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
                opacity={formik.errors.other_blockchain ? "100%" : "0%"}
                transition="all 300ms ease-in-out"
              >
                {formik.errors.other_blockchain as string}
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

