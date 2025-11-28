import LogoLoop from './bits/LogoLoop';


// const techLogos = [
//   { node: <SiReact />, title: "React", href: "https://react.dev" },
//   { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
//   { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
//   { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
// ];

// Alternative with image sources
const imageLogos = [
  { src: "/company/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/company/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/company/company3.png", alt: "Company 3", href: "https://company3.com" }, 
  { src: "/company/company4.png", alt: "Company 4", href: "https://company3.com" },
];

export default function Marquee() {
  return (
    <div className='flex items-center justify-center' style={{ height: '200px', position: 'relative', overflow: 'hidden', backgroundColor:'black'}}>
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={imageLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#000000"
        ariaLabel="Technology partners"
      />
      

    </div>
  );
}