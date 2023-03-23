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
} from '@chakra-ui/react'

// Hooks
import { useFormik } from "formik";

export default function NameModal({ name, setName, isOpen, onClose }: any) {

  const formik = useFormik({
    initialValues: {
      name: name,
    },
    onSubmit: (values) => {
      // Alert user input
      // alert(JSON.stringify(values, null, 2));

      // Update state variable: name
      setName(values.name.trim());

      // Close NameModal
      onClose();
    },
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
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
          width="100%"
          border="2px solid gray"
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
              flexDirection="row"
              justifyContent="start"
              alignItems="center"
              gap="20px"
              width="100%"
            >
              <FormLabel 
                htmlFor="name" 
                margin="0"
                whiteSpace="nowrap"
              >
                Name
              </FormLabel>
              <Input
                id="name"
                placeholder="MyProject"
                _placeholder={{
                  fontStyle: "italic",
                }}
                border="2px solid gray"
                autoComplete="off"
                {...formik.getFieldProps("name")}
              />
            </Flex>

            <Flex
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              gap="30px"
              marginTop="30px"
              width="100%"
            >
              <Button
                background="tcl_red"
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
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                background="tcl_green"
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

