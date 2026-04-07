'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { Users, TrendingUp, BookOpen, Star } from 'lucide-react';
import { fadeInUp, scaleIn } from '@/lib/animations';

const icons: Record<string, React.ElementType> = {
  Users, TrendingUp, BookOpen, Star,
};

interface StatCounterProps {
  valeur: number;
  suffixe?: string;
  libelle: string;
  icone?: string;
}

export default function StatCounter({ valeur, suffixe = '', libelle, icone = 'Star' }: StatCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const springConfig = { damping: 30, stiffness: 100, restDelta: 0.001 };
  const count = useSpring(0, springConfig);
  const rounded = useTransform(count, (latest) => Math.floor(latest).toLocaleString());

  useEffect(() => {
    if (isInView) {
      count.set(valeur);
    }
  }, [isInView, valeur, count]);

  const Icon = icons[icone] || Star;

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="flex flex-col items-center gap-6 p-10 bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-zinc-100 group"
    >
      <motion.div 
        variants={scaleIn}
        className="w-20 h-20 bg-csbie-primary/5 rounded-3xl flex items-center justify-center group-hover:bg-csbie-primary group-hover:text-white transition-colors duration-500"
      >
        <Icon size={36} className="text-csbie-primary group-hover:text-white transition-colors duration-500" />
      </motion.div>
      
      <div className="text-center">
        <motion.p className="font-titles text-5xl font-bold text-csbie-primary mb-2">
          <motion.span>{rounded}</motion.span>{suffixe}
        </motion.p>
        <p className="font-ui text-csbie-text/50 text-xs font-bold uppercase tracking-widest">{libelle}</p>
      </div>
      
      <div className="w-10 h-1 bg-csbie-gold/20 rounded-full group-hover:w-20 group-hover:bg-csbie-gold transition-all duration-500" />
    </motion.div>
  );
}
