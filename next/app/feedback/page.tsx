import FeedbackForm from "@/components/feedback/FeedbackForm";
import Header from "@/components/header/header";
import { feedbackPageSchema } from "@/schemas/single/FeedbackPage";
import fetchStrapi from "@/util/strapi";
import { IoChevronDown } from "react-icons/io5";

export default async function Feedback() {
  const data = await fetchStrapi("faq-page", feedbackPageSchema);
  const QAs = data.QuestionAnswer;

  return (
    <div className="relative flex flex-col bg-gradient-1 min-h-screen h-full overflow-y-hidden isolate">
      {/* @ts-ignore */}
      <Header />
      <svg
        viewBox="0 0 1440 1027"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 -z-10 w-full h-96"
        preserveAspectRatio="xMidYMin slice"
      >
        <path
          d="M302.5 33.0978C195 18.0978 92.5 33.0978 -5.5 120.098V687.098L1442.5 706.098V407.598C1384 447.098 1355.5 309.098 1285.5 309.098C1215.5 309.098 884.5 475.598 803.5 386.598C722.5 297.598 697.5 224.098 610.5 150.098C523.5 76.098 410 48.0979 302.5 33.0978Z"
          fill="url(#paint0_linear_207_609)"
        />
        <path
          d="M191 431.801C70 453.301 30 623.301 -0.5 763.301L-18 1009.3L1467 1026.55V534.452C1408.5 573.952 1366 648.452 1272.5 648.452C1179 648.452 1157 508.301 916.5 508.301C676 508.301 638.5 619.452 487.5 534.452C336.5 449.452 312 410.302 191 431.801Z"
          fill="url(#paint1_linear_207_609)"
        />
        <path
          d="M-12.5 96.1678C86.3798 9.10171 189.8 -5.90973 298.265 9.10171C406.73 24.1132 521.249 52.1345 609.03 126.191C696.811 200.247 722.036 273.803 803.763 362.87C885.49 451.938 1219.46 285.311 1290.09 285.311C1360.72 285.311 1389.47 423.416 1448.5 383.886"
          stroke="#FAAB36"
          strokeWidth="8"
          strokeDasharray="16 16"
        />
        <defs>
          <linearGradient
            id="paint0_linear_207_609"
            x1="718.5"
            y1="28"
            x2="718.5"
            y2="706.098"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.395831" stopColor="#FFE0B1" />
            <stop offset="1" stopColor="#FFE0B1" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_207_609"
            x1="743"
            y1="348.451"
            x2="743"
            y2="1026.55"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.395831" stopColor="#FFE0B1" />
            <stop offset="1" stopColor="#FFE0B1" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex py-24 w-full max-w-5xl mx-auto gap-12">
        <div className="flex flex-col items-end whitespace-nowrap">
          <p className="font-bold text-7xl mb-2">FAQ</p>
          <p className="uppercase text-4xl font-bold">& Contact</p>
        </div>
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-10">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col gap-6">
            {QAs.map((QA) => {
              return (
                <details
                  key={QA.Question}
                  className=" bg-white rounded-md text-b-dark-blue w-full"
                >
                  <div className="p-4">{QA.Answer}</div>
                  <summary className="list-none cursor-pointer flex justify-between items-center border-b border-b-dark-blue p-4">
                    <h2>{QA.Question}</h2>
                    <IoChevronDown className="w-6 h-6 summary-arrow transition-transform" />
                  </summary>
                </details>
              );
            })}
          </div>
          <h2 className="text-3xl font-bold mb-8 mt-16">Contact Form</h2>
          <FeedbackForm />
        </div>
      </div>
    </div>
  );
}
