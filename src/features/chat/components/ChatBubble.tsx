'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ChatBubbleProps {
  role: 'user' | 'assistant';
  content: string;
  persona?: 'samara' | 'artery';
  isProcessing?: boolean;
  onUpdate?: () => void;
}

export default function ChatBubble({ role, content, persona = 'samara', isProcessing = false, onUpdate }: ChatBubbleProps) {
  const isUser = role === 'user';
  const isArtery = persona === 'artery';

  const [displayedContent, setDisplayedContent] = useState(isUser ? content : '');

  useEffect(() => {
    if (isUser) {
      setDisplayedContent(content);
      return;
    }

    let currentIndex = 0;
    // Faster typing for Samara, more terminal-like for Artery
    const intervalTime = isArtery ? 15 : 8;

    const interval = setInterval(() => {
      if (currentIndex < content.length - 1) {
        setDisplayedContent(prev => prev + content[currentIndex]);
        currentIndex++;
        if (onUpdate) onUpdate();
      } else {
        setDisplayedContent(content);
        if (onUpdate) onUpdate();
        clearInterval(interval);
      }
    }, intervalTime);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content, isUser, isArtery]);

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
            ? 'bg-white/10 text-white rounded-2xl px-5 py-3 max-w-[85%] md:max-w-[75%] lg:max-w-[65%] font-body break-words whitespace-pre-wrap'
            : isArtery
            ? 'bg-transparent text-artery-green rounded-none px-5 py-3 max-w-[85%] md:max-w-[75%] lg:max-w-[65%] font-artery terminal-prompt break-words whitespace-pre-wrap'
            : 'bg-white/10 text-white rounded-2xl p-4 max-w-[85%] md:max-w-[75%] lg:max-w-[65%] border border-white/10 font-samara break-words whitespace-pre-wrap'
        }
      >
        {displayedContent}
        {!isUser && displayedContent !== content && isArtery && (
          <span className="inline-block w-2 h-4 bg-artery-green ml-1 animate-terminal-blink align-middle" />
        )}
      </div>
    </motion.div>
  );
}
