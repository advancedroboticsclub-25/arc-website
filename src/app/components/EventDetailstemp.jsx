"use client";

import { useState } from "react";


const EVENT_DETAILS = [
  {
    id: "cozmo-clench",
    name: "COZMO CLENCH",
    tagline: "Manually Controlled Gripper Robot Challenge",
    description: "The competition offers students an opportunity to design and build their own gripper robots capable of navigating obstacle-filled paths and accurately placing objects into designated target zones. Teams build manually controlled bots (wired or wireless) equipped with gripping mechanisms to traverse obstacles, pick up objects, and deposit them in target zones with minimum time. It serves as a platform to encourage teamwork, innovation, and practical application of engineering skills.",
    highlights: [
      "Manually controlled gripper bot competition (wired or wireless)",
      "Navigate obstacle-filled arena with precision",
      "Pick up designated objects and place in target zones",
      "Speed, accuracy, and smooth control are key factors",
      "Zonal qualifiers followed by Grand Finale at IIT Bombay Techfest 2025-26",
      "Top 2 teams from each zone advance to finals",
      "Tests mechanical design, control precision, and strategic operation",
      "Must score above minimum cut-off to qualify for finals"
    ],
    rules: [
      "Register online through official ARC form",
      "Team ID provided upon registration for all correspondence",
      "Additional registration via Advanced Robotic Club form required",
      "Bot must be manually controlled (wired or wireless control allowed)",
      "Must navigate obstacles and place objects in target zones",
      "Performance judged on time, accuracy, and control smoothness",
      "Top 2 teams per zonal qualifier advance to Grand Finale",
      "Teams must score above minimum cut-off mark to advance",
      "Grand Finale held during IIT Bombay Techfest 2025-26",
      "Decision of organizers and judges is final and binding",
      "ARC not responsible for late, lost, or misdirected entries",
      "Latest information on official ARC website",
      "Check ARC email regularly for updates (including spam folder)"
    ],
    teamSize: "Team-based (size TBD)",
    rulebook: "/rulebook/CozmoClench.pdf",
  },
  {
    id: "meshmerize",
    name: "MESH-MERIZE",
    tagline: "Line-Following Maze Navigation Robot",
    description: "Meshmerize is a robotics competition where teams design and build a line-following robot capable of navigating a maze-based track. The bot must first complete a Dry Run to analyze and learn the path layout. In the Final Run, it utilizes the acquired data to traverse the maze efficiently and reach the endpoint in the shortest possible time, integrating automation, path optimization, and sensor-based control.",
    highlights: [
      "Team size: Maximum 4 members per team",
      "Autonomous line-following robot competition",
      "Two-stage competition: Dry Run and Final Run",
      "Dry run to analyze maze and record optimal path",
      "Final run: Navigate using learned path in minimum time",
      "Uses line sensors, microcontrollers (Arduino), and robotics components",
      "Top 2 teams from each zonal qualifier advance to Grand Finale at IIT Bombay",
      "Zonal qualifiers followed by Techfest 2025-26 Grand Finale"
    ],
    rules: [
      "Maximum 4 members per team from same institution (unless permitted)",
      "Register online through official Techfest website",
      "Team ID provided upon registration for all correspondence",
      "Additional registration via Advanced Robotic Club form required",
      "Robot must strictly follow design, dimension, and component specifications",
      "Dry Run: Analyze maze and record optimal path",
      "Final Run: Use learned path to complete maze in shortest time",
      "Judging based on: completion time, path accuracy, movement smoothness, logic & optimization",
      "Teams scoring above cut-off mark advance to finals",
      "Top 2 teams per zonal qualifier advance to Grand Finale",
      "Decision of judges and organizers is final and binding",
      "Techfest IIT Bombay not responsible for late/lost entries or technical failures",
      "Check Techfest email regularly for updates (including spam folder)",
      "Latest information on official Techfest website"
    ],
    teamSize: "Maximum 4 members",
    rulebook: "/rulebook/Meshmerize.pdf",
  },
  {
    id: "codecode",
    name: "CODE CODE",
    tagline: "Competitive Programming & Problem-Solving Challenge",
    description: "Code Code is a competitive programming event where participants use their coding skills to solve real-world and analytical problems within a given time frame. The challenge tests logic, efficiency, and problem-solving abilities across various programming languages. Teams tackle complex mathematical, logical, and algorithmic problems that require computational solutions and optimized code.",
    highlights: [
      "Duration: 3 hours of intensive coding",
      "Team-based competition with collaborative problem-solving",
      "All students with valid institutional ID cards eligible",
      "Complex mathematical puzzles and numerical problems",
      "Statistical analysis, physics simulations, and real-life scenarios",
      "Algorithmic and logical problem-solving tasks",
      "Languages: C, C++, Java, Python",
      "Offline compilers required - no internet access"
    ],
    rules: [
      "Register online through official ARC website",
      "Team ID issued upon registration for all correspondence",
      "Additional registration via Advanced Robotic Club form required",
      "Participants must bring their own fully charged laptops",
      "Teams responsible for their own devices and equipment",
      "Offline compilers must be pre-installed - online compilers strictly prohibited",
      "Internet usage is strictly prohibited during competition",
      "Mobile phones not allowed during competition",
      "Solutions evaluated on accuracy, efficiency, and code correctness",
      "Tiebreaker questions available in case of equal scores",
      "Use of unauthorized tools leads to immediate disqualification",
      "Organizers may modify rules - updates via website and email",
      "Decision of judges and organizers is final and binding",
      "ARC not responsible for late, lost, or misdirected entries",
      "Check ARC email regularly for updates (including spam folder)"
    ],
    teamSize: "Team-based (size TBD)",
    rulebook: "/rulebook/CodeCode.pdf",
  },
  {
    id: "techfest-olympiad",
    name: "TECHFEST OLYMPIAD",
    tagline: "Gripper Robot Navigation Challenge",
    description: "Design and build your own gripper robot capable of navigating obstacle-filled paths and accurately placing objects into designated target zones. This competition serves as a platform to encourage teamwork, innovation, and the practical application of engineering and problem-solving skills. Open exclusively to students from Standard 8th, 9th, and 10th.",
    highlights: [
      "Exclusively for students from Standard 8th, 9th, and 10th",
      "Design and build gripper robots from scratch",
      "Navigate obstacle-filled paths autonomously",
      "Precise object placement in target zones",
      "Zonal qualifiers followed by Grand Finale at IIT Bombay Techfest",
      "Top 2 teams from each zone advance to finals",
      "Team-based engineering challenge"
    ],
    rules: [
      "Only students from Standard 8th, 9th, and 10th are eligible",
      "College or higher secondary students are NOT eligible",
      "Team must register online through official ARC form",
      "Team ID will be provided upon registration for all correspondence",
      "Additional registration required via ARC online form",
      "Teams must score above minimum cut-off to advance to finals",
      "Top 2 teams from each zonal qualifier advance to Grand Finale",
      "Grand Finale held during IIT Bombay Techfest 2025-26",
      "Decision of organizers and judges is final and binding",
      "ARC not responsible for late, lost, or misdirected entries",
      "Check ARC email regularly for updates (including spam folder)",
      "Latest information available on official ARC website"
    ],
    teamSize: "Team-based (size TBD)",
    rulebook: "/rulebook/TechfestOlympiad.pdf",
  }
];



