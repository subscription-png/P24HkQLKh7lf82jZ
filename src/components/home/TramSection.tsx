import { ScrollLockedVideoHero } from '@/components/ui/scroll-locked-video-hero';

export default function TramSection() {
  return (
    <ScrollLockedVideoHero
      title="D2 Media is ready for Melbourne…"
      subtitle="Are you ready to stand-out?"
      videoSrc="/videos/melbourne-tram.mp4"
      posterSrc="https://images.unsplash.com/photo-1514395462725-fb4566210144?w=1920&h=1080&fit=crop"
    />
  );
}
