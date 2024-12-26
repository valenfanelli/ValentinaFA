import React from "react"
import { NavLink } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import pin from '../img/pin.png';
function Cabecera() {

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-inicio roboto-mono">
        <div className="text-center">
          <div className="container fade-in-up">
            <h1 className="text-uppercase main-title">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("VALENTINA FANELLI ADDIECHI") // Escribe el texto
                    .start(); // Inicia la animación
                }}
                options={{
                  loop: false, // No repetir la animación
                  delay: 100, // Velocidad de escritura en milisegundos
                }}
              />
            </h1>
            <div className="container text-center subtitle-container">
              <h4 className="subtitle">
                <span className="highlight">Ingeniera en Computación</span> |
                Desarrolladora Web
              </h4>
              <p className="description">
                ¡Hola! Soy Valentina, una ingeniera apasionada por la programación y la robótica. Con 23 años, amo aprender, resolver problemas y
                crear soluciones tecnológicas impactantes.
              </p>
              <p className="description"> <img src={pin}></img> La Plata, Buenos Aires</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cabecera