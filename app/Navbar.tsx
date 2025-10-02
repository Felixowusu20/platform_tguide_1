"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/wassce-checker", label: "WASSCE" },
  { href: "/university-forms", label: "Forms" },
  { href: "/my-forms", label: "My Forms" },
  { href: "/notifications", label: "Alerts" },
  { href: "/about", label: "Info" },
];

const whatsappNumber = "233501234567"; // Replace with your WhatsApp number
const whatsappLink = `https://wa.me/${whatsappNumber}`;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 px-4 md:px-10 py-3 flex items-center justify-between ${scrolled ? 'bg-white/70 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}
      style={{ borderBottom: '1px solid #e5e7eb' }}
    >
      <Link href="/" className="flex items-center gap-2 group z-50">
        <Image
          src="/tguide.jpg"
          alt="Tertiary Guide Logo"
          width={40}
          height={40}
          priority
          className="rounded-full border-2 border-[var(--tg-accent)] bg-white"
        />
        <span className="text-2xl font-extrabold tracking-tight transition-colors duration-300 text-[#1a237e] group-hover:text-[#ff9800]">Tertiary Guide</span>
      </Link>
      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-4 lg:gap-7 items-center text-sm font-medium ml-8">
        {navLinks.map((link, idx) => (
          <li key={link.href} className="whitespace-nowrap">
            <Link
              href={link.href}
              className={`px-3 py-1.5 rounded-lg transition-all duration-200 tracking-wide 
                ${idx === 0 ? 'ml-4' : ''}
                text-[#263238] hover:text-white hover:bg-[#ff9800] focus:outline-none focus:ring-2 focus:ring-[#ff9800] focus:ring-offset-2`}
              style={{ fontSize: '0.98rem', letterSpacing: '0.01em' }}
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-3 py-1.5 rounded-full flex items-center gap-2 bg-green-500 text-white font-medium hover:bg-green-600 transition-colors shadow"
            title="Chat on WhatsApp"
          >
            <FaWhatsapp size={18} /> WhatsApp
          </a>
        </li>
        <li>
          <Link href="/auth/login" className="ml-2 px-3 py-1.5 rounded-full bg-[#ff9800] text-[#1a237e] font-medium hover:bg-white hover:text-[#ff9800] transition-colors shadow">Login</Link>
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
        className={`fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center gap-7 text-[#263238] text-lg font-medium transition-transform duration-300 md:hidden z-40 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
        style={{ pointerEvents: menuOpen ? "auto" : "none" }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-white hover:bg-[#ff9800] transition-colors px-6 py-2 rounded-lg"
            onClick={() => setMenuOpen(false)}
            style={{ fontSize: '1rem', letterSpacing: '0.01em' }}
          >
            {link.label}
          </Link>
        ))}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 rounded-full flex items-center gap-2 bg-green-500 text-white font-medium hover:bg-green-600 transition-colors shadow"
          title="Chat on WhatsApp"
          onClick={() => setMenuOpen(false)}
        >
          <FaWhatsapp size={20} /> WhatsApp
        </a>
        <Link
          href="/auth/login"
          className="px-6 py-2 rounded-full bg-[#ff9800] text-[#1a237e] font-medium hover:bg-white hover:text-[#ff9800] transition-colors shadow"
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