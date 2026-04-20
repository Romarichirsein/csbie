'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function MotFondatrice() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-zinc-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-csbie-gold/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-csbie-primary/5 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3" />

      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-csbie-gold font-ui text-xs font-black uppercase tracking-[0.3em] mb-4">
              Mot de la Fondatrice
            </span>
            <h2 className="text-4xl md:text-5xl font-titles font-black text-csbie-primary leading-tight">
              Crescence <span className="text-csbie-gold italic">BABOKÉ</span>
            </h2>
            <div className="w-20 h-1 bg-csbie-gold mx-auto mt-6 rounded-full" />
          </motion.div>

          {/* Quote card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative quote icon */}
            <div className="absolute -top-8 left-8 md:left-12 z-20">
              <div className="w-16 h-16 bg-csbie-gold rounded-2xl flex items-center justify-center shadow-xl shadow-csbie-gold/30 rotate-3">
                <Quote size={28} className="text-white" />
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] shadow-[0_20px_80px_rgba(0,0,0,0.08)] border border-zinc-100 p-8 md:p-14 pt-12 md:pt-16 relative overflow-hidden">
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-csbie-gold/3 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-csbie-primary/3 rounded-full blur-3xl" />

              <div className="relative z-10 space-y-6">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-2xl md:text-3xl font-titles font-black text-csbie-primary leading-tight"
                >
                  DÉCOUVREZ L&apos;EXCELLENCE AU{' '}
                  <span className="text-csbie-gold">CSBIE</span> !
                </motion.h3>

                <div className="space-y-5 text-base md:text-lg font-body text-csbie-text/80 leading-relaxed">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    Au <strong className="text-csbie-primary font-semibold">CSBIE</strong>, nous ne formons pas seulement des élèves, nous formons les{' '}
                    <strong className="text-csbie-primary font-semibold">leaders de demain</strong>. Établissement mixte de référence, nous offrons un enseignement académique de haut niveau combiné à un programme sportif dynamique en{' '}
                    <span className="text-csbie-gold font-semibold">football, basketball et natation</span>, encadré par des professionnels expérimentés.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    Nous accompagnons également nos élèves vers l&apos;international grâce à des procédures simplifiées pour la poursuite des études à l&apos;étranger, ouvrant ainsi les portes des{' '}
                    <strong className="text-csbie-primary font-semibold">meilleures universités du monde</strong>.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    Les apprenants du système Cambridge bénéficient d&apos;un{' '}
                    <strong className="text-csbie-gold font-semibold">iPad personnel</strong>, pour un apprentissage moderne, interactif et connecté au monde numérique.
                  </motion.p>
                </div>

                {/* Highlight banner */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="bg-gradient-to-r from-csbie-primary to-csbie-primary/90 rounded-2xl p-6 md:p-8 mt-8"
                >
                  <p className="text-white font-titles font-bold text-lg md:text-xl text-center leading-relaxed">
                    CSBIE – <span className="text-csbie-gold">Excellence académique</span>, talents sportifs, ouverture internationale.
                  </p>
                  <p className="text-white/80 font-body text-center mt-3 text-base md:text-lg italic">
                    Votre enfant mérite le meilleur. Offrez-lui le CSBIE.
                  </p>
                </motion.div>

                {/* Signature */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="flex items-center justify-end gap-4 pt-4"
                >
                  <div className="text-right">
                    <p className="font-titles font-black text-csbie-primary text-lg">Crescence BABOKÉ</p>
                    <p className="text-csbie-gold font-ui text-xs font-bold uppercase tracking-widest">Fondatrice du CSBIE</p>
                  </div>
                  <div className="w-12 h-12 bg-csbie-gold/10 rounded-full flex items-center justify-center border-2 border-csbie-gold/30">
                    <span className="font-titles font-black text-csbie-gold text-lg">CB</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
