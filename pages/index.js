import Head from 'next/head'

export default function Home() {
  const images = Array.from({ length: 24 }, (_, i) => `/tickets/IMG_${String(i + 1).padStart(4, '0')}.webp`);

  return (
    <>
      <Head>
        <title>BLOKE PICK | Smarter Betting Starts Here</title>
        <meta name="description" content="Join BLOKE PICK — the premium sports betting community built for disciplined bettors. Access daily picks, smart parlays, real data analysis, and a private VIP Discord where winning is the mindset. Stop guessing. Start betting smarter." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center px-4 text-center">
        <h1 className="text-5xl font-bold mt-16 tracking-widest">BLOKE PICK</h1>
        <div className="w-24 h-px bg-gray-600 my-4 rounded-full opacity-50" />
        <p className="text-xl max-w-xl">Your journey to smarter sports betting starts here.</p>
        <p className="text-md text-gray-400 mb-6">Premium picks, data-driven bets, and a winning community.</p>
        <button className="bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-6 rounded-xl shadow-md transition mb-2">🥇 JOIN VIP</button>
        <p className="text-sm text-gray-400 mb-12">Get instant access to our private VIP Discord and start betting like a pro.</p>

        <section className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-20">
          <div>🏆 <strong>Daily Premium Picks</strong><br /> Expert-crafted plays with real unit tracking.</div>
          <div>💬 <strong>VIP Chat Room</strong><br /> Discuss strategies with sharp bettors.</div>
          <div>📊 <strong>Data-Backed Analysis</strong><br /> Stats and research, not guesswork.</div>
          <div>📈 <strong>Real Unit Tracking</strong><br /> See performance transparently.</div>
          <div>🧠 <strong>Smart Betting Strategy</strong><br /> Tools to help you bet with purpose.</div>
          <div>🔒 <strong>Private Discord Access</strong><br /> Join a serious community of bettors.</div>
        </section>

        <section className="w-full mb-20">
          <h2 className="text-2xl font-bold mb-4">Winning Tickets</h2>
          <div className="flex overflow-x-auto space-x-4 p-4">
            {images.map((src, idx) => (
              <img key={idx} src={src} alt={`Ticket ${idx + 1}`} className="w-64 h-auto rounded-lg shadow" />
            ))}
          </div>
        </section>

        <section className="max-w-4xl text-left mb-20">
          <h2 className="text-2xl font-bold text-center mb-6">Who is BLOKE PICK for?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg">🎯 <strong>Focused Bettors</strong><br /> Want to elevate their picks with data-driven insights.</div>
            <div className="bg-gray-900 p-6 rounded-lg">📘 <strong>Betting Newcomers</strong><br /> Just starting? Learn to bet smarter from day one.</div>
            <div className="bg-gray-900 p-6 rounded-lg">💼 <strong>Experienced Wagers</strong><br /> Looking to sharpen their edge and stay consistent.</div>
            <div className="bg-gray-900 p-6 rounded-lg">⚡ <strong>Smart Risk-Takers</strong><br /> Maximize upside with calculated, low-risk plays.</div>
          </div>
        </section>

        <section className="max-w-xl mb-20 text-left">
          <h2 className="text-2xl font-bold text-center mb-6">FAQs</h2>
          <p className="mb-4"><strong>Q:</strong> What’s included in VIP access?<br /><strong>A:</strong> Picks, Discord access, betting strategy content.</p>
          <p className="mb-4"><strong>Q:</strong> Can I cancel anytime?<br /><strong>A:</strong> Yes. No contracts, no stress.</p>
          <p><strong>Q:</strong> Do I need experience?<br /><strong>A:</strong> Not required. We’ll guide you.</p>
        </section>

        <div className="w-24 h-px bg-gray-600 my-10 rounded-full opacity-50" />

        <footer className="text-center text-sm text-gray-500 mb-10">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://www.instagram.com/blokepick/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://x.com/BlokePick" target="_blank" rel="noopener noreferrer">X</a>
            <a href="https://www.tiktok.com/@blokepick" target="_blank" rel="noopener noreferrer">TikTok</a>
          </div>
          © 2025 BLOKE PICK. Todos los derechos reservados.
        </footer>
      </main>
    </>
  )
}
