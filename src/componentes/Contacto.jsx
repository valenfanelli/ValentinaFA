import React from "react"
import '../App.css';
function Contacto() {

  return (
    <>
      <div className="d-flex bg-sec justify-content-center vh-100 roboto-mono">
        <div className="m-2 fade-in-down">
          <h3 className="text-center text-white p-2">Donde puedes encontrarme</h3>
          <p className="text-center text-white p-2">¡Estoy emocionada por conocer tus ideas y proyectos! No dudes en escribirme</p>
          <p className="text-center fs-4">✍🏽🤓✋🏼📨📩</p>
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
                <p className="enlaces">valenfa19@gmail.com</p>
              </li>
          </ul>
        </div>
      </div>

    </>
  )
}

export default Contacto