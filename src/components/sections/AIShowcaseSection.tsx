'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

interface Message {
  sender: 'ai' | 'user';
  text: string;
  label?: string;
}

interface Conversation {
  title: string;
  messages: Message[];
}

const conversations: Conversation[] = [
  {
    title: 'Sales Intelligence',
    messages: [
      { sender: 'user', text: 'What were my best selling products last week?' },
      { sender: 'ai', text: 'Your top 3 last week:\n1. iPhone 15 Pro Max Screen — 47 units (GHC 14,100)\n2. Samsung A54 Screen — 38 units (GHC 7,600)\n3. iPhone 14 Screen — 31 units (GHC 6,200)\n\nOsu branch led with 52% of total sales.' },
      { sender: 'user', text: 'Which branch is underperforming?' },
      { sender: 'ai', text: 'Kumasi branch is 34% below average this week. Foot traffic dropped on Tuesday-Thursday. Consider running a promotion or adjusting staff hours.' },
    ],
  },
  {
    title: 'Customer Retention',
    messages: [
      { sender: 'ai', text: 'Hi Ama! It\'s been 3 weeks since your last visit to Babebox. We noticed your favorite Pampers Size 3 is back in stock. Would you like us to set some aside for you?', label: 'WhatsApp to Customer' },
      { sender: 'user', text: 'Oh yes please! I\'ll come by tomorrow afternoon.' },
      { sender: 'ai', text: 'Done! I\'ve reserved 2 packs of Pampers Size 3 for you. See you tomorrow, Ama. Have a wonderful evening!' },
    ],
  },
  {
    title: 'Inventory Management',
    messages: [
      { sender: 'ai', text: 'Good morning! 3 items are running critically low:\n\n• iPhone 15 Screen — 2 left (avg. 8/week)\n• Samsung A54 Screen — 3 left\n• iPhone 14 Screen — 1 left\n\nShall I create a purchase order for ScreenWorld Supplies?' },
      { sender: 'user', text: 'Yes, order 20 iPhone 15, 15 Samsung A54, and 12 iPhone 14 screens.' },
      { sender: 'ai', text: 'Purchase order #PO-2847 created and emailed to ScreenWorld Supplies.\n\n• iPhone 15 Screen x 20\n• Samsung A54 Screen x 15\n• iPhone 14 Screen x 12\n\nTotal: GHC 8,460. Supplier confirmed receipt.' },
    ],
  },
];

function AIAvatar({ shimmer = false }: { shimmer?: boolean }) {
  return (
    <div className="relative w-8 h-8 shrink-0 m-1">
      {/* Spiky shimmer - only when typing */}
      {shimmer && (
        <div className="absolute inset-[-4px] rounded-full" style={{ background: 'conic-gradient(from 0deg, #fbbf24, #d97706, transparent, #fbbf24, transparent, #d97706, #fbbf24)', animation: 'spin 2.5s linear infinite', mask: 'radial-gradient(circle, transparent 55%, black 56%)', WebkitMask: 'radial-gradient(circle, transparent 55%, black 56%)' }} />
      )}
      <Image src="/luxe-ai-sphere.png" alt="Luxe AI" width={32} height={32} className="relative rounded-full w-full h-full object-cover" />
    </div>
  );
}

function UserAvatar() {
  return <Image src="/profile-picture.png" alt="" width={24} height={24} className="rounded-full w-6 h-6 shrink-0 object-cover" />;
}

