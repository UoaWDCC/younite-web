export default function CenteredTextBlock({ props }: { props: any }) {
	console.log(props);

	return (
		<div>
			<div>{props.text}</div>
		</div>
	);
}
