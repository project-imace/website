'use client';

import { motion } from 'framer-motion';

export default function DescriptionSection() {
  return (
    <section className="px-4 py-12 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="space-y-4 text-foreground/80 bg-[#18191B] border border-surgical rounded-lg p-8 font-body"
      >
        <h2 className="font-mono text-3xl text-foreground mb-6">Revarie</h2>
        <p>Revarie is the overarching research framework of Project IMACE.</p>
        <p>It studies the empirical and theoretical significance of anthropomorphic reflections in intelligence emulation.</p>
        <p>Its central concern is how artificial systems can evoke real psychological and cognitive responses in humans.</p>
        <p>The framework treats language models as relational and interpretive systems, not merely technical tools.</p>
        <p>It investigates cognition as a structured phenomenon that may be partially emulated through computation.</p>
        <p>Revarie connects cognitive science, psychology, neuroscience, and philosophy of mind.</p>
        <p>It also examines the risks of interpretability gaps, projection, and cognitive dependency.</p>
        <p>The research is not about claiming machine consciousness.</p>
        <p>It is about understanding how simulated cognition shapes human cognition.</p>
        <p>Revarie therefore serves as a foundation for a more general psychology of artificial systems.</p>
      </motion.div>
    </section>
  );
}
