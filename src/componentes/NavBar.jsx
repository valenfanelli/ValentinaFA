import { Link } from 'react-router-dom';
export const NavBar = () => {
    return <>
        <nav className="navbar navbar-expand-lg bg-nav roboto-mono">
            <div className="navbar-nav mx-auto m-3 fs-6">
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