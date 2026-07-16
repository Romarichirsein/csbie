'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Award, Trophy, Star } from 'lucide-react';

const resultsData = [
  {
    image: '/images/results/CEP.jpeg',
    alt: 'CSBIE 100% CEP — Complexe scolaire bilingue international Espérance résultats officiels',
    exam: '100 % de réussite au CEP',
    description:
      'Une performance exceptionnelle qui reflète le sérieux de nos enseignants et la détermination de nos élèves.',
    icon: Award,
    hasButton: true,
  },
  {
    image: '/images/results/fslc.jpeg',
    alt: 'CSBIE 100% FSLC — Excellence académique Cameroun',
    exam: '100 % de réussite au FSLC',
    description:
      'Nos élèves démontrent une excellente maîtrise de leur parcours bilingue.',
    icon: Star,
    hasButton: false,
  },
  {
    image: '/images/results/BEPC.jpeg',
    alt: 'CSBIE 100% BEPC — Performance Complexe scolaire bilingue international Espérance',
    exam: '100 % de réussite au BEPC',
    subtitle: 'Séries Espagnole et Allemande.',
    description:
      'Le succès de nos élèves confirme notre ambition de former les leaders de demain.',
    icon: Trophy,
    hasButton: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function AcademicResults() {
  return (
    <section
      id="resultats-academiques"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FAFBFF 0%, #FFFFFF 40%, #F8F9FE 100%)' }}
    >
      {/* Subtle decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-[0.03] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #1B2D6B 0%, transparent 70%)' }}
      />
      <div className="absolute top-20 right-0 w-72 h-72 bg-csbie-gold/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-csbie-primary/[0.04] rounded-full blur-3xl pointer-events-none" />

      {/* Thin gold accent line top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-csbie-gold to-transparent" />

      <div className="section-container relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          {/* Decorative badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 mb-6 bg-csbie-gold/10 border border-csbie-gold/20 rounded-full">
            <Trophy size={16} className="text-csbie-gold" />
            <span className="text-csbie-gold font-ui font-bold text-xs uppercase tracking-[0.15em]">
              Résultats 2025
            </span>
            <Trophy size={16} className="text-csbie-gold" />
          </div>

          {/* Emoji title */}
          <p className="text-3xl mb-4">🎉</p>

          <h2 className="font-titles text-3xl sm:text-4xl md:text-5xl font-extrabold text-csbie-primary leading-tight mb-5">
            L&apos;Excellence qui parle d&apos;elle-même
          </h2>

          {/* Gold decorative divider */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-csbie-gold" />
            <div className="w-2 h-2 bg-csbie-gold rounded-full" />
            <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-csbie-gold" />
          </div>

          <p className="font-body max-w-2xl mx-auto text-base sm:text-lg text-csbie-text/65 leading-relaxed">
            Les résultats de nos élèves témoignent de la qualité de notre enseignement
            et de notre engagement envers l&apos;excellence académique.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {resultsData.map((result, index) => {
            const IconComponent = result.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="group relative bg-white rounded-[20px] overflow-hidden shadow-[0_4px_30px_rgba(27,45,107,0.08)] hover:shadow-[0_20px_60px_rgba(27,45,107,0.15)] transition-shadow duration-300"
              >
                {/* Image container */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={result.image}
                    alt={result.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                    loading="lazy"
                    quality={85}
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-csbie-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content area */}
                <div className="p-6 md:p-7">
                  {/* Icon + Exam title */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-csbie-gold/10 flex items-center justify-center mt-0.5">
                      <IconComponent size={20} className="text-csbie-gold" />
                    </div>
                    <div>
                      <h3 className="font-titles text-xl font-bold text-csbie-primary leading-snug">
                        {result.exam}
                      </h3>
                      {result.subtitle && (
                        <p className="font-ui text-sm font-semibold text-csbie-gold mt-1">
                          {result.subtitle}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-body text-csbie-text/65 text-sm leading-relaxed ml-[52px]">
                    {result.description}
                  </p>

                  {/* CTA Button (only on first card) */}
                  {result.hasButton && (
                    <div className="mt-5 ml-[52px]">
                      <Link
                        href="/admission"
                        className="inline-flex items-center gap-2 text-csbie-primary font-ui font-bold text-xs uppercase tracking-widest hover:text-csbie-gold transition-colors duration-300 group/btn"
                      >
                        Découvrir notre école
                        <ArrowRight
                          size={14}
                          className="transition-transform duration-300 group-hover/btn:translate-x-1"
                        />
                      </Link>
                    </div>
                  )}
                </div>

                {/* Bottom accent line */}
                <div className="h-1 w-full bg-gradient-to-r from-csbie-primary via-csbie-gold to-csbie-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom trust message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 md:mt-20"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-csbie-primary/[0.04] border border-csbie-primary/10 rounded-full">
            <div className="flex -space-x-1.5">
              <div className="w-5 h-5 rounded-full bg-csbie-gold flex items-center justify-center">
                <span className="text-white text-[8px] font-bold">✓</span>
              </div>
              <div className="w-5 h-5 rounded-full bg-csbie-primary flex items-center justify-center">
                <span className="text-white text-[8px] font-bold">✓</span>
              </div>
              <div className="w-5 h-5 rounded-full bg-csbie-secondary flex items-center justify-center">
                <span className="text-white text-[8px] font-bold">✓</span>
              </div>
            </div>
            <span className="font-ui text-xs font-semibold text-csbie-primary/80 tracking-wide">
              Résultats officiels vérifiés — Session 2025
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
