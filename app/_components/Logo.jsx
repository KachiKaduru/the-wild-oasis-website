"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import { useEffect, useState } from "react";

function Logo() {
  const [area, setArea] = useState(50);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleResize = (e) => {
      if (e.matches) setArea(60);
      if (!e.matches) setArea(50);
    };

    handleResize(mediaQuery);

    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        src={logo}
        height={`${area}`}
        width={`${area}`}
        quality={100}
        alt="The Wild Oasis logo"
      />
      <span className="text-lg sm:text-xl font-semibold text-primary-100">The Wild Oasis</span>
    </Link>
  );
}

export default Logo;
