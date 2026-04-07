'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  titre: string;
  contenu: React.ReactNode;
  defaultOpen?: boolean;
}

export default function AccordionItem({ titre, contenu, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-csbie-primary/15 rounded-lg overflow-hidden mb-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-5 bg-white hover:bg-csbie-primary/3 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-ui font-semibold text-csbie-primary text-left">{titre}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={20} className="text-csbie-gold shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-5 pb-5 pt-2 font-body text-csbie-text/80 text-sm leading-relaxed border-t border-csbie-primary/10 bg-gray-50/50">
              {contenu}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
