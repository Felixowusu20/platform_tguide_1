import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#22305a] text-[#ffe9b0] py-8 px-4 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-xl font-bold tracking-tight">Tertiary Guide</span>
          <span className="text-xs text-[#ffe9b0]/80">Empowering your tertiary journey</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex gap-4 mb-1">
            <a href="#" aria-label="Facebook" className="hover:text-white transition-colors"><FaFacebookF size={18} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-white transition-colors"><FaTwitter size={18} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-white transition-colors"><FaInstagram size={18} /></a>
          </div>
          <div className="text-xs text-[#ffe9b0]/80">info@tertiaryguide.com</div>
          <div className="text-xs text-[#ffe9b0]/80">+233 59 511 0767</div>
        </div>
        <div className="text-xs text-[#ffe9b0]/60 text-center md:text-right mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} Tertiary Guide. All rights reserved.<br />
          <Link href="/privacy" className="underline hover:text-white">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}


