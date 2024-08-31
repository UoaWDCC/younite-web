import ReactMarkdown from "react-markdown";
import style from "./RichText.module.css";

export default function RichText({ props }: { props: string }) {
  return (
    <div>
      <ReactMarkdown className={style.reactMarkdown}>{props}</ReactMarkdown>
    </div>
  );
}
