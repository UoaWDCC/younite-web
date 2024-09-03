export default function LineWrapper({
  children,
  hasLineAbove,
}: {
  children: React.ReactNode;
  hasLineAbove: boolean;
}) {
  const line = <div className="bg-white w-1 h-[50px]" />;

  return (
    <div className="flex flex-col items-center mx-6">
      {hasLineAbove && line}
      {children}
      {!hasLineAbove && line}
    </div>
  );
}
