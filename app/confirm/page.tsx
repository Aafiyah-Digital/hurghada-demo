import { Suspense } from "react";
import ConfirmClient from "@/components/ConfirmClient";

export default function ConfirmPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <ConfirmClient />
    </Suspense>
  );
}
