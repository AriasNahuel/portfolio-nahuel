import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full p-4 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 flex justify-between items-center shadow-md"
    >
      {/* Logo y Nombre */}
      <div className="flex items-center gap-4">
  <img
    src="/logo-portfolio-1.png"
    alt="Logo Nahuel Arias"
    className="h-12 w-12 object-contain"
  />
  <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">Nahuel Arias</h1>
</div>

      
      {/* Botones de Redes y CV */}
      <div className="flex gap-3 sm:gap-4">
        {/* Botón LinkedIn */}
        <a
          href="https://www.linkedin.com/in/nahuelarias"  // <- Actualizá este URL a tu perfil
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition-colors"
        >
          <FaLinkedin className="text-blue-600" size={20} />
        </a>
        
        {/* Botón Correo */}
        <a
          href="mailto:nahuel@example.com"   // <- Actualizá el mail
          className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition-colors"
        >
          <FaEnvelope className="text-red-600" size={20} />
        </a>
        
        {/* Botón CV */}
        <a
          href="/cv.pdf"   // <- Ubicación del archivo de tu currículum
          download
          className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition-colors"
        >
          <FaFileDownload className="text-green-600" size={20} />
        </a>
      </div>
    </motion.header>
  );
};

export default Header;
