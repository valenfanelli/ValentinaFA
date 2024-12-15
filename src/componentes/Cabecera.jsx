import React from "react"
import { NavLink } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
function Cabecera() {

  return (
    <>
      <div className="container">
            <div>
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
                    <h3>Ingeniera en computación</h3>
                    <h3>Desarrolladora web</h3>
                </div>
            </div>
      </div>
    </>
  )
}

export default Cabecera