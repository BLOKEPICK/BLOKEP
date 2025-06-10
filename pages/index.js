
import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-black text-white">
      <Head>
        <title>BLOKE PICK</title>
        <meta name="description" content="Smart Sports Betting with BLOKE PICK" />
      </Head>

      <header className="text-center mb-12">
        <Image src="/logo.png" alt="Bloke Pick Logo" width={150} height={150} />
        <h1 className="text-4xl font-bold mt-6">BLOKE PICK</h1>
        <p className="mt-4 text-lg max-w-xl">
          Join the elite betting community. Daily picks, expert analysis, and smart bankroll strategies.
        </p>
      </header>

      <a
        href="https://your-stripe-checkout-link.com"
        className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white text-xl font-semibold rounded-xl shadow-lg transition"
      >
        Join VIP
      </a>
    </div>
  );
}
