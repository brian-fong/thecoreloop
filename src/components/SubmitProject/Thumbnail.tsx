// Components
import {
  Box,
  Flex,
  Image,
} from "@chakra-ui/react";
import {
  MdOutlineAddAPhoto as AddThumbnailIcon,
} from "react-icons/md";

// Types
import { DropzoneOptions } from "react-dropzone";
import { ReactElement } from "react";

// Hook
import { useDropzone } from "react-dropzone";
import { useEffect, useRef, useState } from "react";

export default function Thumbnail({ 
  width,
  height,
  thumbnail,
  setThumbnail
}: any) {
  // Ref
  const image_ref = useRef<any>();
  const icon_container_ref = useRef<any>();

  // State Variables
  const [content, setContent] = useState<ReactElement>();
  const [files, setFiles] = useState<any[]>([]);

  // React-dropzone Props
  const dropzone_opts: DropzoneOptions = {
    accept: {
      "image/*": [],
    },
    onDrop: files => {
      setFiles(files.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    },
    maxFiles: 1,
  };
  const { getRootProps, getInputProps } = useDropzone(dropzone_opts);

  // Mouse Event Handlers
  function handleMouseOver() {
    image_ref.current.style.filter = "brightness(0.5)";
    icon_container_ref.current.style.opacity = "100%";
  }
  function handleMouseLeave() {
    image_ref.current.style.filter = "brightness(1.0)";
    icon_container_ref.current.style.opacity = "0%";
  }

  useEffect(() => {

    if (files.length == 0) {
      // Update state variable
      setThumbnail();

      // Display placeholder for thumbnail
      setContent(
        <Flex
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          width="100%"
          height="100%"
          border="1px solid white"
          borderRadius="5px"
          cursor="pointer"
          userSelect="none"
          transition="background 300ms ease-in-out"
          _hover={{ 
            background: "rgba(0, 0, 0, 0.4)",
          }}
        >
          <Flex
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            width={width}
            height={height}
            border="1px dashed white"
            borderRadius="50%"
          >
            <Box ref={icon_container_ref} position="absolute">
              <AddThumbnailIcon color="white" size="28px" />
            </Box>
          </Flex>
        </Flex>
      )
    } else {
      // Update state variable
      setThumbnail(files[0]);

      // Display user-uploaded image for thumbnail
      setContent(
        <Flex
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          border="1px solid transparent"
          cursor="pointer"
          userSelect="none"
          transition="all 300ms ease-in-out"
          _hover={{
            padding: "0",
            background: "rgba(0, 0, 0, 0.4)",
            border: "1px solid white",
            borderRadius: "5px",
          }}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          <Box 
            ref={icon_container_ref} 
            position="absolute" 
            opacity="0%"
            transition="opacity 300ms ease-in-out"
            zIndex={1}
          >
            <AddThumbnailIcon color="white" size="28px" />
          </Box>
          <Image
            ref={image_ref}
            src={files[0].preview}
            padding="5px"
            width={width}
            minWidth={width}
            height={height}
            minHeight={height}
            borderRadius="5px"
            transition="filter 300ms ease-in-out"
            zIndex={0}
            onLoad={() => { 
              URL.revokeObjectURL(files[0].preview); 
            }}
          />
        </Flex>
      );
    }
  }, [files]);

  useEffect(() => {
    // Executes on component unmount
    return () => {
      files.forEach(file => URL.revokeObjectURL(file.preview));
    }
  }, []);

  return (
    <div 
      id="thumbnail-dropzone" 
      {...getRootProps({ className: "dropzone" })}
      style={{
        width: width,
        height: height,
      }}
    >
      <input {...getInputProps()} />
      {content}
    </div>
  );
}
