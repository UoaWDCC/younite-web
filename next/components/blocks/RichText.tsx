import React, { Children } from "react";
import ReactMarkdown from "react-markdown";
import style from "./RichText.module.css";

export default function RichText({
  children,
}: {
  children: React.ReactNode | string;
}) {
  const childrenArray = Children.toArray(children);
  return (
    <div>
      {Children.map(childrenArray, (c) => {
        if (typeof c === "string") {
          return (
            <ReactMarkdown className={style.reactMarkdown}>{c}</ReactMarkdown>
          );
        }
        return c;
      })}
    </div>
  );
}
