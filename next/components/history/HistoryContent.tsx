type HistoryContentProps = {
  title: string;
  description: string;
}



export default function HistoryContent({ title, description }: HistoryContentProps) {

  return (
    <div>
      <div className="bg-[#FAAB36] p-5 rounded-3xl shadow-lg h-[170px] w-auto max-w-[500px] overflow-hidden py-1">        <h1 className="text-lg font-semibold mb-2 pt-2.5">{title}</h1>
        <p className="mb-4 text-base font-normal ">
          {description}
        </p>
      </div>
      {/* const width = document.getElementById("content").offsetWidth; */}
    </div>

  )
}