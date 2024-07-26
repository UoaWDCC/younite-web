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
  const [activeSection, setActiveSection] = useState<"FAQ" | "Contact">("FAQ");

  function handleClick() {
    // added this fn
    if (activeSection == "Contact") {
      setActiveSection("FAQ");
    } else {
      setActiveSection("Contact");
    }
  }

  return (
    <div className="flex py-24 w-full max-w-5xl mx-auto gap-12">
      <div className="flex flex-col items-end">
        <button
          className="uppercase font-bold text-7xl mb-2"
          onClick={() => setActiveSection(activeSection)} // changed this to activeSection
        >
          {activeSection == "FAQ" ? "FAQ" : "Contact"}
        </button>
        <button
          className="uppercase text-4xl font-bold"
          onClick={() => handleClick()} // changed this to handleClick
        >
          {activeSection == "FAQ" ? "Contact" : "FAQ"}
        </button>
      </div>
      <div className="flex-1 mr-40">
        {activeSection == "FAQ" ? <FAQ QAs={QAs} /> : <FeedbackForm />}
      </div>
    </div>
  );
}
