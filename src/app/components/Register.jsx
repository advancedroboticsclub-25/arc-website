// components/RegistrationDataSlabs.jsx
"use client";
import React from "react";

const REGISTRATION_INFO = {
  generalAndRules: [
    "Must be enrolled in Bachelor's program or below",
    "Register online through official ARC/Techfest website",
    "Registrations NOT accepted after deadline",
    "Referee's decision is final",
    "Follow time limits and competition rules",
    "Cooperate with volunteers",
    "Rules subject to change - participants will be notified",
  ],
  privileges: [
    "Winners & runners-up of Cozmo Clench and Meshmerize compete at Techfest IIT Bombay 2025",
    "Winners of Code Code and Techfest Olympiad receive cash prizes from ARC and IIT certificates",
    "Certificate of participation for all participants from ARC",
    "Networking opportunity with talents from across the country",
    "Showcase your skills to students and professionals",
    "ARC covers food costs for the event day",
    "ARC covers accommodation (1N1D) for students from outside the valley",
    "Note: Travel fees NOT covered by ARC",
  ],
  requirements: [
    "Valid student ID or institutional proof required",
    "Participants must bring their own laptops for Code Code competition",
    "Offline compilers required for Code Code (no internet allowed)",
    "Team members from same institution (unless otherwise permitted)",
  ],
};

// Minimal, abstract grid icon
const DataGridIcon = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 9h16M4 15h16M9 4v16M15 4v16"
    />
  </svg>
);

