type HistoryTextProps = {
  title: string;
  description: string;
};

export default function HistoryText({ title, description }: HistoryTextProps) {
  return (
    <div className="bg-b-orange text-b-dark-blue px-6 py-4 rounded-3xl shadow-lg h-full w-full overflow-hidden">
      {" "}
      <h1 className="text-lg font-semibold mb-2">{title}</h1>
      <p className="mb-4 text-base font-normal ">{description}</p>
    </div>
  );
}
