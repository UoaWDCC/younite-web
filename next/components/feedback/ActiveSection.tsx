"use client";
import selectionArrow from "@/assets/feedback/selectionArrow.png";
import Image from "next/image";
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
  const [styleClick, setStyleClick] = useState<boolean>();
  const [activeSection, setActiveSection] = useState<"FAQ" | "Contact">("FAQ");

  function handleClick() {
    setStyleClick(true);

    setTimeout(() => {
      if (activeSection == "Contact") {
        setActiveSection("FAQ");
      } else {
        setActiveSection("Contact");
      }
      setStyleClick(false);
    }, 300);
  }

  return (
    <div
      className={`flex w-full max-w-5xl mb-24 mx-auto gap-12 ${styleClick ? "animate-[fadeOut_0.3s_ease-in_forwards]" : "animate-[fadeIn_0.3s_ease-in_forwards]"}`}
    >
      <div className="flex flex-col">
        <div className="flex flex-col items-end w-80 ml-5">
          <button
            className={`text-wrap uppercase font-bold text-7xl mb-2`}
            disabled={true}
          >
            {activeSection == "FAQ" ? "FAQ" : "Contact"}
          </button>
          <div className="flex items-center">
            <Image
              src={selectionArrow}
              alt="Selection arrow"
              className="inline-block"
            />
            <button
              className="text-b-dark-blue ml-2 uppercase text-4xl font-bold"
              onClick={() => handleClick()}
            >
              {activeSection == "FAQ" ? "Contact" : "FAQ"}
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 mr-5">
        {activeSection == "FAQ" ? <FAQ QAs={QAs} /> : <FeedbackForm />}
      </div>
    </div>
  );
}
