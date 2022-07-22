import React from 'react';
import styles from "./Driver.module.css";
import carDriver from "../../images/drive.png";

const Driver = () => {
  return (
    <div className={styles.drive}>
        <div className={styles.left}>
            <img src={carDriver} alt="/"/>
        </div>
        <div>
            <h2> Find your perfect car <span> to try before you buy </span></h2>
            <p>Make sure your future wheels work well with your lifestyle by taking your time in the driver's seat.</p>
            <button>Browse Cars</button>
        </div>
    </div>
  )
}

export default Driver