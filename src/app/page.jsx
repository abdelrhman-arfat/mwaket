import HeroSection from "./_Components/sections/HeroSection";
import PrayTimeSection from "./_Components/sections/PrayTimeSection";

export default function Home() {
  return (
    <div
      dir="rtl"
      id="home"
      className="w-full sm:w-[95%] mx-auto px-10 md:w-[90%] xl:w-[85%]"
    >
      <HeroSection />
      <PrayTimeSection />
    </div>
  );
}
