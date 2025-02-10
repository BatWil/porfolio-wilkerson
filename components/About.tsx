"use client"

import { motion } from "framer-motion"
import Layout from "./Layout"
import Image from "next/image"
import { FaReact, FaNodeJs, FaGitAlt, FaFigma, FaHtml5, FaJava, FaPython, FaDocker, FaDownload } from "react-icons/fa"
import { SiNextdotjs, SiJavascript, SiTypescript, SiCss3, SiIonic, SiTailwindcss, SiAngular, SiFirebase, SiPostgresql, SiXml, SiJson, SiBootstrap, SiPostman } from "react-icons/si"

const skills = [
  { category: "Frontend", skills: [
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: SiCss3 },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "React", icon: FaReact },
    { name: "Ionic", icon: SiIonic },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Angular", icon: SiAngular },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Bootstrap", icon: SiBootstrap },
  ]},
  { category: "Backend", skills: [
    { name: "Node.js", icon: FaNodeJs },
    { name: "Java", icon: FaJava },
    { name: "Python", icon: FaPython },
    { name: "Firebase", icon: SiFirebase },
  ]},
  { category: "Manejo de datos", skills: [
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "XML", icon: SiXml },
    { name: "JSON", icon: SiJson },
    { name: "Firebase", icon: SiFirebase },
  ]},
  { category: "Otros", skills: [
    { name: "Git", icon: FaGitAlt },
    { name: "Docker", icon: FaDocker },
    { name: "PostMan api-rest", icon: SiPostman },
  ]},
]

const timelineItems = [
  { year: "2024 - Actualidad", title: "Desarrollador Full Stack", company: "Freelancer" }
]

export default function About() {
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

        <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1 flex items-start">
              <Image src="mapache.jpg" alt="Wilkerson" width={300} height={300}  className="rounded-full mx-auto"  />
            </div>
            <div className="md:col-span-2">
              <motion.p
                className="text-lg mb-6 text-gray-700 dark:text-gray-300 text-justify"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                ¡Hola! Soy <span className="font-semibold text-indigo-600 dark:text-indigo-400">Wilkerson</span>, pero mis amigos me llaman <span className="italic">Wil</span>. Desde que era pequeño, siempre me ha fascinado el mundo de la 
                tecnología, y con el tiempo descubrí que todo lo que me emocionaba tenía un nombre: <span className="font-bold text-indigo-600 dark:text-indigo-400">programación</span>. Lo que realmente me hizo entrar de lleno 
                fue una pregunta que me hizo mucha ilusión responder: <span className="underline">¿cómo se hacen las aplicaciones y las páginas web?</span> Con esa curiosidad en mente, 
                comencé a explorar tecnologías como <span className="font-semibold">Bootstrap</span>, y poco a poco fui adentrándome más en el mundo del desarrollo web.
                Al llegar al bachillerato, pude profundizar en el desarrollo de aplicaciones móviles y web, y desde ese momento no he parado de aprender. 
                Hoy, me considero un <span className="font-semibold text-indigo-600 dark:text-indigo-400">desarrollador full stack</span> con una verdadera pasión por crear soluciones innovadoras tanto para la web como para dispositivos móviles. 
                Me encanta enfrentarme a desafíos complejos porque me permiten descubrir nuevas herramientas y tecnologías.
                Si me preguntas si disfruto lo que hago, mi respuesta es <span className="font-bold text-indigo-600 dark:text-indigo-400">¡absolutamente sí!</span> Cada día es una oportunidad para seguir aprendiendo y mantenerme al tanto de las últimas tendencias en tecnología. 
                ¡Este viaje nunca termina y cada día es una nueva oportunidad para crecer!
              </motion.p>

              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Habilidades Técnicas</h2>
              <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-4">
                {skills.map((category, index) => (
                  <div key={index} className="col-span-4">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{category.category}</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          className="flex flex-col items-center"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: skillIndex * 0.1, duration: 0.5 }}
                        >
                          <div className="w-16 h-16 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full mb-2 transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-600">
                            <skill.icon className="w-8 h-8 text-gray-700 dark:text-gray-300" />
                          </div>
                          <p className="text-sm text-center font-medium text-gray-700 dark:text-gray-300">{skill.name}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 dark:text-white">Experiencia</h2>
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

          <div className="flex justify-center mt-8">
            <a
              href="CV.pdf"
              download
              className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition-colors duration-300"
            >
              <FaDownload className="mr-2" />
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

