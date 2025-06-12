import { useState, useEffect } from "react";
import Head from "next/head";

export default function VIPForm() {
  const [token, setToken] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const t = new URLSearchParams(window.location.search).get("token");
    if (t) setToken(t);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    await fetch("https://formspree.io/f/manjoblp", {
      method: "POST",
      body: form,
      headers: {
        Accept: "application/json",
      },
    });

    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>BLOKE PICK | Smarter Betting Starts Here</title>
        <meta
          name="description"
          content="Join BLOKE PICK — the premium sports betting community built for disciplined bettors. Access daily picks, smart parlays, real data analysis, and a private VIP Discord where winning is the mindset. Stop guessing. Start betting smarter."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center px-4 text-center max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mt-16 tracking-widest">BLOKE PICK</h1>
        <div className="w-24 h-px bg-gray-600 my-4 rounded-full opacity-50" />
        <p className="text-xl max-w-xl">Your journey to smarter sports betting starts here.</p>
        <p className="text-md text-gray-400 mb-6">
          Premium picks, data-driven bets, and a winning community.
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg space-y-4 text-left bg-white p-6 rounded-xl shadow-md"
          >
            <input type="hidden" name="token" value={token} />

            <label className="block">
              <span className="text-sm font-medium text-black">
                Discord Username <span className="text-red-500">*</span>
              </span>
              <input
                type="text"
                name="discord"
                required
                className="mt-1 w-full border border-gray-300 p-2 rounded-lg text-black"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-black">
                Email used for payment <span className="text-red-500">*</span>
              </span>
              <input
                type="email"
                name="email"
                required
                className="mt-1 w-full border border-gray-300 p-2 rounded-lg text-black"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-black">
                Additional comments (optional)
              </span>
              <textarea
                name="comment"
                className="mt-1 w-full border border-gray-300 p-2 rounded-lg text-black"
              />
            </label>

            <button
              type="submit"
              className="w-full bg-black text-white font-semibold py-2 px-4 rounded-xl hover:opacity-80 transition"
            >
              Submit
            </button>
          </form>
        ) : (
          <div className="bg-green-100 text-green-800 p-6 rounded-xl text-center max-w-lg">
            <h2 className="text-2xl font-semibold mb-2">✅ Thank you!</h2>
            <p>We've received your form. Our team will add you to the VIP server shortly.</p>
          </div>
        )}
      </main>
    </>
  );
}
