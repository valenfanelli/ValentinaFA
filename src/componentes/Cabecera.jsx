import React from "react"
import { NavLink } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import pin from '../img/pin.png';
import { useTranslation } from "react-i18next";

function Cabecera() {
  const { t } = useTranslation();
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-150 bg-inicio roboto-mono">
        <div className="text-center">
          <div className="container fade-in-up">
            <h1 className="text-uppercase main-title">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("VALENTINA FANELLI ADDIECHI") // Escribe el texto
                    .start(); // Inicia la animación
                }}
                options={{
                  loop: false, // No repetir la animación
                  delay: 100, // Velocidad de escritura en milisegundos
                }}
              />
            </h1>
            <div className="container text-center subtitle-container">
              <h4 className="subtitle">
                <span className="highlight">{t("cab_ing")}</span> | {t("cab_dev")}  </h4>
              <p className="description">
                {t("cab_descripcion")}
              </p>
              <p className="description"> <img src={pin}></img> La Plata, Buenos Aires</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cabecera