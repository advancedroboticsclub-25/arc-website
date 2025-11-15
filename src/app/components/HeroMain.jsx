// "use client";

// import { useEffect, useRef } from "react";
// import HeaderMinimal from "./HeaderMinimal"; 



// // Alternative with image sources


// export default function HeroMain() {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const v = videoRef.current;
//     if (!v) return;

//     // Try to force autoplay (some browsers block, but this helps)
//     const playPromise = v.play();
//     if (playPromise !== undefined) {
//       playPromise.catch(() => {});
//     }
//   }, []);

//   return (
//     <div className="relative min-h-screen bg-black text-white overflow-hidden"> 
//       {/* Header (two items only) */}
//       <HeaderMinimal />

//       {/* Center content */}
//       <main className="relative z-10 flex flex-col min-h-screen">
//         {/* Shiny video area */}
//         <section className="flex-1 flex items-center justify-center pt-20 pb-24">
//   <div className="w-full max-w-7xl px-4 lg:px-8">
//     <div className="group grid grid-cols-1 
//       md:grid-cols-[minmax(0,0.65fr)_minmax(0,1.9fr)_minmax(0,0.65fr)]
//       gap-3 lg:gap-4 items-stretch">

//       {/* LEFT IMAGE – hidden on small screens */}
//       <div className="hidden md:block">
//         <div className="relative h-full w-full rounded-[1.8rem] overflow-hidden 
//           bg-white/5 border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.9)]
//           transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]
//           group-hover:-translate-y-1">

//           {/* decorative lines */}
//           <div className="absolute inset-0 opacity-30 
//             bg-[repeating-linear-gradient(to_bottom,rgba(148,163,184,0.28)_0,rgba(148,163,184,0.28)_1px,transparent_1px,transparent_32px)]" />

//           <img
//             src="/side/sw.webp"       // ← replace with your left banner
//             alt="Technorian left visual"
//             className="relative z-10 h-full w-full object-cover mix-blend-screen"
//           />
//         </div>
//       </div>

//       {/* CENTER VIDEO */}
//       <div className="md:order-none order-first">
//         <div className="relative aspect-[16/6] rounded-[2.5rem] overflow-hidden 
//           border border-white/15 bg-black/80 shadow-[0_40px_160px_rgba(0,0,0,1)]
//           transition-transform duration-[1200ms] 
//           ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-1.5">

//           {/* Glow */}
//           <div className="pointer-events-none absolute inset-0 
//             bg-[radial-gradient(circle_at_center,_rgba(148,163,184,0.4)_0,_transparent_55%)] opacity-40" />

//           <video
//             ref={videoRef}
//             src="/technorian.webm"
//             className="relative z-10 h-full w-full object-cover 
//             transition-transform duration-[1200ms] 
//             ease-[cubic-bezier(0.19,1,0.22,1)]
//             group-hover:scale-[1.03]"
//             autoPlay
//             muted
//             loop
//             playsInline
//             controls={false}
//             disablePictureInPicture
//             controlsList="nodownload noplaybackrate noremoteplayback nofullscreen"
//           />
//         </div>
//       </div>

//       {/* RIGHT IMAGE – hidden on small screens */}
//       <div className="hidden md:block">
//         <div className="relative h-full w-full rounded-[1.8rem] overflow-hidden 
//           bg-white/5 border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.9)]
//           transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]
//           group-hover:-translate-y-1">

//           <div className="absolute inset-0 opacity-50 
//             bg-[radial-gradient(circle_at_top,_rgba(244,244,245,0.18)_0,transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.9)_0,transparent_60%)]" />

//           <img
//             src="/side/hw3.jpeg"       // ← replace with your right banner
//             alt="Technorian right visual"
//             className="relative z-10 h-full w-full object-cover mix-blend-screen"
//           />
//         </div>
//       </div>
//     </div>
//   </div>
// </section>


      
    
//       </main>
//     </div>
//   );
// }















// "use client";

// import { useEffect, useRef } from "react";
// import HeaderMinimal from "./HeaderMinimal"; 
// import Image from "next/image";

// export default function HeroMain() {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const v = videoRef.current;
//     if (!v) return;

//     const playPromise = v.play();
//     if (playPromise !== undefined) {
//       playPromise.catch(() => {});
//     }
//   }, []);

