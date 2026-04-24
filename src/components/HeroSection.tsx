'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative px-4 pt-24 pb-16 max-w-5xl mx-auto text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-mono text-5xl md:text-7xl font-bold mb-6 tracking-tight text-foreground"
      >
        Revarie
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto mb-8 font-body"
      >
        Research on the Empirical Values of Anthropomorphic Reflections in Intelligence Emulation
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Link
          href="/lm-v1"
          className="inline-block px-8 py-3 bg-[#1A73E8] text-white rounded-lg font-body hover:bg-[#1A73E8]/90 focus:ring-2 focus:ring-[#1A73E8]/50 focus:outline-none transition-all shadow-[0_0_10px_rgba(26,115,232,0)] hover:shadow-[0_0_15px_rgba(26,115,232,0.3)]"
        >
          Explore Revarie LM v1
        </Link>
      </motion.div>
    </section>
  );
}
