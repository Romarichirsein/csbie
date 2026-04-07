'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';
import { Target, Eye, ShieldCheck, HeartPulse, Sparkles, BookOpen } from 'lucide-react';

const values = [
  { icon: Target, title: 'Mission', text: 'Offrir une éducation bilingue d\'excellence alliant rigueur académique et développement sportif pour former des citoyens du monde.' },
  { icon: Eye, title: 'Vision', text: 'Devenir le complexe scolaire de référence au Cameroun, reconnu pour son innovation pédagogique et ses résultats exceptionnels.' },
  { icon: ShieldCheck, title: 'Valeurs', text: 'Discipline, Travail, Excellence, Solidarité et Respect sont les piliers qui guident chacune de nos actions.' },
];

export default function EtablissementPage() {
  return (
    <div className="pb-24">
      {/* Hero Presentation */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/hero-bg.png" // Placeholder
          alt="Présentation CSBIE"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-csbie-primary/80 backdrop-blur-sm" />
        <div className="section-container relative z-10 text-white text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-titles font-bold mb-6 text-white"
          >
            Notre Établissement
          </motion.h1>
          <div className="h-1 w-20 bg-csbie-gold mx-auto rounded-full" />
        </div>
      </section>

      {/* Histoire & Mot du Fondateur */}
      <section className="py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <SectionTitle 
                title="L'Héritage de l'Excellence" 
                subtitle="Depuis plus de deux décennies, le CSBIE façonne les leaders de demain à Yaoundé."
                align="left"
              />
              <p className="font-body text-csbie-text/80 text-lg leading-relaxed">
                Fondé avec la conviction que chaque enfant porte en lui un potentiel illimité, le Complexe Scolaire Bilingue International Espérance s'est imposé comme une institution de prestige au Cameroun.
              </p>
              <p className="font-body text-csbie-text/70 leading-relaxed">
                Notre approche unique combine les exigences du programme national camerounais avec l'ouverture internationale du système Cambridge, le tout soutenu par une académie de sports de haut niveau. Nous ne nous contentons pas d'enseigner des matières ; nous inculquons des valeurs et des compétences de vie.
              </p>
              <div className="pt-6 flex items-center gap-6">
                <div className="text-center">
                  <p className="text-4xl font-titles font-bold text-csbie-gold">20+</p>
                  <p className="text-xs font-ui uppercase tracking-widest text-csbie-text/50">Années d'Expérience</p>
                </div>
                <div className="w-[1px] h-12 bg-zinc-200" />
                <div className="text-center">
                  <p className="text-4xl font-titles font-bold text-csbie-gold">100%</p>
                  <p className="text-xs font-ui uppercase tracking-widest text-csbie-text/50">Taux de Réussite</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative bg-zinc-50 p-8 md:p-12 rounded-[3rem] border border-zinc-100"
            >
              <div className="absolute top-0 right-0 p-12 bg-csbie-gold/5 rounded-full blur-3xl -z-10" />
              <h3 className="font-titles text-2xl font-bold text-csbie-primary mb-6">Mot de la Direction</h3>
              <p className="font-body text-csbie-text/80 italic leading-relaxed mb-8">
                "Nous croyons que l'éducation est le passeport pour le futur, et le futur appartient à ceux qui s'y préparent dès aujourd'hui. Au CSBIE, nous offrons à vos enfants les outils nécessaires pour naviguer avec succès dans un monde complexe et compétitif."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-csbie-primary rounded-full" />
                <div>
                  <h4 className="font-titles font-bold text-csbie-primary">M. Armand Njock</h4>
                  <p className="text-csbie-gold font-ui text-xs font-bold uppercase tracking-widest">Fondateur & Directeur Général</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Valeurs */}
      <section className="py-24 bg-csbie-primary text-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-white/20">
                  <v.icon size={36} className="text-csbie-gold" />
                </div>
                <h3 className="font-titles text-3xl font-bold mb-4">{v.title}</h3>
                <p className="text-white/70 font-body leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pédagogie */}
      <section className="py-24">
        <div className="section-container">
          <SectionTitle 
            title="Notre Approche Pédagogique" 
            subtitle="Une méthode centrée sur l'élève et son épanouissement global."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              { icon: BookOpen, title: 'Apprentissage Actif', text: 'Les élèves sont acteurs de leur savoir à travers des projets et des recherches.' },
              { icon: Sparkles, title: 'Inspiration & Créativité', text: 'Nous favorisons l\'expression artistique et l\'innovation sous toutes ses formes.' },
              { icon: HeartPulse, title: 'Bien-être & Épanouissement', text: 'Un suivi psychopédagogique personnalisé pour chaque apprenant.' },
            ].map((item, i) => (
              <div key={item.title} className="p-10 bg-zinc-50 rounded-[2rem] border border-zinc-100 group hover:bg-white hover:shadow-xl transition-all h-full">
                <item.icon size={40} className="text-csbie-gold mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="font-titles text-2xl font-bold text-csbie-primary mb-4">{item.title}</h4>
                <p className="font-body text-csbie-text/70 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
