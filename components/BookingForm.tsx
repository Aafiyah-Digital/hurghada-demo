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
    time: "Flexible",
    hotel: "",
    notes: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/book", {
      method: "POST",
      body: JSON.stringify({ ...form, excursion }),
    });

    if (res.ok) setSuccess(true);
  };

  if (success) {
    return (
      <p className="text-green-600 mt-4">
        ✅ Request sent! We’ll contact you on WhatsApp.
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
        className="w-full p-2 border"
      />
      <input
        name="phone"
        placeholder="WhatsApp Number"
        onChange={handleChange}
        required
        className="w-full p-2 border"
      />
      <input
        name="email"
        placeholder="Email (optional)"
        onChange={handleChange}
        className="w-full p-2 border"
      />

      <input
        type="date"
        name="date"
        onChange={handleChange}
        required
        className="w-full p-2 border"
      />

      <input
        type="number"
        name="adults"
        placeholder="Adults"
        onChange={handleChange}
        className="w-full p-2 border"
      />
      <input
        type="number"
        name="children"
        placeholder="Children"
        onChange={handleChange}
        className="w-full p-2 border"
      />

      <select name="time" onChange={handleChange} className="w-full p-2 border">
        <option>Flexible</option>
        <option>Morning</option>
        <option>Afternoon</option>
      </select>

      <input
        name="hotel"
        placeholder="Hotel Name"
        onChange={handleChange}
        className="w-full p-2 border"
      />

      <textarea
        name="notes"
        placeholder="Notes"
        onChange={handleChange}
        className="w-full p-2 border"
      />

      <button className="bg-black text-white px-4 py-2 rounded">
        Request Booking
      </button>
    </form>
  );
}
