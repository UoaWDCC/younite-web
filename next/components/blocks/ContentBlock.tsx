import CenteredTextBlock from "./CenteredText";
import ImageWithText from "./ImageWithText";
import RichText from "./RichText";

export default function ContentBlock({ props }: { props: any }) {
  switch (props.__component) {
    case "content-block.centered-text-block":
      return CenteredTextBlock({ props });
    case "content-block.content-block":
      return ImageWithText({ props });
    case "content-block.centered-paragraph":
      return RichText({ text: props });
  }
}
