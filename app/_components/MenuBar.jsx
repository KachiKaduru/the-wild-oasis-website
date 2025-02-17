"use client";

import { useReservation } from "../_contexts/ReservationContext";
import MenuIcon from "./MenuIcon";

export default function MenuBar({ session }) {
  const { toggleOpen } = useReservation();

  return <MenuIcon className={`${session ? "block" : "hidden"} md:hidden`} onClick={toggleOpen} />;
}
