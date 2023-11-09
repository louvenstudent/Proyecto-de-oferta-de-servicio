import { Outlet, Link } from 'react-router-dom'
import '../cssdecomponentes/cabecera.css'

export default function Cabecera(){
    return (
        <>
        <header class="header">
            {/*<a href="index.html" class="logo">star web designsº</a>
            <nav>
                
                <a class="active1" href="#inicio">Inicio</a>
                <a class="active1" href="#proyecto">Proyectos</a>
                <a class="active1" href="#contacto">Servicios</a>
                <a class="active1" href="sobremi.html">Acerca de mí</a>
            
            </nav> */}
            <a href="index.html" class="logo">star web designsº</a>
            <nav>
                <ul >
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/proyecto"> Proyecto</Link>
                    </li>
                    
                    <li>
                        <Link to="/servicio"> Servicio</Link>
                    </li>
                    <li>
                        <Link to="/acerca-de"> Acerca de mí </Link>
                    </li>
                    <li>
                        <Link to="/blog"> Blog</Link>
                    </li>
                    
                    
                </ul>
            </nav>
        </header>

        
        <hr />
        <Outlet />

        </>
    )
}
