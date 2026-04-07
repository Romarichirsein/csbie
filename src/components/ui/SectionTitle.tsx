'use client';

import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  gold?: boolean;
}

export default function SectionTitle({ title, subtitle, align = 'center', gold = false }: SectionTitleProps) {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }[align];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col gap-3 mb-12 ${alignClass}`}
    >
      {/* Trait décoratif doré */}
      <div className="flex items-center gap-3">
        <div className="h-[2px] w-8 bg-csbie-gold" />
        <span className="text-csbie-gold font-ui text-xs font-semibold uppercase tracking-widest">Excellence</span>
        <div className="h-[2px] w-8 bg-csbie-gold" />
      </div>

      <h2 className={`font-titles text-3xl sm:text-4xl font-bold ${gold ? 'text-white' : 'text-csbie-primary'} leading-tight`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`font-body max-w-2xl text-base sm:text-lg leading-relaxed ${gold ? 'text-white/70' : 'text-csbie-text/70'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
