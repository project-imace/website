'use client';

import HeroSection from '@/components/HeroSection';
import DescriptionSection from '@/components/DescriptionSection';
import AccordionSections from '@/components/AccordionSection';
import ActiveModelsTable from '@/components/ActiveModelsTable';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <DescriptionSection />
      <AccordionSections />
      <ActiveModelsTable />
    </div>
  );
}
