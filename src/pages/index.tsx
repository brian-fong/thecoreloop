// index.tsx

import Head from "next/head";
import App from "./_app";

export default function index() {
  return (
    <>
      <Head>
        <title>thecoreloop</title>
        <meta
          name="description"
          content="Gaming-related news aggregator at the intersection of Web2 and Web3, curated by @0xkapital_k"
        />
      </Head>

      <App />
    </>
  );
}

