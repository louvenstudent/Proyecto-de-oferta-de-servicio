import { BiLogoInstagramAlt } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import { BiCode } from "react-icons/bi";
import { BiCodeAlt } from "react-icons/bi";
import PiePagiana from '../componentes/Pie'
import Proyectos from "./Proyectos";
import Servicios from "./Servicios";
import { BiSolidStar } from "react-icons/bi";
import { BiCheckShield } from "react-icons/bi";
import { BiTrendingUp } from "react-icons/bi";
import { BiMobileLandscape } from "react-icons/bi";
import { BiSearchAlt2 } from "react-icons/bi";
import Contacto from './Contacto'
import Beneficios from "../componentes/beneficios";
import '../pagecss/inicio.css'
import foto from './fotopricipal.png'
import web from '../assets/web.jpg'
import { Link, Route, Routes } from "react-router-dom";


export default function Inicio (props){
    
    return (
        <>
        <Routes>
            <Route path='/contacto' Component={Contacto}  />
        </Routes>
        
        <section className="inicio" id="inicio">
            {/*<div className="bara"></div>*/}
            {}
            <div className="contenedoInicio">
                <div>
                    <div className="nombrepagina">
                        <BiSolidStar className="estrella" />
                        <h1> web designs</h1>
                    </div>
                    <h1>hola</h1>
                    
                </div>

                <div className="cuerpopaginaina"> 
                    <h2>Diseño de páginas web ....</h2>
                    <p>
                       Lleva tu negocio a otro nivel con una página web diseñada por profesionales. 
                       Nuestra mision es ayudarte potencial tu negocio mejorando su reputación en línea,
                        con un sitio web atractivo, 
                       informativo y fácil de usar, para generar más clientes y
                        aumentar las ventas de tu negocio.
                    </p>
                    
                </div>
        </div>
            
        </section>
        
        <section className="cuerpoInicio">
           
            
            <div className="beneficios">
                <Beneficios elBeneficio='Certificado de Seguridad SSL' elBeneficioCuerpo='Todas  las pagina cuentan con el certificado SSL lo que permite estar seguro el translado de tus informaciones' imagen={<BiCheckShield className="iconos protegida" />} />
                <Beneficios elBeneficio='Optimizadas ' elBeneficioCuerpo ='Las paginas cuentan con un buen CEO que permite que aparesca mas facil en las busquedas' imagen={<BiSearchAlt2 className="iconos" />} />
                <Beneficios elBeneficio='Adaptable a todo dispositivos' elBeneficioCuerpo='Todas las paginas estan diseñadas para adaptar todo los dispositivos como Tablet, Computador y celular. ' imagen={<BiMobileLandscape className="iconos" />} />
                <Beneficios elBeneficio='Escalable' elBeneficioCuerpo='En la mayoria de nuestros planes las paginas pueden ser escalable en casos de que tu negocios crecemas' imagen={<BiTrendingUp className="iconos" />} />
            </div>
            <Servicios />
            
           
            

           { /*<div className="botonAcion">
                <Link to="/servicio" className="botonAc"> ver planes <BiTrendingUp id="BiTrendingUp" /> </Link> 
    </div>*/}
            
           
            
            
        </section>
        <Contacto contactoUno="contactoPrin"/>
        <PiePagiana />
        
        
        
        </>
    )
}

{/*<header class="header">
            <a href="index.html" class="logo">star web designsº</a>
            <nav>
                
                <a class="active1" href="#inicio">Inicio</a>
                <a class="active1" href="#proyecto">Proyectos</a>
                <a class="active1" href="#contacto">Servicios</a>
                <a class="active1" href="sobremi.html">Acerca de mí</a>
            
            </nav>
</header>*/}