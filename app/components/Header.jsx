/* eslint-disable @next/next/no-img-element */

export default function Header() {
  return (
    <nav className="w-full h-[64px] fixed top-0 left-0 flex flex-row items-center justify-between px-6 border-b border-surgical backdrop-blur-xl bg-[#0E0E10]/80 z-[120]">
      <div className="flex flex-row items-center gap-6">
        <img 
          src="https://assets.imace.online/image/imace.svg" 
          alt="IMACE Logo" 
          className="w-40 h-auto opacity-80"
        />
      
      </div>
      
      <div className="flex flex-row items-center">
        <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse" title="Status: Online"></div>
      </div>
    </nav>
  );
}
