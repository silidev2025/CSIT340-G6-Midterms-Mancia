import { useState } from "react";

function Waitlist() {
  const [email, setEmail] = useState("");
  const [emails, setEmails] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const trimmed = email.trim();
    if (trimmed === "" || emails.includes(trimmed)) return;
    setEmails([...emails, trimmed]);
    setEmail("");
  }

  return (
    <section className="mx-20 my-10 rounded-xl border-2 border-[#000000] bg-[#EEEEEE] p-8">
      <h3 className="text-3xl font-bold">Join the waitlist</h3>
      <p className="mt-2 text-xl">Get notified when new plans launch.</p>

      <form className="mt-6 flex gap-4" onSubmit={handleSubmit}>
        <input
          type="email"
          required
          placeholder="you@example.com"
          className="flex-1 rounded-lg border-2 border-[#000000] bg-[#FFFFFF] px-4 py-3 text-xl"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button
          type="submit"
          className="cursor-pointer rounded-lg bg-[#CB2957] px-8 py-3 text-xl font-bold text-[#EEEEEE]"
        >
          Join
        </button>
      </form>

      <p className="mt-4 text-xl text-[#CB2957]">
        {emails.length} on the waitlist
      </p>
      <ul className="mt-2 text-xl">
        {emails.map((item) => (
          <li key={item} className="border-t border-[#DDDDDD] py-2">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Waitlist;
