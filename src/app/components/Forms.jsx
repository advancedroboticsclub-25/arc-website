// "use client";

// export default function RegistrationForms() {
//   const forms = [
//     {
//       title: "Competition Registration",
//       description: "Register your team for Technorion 5.0 competitions",
//       icon: "🏆",
//       link: "https://docs.google.com/forms/d/1doDkZSDHo0hdghy39rDM3bf25KxHGJv0pCv8tqQeeLY/edit",
//     },
//     {
//       title: "Food Stall Registration",
//       description: "Register to set up a food stall at the event",
//       icon: "🍔",
//       link: "https://docs.google.com/forms/d/1QtHGVN8DTIc9O-mo1c674_Py-I4RhnJtZYbulX2Rn9Y/edit",
//     },
//     {
//       title: "Volunteer Registration",
//       description: "Join our team as a volunteer for Technorion 5.0",
//       icon: "🤝",
//       link: "https://docs.google.com/forms/d/1btLT4rlesZ3OH38yKYEizXgekeMI_BwcpPWCYILwny0/edit",
//     },
//   ];

//   return (
//     <section className="bg-black text-white py-24 px-4 sm:px-8 lg:px-16">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <header className="mb-14 text-center">
//           <p className="text-[0.7rem] sm:text-xs uppercase tracking-[0.35em] text-white/45 mb-3">
//             Technorion 5.0 · Registration
//           </p>
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium">
//             Join the Event
//           </h2>
//           <p className="text-white/60 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
//             Register now for competitions, food stalls, or volunteer opportunities
//           </p>
//         </header>

//         {/* Forms Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
//           {forms.map((form, index) => (
//             <a
//               key={index}
//               href={form.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 
//                 hover:bg-white/10 hover:border-white/20 transition-all duration-300
//                 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(255,255,255,0.1)]"
//             >
//               {/* Icon */}
//               <div className="text-5xl mb-6">{form.icon}</div>

//               {/* Content */}
//               <h3 className="text-xl font-semibold mb-3 transition-colors">
//                 {form.title}
//               </h3>
//               <p className="text-white/60 text-sm mb-6">
//                 {form.description}
//               </p>

//               {/* Arrow Icon */}
//               <div className="flex items-center gap-2 text-sm font-medium text-white/80 group-hover:text-white transition-colors">
//                 <span>Register Now</span>
//                 <svg
//                   className="w-4 h-4 group-hover:translate-x-1 transition-transform"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M13 7l5 5m0 0l-5 5m5-5H6"
//                   />
//                 </svg>
//               </div>

//               {/* Decorative corner accent */}
//               <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }







"use client";

import React from "react";
import Image from "next/image";

const forms = [
  {
    title: "Competition Registration",
    description:
      "Register your team for Technorion 5.0 competitions and secure your spot in the bracket.",
    icon: "/logos/competition.svg",
    link: "https://docs.google.com/forms/d/1doDkZSDHo0hdghy39rDM3bf25KxHGJv0pCv8tqQeeLY/edit",
    color: "text-blue-400",
  },
  {
    title: "Food Stall Registration",
    description:
      "Secure your vendor spot to set up a food stall and cater to thousands of attendees.",
    icon: "/logos/food.svg",
    link: "https://docs.google.com/forms/d/1QtHGVN8DTIc9O-mo1c674_Py-I4RhnJtZYbulX2Rn9Y/edit",
    color: "text-green-400",
  },
  {
    title: "Volunteer Registration",
    description:
      "Join our dedicated staff team and help us build the future of this event.",
    icon: "/logos/volunteer.svg",
    link: "https://docs.google.com/forms/d/1btLT4rlesZ3OH38yKYEizXgekeMI_BwcpPWCYILwny0/edit",
    color: "text-purple-400",
  },
];

export default function RegistrationForms() {
  return (
    <section className="bg-black text-white py-24 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-[size:30px_30px] bg-[repeating-linear-gradient(45deg,#202020_0,#202020_1px,transparent_1px,transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <header className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.4em] font-mono text-blue-400/80 mb-3">
            REGISTRATION
          </p>
          <h2 className="text-3xl sm:text-4xl font-medium md:text-5xl font-extrabold">
            INITIATE REGISTRATION
          </h2>
          <p className="text-white/60 text-base mt-4 max-w-3xl mx-auto font-light">
            Select the appropriate registration pathway below. Data entry is
            secured by end-to-end encryption.
          </p>
        </header>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {forms.map((form, index) => (
            <a
              key={index}
              href={form.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative bg-[#1a1a1a] border-b-4 border-l-2 ${form.color} rounded-xl p-8 
                transition-all duration-300
                hover:shadow-[0_0_10px_rgba(76,149,255,0.4)] hover:scale-[1.02]
                hover:border-r-2 hover:border-t-2 hover:border-r-white/20 hover:border-t-white/20`}
            >
              {/* Icon */}
              <div className="mb-6 relative">
                <Image
                  src={form.icon}
                  alt={form.title}
                  width={64}
                  height={64}
                  className="object-contain opacity-90"
                />
                <div
                  className={`absolute -inset-1 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                  style={{ boxShadow: `0 0 25px ${form.color}` }}
                ></div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-3">{form.title}</h3>
              <p className="text-white/70 text-sm mb-6 font-light">
                {form.description}
              </p>

              {/* CTA */}
              <div
                className={`flex items-center gap-3 text-sm font-semibold ${form.color} group-hover:gap-4 transition-all duration-300`}
              >
                <span>Initiate Sequence</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>

              {/* Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
