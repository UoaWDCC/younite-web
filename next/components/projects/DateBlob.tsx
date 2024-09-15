type DateBlobProps = {
  date: Date;
};

const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

const DateBlob = ({timelineElement, isEven} : {timelineElement:DateBlobProps, isEven:boolean}) => {
  return ( // change outer height element to allow for photo height etc
    <div className="flex flex-row items-center pl-[6px] h-48">
      <div className = "bg-white w-1 h-full mt-0"></div>
      <div className="flex flex-row items-center h-8">
        <div className={`bg-white h-1 ${isEven ? "w-32" : "w-20"}`}></div>
      <div className="flex items-center justify-center bg-white w-32 h-full rounded-lg text-black text-sm">
        {timelineElement.date.toLocaleDateString()}
      </div>
      </div>
    </div>
  );
};

export default DateBlob;
