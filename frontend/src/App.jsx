import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cabecera from './componentes/Cabecera';
import Educacion from './componentes/Educacion';
import Proyectos from './componentes/Proyectos';
import Contacto from './componentes/Contacto';
import Perfil from './componentes/Perfil';
import Tecnologias from './componentes/Tecnologias';
import { NavBar } from './componentes/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

function ScrollRevealObserver() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const observe = () => {
      document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => io.observe(el));
    };

    observe();

    const mo = new MutationObserver(observe);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => { io.disconnect(); mo.disconnect(); };
  }, []);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <ScrollRevealObserver />
      <Routes>
        <Route path="/" element={
          <>
            <section id="inicio" className="section-inicio">
              <Cabecera />
              <div className="scroll-indicator">
                <span></span>
                <span></span>
              </div>
            </section>
            <section id="perfil"><Perfil /></section>
            <section id="educacion"><Educacion /></section>
            <section id="proyectos"><Proyectos /></section>
            <section id="tecnologias"><Tecnologias /></section>
            <section id="contacto"><Contacto /></section>
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App