export default function EventDetails() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showRulebook, setShowRulebook] = useState(false);

  const openEvent = (event) => {
    setSelectedEvent(event);
    document.body.style.overflow = 'hidden';
  };

  const closeEvent = () => {
    setSelectedEvent(null);
    setShowRulebook(false);
    document.body.style.overflow = 'unset';
  };

  const openRulebook = () => {
    setShowRulebook(true);
  };

  return (
    <>
      {/* Event Detail Modal */}
      {selectedEvent && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={closeEvent}
        >
          <div 
            className="relative w-full max-w-5xl bg-zinc-900 rounded-2xl shadow-2xl border border-white/10 my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-black/80 border-b border-white/10 p-6 sticky top-0 z-10 rounded-t-2xl">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/60 mb-2">Event Details</p>
                  <p className="text-3xl font-bold text-white mb-2">{selectedEvent.name}</p>
                  <p className="text-white/70 text-lg">{selectedEvent.tagline}</p>
                </div>
                <div className="flex items-center gap-3">
                  {selectedEvent.rulebook && (
                    <button
                      onClick={openRulebook}
                      className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm rounded-lg transition-colors border border-white/20"
                    >
                      View Rulebook
                    </button>
                  )}
                  <button
                    onClick={closeEvent}
                    className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-8 max-h-[70vh] overflow-y-auto">
              {/* Description */}
              <div>
                <h3 className="text-sm uppercase tracking-widest text-white/60 mb-3">About</h3>
                <p className="text-white/80 text-base leading-relaxed">{selectedEvent.description}</p>
              </div>

              {/* Team Size */}
              <div>
                <h3 className="text-sm uppercase tracking-widest text-white/60 mb-3">Team Size</h3>
                <p className="text-white text-lg font-semibold">{selectedEvent.teamSize}</p>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="text-sm uppercase tracking-widest text-white/60 mb-4">Event Highlights</h3>
                <div className="grid gap-3">
                  {selectedEvent.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white/5 p-4 rounded-lg border border-white/10">
                      <svg className="w-5 h-5 text-white/60 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/80">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sub Events if any */}
              {selectedEvent.subEvents && (
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-white/60 mb-4">Included Events</h3>
                  <div className="grid gap-4">
                    {selectedEvent.subEvents.map((subEvent, idx) => (
                      <div key={idx} className="bg-white/5 p-5 rounded-lg border border-white/10">
                        <h4 className="text-xl font-semibold text-white mb-2">{subEvent.name}</h4>
                        <p className="text-white/70">{subEvent.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Rules */}
              <div>
                <h3 className="text-sm uppercase tracking-widest text-white/60 mb-4">Rules & Regulations</h3>
                <div className="space-y-2">
                  {selectedEvent.rules.map((rule, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-white/70">
                      <span className="text-white/60 font-bold flex-shrink-0">{idx + 1}.</span>
                      <span>{rule}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Rulebook Modal */}
      {showRulebook && selectedEvent?.rulebook && (
        <div 
          className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowRulebook(false)}
        >
          <div 
            className="relative w-full h-full max-w-7xl max-h-[95vh] bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-black/80 border-b border-white/10 p-4 flex justify-between items-center">
              <div className="text-white">
                <p className="text-xs uppercase tracking-widest text-white/60">Rulebook</p>
                <p className="text-lg font-semibold">{selectedEvent.name}</p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={selectedEvent.rulebook}
                  download
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm rounded-lg transition-colors border border-white/20 flex items-center gap-2"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download
                </a>
                <button
                  onClick={() => setShowRulebook(false)}
                  className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="w-full h-[calc(100%-5rem)]">
              <iframe
                src={`${selectedEvent.rulebook}#toolbar=0&navpanes=0&scrollbar=1`}
                className="w-full h-full"
                title={`${selectedEvent.name} Rulebook`}
              />
            </div>
          </div>
        </div>
      )}

      {/* Main Section */}
      <section className="bg-black text-white py-24 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          {/* <header className="mb-16 text-center">
            <p className="text-[0.7rem] sm:text-xs uppercase tracking-[0.35em]  text-blue-400/80 mb-3">
              Technorion 5.0 · Event Information
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl  mb-4 font-medium">
              Complete Event Guide
            </h2>
            <p className="text-white/60 text-base sm:text-lg max-w-3xl mx-auto">
              Everything you need to know about competitions, rules, and participation
            </p>
          </header> */}

          {/* Registration Information */}
          {/* <div className="mb-20 bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
              <svg className="w-8 h-8 text-white/60" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
              </svg>
              Registration Information
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">General Guidelines</h4>
                <ul className="space-y-3">
                  {REGISTRATION_INFO.general.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-white/70 text-sm">
                      <span className="text-white/60 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Requirements</h4>
                <ul className="space-y-3">
                  {REGISTRATION_INFO.requirements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-white/70 text-sm">
                      <span className="text-white/60 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div> */} 

        

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {EVENT_DETAILS.map((event) => (
              <div
                key={event.id}
                className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                onClick={() => openEvent(event)}
              >
                {/* Event Name */}
                <h3 className="text-2xl font-bold text-white mb-2 transition-colors">
                  {event.name}
                </h3>
                
                {/* Tagline */}
                <p className="text-white/60 text-sm mb-4 font-medium">{event.tagline}</p>
                
                {/* Brief Description */}
                <p className="text-white/60 text-sm mb-6 line-clamp-3">
                  {event.description}
                </p>

                {/* Quick Info */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Team Size</p>
                    <p className="text-white font-semibold">{event.teamSize}</p>
                  </div>
                  {event.subEvents && (
                    <div className="text-right">
                      <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Sub Events</p>
                      <p className="text-white font-semibold">{event.subEvents.length}</p>
                    </div>
                  )}
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                    View Full Details
                  </span>
                  <svg
                    className="w-5 h-5 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>

                {/* Hover gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
