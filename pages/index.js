
export default function Home() {
  return (
    <main className="min-h-screen bg-[#111111] text-white py-20">
      
<section className="w-full mb-20 px-4">
  <h2 className="text-2xl font-bold text-center mb-10">Choose Your VIP Access</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
    <div className="bg-[#1a1a1a] p-6 rounded-xl shadow text-center flex flex-col items-center hover:scale-105 transition">
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
    <div className="bg-[#1a1a1a] p-6 rounded-xl shadow text-center flex flex-col items-center border border-green-500 hover:scale-105 transition">
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
    <div className="bg-[#1a1a1a] p-6 rounded-xl shadow text-center flex flex-col items-center hover:scale-105 transition">
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

    </main>
  )
}
