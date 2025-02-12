"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Layout from "./Layout"
import { Code, Smartphone, Globe, Database, Github, ExternalLink } from "lucide-react" // Importando íconos de Lucide

const projects = [
  { id: 1, category: "web", title: "Control de Asistencia y Rendimiento de Alumnos", description: "Una solución web para monitorear la asistencia y el rendimiento de los estudiantes en tiempo real.", technologies: ["React", "Next.js", "PostgeSQL", "Node.js"], icon: <Globe size={32} />, githubUrl: "https://github.com/BatWil/elexplorador-asistencia-master", liveUrl: "https://elexplorador-asistencia-master-cqpw.vercel.app/" },
  { id: 2, category: "web", title: "Portafolio Web", description: "Un sitio web de portafolio responsivo construido con Next.js para mostrar proyectos y habilidades.", technologies: ["Next.js", "Tailwind CSS", "Vercel", "React"], icon: <Globe size={32} />, githubUrl: "https://github.com/BatWil/porfolio-wilkerson", liveUrl: "" },
  { id: 3, category: "web", title: "Control de Inventario y Venta", description: "Una aplicación web para gestionar el inventario y las ventas de productos en una tienda de ropa. Con actualización en tiempo real", technologies: ["Next.js", "Node.js", "PostgreSQL", "XML", "JSON", "Tailwind CSS"], icon: <Database size={32} />, githubUrl: "", liveUrl: "" },
  { id: 4, category: "mobile", title: "Aplicación de ToDo", description: "Aplicación móvil para agendar recordatorios y gestionar tareas diarias de manera eficiente.", technologies: ["React Native", "Ionic", "PostgreSQL", "TypeScript", "CSS"], icon: <Smartphone size={32} />, githubUrl: "https://github.com/BatWil/todo", liveUrl: "https://todo-wilgs-projects.vercel.app/" },
  { id: 5, category: "mobile", title: "Generador de Versículos Bíblicos", description: "Una app móvil que genera versículos bíblicos aleatorios, consumiendo datos de una API.", technologies: ["React Native", "Ionic", "API REST"], icon: <Smartphone size={32} />, githubUrl: "https://github.com/BatWil/biblica", liveUrl: "https://biblica-iota.vercel.app/" },
]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null)

  const filteredProjects = selectedCategory === "all" ? projects : projects.filter((p) => p.category === selectedCategory)
  const selectedProject = selectedProjectId ? projects.find((p) => p.id === selectedProjectId) : null

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

        {/* Lista de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg cursor-pointer hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedProjectId(project.id)}
            >
              <div className="flex items-center space-x-4">
                <div className="text-primary">{project.icon}</div>
                <h2 className="text-lg font-semibold">{project.title}</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{project.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Modal de Detalles */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProjectId(null)}
            >
              <motion.div
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg max-w-md w-full"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">{selectedProject.title}</h2>
                  <button className="text-gray-500 hover:text-gray-700 dark:hover:text-white" onClick={() => setSelectedProjectId(null)}>
                    ✕
                  </button>
                </div>
                <p className="mt-4 text-gray-700 dark:text-gray-300">{selectedProject.description}</p>
                <h3 className="mt-4 font-semibold">Tecnologías:</h3>
                <ul className="mt-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-400">- {tech}</li>
                  ))}
                </ul>
                <div className="mt-6 flex space-x-4">
                  <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">
                    <Github className="mr-2" size={20} /> GitHub
                  </a>
                  <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition">
                    <ExternalLink className="mr-2" size={20} /> Live
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  )
}
