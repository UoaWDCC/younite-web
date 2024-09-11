import { TimelineElement } from "@/schemas/single/AboutPage";

type DateBlobProps = {
  date: Date;
};



const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

const DateBlob = ({timelineElement, isEven} : {timelineElement:DateBlobProps, isEven:boolean}) => {
  return (
    <div className="flex items-center mt-header h-8">
      <div className={`bg-white h-1 ${isEven ? "w-32" : "w-20"}`}></div>
      <div className="flex items-center justify-center bg-white w-32 h-full rounded-lg text-black text-sm">
        {timelineElement.date.toLocaleDateString()}
      </div>
    </div>
  );
};

export default DateBlob;
