"use client";

export const dynamic = "force-dynamic";

import { useSearchParams } from "next/navigation";

export default function ConfirmPage() {
  const params = useSearchParams();

  const name = params.get("name");

  return (
    <main className="p-10 text-center">
      <h1 className="text-3xl font-bold mb-4">Booking Request Sent ✅</h1>

      <p className="text-lg">
        Thank you {name || "guest"} — we will contact you shortly via WhatsApp.
      </p>
    </main>
  );
}
