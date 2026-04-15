'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-foreground/60">
            <a href="mailto:research@imace.online" className="hover:text-foreground">research@imace.online</a>
            {' • '}
            <a href="mailto:coordinator@imace.online" className="hover:text-foreground">coordinator@imace.online</a>
          </div>
          <div className="flex items-center gap-6">
            <Image src="https://assets.imace.online/image/alternresearch.svg" alt="Altern Research" width={80} height={60} className="h-5 w-auto opacity-60 hover:opacity-100 transition" />
            <Image src="https://assets.imace.online/image/arcbmm.svg" alt="ARC BMM" width={80} height={60} className="h-5 w-auto opacity-90 hover:opacity-100 transition" />
            <Image src="https://assets.imace.online/image/arcami.svg" alt="Arcami" width={80} height={60} className="h-5 w-auto opacity-90 hover:opacity-100 transition" />
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-foreground/40">
          © 2026 Project IMACE Research Coordination Committee
        </div>
      </div>
    </footer>
  );
}
