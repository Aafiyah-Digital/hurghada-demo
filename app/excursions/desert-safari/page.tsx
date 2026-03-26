import BookingForm from "@/components/BookingForm";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function DesertSafari() {
  return (
    <main className="bg-white text-gray-800">
      {/* HERO */}
      <section className="relative h-[60vh]">
        <img
          src="/images/desert-safari/hero.jpg"
          alt="Desert Safari"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              Desert Safari 🏜️
            </h1>
            <p className="text-lg md:text-xl">
              Experience the thrill of quad biking, camel rides, and a magical
              desert sunset.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">From $20 per person</h2>

          <p className="mb-6 text-gray-600">
            Explore the Egyptian desert with an exciting safari experience
            including quad biking and traditional Bedouin culture.
          </p>

          <ul className="space-y-2 mb-6">
            <li>✔ Quad bike adventure</li>
            <li>✔ Camel ride</li>
            <li>✔ Bedouin camp experience</li>
            <li>✔ Desert sunset views</li>
          </ul>
        </div>

        <div>
          <BookingForm excursion="Desert Safari" />
        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Desert Experience
        </h2>

        <div className="grid md:grid-cols-4 gap-4">
          <img
            src="/images/desert-safari/gallery-1.jpg"
            className="rounded-lg object-cover w-full h-48"
          />
          <img
            src="/images/desert-safari/gallery-2.jpg"
            className="rounded-lg object-cover w-full h-48"
          />
          <img
            src="/images/desert-safari/gallery-3.jpg"
            className="rounded-lg object-cover w-full h-48"
          />
          <img
            src="/images/desert-safari/gallery-4.jpg"
            className="rounded-lg object-cover w-full h-48"
          />
        </div>
      </section>

      <WhatsAppButton />
    </main>
  );
}
