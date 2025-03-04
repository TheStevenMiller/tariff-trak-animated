
import React from 'react';
import TariffMarquee from '@/components/TariffMarquee';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TariffMarquee />
      <main>
        <HeroSection />
        <FeatureSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
