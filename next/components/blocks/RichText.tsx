import ReactMarkdown from "react-markdown";
import style from "./RichText.module.css";

export default function RichText({ text }: { text: string }) {
  return (
    <div>
      <ReactMarkdown className={style.reactMarkdown}>{text}</ReactMarkdown>
    </div>
  );
}
