import { IoCheckmarkCircle } from "react-icons/io5";
import { useState } from "react";

export default function FeedbackForm() {
  async function handleSubmit(data: FormData) {
    "use client";
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");

    console.log({
      name,
      email,
      message,
    });
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
        <div className="mb-4 flex items-center">
          <IoCheckmarkCircle />
          <p>Your response has been recorded!</p>
        </div>
        <input
          className="font-bold first:mx-auto px-12 py-3 bg-b-blue text-b-dark-blue rounded-full shadow-md cursor-pointer"
          type="submit"
          value="SUBMIT"
        />
      </form>
    </>
  );
}
