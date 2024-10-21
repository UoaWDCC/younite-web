type DateBlobProps = {
  Date: Date;
};

const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

const DateBlob = ({
  timelineElement,
  isEven,
  type,
}: {
  timelineElement: DateBlobProps;
  isEven: boolean;
  type: "current" | "old";
}) => {
  return (
    <div
      className={`flex flex-row items-center pl-[6px] ${type === "current" ? "h-96" : "h-48"}`}
    >
      <div className="bg-white w-1 h-full mt-0"></div>
      <div className="flex flex-row items-center h-8">
        <div className={`bg-white h-1 ${isEven ? "w-32" : "w-20"}`}></div>
        <div className="flex items-center justify-center bg-white w-32 h-full rounded-3xl text-black text-sm font-bold">
          {timelineElement.Date.toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default DateBlob;
