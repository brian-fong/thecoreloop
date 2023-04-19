// Components
import { Flex } from "@chakra-ui/react";

// Constants, Functions, and Hooks
import { useDropzone } from "react-dropzone";

// Types
import type { DropzoneOptions } from "react-dropzone";

export default function DropzoneBoxV2({
  children,
  handleOnDrop,
  maxFiles,
}: any) {

  // react-dropzone
  const options: DropzoneOptions = {
    maxFiles: maxFiles,
    accept: {
      "image/*": [],
    },
    onDrop: (files: File[]) => {
      if (files.length > 0) handleOnDrop(files);
      else console.error("Error with Gallery input: exceeded 5-image maximum!")
    },
  };
  const { getRootProps, getInputProps } = useDropzone(options);

  return (
    <Flex
      {...getRootProps({ className: "dropzone" })}
      position="relative"
      cursor="pointer"
    >
      <input
        {...getInputProps()}
        id="image-input"
        style={{
          position: "absolute",
          width: "0",
          height: "0",
          overflow: "hidden",
        }} 
      />
      {children}
    </Flex>
  );
}

