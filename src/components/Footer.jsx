import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t py-6 mt-12">
      <div className="max-w-4xl mx-auto text-center text-gray-700 text-sm">
        <div className="flex justify-center gap-6 mb-4 text-xl">
          <a href="https://github.com/nahuelarias" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-gray-900 transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/nahuelarias" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-700 transition-colors" />
          </a>
          <a href="mailto:nahuel@example.com">
            <FaEnvelope className="hover:text-red-600 transition-colors" />
          </a>
        </div>

        <p>&copy; {new Date().getFullYear()} Nahuel Arias. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
