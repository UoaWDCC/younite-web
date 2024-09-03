type BlobProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Blob({ children, className = "" }: BlobProps) {
  return (
    <div
      className={`block rounded-3xl text-[#014788] text-lg p-8 ${className}`}
    >
      {children}
    </div>
  );
}
