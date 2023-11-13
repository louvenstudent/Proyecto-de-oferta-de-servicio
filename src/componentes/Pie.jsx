import React, { useState } from 'react';
import web from '../assets/logo4.png'
import styles from '../pagecss/pie.module.css';
import { BiLogoWhatsapp } from "react-icons/bi";

export default function PiePagiana() {
    const [isFooterVisible, setIsFooterVisible] = useState(true);

    function toggleFooter() {
        setIsFooterVisible(prevValue => !prevValue);
    }

    return (
        <>
        <div className={styles.pie2}>
            <div className={styles.empresalogo}>
                <img src={web} alt="web" />
            </div>
            <div className={styles.servicios}>
                
            </div>
            <div className={styles.planes}></div>
            <div className= {styles.contactos}></div>
        </div>
        </>
    );
}
