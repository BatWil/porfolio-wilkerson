"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Layout from "./Layout"
import Image from "next/image"
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaHtml5,
  FaJava,
  FaPython,
  FaDocker,
  FaDownload,
  FaEnvelope,
  FaChevronDown,
  FaChevronUp,
  FaGithub, 
} from "react-icons/fa"
import {
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiCss3,
  SiIonic,
  SiTailwindcss,
  SiAngular,
  SiFirebase,
  SiPostgresql,
  SiXml,
  SiJson,
  SiBootstrap,
  SiPostman,
  SiCapacitor,
} from "react-icons/si"
import Link from "next/link"

import { SiAndroidstudio } from "react-icons/si";
import { SiVercel } from "react-icons/si";


const skills = [
  {
    category: "Frontend",
    subcategories: [
      {
        name: "Lenguajes y Tecnologías",
        skills: [
          { name: "HTML", icon: FaHtml5 },
          { name: "CSS", icon: SiCss3 },
          { name: "JavaScript", icon: SiJavascript },
          { name: "TypeScript", icon: SiTypescript },
        ],
      },
      {
        name: "Frameworks y Librerías",
        skills: [
          { name: "React", icon: FaReact },
          { name: "Next.js", icon: SiNextdotjs },
          { name: "Ionic", icon: SiIonic },
          { name: "Angular", icon: SiAngular },
          { name: "Bootstrap", icon: SiBootstrap },
          { name: "Tailwind CSS", icon: SiTailwindcss },
        ],
      },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Java", icon: FaJava },
      { name: "Python", icon: FaPython },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    category: "Manejo de datos",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "XML", icon: SiXml },
      { name: "JSON", icon: SiJson },
    ],
  },
  {
    category: "Servicios en la Nube",
    skills: [
      { name: "Firebase", icon: SiFirebase },
      { name: "Vercel", icon: SiVercel },
    ],
  },
  {
    category: "Herramientas",
    subcategories: [
      {
        name: "Control de versiones",
        skills: [
          { name: "Git", icon: FaGitAlt },
          { name: "GitHub", icon: FaGithub },
        ],
      },
      {
        name: "Despliegue y Testing",
        skills: [
          { name: "Docker", icon: FaDocker },
          { name: "Postman", icon: SiPostman },
          { name: "Vercel", icon: SiVercel },
        ],
      },
      {
        name: "Desarrollo Móvil",
        skills: [
          { name: "Capacitor", icon: SiCapacitor },
          { name: "Ionic", icon: SiIonic },
          { name: "Android Studio", icon: SiAndroidstudio },
        ],
      },
    ],
  },
]

const timelineItems = [{ year: "2024 - Actualidad", title: "Desarrollador Full Stack", company: "Freelancer" }]

const certifications = [
  {
    name: "Certificación de Desarrollador Web",
    issuer: "FreeCodeCamp",
    year: "2022",
    details: "Esta certificación cubre HTML, CSS, JavaScript, y desarrollo web moderno.",
  },
  {
    name: "Certificación de React",
    issuer: "Udacity",
    year: "2023",
    details: "Curso avanzado de React con hooks, componentes y gestión de estado.",
  },
  {
    name: "Certificación de Node.js",
    issuer: "OpenJS Foundation",
    year: "2023",
    details: "Desarrollo backend con Node.js, Express, y bases de datos.",
  },
]