const RegistrationDataSlabs = () => {
  return (
    <section className="relative bg-black text-white py-20 px-4 sm:px-8 lg:px-16 overflow-hidden">
      {/* --- Background Layers --- */}
      
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.12),transparent_60%)]" />
        <div className="absolute bottom-[-20rem] right-[-10rem] w-[40rem] h-[40rem] bg-[radial-gradient(circle_at_center,_rgba(236,72,153,0.14),transparent_65%)]" />
      </div>

      {/* faint grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-screen">
        <div className="w-full h-full bg-[size:32px_32px] bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <header className="mb-14 text-center space-y-4">
          <p className="text-xs sm:text-sm font-mono tracking-[0.3em] text-blue-400/80 uppercase">
            PROTOCOL LAYER · V1.0
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
            SYSTEM REQUIREMENTS &amp; ACCESS RULES
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-3xl mx-auto">
            Before you enter the arena, the system validates your identity,
            resources, and privileges. These slabs represent the active ruleset
            for Technorion 5.0.
          </p>
        </header>

        {/* --- Slabs Cluster --- */}
        <div className="relative flex flex-col gap-8 lg:gap-0 lg:flex-row items-stretch lg:items-center lg:justify-center">
          {/* Left Slab – General Protocol */}
          <div className="relative lg:w-[32%]">
            {/* Glow border accent */}
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-blue-500/40 via-transparent to-transparent opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div
              className="
                relative group bg-[#050509]/80 backdrop-blur-xl
                border border-blue-500/20 rounded-3xl p-7 sm:p-8
                shadow-[0_24px_80px_rgba(37,99,235,0.35)]
                lg:-rotate-3 lg:-translate-x-4 lg:-translate-y-4
                transition-transform duration-500
                hover:translate-y-[-4px] hover:rotate-0
              "
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-500/10 border border-blue-400/40">
                  <DataGridIcon className="w-4 h-4 text-blue-400" />
                </span>
                <div>
                  <p className="text-[0.7rem] font-mono tracking-[0.25em] uppercase text-blue-300/70">
                    Layer 01
                  </p>
                  <h3 className="text-lg sm:text-xl font-semibold uppercase tracking-widest text-blue-300">
                    General Protocol
                  </h3>
                </div>
              </div>

              <ul className="space-y-3.5">
                {REGISTRATION_INFO.generalAndRules.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-xs sm:text-sm text-white/70"
                  >
                    <span className="font-mono text-[0.65rem] text-blue-400/80 mt-1 shrink-0">
                      [G.{String(idx + 1).padStart(2, "0")}]
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Center Slab – Privileges (Hero) */}
          <div className="relative lg:w-[38%]">
            {/* orbiting chips */}
            <div className="pointer-events-none hidden lg:block">
              <div className="absolute -top-6 -left-10 px-3 py-1.5 rounded-full border border-emerald-400/50 bg-emerald-400/10 text-[0.65rem] font-mono tracking-[0.2em] uppercase text-emerald-200/90">
                Access Granted
              </div>
              <div className="absolute -bottom-8 right-0 px-3 py-1.5 rounded-full border border-purple-400/50 bg-purple-500/10 text-[0.65rem] font-mono tracking-[0.2em] uppercase text-purple-100/90">
                ARC · Techfest IITB
              </div>
            </div>

            <div
              className="
                relative bg-gradient-to-br from-blue-500/20 via-slate-900/90 to-pink-500/20
                border border-white/10 rounded-3xl p-8 sm:p-10
                shadow-[0_30px_120px_rgba(0,0,0,0.85)]
                lg:scale-105 lg:translate-y-2
                transition-transform duration-500
                hover:translate-y-0 hover:scale-107
              "
            >
              {/* top sub-header */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <div>
                  <p className="text-[0.7rem] font-mono tracking-[0.25em] uppercase text-emerald-200/80">
                    Layer 02
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                    Privilege Matrix
                  </h3>
                </div>
                <div className="flex flex-col items-end text-right">
                  <p className="text-[0.65rem] font-mono text-white/60">
                    STATUS:{" "}
                    <span className="text-emerald-300 font-semibold">
                      ACTIVE
                    </span>
                  </p>
                  <p className="text-[0.65rem] font-mono text-white/40">
                    REV. TF-2025
                  </p>
                </div>
              </div>

              {/* privilege list */}
              <div className="relative rounded-2xl bg-black/40 border border-white/10 p-4 sm:p-5 max-h-[280px] sm:max-h-[260px] overflow-y-auto custom-scrollbar">
                <ul className="space-y-3">
                  {REGISTRATION_INFO.privileges.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-xs sm:text-sm text-white/80"
                    >
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-br from-emerald-300 to-sky-300 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* bottom meta row */}
              <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[0.7rem] text-white/60 font-mono">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
                  <span>Sync: ARC · Techfest IIT Bombay</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10">
                    benefits.enabled = true
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10">
                    travelCoverage = false
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Slab – Mandatory Requirements */}
          <div className="relative lg:w-[32%]">
            <div
              className="
                relative group bg-[#050509]/90 backdrop-blur-xl
                border border-pink-500/25 rounded-3xl p-7 sm:p-8
                shadow-[0_24px_80px_rgba(236,72,153,0.35)]
                lg:rotate-3 lg:translate-x-4 lg:-translate-y-4
                transition-transform duration-500
                hover:translate-y-[-4px] hover:rotate-0
              "
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-pink-500/10 border border-pink-400/40">
                  <DataGridIcon className="w-4 h-4 text-pink-400" />
                </span>
                <div>
                  <p className="text-[0.7rem] font-mono tracking-[0.25em] uppercase text-pink-300/80">
                    Layer 03
                  </p>
                  <h3 className="text-lg sm:text-xl font-semibold uppercase tracking-widest text-pink-200">
                    Mandatory Requirements
                  </h3>
                </div>
              </div>

              <ul className="space-y-3.5">
                {REGISTRATION_INFO.requirements.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-xs sm:text-sm text-white/75"
                  >
                    <span className="font-mono text-[0.65rem] text-pink-300 mt-1 shrink-0">
                      [R.{String(idx + 1).padStart(2, "0")}]
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom caption / disclaimer */}
        <div className="mt-12 text-center text-[0.7rem] sm:text-xs text-white/45 font-mono tracking-[0.18em] uppercase">
          Non-compliance with any active slab may lead to immediate
          disqualification from Technorion 5.0 evaluation pipeline.
        </div>
      </div>
    </section>
  );
};

export default RegistrationDataSlabs;
