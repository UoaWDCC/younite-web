import { TimelineElement } from "@/schemas/single/AboutPage";

type DateBlobProps = {
  timelineElement: { date: Date };
};

const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

const DateBlob = ({ timelineElement }: DateBlobProps) => {
  return (
    <div className="flex items-center mt-header h-8">
      <div className="bg-white w-32 h-1"></div>
      <div className="flex items-center justify-center bg-white w-32 h-full rounded-lg text-black text-sm">
        {timelineElement.date.toLocaleDateString()}
      </div>
    </div>
  );
};

export default DateBlob;
