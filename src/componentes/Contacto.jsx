import React from "react"
import '../App.css';
function Contacto() {

  return (
    <>
      <div className="d-flex bg-inicio justify-content-center vh-100 roboto-mono">
        <div className="m-2">
          <h3 className="text-center text-white p-2 bounce">Contacto</h3>
          <div className="text-center contacto bounce-in-right">
            <div className="container">
                <ul class="fa-ul text-white fs-6">
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