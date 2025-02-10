"use client"

import { motion } from "framer-motion"
import Layout from "./Layout"
import Link from "next/link"

export default function Home() {
  return (
    <Layout>
      <motion.div
        className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl sm:text-6xl font-bold text-center mb-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Bienvenido a mi <span className="text-indigo-600 dark:text-indigo-400">Portafolio</span>
        </motion.h1>

        <motion.p
          className="text-xl text-center mb-8 max-w-2xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Soy un desarrollador Full Stack especializado en crear experiencias web y móviles excepcionales. Con
          experiencia en React, Node.js y tecnologías móviles, transformo ideas en aplicaciones robustas y escalables.
        </motion.p>

        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6, duration: 0.5 }}>
          <Link href="/projects">
            <motion.button
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver mis proyectos
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </Layout>
  )
}

