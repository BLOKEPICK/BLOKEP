import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-8">
      <Head>
        <title>BLOKE PICK – Comunidad de Apuestas Deportivas</title>
      </Head>
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">¿Quieres estar entre los primeros en BLOKE PICK?</h1>
        <p className="text-lg md:text-xl mb-6">Comunidad VIP de apuestas deportivas – análisis diario, picks con estrategia y comunidad privada en Discord.</p>
        <button className="bg-green-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-green-400 transition">Apúntate a la lista de espera</button>
      </header>
      <section className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">¿Qué es BLOKE PICK?</h2>
        <p className="mb-8">Una comunidad pensada para apostadores que quieren ir más allá del azar. Estrategia, datos, y comunidad unida desde el día 1.</p>
      </section>
      <section className="max-w-4xl mx-auto mt-12 grid gap-6 md:grid-cols-2">
        <div className="p-6 bg-gray-800 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">📈 Análisis diarios</h3>
          <p>Datos reales, picks fundamentados, y control de unidades.</p>
        </div>
        <div className="p-6 bg-gray-800 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">🎯 Picks de valor</h3>
          <p>Enfocados en rentabilidad, no en fantasía.</p>
        </div>
        <div className="p-6 bg-gray-800 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">🧠 Comunidad privada</h3>
          <p>Canales exclusivos, chat directo, estrategia colaborativa.</p>
        </div>
        <div className="p-6 bg-gray-800 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">💬 Founding members</h3>
          <p>Beneficios exclusivos para los primeros 100 miembros.</p>
        </div>
      </section>
      <footer className="text-center mt-20 text-sm text-gray-400">
        © 2025 BLOKE PICK. Todos los derechos reservados.
      </footer>
    </div>
  );
}
