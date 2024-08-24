import React, { Children } from "react";
import ReactMarkdown from "react-markdown";

type RichTextProps = {
  text: String;
};

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
          return <ReactMarkdown>{c}</ReactMarkdown>;
        }
        return c;
      })}
    </div>
  );
}
