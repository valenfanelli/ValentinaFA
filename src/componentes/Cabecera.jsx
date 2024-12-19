import React from "react"
import { NavLink } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import Animacion from './Animacion';
function Cabecera() {

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-inicio roboto-mono">
        <div className="text-center">
          <Animacion animationClass="animate__fadeInUp">
            <div className="container">
              <h1 className="text-uppercase">
              <Typewriter
                  onInit={(typewriter) => {
                      typewriter
                      .typeString('VALENTINA FANELLI ADDIECHI') // Escribe el texto
                      .start(); // Inicia la animación
                  }}
                  options={{
                      loop: false,       // No repetir la animación
                      delay: 100,        // Velocidad de escritura en milisegundos
                  }}
              />
              </h1>
              <div className="container text-center">
                  <h4>Ingeniera en computación</h4>
                  <h4>Desarrolladora web</h4>
              </div>
              <h5 className="mt-4">23 años</h5>
            </div>
          </Animacion>
        </div>
      </div>
    </>
  )
}

export default Cabecera