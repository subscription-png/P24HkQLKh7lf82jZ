import { createFileRoute } from '@tanstack/react-router';
import HeroSection from '@/components/home/HeroSection';
import ServicesMarquee from '@/components/home/ServicesMarquee';
import MessageSection from '@/components/home/MessageSection';
import Demo from '@/components/demo';
import DnaSection from '@/components/home/DnaSection';
import BuildScaleSection from '@/components/home/BuildScaleSection';
import TramSection from '@/components/home/TramSection';
import GrowthDashboardSection from '@/components/home/GrowthDashboardSection';
import CtaSection from '@/components/home/CtaSection';

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'D2 Media Communication Agency in Melbourne' },
      {
        name: 'description',
        content:
          "Play it safe, you will be forgotten. It's time to stand out! D2 Media is a Melbourne communication agency helping startups get heard.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesMarquee />
      <MessageSection />
      <Demo />
      <DnaSection />
      <BuildScaleSection />
      <TramSection />
      <GrowthDashboardSection />
      <CtaSection />
    </main>
  );
}
