// pages/index.tsx o index.jsx (Next.js)
import Head from 'next/head'
import Image from 'next/image'
import { FaInstagram, FaTiktok } from 'react-icons/fa'
import { SiX } from 'react-icons/si'

export default function Home() {
  return (
    <>
      <Head>
        <title>BLOKE PICK | Smarter Betting Starts Here</title>
        <meta name="description" content="Join BLOKE PICK — the premium sports betting community built for disciplined bettors. Access daily picks, smart parlays, real data analysis, and a private VIP Discord where winning is the mindset." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center px-4 text-center max-w-6xl mx-auto text-white">
        <h1 className="text-5xl font-bold mt-16 tracking-widest">BLOKE PICK</h1>
        <div className="w-24 h-px bg-gray-600 my-4 rounded-full opacity-50" />
        <p className="text-xl max-w-xl">Your journey to smarter sports betting starts here.</p>
        <p className="text-md text-gray-400 mb-6">Premium picks, data-driven bets, and a winning community.</p>

        {/* PLANS SECTION */}
        <section className="w-full my-20 px-4">
          <h2 className="text-2xl font-bold text-center mb-10">Choose Your VIP Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto justify-center">
            {[
              {
                icon: '🕐', title: '1 Day Access', price: '$50.00', flip: true,
                features: ['✅ VIP Plays', '❌ 10K Challenge', '❌ Bankroll Guide', '❌ VIP Chat'],
                border: 'border-gray-700', btn: 'bg-gray-700 hover:bg-gray-600', badge: ''
              },
              {
                icon: '📅', title: '1 Week Access', price: '$150.00',
                features: ['✅ VIP Plays', '✅ 10K Challenge', '✅ Bankroll Guide', '✅ VIP Chat'],
                border: 'border-green-500', btn: 'bg-green-700 hover:bg-green-800', badge: '🥇'
              },
              {
                icon: '🗓️', title: '1 Month Access', price: '$299.99',
                features: ['✅ VIP Plays', '✅ 10K Challenge', '✅ Bankroll Guide', '✅ VIP Chat'],
                border: 'border-green-500', btn: 'bg-green-700 hover:bg-green-800', badge: '🥇'
              },
              {
                icon: '📆', title: '1 Year Access', price: '$2,500.00',
                features: ['✅ VIP Plays', '✅ 10K Challenge', '✅ Bankroll Guide', '✅ VIP Chat'],
                border: 'border-green-500', btn: 'bg-green-700 hover:bg-green-800', badge: '🥇'
              }
            ].map((plan, i) => (
              <div key={i} className={`bg-[#1a1a1a] p-6 rounded-xl shadow text-center flex flex-col items-center border-t-4 ${plan.border} hover:scale-105 transition`}>
                <h3 className="text-xl font-bold mb-1">{`${plan.icon} ${plan.title}`}</h3>
                {plan.flip && <p className="text-sm italic text-yellow-400 mb-2">Perfect if you need to FLIP FAST</p>}
                <p className="text-3xl font-bold text-green-400 mb-4">{plan.price}</p>
                <ul className="text-sm text-gray-300 mb-4 space-y-2 w-full max-w-xs text-left">
                  {plan.features.map((f, idx) => (
                    <li
                      key={idx}
                      className={`flex items-center px-3 py-1 rounded-md ${f.includes('✅') ? 'bg-green-900/20 text-green-300' : 'bg-gray-700/20 text-gray-400'}`}
                    >
                      <span className="mr-2 text-lg">{f.includes('✅') ? '✅' : '❌'}</span>
                      <span className="text-sm">{f.replace('✅ ', '').replace('❌ ', '')}</span>
                    </li>
                  ))}
                </ul>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label={`Join VIP for ${plan.title}`}>
                  <button className={`${plan.btn} text-white px-5 py-2 rounded-full font-semibold`}>
                    {plan.badge} JOIN VIP
                  </button>
                </a>
              </div>
            ))}
          </div>
        </section>


<div className="w-full flex justify-center py-8">
  <div className="h-px w-24 bg-gray-600 rounded-full opacity-50"></div>
</div>




   {/* WHAT YOU GET SECTION */}
        <section className="w-full px-4 my-20">
          <h2 className="text-2xl font-bold text-center mb-10">What You Get with BLOKE PICK</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto text-sm text-gray-300 text-center">
            <div className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-700">
              <h3 className="text-lg font-bold text-green-400 mb-2">🎯 VIP Plays</h3>
              <p>Daily picks crafted from real data, not guesswork. This is where smart betting starts.</p>
            </div>
            <div className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-700">
              <h3 className="text-lg font-bold text-green-400 mb-2">💰 10K Challenge</h3>
              <p>Flip your bankroll step-by-step. Join our journey from $100 to $10K.</p>
            </div>
            <div className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-700">
              <h3 className="text-lg font-bold text-green-400 mb-2">📊 Bankroll Guide</h3>
              <p>Stop gambling. Start managing. Learn the unit system and bet like a professional.</p>
            </div>
            <div className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-700">
              <h3 className="text-lg font-bold text-green-400 mb-2">🗣️ VIP Chat Access</h3>
              <p>Inside info. Live reactions. Winning energy. Our private Discord is the place to be.</p>
            </div>
          </div>
        </section>




        <p className="text-sm text-gray-400 mb-12">Get instant access to our private VIP Discord and start betting like a pro.</p>

        





        <section className="w-full mb-20">
  <h2 className="text-2xl font-bold mb-4">Winning Tickets</h2>
  <div className="flex overflow-x-auto space-x-4 p-4 scrollbar-hide">
            <div className="flex-shrink-0 w-[220px] h-[350px] bg-gray-800 rounded-lg shadow overflow-hidden flex items-center justify-center">
              <img src="/tickets/IMG_0097.webp" alt="Ticket 1" width="524" height="800" loading="lazy" className="object-contain max-h-full max-w-full" />
            </div>
            <div className="flex-shrink-0 w-[220px] h-[350px] bg-gray-800 rounded-lg shadow overflow-hidden flex items-center justify-center">
              <img src="/tickets/IMG_0118.webp" alt="Ticket 2" width="518" height="800" loading="lazy" className="object-contain max-h-full max-w-full" />
            </div>
            <div className="flex-shrink-0 w-[220px] h-[350px] bg-gray-800 rounded-lg shadow overflow-hidden flex items-center justify-center">
              <img src="/tickets/IMG_0150.webp" alt="Ticket 3" width="615" height="800" loading="lazy" className="object-contain max-h-full max-w-full" />
            </div>
            <div className="flex-shrink-0 w-[220px] h-[350px] bg-gray-800 rounded-lg shadow overflow-hidden flex items-center justify-center">
              <img src="/tickets/IMG_0220.webp" alt="Ticket 4" width="522" height="800" loading="lazy" className="object-contain max-h-full max-w-full" />
            </div>
            <div className="flex-shrink-0 w-[220px] h-[350px] bg-gray-800 rounded-lg shadow overflow-hidden flex items-center justify-center">
              <img src="/tickets/IMG_0237.webp" alt="Ticket 5" width="503" height="800" loading="lazy" className="object-contain max-h-full max-w-full" />
            </div>
            <div className="flex-shrink-0 w-[220px] h-[350px] bg-gray-800 rounded-lg shadow overflow-hidden flex items-center justify-center">
              <img src="/tickets/IMG_0436.webp" alt="Ticket 6" width="615" height="800" loading="lazy" className="object-contain max-h-full max-w-full" />
            </div>
            <div className="flex-shrink-0 w-[220px] h-[350px] bg-gray-800 rounded-lg shadow overflow-hidden flex items-center justify-center">
              <img src="/tickets/IMG_0669.webp" alt="Ticket 7" width="800" height="427" loading="lazy" className="object-contain max-h-full max-w-full" />
            </div>
            <div className="flex-shrink-0 w-[220px] h-[350px] bg-gray-800 rounded-lg shadow overflow-hidden flex items-center justify-center">
              <img src="/tickets/IMG_0976.webp" alt="Ticket 8" width="488" height="800" loading="lazy" className="object-contain max-h-full max-w-full" />
            </div>
            <div className="flex-shrink-0 w-[220px] h-[350px] bg-gray-800 rounded-lg shadow overflow-hidden flex items-center justify-center">
              <img src="/tickets/IMG_1383.webp" alt="Ticket 9" width="757" height="800" loading="lazy" className="object-contain max-h-full max-w-full" />
            </div>
            <div className="flex-shrink-0 w-[220px] h-[350px] bg-gray-800 rounded-lg shadow overflow-hidden flex items-center justify-center">
              <img src="/tickets/IMG_1482.webp" alt="Ticket 10" width="800" height="297" loading="lazy" className="object-contain max-h-full max-w-full" />
            </div>
            <div className="flex-shrink-0 w-[220px] h-[350px] bg-gray-800 rounded-lg shadow overflow-hidden flex items-center justify-center">
              <img src="/tickets/IMG_1742.webp" alt="Ticket 11" width="800" height="375" loading="lazy" className="object-contain max-h-full max-w-full" />
            </div>
            <div className="flex-shrink-0 w-[220px] h-[350px] bg-gray-800 rounded-lg shadow overflow-hidden flex items-center justify-center">
              <img src="/tickets/IMG_1755.webp" alt="Ticket 12" width="692" height="800" loading="lazy" className="object-contain max-h-full max-w-full" />
            </div>
            <div className="flex-shrink-0 w-[220px] h-[350px] bg-gray-800 rounded-lg shadow overflow-hidden flex items-center justify-center">
              <img src="/tickets/IMG_1791.webp" alt="Ticket 13" width="576" height="800" loading="lazy" className="object-contain max-h-full max-w-full" />
            </div>
            <div className="flex-shrink-0 w-[220px] h-[350px] bg-gray-800 rounded-lg shadow overflow-hidden flex items-center justify-center">
              <img src="/tickets/IMG_2403.webp" alt="Ticket 14" width="800" height="703" loading="lazy" className="object-contain max-h-full max-w-full" />
            </div>
            <div className="flex-shrink-0 w-[220px] h-[350px] bg-gray-800 rounded-lg shadow overflow-hidden flex items-center justify-center">
              <img src="/tickets/IMG_2473.webp" alt="Ticket 15" width="584" height="800" loading="lazy" className="object-contain max-h-full max-w-full" />
            </div>
            <div className="flex-shrink-0 w-[220px] h-[350px] bg-gray-800 rounded-lg shadow overflow-hidden flex items-center justify-center">
              <img src="/tickets/IMG_2631.webp" alt="Ticket 16" width="791" height="800" loading="lazy" className="object-contain max-h-full max-w-full" />
            </div>
            <div className="flex-shrink-0 w-[220px] h-[350px] bg-gray-800 rounded-lg shadow overflow-hidden flex items-center justify-center">
              <img src="/tickets/IMG_2725.webp" alt="Ticket 17" width="787" height="800" loading="lazy" className="object-contain max-h-full max-w-full" />
            </div>
            <div className="flex-shrink-0 w-[220px] h-[350px] bg-gray-800 rounded-lg shadow overflow-hidden flex items-center justify-center">
              <img src="/tickets/IMG_2791.webp" alt="Ticket 18" width="569" height="800" loading="lazy" className="object-contain max-h-full max-w-full" />
            </div>
            <div className="flex-shrink-0 w-[220px] h-[350px] bg-gray-800 rounded-lg shadow overflow-hidden flex items-center justify-center">
              <img src="/tickets/IMG_2793.webp" alt="Ticket 19" width="567" height="800" loading="lazy" className="object-contain max-h-full max-w-full" />
            </div>
            <div className="flex-shrink-0 w-[220px] h-[350px] bg-gray-800 rounded-lg shadow overflow-hidden flex items-center justify-center">
              <img src="/tickets/IMG_2892.webp" alt="Ticket 20" width="540" height="800" loading="lazy" className="object-contain max-h-full max-w-full" />
            </div>
            <div className="flex-shrink-0 w-[220px] h-[350px] bg-gray-800 rounded-lg shadow overflow-hidden flex items-center justify-center">
              <img src="/tickets/IMG_2893.webp" alt="Ticket 21" width="800" height="404" loading="lazy" className="object-contain max-h-full max-w-full" />
            </div>
            <div className="flex-shrink-0 w-[220px] h-[350px] bg-gray-800 rounded-lg shadow overflow-hidden flex items-center justify-center">
              <img src="/tickets/IMG_2936.webp" alt="Ticket 22" width="790" height="800" loading="lazy" className="object-contain max-h-full max-w-full" />
            </div>
            <div className="flex-shrink-0 w-[220px] h-[350px] bg-gray-800 rounded-lg shadow overflow-hidden flex items-center justify-center">
              <img src="/tickets/IMG_7542.webp" alt="Ticket 23" width="526" height="800" loading="lazy" className="object-contain max-h-full max-w-full" />
            </div>
            <div className="flex-shrink-0 w-[220px] h-[350px] bg-gray-800 rounded-lg shadow overflow-hidden flex items-center justify-center">
              <img src="/tickets/IMG_8290.webp" alt="Ticket 24" width="625" height="800" loading="lazy" className="object-contain max-h-full max-w-full" />
            </div>
  </div>
  <p className="text-center mt-4 text-sm text-gray-400">More tickets available inside the VIP Discord</p>
</section>

        

        

        <div className="w-24 h-px bg-gray-600 my-10 rounded-full opacity-50" />

        









 {/* FOOTER */}
        <footer className="text-center text-sm text-gray-500 mb-10">
          <div className="flex justify-center space-x-6 text-2xl mb-4">
            <a href="https://www.instagram.com/blokepick/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="hover:text-white transition" />
            </a>
            <a href="https://x.com/BlokePick" target="_blank" rel="noopener noreferrer" aria-label="Twitter (X)">
              <SiX className="hover:text-white transition" />
            </a>
            <a href="https://www.tiktok.com/@blokepick" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <FaTiktok className="hover:text-white transition" />
            </a>
          </div>
          <div className="flex justify-center flex-wrap gap-4 text-blue-400 mb-4">
            <a href="/terms-of-service" className="hover:text-white transition">Terms of Service</a>
            <span className="text-gray-500">|</span>
            <a href="/privacy-policy" className="hover:text-white transition">Privacy Policy</a>
            <span className="text-gray-500">|</span>
            <a href="/contact-us" className="hover:text-white transition">Contact Us</a>
          </div>
          <p className="mt-4 text-gray-400">© 2025 BLOKE PICK. All rights reserved.</p>
        </footer>
      </main>
    </>
  )
}
