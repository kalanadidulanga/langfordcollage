import Header from "@/components/Header";
import HeroSection from "./hero-section";

export default function Home() {
  return (
    <div className='main-bg'>
      <div className="content">
        <Header />
        <HeroSection />
      </div>
    </div>
  );
}
