"use client";

import Link from "next/link";
import HeaderMenuIcon from "./HeaderMenuIcon";
import { useHeader } from "../_contexts/HeaderContext";
import HeaderCloseIcon from "./HeaderCloseIcon";

export default function Navigation() {
  const { isHeaderOpen, toggleHeader, closeHeader } = useHeader();

  return (
    <aside className="z-20">
      <HeaderMenuIcon className="cursor-pointer md:hidden" onClick={toggleHeader} />

      {isHeaderOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 md:hidden" onClick={closeHeader} />
      )}

      <nav
        className={`z-20 text-xl fixed top-0 right-0 bg-primary-700 h-screen w-48 sm:w-60 ${
          isHeaderOpen ? "translate-x-0" : "translate-x-full"
        } md:block md:relative md:h-full md:bg-transparent md:w-full md:translate-x-0`}
      >
        <HeaderCloseIcon
          className="cursor-pointer md:hidden p-4 mb-14 ml-auto mt-6"
          onClick={closeHeader}
        />

        <ul className="flex flex-col gap-8 md:flex-row md:gap-16 items-center">
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

          <li onClick={closeHeader}>
            <Link href="/account" className="hover:text-accent-400 transition-colors">
              Sign in
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
