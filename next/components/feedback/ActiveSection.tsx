"use client";
import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

export default function ActiveSection({
  data,
}: {
  data: {
    QuestionAnswer: {
      Question: string;
      Answer: string;
    }[];
  };
}) {
  const QAs = data.QuestionAnswer;
  const [activeSection, setActiveSection] = useState<"FAQ" | "Contact">("FAQ");

  return (
    <div className="flex py-24 w-full max-w-5xl mx-auto gap-12">
      <div className="flex flex-col items-end">
        <button className="font-bold text-7xl mb-2">FAQ</button>
        <button className="uppercase text-4xl font-bold">Contact</button>
      </div>
      <div className="w-full">
        <h1 className="text-3xl font-bold mb-10">Frequently Asked Questions</h1>
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
      </div>
    </div>
  );
}
