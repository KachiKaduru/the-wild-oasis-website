"use client";

import Link from "next/link";
import HeaderMenuIcon from "./HeaderMenuIcon";
import { useHeader } from "../_contexts/HeaderContext";

export default function Navigation({ children }) {
  const { isHeaderOpen, toggleHeader, closeHeader } = useHeader();

  return (
    <aside className="z-20">
      <HeaderMenuIcon className="cursor-pointer md:hidden" onClick={toggleHeader} />

      {isHeaderOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 md:hidden" onClick={closeHeader} />
      )}

      <nav
        className={`z-20 text-xl fixed top-0 right-0 bg-primary-700 h-screen ${
          isHeaderOpen ? "" : "translate-x-full"
        } md:block md:relative md:h-full md:bg-transparent `}
      >
        <ul className="flex flex-col md:flex-row gap-16 items-center">
          <li onClick={closeHeader}>
            <Link href="/cabins" className="hover:text-accent-400 transition-colors">
              Cabins
            </Link>
          </li>

          <li onClick={closeHeader}>
            <Link href="/about" className="hover:text-accent-400 transition-colors">
              About
            </Link>
          </li>

          {children}
        </ul>
      </nav>
    </aside>
  );
}
