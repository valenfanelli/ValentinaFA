import todoLogo from '/todo.png'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cabecera from './componentes/Cabecera';
import Educacion from './componentes/Educacion';
function App() {

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-inicio roboto-mono">
        <div className="text-center">
          <Cabecera />
          <p className="read-the-docs mt-4">
            23 años
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-center  vh-100 roboto-mono">
        <div className="text-center m-2">
          <Educacion/>
        </div>
      </div>
    </>
  )
}

export default App
