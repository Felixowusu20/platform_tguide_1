"use client";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Micheal M.",
    role: "Aspiring Scholar",
    image: "/hero1.jpg",
    text: `TertiaryGuide’s communication channels kept me informed every step of the way. I received interview invitations promptly, which reduced my anxiety during the application process. This platform truly empowers students.`,
  },
  {
    name: "Mr Opare M.",
    role: "Parent and Advocate",
    image: "/tguide.jpg",
    text: `As a parent, I wanted the best for my child’s education. TertiaryGuide allowed us to explore options together. The personalized guidance ensured my child made a well-informed decision. It’s a valuable tool for both students and parents.`,
  },
  {
    name: "Mr Valens",
    role: "Admissions Officer",
    image: "/hero1.jpg",
    text: `Working with TertiaryGuide has streamlined our admissions process. The platform helps us reach a broader audience of prospective students, and the direct communication channel ensures a smooth application experience for them.`,
  },
  {
    name: "Ama K.",
    role: "Student Applicant",
    image: "/hero1.jpg",
    text: `The search and guidance tools on TertiaryGuide gave me confidence in my application. I discovered schools I hadn’t considered before.`,
  },
  {
    name: "Kwesi D.",
    role: "Career Mentor",
    image: "/tguide.jpg",
    text: `I recommend TertiaryGuide to my mentees. It gives them structure and access to forms without stress.`,
  },
];

export default function Testimonials() {
  const groupSize = 3;
  const groupCount = Math.ceil(testimonials.length / groupSize);
  const [currentGroup, setCurrentGroup] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGroup((prev) => (prev + 1) % groupCount);
    }, 25000);
    return () => clearInterval(interval);
  }, [groupCount]);

  const startIdx = currentGroup * groupSize;
  const visibleTestimonials = testimonials.slice(startIdx, startIdx + groupSize);

  return (
    <section className="w-full py-16 px-4 flex flex-col items-center bg-gradient-to-b from-white to-[#F9FAFB]">
      <h2 className="text-2xl md:text-3xl font-bold text-[#22305a] text-center">
        Testimonials
      </h2>
      <span className="block w-16 h-1 bg-[#FDBE33] mx-auto mt-2 rounded" />

      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {visibleTestimonials.map((t, idx) => (
          <div
            key={`${t.name}-${t.role}-${idx}`}
            className="relative flex flex-col items-center border border-gray-100 rounded-2xl shadow-lg p-6 sm:p-7 md:p-8 bg-white text-center transition hover:shadow-2xl min-h-[320px]"
          >
            {/* Top Image */}
            <div className="absolute -top-8 sm:-top-10 flex justify-center w-full">
              <img
                src={t.image}
                alt={t.name}
                className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover border-4 border-[#FDBE33] shadow-md bg-white"
              />
            </div>
            {/* Content */}
            <div className="mt-12 sm:mt-14 flex flex-col flex-1 justify-between w-full">
              <h3 className="font-semibold text-[#22305a] text-base sm:text-lg mb-1">{t.name}</h3>
              <p className="italic text-[#475569] text-xs sm:text-sm mb-2">{t.role}</p>
              <p className="text-[#475569] text-sm sm:text-base leading-relaxed mt-2 sm:mt-3 line-clamp-4 sm:line-clamp-none">
                “{t.text}”
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Slider dots */}
      {groupCount > 1 && (
        <div className="flex gap-3 mt-8 justify-center">
          {Array.from({ length: groupCount }).map((_, idx) => (
            <button
              key={`dot-${idx}`}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentGroup
                  ? "bg-[#22305a] scale-110 border-2 border-[#FDBE33]"
                  : "bg-gray-400 opacity-50"
              }`}
              onClick={() => setCurrentGroup(idx)}
              aria-label={`Go to testimonial group ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}