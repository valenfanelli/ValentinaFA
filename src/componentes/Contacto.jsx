import React from "react"
import '../App.css'
function Contacto() {

  return (
    <>
        <h3 className="text-white">Contacto</h3>
        <div className="text-center align-items-center">
            <div className="container">
                <ul class="fa-ul text-white fs-5">
                    <li className="text-start m-3"><i class="fa-li fab fa-linkedin"></i><a className="enlaces" href="www.linkedin.com/in/valentinafanelliaddiechi">Linkedin</a></li>
                    <li className="text-start m-3"><i class="fa-li fab fa-github"></i><a className="enlaces" href="https://github.com/valenfanelli">Github</a></li>
                    <li className="text-start m-3"><i class="fa-li fas fa-envelope"></i><p className="enlaces">valenfa19@gmail.com</p></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Contacto