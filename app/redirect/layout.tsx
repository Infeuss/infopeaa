import React from "react"
import "../(main)/globals.css"
import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "InfoPie",
  description: "InfoPie",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        {children}
      </body>
    </html>
  )
}