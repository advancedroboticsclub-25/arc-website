import HeroMain from "../components/HeroMain";
import TechEventStats from "../components/EventStats";
import EventArtGallery from "../components/Art";
import { BackgroundPaths } from "../components/bits/ui/background-paths";
import Carousel from "../components/Carousel";
import Marquee from "../components/Marquee";
import EventFaqs from "../components/Faqs";
import AstonishingFooter from "../components/Footer";

export default function Home() {
  return (
    <>
      <div className="min-h-screen h-full w-full flex flex-col">
        <BackgroundPaths title="A Fusion of Bots, Bytes, and Brilliance." />
        <TechEventStats />
        <HeroMain />
        <EventArtGallery />
        <EventFaqs />
        <Marquee />
        <AstonishingFooter />
        <Carousel />
      </div>
    </>
  );
}
