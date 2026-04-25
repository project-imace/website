'use client';

import { useEffect, useState } from 'react';

export default function Terminal() {
  const [bootText, setBootText] = useState<string[]>([]);
  const lines = [
    'ARTERY v1.0 :: COGNITIVE EMULATION TERMINAL',
    '-------------------------------------------',
    '> Initializing neuro-symbolic core... [OK]',
    '> Loading functional persona... [OK]',
    '> Establishing secure channel... [OK]',
    '> Ready for input.',
    ''
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < lines.length) {
        setBootText(prev => [...prev, lines[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="font-artery text-samara-warm/70 text-sm mb-4">
      {bootText.map((line, i) => (
        <div key={i}>
          <span>{line}</span>
          {i === bootText.length - 1 && bootText.length < lines.length && (
            <span className="inline-block w-2 h-4 bg-samara-warm ml-1 animate-terminal-blink" />
          )}
        </div>
      ))}
    </div>
  );
}
