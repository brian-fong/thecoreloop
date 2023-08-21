import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'

const font = JetBrains_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL("https://thecoreloop.gg/"),
  title: "thecoreloop",
  description: "Next-gen media co-op delivering insights and curating content at the intersection of gaming, social, and consumer tech.",
  icons: {
    icon: "/tcl-favicon.png"
  },
  openGraph: {
    title: "thecoreloop",
    description: "Next-gen media co-op delivering insights and curating content at the intersection of gaming, social, and consumer tech.",
    images: [{
        url: "/tcl-logo-solid-black.png",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "thecoreloop",
    description: "Next-gen media co-op delivering insights and curating content at the intersection of gaming, social, and consumer tech.",
    images: ["/tcl-logo-solid-black.png"],
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
        <Analytics />
      </body>
    </html>
  )
}
