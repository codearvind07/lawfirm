"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/about", label: "About" },
  { href: "/specialization", label: "Specialization" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/services", label: "Services" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
  const isTransparent = isHomepage && !scrolled && !mobileMenuOpen;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        !isTransparent
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1580px] items-center justify-between px-6 sm:px-10 lg:px-20">
        
        {/* LEFT SECTION: LOGO + NAV */}
        <div className="flex items-center gap-6 lg:gap-12">
          {/* LOGO */}
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>
            <img
              src="/logo.png"
              alt="Ak Law Chamber Logo"
              className="w-auto h-16 sm:h-20 md:h-24 transition-all duration-300"
            />
          </Link>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-4">
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`inline-flex items-center justify-center rounded-full px-4 lg:px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? isTransparent
                        ? "bg-gray-200 text-black"
                        : "bg-[#f1c94c] text-black"
                      : isTransparent
                      ? "bg-white text-black hover:bg-gray-200"
                      : "bg-[#d4a017] text-black hover:bg-[#f1c94c]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* RIGHT SECTION: BUTTON + MOBILE TOGGLE */}
        <div className="flex items-center">
          {/* BUTTON */}
          <Link
            href="/contact-us"
            className={`hidden md:inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
              isTransparent
                ? "bg-white text-black hover:bg-gray-200"
                : "bg-[#d4a017] text-black hover:bg-[#f1c94c]"
            }`}
          >
            Book Consultation
          </Link>

          {/* MOBILE MENU TOGGLE */}
          <button
            className={`md:hidden p-2 transition-all duration-200 active:scale-95 ${
              isTransparent ? "text-white" : "text-black"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-500 ease-in-out ${
          mobileMenuOpen
            ? "max-h-[500px] opacity-100 bg-white/95 backdrop-blur-md shadow-xl border-t border-gray-100"
            : "max-h-0 opacity-0 pointer-events-none bg-white/90"
        }`}
      >
        <div className="flex flex-col gap-4 py-6 px-6">
          <nav className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold shadow-sm transition-all duration-300 active:scale-[0.98] ${
                  pathname === link.href
                    ? "bg-[#f1c94c] text-black"
                    : "bg-[#d4a017] text-black hover:bg-[#f1c94c]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="h-px w-full bg-gray-200 my-1"></div>
          
          <Link
            href="/contact-us"
            onClick={() => setMobileMenuOpen(false)}
            className="flex w-full items-center justify-center rounded-full bg-[#d4a017] px-6 py-4 text-sm font-bold text-black shadow-md transition-all duration-300 hover:bg-[#f1c94c] hover:shadow-lg active:scale-[0.98]"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}