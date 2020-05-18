import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Menu from './Menu';
import Usuarios from './Usuarios/index'
import Publicaciones from './Publicaciones/index'

const Tareas = () => <h1>TAREAS</h1>

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <div className="margen">
        <Route exact path="/" component={ Usuarios } />
        <Route exact path="/tareas" component={Tareas} />
        <Route exact path="/publicaciones/:key" component={Publicaciones} />
      </div>
    </BrowserRouter>
  )
}

export default App;