"use client";

import { CalendarDaysIcon, HomeIcon, UserIcon } from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useReservation } from "../_contexts/ReservationContext";
import MenuIcon from "./MenuIcon";
import { motion } from "framer-motion";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
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

const sidebarVariants = {
  hidden: { x: "-100%" }, // Start off-screen
  visible: { x: 0, transition: { duration: 0.1, ease: "easeInOut" } }, // Slide in
  exit: { x: "-100%", transition: { duration: 0.1, ease: "easeInOut" } }, // Slide out
};

function SideNavigation() {
  const pathname = usePathname();
  const { isOpen, closeNav } = useReservation();

  const hide = "-translate-x-full opacity-0 -z-40";
  const show = "translate-x-0 opacity-100";

  return (
    <aside>
      <MenuIcon className="md:hidden" />

      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-40 md:hidden"
          onClick={closeNav}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}

      <motion.nav
        className={`border-r border-primary-900 w-64 absolute top-0 left-0 bg-primary-950 -z-30 h-[76dvh]`}
        variants={sidebarVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        exit="exit"
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
            <SignOutButton />
          </li>
        </ul>
      </motion.nav>
    </aside>
  );
}

export default SideNavigation;
