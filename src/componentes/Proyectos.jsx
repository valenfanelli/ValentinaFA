import {React} from "react"
import {Card, Button} from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import '../App.css';
function Proyectos() {

  return (
    <>
        <h3>Proyectos</h3>
        <div className="container">
            <div className="row m-4">
                <div className="col">
                    <Card className="h-100 proyecto">
                        <Card.Body>
                        <Card.Title>E-commerce</Card.Title>
                        <Card.Text>
                            Tienda de E-commerce realizada como proyecto final del curso Reactjs de Coder House
                        </Card.Text>
                        <a className="btn-custom" href="valentech.netlify.app/" target="_blank" rel="noopener noreferrer">
                            Ver Proyecto
                        </a>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col">
                    <Card className="h-100 proyecto">
                        <Card.Body>
                        <Card.Title>Freelancer</Card.Title>
                        <Card.Text>
                            Proyecto de desarrollo web realizado con HTML y CSS en el curso fullstack de Udemy
                        </Card.Text>
                        <a className="btn-custom" href="https://clever-bubblegum-0389a8.netlify.app" target="_blank" rel="noopener noreferrer">
                            Ver Proyecto
                        </a>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className="row m-4">
                <div className="col">
                    <Card className="h-100 proyecto">
                        <Card.Body>
                        <Card.Title>Blog de Café</Card.Title>
                        <Card.Text>
                            Proyecto de desarrollo web realizado con HTML y CSS en el curso fullstack de Udemy
                        </Card.Text>
                        <a className="btn-custom" href="https://coruscating-centaur-78f2d6.netlify.app/" target="_blank" rel="noopener noreferrer">
                            Ver Proyecto
                        </a>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col">
                    <Card className="h-100 proyecto">
                        <Card.Body>
                        <Card.Title>Ros2 Gesture Car</Card.Title>
                        <Card.Text>
                            Proyecto en equipo para la asignatura robótica donde se construyo un auto autonomo con comunicación ROS
                        </Card.Text>
                        <a className="btn-custom" href="https://github.com/marigisee/ROS2-GestureCar" target="_blank" rel="noopener noreferrer">
                            Ver Proyecto
                        </a>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    </>
  )
}

export default Proyectos