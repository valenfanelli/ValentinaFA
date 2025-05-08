import React from "react";
import auto from '../img/auto.png';
import { useTranslation } from "react-i18next";
function Perfil() {
  const { t } = useTranslation();
  return (
    <div className="bg-sec w-100 p-4">
      <div className="fade-in-down d-flex flex-column justify-content-center align-items-center">
        <h3 className="text-white roboto-mono">{t("per_titulo")}</h3>
        <div className="perfil-content montserrat">
          <img src={auto} alt="Robot Car" className="icono-perfil" />
          <div className="perfil-texto">
            <p>{t("per_descripcion_1")}</p>
            <p>{t("per_descripcion_2")}</p>
            <p>{t("per_descripcion_3")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
