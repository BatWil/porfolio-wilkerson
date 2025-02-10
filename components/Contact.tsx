"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Layout from "./Layout"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [status, setStatus] = useState("")
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const validateForm = () => {
    let valid = true
    let errors = { name: "", email: "", message: "" }

    if (!formState.name) {
      errors.name = "El nombre es obligatorio."
      valid = false
    }

    if (!formState.email) {
      errors.email = "El email es obligatorio."
      valid = false
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      errors.email = "El email no es válido."
      valid = false
    }

    if (!formState.message) {
      errors.message = "El mensaje es obligatorio."
      valid = false
    }

    setErrors(errors)
    return valid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setStatus("Enviando...")

    const response = await fetch("https://formspree.io/f/meoelqgl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    })

    if (response.ok) {
      setStatus("Mensaje enviado!")
      setFormState({ name: "", email: "", message: "" })
    } else {
      setStatus("Error al enviar el mensaje.")
    }
  }

  return (
    <Layout>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contacto
        </motion.h1>
        <div className="max-w-3xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Nombre
              </label>
              <motion.input
                type="text"
                id="name"
                name="name"
                placeholder="Tu nombre"
                required
                value={formState.name}
                onChange={handleChange}
                className="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                whileFocus={{ scale: 1.02 }}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <motion.input
                type="email"
                id="email"
                name="email"
                placeholder="tuemail@ejemplo.com"
                required
                value={formState.email}
                onChange={handleChange}
                className="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                whileFocus={{ scale: 1.02 }}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Mensaje
              </label>
              <motion.textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Escribe tu mensaje aquí..."
                required
                value={formState.message}
                onChange={handleChange}
                className="mt-1 block w-full h-32 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                whileFocus={{ scale: 1.02 }}
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            <div>
              <motion.button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Enviar mensaje
              </motion.button>
            </div>
            {status && <p className="text-center mt-4">{status}</p>}
          </motion.form>
          
          <motion.div
            className="mt-12 flex justify-center space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.a
              href="https://github.com/BatWil"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub className="h-8 w-8 text-gray-600 dark:text-gray-300" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/wilkerson-gomez/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin className="h-8 w-8 text-gray-600 dark:text-gray-300" />
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaXTwitter className="h-8 w-8 text-gray-600 dark:text-gray-300" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}