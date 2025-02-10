"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Layout from "./Layout"

const projects = [
  {
    id: 1,
    category: "web",
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React and Node.js",
  },
  {
    id: 2,
    category: "mobile",
    title: "Task Management App",
    description: "A mobile app for task management using React Native",
  },
  {
    id: 3,
    category: "web",
    title: "Portfolio Website",
    description: "A responsive portfolio website built with Next.js",
  },
  {
    id: 4,
    category: "web",
    title: "Weather Dashboard",
    description: "A weather dashboard using React and a weather API",
  },
  {
    id: 5,
    category: "mobile",
    title: "Fitness Tracker",
    description: "A mobile app for tracking workouts and nutrition",
  },
  {
    id: 6,
    category: "web",
    title: "Blog Platform",
    description: "A full-stack blog platform with user authentication",
  },
]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <Layout>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Mis Proyectos
        </motion.h1>

        <div className="flex justify-center mb-8">
          <motion.button
            className={`mx-2 px-4 py-2 rounded-full ${selectedCategory === "all" ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-800"}`}
            onClick={() => setSelectedCategory("all")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Todos
          </motion.button>
          <motion.button
            className={`mx-2 px-4 py-2 rounded-full ${selectedCategory === "web" ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-800"}`}
            onClick={() => setSelectedCategory("web")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Web
          </motion.button>
          <motion.button
            className={`mx-2 px-4 py-2 rounded-full ${selectedCategory === "mobile" ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-800"}`}
            onClick={() => setSelectedCategory("mobile")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Móvil
          </motion.button>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 p-8 rounded-lg max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{selectedProject.description}</p>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded" onClick={() => setSelectedProject(null)}>
                Cerrar
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </Layout>
  )
}

