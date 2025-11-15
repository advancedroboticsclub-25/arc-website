// components/DataTerminalStats.jsx
"use client";

import React, { useState, useEffect, useRef } from "react";

// ---------- 1. Count-up hook (robust, no weird negatives) ----------
const useCountUp = (endValue, duration = 2500, shouldAnimate = false) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!shouldAnimate || isNaN(endValue) || endValue <= 0) {
      setValue(0);
      return;
    }

    let frameId;
    const start = performance.now();

    const animate = (now) => {
      const elapsed = now - start;
      const rawProgress = elapsed / duration;
      const clamped = Math.min(Math.max(rawProgress, 0), 1);

      // ease-out cubic
      const eased = 1 - Math.pow(1 - clamped, 3);

      const current = Math.round(endValue * eased);
      setValue(current);

      if (clamped < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [endValue, duration, shouldAnimate]);

  return value;
};

// ---------- 2. Static data ----------
const monospaceFont = "font-mono tracking-tight";
const terminalColor = "text-[#00FF00]";

const rawStatsData = [
  {
    index: "[00-01]",
    numericValue: 32,
    suffix: "+",
    subText: "EVENT MODULES",
    description: "FROM ROBO WARS TO CODE RUSH, BUILT TO STRESS EVERY SYSTEM.",
  },
  {
    index: "[00-02]",
    numericValue: 480,
    suffix: "+",
    subText: "EXPECTED PARTICIPANTS",
    description: "STUDENTS, BUILDERS AND TINKERERS ACROSS HARDWARE & SOFTWARE.",
  },
  {
    index: "[00-03]",
    numericValue: 72,
    suffix: " hrs",
    subText: "OF CONTROLLED CHAOS",
    description: "NON-STOP HACKING, BOT BATTLES AND LIVE EXPERIMENTS ON CAMPUS.",
  },
];

// ---------- 3. Main section ----------
const DataTerminalStats = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
          setHasAnimated(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-6xl mx-auto divide-y divide-white/10">
        {rawStatsData.map((stat, index) => (
          <StatItem
            key={index}
            stat={stat}
            shouldAnimate={hasAnimated}
          />
        ))}
      </div>
    </section>
  );
};

// ---------- 4. Individual stat row ----------
const StatItem = ({ stat, shouldAnimate }) => {
  const animatedCount = useCountUp(stat.numericValue, 2200, shouldAnimate);

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 py-8 md:py-10 lg:py-12">
      {/* Index */}
      <div className={`w-full md:w-2/12 lg:w-1/12 ${monospaceFont}`}>
        <span className={`text-xs sm:text-sm opacity-70 ${terminalColor}`}>
          {stat.index}
        </span>
      </div>

      {/* Big number */}
      <div className="w-full md:w-4/12 lg:w-3/12">
        <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl  leading-none">
          {animatedCount}
          {stat.suffix}
        </span>
      </div>

      {/* Copy */}
      <div className="w-full md:w-6/12 lg:w-8/12 flex flex-col md:flex-row gap-4 md:gap-6">
        <div className="w-full md:w-4/12">
          <p
            className={`text-[0.7rem] sm:text-xs md:text-sm font-light ${monospaceFont} opacity-70`}
          >
            {stat.subText}
          </p>
        </div>
        <div className="w-full md:w-8/12">
          <p className="text-base sm:text-lg lg:text-xl font-normal tracking-wide leading-snug">
            {stat.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DataTerminalStats;
