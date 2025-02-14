"use client";

import Link from "next/link";
import { useHeader } from "../_contexts/HeaderContext";

export default function UserAreaListItem({ session }) {
  const { closeHeader } = useHeader();

  return (
    <li onClick={closeHeader}>
      {session?.user?.image ? (
        <Link
          href="/account"
          className="hover:text-accent-400 transition-colors flex gap-4 items-center relative"
        >
          <img
            src={session.user.image}
            alt={session.user.name}
            referrerPolicy="no-referrer"
            className="h-8 rounded-full"
          />
          <span>Guest area</span>
        </Link>
      ) : (
        <Link href="/account" className="hover:text-accent-400 transition-colors">
          Guest area
        </Link>
      )}
    </li>
  );
}
