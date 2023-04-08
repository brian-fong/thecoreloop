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
} from '@chakra-ui/react'
import GenresPopover from './GenresPopover';

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

export default function GenresModal({
  genres, setGenres,
  genres_selected, setGenresSelected,
  isOpen, onClose,
}: any) {
  // Formik props
  const formik = useFormik({
    initialValues: {
      genres_selected: genres,
    },
    validate: validate,
    onSubmit: (values) => {
      // Update genres state variable
      setGenres(values.genres_selected);

      // Close NameModal
      onClose();
    },
  });

  function handleCancel() {
    // Reset values
    formik.setErrors({});               // Reset errors
    formik.values.genres_selected = genres  // Reset selected genres (formik)
    setGenresSelected(genres);              // Reset selected genres (state)
    onClose();                          // Close NameModal
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
                Select 1-3 genres to best describe this project's game
              </FormLabel>
              <Text
                color="gray.400"
                lineHeight="5"
              >
                NOTE: Only the FIRST genre is displayed on the Discovery View
              </Text>

              <GenresPopover
                formik={formik}
                genres={genres} setGenres={setGenres}
                genres_selected={genres_selected} 
                setGenresSelected={setGenresSelected}
              />
            </Flex>

            <Flex
              flexDirection="row"
              justifyContent="end"
              alignItems="center"
              gap="30px"
              marginTop="30px"
              width="100%"
            >
              <Button
                variant="standard"
                color="white"
                fontWeight="bold"
                background="red.400"
                onClick={handleCancel}
              >
                CANCEL
              </Button>
              <Button
                type="submit"
                variant="standard"
                color="white"
                fontWeight="bold"
                background="green.400"
                isDisabled={!formik.isValid}
              >
                SAVE
              </Button>
            </Flex>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

