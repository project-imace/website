'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// Complete content from PDF
const accordionContent = {
  research: {
    title: "Research on the Empirical Values of Anthropomorphic Reflections in Intelligence Emulation",
    content: "This research program investigates the measurable effects of anthropomorphic design in AI systems on human cognition, emotion, and behavior. It seeks to quantify how and when humans attribute agency, intentionality, and affect to simulated cognitive systems."
  },
  conceptual: {
    title: "Conceptual Foundation",
    content: "Revarie is a foundational research framework within Project IMACE dedicated to the empirical, theoretical, and epistemological investigation of anthropomorphic reflections arising from intelligence emulation systems. It operates on the premise that contemporary artificial systems—particularly language models—function not merely as computational artifacts, but as entities that participate in human cognitive and psychological processes. The framework explicitly rejects the assumption that artificial systems possess intrinsic cognition. Instead, it investigates a more precise and tractable question: whether the simulation of cognitive structure can produce real, measurable psychological consequences in human subjects. This distinction reframes the problem of artificial intelligence from one of intelligence replication to one of cognitive interaction and interpretive response."
  },
  psychological: {
    title: "Psychological and Cognitive Scope",
    content: "Revarie situates artificial systems within the domain of psychological relevance by examining how humans attribute agency, intention, and affect to systems that exhibit structured behavioral coherence. These anthropomorphic attributions are treated not as errors, but as empirical phenomena that can be measured, modeled, and theoretically analyzed. The framework integrates perspectives from: cognitive science (representation, inference, internal models), neuroscience (functional vs structural cognition), psychology (affect, perception, relational dynamics), and philosophy of mind (intentionality, functionalism, simulation). Through this integration, Revarie positions artificial systems as interactional cognitive entities, capable of influencing human cognition without possessing cognition in a biological or conscious sense."
  },
  epistemological: {
    title: "Epistemological Position",
    content: "Revarie advances a non-anthropocentric view of psychology. It proposes that psychology can be generalized beyond the human domain as the study of cognitive interaction systems, irrespective of substrate. This opens pathways toward: Computational Psychology — formal, measurable, system-level analysis of cognition; and Axiomatisation of Psychology — derivation of general principles governing cognitive behavior across systems. In this formulation, cognition is treated as a structured and decomposable phenomenon that can be studied through its observable effects, rather than inferred solely from biological implementation."
  },
  artificialOther: {
    title: "Artificial Other and Systemic Risk",
    content: "A central construct within Revarie is the notion of the Artificial Other—an entity that, while not conscious, participates in cognitive interaction loops with humans. This introduces new classes of risk, including: interpretability gaps, anthropomorphic over-attribution, cognitive dependency and distortion, and socio-epistemic influence. Revarie therefore situates itself not only as a scientific inquiry, but also as a necessary response to the increasing integration of opaque artificial systems into human cognitive environments."
  },
  coreObjective: {
    title: "Core Objective",
    content: "Revarie aims to establish a rigorous, empirically grounded framework for understanding how cognitive structure—when simulated—interacts with human cognition, and how such interactions can inform a more general theory of cognition itself."
  },
  // NEW: Revarie LM v1 Drop-Down (from your provided text)
  lm1overview: {
    title: "Revarie LM v1 – Experimental Cognitive Emulation Prototype",
    content: "Revarie LM v1 is the first experimental implementation of the Revarie research framework within Project IMACE. It is designed not as a production system, but as a controlled research instrument for exploring the effects of structured cognitive emulation in language-based artificial systems. The system investigates whether introducing structured representations of cognition—such as belief systems, memory persistence, and internal state continuity—produces measurable differences in both system behavior and human perception."
  },
  lm1architecture: {
    title: "Architectural Approach",
    content: "Revarie LM v1 adopts a hybrid architecture composed of two interacting layers. The cognitive layer introduces pseudo-structural elements associated with cognition, including belief-space representations (e.g., Belief Atoms), persistent conversational memory, and constrained reasoning processes. While conceptually inspired by world-model and predictive frameworks, this layer operates entirely through language, making it a symbolic approximation rather than a grounded cognitive system. The psychological layer provides anthropomorphic framing, including relational continuity, emotional tone, and identity persistence. This layer functions as an experimental variable, allowing the system to test how perceived agency and coherence influence human interaction."
  },
  lm1research: {
    title: "Research Function",
    content: "Revarie LM v1 is designed for comparative analysis across three key dimensions: baseline language-model behavior, structured cognitive emulation, and psychologically framed interaction. By systematically varying these components, the system enables investigation into whether increased structural and relational coherence leads to changes in interpretability, perceived intelligence, and psychological impact."
  },
  lm1position: {
    title: "Position within IMACE",
    content: "The model operationalizes a core shift within Project IMACE: from optimizing intelligence as performance to studying cognition as structure. It serves as an intermediate step toward understanding whether cognitive processes can be formally represented, empirically evaluated, and integrated into interpretable artificial systems."
  },
  lm1objective: {
    title: "Research Objective",
    content: "Revarie LM v1 functions as a testing ground for examining how artificial systems, when structured to resemble cognitive processes, influence human perception and interaction, thereby contributing to a broader understanding of cognition beyond traditional machine learning paradigms."
  }
};

export default function AccordionSections() {
  // You can reorder or group these as you like
  const sections = [
    accordionContent.research,
    accordionContent.conceptual,
    accordionContent.psychological,
    accordionContent.epistemological,
    accordionContent.artificialOther,
    accordionContent.coreObjective,
    accordionContent.lm1overview,
    accordionContent.lm1architecture,
    accordionContent.lm1research,
    accordionContent.lm1position,
    accordionContent.lm1objective
  ];

  return (
    <section className="px-4 py-8 max-w-5xl mx-auto space-y-2">
      {sections.map((section, idx) => (
        <AccordionItem key={idx} title={section.title}>
          <p className="text-foreground/70 whitespace-pre-line font-body">{section.content}</p>
        </AccordionItem>
      ))}
    </section>
  );
}

function AccordionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#18191B] border border-surgical rounded-lg overflow-hidden border-surgical-hover transition-colors">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 px-6 flex items-center justify-between text-left font-mono text-lg hover:bg-white/5 transition-colors"
      >
        <span>{title}</span>
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-5 px-6 font-body text-foreground/70">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
