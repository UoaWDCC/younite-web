import CenteredTextBlock from "./blocks/CenteredText";
import ImageWithText from "./blocks/ImageWithText";

export default function ContentBlock({ props }: { props: any }) {
	switch (props.__component) {
		case "content-block.centered-text-block":
			return CenteredTextBlock({ props });
		case "content-block.content-block":
			return ImageWithText({ props });
	}
}
