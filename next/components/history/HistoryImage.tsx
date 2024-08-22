type HistoryImageProps = {
  src: string;
  hasLineAbove: boolean;
};

export default function HistoryImage({ src, hasLineAbove }: HistoryImageProps) {
  const line = <div className="bg-white w-[1px] h-[50px]">{/* fill, background */}</div>;

  return (
    <div>
      {hasLineAbove && line}
      <img src={src} />
      {!hasLineAbove && line}
    </div>

    // <div>
    //   <img src={src}/>
    //   <div className="">
    //     {/* fill, background */}
    //   </div>
    // </div>
  );
}

