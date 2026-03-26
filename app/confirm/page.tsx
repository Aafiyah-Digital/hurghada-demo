"use client";

import { useSearchParams } from "next/navigation";

export default function ConfirmPage() {
  const params = useSearchParams();

  const name = params.get("name");
  const trip = params.get("trip");
  const date = params.get("date");
  const phone = params.get("phone");

  const message = `Hi ${name} 👋

Your booking for ${trip} on ${date} is confirmed ✅

We will contact you with pickup details shortly.`;

  const handleConfirm = () => {
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <main className="p-10 text-center">
      <h1 className="text-3xl font-bold mb-4">Confirm Booking</h1>

      <p className="mb-6">
        Confirm booking for <strong>{name}</strong> — {trip} on {date}
      </p>

      <button
        onClick={handleConfirm}
        className="bg-green-500 text-white px-6 py-3 rounded-lg"
      >
        Confirm via WhatsApp
      </button>
    </main>
  );
}
