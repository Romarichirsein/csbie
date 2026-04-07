'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Trophy, Globe2, School } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const pillars = [
  {
    title: 'Excellence Académique',
    description: 'Un double cursus d\'exception : Programme National et Programme International Cambridge.',
    icon: GraduationCap,
    color: 'bg-csbie-primary',
  },
  {
    title: 'Académie de Sports',
    description: 'Une véritable filière de champions alliant rigueur sportive et réussite scolaire.',
    icon: Trophy,
    color: 'bg-csbie-gold',
  },
  {
    title: 'Éducation Bilingue',
    description: 'Maîtrise parfaite du français et de l\'anglais pour une ouverture sur le monde.',
    icon: Globe2,
    color: 'bg-csbie-secondary',
  },
  {
    title: 'Cadre d\'Élite',
    description: 'Des infrastructures modernes et sécurisées propices à l\'épanouissement.',
    icon: School,
    color: 'bg-csbie-accent',
  },
];

export default function FourPillars() {
  return (
    <section className="py-24 bg-zinc-50 overflow-hidden">
      <div className="section-container">
        <SectionTitle 
          title="Les 4 Piliers de Notre Réussite" 
          subtitle="Au Complexe Scolaire Bilingue International Espérance, nous construisons l'avenir sur des bases solides d'excellence et d'innovation."
        />

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={fadeInUp}
              whileHover={{ 
                y: -12,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-zinc-100 flex flex-col group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-csbie-gold/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700" />
              
              <div className={`${pillar.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                <pillar.icon size={30} />
              </div>
              <h3 className="font-titles font-bold text-2xl text-csbie-primary mb-4 group-hover:text-csbie-gold transition-colors duration-300">
                {pillar.title}
              </h3>
              <p className="font-body text-csbie-text/70 leading-relaxed">
                {pillar.description}
              </p>
              
              <div className="mt-8 pt-6 border-t border-zinc-50 flex items-center text-csbie-gold font-ui font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                En savoir plus
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
