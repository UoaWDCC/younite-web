import { IoBanSharp, IoCheckmarkCircle } from "react-icons/io5";
export default function ResponseStatus({ submit }: { submit: string }) {
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
