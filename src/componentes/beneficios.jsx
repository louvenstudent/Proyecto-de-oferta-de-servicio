import '../cssdecomponentes/beneficios.css'


export default function Beneficios (props){
    return (
        <>
        <div className="primerBeneficio">
            {props.imagen}
            <h1>{props.elBeneficio}</h1>
            <p>{props.elBeneficioCuerpo}</p>
        </div>
        </>
    );
}
