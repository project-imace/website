'use client';

import HeroSection from '@/app/components/HeroSection';
import DescriptionSection from '@/app/components/DescriptionSection';
import AccordionSections from '@/app/components/AccordionSection';
import ActiveModelsTable from '@/app/components/ActiveModelsTable';

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
