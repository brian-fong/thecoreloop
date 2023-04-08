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

export default function GalleryModal({
  isOpen, onClose,
  gallery, setGallery,
}: any) {

  function handleCancel() {
    onClose();
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
              Gallery
            </Heading>
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
            >
              Save
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

