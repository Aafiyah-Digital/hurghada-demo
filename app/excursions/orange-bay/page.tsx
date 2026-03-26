import BookingForm from "@/components/BookingForm";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function OrangeBay() {
  return (
    <main className="bg-white text-gray-800">
      {/* HERO */}
      <section className="relative h-[60vh]">
        <img
          src="/images/orange-bay/hero.jpg"
          alt="Orange Bay"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              Orange Bay Island 🏝️
            </h1>
            <p className="text-lg md:text-xl">
              Crystal-clear waters, snorkeling, and a full day of relaxation on
              one of Hurghada’s most beautiful islands.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
        {/* LEFT */}
        <div>
          <h2 className="text-2xl font-bold mb-4">From $25 per person</h2>

          <p className="mb-6 text-gray-600">
            Enjoy a full day at Orange Bay Island with crystal-clear waters,
            snorkeling, and relaxing beach time.
          </p>

          <ul className="space-y-2 mb-6">
            <li>✔ Snorkeling gear included</li>
            <li>✔ Lunch on board</li>
            <li>✔ Hotel pickup & drop-off</li>
            <li>✔ Full day experience</li>
          </ul>

          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <p className="font-semibold mb-2">Why people love this trip:</p>
            <ul className="text-gray-700 space-y-1">
              <li>🌊 Stunning turquoise water</li>
              <li>🐠 Amazing snorkeling spots</li>
              <li>🏝️ Relaxing island atmosphere</li>
            </ul>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <BookingForm excursion="Orange Bay" />
        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Experience Orange Bay
        </h2>

        <div className="grid md:grid-cols-4 gap-4">
          <img
            src="/images/orange-bay/gallery-1.jpg"
            className="rounded-lg object-cover w-full h-48"
          />
          <img
            src="/images/orange-bay/gallery-2.jpg"
            className="rounded-lg object-cover w-full h-48"
          />
          <img
            src="/images/orange-bay/gallery-3.jpg"
            className="rounded-lg object-cover w-full h-48"
          />
          <img
            src="/images/orange-bay/gallery-4.jpg"
            className="rounded-lg object-cover w-full h-48"
          />
        </div>
      </section>

      {/* WHATSAPP BUTTON */}
      <WhatsAppButton />
    </main>
  );
}
