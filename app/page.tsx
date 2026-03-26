import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      {/* HERO */}
      <section className="relative h-[70vh]">
        <img
          src="/images/homepage/hero.jpg"
          alt="Hurghada"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Best Excursions in Hurghada 🇪🇬
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Book your Red Sea adventure in minutes — fast confirmation via
              WhatsApp
            </p>

            <a
              href="#excursions"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold"
            >
              View Excursions
            </a>
          </div>
        </div>
      </section>

      {/* EXCURSIONS */}
      <section id="excursions" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Popular Excursions
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* ORANGE BAY */}
          <a href="/excursions/orange-bay" className="group">
            <div className="rounded-xl overflow-hidden shadow hover:shadow-lg transition">
              <img
                src="/images/orange-bay/card.jpg"
                className="w-full h-48 object-cover group-hover:scale-105 transition"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Orange Bay Island 🏝️</h3>
                <p className="text-gray-600">From $25 per person</p>
              </div>
            </div>
          </a>

          {/* DESERT SAFARI */}
          <a href="/excursions/desert-safari" className="group">
            <div className="rounded-xl overflow-hidden shadow hover:shadow-lg transition">
              <img
                src="/images/desert-safari/card.jpg"
                className="w-full h-48 object-cover group-hover:scale-105 transition"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Desert Safari 🏜️</h3>
                <p className="text-gray-600">From $20 per person</p>
              </div>
            </div>
          </a>

          {/* DOLPHIN HOUSE */}
          <a href="/excursions/dolphin-house" className="group">
            <div className="rounded-xl overflow-hidden shadow hover:shadow-lg transition">
              <img
                src="/images/dolphin-house/card.jpg"
                className="w-full h-48 object-cover group-hover:scale-105 transition"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Dolphin House 🐬</h3>
                <p className="text-gray-600">From $30 per person</p>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-gray-100 py-10">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-2xl font-bold mb-4">Why Book With Us?</h2>

          <div className="grid md:grid-cols-3 gap-6 text-gray-700">
            <div>✅ Instant WhatsApp confirmation</div>
            <div>✅ Trusted local operators</div>
            <div>✅ No upfront payment required</div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500 text-sm">
        © Aafiyah Digital 2026
      </footer>

      <WhatsAppButton />
    </main>
  );
}
