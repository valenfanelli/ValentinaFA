import React from "react"
import '../App.css';
import html from '../img/HTML.png';
import css from '../img/css.webp';
import php from '../img/php.png';
import c from '../img/C.png';
import ch from '../img/ch.png';
import react from '../img/react.png';
import github from '../img/github.png';
import cvs from '../img/cvs.png';
import ros from '../img/ros2.png';
import sass from '../img/sass.png';
import sql from '../img/sql.png';
import java from '../img/java.png';
import javascript from '../img/JavaScript.png';
import bootstrap from '../img/bootstrap.png';
import arduino from '../img/arduino.png';
import pgsql from '../img/pgsql.png';
function Tecnologias() {

  return (
    <>
      <div className="d-flex vh-100 bg-tec roboto-mono">
        <div className="text-center w-100">
            <div className="container bounce-in-left">
              <h3 className="p-2">TECNOLOGÍAS</h3>
              <div className="text-center lenguajes">
                  <div className="lenguaje">
                    <img src={html}></img>
                  </div>
                  <div className="lenguaje">
                    <img src={css}></img>
                  </div>
                  <div className="lenguaje">
                    <img src={php}></img>  
                  </div>
                  <div className="lenguaje">
                    <img src={c}></img>  
                  </div>
                  <div className="lenguaje">
                    <img src={ch}></img>  
                  </div>
                  <div className="lenguaje">
                    <img src={react}></img>  
                  </div>
                  <div className="lenguaje">
                    <img src={github}></img>  
                  </div>
                  <div className="lenguaje">
                    <img src={cvs}></img>
                  </div>
                  <div className="lenguaje">
                    <img src={ros}></img>
                  </div>
                  <div className="lenguaje">
                    <img src={sass}></img>
                  </div>
                  <div className="lenguaje">
                    <img src={sql}></img>
                  </div>
                  <div className="lenguaje">
                    <img src={java}></img>
                  </div>
                  <div className="lenguaje">
                    <img src={javascript}></img>
                  </div>
                  <div className="lenguaje">
                    <img src={bootstrap}></img>
                  </div>
                  <div className="lenguaje">
                    <img src={arduino}></img>
                  </div>
                  <div className="lenguaje">
                    <img src={pgsql}></img>
                  </div>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Tecnologias
