"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <button
      onClick={handleBack}
      className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#1E3A5F] transition-colors mb-12 group cursor-pointer"
    >
      <ArrowLeft aria-hidden="true" className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
      Torna alla Home
    </button>
  );
}
