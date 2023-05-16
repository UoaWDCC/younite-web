export default function ImageWithText({ props }: { props: any }) {
	const imageUrl = props.image.data.attributes.formats.large.url;

	return (
		<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
			<div>{props.content}</div>
			<div>
				<img
					style={{ display: "block", width: "100%" }}
					src={`http://localhost:1337${imageUrl}`}
				/>
			</div>
		</div>
	);
}
