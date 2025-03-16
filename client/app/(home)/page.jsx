import Header from "@/components/Header";
import HeroSection from "./hero-section";
import UniQualification from "./uni-qualification";
import AffordableStudy from "./affordable-study-section";
import SocialLearning from "./social-learning-section";
import WillLearn from "./will-learn-section";
import Support from "./support-section";

export default function Home() {
  return (<>
    <div className='main-bg'>
      <div className="content">
        <Header />
        <HeroSection />
      </div>
    </div>
    <UniQualification />
    <AffordableStudy />
    <SocialLearning/>
    <WillLearn/>
    <Support/>
  </>
  );
}
