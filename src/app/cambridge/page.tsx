'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';
import CambridgeSwitcher from '@/components/ui/CambridgeSwitcher';
import { BookOpen, Globe, Music, FlaskConical, Newspaper, Leaf, GraduationCap, CheckCircle } from 'lucide-react';

const content = {
  fr: {
    hero: 'Le Programme International Cambridge au CSBIE',
    subtitle: 'Une éducation de renommée mondiale pour les leaders de demain.',
    messageTitle: 'Message du Principal de la Section Cambridge',
    messageText: 'Notre mission est de préparer les élèves à réussir dans un monde de plus en plus globalisé. Le curriculum Cambridge offre un parcours flexible et stimulant.',
    yearsTitle: 'Structure des Études (Years 7-13)',
    examsTitle: 'Certifications & Examens',
    clubsTitle: 'Clubs & Activités du Mercredi',
  },
  en: {
    hero: 'Cambridge International Programme at CSBIE',
    subtitle: 'World-class education for the leaders of tomorrow.',
    messageTitle: 'Message from the Head of Cambridge Section',
    messageText: 'Our mission is to prepare students for success in an increasingly globalized world. The Cambridge curriculum provides a flexible and stimulating pathway.',
    yearsTitle: 'Academic Structure (Years 7-13)',
    examsTitle: 'Certifications & Examinations',
    clubsTitle: 'Wednesday Clubs & Activities',
  }
};

const examLevels = [
  { name: 'Cambridge Checkpoint', description: 'Fin de Secondary 1 (Year 9)' },
  { name: 'Cambridge IGCSE', description: 'International General Certificate of Secondary Education (Year 11)' },
  { name: 'Cambridge AS & A Level', description: 'Advanced Subsidiary & Advanced Level (Year 12 & 13)' },
];

const clubs = [
  { icon: Music, name: 'Club de Musique', description: 'Éveil aux instruments et chant choral.' },
  { icon: FlaskConical, name: 'Sciences & Robotique', description: 'Expérimentations et programmation.' },
  { icon: Newspaper, name: 'Journalisme', description: 'Rédaction du journal de l\'école.' },
  { icon: Leaf, name: 'Environnement', description: 'Éducation durable et jardinage.' },
];

import { fadeInUp, staggerContainer, sectionReveal, scaleIn, float } from '@/lib/animations';

export default function CambridgePage() {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');

  const t = content[lang];

  return (
    <div className="pb-32 bg-white">
      {/* Hero Section */}
      <section className="bg-zinc-50 py-32 border-b border-zinc-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
        <div className="section-container relative z-10">
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="flex justify-center mb-16"
          >
            <CambridgeSwitcher onLanguageChange={setLang} currentLang={lang} />
          </motion.div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={lang}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "circOut" }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-titles font-bold text-csbie-primary mb-8 leading-tight tracking-tight">
                {t.hero.split(' ').map((word, i) => (
                  <span key={i} className={word === 'Cambridge' ? 'text-csbie-gold' : ''}>{word} </span>
                ))}
              </h1>
              <p className="text-xl md:text-2xl text-csbie-text/60 font-body max-w-4xl mx-auto leading-relaxed">
                {t.subtitle}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Message & Overview */}
      <section className="py-32 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-csbie-primary/5 -z-10 blur-[120px]" />
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              variants={sectionReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-zinc-50 group">
                <Image
                  src="/hero-bg.png"
                  alt="Principal Section Cambridge"
                  width={600}
                  height={500}
                  className="object-cover h-[600px] group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
              </div>
              <motion.div 
                variants={float}
                animate="animate"
                className="absolute -bottom-10 -right-10 bg-csbie-gold text-white p-10 rounded-[2.5rem] shadow-3xl max-w-xs border-8 border-white"
              >
                <div className="w-12 h-1 bg-white/30 mb-6 rounded-full" />
                <blockquote className="font-titles italic text-xl leading-relaxed">"Excellence is not an act, but a habit."</blockquote>
                <p className="mt-4 font-ui text-xs font-bold uppercase tracking-widest opacity-70">— Aristotle</p>
              </motion.div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2 variants={fadeInUp} className="font-titles font-bold text-4xl md:text-5xl text-csbie-primary mb-8 leading-tight">
                {t.messageTitle}
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl text-csbie-text/70 font-body leading-relaxed mb-10">
                {t.messageText}
              </motion.p>
              
              <div className="space-y-6">
                {[
                  "Curriculum rigoureux et reconnu par l'UCAS",
                  "Enseignants certifiés par Cambridge International",
                  "Environnement d'études moderne et technologique"
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    className="flex items-center gap-5 p-5 bg-zinc-50 rounded-2xl hover:bg-csbie-gold/10 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-csbie-gold/10 rounded-full flex items-center justify-center group-hover:bg-csbie-gold group-hover:text-white transition-all">
                      <CheckCircle size={22} className="text-csbie-gold group-hover:text-white" />
                    </div>
                    <span className="text-csbie-primary font-ui font-bold text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Exams Grid */}
      <section className="py-32 bg-csbie-primary text-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
        
        <div className="section-container relative z-10">
          <SectionTitle title={t.examsTitle} gold />
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20"
          >
            {examLevels.map((exam, i) => (
              <motion.div
                key={exam.name}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/10 p-12 rounded-[3rem] hover:bg-white/10 transition-all border-t-[10px] border-t-csbie-gold flex flex-col group"
              >
                <div className="bg-csbie-gold w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-white text-xl mb-8 shadow-xl group-hover:rotate-6 transition-transform">
                  {i + 1}
                </div>
                <h3 className="font-titles font-bold text-2xl mb-4 text-csbie-gold leading-tight">{exam.name}</h3>
                <p className="text-white/60 font-ui leading-relaxed text-lg flex-grow">{exam.description}</p>
                <div className="mt-10 pt-6 border-t border-white/5 flex items-center gap-3 text-white/40 text-xs font-bold uppercase tracking-widest">
                  <GraduationCap size={16} />
                  Détails du programme
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Clubs */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-csbie-gold/5 rounded-full blur-[100px]" />
        
        <div className="section-container relative z-10">
          <SectionTitle title={t.clubsTitle} />
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-20"
          >
            {clubs.map((club) => (
              <motion.div
                key={club.name}
                variants={scaleIn}
                whileHover={{ y: -12 }}
                className="group flex flex-col items-center text-center p-10 bg-zinc-50 rounded-[2.5rem] hover:bg-white hover:shadow-2xl transition-all duration-500 border border-zinc-100 h-full"
              >
                <div className="w-20 h-20 bg-csbie-primary rounded-3xl flex items-center justify-center text-white mb-8 group-hover:bg-csbie-gold group-hover:rotate-6 transition-all duration-500 shadow-xl group-hover:scale-110">
                  <club.icon size={40} />
                </div>
                <h4 className="font-titles font-bold text-2xl text-csbie-primary mb-4 group-hover:text-csbie-gold transition-colors">{club.name}</h4>
                <p className="text-csbie-text/50 font-body leading-relaxed">{club.description}</p>
                <div className="mt-8 w-12 h-1 bg-csbie-primary/10 group-hover:w-full group-hover:bg-csbie-gold transition-all duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