//   return (
//     <div className="relative min-h-screen bg-black text-white overflow-hidden">
//       <HeaderMinimal />

//       <main className="relative z-10 flex flex-col min-h-screen">
//         <section className="flex-1 flex items-center justify-center pt-20 pb-24">
//           <div className="w-full max-w-7xl px-4 lg:px-8">
//             {/* Mobile Layout - Stacked vertically */}
//             <div className="md:hidden flex flex-col gap-6 items-center">
//               {/* Center Video - Top on mobile */}
//               <div className="w-full max-w-2xl">
//                 <div className="relative aspect-[16/9] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden 
//                   border border-white/15 bg-black/80 shadow-[0_20px_80px_rgba(0,0,0,0.8)]
//                   transition-transform duration-[1200ms] ease-[cubic-bezier(0.19,1,0.22,1)] hover:-translate-y-1.5">

//                   <div className="pointer-events-none absolute inset-0 
//                     bg-[radial-gradient(circle_at_center,_rgba(148,163,184,0.4)_0,_transparent_55%)] opacity-40" />

//                   <video
//                     ref={videoRef}
//                     src="/technorian.webm"
//                     className="relative z-10 h-full w-full object-cover 
//                     transition-transform duration-[1200ms] 
//                     ease-[cubic-bezier(0.19,1,0.22,1)]
//                     hover:scale-[1.03]"
//                     autoPlay
//                     muted
//                     loop
//                     playsInline
//                     controls={false}
//                     disablePictureInPicture
//                     controlsList="nodownload noplaybackrate noremoteplayback nofullscreen"
//                   />
//                 </div>
//               </div>

//               {/* Side Images - Stacked below on mobile */}
//               <div className="w-full max-w-2xl grid grid-cols-2 gap-4">
//                 {/* Left Image */}
//                 <div className="relative aspect-[3/4] rounded-[1.5rem] overflow-hidden 
//                   bg-white/5 border border-white/10 shadow-[0_15px_60px_rgba(0,0,0,0.8)]
//                   transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]
//                   hover:-translate-y-1">

//                   <div className="absolute inset-0 opacity-30 
//                     bg-[repeating-linear-gradient(to_bottom,rgba(148,163,184,0.28)_0,rgba(148,163,184,0.28)_1px,transparent_1px,transparent_32px)]" />

//                   <img
//                     src="/side/sw.webp"
//                     alt="Technorian left visual"
//                     className="relative z-10 h-full w-full object-contain p-2 mix-blend-screen"
//                   />
//                 </div>

//                 {/* Right Image */}
//                 <div className="relative aspect-[3/4] rounded-[1.5rem] overflow-hidden 
//                   bg-white/5 border border-white/10 shadow-[0_15px_60px_rgba(0,0,0,0.8)]
//                   transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]
//                   hover:-translate-y-1">

//                   <div className="absolute inset-0 opacity-50 
//                     bg-[radial-gradient(circle_at_top,_rgba(244,244,245,0.18)_0,transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.9)_0,transparent_60%)]" />

//                   <img
//                     src="/side/hw3.jpeg"
//                     alt="Technorian right visual"
//                     className="relative z-10 h-full w-full object-contain p-2 mix-blend-screen"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Desktop Layout - Original with enhancements */}
//             <div className="hidden md:block group">
//               <div className="grid grid-cols-[minmax(0,0.65fr)_minmax(0,1.9fr)_minmax(0,0.65fr)]
//                 gap-4 lg:gap-6 xl:gap-8 items-start"> {/* Changed to items-start for vertical alignment */}

//                 {/* LEFT IMAGE */}
//                 <div className="flex flex-col justify-center h-full min-h-[400px]">
//                   <div className="relative h-full max-h-[500px] w-full rounded-[1.8rem] overflow-hidden 
//                     bg-white/5 border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.9)]
//                     transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]
//                     group-hover:-translate-y-1">

//                     <div className="absolute inset-0 opacity-30 
//                       bg-[repeating-linear-gradient(to_bottom,rgba(148,163,184,0.28)_0,rgba(148,163,184,0.28)_1px,transparent_1px,transparent_32px)]" />

