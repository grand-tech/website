import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../styles/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import {Header} from "@/components/header"
import {Footer} from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GrandTech Solutions - Software Development Agency",
  description: "We build innovative software solutions that drive business growth and enhance user experiences.",
  manifest: "/manifest/manifest.json",
  // icons: "/favicon.ico",
  authors: {
    name: "Jamie Omondi",
    url: "https://www.linkedin.com/in/jamie-omondi/",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}