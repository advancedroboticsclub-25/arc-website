"use client"
import InfiniteGallery  from "./bits/ui/3d-gallery-photography";

export default function Carousel() {
const sampleImages = Array.from({ length: 6 }, (_, i) => ({
	src: `/Memories/${i + 1}.jpg`,
	alt: `Memory ${i + 1}`
}));

  return (
    <main className="min-h-screen h-full w-full relative bg-black">
			<InfiniteGallery
				images={sampleImages}
				speed={1.2}
				zSpacing={3}
				visibleCount={12}
				falloff={{ near: 0.8, far: 14 }}
				className="h-screen w-full rounded-lg overflow-hidden"
			/>
			<div className="h-screen inset-0 pointer-events-none absolute flex items-center justify-center text-center px-3 mix-blend-exclusion text-white">
				<h1 className="font-serif text-4xl md:text-7xl tracking-tight">
					<span className="italic">Memories</span>
				</h1>
			</div>

			<div className="text-center text-white/50 absolute bottom-10 left-0 right-0 font-mono uppercase text-[11px] font-semibold">
				<p>Use mouse wheel, arrow keys, or touch to navigate</p>
				<p className=" opacity-60">
					Auto-play resumes after 3 seconds of inactivity
				</p>
			</div>
		</main>
	);
}
