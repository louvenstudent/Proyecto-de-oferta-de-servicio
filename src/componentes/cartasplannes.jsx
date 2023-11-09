import csscarta from '../cssdecomponentes/cartas.module.css'

export default function Cartas (props){

    return(
        <>
        <div className={`${csscarta.carta} ${props.cssClassName}`}>
            <div>
                <h1>Plan para emprendedores</h1>
                <h4></h4>
                <h5>$99.000</h5>
                <p>hola</p>
                <button>Contratar</button>
            </div>
            
        </div>
        </>
    )
};