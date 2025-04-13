import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section
    className="flex flex-col md:flex-row items-center gap-6"
>
  <motion.div
    className="bg-white rounded-xl shadow-md p-8 flex flex-col md:flex-row items-center gap-6 max-w-4xl w-full"
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.3 }}
  >
        {/* Imagen: Asegúrate de colocar la imagen en la carpeta public o usar el path correcto */}
        <motion.img 
          src="/foto-portfolio-1.png" 
          alt="Foto de Nahuel"
          className="w-40 h-40 object-cover rounded-md"
          whileHover={{ rotate: 2 }}
          transition={{ duration: 0.3 }}
        />
        {/* Datos Personales */}
        <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700">Nahuel Arias</h2>
        <p className="text-base sm:text-lg text-violet-700 mt-2">
          Estudiante de Ingeniería en Sistemas de Información &amp; Desarrollador FullStack
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
