"use client";

import { motion } from "framer-motion";
import React from 'react'; 


const TIMELINE_DATA = [
  {
    step: '01',
    title: 'Register on Techfest',
    role: 'INITIAL REGISTRATION',
    description: 'Create your team account on the official Techfest platform. Visit techfest.org/competitions to begin your journey toward Asia\'s largest science and technology festival.',
    accent: 'border-blue-500',
    delay: 0.2,
    icon: '🌐',
  },
  {
    step: '02',
    title: 'Register on Technorion Nepal',
    role: 'ZONAL REGISTRATION',
    description: 'Complete the dedicated registration form for Technorion Nepal. This confirms your participation in the Nepal zonal round and secures your spot in the competition.',
    accent: 'border-green-500',
    delay: 0.4,
    icon: '📝',
  },
  {
    step: '03',
    title: 'Compete at Technorion 5.0',
    role: 'COMPETITION DAY',
    description: 'Participate in exciting challenges including Cozmo Clench, Meshmerize, CoDecode, and Techfest Olympiad on December 12th, 2025. Showcase your skills in robotics, programming, and scientific reasoning.',
    accent: 'border-yellow-500',
    delay: 0.6,
    icon: '🏆',
  },
  {
    step: '04',
    title: 'Win & Qualify for IIT Bombay',
    role: 'GRAND FINALE',
    description: 'Secure a top position to win awards and qualify directly for the Techfest Grand Finale at IIT Bombay (December 22-24, 2025). Represent Nepal on the international stage.',
    accent: 'border-red-500',
    delay: 0.8,
    icon: '🎯',
  },
];

// --- COMPONENT ---

export default function AboutTimeline() {
  return (
    <section className="bg-black text-white py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - Staggered Fade */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="mb-16 lg:mb-24 text-center max-w-4xl mx-auto"
        >
          <p className="text-sm uppercase tracking-[0.3em] font-mono text-blue-400/80 mb-3">
            YOUR JOURNEY
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-md mb-6">
            Path to IIT Bombay
          </h2>
          <p className="text-white/70 text-base max-w-3xl mx-auto font-light">
            Follow these four essential steps from registration to representing Nepal at Asia's largest tech festival.
          </p>
        </motion.div>

        {/* --- Main Timeline Structure --- */}
        <div className="relative">
          
          {/* Vertical Spine */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0 transform -translate-x-1/2 hidden lg:block" />

          {TIMELINE_DATA.map((item, index) => {
            // Determine alignment classes
            const isEven = index % 2 === 0;
            const alignmentClass = isEven ? 'lg:justify-start' : 'lg:justify-end';
            const paddingClass = isEven ? 'lg:pr-16' : 'lg:pl-16 lg:text-right';
            const dotPositionClass = isEven ? 'lg:right-[-9px]' : 'lg:left-[-9px]';
            const textAccentClass = item.accent.replace('border', 'text');
            
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: item.delay, ease: [0.19, 1, 0.22, 1] }}
                
                /* Combined dynamic and static classes */
                className={`flex flex-col lg:flex-row mb-20 lg:mb-32 w-full ${alignmentClass}`}
              >
                <div 
                  className={`w-full lg:w-1/2 px-4 lg:px-0 relative ${paddingClass}`}
                >
                  
                  {/* Timeline Dot (Desktop only) */}
                  <div 
                    className={`absolute top-0 w-5 h-5 rounded-full bg-blue-500 border-4 border-black z-10 hidden lg:block ${dotPositionClass}`}
                  />

                  {/* Content Card */}
                  <div 
                    className={`bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 
                                hover:border-blue-400/50 transition-all duration-500
                                shadow-lg shadow-black/30 backdrop-blur-sm`}
                  >
                    
                    {/* Step & Role */}
                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{item.icon}</span>
                        <p className={`text-4xl sm:text-5xl font-extrabold ${textAccentClass} opacity-90`}>
                          {item.step}
                        </p>
                      </div>
                      <p className="text-xs uppercase tracking-widest text-white/60">
                        {item.role}
                      </p>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* --- End of Timeline Statement --- */}
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.19, 1, 0.22, 1] }}
            className="text-center mt-20"
        >
          <p className="text-white/70 text-base max-w-md mx-auto">
            Begin your journey today and take the first step toward competing at IIT Bombay's Techfest Grand Finale.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
