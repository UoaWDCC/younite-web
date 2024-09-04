import { sendEmail } from "@/util/strapi";
import { useState } from "react";
import ResponseStatus from "./ResponseStatus";

export default function FeedbackForm() {
  const [submitState, setSubmitState] = useState<
    "true" | "false" | "finished" | "error"
  >("false");

  async function handleSubmit(data: FormData) {
    try {
      if (submitState === "true") {
        setSubmitState("finished");
      } else if (submitState === "false") {
        const name = data.get("name") as string;
        const email = data.get("email") as string;
        const message = data.get("message") as string;
        const res = await sendEmail(name, email, message);

        if (res === 201) {
          setSubmitState("true");
        } else {
          setSubmitState("error");
        }
      } else {
        setSubmitState("false");
      }
    } catch (err) {
      console.error(err);
      setSubmitState("error");
    }
  }

  return (
    <>
      <form action={handleSubmit}>
        <div className="flex flex-col">
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
          <ResponseStatus submit={submitState} />
        </div>
        <button
          className="font-bold first:mx-auto px-12 py-3 bg-b-blue text-b-dark-blue rounded-full shadow-md cursor-pointer uppercase"
          type="submit"
        >
          {submitState === "false" || submitState === "true" ? "Send!" : "Try again?"}
        </button>
      </form>
    </>
  );
}
