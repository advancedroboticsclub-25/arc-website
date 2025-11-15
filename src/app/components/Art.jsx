// // components/EventDirectory.jsx
// "use client";

// import { useState } from "react";

// // Put your real images in /public/events/* and adjust paths
// const EVENTS = [
//   {
//     id: "cozmo",
//     label: "COZMO CLENCH",
//     subtitle: "Autonomous dance-off squad.",
//     image: "/events/cozmo.jpeg",
//   },
//   {
//     id: "robo-war",
//     label: "ROBO WAR",
//     subtitle: "Metal vs metal, no mercy.",
//     image: "/events/robo-war.webp",
//   },
//   {
//     id: "mesh-merize",
//     label: "MESH-MERIZE",
//     subtitle: "Graphics, shaders & glitch art showcase.",
//     image: "/events/meshmerize.jpeg",
//   },
//   {
//     id: "code-rush",
//     label: "CODE RUSH",
//     subtitle: "Timed hacking gauntlet.",
//     image: "/events/code.jpg",
//   },
//   {
//     id: "circuit-chaos",
//     label: "CIRCUIT CHAOS",
//     subtitle: "Hardware puzzle arena.",
//     image: "/events/circuit.jpg",
//   },
// ];

// export default function EventDirectory() {
//   const [activeId, setActiveId] = useState(null);
//   const activeEvent = EVENTS.find((e) => e.id === activeId) || null;

//   return (
//     <section className="bg-black text-white py-24 px-4 sm:px-8 lg:px-16">
//       {/* full-width container */}
//       <div className="w-full mx-auto">
//         {/* Top meta line */}
//         <header className="mb-14 text-center">
//           <p className="text-[0.7rem] sm:text-xs uppercase tracking-[0.35em] text-white/45 mb-3">
//             Technorian · Event Directory
//           </p>
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium">
//             Explore every arena you can step into.
//           </h2>
//         </header>

//         {/* Layout: image on the left, vertical names on the right */}
//         <div className="grid gap-10 md:gap-12 lg:gap-16 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1.8fr)] items-stretch">
//           {/* Left: preview card */}
//           <div className="relative min-h-[260px] sm:min-h-[340px] lg:min-h-[420px] rounded-[2rem] border border-white/10 overflow-hidden bg-black flex items-center justify-center">
//             {/* subtle vertical lines */}
//             <div className="absolute inset-0 opacity-35 bg-[repeating-linear-gradient(to_right,rgba(148,163,184,0.35)_0,rgba(148,163,184,0.35)_1px,transparent_1px,transparent_80px)]" />

//             {/* Hint state */}
//             {!activeEvent && (
//               <div className="relative z-10 text-center px-6">
//                 <p className="text-[0.7rem] uppercase tracking-[0.35em] text-white/55 mb-2">
//                   Hover a column
//                 </p>
//                 <p className="text-sm sm:text-base text-white/70 max-w-md mx-auto">
//                   Move your cursor over an event name on the right to reveal its
//                   world.
//                 </p>
//               </div>
//             )}

//             {/* Active image state */}
//             {activeEvent && (
//               <>
//                 <img
//                   src={activeEvent.image}
//                   alt={activeEvent.label}
//                   className="relative z-10 h-full w-full object-cover"
//                 />
//                 <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent" />
//                 <div className="absolute inset-x-0 bottom-4 px-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 z-20">
//                   <div>
//                     <p className="text-[0.65rem] uppercase tracking-[0.35em] text-white/60">
//                       Featured event
//                     </p>
//                     <p className="text-lg sm:text-xl font-semibold">
//                       {activeEvent.label}
//                     </p>
//                   </div>
//                   <p className="text-xs sm:text-sm text-white/75 max-w-xs sm:text-right">
//                     {activeEvent.subtitle}
//                   </p>
//                 </div>
//               </>
//             )}
//           </div>

//           {/* Right: vertical event names */}
//           <div className="relative overflow-x-auto pb-3">
//             {/* Desktop / tablet: vertical columns across full width */}
//             <div className="hidden md:flex items-end gap-6 lg:gap-10 min-h-[260px] lg:min-h-[320px]">
//               {EVENTS.map((event) => {
//                 const isActive = activeId === event.id;
//                 return (
//                   <button
//                     key={event.id}
//                     type="button"
//                     onMouseEnter={() => setActiveId(event.id)}
//                     onFocus={() => setActiveId(event.id)}
//                     className="relative flex-1 flex justify-center focus:outline-none"
//                   >
//                     <span
//                       className="select-none whitespace-nowrap"
//                       style={{
//                         writingMode: "vertical-rl",
//                         textOrientation: "mixed",
//                       }}
//                     >
//                       <span
//                         className={`block font-semibold tracking-tight leading-none transition-transform duration-300 ${
//                           isActive
//                             ? "scale-110 text-white"
//                             : "scale-100 text-white/60"
//                         } text-[1.9rem] lg:text-[2.6rem]`}
//                       >
//                         {event.label}
//                       </span>
//                     </span>