//                     <img
//                       src="/side/sw.webp"
//                       alt="Technorian left visual"
//                       className="relative z-10 h-full w-full object-contain p-4 mix-blend-screen"
//                     />
//                   </div>
//                 </div>

//                 {/* CENTER VIDEO - Positioned higher */}
//                 <div className="transform translate-y-[-5%]"> {/* This lifts the center card */}
//                   <div className="relative aspect-[16/9] rounded-[2.5rem] overflow-hidden 
//                     border border-white/15 bg-black/80 shadow-[0_40px_160px_rgba(0,0,0,1)]
//                     transition-transform duration-[1200ms] 
//                     ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-1.5">

//                     <div className="pointer-events-none absolute inset-0 
//                       bg-[radial-gradient(circle_at_center,_rgba(148,163,184,0.4)_0,_transparent_55%)] opacity-40" />

//                     <video
//                       ref={videoRef}
//                       src="/technorian.webm"
//                       className="relative z-10 h-full w-full object-cover 
//                       transition-transform duration-[1200ms] 
//                       ease-[cubic-bezier(0.19,1,0.22,1)]
//                       group-hover:scale-[1.03]"
//                       autoPlay
//                       muted
//                       loop
//                       playsInline
//                       controls={false}
//                       disablePictureInPicture
//                       controlsList="nodownload noplaybackrate noremoteplayback nofullscreen"
//                     />
//                   </div>
//                 </div>

//                 {/* RIGHT IMAGE */}
//                 <div className="flex flex-col justify-center h-full min-h-[400px]">
//                   <div className="relative h-full max-h-[500px] w-full rounded-[1.8rem] overflow-hidden 
//                     bg-white/5 border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.9)]
//                     transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]
//                     group-hover:-translate-y-1">

//                     <div className="absolute inset-0 opacity-50 
//                       bg-[radial-gradient(circle_at_top,_rgba(244,244,245,0.18)_0,transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.9)_0,transparent_60%)]" />

//                     <img
//                       src="/side/hw3.jpeg"
//                       alt="Technorian right visual"
//                       className="relative z-10 h-full w-full object-cover  mix-blend-screen"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// } 
























"use client";

import { useEffect, useRef } from "react";
import HeaderMinimal from "./HeaderMinimal";
import Image from "next/image";

