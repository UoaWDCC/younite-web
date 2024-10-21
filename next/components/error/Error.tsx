"use client";

import Link from "next/link";

type ErrorProps = {
  type: "404" | "500";
};

export default function ErrorComponent({ type }: ErrorProps) {
  return (
    <div className="">
      <div>
        <h2 className="">{type === "404" ? "404" : "500"}</h2>
      </div>

      <div>
        <h1 className="">{type === "404" ? "PAGE NOT FOUND" : "ERROR"}</h1>
      </div>

      <p className="">
        {type === "404"
          ? "Oops! The page you are looking for does not exist."
          : "Oops! Something went wrong."}
      </p>

      <Link href="/">
        <button className="">BACK TO HOME</button>
      </Link>
    </div>
  );
}
