import styles from "./HomePageBlob.module.css";

const HomePageBlob: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.blob} ${styles.blob1}`}>
        <p>
          We are a group of young people who are passionate about creating
          positive change in our communities and beyond.
        </p>
      </div>
      <div className={styles.connector}>
        <img src="/connector.svg" alt="Connector SVG" />
      </div>
      <div className={`${styles.blob} ${styles.blob2}`}>
        <p>
          Friends, Empowerment, Growth
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
        <button>JOIN US NOW</button>
      </div>
    </div>
  );
};

export default HomePageBlob;