import React from 'react';
import { motion } from 'framer-motion';

const SobreMi = () => {
  return (
    <section className="w-full py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Sobre mí
        </motion.h2>

        <motion.p
  className="text-gray-700 text-lg leading-relaxed text-justify"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ delay: 0.2, duration: 0.6 }}
>
  Soy estudiante de Ingeniería en Sistemas de Información y apasionado por la tecnología. Me especializo en desarrollo Full Stack, con enfoque en la calidad del código y las buenas prácticas. Además, cuento con experiencia en herramientas de gestión como Jira y Trello, y siempre estoy en búsqueda de nuevos desafíos que me permitan seguir creciendo profesionalmente.
</motion.p>
      </div>
    </section>
  );
};

export default SobreMi;
