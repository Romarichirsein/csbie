'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';
import { Music, FlaskConical, Newspaper, Leaf, Cpu, Paintbrush, Languages, Theater } from 'lucide-react';

const activities = [
  { icon: Music, title: 'Musique & Chorale', text: 'Apprentissage d\'instruments (piano, guitare) et chant pour développer la sensibilité artistique.' },
  { icon: FlaskConical, title: 'Club Sciences', text: 'Expériences passionnantes et découverte des phénomènes naturels en laboratoire.' },
  { icon: Cpu, title: 'Robotique & Coding', text: 'Initiation à la programmation et construction de robots pour les futurs ingénieurs.' },
  { icon: Newspaper, title: 'Journalisme', text: 'Rédaction du journal de l\'école "L\'Écho de l\'Espérance" et techniques d\'interview.' },
  { icon: Paintbrush, title: 'Arts Plastiques', text: 'Peinture, sculpture et dessin pour libérer la créativité de nos jeunes artistes.' },
  { icon: Theater, title: 'Théâtre & Éloquence', text: 'Prise de parole en public, confiance en soi et expression corporelle.' },
  { icon: Languages, title: 'Clubs de Langues', text: 'Immersion ludique en Allemand, Espagnol et Mandarin pour une ouverture globale.' },
  { icon: Leaf, title: 'Environnement', text: 'Jardinage scolaire et sensibilisation au développement durable et à l\'écologie.' },
];

export default function ActivitiesPage() {
  return (
    <div className="pb-24">
      {/* Hero Activities */}
      <section className="bg-csbie-secondary py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10" />
        <div className="section-container relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-titles font-bold mb-6"
          >
            Activités Périscolaires
          </motion.h1>
          <p className="text-xl text-white/70 font-body max-w-2xl mx-auto">
            L'épanouissement au-delà des salles de classe. Nos clubs et ateliers pour cultiver les talents de chaque enfant.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-titles text-3xl font-bold text-csbie-primary mb-6">Le Mercredi, Journée des Talents</h2>
            <p className="font-body text-csbie-text/70 text-lg leading-relaxed">
              Au CSBIE, nous considérons que les activités extrascolaires sont essentielles à l'équilibre et à l'orientation de nos élèves. Chaque mercredi après-midi, le campus se transforme en un laboratoire géant de créativité et de découverte.
            </p>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20 bg-zinc-50">
        <div className="section-container">
          <SectionTitle 
            title="Nos Clubs & Ateliers" 
            subtitle="Une large palette d'activités pour répondre à toutes les passions."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {activities.map((activity, i) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-zinc-100 flex flex-col group"
              >
                <div className="w-14 h-14 bg-csbie-gold/10 rounded-2xl flex items-center justify-center text-csbie-gold mb-6 group-hover:bg-csbie-gold group-hover:text-white transition-all">
                  <activity.icon size={28} />
                </div>
                <h3 className="font-titles font-bold text-xl text-csbie-primary mb-3">
                  {activity.title}
                </h3>
                <p className="font-body text-csbie-text/60 text-sm leading-relaxed">
                  {activity.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie Placeholder */}
      <section className="py-24">
        <div className="section-container">
          <SectionTitle 
            title="L'Esprit CSBIE en Images" 
            subtitle="Des moments de joie, de découverte et de partage capturés sur le vif."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="aspect-square bg-zinc-200 rounded-2xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-csbie-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-ui font-bold text-sm">Voir l'image</span>
                </div>
                {/* Image placeholder */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
