export default function GridBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none w-full h-full bg-[#0E0E10] grid-background-mask">
      <div className="absolute inset-0 studio-grid"></div>

      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <style>
            {`
              @keyframes pulse-glow {
                0%, 100% { opacity: 0; }
                50% { opacity: 0.08; }
              }
              .glow-rect {
                fill: #ffffff;
                animation: pulse-glow 6s infinite ease-in-out;
                opacity: 0;
              }
            `}
          </style>
        </defs>

        {/* Manually placed glowing squares aligned to 40px grid */}
        <rect x="80" y="120" width="40" height="40" className="glow-rect" style={{ animationDelay: "0s", animationDuration: "5s" }} />
        <rect x="320" y="80" width="40" height="40" className="glow-rect" style={{ animationDelay: "2s", animationDuration: "7s" }} />
        <rect x="560" y="240" width="40" height="40" className="glow-rect" style={{ animationDelay: "1s", animationDuration: "6s" }} />
        <rect x="800" y="160" width="40" height="40" className="glow-rect" style={{ animationDelay: "3s", animationDuration: "8s" }} />
        <rect x="1040" y="320" width="40" height="40" className="glow-rect" style={{ animationDelay: "0.5s", animationDuration: "5.5s" }} />
        <rect x="200" y="440" width="40" height="40" className="glow-rect" style={{ animationDelay: "4s", animationDuration: "7.5s" }} />
        <rect x="720" y="520" width="40" height="40" className="glow-rect" style={{ animationDelay: "1.5s", animationDuration: "6.5s" }} />
        <rect x="1200" y="200" width="40" height="40" className="glow-rect" style={{ animationDelay: "2.5s", animationDuration: "4.5s" }} />
      </svg>
    </div>
  );
}
