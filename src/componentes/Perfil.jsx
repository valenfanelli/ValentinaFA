import React from "react";
import auto from '../img/auto.png';

function Perfil() {
  return (
    <div className="bg-sec w-100 p-4">
      <div className="fade-in-down d-flex flex-column justify-content-center align-items-center">
        <h3 className="text-white roboto-mono">Sobre mí</h3>
        <div className="perfil-content montserrat">
          <img src={auto} alt="Robot Car" className="icono-perfil" />
          <div className="perfil-texto">
            <p>
              Me apasiona el desarrollo de aplicaciones, juegos y proyectos de IoT con microcontroladores.
            </p>
            <p>
              Disfruto trabajar en equipo, donde puedo combinar mi experiencia en desarrollo web y mi interés por la tecnología para crear soluciones innovadoras.
            </p>
            <p>
              Siempre estoy en búsqueda de nuevos desafíos que me permitan aprender y crecer profesionalmente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
