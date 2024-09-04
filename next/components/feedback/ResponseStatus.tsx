import { IoBanSharp, IoCheckmarkCircle } from "react-icons/io5";

export default function ResponseStatus({ submit }: { submit: string }) {
  if (submit == "true") {
    return (
      <div className="mb-4 flex items-center animate-[fadeIn_0.3s_ease-in_forwards]">
        <IoCheckmarkCircle />
        <p className="whitespace-pre"> Got it! Thanks for getting in touch!</p>
      </div>
    );
  } else if (submit == "finished") {
    return (
      <div className="mb-4 flex items-center animate-[fadeIn_0.3s_ease-in_forwards]">
        <IoBanSharp />
        <p className="whitespace-pre">
          {" "}
          Heads up! You've already sent this response.
        </p>
      </div>
    );
  } else if (submit == "error") {
    return (
      <div className="mb-4 flex items-center animate-[fadeIn_0.3s_ease-in_forwards]">
        <IoBanSharp />
        <p className="whitespace-pre">
          {" "}
          Whoops! Something went wrong there. Check you've got wifi and
          gave us the right email!
        </p>
      </div>
    );
  } else {
    return undefined;
  }
}
