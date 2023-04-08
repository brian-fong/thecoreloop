// Components
import {
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { MdOutlineAddPhotoAlternate as ImageIcon } from "react-icons/md";

// Dependencies
import uuid from "react-uuid";

// Constants, Functions, and Hooks
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

// Types
import type { ReactElement } from "react";
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

export default function DropzoneBox({
  index,
  data, setData,
}: any) {

  // State variables
  const [content, setContent] = useState<ReactElement>();

  // react-dropzone
  const options: DropzoneOptions = {
    maxFiles: 1,
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles: File[]) => {
      async function init() {
        console.log("react-dropzone: onDrop event triggered");

        // Parse file contents
        const file_uploaded: any = acceptedFiles[0];
        const file_data: string = await readFile(file_uploaded);

        // Construct custom file object
        const file_new: any = {
          name: file_uploaded.path,
          preview: URL.createObjectURL(file_uploaded),
          data: file_data,
          type: file_uploaded.type,
        };

        // Insert new file object at the given index
        const data_new: any[] = [...data];
        data_new.splice(index, 1, file_new);
        setData(data_new);
      }

      init();
    },
  };
  const { getRootProps, getInputProps } = useDropzone(options);

  useEffect(() => {
    if (!data[index]?.preview) {
      // Display placeholder for DropzoneBox
      setContent(
        <Flex
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          padding="20px"
          width="600px"
          height="400px"
          cursor="pointer"
          border="1px solid white"
          borderRadius="5px"
          transition="all 300ms ease-in-out"
          _focusVisible={{
            letterSpacing: "2px",
            background: "rgba(0, 0, 0, 0.4)",
          }}
          _hover={{
            letterSpacing: "2px",
            background: "rgba(0, 0, 0, 0.4)",
          }}
        >
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="10px"
            width="100%"
            height="100%"
          >
            <ImageIcon size="30px" />
            <Text>
              🖼️ &lt;gallery_images&gt;
            </Text>
          </Flex>
        </Flex>
      );
    } else {
      // Display user-uploaded image
      // TODO: A/B test between cover vs contain with background
      setContent(
        <Image
          key={uuid()}
          src={data[index]?.preview}
          objectFit="contain"
          height="100%"
          minHeight="400px"
          maxHeight="400px"
          background="rgba(0, 0, 0, 0.4)"
          border="2px solid transparent"
          borderRadius="5px"
          cursor="pointer"
          transition="all 300ms ease-in-out"
          _hover={{
            padding: "10px 15px",
            border: "2px solid white",
          }}
        />
      );
    }
  }, [data, index]);

  return (
    <Flex
      {...getRootProps({ className: "dropzone" })}
      // style={{
      //   minHeight: "400px",
      //   maxHeight: "400px",
      // }}
    >
      <input
        id="image-input"
        {...getInputProps}
        style={{
          position: "absolute",
          width: "0",
          height: "0",
          overflow: "hidden",
        }} 
      />
      {content}
    </Flex>
  );
}

