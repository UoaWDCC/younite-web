import React from "react";
import styles from "./HomePageBlob.module.css"; 

const HomePageBlob: React.FC<{ blob1: string; blob2: string; blob3: string }> = ({ blob1, blob2, blob3 }) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.blob} ${styles.whiteBlob} ${styles.blob1}`}>
        <p>{blob1}</p>
        <img className={styles.connector} src="../../connector.svg" alt="Connector SVG" />
      </div>
      <div className={`${styles.blob} ${styles.whiteBlob} ${styles.blob2}`}>
        <p>{blob2}</p>
        <button className={styles.button}>JOIN US NOW</button>
      </div>
      <div className={`${styles.blob} ${styles.orangeBlob} ${styles.blob3}`}>
        <p>{blob3}</p>
      </div>
    </div>
  );
};

export default HomePageBlob;
