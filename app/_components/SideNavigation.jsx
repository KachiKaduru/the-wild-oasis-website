"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowLeftStartOnRectangleIcon,
  CalendarDaysIcon,
  HomeIcon,
  HomeModernIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { useReservation } from "../_contexts/ReservationContext";
import SignOutModal from "./SignOutModal";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Cabins",
    href: "/account/cabins",
    icon: <HomeModernIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-primary-600" />,
  },
];

function SideNavigation() {
  const pathname = usePathname();
  const { isOpen, closeNav, toggleModal, showModal } = useReservation();

  const hide = "-translate-x-full opacity-0 -z-40";
  const show = "translate-x-0 opacity-100";

  return (
    <aside>
      {/* <MenuIcon className="md:hidden" onClick={toggleOpen} /> */}

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 md:hidden backdrop-blur-sm"
          onClick={closeNav}
        />
      )}

      <nav
        className={`border-r border-primary-900 w-52 sm:w-64 fixed top-0 left-0 bg-[#141c24d0] z-30 h-[100dvh] pt-10 pb-8 ${
          isOpen ? show : hide
        } md:sticky md:top-0 md:bg-transparent md:translate-x-0 md:opacity-100 md:p-0`}
      >
        <ul className="flex flex-col gap-2 h-full text-lg">
          {navLinks.map((link) => (
            <li key={link.name} onClick={closeNav}>
              <Link
                className={`py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 ${
                  pathname === link.href ? "bg-primary-900" : ""
                }`}
                href={link.href}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            </li>
          ))}

          <li className="mt-auto">
            <button
              className="py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 w-full"
              onClick={toggleModal}
            >
              <ArrowLeftStartOnRectangleIcon className="h-5 w-5 text-primary-600" />
              <span>Sign out</span>
            </button>
          </li>
        </ul>
      </nav>

      <SignOutModal />
    </aside>
  );
}

export default SideNavigation;