export default function HeroMain() {
  // Plain JS ref (no TS generics in .jsx)
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const playPromise = v.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <HeaderMinimal />

      <main className="relative z-10 flex flex-col min-h-screen">
        <section className="flex-1 flex items-center justify-center pt-20 pb-24">
          <div className="w-full max-w-7xl px-4 lg:px-8">
            {/* Mobile Layout - Stacked vertically */}
            <div className="md:hidden flex flex-col gap-6 items-center">
              {/* Center Video - Top on mobile */}
              <div className="w-full max-w-2xl">
                <div
                  className="relative aspect-[16/9] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden 
                  border border-white/15 bg-black/80 shadow-[0_20px_80px_rgba(0,0,0,0.8)]
                  transition-transform duration-[1200ms] ease-[cubic-bezier(0.19,1,0.22,1)] hover:-translate-y-1.5"
                >
                  <div
                    className="pointer-events-none absolute inset-0 
                    bg-[radial-gradient(circle_at_center,_rgba(148,163,184,0.4)_0,_transparent_55%)] opacity-40"
                  />

                  <video
                    ref={videoRef}
                    className="relative z-10 h-full w-full object-cover 
                    transition-transform duration-[1200ms] 
                    ease-[cubic-bezier(0.19,1,0.22,1)]
                    hover:scale-[1.03]"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                    disablePictureInPicture
                    controlsList="nodownload noplaybackrate noremoteplayback nofullscreen"
                    preload="metadata"
                  >
                    <source src="/technorian.webm" type="video/webm" />
                    <source src="/technorian.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>

              {/* Side Images - Stacked below on mobile */}
              <div className="w-full max-w-2xl grid grid-cols-2 gap-4">
                {/* Left Image */}
                <div
                  className="relative aspect-[3/4] rounded-[1.5rem] overflow-hidden 
                  bg-white/5 border border-white/10 shadow-[0_15px_60px_rgba(0,0,0,0.8)]
                  transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]
                  hover:-translate-y-1"
                >
                  <div
                    className="absolute inset-0 opacity-30 
                    bg-[repeating-linear-gradient(to_bottom,rgba(148,163,184,0.28)_0,rgba(148,163,184,0.28)_1px,transparent_1px,transparent_32px)]"
                  />

                  <Image
                    src="/side/sw.webp"
                    alt="Technorian left visual"
                    fill
                    className="relative z-10 object-contain p-2 mix-blend-screen"
                    sizes="(max-width: 768px) 50vw, 33vw"
                    priority
                  />
                </div>

                {/* Right Image */}
                <div
                  className="relative aspect-[3/4] rounded-[1.5rem] overflow-hidden 
                  bg-white/5 border border-white/10 shadow-[0_15px_60px_rgba(0,0,0,0.8)]
                  transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]
                  hover:-translate-y-1"
                >
                  <div
                    className="absolute inset-0 opacity-50 
                    bg-[radial-gradient(circle_at_top,_rgba(244,244,245,0.18)_0,transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.9)_0,transparent_60%)]"
                  />

                  <Image
                    src="/side/hw3.jpeg"
                    alt="Technorian right visual"
                    fill
                    className="relative z-10 object-contain p-2 mix-blend-screen"
                    sizes="(max-width: 768px) 50vw, 33vw"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Desktop Layout - Original with enhancements */}
            <div className="hidden md:block group">
              <div
                className="grid grid-cols-[minmax(0,0.65fr)_minmax(0,1.9fr)_minmax(0,0.65fr)]
                gap-4 lg:gap-6 xl:gap-8 items-start"
              >
                {/* LEFT IMAGE */}
                <div className="flex flex-col justify-center h-full min-h-[400px]">
                  <div
                    className="relative h-full max-h-[500px] w-full rounded-[1.8rem] overflow-hidden 
                    bg-white/5 border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.9)]
                    transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]
                    group-hover:-translate-y-1"
                  >
                    <div
                      className="absolute inset-0 opacity-30 
                      bg-[repeating-linear-gradient(to_bottom,rgba(148,163,184,0.28)_0,rgba(148,163,184,0.28)_1px,transparent_1px,transparent_32px)]"
                    />

                    <Image
                      src="/side/sw.webp"
                      alt="Technorian left visual"
                      fill
                      className="relative z-10 object-contain p-4 mix-blend-screen"
                      sizes="33vw"
                      priority
                    />
                  </div>
                </div>

                {/* CENTER VIDEO */}
                <div className="transform translate-y-[-5%]">
                  <div
                    className="relative aspect-[16/9] rounded-[2.5rem] overflow-hidden 
                    border border-white/15 bg-black/80 shadow-[0_40px_160px_rgba(0,0,0,1)]
                    transition-transform duration-[1200ms] 
                    ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-1.5"
                  >
                    <div
                      className="pointer-events-none absolute inset-0 
                      bg-[radial-gradient(circle_at_center,_rgba(148,163,184,0.4)_0,_transparent_55%)] opacity-40"
                    />

                    <video
                      ref={videoRef}
                      className="relative z-10 h-full w-full object-cover 
                      transition-transform duration-[1200ms] 
                      ease-[cubic-bezier(0.19,1,0.22,1)]
                      group-hover:scale-[1.03]"
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls={false}
                      disablePictureInPicture
                      controlsList="nodownload noplaybackrate noremoteplayback nofullscreen"
                      preload="metadata"
                    >
                      <source src="/technorian.webm" type="video/webm" />
                      <source src="/technorian.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="flex flex-col justify-center h-full min-h-[400px]">
                  <div
                    className="relative h-full max-h-[500px] w-full rounded-[1.8rem] overflow-hidden 
                    bg-white/5 border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.9)]
                    transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]
                    group-hover:-translate-y-1"
                  >
                    <div
                      className="absolute inset-0 opacity-50 
                      bg-[radial-gradient(circle_at_top,_rgba(244,244,245,0.18)_0,transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.9)_0,transparent_60%)]"
                    />

                    <Image
                      src="/side/hw3.jpeg"
                      alt="Technorian right visual"
                      fill
                      className="relative z-10 object-cover mix-blend-screen"
                      sizes="33vw"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
