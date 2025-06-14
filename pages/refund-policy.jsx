import Head from "next/head";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { SiX } from "react-icons/si";

export default function RefundPolicy() {
  return (
    <>
      <Head>
        <title>Refund Policy | BLOKE PICK</title>
        <meta
          name="description"
          content="Read our official refund policy to understand the conditions for eligibility."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center px-4 py-16 text-left max-w-4xl mx-auto text-white">
        <h1 className="text-4xl font-bold mb-4 text-center tracking-widest">Refund Policy</h1>
        <div className="w-24 h-px bg-gray-600 my-4 rounded-full opacity-50" />

        <section className="space-y-6 text-base text-gray-300">
          <p>
            At BLOKE PICK, we are committed to providing premium sports betting insights and a high-value community experience. Please read our refund policy carefully before purchasing a subscription.
          </p>

          <h2 className="text-2xl font-semibold text-white">1. Eligibility for Refunds</h2>
          <p>
            You are eligible for a full refund <strong>only if you do not receive access</strong> to our private Discord community after completing your payment.
          </p>
          <p>
            Once access to our community has been granted and the subscriber has viewed any part of the content included in their plan, <strong>no refunds will be issued</strong> under any circumstance.
          </p>

          <h2 className="text-2xl font-semibold text-white">2. Stripe Payment Processing</h2>
          <p>
            All transactions are securely processed via <a href="https://stripe.com/" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">Stripe</a>. Refunds, when applicable, will be issued through the original payment method.
          </p>

          <h2 className="text-2xl font-semibold text-white">3. How to Request a Refund</h2>
          <p>
            If you believe you are eligible for a refund, please contact us as soon as possible through our official form at: <a href="https://blokepick.com/contact-us" className="text-blue-400 underline">contact form</a><p>.</p>
          </p>
          <p>
            Include your full name, email address used for payment, and any relevant order information to help us process your request promptly.
          </p>

          <h2 className="text-2xl font-semibold text-white">4. Final Notice</h2>
          <p>
            By purchasing any subscription on BLOKE PICK, you acknowledge and agree to this refund policy.
          </p>
        </section>

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
