import Head from "next/head";
import { FaInstagram, FaXTwitter, FaTiktok } from "react-icons/fa6";

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service | BLOKE PICK</title>
        <meta
          name="description"
          content="Read the terms and conditions for using BLOKE PICK — our premium sports betting community."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center px-4 py-16 text-left max-w-4xl mx-auto text-white">
        <h1 className="text-4xl font-bold mb-4 text-center tracking-widest">Terms of Service</h1>
        <div className="w-24 h-px bg-gray-600 my-4 rounded-full opacity-50" />

        <section className="space-y-6 text-base text-gray-300">
          <p>
            These Terms of Service ("Terms") govern your access to and use of BLOKE PICK ("we", "our", or "us"). By subscribing to or participating in any of our services, including our private Discord community, you agree to be bound by these Terms.
          </p>

          <h2 className="text-2xl font-semibold text-white">1. Eligibility</h2>
          <p>
            You must be at least 21 years old to use BLOKE PICK. Our services are only available to residents of U.S. states where sports betting is legal and to individuals in countries that permit sports wagering.
          </p>

          <h2 className="text-2xl font-semibold text-white">2. Services Provided</h2>
          <p>
            BLOKE PICK offers paid access to a private Discord server where members receive sports betting analysis, recommendations, and community interaction. Access is granted via subscription plans:
          </p>
          <ul className="list-disc list-inside ml-6">
            <li>$25 every two weeks (+ tax)</li>
            <li>$75 every 30 days (+ tax) – auto-renewed unless canceled</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white">3. No Guarantee of Results</h2>
          <p>
            While we provide data-driven recommendations, BLOKE PICK does not guarantee any betting outcomes. Participation involves financial risk, and all decisions are made at your own discretion.
          </p>

          <h2 className="text-2xl font-semibold text-white">4. Payments & Refunds</h2>
          <p>
            Payments are processed exclusively via Stripe. Any other platform claiming to represent BLOKE PICK is fraudulent.
          </p>
          <p>
            Users who initiate a chargeback before joining the Discord will receive a refund. However, if access to the VIP Discord has been granted, no refund will be issued. For more details, please refer to our <a href="/refund-policy" className="text-blue-400 underline">Refund Policy</a>.
          </p>

          <h2 className="text-2xl font-semibold text-white">5. Community Rules</h2>
          <p>
            Users are expected to follow all community rules posted within our Discord server, including but not limited to:
          </p>
          <ul className="list-disc list-inside ml-6">
            <li>Bet responsibly</li>
            <li>No hate speech or NSFW content</li>
            <li>Respect admins and mods</li>
          </ul>
          <p>
            Violating rules results in two warnings. A third violation leads to permanent removal without refund.
          </p>

          <h2 className="text-2xl font-semibold text-white">6. Intellectual Property</h2>
          <p>
            Content shared in BLOKE PICK is for personal use only. Sharing VIP plays or insights publicly is discouraged and may result in removal.
          </p>

          <h2 className="text-2xl font-semibold text-white">7. Legal Jurisdiction</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the State of New York, USA. Any disputes shall be resolved in the appropriate courts located in New York.
          </p>

          <h2 className="text-2xl font-semibold text-white">8. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Continued use of the service implies acceptance of any updates.
          </p>

          <h2 className="text-2xl font-semibold text-white">9. Contact</h2>
          <p>
            Questions or concerns? Please reach out through our <a href="/contact" className="text-blue-400 underline">contact form</a>.
          </p>
        </section>

        <div className="w-24 h-px bg-gray-600 my-10 rounded-full opacity-50" />

        <footer className="text-center text-gray-400 space-y-4">
          <div className="flex justify-center space-x-6 text-2xl">
            <a href="https://www.instagram.com/blokepick/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-white transition" />
            </a>
            <a href="https://x.com/BlokePick" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="hover:text-white transition" />
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