export default function About() {
  const [showFullText, setShowFullText] = useState(false)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, -50])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <motion.h1
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Sobre Mí
        </motion.h1>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Personal Information Section */}
          <motion.section
            className="relative bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              <motion.div
                className="w-full lg:w-1/3 flex justify-center lg:absolute lg:-left-24 lg:top-1/2 lg:transform lg:-translate-y-1/2"
                style={{ y }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image src="mapache.jpg" alt="Wilkerson" width={300} height={300} className="rounded-full shadow-lg" />
              </motion.div>
              <div className="w-full lg:w-2/3 lg:ml-auto">
                <motion.div
                  className="text-lg mb-6 text-gray-700 dark:text-gray-300 space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <p className="leading-relaxed">
                    ¡Hola! Soy <span className="font-semibold text-indigo-600 dark:text-indigo-400">Wilkerson</span>,
                    pero mis amigos me llaman <span className="italic">Wil</span>. Desde que era pequeño, siempre me ha
                    fascinado el mundo de la tecnología, y con el tiempo descubrí que todo lo que me emocionaba tenía un
                    nombre: <span className="font-bold text-indigo-600 dark:text-indigo-400">Programación</span>.
                  </p>
                  <p className="leading-relaxed">
                    Lo que realmente me hizo entrar de lleno fue una pregunta que me hizo mucha ilusión responder
                    <span className="underline">
                      {" "}
                      ¿Cómo se hacen las aplicaciones y las páginas web que uso todos los días?
                    </span>
                    Con esa curiosidad en mente, comencé a explorar tecnologías como{" "}
                    <span className="font-semibold">Bootstrap</span>, y poco a poco fui adentrándome más en el
                    fascinante mundo del desarrollo web.
                  </p>
                  <AnimatePresence>
                    {showFullText && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="leading-relaxed">
                          Al llegar al bachillerato, pude profundizar en el desarrollo de aplicaciones móviles y web, y
                          desde ese momento no he parado de aprender. Hoy, me considero un
                          <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                            {" "}
                            Desarrollador Full Stack
                          </span>
                          con una verdadera pasión por crear soluciones innovadoras tanto para la web como para
                          dispositivos móviles.
                        </p>
                        <p className="leading-relaxed">
                          Me encanta enfrentarme a desafíos complejos porque me permiten descubrir nuevas herramientas y
                          tecnologías. Es como ser un detective tecnológico, siempre en busca de la mejor solución para
                          cada problema único.
                        </p>
                        <motion.p
                          className="text-xl font-semibold text-gray-800 dark:text-gray-200 text-center mt-6"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                        >
                          ¿Listo para crear algo increíble juntos? ¡Hablemos de tu próximo proyecto!
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                <motion.button
                  className="flex items-center justify-center w-full py-2 mt-4 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 transition-colors duration-300"
                  onClick={() => setShowFullText(!showFullText)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {showFullText ? (
                    <>
                      Leer menos <FaChevronUp className="ml-2" />
                    </>
                  ) : (
                    <>
                      Leer más <FaChevronDown className="ml-2" />
                    </>
                  )}
                </motion.button>

                {/* CV Download and Contact Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row justify-start mt-6 space-y-4 sm:space-y-0 sm:space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <a
                    href="CV.pdf"
                    download
                    className="flex items-center justify-center px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition-colors duration-300"
                  >
                    <FaDownload className="mr-2" />
                    Descargar CV
                  </a>
                    <Link href="/contact" passHref>
                    <span className="flex items-center justify-center px-6 py-3 border-2 border-[#4F46E5] text-[#4F46E5] rounded-lg shadow hover:bg-[#4F46E5] hover:text-white transition-colors duration-300 cursor-pointer">
                      <FaEnvelope className="mr-2" />
                      Contáctame
                    </span>
                    </Link>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Skills Section */}
          <motion.section
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Habilidades Técnicas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((category, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">{category.category}</h3>
                  {category.subcategories ? (
                    category.subcategories.map((subcategory, subIndex) => (
                      <div key={subIndex}>
                        <h4 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-300">{subcategory.name}</h4>
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 mb-4">
                          {subcategory.skills.map((skill, skillIndex) => (
                            <motion.div
                              key={skill.name}
                              className="flex flex-col items-center"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: skillIndex * 0.1, duration: 0.5 }}
                              whileHover={{ scale: 1.1 }}
                            >
                              <div className="w-12 h-12 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full mb-2 transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-600">
                                <skill.icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                              </div>
                              <p className="text-xs text-center font-medium text-gray-700 dark:text-gray-300">{skill.name}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          className="flex flex-col items-center"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: skillIndex * 0.1, duration: 0.5 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <div className="w-12 h-12 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full mb-2 transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-600">
                            <skill.icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                          </div>
                          <p className="text-xs text-center font-medium text-gray-700 dark:text-gray-300">{skill.name}</p>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.section>

          {/* Certifications Section */}
{/*           <motion.section
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Certificaciones</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">{cert.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{cert.issuer}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{cert.year}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{cert.details}</p>
                </motion.div>
              ))}
            </div>
          </motion.section> */}

          {/* Experience Section */}
          <motion.section
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Experiencia</h2>
            <div className="space-y-4">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <div className="flex flex-col items-center mr-4">
                    <div className="w-px h-full bg-gray-300 dark:bg-gray-700"></div>
                    <div className="w-4 h-4 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>
                  </div>
                  <div>
                    <p className="font-bold text-gray-700 dark:text-gray-300">{item.year}</p>
                    <p className="text-lg text-gray-800 dark:text-white">{item.title}</p>
                    <p className="text-gray-600 dark:text-gray-400">{item.company}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </Layout>
  )
}