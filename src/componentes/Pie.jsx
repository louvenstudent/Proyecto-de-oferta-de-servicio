import React, { useState } from 'react';
import styles from '../pagecss/pie.module.css';
import { BiLogoWhatsapp } from "react-icons/bi";

export default function PiePagiana() {
    const [isFooterVisible, setIsFooterVisible] = useState(true);

    function toggleFooter() {
        setIsFooterVisible(prevValue => !prevValue);
    }

    return (
        <>
        
        {/*<div className={styles.pie} onClick={toggleFooter}>
            <div className={`${styles.footer} ${isFooterVisible ? styles.footer2 : ''}`} id='pie'>
                <div className={styles.cabesa}>
                    <h5>Contactame</h5>
                    <BiLogoWhatsapp id='whatsap'/>
                </div>
            </div>
    </div>*/}
    <div className={styles.pie2}>

    </div>
    </>
    );
}
