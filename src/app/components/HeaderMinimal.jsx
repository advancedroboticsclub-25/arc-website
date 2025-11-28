"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeaderMinimal() {
  const [contactOpen, setContactOpen] = useState(false);
  const contactRef = useRef(null);
  const dropdownRef = useRef(null);

  // Close contact dropdown on outside click
  useEffect(() => {
    if (!contactOpen) return;

    const handleClick = (e) => {
      if (!contactRef.current) return;
      if (!contactRef.current.contains(e.target)) {
        setContactOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [contactOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-30 pointer-events-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* ---------------- LEFT: BRAND ---------------- */}
          <Link href="/">
            <div className="flex items-center gap-3 sm:gap-4 pointer-events-auto">
              {/* Circular Logo */}
              <img
                src="/logos/logo-circle.png"
                alt="Technorian Logo"
                className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 rounded-full object-cover"
              />

              <div className="leading-tight">
                <p className="text-[0.7rem] sm:text-[0.8rem] md:text-[0.85rem] text-white/80 uppercase tracking-[0.25em] font-bold">
                  Technorian
                </p>
                <p className="text-[0.55rem] sm:text-[0.65rem] text-white/60 uppercase tracking-[0.25em] mt-1">
                  2025 · A.C.E.M
                </p>
              </div>
            </div>
          </Link>

          {/* --------------- RIGHT: CHIPS / DROPDOWN --------------- */}
          <div
            className="
              flex items-center flex-wrap justify-end 
              gap-2 sm:gap-3 md:gap-5 pointer-events-auto
              max-w-[70%] sm:max-w-none
            "
          >
            {/* EMAIL CHIP */}
            <Link
              href="mailto:technorian@acem.edu"
              className="
                inline-flex items-center gap-2 rounded-full
                border border-white/25 bg-black/60 backdrop-blur-sm
                px-3 sm:px-4 py-1.5
                text-[0.65rem] sm:text-[0.7rem] md:text-xs
                font-medium uppercase tracking-[0.18em]
                text-white/80 hover:border-white/60 hover:bg-white/5
                transition-all
              "
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
              <span className="font-mono hidden sm:inline">MAIL</span>
              <span className="font-mono sm:hidden">M</span>
            </Link>

            {/* FAQ CHIP */}
            {/* EMAIL CHIP */}
            <Link
              href="#faq"
              className="
                inline-flex items-center gap-2 rounded-full
                border border-white/25 bg-black/60 backdrop-blur-sm
                px-3 sm:px-4 py-1.5
                text-[0.65rem] sm:text-[0.7rem] md:text-xs
                font-medium uppercase tracking-[0.18em]
                text-white/80 hover:border-white/60 hover:bg-white/5
                transition-all
              "
            >
              <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
              <span className="font-mono hidden sm:inline">FAQ</span>
              <span className="font-mono sm:hidden">F</span>
            </Link>

            {/* CONTACT DROPDOWN */}
            <div className="relative" ref={contactRef}>
              <button
                type="button"
                onClick={() => setContactOpen((v) => !v)}
                className="
                  inline-flex items-center gap-1.5 rounded-full
                  border border-white/25 bg-black/60 backdrop-blur-sm
                  px-3 sm:px-4 py-1.5
                  text-[0.65rem] sm:text-[0.7rem] md:text-xs
                  font-medium uppercase tracking-[0.18em]
                  text-white/80 hover:border-white/60 hover:bg-white/5
                  transition-all
                "
              >
                <span className="h-2 w-2 rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.9)]" />
                <span className="font-mono hidden sm:inline">CONTACT</span>
                <span className="font-mono sm:hidden">CALL</span>
                <ChevronDown
                  className={`w-3 h-3 transition-transform ${
                    contactOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {/* Glass dropdown */}
              <AnimatePresence>
                {contactOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="
                      absolute right-0 mt-2 w-52 sm:w-56
                      bg-black/80 backdrop-blur-xl
                      border border-white/15
                      rounded-xl shadow-[0_12px_30px_rgba(0,0,0,0.55)]
                      overflow-hidden
                    "
                  >
                    <div className="flex flex-col text-[0.7rem] sm:text-[0.75rem] text-white/85">
                      <a
                        href="tel:+9779800000000"
                        className="px-4 py-3 hover:bg-white/10 transition-colors flex justify-between gap-3"
                      >
                        <span>Event Head</span>
                        <span className="font-mono whitespace-nowrap">
                          9800-000000
                        </span>
                      </a>

                      <a
                        href="tel:+9779800000002"
                        className="px-4 py-3 hover:bg-white/10 transition-colors flex justify-between gap-3"
                      >
                        <span>Registration</span>
                        <span className="font-mono whitespace-nowrap">
                          9800-000002
                        </span>
                      </a>

                      <a
                        href="tel:+9779800000003"
                        className="px-4 py-3 hover:bg-white/10 transition-colors flex justify-between gap-3"
                      >
                        <span>Support</span>
                        <span className="font-mono whitespace-nowrap">
                          9800-000003
                        </span>
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ARC LOGO – DESKTOP ONLY */}
            <div className="hidden md:block">
              <img
                src="/logos/arc.png"
                alt="ARC Logo"
                className="h-10 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}