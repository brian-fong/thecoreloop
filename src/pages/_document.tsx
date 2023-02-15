import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        { /* Metadata */ }
        <meta charSet="UTF-8" />
        <meta 
          property="title" 
          content="thecoreloop" 
        />
        <meta 
          property="og:title" 
          content="thecoreloop" 
        />
        <meta 
          name="description" 
          content="Gaming aggregator at the intersection of Web2 and Web3, curated by @0xkapital_k" 
        />
        <meta 
          name="og:description" 
          content="Gaming aggregator at the intersection of Web2 and Web3, curated by @0xkapital_k" 
        />
        <meta 
          property="type" 
          content="blog" 
        />
        <meta 
          property="og:type" 
          content="blog" 
        />
        <meta
          property="image"
          content="https://i.imgur.com/OXjCetQ.png"
        />
        <meta
          property="og:image"
          content="https://i.imgur.com/OXjCetQ.png"
        />

        { /* Google Fonts */ }
        <link 
          rel="preconnect" 
          href="https://fonts.googleapis.com" 
        />
        <link 
          rel="preconnect" 
          href="https://fonts.gstatic.com" 
          crossOrigin="true" 
        />
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,800;1,400&family=Urbanist&display=swap" 
        />
        <link 
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400&display=swap"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

