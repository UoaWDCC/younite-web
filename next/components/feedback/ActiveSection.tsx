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

  return (
    <div className="flex py-24 w-full max-w-5xl mx-auto gap-12">
      <div className="flex flex-col items-end">
        <button
          className="font-bold text-7xl mb-2"
          onClick={() => setActiveSection("FAQ")}
        >
          FAQ
        </button>
        <button
          className="uppercase text-4xl font-bold"
          onClick={() => setActiveSection("Contact")}
        >
          Contact
        </button>
      </div>
      <div>{activeSection == "FAQ" ? <FAQ QAs={QAs} /> : <FeedbackForm />}</div>
    </div>
  );
}
