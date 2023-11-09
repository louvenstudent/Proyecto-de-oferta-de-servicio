
import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import '../pagecss/Baralateral.css'


export default function Baralateral (){
    return(
        <>
        <div className='Baralateral'>
            <div className="redes">
               
                <AiFillLinkedin  className="linkedin" onClick={<a></a>} />
                <AiFillGithub className="github1" onClick={<a></a>} />
                <AiFillInstagram className="instagram" onClick={<a></a>} />
            </div>
           
            
        </div>
        
        
        </>
    )
}           