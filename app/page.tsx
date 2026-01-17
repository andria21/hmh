'use client';

import { useState } from 'react';
import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import Footer from '@/components/footer';

export default function Home() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection onShowAbout={() => setShowAbout(true)} />
      {showAbout && <AboutSection />}
      <Footer />
    </main>
  );
}
