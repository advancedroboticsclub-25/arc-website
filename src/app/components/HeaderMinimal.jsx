"use client";

export default function HeaderMinimal() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 pointer-events-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Left: Brand */}
          <div className="flex items-center gap-3 sm:gap-4 pointer-events-auto">
            {/* Circular Logo */}
            <img
              src="/logos/logo-circle.png" // make sure this exists in /public/logos
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

          {/* Right: status / email chip */}
          <div className="flex items-center gap-3 md:gap-5">
            <a
              href="mailto:technorian@acem.edu" // change to your real contact
              className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/60/80 backdrop-blur-sm px-3 sm:px-4 py-1.5 text-[0.65rem] sm:text-[0.7rem] md:text-xs font-medium tracking-[0.18em] uppercase text-white/80 hover:border-white/60 hover:bg-white/5 transition-all"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
              <span className="font-mono hidden sm:inline">
                hello@technorian.live
              </span>
              <span className="font-mono sm:hidden">We&apos;re live</span>
            </a>

            {/* ARC Logo - Desktop only */}
            <div className="hidden md:block pointer-events-auto">
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
