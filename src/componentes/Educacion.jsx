import React from "react"
import '../App.css'
import Animacion from "./Animacion"
function Educacion() {

  return (
    <>
        <Animacion animationClass="animate__bounce">
            <h3 className="text-white m-4">Educación</h3>
        </Animacion>
        <Animacion animationClass="animate__fadeInUp">
            <div className="container text-center">
                <div className="row">
                    <div className="col ">
                        <div className="card border border-secondary border-4">
                            <div className="card-header bg-header">
                                Bachiller en ciencias sociales
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Colegio Inmaculada de La Plata</li>
                                <li className="list-group-item">Promedio 8.5</li>
                                <li className="list-group-item">2018</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border border-secondary border-4">
                            <div className="card-header bg-header">
                                Ingeniera en computación
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Universidad Nacional de La Plata</li>
                                <li className="list-group-item">Promedio 8.2</li>
                                <li className="list-group-item">2024</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border border-secondary border-4">
                            <div className="card-header bg-header">
                            Full Stack Java
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Codo a Codo 4.0</li>
                                <li className="list-group-item">208 hs</li>
                                <li className="list-group-item">2022</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row m-3">
                    <div className="col-8">
                        <div className="card border border-secondary border-4">
                            <div className="card-header bg-header">
                                Desarrollo Web Completo con HTML5, CSS3, JS AJAX PHP y MySQL
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Udemy</li>
                                <li className="list-group-item">83 hs</li>
                                <li className="list-group-item">2024</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card border border-secondary border-4">
                            <div className="card-header bg-header">
                                React js
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Coder House</li>
                                <li className="list-group-item">30 hs</li>
                                <li className="list-group-item">2024</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Animacion>
    </>
  )
}

export default Educacion