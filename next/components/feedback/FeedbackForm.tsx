export default function FeedbackForm() {
  async function handleSubmit(data: FormData) {
    "use server";
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
        className="mb-8 bg-white px-4 py-2 rounded-md shadow-md text-b-dark-blue"
      ></textarea>

      <input
        className="mx-auto px-12 py-3 bg-b-blue border-b-dark-blue border text-b-dark-blue rounded-md shadow-md cursor-pointer"
        type="submit"
        value="Submit"
      />
    </form>
  );
}
