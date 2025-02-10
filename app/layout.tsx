import "../styles/globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import Navbar from "../components/Navbar" // Importar el Navbar

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  icon: "mapache.jpg", // Ruta al archivo de icono
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
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}