"use client"

import { useState } from "react";

const teamMembers = [
  {
    name: "Aristide BYENDAGUSETSA",
    role: "Accountant",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    number: "01",
  },
  {
    name: "Confiance Impano MUNYANEZA",
    role: "Importation Manager",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop",
    number: "02",
  },
  {
    name: "Constance Ishimwe MUNYANEZA",
    role: "Marketing Lead",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
    number: "03",
  },
  {
    name: "Alice SMITH",
    role: "Customer Care",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop",
    number: "04",
  },
  {
    name: "Robert BROWN",
    role: "Operations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
    number: "05",
  },
  {
    name: "Michael WILSON",
    role: "Tech Lead",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    number: "06",
  },
];

export default function AboutTeam() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="pt-14 pb-6 sm:pt-16 lg:pt-24 lg:pb-10">
      <div className="site-container">

        {/* ── Header ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-12 items-end mb-10 sm:mb-16 lg:mb-20">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-5 lg:mb-6">
              <div className="w-6 h-6 rounded-full bg-[#47A15E] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>
              <span className="text-[0.625rem] lg:text-[0.6875rem] font-semibold tracking-[0.25em] uppercase text-[#47A15E]">
                Our Team
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-stone-900 leading-[1.1] tracking-tight">
              The people <br className="hidden sm:block" />
              <em className="not-italic font-semibold text-[#47A15E]">behind the work</em>
            </h2>
          </div>

          {/* Right */}
          <div className="lg:pl-12 lg:border-l border-stone-200">
            <p className="text-[0.9375rem] lg:text-base leading-relaxed text-stone-500 mb-6 lg:mb-8 max-w-sm">
              Seasoned professionals with deep roots in agriculture and an
              unwavering commitment to empowering farmers at every step of
              their journey.
            </p>

            <div className="flex items-center gap-6">
              <div className="text-center">
                <span className="block text-3xl lg:text-4xl font-light text-stone-900 leading-none">
                  {teamMembers.length.toString().padStart(2, "0")}
                </span>
                <span className="text-[0.5625rem] lg:text-[0.625rem] font-semibold tracking-widest uppercase text-stone-400 mt-2 block">
                  Members
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-stone-200 border-x border-b border-stone-200">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative overflow-hidden bg-white cursor-pointer"
              style={{ paddingBottom: "110%" }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Photo */}
              <img
                src={member.image}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out"
                style={{
                  transform: hovered === index ? "scale(1.06)" : "scale(1.0)",
                }}
              />

              {/* Scrim — always present, deepens on hover */}
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.1) 45%, rgba(0,0,0,0.85) 100%)",
                  opacity: hovered === index ? 1 : 0.85,
                }}
              />

              {/* Top-left index */}
              <div className="absolute top-3 left-3 sm:top-5 sm:left-5 lg:top-6 lg:left-6">
                <span
                  className="text-[0.5625rem] lg:text-[0.625rem] font-bold tracking-[0.2em] transition-colors duration-300"
                  style={{ color: hovered === index ? "#47A15E" : "rgba(255,255,255,0.4)" }}
                >
                  {member.number}
                </span>
              </div>

              {/* Top-right role pill — slides in on hover */}
              <div
                className="absolute top-3 right-3 sm:top-5 sm:right-5 lg:top-6 lg:right-6 transition-all duration-500 hidden sm:block"
                style={{
                  opacity: hovered === index ? 1 : 0,
                  transform: hovered === index ? "translateY(0)" : "translateY(-6px)",
                }}
              >
                <span className="text-[0.5625rem] font-bold tracking-widest uppercase bg-[#47A15E] text-white px-2.5 py-1 lg:px-3 lg:py-1.5 rounded-sm">
                  {member.role}
                </span>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5 lg:p-7">
                {/* Divider line that grows on hover */}
                <div
                  className="h-px bg-[#47A15E] mb-2 sm:mb-4 lg:mb-5 transition-all duration-500 ease-out"
                  style={{ width: hovered === index ? "40px" : "20px", opacity: hovered === index ? 1 : 0.5 }}
                />

                <h3 className="text-white text-[0.8125rem] sm:text-base lg:text-lg font-light leading-[1.3] tracking-wide mb-1 break-words">
                  {member.name}
                </h3>
                <p className="text-stone-400 text-[0.5625rem] sm:text-[0.625rem] lg:text-xs font-medium tracking-widest uppercase">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
