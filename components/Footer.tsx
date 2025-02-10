import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";


export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/BatWil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
          >
            <span className="sr-only">GitHub</span>
            <FaGithub className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/wilkerson-gomez/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
          >
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin className="h-6 w-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
          >
            <span className="sr-only">Twitter</span>
            <FaXTwitter className="h-6 w-6" />
          </a>
        </div>
        <div className="mt-8 text-center text-gray-400 dark:text-gray-300">
          <p>&copy; {new Date().getFullYear()} Wil.dev. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

