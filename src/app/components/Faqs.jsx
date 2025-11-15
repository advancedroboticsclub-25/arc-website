// components/EventFaqs.jsx
"use client";

import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What is included with my ticket purchase?",
    answer:
      "All standard tickets grant full access to keynotes, workshops (first-come, first-served registration), networking events, the exhibition floor, and official after-parties. Premium tiers may include exclusive dinners or dedicated mentor sessions.",
  },
  {
    id: 2,
    question: "Is there a limit on how many workshops I can attend?",
    answer:
      "While there is no strict limit, capacity for hands-on workshops is limited. You will be able to register for specific sessions 72 hours before the event start time. We recommend registering early to secure your spot in high-demand tracks.",
  },
  {
    id: 3,
    question: "Can I pause or transfer my ticket?",
    answer:
      "Tickets are generally non-refundable. However, you can transfer your ticket to another attendee up to two weeks before the event date via our registration portal. Pausing a ticket is not possible once purchased.",
  },
  {
    id: 4,
    question: "In which time zone will the online sessions be hosted?",
    answer:
      "All timings listed on the schedule are based on your event’s primary time zone. A personalized schedule adjusted to your local time zone will be available in the attendee dashboard upon registration.",
  },
  {
    id: 5,
    question: "How can I get my company involved as a sponsor?",
    answer:
      "We offer a range of sponsorship tiers, from dedicated booth space to custom speaking engagements. Please contact our partnership team at sponsorship@youreventdomain.com for a detailed prospectus and current availability.",
  },
  {
    id: 6,
    question: "How do I access the networking and event app?",
    answer:
      "The official event app link and your unique access code will be emailed to all registered attendees one week prior to the event start date. The app is your gateway to networking, Q&A, and personalized scheduling.",
  },
];

const EventFaqs = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative py-20 sm:py-24 px-6 lg:px-10 bg-black">
      <div className="max-w-4xl mx-auto">
        {/* Section heading */}
        <header className="mb-10 sm:mb-12">
          <p className="text-[0.7rem] sm:text-xs uppercase tracking-[0.35em] text-white/50 mb-3">
            FAQ · Essentials
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white">
            Answers before you even ask.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[var(--technorian-muted)]">
            Everything you need to know about tickets, sessions and how to get
            your crew involved in Technorian.
          </p>
        </header>

        {/* Glassy FAQ card */}
        <div className="relative rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.22)_0,transparent_60%),rgba(15,23,42,0.96)] shadow-[0_30px_120px_rgba(0,0,0,0.9)] overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_top_left,_rgba(248,250,252,0.18)_0,transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(15,23,42,0.95)_0,transparent_60%)]" />

          <div className="relative divide-y divide-white/5">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div key={faq.id}>
                  {/* Question row */}
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-content-${faq.id}`}
                    className="w-full text-left px-6 sm:px-8 py-5 sm:py-6 flex items-center gap-4 hover:bg-white/3 transition-colors"
                  >
                    <div className="flex-1">
                      <p className="text-sm sm:text-base font-medium text-white">
                        {faq.question}
                      </p>
                    </div>

                    {/* Icon pill */}
                    <span
                      className={`inline-flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-white/20 text-xs sm:text-sm text-white transition-all duration-300 ${
                        isOpen
                          ? "bg-white/90 text-black rotate-90"
                          : "bg-white/5 text-white/80"
                      }`}
                    >
                      {/* Plus icon that rotates into a minus-ish */}
                      <span
                        className={`block transition-transform duration-300 ${
                          isOpen ? "rotate-90 scale-95" : ""
                        }`}
                      >
                        +
                      </span>
                    </span>
                  </button>

                  {/* Answer – smooth open/close using grid trick */}
                  <div
                    id={`faq-content-${faq.id}`}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 sm:px-8 pb-5 sm:pb-6 text-sm sm:text-base text-[var(--technorian-muted)] leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventFaqs;
