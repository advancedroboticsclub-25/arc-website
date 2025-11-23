"use client";

import { useState } from "react";

const EVENT_DETAILS = [
  {
    id: "cozmo-clench",
    name: "COZMO CLENCH",
    tagline: "Manually Controlled Gripper Robot Challenge",
    description: "Design and build manually controlled gripper robots (wired or wireless) to navigate obstacle-filled arenas, pick up objects, and place them in target zones. Teams compete on speed, accuracy, and control precision.",
    highlights: [
      "Manually controlled gripper bot (wired or wireless)",
      "Navigate obstacles and place objects in target zones",
      "Judged on time, accuracy, and control smoothness",
      "Top 2 teams per zone advance to IIT Bombay Techfest Grand Finale"
    ],
    rules: [
      "Register online through official ARC form",
      "Bot must be manually controlled (wired or wireless)",
      "Must score above cut-off to advance to finals",
      "Grand Finale at IIT Bombay Techfest 2025-26",
      "Check ARC email regularly for updates"
    ],
    teamSize: "Team-based (size TBD)",
    rulebook: "/rulebook/CozmoClench.pdf",
    problemStatement: "https://techfest.org/media/compiProbStatement/Cozmoclench.pdf",
  },
  {
    id: "meshmerize",
    name: "MESH-MERIZE",
    tagline: "Line-Following Maze Navigation Robot",
    description: "Build an autonomous line-following robot that navigates maze-based tracks. Complete a Dry Run to analyze the path, then use that data in the Final Run to traverse the maze in minimum time.",
    highlights: [
      "Maximum 4 members per team",
      "Autonomous line-following robot with maze navigation",
      "Two stages: Dry Run (analyze) + Final Run (optimized navigation)",
      "Uses line sensors, Arduino, and robotics components",
      "Top 2 teams per zone advance to IIT Bombay Techfest Grand Finale"
    ],
    rules: [
      "Maximum 4 members per team from same institution",
      "Register via Techfest website and ARC form",
      "Robot must follow design and component specifications",
      "Dry Run: Analyze maze, Final Run: Complete in shortest time",
      "Judged on time, accuracy, smoothness, and optimization",
      "Top 2 teams per zone advance (above cut-off mark)"
    ],
    teamSize: "Maximum 4 members",
    rulebook: "/rulebook/Meshmerize.pdf",
    problemStatement: "https://techfest.org/media/compiProbStatement/Meshmerize_final.docx.pdf",
  },
  {
    id: "codecode",
    name: "CODE CODE",
    tagline: "Competitive Programming & Problem-Solving Challenge",
    description: "Team-based competitive programming event where you solve real-world mathematical, logical, and algorithmic problems in 3 hours. Test your coding efficiency and problem-solving skills.",
    highlights: [
      "3-hour coding competition",
      "Team-based collaborative problem-solving",
      "Mathematical puzzles, physics simulations, algorithms",
      "Languages: C, C++, Java, Python",
      "Offline only - no internet or online compilers"
    ],
    rules: [
      "Register via ARC website",
      "Bring your own fully charged laptop",
      "Offline compilers required - online compilers prohibited",
      "No internet or mobile phones allowed",
      "Judged on accuracy, efficiency, and correctness",
      "Tiebreaker questions available for equal scores"
    ],
    teamSize: "Team-based (size TBD)",
    rulebook: "/rulebook/CodeCode.pdf",
  },
  {
    id: "techfest-olympiad",
    name: "TECHFEST OLYMPIAD",
    tagline: "Nationwide Aptitude & Science Competition",
    description: "A platform for students to showcase their scientific aptitude and problem-solving skills through real-life challenges. Participants solve the maximum questions within limited time to compete among the nation's brightest young minds. Exclusively for students in Grades 8, 9, and 10.",
    highlights: [
      "Nationwide competition for Grades 8, 9, and 10 only",
      "Zonal and final rounds in science, math, and logical reasoning",
      "Quiz or written test format promoting analytical thinking",
      "Certificate of participation from IIT Bombay for all participants",
      "Cash prizes and certificates for winners"
    ],
    rules: [
      "Register online through official Techfest website and ARC form",
      "Only Standard 8th, 9th, and 10th students eligible",
      "Team ID issued upon registration for all communications",
      "Physical competition at IIT Bombay restricted due to age limits",
      "All participants receive IIT Bombay certificate of participation",
      "Cash prizes and certificates awarded to winners",
      "Judges' decisions are final and binding",
      "Check Techfest website and email regularly for updates"
    ],
    teamSize: "Individual or Team-based",
    rulebook: "/rulebook/TechfestOlympiad.pdf",
  }
];

