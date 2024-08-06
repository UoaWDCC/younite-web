import { ReactNode } from "react";
import RichText from "../blocks/RichText";

type BlobProps = {
  children: ReactNode;
  className?: string;
};

export default function Blob({ children, className = "" }: BlobProps) {
  // If children is a string, render it as a RichText component
  const richChildren = <RichText props={{ text: children }} />;
  children = children instanceof String ? richChildren : children;

  return (
    <div
      className={`block rounded-3xl text-white text-lg p-8 [&_:is(h1, h2, h3)]:text-xl [&_:is(h1, h2, h3)]:font-bold ${className}`}
    >
      {children}
    </div>
  );
}
