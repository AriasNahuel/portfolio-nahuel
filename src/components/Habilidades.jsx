import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaBitbucket,
  FaTrello,
  FaJsSquare,
} from 'react-icons/fa';
import { SiJquery, SiMysql, SiTypescript, SiJira, SiExpress } from 'react-icons/si';

const habilidades = [
  { nombre: 'HTML', icono: <FaHtml5 className="text-orange-600" /> },
  { nombre: 'CSS', icono: <FaCss3Alt className="text-blue-600" /> },
  { nombre: 'Bootstrap', icono: <FaBootstrap className="text-purple-700" /> },
  { nombre: 'JQuery', icono: <SiJquery className="text-blue-400" /> },
  { nombre: 'React', icono: <FaReact className="text-cyan-400" /> },
  { nombre: 'Node.js', icono: <FaNodeJs className="text-green-600" /> },
  { nombre: 'Express', icono: <SiExpress className="text-gray-700" /> },
  { nombre: 'MySQL', icono: <SiMysql className="text-blue-500" /> },
  { nombre: 'JavaScript', icono: <FaJsSquare className="text-yellow-400" /> },
  { nombre: 'TypeScript', icono: <SiTypescript className="text-blue-600" /> },
  { nombre: 'Git', icono: <FaGitAlt className="text-orange-500" /> },
  { nombre: 'GitHub', icono: <FaGithub className="text-gray-800" /> },
  { nombre: 'Bitbucket', icono: <FaBitbucket className="text-blue-700" /> },
  { nombre: 'Jira', icono: <SiJira className="text-blue-600" /> },
  { nombre: 'Trello', icono: <FaTrello className="text-blue-500" /> },
];

const Habilidades = () => {
  return (
    <section className="w-full py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          Habilidades
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center">
          {habilidades.map((hab, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2 hover:scale-105 transition-transform">
              <div className="text-5xl">{hab.icono}</div>
              <p className="text-gray-700 text-sm">{hab.nombre}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Habilidades;
