"use client";

import { XMarkIcon } from "@heroicons/react/24/solid";
import { format } from "date-fns";
import { useReservation } from "../_contexts/ReservationContext";

function ReservationReminder() {
  const { range, resetRange } = useReservation();
  // CHANGE

  if (!range.from || !range.to) return null;

  return (
    <div className="fixed bottom-6 md:left-1/2 md:-translate-x-1/2 py-3 px-6 md:py-5 md:px-8 rounded-full bg-accent-500 text-primary-800 font-semibold shadow-xl shadow-slate-900 flex gap-4 sm:gap-8 items-center mx-auto w-[80vw] md:w-fit text-sm sm:text-base">
      <p>
        <span>👋</span> Don&apos;t forget to reserve your dates, from{" "}
        {format(new Date(range.from), "MMM dd yyyy")} to {format(new Date(range.to), "MMM dd yyyy")}
      </p>
      <button className="rounded-full p-1 hover:bg-accent-600 transition-all" onClick={resetRange}>
        <XMarkIcon className="h-5 w-5" />
      </button>
    </div>
  );
}

export default ReservationReminder;
