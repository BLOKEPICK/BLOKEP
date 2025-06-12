import Head from "next/head";
import { useEffect, useState } from "react";

export default function VIPForm() {
  const [tokenValid, setTokenValid] = useState(null);
  const [token, setToken] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const tokenFromURL = query.get("token");
    setToken(tokenFromURL);

    if (!tokenFromURL) {
      window.location.href = "/";
      return;
    }

    fetch(`https://node-type-checker-blokepick.replit.app/verify?token=${tokenFromURL}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.valid) {
          setTokenValid(true);
        } else {
          setTokenValid(false);
        }
      })
      .catch(() => {
        setTokenValid(false);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Enviar token como usado
    await fetch("https://node-type-checker-blokepick.replit.app/api/use", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    });

    setSubmitted(true);
    setTimeout(() => {
      window.location.href = "/";
    }, 30000);
  };

  return (
    <>
      <Head>
        <title>BLOKE PICK | Smarter Betting Starts Here</title>
        <meta name="description" content="Join BLOKE PICK — the premium sports betting community built for disciplined bettors. Access daily picks, smart parlays, real data analysis, and a private VIP Discord where winning is the mindset. Stop guessing. Start betting smarter." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center px-4 text-center max-w-5xl mx-auto min-h-screen bg-black text-white">
        <h1 className="text-5xl font-bold mt-16 tracking-widest">BLOKE PICK</h1>
        <div className="w-24 h-px bg-gray-600 my-4 rounded-full opacity-50" />
        <p className="text-xl max-w-xl">Your journey to smarter sports betting starts here.</p>
        <p className="text-md text-gray-400 mb-6">Premium picks, data-driven bets, and a winning community.</p>

        {tokenValid === null && <p className="mt-8 text-white">Validating access...</p>}

        {tokenValid === false && (
          <div className="mt-10 text-red-400">
            <h2 className="text-2xl font-semibold">❌ Access Denied</h2>
            <p className="mt-2">This link has already been used or is invalid.</p>
            <a href="/" className="mt-4 inline-block text-blue-400 underline">Return to homepage</a>
          </div>
        )}

        {tokenValid && !submitted && (
          <form
            onSubmit={handleSubmit}
            action="https://formspree.io/f/manjoblp"
            method="POST"
            className="w-full max-w-md mt-10 space-y-6"
          >
            <div className="text-left">
              <label className="block text-sm font-medium mb-1">
                Discord Username <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="discord"
                required
                className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-600 text-white"
              />
            </div>

            <div className="text-left">
              <label className="block text-sm font-medium mb-1">
                Purchase Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-600 text-white"
              />
            </div>

            <div className="text-left">
              <label className="block text-sm font-medium mb-1">
                Additional Comment (optional)
              </label>
              <textarea
                name="comment"
                rows="3"
                className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-600 text-white"
              />
            </div>

            <input type="hidden" name="token" value={token} />

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full transition"
            >
              Submit
            </button>
          </form>
        )}

        {submitted && (
          <div className="mt-10 text-green-400">
            <h2 className="text-2xl font-semibold">✅ Form submitted successfully!</h2>
            <p className="mt-2">Our team will grant you access to the VIP server shortly.</p>
            <p className="text-sm text-gray-400 mt-1">You will be redirected to the homepage in 30 seconds...</p>
          </div>
        )}
      </main>
    </>
  );
}
