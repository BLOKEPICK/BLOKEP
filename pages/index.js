import React from 'react';
import Head from 'next/head';

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

<section className="w-full my-20 px-4">
  <h2 className="text-2xl font-bold text-center mb-10">Choose Your VIP Access</h2>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto justify-center">
    <div className="bg-[#1a1a1a] p-6 rounded-xl shadow text-center flex flex-col items-center border-t-4 border-green-500 hover:scale-105 transition">
      <h3 className="text-xl font-bold mb-2">🗓️ Two Week of BLOKE PICKS</h3>
      <p className="text-3xl font-bold text-green-400 mb-4">$25</p>
      <ul className="text-sm text-gray-300 mb-4 space-y-1 text-left w-full max-w-xs">
        <li>✅ Access to VIP Picks</li>
        <li>✅ Access to VIP Chat</li>
        <li>❌ Access to Bankroll Guide</li>
        <li>❌ No access to Elite Picks</li>
        <li>⏳ 2-Weeks Access</li>
      </ul>
      <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full font-semibold">🥇 JOIN VIP</button>
    </div>
    <div className="bg-[#1a1a1a] p-6 rounded-xl shadow text-center flex flex-col items-center border-t-4 border-green-500 hover:scale-105 transition">
      <h3 className="text-xl font-bold mb-2">📅 One Month of BLOKE PICKS</h3>
      <p className="text-3xl font-bold text-green-400 mb-4">$75</p>
      <ul className="text-sm text-gray-300 mb-4 space-y-1 text-left w-full max-w-xs">
        <li>✅ Access to VIP Picks</li>
        <li>✅ Access to VIP Chat</li>
        <li>✅ Access to Bankroll Guide</li>
        <li>✅ Access to Elite Picks</li>
        <li>⏳ 30-Day Access</li>
      </ul>
      <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full font-semibold">🥇 JOIN VIP</button>
    </div>
  </div>
</section>

<div className="w-full flex justify-center py-8">
  <div className="h-px w-24 bg-gray-600 rounded-full opacity-50"></div>
</div>

<section className="w-full px-4 my-20">
  <h2 className="text-2xl font-bold text-center mb-10">What You Get</h2>
  <p className="text-center text-gray-400 mb-8 text-sm">*Access to these features may vary depending on your selected plan.</p>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-sm text-gray-300">
    <div className="bg-[#1a1a1a] p-6 rounded-xl text-center border border-gray-700">
      <h3 className="text-lg font-bold text-green-400 mb-4">Daily Premium Picks</h3>
      <p>Get high-conviction bets posted daily by sharp analysts. Available in all plans.</p>
    </div>
    <div className="bg-[#1a1a1a] p-6 rounded-xl text-center border border-gray-700">
      <h3 className="text-lg font-bold text-green-400 mb-4">VIP Community Chat</h3>
      <p>Join sharp bettors and discuss plays. Included in all plans.</p>
    </div>
    <div className="bg-[#1a1a1a] p-6 rounded-xl text-center border border-gray-700">
      <h3 className="text-lg font-bold text-green-400 mb-4">Diamond Picks</h3>
      <p>Our highest-confidence bets. <span className="text-yellow-400">Only available in Monthly Plan.</span></p>
    </div>
    <div className="bg-[#1a1a1a] p-6 rounded-xl text-center border border-gray-700">
      <h3 className="text-lg font-bold text-green-400 mb-4">Winning Ticket Slides</h3>
      <p>See past winners and track performance. Available to all subscribers.</p>
    </div>
    <div className="bg-[#1a1a1a] p-6 rounded-xl text-center border border-gray-700">
      <h3 className="text-lg font-bold text-green-400 mb-4">Real Stats & Research</h3>
      <p>Every pick is backed by data, not guesswork. Available in all plans.</p>
    </div>
    <div className="bg-[#1a1a1a] p-6 rounded-xl text-center border border-gray-700">
      <h3 className="text-lg font-bold text-green-400 mb-4">Private Discord Access</h3>
      <p>Connect with BLOKE PICK staff & access locked channels. Included in all plans.</p>
    </div>
  </div>
</section>

<p className="text-sm text-gray-400 mb-12">Get instant access to our private VIP Discord and start betting like a pro.</p>

<section className="w-full mb-20">
  <h2 className="text-2xl font-bold mb-4">Winning Tickets</h2>
  <div className="flex overflow-x-auto space-x-4 p-4 scrollbar-hide">
    <div className="flex-shrink-0 w-[220px] h-[350px] bg-gray-800 rounded-lg shadow overflow-hidden flex items-center justify-center">
      <span className="text-gray-500">Ticket images go here</span>
    </div>
  </div>
  <p className="text-center mt-4 text-sm text-gray-400">More tickets available inside the VIP Discord</p>
</section>

<div className="w-24 h-px bg-gray-600 my-10 rounded-full opacity-50" />

<footer className="text-center text-sm text-gray-500 mb-10">
  <div className="flex justify-center space-x-6 mb-4">
    <a href="https://www.instagram.com/blokepick/" target="_blank" rel="noopener noreferrer">Instagram</a>
    <a href="https://x.com/BlokePick" target="_blank" rel="noopener noreferrer">X</a>
    <a href="https://www.tiktok.com/@blokepick" target="_blank" rel="noopener noreferrer">TikTok</a>
  </div>
  © 2025 BLOKE PICK. All rights reserved.
</footer>
</main>
</>
  );
}
