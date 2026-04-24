export default function LivingBackground() {
  return (
    <div className="living-bg-container">
      {/* Blob A (Gemini Blue) */}
      <div
        className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full animate-blob-a"
        style={{
          background: 'radial-gradient(circle, rgba(26,115,232,0.06) 0%, rgba(26,115,232,0) 70%)',
          filter: 'blur(60px)'
        }}
      />

      {/* Blob B (Relational Purple) */}
      <div
        className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] rounded-full animate-blob-b"
        style={{
          background: 'radial-gradient(circle, rgba(147,51,234,0.04) 0%, rgba(147,51,234,0) 70%)',
          filter: 'blur(80px)'
        }}
      />

      {/* Noise / Grain Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
