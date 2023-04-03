// Components
import {
  Flex,
  Input,
} from "@chakra-ui/react";
import Head from "next/head";
import { ChangeEvent } from "react";
import Header from "../components/Core/Header";

// Hooks
import { useEffect, useState } from "react";

export default function test() {
  const [data, setData] = useState<string | ArrayBuffer>();

  async function handleFiles(event: ChangeEvent<HTMLInputElement>) {
    // Define files
    const files: FileList = event.target.files!;
    const image_file: File = files[0];

    // Store image file as base64 string
    const reader = new FileReader();
    reader.readAsDataURL(image_file);
    reader.onload = () => setData(reader.result!);
  }

  useEffect(() => {
    async function toBlob() {
      if (data) {
        const b64string: Response  = await fetch(data as RequestInfo);
        const blob: Blob = await b64string.blob();
        console.log("Blob: ", blob);
      }
    }

    if (data) console.log("Base64 String: ", data);
    // toBlob();
  }, [data]);

  return (
    <>
      <Head>
        <title>Submit Project</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="/thecoreloop-favicon.png"
        />
        <meta name="viewport" content="viewport-fit=cover" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Main Container */}
      <Flex
        id="main-container"
        flexDirection="column"
        justifyContent="start"
        alignItems="center"
        position="relative"
        width="100%"
        minHeight="100vh"
        color="white"
      >
        {/* Header */}
        <Header />

        {/* Content Container */}
        <Flex
          id="content-container"
          flexDirection="column"
          justifyContent="start"
          alignItems="center"
          padding="20px 50px 60px"
          width="100%"
          maxWidth="800px"
          height="100%"
        >
          <Input
            type="file"
            margin="0"
            padding="0"
            width="min-content"
            height="min-content"
            border="none"
            multiple={false}
            onChange={handleFiles}
          />
        </Flex>
      </Flex>
    </>
  );
}

