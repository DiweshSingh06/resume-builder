import React from 'react'
import resumeSvg from "../../assets/resume.gif";

import styles from "./header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.right}>
        <img src={resumeSvg} alt="Resume" />
        {/* <p className={styles.heading}>
          Make your own resume. <span>It's free</span>
        </p> */}
      </div>
      <div className={styles.right}>
        <p className={styles.heading}>
         Build your job winning resume for free 
        </p>
      </div>
    </div>
  );
}

export default Header;