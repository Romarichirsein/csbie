'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CambridgeSwitcherProps {
  onLanguageChange: (lang: 'fr' | 'en') => void;
  currentLang: 'fr' | 'en';
}

export default function CambridgeSwitcher({ onLanguageChange, currentLang }: CambridgeSwitcherProps) {
  return (
    <div className="flex p-1 bg-zinc-100 rounded-xl w-fit mx-auto border border-zinc-200">
      <button
        onClick={() => onLanguageChange('fr')}
        className={`px-6 py-2 rounded-lg font-ui font-bold text-sm transition-all ${
          currentLang === 'fr' ? 'bg-csbie-primary text-white shadow-lg' : 'text-csbie-text/50 hover:text-csbie-text'
        }`}
      >
        Français
      </button>
      <button
        onClick={() => onLanguageChange('en')}
        className={`px-6 py-2 rounded-lg font-ui font-bold text-sm transition-all ${
          currentLang === 'en' ? 'bg-csbie-primary text-white shadow-lg' : 'text-csbie-text/50 hover:text-csbie-text'
        }`}
      >
        English
      </button>
    </div>
  );
}
