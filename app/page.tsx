import { LoadingScreen } from '@/components/loading-screen';
import { HeroSection } from '@/components/sections/hero-section';
import { PrizesSection } from '@/components/sections/prizes-section';
import { JudgesSection } from '@/components/sections/judges-section';
import { SponsorsSection } from '@/components/sections/sponsors-section';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-background via-background/90 to-background/80">
      <LoadingScreen />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(120,119,198,0.3),transparent)]" />
      <HeroSection />
      <PrizesSection />
      <JudgesSection />
      <SponsorsSection />
    </main>
  );
}