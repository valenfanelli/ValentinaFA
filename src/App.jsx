import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cabecera from './componentes/Cabecera';
import Educacion from './componentes/Educacion';
import Proyectos from './componentes/Proyectos';
import Contacto from './componentes/Contacto';
import Perfil from './componentes/Perfil';
import Tecnologias from './componentes/Tecnologias';
import Animacion from './componentes/Animacion';
import { NavBar } from './componentes/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Cabecera/>}></Route>
            <Route path='/perfil' element={<Perfil/>}></Route>
            <Route path='/educacion' element={<Educacion/>}></Route>
            <Route path='/proyectos' element={<Proyectos/>}></Route>
            <Route path='/tecnologias' element={<Tecnologias/>}></Route>
            <Route path='/contacto' element={<Contacto/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
