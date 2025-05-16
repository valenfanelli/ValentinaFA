import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import '../App.css';
import { Language } from './Language';

export const NavBar = () => {
  const { t } = useTranslation();
  const [abierto, setAbierto] = useState(false);
  function toggleMenu(){
    abierto? setAbierto(false) : setAbierto(true);
  }
    return <>
        <a className="icon menu-icon" onClick={toggleMenu}>
            <i className="fa fa-bars"></i>
        </a>
        <nav className={`navbar ${!abierto? 'ocultar' : ''} navbar-expand-lg bg-nav roboto-mono`}>
            <div className="navbar-nav fs-6">
                <Link className="nav-item nav-link text-white" to="/">{t("nav_inicio")}</Link>
                <Link className="nav-item nav-link text-white" to="/perfil">{t("nav_perfil")}</Link>
                <Link className="nav-item nav-link text-white" to="/educacion">{t("nav_educacion")}</Link>
                <Link className="nav-item nav-link text-white" to="/proyectos">{t("nav_proyecto")}</Link>
                <Link className="nav-item nav-link text-white" to="/tecnologias">{t("nav_tecnologia")}</Link>
                <Link className="nav-item nav-link text-white" to="/contacto">{t("nav_contacto")}</Link>
            </div>
            <Language className="lang-toggle"/>
        </nav>
    </>
}