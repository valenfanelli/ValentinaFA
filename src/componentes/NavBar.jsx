import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import '../App.css';
import { Language } from './Language';

export const NavBar = () => {
  const { t } = useTranslation();
    return <>
        <nav className="navbar navbar-expand-lg bg-nav navnav roboto-mono">
            <div className="navbar-nav nav-left text-center mx-auto m-3 fs-6">
                <Link className="nav-item nav-link text-white" to="/">{t("nav_inicio")}</Link>
                <Link className="nav-item nav-link text-white" to="/perfil">{t("nav_perfil")}</Link>
                <Link className="nav-item nav-link text-white" to="/educacion">{t("nav_educacion")}</Link>
                <Link className="nav-item nav-link text-white" to="/proyectos">{t("nav_proyecto")}</Link>
                <Link className="nav-item nav-link text-white" to="/tecnologias">{t("nav_tecnologia")}</Link>
                <Link className="nav-item nav-link text-white" to="/contacto">{t("nav_contacto")}</Link>
            </div>
            <Language className="lang-toggle nav-right"/>
        </nav>
    </>
}