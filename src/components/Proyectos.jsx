import React from 'react';
import { FaGithub } from 'react-icons/fa';

const proyectos = [
  {
    nombre: 'Gestor de Gimnasios',
    descripcion: 'Aplicación web para gestionar afiliados, planes y pagos.',
    tecnologias: ['React', 'Tailwind', 'Spring Boot'],
    enlace: 'https://github.com/nahuelarias/gimnasio',
  },
  {
    nombre: 'Catálogo de Países',
    descripcion: 'Buscador de países con filtros por región, nombre y más.',
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'API REST'],
    enlace: 'https://github.com/nahuelarias/catalogo-paises',
  },
  // Agregá más proyectos acá
];

const Proyectos = () => {
  return (
    <section className="w-full py-12 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          Proyectos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {proyectos.map((proyecto, index) => (
            <div key={index} className="border rounded-lg shadow-md p-6 transition hover:shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">
                {proyecto.nombre}
                </h3>

                <p className="text-sm sm:text-base text-gray-700 mb-4">
  {proyecto.descripcion}
</p>

              <p className="text-sm text-gray-500 mb-4">
                Tecnologías: {proyecto.tecnologias.join(', ')}
              </p>
              <a
                href={proyecto.enlace}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-violet-700 hover:underline"
              >
                <FaGithub className="mr-2" />
                Ver en GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
