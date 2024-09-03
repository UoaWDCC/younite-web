type HistoryTextProps = {
  title: string;
  description: string;
  hasLineAbove: boolean;
};

export default function HistoryText({
  title,
  description,
  hasLineAbove,
}: HistoryTextProps) {
  const line = (
    <div className="bg-white w-1 h-[50px]">{/* fill, background */}</div>
  );

  return (
    <div>
      {hasLineAbove && line}
      <div className="bg-[#FAAB36] p-5 rounded-3xl shadow-lg h-[170px] w-auto max-w-[500px] overflow-hidden py-1">
        {" "}
        <h1 className="text-lg font-semibold mb-2 pt-2.5">{title}</h1>
        <p className="mb-4 text-base font-normal ">{description}</p>
      </div>
      {!hasLineAbove && line}
    </div>
  );
}
