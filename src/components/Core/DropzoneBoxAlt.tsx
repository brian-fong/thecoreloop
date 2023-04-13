// Components
import { Flex } from "@chakra-ui/react";

// Constants, Functions, and Hooks
import { useDropzone } from "react-dropzone";

// Types
import type { DropzoneOptions } from "react-dropzone";

function readFile(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader: FileReader = new FileReader();

    // Define event handlers
    reader.onabort = () => console.log("File reading aborted!");
    reader.onerror = () => console.log("File reading failed!");
    reader.onload = () => resolve(reader.result as string);
    
    // reader.readAsArrayBuffer(file); // Read given file as ArrayBuffer
    // reader.readAsBinaryString(file);  // Read given file as binary
    reader.readAsDataURL(file); // Read given file as Base64 String
  });
}

export default function DropzoneBoxAlt({
  children,
  gallery, setGallery,
}: any) {

  // react-dropzone
  const options: DropzoneOptions = {
    maxFiles: 5-gallery.length,
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles: File[]) => {
      async function init() {
        const gallery_new: any[] = [...gallery];
        for (let i = 0; i < acceptedFiles.length; i++) {
          const file: any = acceptedFiles[i];
          const file_new: any = {
            name: file.path,
            preview: URL.createObjectURL(file),
            data: await readFile(file),
            type: file.type,
          };
          gallery_new.push(file_new);
        }
        setGallery(gallery_new);
      }

      init();
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

