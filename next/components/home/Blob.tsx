type BlobProps = {
  children: string | React.ReactNode;
  className?: string;
};

export default function Blob({ children, className = "" }: BlobProps) {
  return (
    <div
      className={`block rounded-3xl text-[#014788] text-lg p-8 [&_:is(h1, h2, h3)]:text-xl [&_:is(h1, h2, h3)]:font-bold ${className}`}
    >
      {children}
    </div>
  );
}
