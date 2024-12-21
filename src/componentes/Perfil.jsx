import React from "react";
import study from '../img/study.png';
import engineer from '../img/engineer.png';
import desarrollo from '../img/desarrollo.png';
import robot from '../img/robot.webp';

function Perfil() {
  return (
    <div className="bg-sec vh-100 w-100 roboto-mono p-4">
      <div className="fade-in-down  d-flex flex-column justify-content-center align-items-center ">
        <h3 className="text-white">PERFIL</h3>
        <div className="perfil-content d-flex justify-content-center align-items-center">
          <img src={study} alt="Estudio" className="icono-perfil m-3" />
          
          <div className="perfil-texto p-4">
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
          <img src={robot} alt="Robot" className="icono-perfil m-3" />
        </div>
      </div>
    </div>
  );
}

export default Perfil;
