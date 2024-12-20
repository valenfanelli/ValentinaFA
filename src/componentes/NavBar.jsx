import { Link } from 'react-router-dom';
export const NavBar = () => {
    return <>
        <nav className="navbar navbar-expand-lg bg-inicio roboto-mono">
            <div className="navbar-nav mx-auto m-3 fs-6">
                <Link className="nav-item nav-link text-white" to="/">Home</Link>
                <Link className="nav-item nav-link text-white" to="/perfil">Perfil</Link>
                <Link className="nav-item nav-link text-white" to="/educacion">Educación</Link>
                <Link className="nav-item nav-link text-white" to="/proyectos">Proyectos</Link>
                <Link className="nav-item nav-link text-white" to="/tecnologias">Tecnologias</Link>
                <Link className="nav-item nav-link text-white" to="/contacto">Contacto</Link>
            </div>
        </nav>
    </>
}