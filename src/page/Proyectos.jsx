
import mipagina from '../assets/mipagina.png'
import juego from '../assets/pagina-perso.png'
import juego2 from '../assets/JuegoDeTesoro.png'
import { BiLogoHtml5 } from "react-icons/bi";
import { BiLogoJava } from "react-icons/bi";
import Sectionproyecto from '../componentes/secionproyecto'
import PiePagiana from '../componentes/Pie'
import '../pagecss/proyecto.css'
export default function Proyectos() {
    return (
        <>
            <section className="proyecto" id='proyecto'>
                <div className="titulosecion">
                    <h1>Proyectos</h1>
                </div>
                <div className="contenido">
                    <Sectionproyecto 
                    nombreImagen='jugojava'
                        proyecImg ={juego2}
                       proyecTitulo='Juego de Tesoro'
                       proyeccontenido ='Este juego lo realicé aplicando la 
                       programación orientada a objeto, y se trata de un 
                       personaje que tiene muchos distractores,
                        donde tiene que encontrar un tesoro.' 
                        nombreclas='botonproyec' 
                        nombreButon='Inspecionar'
                        proyectecnologias = {<div>
                            <BiLogoJava  className='iconosTec '/>
                            
                        </div>}
                    
                    />
                    <Sectionproyecto 
                    nombreImagen='jugojava'
                        proyecImg ={juego}
                       proyecTitulo='Juego de Tesoro'
                       proyeccontenido ='Este juego lo realicé aplicando la 
                       programación orientada a objeto, y se trata de un 
                       personaje que tiene muchos distractores,
                        donde tiene que encontrar un tesoro.' 
                        nombreclas='botonproyec' 
                        nombreButon='Inspecionar'
                        proyectecnologias = {<div>
                            <BiLogoJava  className='iconosTec '/>
                            <BiLogoHtml5 className='iconosTec dos'/>
                        </div>}
                    
                    />
                    
                </div>
                <div className="espacio"></div>
                
            </section>
            {/*<PiePagiana />*/}
        </>
    )
}
