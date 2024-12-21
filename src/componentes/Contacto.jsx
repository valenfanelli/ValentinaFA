import React from "react"
import '../App.css';
function Contacto() {

  return (
    <>
      <div className="d-flex bg-sec justify-content-center vh-100 roboto-mono">
        <div className="m-2 fade-in-down">
          <h3 className="text-center text-white p-2">CONTACTO</h3>
          <div className="text-center contacto">
            <div className="container">
                <ul class="fa-ul text-white">
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
        </div>
      </div>

    </>
  )
}

export default Contacto