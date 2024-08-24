import RichText from "../blocks/RichText";

type BlobProps = {
  children: React.ReactNode | string;
  className?: string;
};

export default function Blob({ children, className = "" }: BlobProps) {
  return (
    <div
      className={`block rounded-3xl text-blue-950 text-lg p-8 [&_:is(h1, h2, h3)]:text-xl [&_:is(h1, h2, h3)]:font-bold ${className}`}
    >
      <RichText>{children}</RichText>
    </div>
  );
}
