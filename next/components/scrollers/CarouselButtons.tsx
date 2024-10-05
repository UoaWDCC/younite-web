type ScrollButtonsProps = {
  scrollPrev: () => void;
  scrollNext: () => void;
};

export default function ScrollButtons({
  scrollPrev,
  scrollNext,
}: ScrollButtonsProps) {
  return (
    <div className="flex justify-center -mb-10 sm:-mb-5 md:-mb-0">
      <button className="-mr-0.5" onClick={scrollPrev}>
        <ScrollButtonGraphic />
      </button>
      <button className="rotate-180" onClick={scrollNext}>
        <ScrollButtonGraphic />
      </button>
    </div>
  );
}

function ScrollButtonGraphic() {
  return (
    <svg
      width="77"
      height="41"
      viewBox="0 0 77 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 'D' Container */}
      <path
        d="M0.324324 15.5676C0.324324 7.14896 7.14896 0.324324 15.5676 0.324324H76.1707V40.5993H15.5676C7.14897 40.5993 0.324324 33.7746 0.324324 25.356V15.5676Z"
        stroke="#014788"
        strokeWidth="0.648649"
      />
      {/* Arrow */}
      <path
        d="M31.6088 25.311L26.4785 19.9856L31.6088 14.6602M27.1911 19.9856H47.3353"
        stroke="#014788"
        strokeWidth="1.88514"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
