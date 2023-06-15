import styles from "./ImageWithText.module.css";

export default function ImageWithText({ props }: { props: any }) {
  const imageUrl = props.image.data.attributes.formats.large.url;
  console.log(props);
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      <div>
        <img
          className={styles.backgroundImg}
          src={`http://localhost:1337${imageUrl}`}
        />
      </div>
      <div>
        <div className={styles.heading}>{props.Heading}</div>
        <div className={styles.content}>{props.content}</div>
      </div>
    </div>
  );
}
