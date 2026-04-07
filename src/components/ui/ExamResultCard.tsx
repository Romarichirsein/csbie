'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

interface ExamResultCardProps {
  nomExamen: string;
  taux: number;
  description?: string;
  annee?: string;
}

export default function ExamResultCard({ nomExamen, taux, description, annee }: ExamResultCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="bg-white border border-csbie-gold/30 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden"
    >
      {/* Accent doré en arrière-plan */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-csbie-gold/5 rounded-bl-full" />

      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="font-ui text-xs text-csbie-secondary uppercase tracking-wider mb-1">{annee}</p>
          <h3 className="font-titles text-csbie-primary font-bold text-xl">{nomExamen}</h3>
        </div>
        <CheckCircle className="text-csbie-gold shrink-0 mt-1" size={28} />
      </div>

      {/* Barre de progression animée */}
      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <span className="font-ui text-xs text-csbie-text/60">Taux de réussite</span>
          <span className="font-ui font-bold text-csbie-gold">{taux}%</span>
        </div>
        <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${taux}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
            className="h-full bg-gradient-to-r from-csbie-gold to-csbie-secondary rounded-full"
          />
        </div>
      </div>

      {description && (
        <p className="font-body text-csbie-text/70 text-sm leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
