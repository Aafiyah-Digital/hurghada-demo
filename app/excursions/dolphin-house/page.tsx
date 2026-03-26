import BookingForm from "@/components/BookingForm";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function DolphinHouse() {
  return (
    <main className="bg-white text-gray-800">
      {/* HERO */}
      <section className="relative h-[60vh]">
        <img
          src="/images/dolphin-house/hero.jpg"
          alt="Dolphin House"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              Dolphin House 🐬
            </h1>
            <p className="text-lg md:text-xl">
              Swim with dolphins and enjoy snorkeling in the beautiful Red Sea.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">From $30 per person</h2>

          <p className="mb-6 text-gray-600">
            Discover the magic of the Red Sea with a chance to see dolphins in
            their natural habitat.
          </p>

          <ul className="space-y-2 mb-6">
            <li>✔ Dolphin spotting</li>
            <li>✔ Snorkeling stops</li>
            <li>✔ Boat trip</li>
            <li>✔ Lunch included</li>
          </ul>
        </div>

        <div>
          <BookingForm excursion="Dolphin House" />
        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Dolphin Experience
        </h2>

        <div className="grid md:grid-cols-4 gap-4">
          <img
            src="/images/dolphin-house/gallery-1.jpg"
            className="rounded-lg object-cover w-full h-48"
          />
          <img
            src="/images/dolphin-house/gallery-2.jpg"
            className="rounded-lg object-cover w-full h-48"
          />
          <img
            src="/images/dolphin-house/gallery-3.jpg"
            className="rounded-lg object-cover w-full h-48"
          />
          <img
            src="/images/dolphin-house/gallery-4.jpg"
            className="rounded-lg object-cover w-full h-48"
          />
        </div>
      </section>

      <WhatsAppButton />
    </main>
  );
}
