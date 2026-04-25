'use client';

import { motion } from 'framer-motion';

interface ChatBubbleProps {
  role: 'user' | 'assistant';
  content: string;
  persona?: 'samara' | 'artery';
  isProcessing?: boolean;
}

export default function ChatBubble({ role, content, persona = 'samara', isProcessing = false }: ChatBubbleProps) {
  const isUser = role === 'user';
  const isArtery = persona === 'artery';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
    >
      {!isUser && !isArtery && (
        <img
          src="https://assets.imace.online/image/samaraicon.svg"
          className="w-8 h-8 rounded-full animate-fast-breathing flex-shrink-0 mr-2 self-end"
          alt="Samara"
        />
      )}
      {!isUser && isArtery && (
        <img
          src="https://assets.imace.online/image/arteryicon.svg"
          className={`w-8 h-8 rounded-full flex-shrink-0 mr-2 self-end ${isProcessing ? "animate-fast-spin" : ""}`}
          alt="Artery"
        />
      )}
      <div
        className={
          isUser
            ? 'bg-white/10 text-white rounded-2xl px-5 py-3 max-w-[85%] md:max-w-[75%] lg:max-w-[65%] font-body break-words'
            : isArtery
            ? 'bg-black border border-artery-green/30 text-artery-green rounded-none px-5 py-3 max-w-[85%] md:max-w-[75%] lg:max-w-[65%] font-artery terminal-prompt break-words'
            : 'bg-white/10 text-white rounded-2xl p-4 max-w-[85%] md:max-w-[75%] lg:max-w-[65%] border border-white/10 font-samara break-words'
        }
      >
        {content}
      </div>
    </motion.div>
  );
}
