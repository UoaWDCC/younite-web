export default function Hamburger() {
  return (
    <svg
      className={`w-6 h-6 mr-2`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16 M4 12h16 M4 18h16"
      />
    </svg>
  );
}
