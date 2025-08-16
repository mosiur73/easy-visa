import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { Navbar } from "@/components/Navbar"
import { AppFooter } from "@/components/Footer"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "VisaPortal - Professional Visa Services",
  description: "Your trusted partner for visa services. Simplifying visa applications with professional guidance.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-theme="light" style={{ colorScheme: "light" }}>
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <ThemeProvider>
        <Navbar></Navbar>
        {children}
        <AppFooter></AppFooter>
        </ThemeProvider>
        </body>
    </html>
  )
}
