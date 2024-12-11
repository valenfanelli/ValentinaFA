import todoLogo from '/todo.png'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <div>
        <a href="#" target="_blank">
          <img src={todoLogo} className="logo" alt="Todo logo" />
        </a>
      </div>
      <h1>Valentina Fanelli Addiechi</h1>
      <p>Ingeniera en computación</p>
      <p>Desarrolladora</p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
