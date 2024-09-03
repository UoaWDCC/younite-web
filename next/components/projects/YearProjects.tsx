export default function YearProjects({
  year,
  projects,
}: {
  year: number;
  projects: any;
}) {
  return (
    <div className="flex flex-col mt-header items-center justify-center text-center">
      <div className="fixed bottom-0 -z-10 w-full h-full">
        <svg
          width="1664"
          height="2065"
          viewBox="0 0 1664 2065"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="1797"
            height="2065"
            fill="url(#paint0_linear_1319_1591)"
            fill-opacity="0.5"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1319_1591"
              x1="964.64"
              y1="1868.89"
              x2="935.889"
              y2="-54.7657"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.08" stop-color="#6CC3E5" />
              <stop offset="0.475" stop-color="#FFE9CC" stop-opacity="0.8" />
              <stop offset="0.785" stop-color="#FFCA85" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p className="text-6xl font-bold leading-[0.95]">CURRENT PROJECTS</p>
      <div className="max-w-4xl">
        <p className="text-base p-10 text-wrap">
          A group of young people eager to enact growing change in the Devonport
          Takapuna comunity following in youth voices and youth leadership.
        </p>
      </div>
    </div>
  );
}
