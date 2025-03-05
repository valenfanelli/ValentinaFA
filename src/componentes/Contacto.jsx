import React from "react"
import '../App.css';
import study from '../img/study.png';
import mano from '../img/mano.png';
import buzon from '../img/buzon.png';

function Contacto() {

  return (
    <>
      <div className="pagina-contacto d-flex bg-sec justify-content-center roboto-mono">
        <div className="m-2 fade-in-down">
          <h3 className="text-center text-white p-2">Donde puedes encontrarme</h3>
          <p className="text-center text-white p-2 montserrat ">¡Estoy emocionada por conocer tus ideas y proyectos! No dudes en escribirme</p>
          <div className="emojis">
            <img src={study} alt="emoji estudioso" />
            <img src={mano} alt="emoji mano" />
            <img src={buzon} alt="emoji buzon" />
          </div>
          <ul class="fa-ul text-white contacto fs-5">
              <li className="text-start m-3">
                <i class="fa-li fab fa-linkedin"></i>
                <a className="enlaces" href="www.linkedin.com/in/valentinafanelliaddiechi">Linkedin</a>
              </li>
              <li className="text-start m-3">
                <i class="fa-li fab fa-github"></i>
                <a className="enlaces" href="https://github.com/valenfanelli">Github</a>
              </li>
              <li className="text-start m-3">
                <i class="fa-li fas fa-envelope"></i>
                <p className="enlaces">vfanelliaddiechi@gmail.com</p>
              </li>
          </ul>
        </div>
      </div>

    </>
  )
}

export default Contacto