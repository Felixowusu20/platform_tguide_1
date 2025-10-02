"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/wassce-checker", label: "WASSCE" },
  { href: "/university-forms", label: "Forms" },
  { href: "/my-forms", label: "My Forms" },
  { href: "/notifications", label: "Alerts" },
  { href: "/about", label: "Info" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[var(--tg-navy)] text-[#FDBE33] px-4 md:px-10 py-3 flex items-center justify-between shadow-lg sticky top-0 z-40">
      <Link href="/" className="flex items-center gap-2 group z-50">
        <Image src="/tguide.jpg" alt="Tertiary Guide Logo" width={40} height={40} priority />
        <span className="text-2xl font-extrabold tracking-tight group-hover:text-[var(--tg-accent)] transition-colors">Tertiary Guide</span>
      </Link>
      {/* Desktop Nav */}
  <ul className="hidden md:flex gap-4 lg:gap-8 items-center text-base font-medium">
        {navLinks.map((link) => (
          <li key={link.href} className="whitespace-nowrap">
            <Link href={link.href} className="px-2 py-1 rounded hover:text-white hover:bg-[var(--tg-accent)] transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <Link href="/auth/login" className="ml-2 px-4 py-2 rounded-full bg-[var(--tg-accent)] text-[var(--tg-navy)] font-semibold hover:bg-white hover:text-[var(--tg-primary)] transition-colors shadow">Login</Link>
        </li>
      </ul>
      {/* Mobile menu button */}
      <button
        className="md:hidden z-50 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[var(--tg-accent)]"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen((v) => !v)}
      >
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      {/* Mobile Nav Drawer */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[var(--tg-navy)] bg-opacity-95 flex flex-col items-center justify-center gap-8 text-[#FDBE33] text-xl font-semibold transition-transform duration-300 md:hidden z-40 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
        style={{ pointerEvents: menuOpen ? "auto" : "none" }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/auth/login"
          className="px-6 py-3 rounded-full bg-[var(--tg-accent)] text-[var(--tg-navy)] font-bold hover:bg-white hover:text-[var(--tg-primary)] transition-colors shadow"
          onClick={() => setMenuOpen(false)}
        >
          Login
        </Link>
      </div>
      {/* Overlay to close menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
}
