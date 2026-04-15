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
        className="font-mono text-5xl md:text-7xl font-bold mb-6 tracking-tight"
      >
        Revarie
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto mb-8"
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
          className="inline-block px-8 py-3 border border-foreground/30 rounded-lg text-foreground hover:bg-foreground/5 transition"
        >
          Explore Revarie LM v1
        </Link>
      </motion.div>
    </section>
  );
}
