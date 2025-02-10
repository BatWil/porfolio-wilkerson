import { motion } from "framer-motion"
import { FaSun, FaMoon } from "react-icons/fa"

interface ThemeToggleProps {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

export default function ThemeToggle({ isDarkMode, toggleDarkMode }: ThemeToggleProps) {
  return (
    <motion.button
      className="fixed bottom-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
      onClick={toggleDarkMode}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {isDarkMode ? <FaSun className="h-6 w-6" /> : <FaMoon className="h-6 w-6" />}
    </motion.button>
  )
}

