import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Cabecera from './componentes/cabecera'
import Inicio from './page/Incio'
import Proyectos from './page/Proyectos'
import Servicios from './page/Servicios'
import Sobremi from './page/SobreMi'
import Contacto from './page/Contacto'
import Pie from './componentes/Pie'
import Particulas from './componentes/particula'
import Baralateral from './componentes/baralateral'



/*rutas*/
import { Routes, Route } from 'react-router-dom'
/**/
import './App.css'

function App() {
  /*document.querySelectorAll("*").forEach(element => {
    element.setAttribute("oncontextmenu", "return false;");
  });*/

  return (
    <>
      <div className="globla">
        <Routes>
          <Route path='/' element={<Cabecera />} >
            <Route path='/' element={<Inicio />} />
            <Route path='/proyecto'  />
            <Route path='/servicio'  />
            <Route path='/acerca-de'  />
            <Route path='/blog'  />
           
          </Route>
          
        </Routes>
        <Baralateral />
      {/*
        <Cabecera />
        
        <Inicio />
        <Proyectos />
        <Baralateral />
        <Contacto />
        <Pie /> 
        <Servicios />
        <Sobremi />
        */}
      </div>
     
      
      
    
        
    </>
  )
}

export default App
