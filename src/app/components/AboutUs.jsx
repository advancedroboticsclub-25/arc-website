"use client";

import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="bg-black text-white py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <p className="text-[0.7rem] sm:text-xs uppercase tracking-[0.35em] text-white/45 mb-4 text-center">
            About
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
            Technorion Nepal
          </h2>
          <p className="text-white/60 text-center text-sm sm:text-base max-w-3xl mx-auto">
            Asia's Largest Science & Technology Festival — Nepal Edition
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Left Column - Technorion Nepal */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="border-l-2 border-white/20 pl-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">
                What is Technorion Nepal?
              </h3>
              <div className="space-y-4 text-white/70 text-sm sm:text-base leading-relaxed">
                <p>
                  Technorion Nepal is the official Nepal zonal round of <span className="text-white font-semibold">Techfest, IIT Bombay</span> — Asia's largest science and technology festival. Organized annually by the <span className="text-white font-semibold">Advanced Robotics Club (ARC)</span> at ACEM, Kathmandu, it provides a platform for Nepali students to compete at an international level.
                </p>
                <p>
                  Since 2019, four successful editions have attracted enthusiastic participation from colleges and schools nationwide, strengthening Nepal's representation in global STEM challenges.
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-1 w-12 bg-gradient-to-r from-white to-white/30 rounded-full" />
                <h4 className="text-lg sm:text-xl font-bold text-white">Edition 5.0</h4>
              </div>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-4">
                Scheduled for <span className="text-white font-semibold">December 12th, 2025</span>, featuring Cozmo Clench, Meshmerize, CoDecode, and Techfest Olympiad — challenging participants in robotics, programming, and scientific reasoning.
              </p>
            </div>

            <div className="space-y-4 text-white/70 text-sm sm:text-base leading-relaxed">
              <p>
                <span className="text-white font-semibold">Winners qualify directly for the Techfest Grand Finale</span> at IIT Bombay (December 22-24, 2025), serving as a bridge between Nepal's young innovators and the international stage.
              </p>
            </div>
          </motion.div>

          {/* Right Column - About ARC */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="border-l-2 border-white/20 pl-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">
                About Advanced Robotics Club
              </h3>
              <div className="space-y-4 text-white/70 text-sm sm:text-base leading-relaxed">
                <p>
                  <span className="text-white font-semibold">Advanced Robotics Club (ARC)</span>, established in <span className="text-white font-semibold">2012</span> at ACEM, provides a platform for engineering students to develop and implement innovative ideas. We've become home to robotics enthusiasts who have grown into the brightest minds in Nepal's engineering community.
                </p>
                <p>
                  Boasting numerous accolades from national and international competitions, ARC continues to grow as one of Nepal's premier student robotics clubs.
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
              <h4 className="text-lg sm:text-xl font-bold text-white mb-4">Our Activities</h4>
              <ul className="space-y-3 text-white/70 text-sm sm:text-base">
                <li className="flex items-start gap-3">
                  <span className="text-white/60 mt-1">•</span>
                  <span>Workshops on AVR, PCB design, and soldering</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white/60 mt-1">•</span>
                  <span>PythonBytes and Machine Learning sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white/60 mt-1">•</span>
                  <span>Web design and presentation workshops</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white/60 mt-1">•</span>
                  <span>Real-world robotics projects</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-6 h-6 text-white/60" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
                <h4 className="text-lg sm:text-xl font-bold text-white">Spotlight Project</h4>
              </div>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                <span className="text-white font-semibold">"Qarisma"</span> — our pamphlet-distributing robot using face recognition technology, featured on Nepal's top social media pages.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats/Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-12"
        >
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-white mb-2">5th</p>
            <p className="text-xs sm:text-sm text-white/60 uppercase tracking-wider">Edition</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-white mb-2">2012</p>
            <p className="text-xs sm:text-sm text-white/60 uppercase tracking-wider">ARC Founded</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-white mb-2">2019</p>
            <p className="text-xs sm:text-sm text-white/60 uppercase tracking-wider">First Edition</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-white mb-2">IIT</p>
            <p className="text-xs sm:text-sm text-white/60 uppercase tracking-wider">Bombay Partner</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
