import React from "react"
import study from '../img/study.png';
import engineer from '../img/engineer.png';
import desarrollo from '../img/desarrollo.png';
import robot from '../img/robot.webp';
function Perfil() {

  return (
    <>
      <div className="bg-inicio vh-100 w-100 roboto-mono">
        <div className="d-flex justify-content-center ">
          <h3 className="p-2 bounce">Perfil</h3>
        </div>       
        <div className="container p-5 d-flex align-items-center justify-content-between perfil">
          <div className="texto-perfil fs-5 fade-in-down">
            <p>Me apasiona el desarrollo de aplicaciones, juegos y proyectos de IoT con microcontroladores.</p>
            <p>Disfruto trabajar en equipo, donde puedo combinar mi experiencia en desarrollo web y mi interés por la tecnología para crear soluciones innovadoras.</p>
            <p>Siempre estoy en búsqueda de nuevos desafíos que me permitan aprender y crecer profesionalmente.</p>
          </div>
        </div>   
      </div>
          
    </>
  )
}

export default Perfil