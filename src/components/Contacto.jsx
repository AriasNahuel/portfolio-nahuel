import React from 'react';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Contacto = () => {
  return (
    <section className="w-full py-16 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Contacto</h2>

        <p className="text-gray-700 mb-8 text-lg text-justify">
          Si querés comunicarte conmigo, podés hacerlo por correo electrónico o vía WhatsApp. ¡Estoy disponible para nuevos desafíos y colaboraciones!
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href="mailto:ariasnahuel2020@gmail.com"
            className="flex items-center gap-2 bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold px-6 py-3 rounded-md transition"
          >
            <FaEnvelope />
            Enviar correo
          </a>

          <a
            href="https://wa.me/5493535636247" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-100 hover:bg-green-200 text-green-800 font-semibold px-6 py-3 rounded-md transition"
          >
            <FaWhatsapp />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
