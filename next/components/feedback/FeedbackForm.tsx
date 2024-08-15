import { sendEmail } from "@/util/strapi";
import { useState } from "react";
import { IoBanSharp, IoCheckmarkCircle } from "react-icons/io5";

export default function FeedbackForm() {
  const [submit, useSubmit] = useState<"true" | "false" | "finished" | "error">("false");

  function ResponseStatus() {
    if (submit == "true") {
      return (
        <div className="mb-4 flex items-center animate-[fadeIn_0.3s_ease-in_forwards]">
          <IoCheckmarkCircle />
          <p>Your response has been recorded!</p>
        </div>
      );
    } else if (submit == "finished") {
      return (
        <div className="mb-4 flex items-center animate-[fadeIn_0.3s_ease-in_forwards]">
          <IoBanSharp />
          <p>You have already submitted this response.</p>
        </div>
      );
    } else if (submit == "error") {
      return (
        <div className="mb-4 flex items-center animate-[fadeIn_0.3s_ease-in_forwards]">
          <IoBanSharp />
          <p>Server error. Please try again later.</p>
        </div>
      );
    } else {
      return undefined;
    }
  }

  async function handleSubmit(data: FormData) {
    "use client";

    if (submit === "true") {
      useSubmit("finished");
    } else if (submit === "false") {
      const name = data.get("name") as string;
      const email = data.get("email") as string;
      const message = data.get("message") as string;
      const res = await sendEmail(name, email, message);

      if (res === 201) {
        useSubmit("true");
      } else {
        useSubmit("error");
      }
    }
  }

  return (
    <>
      <form action={handleSubmit} className="flex flex-col">
        <label className="mb-2">Name</label>
        <input
          name="name"
          type="text"
          required
          placeholder="Enter your full name"
          className="mb-4 bg-white px-4 py-2 rounded-md shadow-md text-b-dark-blue"
        />
        <label className="mb-2">Email</label>
        <input
          name="email"
          type="email"
          required
          placeholder="Enter your email"
          className="mb-4 bg-white px-4 py-2 rounded-md shadow-md text-b-dark-blue"
        />
        <label className="mb-2">Message</label>
        <textarea
          name="message"
          required
          placeholder="Enter your feedback"
          className="mb-4 bg-white px-4 py-2 rounded-md shadow-md text-b-dark-blue"
        ></textarea>
        <ResponseStatus />
        {/* {submit === "true" ? (
          <div className="mb-4 flex items-center animate-[fadeIn_0.3s_ease-in_forwards]">
            <IoCheckmarkCircle />
            <p>Your response has been recorded!</p>
          </div>
        ) : submit === "finished" ? (
          <div className="mb-4 flex items-center animate-[fadeIn_0.3s_ease-in_forwards]">
            <IoBanSharp />
            <p>You have already submitted this response.</p>
          </div>
        ) : submit === "error" ? (
          <div className="mb-4 flex items-center animate-[fadeIn_0.3s_ease-in_forwards]">
            <IoBanSharp />
            <p>Server error. Please try again later.</p>
          </div>
        ) : undefined} */}
        <input
          className="font-bold first:mx-auto px-12 py-3 bg-b-blue text-b-dark-blue rounded-full shadow-md cursor-pointer"
          type="submit"
          value="SUBMIT"
        />
      </form>
    </>
  );
}
