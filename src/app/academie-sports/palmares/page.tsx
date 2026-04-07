'use client';

import { motion } from 'framer-motion';
import { Trophy, Calendar, Medal, Award } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';

const achievements = [
  { year: '2024', title: 'Champion de Yaoundé (U17)', sport: 'Football', description: 'Une victoire historique lors du tournoi inter-scolaire.' },
  { year: '2023', title: 'Médaille d\'Or Régionale', sport: 'Basketball (Garçons)', description: 'Performance exceptionnelle dans la catégorie minime.' },
  { year: '2023', title: 'Finaliste National', sport: 'Natation', description: '3 podiums individuels lors des championnats nationaux jeunes.' },
  { year: '2022', title: 'Prix de la Discipline', sport: 'Omnisports', description: 'Décerné par la Fédération Scolaire pour le fair-play exemplaire.' },
];

export default function PalmaresPage() {
  return (
    <div className="pb-24">
      {/* Hero Palmares */}
      <section className="bg-csbie-gold py-20 text-white text-center">
        <div className="section-container">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-titles font-bold mb-4"
          >
            Le Palmarès des Champions
          </motion.h1>
          <div className="w-24 h-1 bg-white mx-auto rounded-full mb-6" />
          <p className="text-xl opacity-90 font-body max-w-2xl mx-auto">
            Célébrons les victoires et l'esprit de conquête de nos athlètes du CSBIE.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {achievements.map((achievement, i) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6 bg-white p-10 rounded-[3rem] border border-zinc-100 shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 text-csbie-gold">
                  <Trophy size={120} />
                </div>
                <div className="h-fit bg-csbie-gold/10 p-4 rounded-2xl text-csbie-gold shrink-0">
                  <Trophy size={32} />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-csbie-primary text-white px-3 py-1 rounded-full text-xs font-ui font-bold">
                      {achievement.year}
                    </span>
                    <span className="text-csbie-gold font-ui font-bold text-xs uppercase tracking-widest">
                      {achievement.sport}
                    </span>
                  </div>
                  <h3 className="font-titles text-2xl font-bold text-csbie-primary mb-3">
                    {achievement.title}
                  </h3>
                  <p className="font-body text-csbie-text/70 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 p-16 bg-csbie-primary rounded-[4rem] text-center text-white relative overflow-hidden">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <p className="text-5xl font-titles font-bold text-csbie-gold mb-2">12</p>
                  <p className="text-xs font-ui uppercase tracking-widest text-white/50">Trophées Majeurs</p>
                </div>
                <div>
                  <p className="text-5xl font-titles font-bold text-csbie-gold mb-2">45</p>
                  <p className="text-xs font-ui uppercase tracking-widest text-white/50">Médailles d'Or</p>
                </div>
                <div>
                  <p className="text-5xl font-titles font-bold text-csbie-gold mb-2">150+</p>
                  <p className="text-xs font-ui uppercase tracking-widest text-white/50">Compétitions</p>
                </div>
                <div>
                  <p className="text-5xl font-titles font-bold text-csbie-gold mb-2">8</p>
                  <p className="text-xs font-ui uppercase tracking-widest text-white/50">Experts Certifiés</p>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
