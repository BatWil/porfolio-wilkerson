"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Navbar from "./Navbar"
import Footer from "./Footer"
import ThemeToggle from "./ThemeToggle"
import type React from "react" // Added import for React

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true"
    setIsDarkMode(isDark)
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    localStorage.setItem("darkMode", (!isDarkMode).toString())
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={Math.random()} // This ensures the animation triggers on every page change
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <ThemeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Footer />
    </div>
  )
}

