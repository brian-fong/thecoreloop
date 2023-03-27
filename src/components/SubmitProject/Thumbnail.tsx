// Components
import {
  Box,
  Flex,
  Image,
  Text,
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
    image_ref.current.style.borderRadius = "50%";
    image_ref.current.style.border = "1px solid white";
    icon_container_ref.current.style.opacity = "100%";
  }
  function handleMouseLeave() {
    image_ref.current.style.filter = "brightness(1.0)";
    image_ref.current.style.borderRadius = "5px";
    image_ref.current.style.border = "none";
    icon_container_ref.current.style.opacity = "0%";
  }

  // For latest file upload
  useEffect(() => {
    if (files.length > 0) setThumbnail(files[0].preview);
  }, [files]);

  // For latest thumbnail image
  useEffect(() => {
    if (!thumbnail) {
      // Display placeholder for thumbnail
      setContent(
        <Flex
          id="thumbnail-container"
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
            <Text 
              ref={icon_container_ref} 
              position="absolute"
              fontSize="25px"
            >
              📷
            </Text>
          </Flex>
        </Flex>
      )
    } else {
      // Display user-uploaded image for thumbnail
      setContent(
        <Flex
          id="thumbnail-container"
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
            src={thumbnail}
            padding="1px"
            width={width}
            minWidth={width}
            height={height}
            minHeight={height}
            borderRadius="5px"
            // borderRadius="50%"
            transition="all 300ms ease-in-out"
            zIndex={0}
            // onLoad={() => { 
            //   URL.revokeObjectURL(files[0].preview); 
            // }}
          />
        </Flex>
      );
    }
  }, [thumbnail]);

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

