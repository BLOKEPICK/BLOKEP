import { useState } from "react";
import Head from "next/head";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { SiX } from "react-icons/si";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

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
        <title>Contact Us | BLOKE PICK</title>
        <meta
          name="description"
          content="Have a question? Contact BLOKE PICK — your premium betting community."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center px-4 py-16 text-left max-w-4xl mx-auto text-white">
        <h1 className="text-4xl font-bold mb-4 text-center tracking-widest">Contact Us</h1>
        <p className="text-center text-gray-300 max-w-xl mb-6">
          Have a question, suggestion, or issue? We’d love to hear from you. Fill out the form below and we’ll respond as soon as possible.
        </p>
        <div className="w-24 h-px bg-gray-600 my-4 rounded-full opacity-50" />

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg space-y-4 text-left bg-white p-6 rounded-xl shadow-md"
          >
            <label className="block">
              <span className="text-sm font-medium text-black">
                Discord Username or Name <span className="text-red-500">*</span>
              </span>
              <input
                type="text"
                name="name"
                required
                className="mt-1 w-full border border-gray-300 p-2 rounded-lg text-black"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-black">
                Email <span className="text-red-500">*</span>
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
                Message <span className="text-red-500">*</span>
              </span>
              <textarea
                name="message"
                required
                className="mt-1 w-full border border-gray-300 p-2 rounded-lg text-black"
              />
            </label>

            <button
              type="submit"
              className="w-full bg-black text-white font-semibold py-2 px-4 rounded-xl hover:opacity-80 transition"
            >
              Send Message
            </button>
          </form>
        ) : (
          <div className="bg-green-100 text-green-800 p-6 rounded-xl text-center max-w-lg">
            <h2 className="text-2xl font-semibold mb-2">✅ Message Sent!</h2>
            <p className="mb-4">Thanks for reaching out. We'll get back to you soon.</p>
            <a
              href="https://blokepick.com/"
              className="inline-block mt-4 bg-black text-white font-semibold py-2 px-6 rounded-xl hover:opacity-80 transition"
            >
              Back to Home
            </a>
          </div>
        )}

        <div className="w-24 h-px bg-gray-600 my-10 rounded-full opacity-50" />

        <footer className="text-center text-gray-400 space-y-4">
          <div className="flex justify-center space-x-6 text-2xl">
            <a href="https://www.instagram.com/blokepick/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-white transition" />
            </a>
            <a href="https://x.com/BlokePick" target="_blank" rel="noopener noreferrer">
              <SiX className="hover:text-white transition" />
            </a>
            <a href="https://www.tiktok.com/@blokepick" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="hover:text-white transition" />
            </a>
          </div>

          <a
            href="https://blokepick.com/"
            className="inline-block mt-2 text-sm text-blue-400 underline hover:text-white transition"
          >
            ← Back to Home
          </a>
        </footer>
      </main>
    </>
  );
}
