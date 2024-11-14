type FloatingDateProps = {
  date: Date;
  position: "top" | "bottom"; // Position of the main component
};

export default function FloatingDate({ date, position }: FloatingDateProps) {
  const positionStyle = position === "top" ? "-bottom-10" : "-top-10";

  return (
    <div
      className={`absolute ${positionStyle} px-6 py-4 text-white text-xs font-bold`}
    >
      {date.toLocaleDateString()}
    </div>
  );
}
