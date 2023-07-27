import { getLargestImage } from "@/shared/util";
import styles from "./ImageWithText.module.css";

export default function ImageWithText({ props }: { props: any }) {
	const imageUrl = getLargestImage(props.image);

	return (
		<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
			<div>
				<img className={styles.backgroundImg} src={imageUrl} />
			</div>
			<div>
				<div className={styles.heading}>{props.Heading}</div>
				<div className={styles.content}>{props.content}</div>
			</div>
		</div>
	);
}
