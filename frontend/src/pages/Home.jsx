import HeroSection from '../components/home/HeroSection';
import CallToAction from '../components/home/CallToAction';
import HowItWorks from '../components/home/HowItWorks';
import Features from '../components/home/Features';
import WhoItsFor from '../components/home/WhoItsFor';
import CommunityCredit from '../components/home/CommunityCredit';

export default function Home() {
  return (
    <main className="bg-[#FDF6F0] min-h-screen p-6">
      <div className="max-w-7xl mx-auto space-y-12">
        <HeroSection />
        <CallToAction />
        <HowItWorks />
        <Features />
        <WhoItsFor />
        <CommunityCredit />
      </div>
    </main>
  );
}