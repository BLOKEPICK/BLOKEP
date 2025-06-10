import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>BLOKE PICK | Smarter Betting Starts Here</title>
        <meta name="description" content="Join BLOKE PICK — the premium sports betting community built for disciplined bettors. Access daily picks, smart parlays, real data analysis, and a private VIP Discord where winning is the mindset. Stop guessing. Start betting smarter." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center px-4 text-center max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mt-16 tracking-widest">BLOKE PICK</h1>
        <div className="w-24 h-px bg-gray-600 my-4 rounded-full opacity-50" />
        <p className="text-xl max-w-xl">Your journey to smarter sports betting starts here.</p>
        <p className="text-md text-gray-400 mb-6">Premium picks, data-driven bets, and a winning community.</p>
        <button className="bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-6 rounded-xl shadow-md transition mb-2">🥇 JOIN VIP</button>
        <p className="text-sm text-gray-400 mb-12">Get instant access to our private VIP Discord and start betting like a pro.</p>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-20">
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
            <img key="0" src="/tickets/IMG_0097.webp" alt="Ticket 1" className="w-64 h-auto rounded-lg shadow" />
            <img key="1" src="/tickets/IMG_0118.webp" alt="Ticket 2" className="w-64 h-auto rounded-lg shadow" />
            <img key="2" src="/tickets/IMG_0150.webp" alt="Ticket 3" className="w-64 h-auto rounded-lg shadow" />
            <img key="3" src="/tickets/IMG_0220.webp" alt="Ticket 4" className="w-64 h-auto rounded-lg shadow" />
            <img key="4" src="/tickets/IMG_0237.webp" alt="Ticket 5" className="w-64 h-auto rounded-lg shadow" />
            <img key="5" src="/tickets/IMG_0436.webp" alt="Ticket 6" className="w-64 h-auto rounded-lg shadow" />
            <img key="6" src="/tickets/IMG_0669.webp" alt="Ticket 7" className="w-64 h-auto rounded-lg shadow" />
            <img key="7" src="/tickets/IMG_0976.webp" alt="Ticket 8" className="w-64 h-auto rounded-lg shadow" />
            <img key="8" src="/tickets/IMG_1383.webp" alt="Ticket 9" className="w-64 h-auto rounded-lg shadow" />
            <img key="9" src="/tickets/IMG_1482.webp" alt="Ticket 10" className="w-64 h-auto rounded-lg shadow" />
            <img key="10" src="/tickets/IMG_1742.webp" alt="Ticket 11" className="w-64 h-auto rounded-lg shadow" />
            <img key="11" src="/tickets/IMG_1755.webp" alt="Ticket 12" className="w-64 h-auto rounded-lg shadow" />
            <img key="12" src="/tickets/IMG_1791.webp" alt="Ticket 13" className="w-64 h-auto rounded-lg shadow" />
            <img key="13" src="/tickets/IMG_2403.webp" alt="Ticket 14" className="w-64 h-auto rounded-lg shadow" />
            <img key="14" src="/tickets/IMG_2473.webp" alt="Ticket 15" className="w-64 h-auto rounded-lg shadow" />
            <img key="15" src="/tickets/IMG_2631.webp" alt="Ticket 16" className="w-64 h-auto rounded-lg shadow" />
            <img key="16" src="/tickets/IMG_2725.webp" alt="Ticket 17" className="w-64 h-auto rounded-lg shadow" />
            <img key="17" src="/tickets/IMG_2791.webp" alt="Ticket 18" className="w-64 h-auto rounded-lg shadow" />
            <img key="18" src="/tickets/IMG_2793.webp" alt="Ticket 19" className="w-64 h-auto rounded-lg shadow" />
            <img key="19" src="/tickets/IMG_2892.webp" alt="Ticket 20" className="w-64 h-auto rounded-lg shadow" />
            <img key="20" src="/tickets/IMG_2893.webp" alt="Ticket 21" className="w-64 h-auto rounded-lg shadow" />
            <img key="21" src="/tickets/IMG_2936.webp" alt="Ticket 22" className="w-64 h-auto rounded-lg shadow" />
            <img key="22" src="/tickets/IMG_7542.webp" alt="Ticket 23" className="w-64 h-auto rounded-lg shadow" />
            <img key="23" src="/tickets/IMG_8290.webp" alt="Ticket 24" className="w-64 h-auto rounded-lg shadow" />
          </div>
        </section>

        <section className="text-center mb-20">
          <h2 className="text-2xl font-bold mb-6">Who is BLOKE PICK for?</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-900 p-6 rounded-lg">🎯 <strong>Focused Bettors</strong><br /> Want to elevate their picks with data-driven insights.</div>
            <div className="bg-gray-900 p-6 rounded-lg">📘 <strong>Betting Newcomers</strong><br /> Just starting? Learn to bet smarter from day one.</div>
            <div className="bg-gray-900 p-6 rounded-lg">💼 <strong>Experienced Wagers</strong><br /> Looking to sharpen their edge and stay consistent.</div>
            <div className="bg-gray-900 p-6 rounded-lg">⚡ <strong>Smart Risk-Takers</strong><br /> Maximize upside with calculated, low-risk plays.</div>
          </div>
        </section>

        <section className="max-w-xl text-center mb-20">
          <h2 className="text-2xl font-bold mb-6">FAQs</h2>
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
