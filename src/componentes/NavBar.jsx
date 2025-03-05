import { Link } from 'react-router-dom';
import React, { useState } from "react";
import '../App.css';
export const NavBar = () => {
    return <>
        <nav className="navbar navbar-expand-lg bg-nav navnav roboto-mono">
            <div className="navbar-nav text-center mx-auto m-3 fs-6">
                <Link className="nav-item nav-link text-white" to="/">HOME</Link>
                <Link className="nav-item nav-link text-white" to="/perfil">PERFIL</Link>
                <Link className="nav-item nav-link text-white" to="/educacion">EDUCACIÓN</Link>
                <Link className="nav-item nav-link text-white" to="/proyectos">PROYECTOS</Link>
                <Link className="nav-item nav-link text-white" to="/tecnologias">TECNOLOGÍAS</Link>
                <Link className="nav-item nav-link text-white" to="/contacto">CONTACTO</Link>
            </div>
        </nav>
    </>
}