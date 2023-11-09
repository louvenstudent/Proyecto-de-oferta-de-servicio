import mipagina from '../assets/mipagina.png'
import juego from '../assets/pagina-perso.png'
import juego2 from '../assets/JuegoDeTesoro.png'
import { BiLogoHtml5 } from "react-icons/bi";
import { BiLogoJava } from "react-icons/bi";

import '../cssdecomponentes/proyectosComp.css'

export default function Sectionproyecto (props){
    return (
        <>
        <div className="listaproyecto">
            <div className="imagenProy">
                <img src={props.proyecImg} className={props.nombreImagen} alt="" />
            </div>
            <div className="contenidoProy">
                <h2>{props.proyecTitulo}</h2>
                <p>{props.proyeccontenido}</p>
                <h4>Tecnologias utilizada</h4> 
                {props.proyectecnologias}
                <button className={props.nombreclas}>{props.nombreButon}</button>
            </div>
        </div>
        </>
    )
}