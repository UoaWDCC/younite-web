import styles from "./HomePageBlob.module.css"; // Import the CSS module

const HomePageBlob: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.blob} ${styles.whiteBlob} ${styles.blob1}`}>
        <p>
          We are a group of young people who are passionate about creating
          positive change in our communities and beyond.
        </p>
      </div>
      <div className={styles.connector}>
        <img src="/img.svg" alt="Image connecting the two blobs" />
      </div>
      <div className={`${styles.blob} ${styles.whiteBlob} ${styles.blob2}`}>
        <p>
          Friends, Empowerment, Growth
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
        <button className={styles.button}>JOIN US NOW</button> {/* Add the button class */}
      </div>
      <div className={`${styles.blob} ${styles.orangeBlob} ${styles.blob3}`}>
        <p>
          How do we make an impact?
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
      </div>
    </div>
  );
};

export default HomePageBlob;