"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/specialization", label: "Specialization" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/services", label: "Services" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // better threshold
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomepage = pathname === "/";

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1580px] items-center justify-between px-6 sm:px-10 lg:px-20">
        
        {/* LOGO */}
        <Link href="/">
          <img
            src="/logo.png"
            alt="Ak Law Chamber Logo"
            className="w-auto h-16 sm:h-20 md:h-24 transition-all duration-300"
          />
        </Link>

        {/* NAV LINKS */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-[#d4a017]"
                    : isHomepage && !scrolled
                    ? "text-white"
                    : "text-black"
                } hover:text-[#d4a017]`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* BUTTON */}
        <Link
          href="/contact-us"
          className={`hidden md:inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
            isHomepage && !scrolled
              ? "bg-white text-black hover:bg-gray-200"
              : "bg-[#d4a017] text-black hover:bg-[#f1c94c]"
          }`}
        >
          Book Consultation
        </Link>
      </div>
    </header>
  );
}