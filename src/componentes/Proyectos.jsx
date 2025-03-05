import {React} from "react"
import { NavLink } from 'react-router-dom';
import '../App.css';
function Proyectos() {

  return (
    <>
        <div className="d-flex justify-content-center bg-sec w-100 roboto-mono">
            <div className="text-center m-2 fade-in-up">
                <h3 className="p-2">PROYECTOS</h3>
                <div className="container">
                    <div className="proyectos">
                        <div className="proyecto">
                            <h5>Valentech</h5>
                            <p>Tienda de E-commerce realizada como proyecto final del curso Reactjs de Coder House</p>
                            <a className="btn-custom" href="https://valentech.netlify.app/" target="_blank" rel="noopener noreferrer">
                                Ver Proyecto
                            </a>
                        </div>
                        <div className="proyecto">
                            <h5>Freelancer</h5>
                            <p>Proyecto de desarrollo web realizado con HTML y CSS en el curso fullstack de Udemy</p>
                            <a className="btn-custom" href="https://clever-bubblegum-0389a8.netlify.app" target="_blank" rel="noopener noreferrer">
                                Ver Proyecto
                            </a>
                        </div>
                        <div className="proyecto">
                            <h5>Blog de Café</h5>
                            <p>Proyecto de desarrollo web realizado con HTML y CSS en el curso fullstack de Udemy</p>
                            <a className="btn-custom" href="https://coruscating-centaur-78f2d6.netlify.app/" target="_blank" rel="noopener noreferrer">
                                Ver Proyecto
                            </a>
                        </div>
                        <div className="proyecto">
                            <h5>Ros2 Gesture Car</h5>
                            <p>Proyecto en equipo para la asignatura robótica donde se construyo un auto autonomo con comunicación ROS</p>
                            <a className="btn-custom" href="https://github.com/marigisee/ROS2-GestureCar" target="_blank" rel="noopener noreferrer">
                                Ver Proyecto
                            </a>
                        </div>
                        <div className="proyecto">
                            <h5>React + TypeScript + Redux + Context API</h5>
                            <p>Proyecto que combina diferentes técnicas de gestión del contexto en 3 ejemplos disponibles</p>
                            <a className="btn-custom" href="https://valenfanelli.github.io/react-ts-context-redux/" target="_blank" rel="noopener noreferrer">
                                Ver Proyecto
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>       
    </>
  )
}

export default Proyectos