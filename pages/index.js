
export default function Home() {
  return (
    <main className="min-h-screen bg-[#111111] text-white py-20">
      
<section className="w-full px-4 pt-16 text-center">
  <h1 className="text-4xl font-bold mb-2">BLOKE PICK</h1>
  <div className="w-24 h-1 bg-gray-700 mx-auto my-4 rounded-full" />
  <p className="text-gray-400 max-w-xl mx-auto">
    Your journey to smarter sports betting starts here. Join a premium community built for people who take betting seriously and want real, consistent results.
  </p>
  <button className="bg-green-500 hover:bg-green-600 mt-6 text-white px-6 py-2 rounded-full font-semibold">🥇 JOIN VIP</button>
</section>

      
<section className="w-full mt-20 px-4 text-center">
  <h2 className="text-2xl font-bold mb-6">Winning Tickets</h2>
  <p className="text-gray-400 mb-4">More tickets available inside the VIP Discord</p>
  <div className="flex overflow-x-auto space-x-4 p-4">
    {Array.from({ length: 24 }).map((_, i) => (
      <img key={i} src={`/images/ticket-${i + 1}.webp`} alt={`Ticket ${i + 1}`} width={250} height={400} loading="lazy" className="rounded-md object-cover flex-shrink-0" />
    ))}
  </div>
</section>

      
<section className="w-full mb-20 px-4">
  <h2 className="text-2xl font-bold text-center mb-10">Choose Your VIP Access</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
    <div className="bg-[#1a1a1a] p-6 rounded-xl shadow text-center flex flex-col items-center border-t-4 border-green-500 hover:scale-105 transition">
      <h3 className="text-xl font-bold mb-2">🕒 Three Day Pass</h3>
      <p className="text-3xl font-bold text-green-400 mb-4">$25</p>
      <ul className="text-sm text-gray-300 mb-4 space-y-1 text-left w-full max-w-xs">
        <li>✅ Access to VIP Picks</li>
        <li>✅ Access to VIP Chat</li>
        <li>❌ No access to Diamond Picks</li>
        <li>⏳ 3-Day Access</li>
      </ul>
      <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full font-semibold">🥇 JOIN VIP</button>
    </div>
    <div className="bg-[#1a1a1a] p-6 rounded-xl shadow text-center flex flex-col items-center border-t-4 border-green-500 hover:scale-105 transition">
      <h3 className="text-xl font-bold mb-2">🗓️ One Week of BLOKE PICKS</h3>
      <p className="text-3xl font-bold text-green-400 mb-4">$75</p>
      <ul className="text-sm text-gray-300 mb-4 space-y-1 text-left w-full max-w-xs">
        <li>✅ Access to VIP Picks</li>
        <li>✅ Access to VIP Chat</li>
        <li>❌ No access to Diamond Picks</li>
        <li>⏳ 7-Day Access</li>
      </ul>
      <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full font-semibold">🥇 JOIN VIP</button>
    </div>
    <div className="bg-[#1a1a1a] p-6 rounded-xl shadow text-center flex flex-col items-center border-t-4 border-green-500 hover:scale-105 transition">
      <h3 className="text-xl font-bold mb-2">📅 One Month of BLOKE PICKS</h3>
      <p className="text-3xl font-bold text-green-400 mb-4">$125</p>
      <ul className="text-sm text-gray-300 mb-4 space-y-1 text-left w-full max-w-xs">
        <li>✅ Access to VIP Picks</li>
        <li>✅ Access to VIP Chat</li>
        <li>✅ Access to Diamond Picks</li>
        <li>⏳ 30-Day Access</li>
      </ul>
      <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full font-semibold">🥇 JOIN VIP</button>
    </div>
  </div>
</section>

      
<footer className="text-center mt-20 text-sm text-gray-600">
  <div className="w-24 h-1 bg-gray-700 mx-auto mb-4 rounded-full" />
  <div className="flex justify-center space-x-4 mb-2">
    <a href="https://x.com/BlokePick" target="_blank" rel="noopener noreferrer">X</a>
    <a href="https://www.instagram.com/blokepick/" target="_blank" rel="noopener noreferrer">Instagram</a>
    <a href="https://www.tiktok.com/@blokepick" target="_blank" rel="noopener noreferrer">TikTok</a>
  </div>
  <div>© 2025 BLOKE PICK. All rights reserved.</div>
</footer>

    </main>
  )
}
