import "../styles/globals.css"
import { Inter } from "next/font/google"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Mi Portafolio",
  description: "Portafolio de desarrollador Full Stack",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'