import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"

import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Axion Primus - AI-Powered Crypto Risk Agent",
  description:
    "Axion Primus is an AI risk agent that detects rugs, honeypots, and manipulation before you invest in crypto tokens.",
}

export const viewport: Viewport = {
  themeColor: "#1a2744",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
