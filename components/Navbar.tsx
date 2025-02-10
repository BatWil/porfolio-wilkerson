import Link from "next/link"
import { motion } from "framer-motion"

const navItems = [
  { name: "Inicio", path: "/" },
  { name: "Sobre Mí", path: "/about" },
  { name: "Proyectos", path: "/projects" },
  { name: "Contacto", path: "/contact" },
]

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">FS Dev</span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
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
    </nav>
  )
}

