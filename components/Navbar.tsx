"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

const navItems = [
  { name: "Inicio", path: "/" },
  { name: "Sobre Mí", path: "/about" },
  { name: "Proyectos", path: "/projects" },
  { name: "Contacto", path: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Wil.dev</span>
            </Link>
          </div>
          <div className="flex items-center sm:hidden">
            <button onClick={toggleMenu} className="text-gray-500 dark:text-gray-300 focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          <div className="hidden sm:flex sm:space-x-8 items-center">
            {navItems.map((item) => (
              <Link key={item.name} href={item.path}>
                <motion.span
                  className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-700"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed inset-0 z-40 bg-white dark:bg-gray-900 flex flex-col items-center justify-center space-y-8"
        >
          {navItems.map((item) => (
            <Link key={item.name} href={item.path}>
              <motion.span
                className="text-2xl font-medium text-gray-700 dark:text-gray-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleMenu}
              >
                {item.name}
              </motion.span>
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  )
}

