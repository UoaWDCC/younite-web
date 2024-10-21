export default function UpArrow({ className = "" }: { className?: String }) {
  return (
    <svg
      className={`w-6 h-6 ml-1 inline ${className}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 13 L11 7 L16 13"
      />
    </svg>
  );
}
