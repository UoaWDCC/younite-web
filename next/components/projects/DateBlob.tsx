type DateBlobProps = {
  Date: Date;
};

const DateBlob = ({
  timelineElement,
  isEven,
}: {
  timelineElement: DateBlobProps;
  isEven: boolean;
}) => {
  const dateOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  } as const; // As const ensures it's a literal type not strings as toLocaleDateString expects a literal type

  return (
    <div className="flex items-center h-8">
      <div className={`bg-white h-1 ${isEven ? "w-32" : "w-20"}`}></div>
      <div className="flex items-center justify-center bg-white w-32 h-full rounded-3xl text-black text-sm font-bold">
        {timelineElement.Date.toLocaleDateString("en-NZ", dateOptions)}
      </div>
    </div>
  );
};

export default DateBlob;
