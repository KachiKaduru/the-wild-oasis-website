"use client";

import { useFormStatus } from "react-dom";

export default function EditFormButton() {
  const formStatus = useFormStatus();
  const { pending } = formStatus;

  return (
    <button
      className="text-base sm:text-lg bg-accent-500  px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
      disabled={pending}
    >
      {!pending ? " Update reservation" : "Updating"}
    </button>
  );
}
