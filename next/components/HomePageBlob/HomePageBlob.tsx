import React from "react";
import RichText from "../blocks/RichText";
import styles from "./HomePageBlob.module.css"; 

const HomePageBlob: React.FC<{ blob1: string; blob2: string; blob3: string }> = ({ blob1, blob2, blob3 }) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.blob} ${styles.whiteBlob} ${styles.blob1}`}>
        <RichText props={{ text: blob1 }} />
        <img className={styles.connector} src="../../connector.svg" alt="Connector SVG" />
      </div>
      <div className={`${styles.blob} ${styles.whiteBlob} ${styles.blob2}`}>
          <RichText props={{ text: blob2 }} />
        <button className={styles.button}>JOIN US NOW</button>
      </div>
      <div className={`${styles.blob} ${styles.orangeBlob} ${styles.blob3}`}>
        <RichText props={{ text: blob3 }} />
      </div>
    </div>
  );
};

export default HomePageBlob;
