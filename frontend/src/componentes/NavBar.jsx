import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import '../App.css';
import { Language } from './Language';

export const NavBar = () => {
  const { t } = useTranslation();
  const [abierto, setAbierto] = useState(false);

  function toggleMenu() {
    setAbierto(prev => !prev);
  }

  function closeMenu() {
    setAbierto(false);
  }

  return <>
    <a className="icon menu-icon" onClick={toggleMenu}>
      <i className={`fa ${abierto ? 'fa-times' : 'fa-bars'}`}></i>
    </a>
    <nav className="site-nav roboto-mono">
      <div className={`nav-links ${!abierto ? 'nav-closed' : ''}`}>
        <a className="nav-link" href="#inicio" onClick={closeMenu}>{t("nav_inicio")}</a>
        <a className="nav-link" href="#perfil" onClick={closeMenu}>{t("nav_perfil")}</a>
        <a className="nav-link" href="#educacion" onClick={closeMenu}>{t("nav_educacion")}</a>
        <a className="nav-link" href="#proyectos" onClick={closeMenu}>{t("nav_proyecto")}</a>
        <a className="nav-link" href="#tecnologias" onClick={closeMenu}>{t("nav_tecnologia")}</a>
        <a className="nav-link" href="#contacto" onClick={closeMenu}>{t("nav_contacto")}</a>
      </div>
      <Language />
    </nav>
  </>
}