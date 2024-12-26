import React from "react";
import auto from '../img/auto.png';

function Perfil() {
  return (
    <div className="bg-sec vh-100 w-100 p-4">
      <div className="fade-in-down d-flex flex-column justify-content-center align-items-center">
        <h3 className="text-white roboto-mono">Sobre mí</h3>
        <div className="perfil-content montserrat">
          <img src={auto} alt="Robot Car" className="icono-perfil" />
          <div className="perfil-texto">
            <p className="mb-4">
              Me apasiona el desarrollo de aplicaciones, juegos y proyectos de IoT con microcontroladores.
            </p>
            <p className="mb-4">
              Disfruto trabajar en equipo, donde puedo combinar mi experiencia en desarrollo web y mi interés por la tecnología para crear soluciones innovadoras.
            </p>
            <p className="mb-0">
              Siempre estoy en búsqueda de nuevos desafíos que me permitan aprender y crecer profesionalmente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
