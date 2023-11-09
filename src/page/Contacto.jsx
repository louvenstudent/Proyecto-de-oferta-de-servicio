import '../pagecss/contacto.css'
import { Outlet, Link } from 'react-router-dom'

export default function Contacto(props){
    return (
        <>
        <section class="contact_form" id={props.contactoUno}  >
			
			<div className='contenidoform'>
				<form  action="https://formsubmit.co/starwebdeveloper.st@gmail.com" method="post" id='formulario' >				
					<div className="datosform">
						<h1>Contacto</h1>
						<p></p>
						<div className="nombre">
							<label htmlFor="nombreid">Nombre</label>
							<span> ...........</span>
							<input id='nombreid' type="text" placeholder=' { Ingresa } '/>
						</div>
						<div className="whatsapp">
							<label htmlFor="numeroid">Wtasapp</label>
							<span> ...........</span>
							<input type="number" id='numeroid' placeholder=' { Ingresa } '/>
						</div>
						<div className="correo">
						<label htmlFor="correoid">Email</label>
							<span> ...........</span>
							<input type="email" id='correoid' placeholder=' { Ingresa } '/>
						</div>
						<div className="mensaje">
							<textarea name="" id="" cols="30" rows="10" placeholder='Mesaje' ></textarea>
						</div>
					</div>
					
							
				</form>
			</div>
					
		</section>
        </>
    )
}