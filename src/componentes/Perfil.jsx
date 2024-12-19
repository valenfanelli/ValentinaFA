import React from "react"
import Animacion from "./Animacion";
function Perfil() {

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-inicio roboto-mono">
        <div className="text-center">
          <Animacion animationClass="animate__fadeInUp">
            <div className="container">
              <h1 className="text-uppercase">
              
              </h1>
              <div className="container text-center">
                  <h3></h3>
                  <h3></h3>
              </div>
            </div>
          </Animacion>
        </div>
      </div>
    </>
  )
}

export default Perfil