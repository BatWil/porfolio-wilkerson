"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Layout from "./Layout"

const timelineItems = [
  { year: "2023", title: "Senior Full Stack Developer", company: "Tech Innovators Inc." },
  { year: "2021", title: "Full Stack Developer", company: "Web Solutions Ltd." },
  { year: "2019", title: "Frontend Developer", company: "Creative Designs Co." },
  { year: "2017", title: "Junior Web Developer", company: "StartUp Ventures" },
]

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <Layout>
      <motion.div
        ref={ref}
        className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{
          backgroundImage: "url('/placeholder.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/placeholder.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            y: backgroundY,
          }}
        />

        <div className="relative z-10">
          <motion.h1
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Sobre Mí
          </motion.h1>

          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <motion.p
              className="text-lg mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Soy un desarrollador Full Stack apasionado por crear soluciones web y móviles innovadoras. Con experiencia
              en tecnologías front-end y back-end, disfruto enfrentando desafíos complejos y aprendiendo continuamente
              nuevas habilidades para mantenerme al día con las últimas tendencias tecnológicas.
            </motion.p>

            <h2 className="text-2xl font-semibold mb-4">Mi Trayectoria</h2>
            <div className="space-y-8">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <div className="flex flex-col items-center mr-4">
                    <div className="w-px h-full bg-gray-300 dark:bg-gray-700"></div>
                    <div className="w-4 h-4 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>
                  </div>
                  <div>
                    <p className="font-bold">{item.year}</p>
                    <p className="text-lg">{item.title}</p>
                    <p className="text-gray-600 dark:text-gray-400">{item.company}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  )
}