//                     {/* tiny underline at base */}
//                     <span
//                       className={`pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-8 rounded-full bg-white transition-opacity duration-300 ${
//                         isActive ? "opacity-100" : "opacity-0"
//                       }`}
//                     />
//                   </button>
//                 );
//               })}
//             </div>

//             {/* Mobile: stacked, still hover/focusable */}
//             <div className="md:hidden space-y-3">
//               {EVENTS.map((event) => {
//                 const isActive = activeId === event.id;
//                 return (
//                   <button
//                     key={event.id}
//                     type="button"
//                     onMouseEnter={() => setActiveId(event.id)}
//                     onFocus={() => setActiveId(event.id)}
//                     className={`w-full text-left py-3 border-b border-white/10 flex justify-between items-center ${
//                       isActive ? "text-white" : "text-white/60"
//                     }`}
//                   >
//                     <span className="text-lg font-semibold">
//                       {event.label}
//                     </span>
//                     <span className="text-[0.65rem] uppercase tracking-[0.25em] text-white/40">
//                       view
//                     </span>
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
























// components/EventDirectory.jsx
"use client";

import { useState } from "react";

// Put your real images in /public/events/* and adjust paths
const EVENTS = [
  {
    id: "cozmo",
    label: "COZMO CLENCH",
    subtitle: "Autonomous dance-off squad.",
    image: "/events/cozmo.jpeg",
    rulebook: "https://docs.google.com/document/d/your-cozmo-rulebook-link",
  },
  {
    id: "robo-war",
    label: "ROBO WAR",
    subtitle: "Metal vs metal, no mercy.",
    image: "/events/robo-war.webp",
    rulebook: "https://docs.google.com/document/d/your-robo-war-rulebook-link",
  },
  {
    id: "mesh-merize",
    label: "MESH-MERIZE",
    subtitle: "Graphics, shaders & glitch art showcase.",
    image: "/events/meshmerize.jpeg",
    rulebook: "https://docs.google.com/document/d/your-mesh-merize-rulebook-link",
  },
  {
    id: "code-rush",
    label: "CODE RUSH",
    subtitle: "Timed hacking gauntlet.",
    image: "/events/code.jpg",
    rulebook: "https://docs.google.com/document/d/your-code-rush-rulebook-link",
  },
  {
    id: "circuit-chaos",
    label: "CIRCUIT CHAOS",
    subtitle: "Hardware puzzle arena.",
    image: "/events/circuit.jpg",
    rulebook: "https://docs.google.com/document/d/your-circuit-chaos-rulebook-link",
  },
];