export default function AIShowcaseSection() {
  const shouldReduceMotion = useReducedMotion();
  const [convoIndex, setConvoIndex] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const currentConvo = conversations[convoIndex];
  const currentMessage = currentConvo.messages[visibleMessages];

  useEffect(() => {
    if (shouldReduceMotion) {
      setVisibleMessages(currentConvo.messages.length);
      return;
    }

    if (visibleMessages >= currentConvo.messages.length) {
      // All messages shown, wait then move to next conversation
      const timeout = setTimeout(() => {
        setConvoIndex((prev) => (prev + 1) % conversations.length);
        setVisibleMessages(0);
        setTypedText('');
      }, 3000);
      return () => clearTimeout(timeout);
    }

    // Type out current message character by character
    const msg = currentConvo.messages[visibleMessages];
    setIsTyping(true);
    setTypedText('');
    let charIndex = 0;

    intervalRef.current = setInterval(() => {
      if (charIndex < msg.text.length) {
        setTypedText(msg.text.slice(0, charIndex + 1));
        charIndex++;
      } else {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setIsTyping(false);
        // Wait before showing next message
        setTimeout(() => {
          setVisibleMessages((prev) => prev + 1);
        }, 800);
      }
    }, 20);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [visibleMessages, convoIndex, currentConvo.messages, shouldReduceMotion]);

  const fadeUp = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 32 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-80px' },
      };

  return (
    <section className="relative py-10 md:py-14 lg:py-16 px-4 sm:px-6 md:px-8 overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-600/4 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl">
        {/* Header */}
        <motion.div
          className="text-center mb-10 md:mb-14"
          transition={{ duration: 0.6 }}
          {...fadeUp}
        >
          <span className="inline-block text-xs font-medium tracking-[0.15em] uppercase text-blue-400 mb-4">
            AI For Business
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[48px] text-white leading-[1.1] font-medium">
            Your AI that actually works.
          </h2>
          <p className="mt-4 text-sm md:text-base text-neutral-500 leading-relaxed max-w-lg mx-auto">
            From sales insights to customer retention to purchase orders — watch it in action.
          </p>
        </motion.div>

        {/* Chat area - directly on section */}
        <motion.div
          className="max-w-2xl mx-auto"
          transition={{ duration: 0.7, delay: 0.1 }}
          {...fadeUp}
        >
          {/* Current conversation label - slides between names */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/[0.1]" />
            <motion.span
              key={convoIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-xs font-medium tracking-wide uppercase text-neutral-400"
            >
              {currentConvo.title}
            </motion.span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/[0.1]" />
          </div>

          {/* Messages */}
          <div className="h-[380px] md:h-[420px] flex flex-col justify-end space-y-4 overflow-hidden">
            {currentConvo.messages.slice(0, visibleMessages).map((msg, idx) => (
              <div key={`${convoIndex}-${idx}`} className={`flex items-start gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                {msg.sender === 'ai' ? <AIAvatar /> : <UserAvatar />}
                <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  msg.sender === 'ai'
                    ? 'bg-white/[0.06] backdrop-blur-md border border-white/[0.08] rounded-tl-sm'
                    : 'bg-white/[0.08] backdrop-blur-md border border-white/[0.1] rounded-tr-sm'
                }`}>
                  {msg.label && <p className="text-[9px] text-green-400 font-medium mb-1">{msg.label}</p>}
                  <p className="text-[13px] text-neutral-200 leading-relaxed whitespace-pre-line">{msg.text}</p>
                </div>
              </div>
            ))}

            {/* Currently typing message */}
            {visibleMessages < currentConvo.messages.length && typedText && (
              <div className={`flex items-start gap-3 ${currentMessage?.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                {currentMessage?.sender === 'ai' ? <AIAvatar shimmer /> : <UserAvatar />}
                <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  currentMessage?.sender === 'ai'
                    ? 'bg-white/[0.06] backdrop-blur-md border border-white/[0.08] rounded-tl-sm'
                    : 'bg-white/[0.08] backdrop-blur-md border border-white/[0.1] rounded-tr-sm'
                }`}>
                  {currentMessage?.label && <p className="text-[9px] text-green-400 font-medium mb-1">{currentMessage.label}</p>}
                  <p className="text-[13px] text-neutral-200 leading-relaxed whitespace-pre-line">{typedText}{isTyping && <span className="animate-pulse">|</span>}</p>
                </div>
              </div>
            )}

            {/* End-of-conversation branding */}
            {visibleMessages >= currentConvo.messages.length && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center py-6"
              >
                <div className="relative w-10 h-10 mb-3">
                  <div className="absolute inset-[-4px] rounded-full" style={{ background: 'conic-gradient(from 0deg, #fbbf24, #d97706, transparent, #fbbf24, transparent, #d97706, #fbbf24)', animation: 'spin 2.5s linear infinite', mask: 'radial-gradient(circle, transparent 55%, black 56%)', WebkitMask: 'radial-gradient(circle, transparent 55%, black 56%)' }} />
                  <Image src="/luxe-ai-sphere.png" alt="Luxe AI" width={40} height={40} className="relative rounded-full w-full h-full object-cover" />
                </div>
                <p className="text-sm font-semibold text-white">Luxe AI</p>
                <p className="text-xs text-neutral-500 mt-0.5">Intelligence that never sleeps.</p>
              </motion.div>
            )}
          </div>

          {/* Progress indicator - dots showing which conversation */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {conversations.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => { setConvoIndex(idx); setVisibleMessages(0); setTypedText(''); }}
                className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                  idx === convoIndex ? 'w-6 bg-blue-400' : 'w-1.5 bg-neutral-700'
                }`}
                aria-label={`View ${conversations[idx].title}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Bottom: AI capabilities - horizontal on all screens */}
        <motion.div
          className="mt-10 md:mt-16 flex flex-row justify-center gap-6 md:gap-8 flex-wrap"
          transition={{ duration: 0.7, delay: 0.3 }}
          {...fadeUp}
        >
          {[
            { title: 'AI Intelligence', desc: 'Ask anything in plain language.' },
            { title: 'AI WhatsApp', desc: 'Manage stock via conversation.' },
            { title: 'AI Retention', desc: 'Re-engage customers automatically.' },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <h4 className="text-xs font-medium text-white">{item.title}</h4>
              <p className="text-[11px] text-neutral-500 mt-0.5">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
