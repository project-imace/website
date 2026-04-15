/* eslint-disable @next/next/no-img-element */

export default function Header() {
  return (
    <nav className="w-[64px] h-screen fixed top-0 left-0 flex flex-col items-center py-6 border-r border-surgical backdrop-blur-xl bg-[#0E0E10]/80 z-50">
      <div className="flex flex-col items-center gap-6 w-full">
        <img 
          src="https://assets.imace.online/image/imace.svg" 
          alt="IMACE Logo" 
          className="w-8 h-auto opacity-80"
        />
        {/* We can hide the text entirely or rotate it, keeping it hidden for the surgical rail look */}
      </div>
      
      <div className="mt-auto mb-6 flex flex-col items-center">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" title="Status: Online"></div>
      </div>
    </nav>
  );
}