export default function EventDirectory() {
  const [activeId, setActiveId] = useState(null);
  const activeEvent = EVENTS.find((e) => e.id === activeId) || null;

  const handleImageClick = () => {
    if (activeEvent?.rulebook) {
      window.open(activeEvent.rulebook, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="bg-black text-white py-24 px-4 sm:px-8 lg:px-16">
      {/* full-width container */}
      <div className="w-full mx-auto">
        {/* Top meta line */}
        <header className="mb-14 text-center">
          <p className="text-[0.7rem] sm:text-xs uppercase tracking-[0.35em] text-white/45 mb-3">
            Technorian · Event Directory
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium">
            Explore every arena you can step into.
          </h2>
        </header>

        {/* Layout: image on the left, vertical names on the right */}
        <div className="grid gap-10 md:gap-12 lg:gap-16 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1.8fr)] items-stretch">
          {/* Left: preview card */}
          <div className="relative min-h-[260px] sm:min-h-[340px] lg:min-h-[420px] rounded-[2rem] border border-white/10 overflow-hidden bg-black flex items-center justify-center">
            {/* subtle vertical lines */}
            <div className="absolute inset-0 opacity-35 bg-[repeating-linear-gradient(to_right,rgba(148,163,184,0.35)_0,rgba(148,163,184,0.35)_1px,transparent_1px,transparent_80px)]" />

            {/* Hint state */}
            {!activeEvent && (
              <div className="relative z-10 text-center px-6">
                <p className="text-[0.7rem] uppercase tracking-[0.35em] text-white/55 mb-2">
                  Hover a column
                </p>
                <p className="text-sm sm:text-base text-white/70 max-w-md mx-auto">
                  Move your cursor over an event name on the right to reveal its
                  world.
                </p>
              </div>
            )}

            {/* Active image state */}
            {activeEvent && (
              <>
                {/* Clickable Image */}
                <div 
                  onClick={handleImageClick}
                  className="relative z-10 h-full w-full cursor-pointer group"
                >
                  <img
                    src={activeEvent.image}
                    alt={activeEvent.label}
                    className="h-full w-full object-cover group-hover:opacity-80 transition-opacity duration-300"
                  />
                  {/* Desktop Rulebook Link - Award Winning Styled */}
                  <div className="absolute top-4 right-4 hidden md:block">
                    <div className="group/btn flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105">
                      <span className="text-xs uppercase tracking-widest text-white/80 group-hover/btn:text-white">
                        Click me to view rulebook
                      </span>
                      <div className="w-4 h-4 flex items-center justify-center bg-white/20 rounded group-hover/btn:bg-white/30 transition-colors">
                        <svg 
                          width="12" 
                          height="12" 
                          viewBox="0 0 16 16" 
                          className="text-white transform -rotate-45 group-hover/btn:translate-y-[-1px] transition-transform"
                          fill="currentColor"
                        >
                          <path d="M14 2L2 14M14 2V14M14 2H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent" />
                <div className="absolute inset-x-0 bottom-4 px-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 z-20">
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.35em] text-white/60">
                      Featured event
                    </p>
                    <p className="text-lg sm:text-xl font-semibold">
                      {activeEvent.label}
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-white/75 max-w-xs sm:text-right">
                    {activeEvent.subtitle}
                  </p>
                </div>

                {/* Desktop Instruction Text Below Image */}
                <div className="absolute -bottom-16 left-0 right-0 hidden md:block">
                  <div className="text-center">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50 mt-4">
                      Click image or ↑ button to view rulebook
                    </p>
                    <div className="flex justify-center mt-2">
                      <div className="w-6 h-6 border border-white/30 rounded-full flex items-center justify-center animate-bounce">
                        <svg 
                          width="12" 
                          height="12" 
                          viewBox="0 0 16 16" 
                          className="text-white/60"
                          fill="currentColor"
                        >
                          <path d="M8 12V4M8 12L5 9M8 12L11 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Right: vertical event names */}
          <div className="relative overflow-x-auto pb-3">
            {/* Desktop / tablet: vertical columns across full width */}
            <div className="hidden md:flex items-end gap-6 lg:gap-10 min-h-[260px] lg:min-h-[320px]">
              {EVENTS.map((event) => {
                const isActive = activeId === event.id;
                return (
                  <button
                    key={event.id}
                    type="button"
                    onMouseEnter={() => setActiveId(event.id)}
                    onFocus={() => setActiveId(event.id)}
                    className="relative flex-1 flex justify-center focus:outline-none"
                  >
                    <span
                      className="select-none whitespace-nowrap"
                      style={{
                        writingMode: "vertical-rl",
                        textOrientation: "mixed",
                      }}
                    >
                      <span
                        className={`block font-semibold tracking-tight leading-none transition-transform duration-300 ${
                          isActive
                            ? "scale-110 text-white"
                            : "scale-100 text-white/60"
                        } text-[1.9rem] lg:text-[2.6rem]`}
                      >
                        {event.label}
                      </span>
                    </span>

                    {/* tiny underline at base */}
                    <span
                      className={`pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-8 rounded-full bg-white transition-opacity duration-300 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Mobile: stacked, still hover/focusable */}
            <div className="md:hidden space-y-3">
              {EVENTS.map((event) => {
                const isActive = activeId === event.id;
                return (
                  <button
                    key={event.id}
                    type="button"
                    onMouseEnter={() => setActiveId(event.id)}
                    onFocus={() => setActiveId(event.id)}
                    className={`w-full text-left py-3 border-b border-white/10 flex justify-between items-center ${
                      isActive ? "text-white" : "text-white/60"
                    }`}
                  >
                    <span className="text-lg font-semibold">
                      {event.label}
                    </span>
                    <a 
                      href={event.rulebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-[0.65rem] uppercase tracking-[0.25em] text-white/60 hover:text-white transition-colors px-3 py-1 border border-white/30 rounded-full hover:border-white/60"
                    >
                      View Details
                    </a>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}