const REGISTRATION_INFO = {
  generalAndRules: [
    "Must be enrolled in Bachelor's program or below",
    "Register online through official ARC/Techfest website",
    "Registrations NOT accepted after deadline",
    "Referee's decision is final",
    "Follow time limits and competition rules",
    "Cooperate with volunteers",
    "Rules subject to change - participants will be notified"
  ],
  privileges: [
    "Winners & runners-up of Cozmo Clench and Meshmerize compete at Techfest IIT Bombay 2025",
    "Winners of Code Code and Techfest Olympiad receive cash prizes from ARC and IIT certificates",
    "Certificate of participation for all participants from ARC",
    "Networking opportunity with talents from across the country",
    "Showcase your skills to students and professionals",
    "ARC covers food costs for the event day",
    "ARC covers accommodation (1N1D) for students from outside the valley",
    "Note: Travel fees NOT covered by ARC"
  ],
  requirements: [
    "Valid student ID or institutional proof required",
    "Participants must bring their own laptops for Code Code competition",
    "Offline compilers required for Code Code (no internet allowed)",
    "Team members from same institution (unless otherwise permitted)"
  ]
};

export default function EventDetailsG() {
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
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm md:flex items-center justify-center p-4 overflow-y-auto hidden"
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
                  {selectedEvent.problemStatement && (
                    <a
                      href={selectedEvent.problemStatement}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm rounded-lg transition-colors border border-white/20 flex items-center gap-2"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                        <polyline points="10 9 9 9 8 9" />
                      </svg>
                      Problem Statement
                    </a>
                  )}
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

      {/* Mobile Event Detail - Full Page */}
      {selectedEvent && (
        <div className="md:hidden fixed inset-0 z-50 bg-black overflow-y-auto">
          <div className="min-h-screen px-4 py-6">
            {/* Mobile Header */}
            <div className="sticky top-0 bg-black/95 backdrop-blur-sm z-10 pb-4 mb-6 border-b border-white/10">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <p className="text-[0.65rem] uppercase tracking-widest text-white/60 mb-2">Event Details</p>
                  <h2 className="text-2xl font-bold text-white mb-2">{selectedEvent.name}</h2>
                  <p className="text-white/70 text-sm">{selectedEvent.tagline}</p>
                </div>
                <button
                  onClick={closeEvent}
                  className="w-9 h-9 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors flex-shrink-0 ml-3"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Mobile Action Buttons */}
              <div className="flex flex-col gap-2">
                {selectedEvent.problemStatement && (
                  <a
                    href={selectedEvent.problemStatement}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm rounded-lg transition-colors border border-white/20 flex items-center justify-center gap-2"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                    View Problem Statement
                  </a>
                )}
                {selectedEvent.rulebook && (
                  <button
                    onClick={openRulebook}
                    className="w-full px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm rounded-lg transition-colors border border-white/20 flex items-center justify-center gap-2"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                    View Rulebook
                  </button>
                )}
              </div>
            </div>

            {/* Mobile Content */}
            <div className="space-y-8 pb-8">
              {/* Description */}
              <div>
                <h3 className="text-xs uppercase tracking-widest text-white/60 mb-3">About</h3>
                <p className="text-white/80 text-base leading-relaxed">{selectedEvent.description}</p>
              </div>

              {/* Team Size */}
              <div>
                <h3 className="text-xs uppercase tracking-widest text-white/60 mb-3">Team Size</h3>
                <p className="text-white text-lg font-semibold">{selectedEvent.teamSize}</p>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="text-xs uppercase tracking-widest text-white/60 mb-4">Event Highlights</h3>
                <div className="space-y-3">
                  {selectedEvent.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white/5 p-4 rounded-lg border border-white/10">
                      <svg className="w-5 h-5 text-white/60 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/80 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sub Events if any */}
              {selectedEvent.subEvents && (
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-white/60 mb-4">Included Events</h3>
                  <div className="space-y-4">
                    {selectedEvent.subEvents.map((subEvent, idx) => (
                      <div key={idx} className="bg-white/5 p-5 rounded-lg border border-white/10">
                        <h4 className="text-lg font-semibold text-white mb-2">{subEvent.name}</h4>
                        <p className="text-white/70 text-sm">{subEvent.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Rules */}
              <div>
                <h3 className="text-xs uppercase tracking-widest text-white/60 mb-4">Rules & Regulations</h3>
                <div className="space-y-3">
                  {selectedEvent.rules.map((rule, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-white/70 text-sm">
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
      <section id="event-details-section" className="bg-black text-white py-24 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <header className="mb-16 text-center">
            <p className="text-[0.7rem] sm:text-xs uppercase tracking-[0.35em] text-white/45 mb-3">
              Technorion 5.0 · Event Information
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Complete Event Guide
            </h2>
            <p className="text-white/60 text-base sm:text-lg max-w-3xl mx-auto">
              Everything you need to know about competitions, rules, and participation
            </p>
          </header>

          {/* Registration Information */}
          <div className="mb-20 bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
              <svg className="w-8 h-8 text-white/60" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
              </svg>
              Registration Information
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">General Guidelines</h4>
                <ul className="space-y-3">
                  {REGISTRATION_INFO.generalAndRules.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-white/70 text-sm">
                      <span className="text-white/60 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Privileges & Benefits</h4>
                <ul className="space-y-3">
                  {REGISTRATION_INFO.privileges.map((item, idx) => (
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
          </div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {EVENT_DETAILS.map((event) => (
              <div
                key={event.id}
                data-event-id={event.id}
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
