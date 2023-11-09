import cssservic from'../pagecss/servicios.module.css'
import Contacto from './Contacto'
import PiePagiana from '../componentes/Pie'
import Cartas from '../componentes/cartasplannes'

import web from '../assets/web.jpg'
export default function Servicios(){
    return (
        <>
        <section class={cssservic.servicios}>
            <div>
               
                <div className={cssservic.sertitulo}>
                    <h1>Servicios</h1>
                </div>
                <div className={cssservic.PuntoVenta}>
                    <div className={cssservic.conPuntoVenta}>
                        <h1>¿Quiere tener una mejor imagen profecional?</h1>
                        <p>Con nuestros servicios de creación de páginas web,
                            podrás tener una página profesional y atractiva 
                            que te ayudará a aumentar tus ventas y mejorar tu imagen de marca. </p>
                        <h2> Nuestros servicios incluyen:</h2>
                        <li> Diseño web personalizado </li>
                        <li> Web desarrollado a medida</li>
                        <li> Optimizadas para los motores de búsqueda</li>
                        <li> Mantenimiento y soporte técnico</li>  
                    </div>
                    <div className={cssservic.imgPuntoVenta}>
                        <img src={web} alt="web" />
                    </div>
                </div>
            </div>
            <div className={cssservic.contenedorCartas}>
                <div className={cssservic.titulosecion}>
                <p>Planes echo especialmente para ti</p>
                    <h1>Los mejores precios para tu pagina web</h1>
                    
                </div>
                <div className={cssservic.sectioncartas}>
                    <Cartas />
                    <Cartas cssClassName={cssservic.cartatop} />
                    <Cartas />
                </div>
                
            </div>
            
        </section>
        </>
    )
}