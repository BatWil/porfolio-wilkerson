"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Layout from "./Layout"
import { Code, Github, ExternalLink } from "lucide-react"
import { SiReact, SiNextdotjs, SiPostgresql, SiNodedotjs, SiTailwindcss, SiTypescript, SiIonic, SiJson, SiXml, SiVercel, SiGooglechrome, SiAndroid } from "react-icons/si"
import { MdOutlineWeb } from "react-icons/md";


const techIcons: { [key: string]: JSX.Element } = {
  React: <SiReact size={20} className="w-5 h-5 text-dark-500" />,
  "Next.js": <SiNextdotjs size={20} className="w-5 h-5 text-gray-700 dark:text-gray-300" />,
  PostgreSQL: <SiPostgresql size={20} className="w-5 h-5 text-dark-700" />,
  "Node.js": <SiNodedotjs size={20} className="w-5 h-5 text-dark-600" />,
  "Tailwind CSS": <SiTailwindcss size={20} className="w-5 h-5 text-dark-400" />,
  TypeScript: <SiTypescript size={20} className="w-5 h-5 text-dark-600" />,
  Ionic: <SiIonic size={20} className="w-5 h-5 text-dark-400" />,
  JSON: <SiJson size={20} className="w-5 h-5 text-dark-600" />,
  XML: <SiXml size={20} className="w-5 h-5 text-dark-500" />,
  Vercel: <SiVercel size={20} className="w-5 h-5 text-black dark:text-white" />,
}
const projects = [
  { id: 1, 
    category: "web", 
    title: "Asistencia de Alumnos", 
    description: "Monitoreo de asistencia y rendimiento en tiempo real.", 
    technologies: ["React", "Next.js", "PostgreSQL", "Node.js"], 
    icon: <MdOutlineWeb size={20} className="text-dark-600" />, 
    github: "https://github.com/BatWil/elexplorador-asistencia-master", 
    demo: "https://elexplorador-asistencia-master-cqpw.vercel.app/" },

  { id: 2, 
    category: "web", 
    title: "Portafolio Web", 
    description: "Sitio web personal construido con Next.js y Tailwind CSS.", 
    technologies: ["Next.js", "Tailwind CSS", "Vercel", "React"], icon: <MdOutlineWeb size={20} className="text-dark-600" />, 
    github: "https://github.com/BatWil/porfolio-wilkerson", 
    demo: "" },

  { id: 3, 
    category: "mobile", 
    title: "ToDo App", description: "Gestión de tareas con recordatorios y almacenamiento local.", 
    technologies: ["React", "Ionic", "PostgreSQL", "TypeScript"], 
    icon: <SiAndroid size={20} className="text-dark-600" />, 
    github: "https://github.com/BatWil/todo", 
    demo: "https://todo-r1mt6012s-wilgs-projects.vercel.app/" },

  { id: 4, 
    category: "mobile", 
    title: "Versículos Bíblicos", 
    description: "Genera versículos aleatorios desde una API.", 
    technologies: ["React", "Ionic", "JSON", "API REST"], 
    icon: <SiAndroid size={20} className="text-dark-600" />, 
    github: "https://github.com/BatWil/biblica", 
    demo: "https://biblica-iota.vercel.app/" },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <Layout>
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        {/* Encabezado Mejorado */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
            <h1 className="text-4xl font-bold mt-8 text-[#4F46E5]">Mis Proyectos</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Explora mis desarrollos en aplicaciones web y móviles.</p>
        </motion.div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedProject(project.id)}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">{project.title}</h2>
                <div className="text-primary">{project.icon}</div>
              </div>

              {/* Descripción */}
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

              {/* Tecnologías */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-lg text-sm">
                    {techIcons[tech] || <Code size={16} className="text-gray-500" />}
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>


        {/* Modal de Detalles */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg max-w-md w-full"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="text-xl font-bold">{projects.find((p) => p.id === selectedProject)?.title}</h2>
                <p className="text-gray-700 dark:text-gray-300">{projects.find((p) => p.id === selectedProject)?.description}</p>

                {/* Descripción de Tecnologías */}
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">Tecnologías Utilizadas:</h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    {projects.find((p) => p.id === selectedProject)?.technologies.map((tech, index) => (
                      <li key={index}>
                        <strong>{tech}:</strong> {getTechDescription(tech)}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Más Información */}
                {/* <div className="mt-4">
                  <h3 className="text-lg font-semibold">Más Información:</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Aquí puedes agregar más detalles sobre el proyecto, como los desafíos enfrentados, las soluciones implementadas, y cualquier otra información relevante.
                  </p>
                </div> */}

                {/* Botones */}
                <div className="mt-6 flex space-x-4">
                  <a
                    href={projects.find((p) => p.id === selectedProject)?.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-[#4F46E5] text-white rounded-lg hover:bg-[#3B3A9A] transition"
                  >
                    <Github className="mr-2" size={20} /> GitHub
                  </a>
                  <a
                    href={projects.find((p) => p.id === selectedProject)?.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 border-2 border-[#4F46E5] text-[#4F46E5] rounded-lg hover:bg-[#4F46E5] hover:text-white transition"
                  >
                    <ExternalLink className="mr-2" size={20} /> Demo
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

function getTechDescription(tech: string): string {
  switch (tech) {
    case "React":
      return "Utilizado para construir la interfaz de usuario de manera eficiente y modular.";
    case "Next.js":
      return "Framework de React para aplicaciones web con renderizado del lado del servidor.";
    case "PostgreSQL":
      return "Base de datos relacional utilizada para almacenar datos de manera estructurada.";
    case "Node.js":
      return "Entorno de ejecución para construir el backend del proyecto.";
    case "Tailwind CSS":
      return "Framework de CSS para diseñar interfaces de usuario de manera rápida y eficiente.";
    case "TypeScript":
      return "Superset de JavaScript que añade tipado estático para mejorar la calidad del código.";
    case "Ionic":
      return "Framework para construir aplicaciones móviles híbridas.";
    case "JSON":
      return "Formato de datos utilizado para la comunicación entre el frontend y el backend.";
    case "XML":
      return "Formato de datos utilizado para la configuración y el intercambio de información.";
    case "Vercel":
      return "Plataforma de despliegue utilizada para alojar aplicaciones web.";
    default:
      return "Tecnología utilizada en el proyecto.";
  }
}
