
import { Link } from '@tanstack/react-router';
import FadeIn from '@/components/FadeIn';

export default function CtaSection() {
  return (
    <section
      className="py-24 text-center md:py-32"
      style={{ background: 'linear-gradient(135deg, #590746 0%, #370939 50%, #0e0b20 100%)' }}
      aria-label="Call to action"
    >
      <FadeIn className="mx-auto max-w-3xl px-5">
        <h2 className