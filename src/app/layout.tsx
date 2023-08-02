import './globals.css'
import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'

const font = JetBrains_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "thecoreloop",
  description: "Next-gen media co-op delivering insights and curating content at the intersection of gaming, social, and consumer tech.",
  icons: { icon: "/thecoreloop-favicon.png" },
  openGraph: {
    title: "thecoreloop",
    description: "Next-gen media co-op delivering insights and curating content at the intersection of gaming, social, and consumer tech.",
    images: [
      {
        url: "https://raw.githubusercontent.com/0xfrian/thecoreloop/dev/public/thecoreloop-logo.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "thecoreloop",
    description: "Next-gen media co-op delivering insights and curating content at the intersection of gaming, social, and consumer tech.",
    images: ["https://raw.githubusercontent.com/0xfrian/thecoreloop/dev/public/thecoreloop-logo.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
      </body>
    </html>
  )
}