import todoLogo from '/todo.png'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cabecera from './componentes/Cabecera';
import Educacion from './componentes/Educacion';
import Proyectos from './componentes/Proyectos';
import Contacto from './componentes/Contacto';
function App() {

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-inicio roboto-mono">
        <div className="text-center">
          <Cabecera />
          <h5 className="mt-4">
            23 años
          </h5>
        </div>
      </div>
      <div className="d-flex justify-content-center  vh-100 roboto-mono">
        <div className="text-center m-2">
          <Educacion/>
        </div>
      </div>
      <div className="d-flex justify-content-center bg-inicio vh-75 roboto-mono">
        <div className="text-center m-2">
          <Proyectos/>
        </div>
      </div>
      <div className="d-flex justify-content-center vh-75 roboto-mono">
        <div className="text-center m-2">
          <Contacto/>
        </div>
      </div>
    </>
  )
}

export default App
