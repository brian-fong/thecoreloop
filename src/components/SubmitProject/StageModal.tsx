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
import StagePopover from "./StagePopover";

export default function StageModal({
  stage, setStage,
  stage_selected, setStageSelected,
  isOpen, onClose,
}: any) {

  function handleCancel() {
    setStageSelected(stage) // Reset selected state to official stage
    onClose();              // Close NameModal
  }

  function handleSave() {
    setStage(stage_selected); // Update official stage state variable
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
                Development Stage
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
                What stage of development is this project in?
              </FormLabel>

              <StagePopover
                stage={stage} setStage={setStage}
                stage_selected={stage_selected}
                setStageSelected={setStageSelected}
              />
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
              onClick={handleSave}
            >
              Save
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

