'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative h-[calc(100vh-80px)] lg:h-[calc(100vh-96px)] w-full overflow-hidden bg-csbie-primary">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/hero-home.jpeg"
          alt="CSBIE Campus"
          fill
          priority
          className="object-cover object-center scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-csbie-primary/95 via-csbie-primary/70 to-transparent z-1" />
      </motion.div>

      {/* Content */}
      <div className="section-container relative z-10 h-full flex flex-col justify-center items-start text-white">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-csbie-gold text-white text-sm font-ui font-semibold uppercase tracking-wider shadow-lg"
          >
            L'excellence bilingue à Yaoundé
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-titles font-bold leading-[1.1] mb-6 text-white"
          >
            Façonner les <span className="text-csbie-gold">leaders</span> de demain par le <span className="italic">Sports & Études</span>.
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-white/90 font-body max-w-2xl mb-10 leading-relaxed"
          >
            Le Complexe Scolaire Bilingue International Espérance offre un cadre d'apprentissage d'exception combinant prestige académique et épanouissement sportif.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/admission"
              className="px-8 py-4 bg-csbie-gold hover:brightness-110 text-white font-ui font-bold rounded-lg transition-all flex items-center justify-center gap-2 group shadow-xl hover:scale-105 active:scale-95"
            >
              Inscrire mon enfant
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/etablissement"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-ui font-bold rounded-lg transition-all flex items-center justify-center hover:scale-105 active:scale-95"
            >
              Découvrir notre école
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 text-white/60 text-sm font-ui"
        >
          <span>Découvrir</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
