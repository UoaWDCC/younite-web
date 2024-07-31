"use client";
import { useState } from "react";
import FAQ from "./FAQ";
import FeedbackForm from "./FeedbackForm";

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
  const [style, setStyle] = useState<string>();
  const [activeSection, setActiveSection] = useState<"FAQ" | "Contact">("FAQ");

  function handleClick() {
    // added this fn
    if (activeSection == "Contact") {
      setActiveSection("FAQ");
    } else {
      setActiveSection("Contact");
    }

    setStyle("opacity-0");
    setTimeout(() => {
      setStyle("animate-[fadeIn_1s_ease-in]");
    }, 20);
  }

  return (
    <div className="flex py-24 w-full max-w-5xl mx-auto gap-12">
      <div className="flex flex-col items-end">
        <button
          className={"ml-5 uppercase font-bold text-7xl mb-2 " + style}
          disabled={true}
        >
          {activeSection == "FAQ" ? "FAQ" : "Contact"}
        </button>
        <button
          className={"ml-5 uppercase text-4xl font-bold " + style}
          onClick={() => handleClick()} // changed this to handleClick
        >
          {activeSection == "FAQ" ? "Contact" : "FAQ"}
        </button>
      </div>
      <div className="flex-1 mr-5">
        {activeSection == "FAQ" ? <FAQ QAs={QAs} /> : <FeedbackForm />}
      </div>
    </div>
  );
}
