'use client';

import Link from 'next/link';

export default function ActiveModelsTable() {
  return (
    <section className="px-4 py-12 max-w-5xl mx-auto">
      <h2 className="font-mono text-2xl mb-6">ACTIVE MODELS</h2>
      <div className="bg-[#18191B] border border-surgical rounded-lg p-6 overflow-x-auto">
        <table className="w-full text-left font-mono text-sm">
          <thead className="border-b border-surgical text-foreground/60">
            <tr>
              <th className="pb-2 pr-4">Model</th>
              <th className="pb-2 px-4">Type</th>
              <th className="pb-2 px-4">Version</th>
              <th className="pb-2 pl-4">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-surgical">
              <td className="py-4 pr-4">Revarie LM</td>
              <td className="py-4 px-4 font-body">CoEm - Language Models</td>
              <td className="py-4 px-4">v1.0</td>
              <td className="py-4 pl-4">
                <span className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <Link href="/lm-v1" className="text-[#1A73E8] hover:underline font-mono">Live</Link>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
