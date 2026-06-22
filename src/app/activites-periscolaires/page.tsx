'use client';

import { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
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

// Combine activities and graduation photos in a single data structure
const galleryItems = [
  // Existing Activities photos
  ...Array.from({ length: 19 }).map((_, i) => ({
    id: `activity-${i + 1}`,
    src: `/images/activities/real-activity-${i + 1}.jpeg`,
    category: 'activities',
    categoryLabel: 'Vie Scolaire',
    title: 'Moments de Découverte'
  })),
  // New Graduation photos
  {
    id: 'graduation-1',
    src: '/images/graduation/graduation-group-1.jpg',
    category: 'graduation',
    categoryLabel: 'Graduation 25/26',
    title: 'Remise de diplômes'
  },
  {
    id: 'graduation-2',
    src: '/images/graduation/graduation-group-2.jpg',
    category: 'graduation',
    categoryLabel: 'Graduation 25/26',
    title: 'Promotion 2025/2026'
  },
  {
    id: 'graduation-3',
    src: '/images/graduation/graduation-admin.jpg',
    category: 'graduation',
    categoryLabel: 'Direction & Lauréats',
    title: 'Fierté Académique'
  },
  {
    id: 'graduation-4',
    src: '/images/graduation/graduation-student.jpg',
    category: 'graduation',
    categoryLabel: 'Diplômé à l\'honneur',
    title: 'Succès Individuel'
  }
];

function GalleryContent() {
  const searchParams = useSearchParams();
  const [activeFilter, setActiveFilter] = useState<'all' | 'activities' | 'graduation'>('all');

  useEffect(() => {
    const filterParam = searchParams.get('filter');
    if (filterParam === 'graduation' || filterParam === 'activities') {
      setActiveFilter(filterParam);
      
      // Smooth scroll to the gallery container
      const galleryElement = document.getElementById('galerie');
      if (galleryElement) {
        setTimeout(() => {
          galleryElement.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }
  }, [searchParams]);

  const filteredItems = galleryItems.filter(item => 
    activeFilter === 'all' ? true : item.category === activeFilter
  );

  return (
    <section id="galerie" className="py-24 scroll-mt-24">
      <div className="section-container">
        <SectionTitle 
          title="L'Esprit CSBIE en Images" 
          subtitle="Des moments de joie, de découverte et de partage capturés sur le vif."
        />

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'all', label: 'Tous' },
            { id: 'activities', label: 'Activités & Clubs' },
            { id: 'graduation', label: 'Graduation 2025/2026' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-8 py-3 rounded-full font-ui text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
                activeFilter === tab.id
                  ? 'bg-csbie-primary text-white border-csbie-primary shadow-lg shadow-csbie-primary/20 scale-105'
                  : 'bg-white text-csbie-primary/70 border-zinc-200 hover:border-csbie-primary hover:text-csbie-primary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Animated Photo Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-zinc-100 shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <Image 
                  src={item.src}
                  alt={`${item.categoryLabel} - ${item.title}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-csbie-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <span className="text-csbie-gold font-ui font-black text-[10px] uppercase tracking-[0.2em] mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {item.categoryLabel}
                  </span>
                  <h4 className="text-white font-titles font-bold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {item.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

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

      {/* Galerie d'Images Authentiques wrapped in Suspense for searchParams */}
      <Suspense fallback={
        <div className="py-24 text-center text-zinc-400 font-ui text-sm">
          Chargement de la galerie...
        </div>
      }>
        <GalleryContent />
      </Suspense>
    </div>
  );
}
