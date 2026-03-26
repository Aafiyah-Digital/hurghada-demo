"use client";

import { useState } from "react";

export default function BookingForm({ excursion }: { excursion: string }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    adults: 1,
    children: 0,
    hotel: "",
    notes: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Send to backend (email later)
    await fetch("/api/book", {
      method: "POST",
      body: JSON.stringify({ ...form, excursion }),
    });

    // WhatsApp message
    const message = `New Booking Request

Trip: ${excursion}
Date: ${form.date}
Adults: ${form.adults}
Children: ${form.children}
Hotel: ${form.hotel}

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}

Notes: ${form.notes}`;

    window.open(
      `https://wa.me/201XXXXXXXXX?text=${encodeURIComponent(message)}`,
      "_blank",
    );

    setSuccess(true);
  };

  if (success) {
    return (
      <p className="text-green-600 mt-4">
        ✅ Request sent! We’ll contact you on WhatsApp shortly.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 border p-4 rounded-lg">
      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
        required
        className="w-full p-3 border rounded-lg"
      />

      <input
        name="phone"
        placeholder="WhatsApp Number"
        onChange={handleChange}
        required
        className="w-full p-3 border rounded-lg"
      />

      <input
        name="email"
        placeholder="Email (optional)"
        onChange={handleChange}
        className="w-full p-3 border rounded-lg"
      />

      <input
        type="date"
        name="date"
        onChange={handleChange}
        required
        className="w-full p-3 border rounded-lg"
      />

      <input
        type="number"
        name="adults"
        placeholder="Adults"
        onChange={handleChange}
        className="w-full p-3 border rounded-lg"
      />

      <input
        type="number"
        name="children"
        placeholder="Children"
        onChange={handleChange}
        className="w-full p-3 border rounded-lg"
      />

      <input
        name="hotel"
        placeholder="Hotel Name"
        onChange={handleChange}
        className="w-full p-3 border rounded-lg"
      />

      <textarea
        name="notes"
        placeholder="Notes"
        onChange={handleChange}
        className="w-full p-3 border rounded-lg"
      />

      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg w-full font-semibold">
        Request Booking
      </button>
    </form>
  );
}
