'use client';

import { motion } from 'framer-motion';
import { User, Award, Shield, Zap } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';

const players = [
  { name: 'Kévin Abogo', sport: 'Football', position: 'Gardien de but', year: 'Terminale TI' },
  { name: 'Yasmine Eboa', sport: 'Basketball', position: 'Meneuse', year: '1ère D' },
  { name: 'Marc-Aurèle Noah', sport: 'Natation', position: 'Nageur de fond', year: '6ème' },
  { name: 'Sarah Bitjoka', sport: 'Football', position: 'Attaquante', year: '2nde C' },
];

export default function PlayersProfilePage() {
  return (
    <div className="pb-24">
      {/* Hero Players */}
      <section className="bg-csbie-secondary py-20 text-white text-center">
        <div className="section-container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-titles font-bold mb-4"
          >
            Profils des Joueurs
          </motion.h1>
          <div className="w-24 h-1 bg-csbie-gold mx-auto rounded-full mb-6" />
          <p className="text-xl opacity-90 font-body max-w-2xl mx-auto">
            Découvrez les visages et les parcours de nos athlètes prometteurs du CSBIE.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="section-container">
          <SectionTitle 
            title="Nos Athlètes d'Élite" 
            subtitle="Chaque joueur est un futur champion en quête d'excellence académique et sportive."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {players.map((player, i) => (
              <motion.div
                key={player.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-csbie-secondary/5 rounded-bl-full" />
                <div className="h-48 bg-gradient-to-br from-zinc-200 to-zinc-400 rounded-2xl flex items-center justify-center text-zinc-500 mb-6 group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                   <User size={80} />
                </div>
                <div className="inline-block px-3 py-1 bg-csbie-gold text-white text-[10px] font-ui font-bold uppercase tracking-widest rounded-full mb-3">
                   {player.sport}
                </div>
                <h3 className="font-titles text-2xl font-bold text-csbie-primary mb-1">
                   {player.name}
                </h3>
                <p className="text-csbie-secondary font-ui font-bold text-sm mb-4">
                   {player.position}
                </p>
                <div className="pt-4 border-t border-zinc-100 flex items-center gap-2">
                   <Shield size={14} className="text-csbie-gold" />
                   <p className="text-csbie-text/50 font-ui text-xs font-bold uppercase tracking-widest">{player.year}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="font-ui text-csbie-text/50 uppercase tracking-widest text-xs mb-4">Prochainement</p>
            <h3 className="font-titles text-2xl font-bold text-csbie-primary mb-4 opacity-50">Intégration des Statistiques en Direct</h3>
            <div className="inline-block px-8 py-3 bg-zinc-50 border border-zinc-200 text-zinc-400 font-ui font-bold rounded-full">
               Fonctionnalité en cours de développement via Sanity CMS
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
