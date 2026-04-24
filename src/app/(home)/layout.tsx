import type { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GridBackground from '@/components/GridBackground';

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
        <GridBackground />
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-1 flex flex-col mt-[64px]">
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </div>
    </>

     
  );
}
