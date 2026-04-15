/* eslint-disable @next/next/no-img-element */

export default function Header() {
  return (
    <nav className="w-full flex justify-between items-center py-8 border-b border-white/5">
      <div className="flex items-center gap-3">
        <img 
          src="https://assets.imace.online/image/imace.svg" 
          alt="IMACE Logo" 
          className="h-10 w-auto opacity-80" 
        />
        <span className="font-mono text-xs tracking-[0.3em] uppercase hidden sm:block text-white/80">
          Revarie Research
        </span>
      </div>
      
      <div className="flex gap-6 font-mono text-[10px] tracking-widest text-white/50">
        <span className="hover:text-white transition-colors uppercase text-[#4ade80]">
          [ Status: Online ]
        </span>
      </div>
    </nav>
  );
}
