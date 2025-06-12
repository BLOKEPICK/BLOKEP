import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function VIPForm() {
  const router = useRouter();
  const [status, setStatus] = useState("loading"); // loading, valid, invalid
  const [token, setToken] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const t = searchParams.get("token");

    if (!t) {
      // Redirigir si no hay token
      router.push("/");
      return;
    }

    setToken(t);

    // Validar token con el backend
    fetch(`https://node-type-checker-blokepick.replit.app/verify?token=${t}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.valid) {
          setStatus("valid");
        } else {
          setStatus("invalid");
        }
      })
      .catch(() => {
        setStatus("invalid");
      });
  }, []);

  if (status === "loading") {
    return <div className="text-center mt-10">🔄 Verifying access...</div>;
  }

  if (status === "invalid") {
    return (
      <main className="flex flex-col items-center justify-center h-screen text-center px-4">
        <h1 className="text-2xl font-bold text-red-600">❌ Access Denied</h1>
        <p className="text-gray-500 mt-2">
          This link is either invalid or has already been used.
        </p>
        <button
          onClick={() => router.push("/")}
          className="mt-4 px-4 py-2 bg-black text-white rounded-xl hover:opacity-80 transition"
        >
          Return Home
        </button>
      </main>
    );
  }

  // ✅ Token válido: mostrar formulario
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

        <form
          action="https://formspree.io/f/manjoblp"
          method="POST"
          className="w-full max-w-lg space-y-4 text-left"
        >
          <input type="hidden" name="token" value={token} />
          <label className="block">
            <span className="text-sm font-medium">
              Discord Username <span className="text-red-500">*</span>
            </span>
            <input
              type="text"
              name="discord"
              required
              className="mt-1 w-full border border-gray-300 p-2 rounded-lg"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium">
              Email used for payment <span className="text-red-500">*</span>
            </span>
            <input
              type="email"
              name="email"
              required
              className="mt-1 w-full border border-gray-300 p-2 rounded-lg"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium">Additional comments (optional)</span>
            <textarea
              name="comment"
              className="mt-1 w-full border border-gray-300 p-2 rounded-lg"
            />
          </label>

          <button
            type="submit"
            className="w-full bg-black text-white font-semibold py-2 px-4 rounded-xl hover:opacity-80 transition"
          >
            Submit
          </button>
        </form>
      </main>
    </>
  );
}
