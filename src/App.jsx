import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Proyectos from './components/Proyectos';
import Habilidades from './components/Habilidades';
import SobreMi from './components/SobreMi';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Proyectos />
      <Habilidades />
      <SobreMi />
      <Contacto />
      <Footer />
      <ScrollToTop />
    </div>
  );
}


export default App;