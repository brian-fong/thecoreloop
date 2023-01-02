import NextHead from "next/head"

export default function Head() {
  return (
    <NextHead>
      <title>thecoreloop</title>
      <meta charSet="UTF-8" />
      <meta property="title" content="thecoreloop" />
      <meta property="og:title" content="thecoreloop" />
      <meta name="description" content="Gaming aggregator at the intersection of Web2 and Web3, curated by @0xkapital_k" />
      <meta name="og:description" content="Gaming aggregator at the intersection of Web2 and Web3, curated by @0xkapital_k" />
      <meta property="type" content="blog" />
      <meta property="og:type" content="blog" />
      <meta property="image" content="https://i.imgur.com/sa9WFVT.png" />
      <meta property="og:image" content="https://i.imgur.com/sa9WFVT.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="/thecoreloop-favicon.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,800;1,400&family=Urbanist&display=swap" rel="stylesheet" />
    </NextHead>
  );
}
