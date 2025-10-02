 "client";

import Image from "next/image";
import Hero from "../app/components/HeroCarousel";
import ShortMessage from "../app/components/ShortMessage";
import SearchEngine from "../app/components/SearchEngine";
import SchoolsListTable from "./components/SchoolsListTable";
import Services from "../app/components/Services"
import BlogSection from "./components/BlogSection";
import Allabout from "./components/Allabout";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[#f8fafc] flex flex-col items-center">
      <div className="w-full">
        <Hero />
      </div>
      <div className="w-full max-w-6xl px-1 sm:px-3 md:px-6 flex flex-col gap-4 sm:gap-6 md:gap-10">
        <ShortMessage />
        <SearchEngine />
        <SchoolsListTable />
        <Services />
        <div>
          <BlogSection />
        </div>
        <div className="h-10">
          <Allabout />
        </div>
      </div>
    </main>
  );
}
