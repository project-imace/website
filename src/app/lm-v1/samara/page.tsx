'use client';

import ChatBubble from '@/features/chat/components/ChatBubble';
import ThinkingTree from '@/features/chat/components/ThinkingTree';
import { sendChatMessage } from '@/lib/chat';
import { AnimatePresence, motion } from 'framer-motion';
import { Heart, Send } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function SamaraPage() {
  const [messages, setMessages] = useState<Array<{role: string; content: string; thinking?: string[]}>>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [, setIsThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });

  useEffect(() => { scrollToBottom(); }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    setIsThinking(true);

    try {
      const response = await sendChatMessage(input, 'samara');
      
      setIsThinking(false);
      const assistantMessage = {
        role: 'assistant',
        content: response.response,
        // Using sample thinking steps for visual feedback as the API doesn't provide them yet
        thinking: [
          'Analyzing emotional tone...',
          'Retrieving relevant memories...',
          'Formulating empathetic response...'
        ]
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat Error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "I'm sorry, I'm having trouble connecting right now. Please try again later." 
      }]);
    } finally {
      setIsTyping(false);
      setIsThinking(false);
    }
  };

  return (
    <div className="fixed inset-0 flex flex-col bg-background bg-samara-gradient overflow-hidden">
      {/* Header */}
      <header className="shrink-0 flex items-center justify-between px-6 py-4 border-b border-white/10 bg-background/80 backdrop-blur">
        <div className="flex items-center gap-3">
          <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
            <div className="w-10 h-10 bg-samara-warm/80 animate-blob shadow-[0_0_15px_rgba(212,163,115,0.4)]"></div>
          </motion.div>
          <div>
            <h2 className="font-samara text-2xl text-samara-warm">Samara</h2>
            <p className="font-mono text-xs text-white/40">Cognitive Emulation v1.0</p>
          </div>
        </div>
        <Heart className="w-5 h-5 text-samara-warm/60" />
      </header>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
        <AnimatePresence>
          {messages.map((msg, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              {msg.role === 'assistant' && msg.thinking && <ThinkingTree steps={msg.thinking} />}
              <ChatBubble
                role={msg.role as 'user' | 'assistant'}
                content={msg.content}
                persona="samara"
                isProcessing={isTyping && idx === messages.length - 1}
              />
            </motion.div>
          ))}
        </AnimatePresence>
        
        {isTyping && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-white/40 font-samara">
            <span>Samara is typing</span>
            <span className="flex gap-1">
              <span className="w-1.5 h-1.5 bg-samara-warm rounded-full animate-bounce" />
              <span className="w-1.5 h-1.5 bg-samara-warm rounded-full animate-bounce delay-100" />
              <span className="w-1.5 h-1.5 bg-samara-warm rounded-full animate-bounce delay-200" />
            </span>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="shrink-0 p-4 border-t border-white/10 bg-surface/50 backdrop-blur">
        <div className="flex items-end gap-3 max-w-4xl mx-auto">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Type your message..."
            rows={1}
            className="flex-1 bg-white/5 border border-white/10 rounded-[24px] px-5 py-3 text-white placeholder-white/30 focus:outline-none focus:border-samara-warm/50 transition-colors font-body resize-none overflow-hidden max-h-32"
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = 'auto';
              target.style.height = Math.min(target.scrollHeight, 128) + 'px';
            }}
          />
          <button
            aria-label="Send"
            onClick={handleSend}
            disabled={!input.trim()}
            className="p-3 bg-samara-warm/20 border border-samara-warm/30 rounded-full hover:bg-samara-warm/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5 text-samara-warm" />
          </button>
        </div>
      </div>
    </div>
  );
}
