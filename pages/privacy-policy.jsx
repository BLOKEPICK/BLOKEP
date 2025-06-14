import Head from "next/head";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { SiX } from "react-icons/si";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | BLOKE PICK</title>
        <meta
          name="description"
          content="Read how BLOKE PICK handles your personal data and protects your privacy."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center px-4 py-16 text-left max-w-4xl mx-auto text-white">
        <h1 className="text-4xl font-bold mb-4 text-center tracking-widest">Privacy Policy</h1>
        <div className="w-24 h-px bg-gray-600 my-4 rounded-full opacity-50" />

        <section className="space-y-6 text-base text-gray-300">
          <p>
            At BLOKE PICK, your privacy is important to us. This Privacy Policy outlines what information we collect, how we use it, and how we protect it.
          </p>

          <h2 className="text-2xl font-semibold text-white">1. Information We Collect</h2>
          <p>
            We collect the following information from users:
          </p>
          <ul className="list-disc list-inside ml-6">
            <li>Discord username – visible within the community and subject to Discord's own privacy settings.</li>
            <li>Email address – used solely for payment confirmation and necessary communication.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white">2. How We Use Your Information</h2>
          <p>
            Your email and Discord username are used to verify your subscription and allow access to our Discord community. We do not use cookies, IP tracking, or any form of behavioral analytics.
          </p>
          <p>
            We do not share or sell your information with any third party. The only platforms that may process your information are Stripe (for payment) and Discord (for community access).
          </p>

          <h2 className="text-2xl font-semibold text-white">3. Data Retention and Deletion</h2>
          <p>
            We retain your data only while your subscription is active. If your subscription ends, your data is automatically removed. You may request deletion at any time through our <a href="https://blokepick.com/contact-us" className="text-blue-400 underline">contact form</a>, but we may temporarily retain your contact for administrative follow-ups.
          </p>

          <h2 className="text-2xl font-semibold text-white">4. Data Security</h2>
          <p>
            All user data is securely stored and only accessible by the owner of BLOKE PICK. We only store minimal personal information (email and Discord username) needed to operate our service.
          </p>

          <h2 className="text-2xl font-semibold text-white">5. Jurisdiction & International Users</h2>
          <p>
            BLOKE PICK operates from New York, United States. By using our service, you agree that your information is processed in accordance with U.S. laws. Users from outside the U.S. acknowledge that their data may be subject to different privacy standards.
          </p>

          <h2 className="text-2xl font-semibold text-white">6. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Continued use of the service implies acceptance of any updates.
          </p>

          <h2 className="text-2xl font-semibold text-white">7. Contact</h2>
          <p>
            For questions or concerns regarding this policy, please contact us through our <a href="https://blokepick.com/contact-us" className="text-blue-400 underline">contact form</a>.
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
