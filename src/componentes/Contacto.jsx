import React from "react"
import '../App.css';
import Animacion from "./Animacion";
function Contacto() {

  return (
    <>
      <div className="d-flex justify-content-center bg-sec vh-75 roboto-mono">
        <div className="text-center m-2">
          <Animacion animationClass="animate__wobble">
            <h3 className="text-white">Contacto</h3>
          </Animacion>
          <div className="text-center align-items-center">
              <div className="container">
                  <ul class="fa-ul text-white fs-6">
                      <li className="text-start m-3">
                        <Animacion animationClass="animate__wobble">
                          <i class="fa-li fab fa-linkedin"></i>
                        </Animacion>
                        <a className="enlaces" href="www.linkedin.com/in/valentinafanelliaddiechi">Linkedin</a>
                      </li>
                      <li className="text-start m-3">
                        <Animacion animationClass="animate__wobble">
                          <i class="fa-li fab fa-github"></i>
                        </Animacion>
                        <a className="enlaces" href="https://github.com/valenfanelli">Github</a>
                      </li>
                      <li className="text-start m-3">
                        <Animacion animationClass="animate__wobble">
                          <i class="fa-li fas fa-envelope"></i>
                        </Animacion>
                        <p className="enlaces">valenfa19@gmail.com</p>
                      </li>
                  </ul>
              </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Contacto