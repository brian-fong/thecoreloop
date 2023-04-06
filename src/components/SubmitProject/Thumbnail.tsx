// Components
import {
  Box,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { MdOutlineAddAPhoto as AddThumbnailIcon } from "react-icons/md";
import FundraisingIcon from "./FundraisingIcon";

// Types
import { DropzoneOptions } from "react-dropzone";
import { ReactElement } from "react";

// Hook
import { useDropzone } from "react-dropzone";
import { useEffect, useRef, useState } from "react";

export default function Thumbnail({ 
  image_width, image_height,
  fundraising,
  thumbnail, setThumbnail,
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
    onDrop: files_inputted => {
      console.log("Files: ", files_inputted);
      setFiles(files_inputted.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    },
    maxFiles: 1,
  };
  const { getRootProps, getInputProps } = useDropzone(dropzone_opts);

  // Mouse Event Handlers
  function handleMouseOver() {
    image_ref.current.style.filter = "brightness(0.5)";
    // image_ref.current.style.borderRadius = "50%";
    icon_container_ref.current.style.border = "1px solid white";
    icon_container_ref.current.style.opacity = "100%";
  }
  function handleMouseLeave() {
    image_ref.current.style.filter = "brightness(1.0)";
    // image_ref.current.style.borderRadius = "5px";
    icon_container_ref.current.style.border = "1px solid transparent";
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
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width={image_width}
          height={image_height}
          border="1px solid white"
          borderRadius="full"
          cursor="pointer"
          userSelect="none"
          transition="all 200ms ease-in-out"
          _hover={{ 
            letterSpacing: "2px",
            background: "rgba(0, 0, 0, 0.4)",
          }}
        >
          <Text 
            ref={icon_container_ref} 
            fontSize="25px"
            textAlign="center"
          >
            📷
          </Text>
          <Text width="100%" fontSize="14px" textAlign="center">
            &lt;image&gt;
          </Text>
        </Flex>
      )
    } else {
      // Display user-uploaded image for thumbnail
      setContent(
        <Flex
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          cursor="pointer"
          userSelect="none"
          transition="all 300ms ease-in-out"
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          <Flex 
            ref={icon_container_ref} 
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            position="absolute" 
            width="100%"
            height="100%"
            border="1px solid transparent"
            borderRadius="100%"
            opacity="0%"
            transition="opacity 300ms ease-in-out"
            zIndex={1}
          >
            <AddThumbnailIcon color="white" size="28px" />
          </Flex>
          <Image
            ref={image_ref}
            src={thumbnail}
            padding="1px"
            width={image_width}
            minWidth={image_width}
            height={image_height}
            minHeight={image_height}
            borderRadius="full"
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
    <Flex
      id="thumbnail-dropzone" 
      {...getRootProps({ className: "dropzone" })}
      style={{ width: image_width, height: image_height }}
    >
      <input {...getInputProps()} />
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        position="relative"
        width="100%"
        height="100%"
      >
        {content}
        <Box
          visibility={fundraising == "yes" ? "visible" : "hidden"}
          position="absolute"
          top="-5px"
          left="-5px"
          opacity={fundraising == "yes" ? "100%" : "0%"}
          transition="all 200ms ease-in-out"
        >
          <FundraisingIcon style="emoji" />
        </Box>
      </Flex>
    </Flex>
  );
}

