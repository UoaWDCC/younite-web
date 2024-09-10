export default function Project({
  year,
  projects,
}: {
  year: string | number;
  projects: any;
}) {
  return (
    <div className="flex flex-col mt-header items-center justify-center text-center w-full">
      <div className="fixed bottom-0 mb-footer -z-10 -left-52 w-1/3">
        <svg
          width="691"
          height="685"
          viewBox="0 0 691 685"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative w-full h-full left-0 bottom-60"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M688.69 422.741C700.91 520.057 630.121 614.768 548.543 662.581C474.726 705.846 384.484 674.538 302.224 649.252C237.58 629.382 188.017 586.212 139.787 536.936C81.9466 477.841 -8.4448 424.134 0.859565 341.351C10.1537 258.659 119.65 245.46 178.782 189.984C245.227 127.647 273.339 -12.303 362.886 1.70646C453.158 15.8293 437.927 165.223 495.421 239.521C552.207 312.905 677.044 329.994 688.69 422.741Z"
            fill="url(#paint0_linear_28_50)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_28_50"
              x1="152.99"
              y1="542.874"
              x2="427.952"
              y2="44.3011"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#6EACC4" />
              <stop offset="1" stop-color="#6EACC4" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
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

              <stop offset="0" stop-color="#6CC3E5" stop-opacity="1"/>
              <stop offset="0.95" stop-color="#62BCE0" stop-opacity="0.8" />
              <stop offset="1" stop-color="#FFE2C8" stop-opacity="1" />


            </linearGradient>
          </defs>
        </svg>
      </div>
      {year == new Date().getFullYear() ? (
        <p className="text-6xl font-bold leading-[0.95]">CURRENT PROJECTS</p>
      ) : (
        <p className="text-6xl font-bold leading-[0.95]">PREVIOUS PROJECTS</p>
      )}
      <div className="max-w-4xl">
        <p className="text-base p-10 text-wrap">
          A group of young people eager to enact growing change in the Devonport
          Takapuna comunity following in youth voices and youth leadership.
        </p>
        <div className="h-[2800px]"></div>
      </div>
    </div>
  );
}
