'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { ArrowRight, Trophy, Users, Heart, Shield, Star, Zap } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import { fadeInUp, staggerContainer, sectionReveal, scaleIn } from '@/lib/animations';

const sportValues = [
  { icon: Shield, title: 'Discipline', text: 'Le sport enseigne le respect des règles et de soi-même.' },
  { icon: Heart, title: 'Santé', text: 'Un corps sain est le moteur d\'un esprit vif et performant.' },
  { icon: Users, title: 'Esprit d\'Équipe', text: 'Apprendre à collaborer pour atteindre un but commun.' },
  { icon: Zap, title: 'Dépassement', text: 'Repousser ses limites pour atteindre l\'excellence.' },
  { icon: Star, title: 'Dignité', text: 'Savoir gagner avec humilité et perdre avec élégance.' },
  { icon: Trophy, title: 'Leadership', text: 'Formation des capitaines de terrain et des leaders de demain.' },
];

const sportCategories = [
  {
    name: 'Football',
    image: '/sports-hero.png',
    description: 'De l\'initiation au perfectionnement tactique sous l\'égide de coachs certifiés.',
  },
  {
    name: 'Basketball',
    image: '/sports-hero.png',
    description: 'Développement de l\'adresse, de la vision de jeu et de l\'esprit de compétition.',
  },
  {
    name: 'Natation',
    image: '/sports-hero.png',
    description: 'Une infrastructure de pointe pour des cours sécurisés et une maîtrise technique.',
  },
];

export default function SportsAcademyPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div className="pb-32 bg-white">
      {/* Hero Section */}
      <section ref={containerRef} className="relative h-[80vh] flex items-center overflow-hidden bg-csbie-primary">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <Image
            src="/sports-hero.png"
            alt="Académie de Sports CSBIE"
            fill
            className="object-cover scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-csbie-primary via-csbie-primary/60 to-transparent" />
        </motion.div>

        <div className="section-container relative z-10 text-white">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.span 
              variants={fadeInUp}
              className="inline-block px-5 py-2 bg-csbie-gold text-white font-ui font-bold uppercase tracking-widest text-xs mb-8 rounded-full shadow-lg"
            >
              Filière Sports & Études d'Élite
            </motion.span>
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-8xl font-titles font-bold mb-8 text-white leading-[1.1]"
            >
              L'Académie <span className="text-csbie-gold">de Sports</span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-white/80 font-body leading-relaxed max-w-2xl mb-12"
            >
              Plus qu'un club sportif, une véritable école de la vie intégrée à notre cursus académique d'excellence pour former les champions de demain. 
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-csbie-gold/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
        
        <div className="section-container relative z-10">
          <SectionTitle 
            title="Nos Valeurs Fondatrices" 
            subtitle="Le sport au CSBIE est fondé sur des principes rigoureux qui forgent le caractère et le leadership."
          />
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20"
          >
            {sportValues.map((value) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white border border-zinc-100 p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col gap-6 group"
              >
                <div className="bg-csbie-gold/10 w-16 h-16 rounded-2xl flex items-center justify-center text-csbie-gold group-hover:bg-csbie-gold group-hover:text-white transition-all duration-500 group-hover:rotate-6 shadow-lg">
                  <value.icon size={30} />
                </div>
                <div>
                  <h3 className="font-titles font-bold text-csbie-primary text-2xl mb-3 group-hover:text-csbie-gold transition-colors duration-300">{value.title}</h3>
                  <p className="font-body text-csbie-text/70 leading-relaxed">{value.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Disciplines */}
      <section className="py-32 bg-zinc-50 relative overflow-hidden">
        <div className="section-container relative z-10">
          <SectionTitle 
            title="Nos Disciplines Phares" 
            subtitle="Explorez les différents univers sportifs que nous proposons, encadrés par des professionnels certifiés."
          />
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-20"
          >
            {sportCategories.map((sport) => (
              <motion.div
                key={sport.name}
                variants={sectionReveal}
                className="group bg-white rounded-[3rem] overflow-hidden shadow-xl border border-zinc-100 flex flex-col h-full"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={sport.image}
                    alt={sport.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-csbie-primary/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                  <div className="absolute bottom-8 left-8 flex items-baseline gap-3">
                    <h3 className="text-white font-titles font-bold text-4xl">{sport.name}</h3>
                    <div className="w-2 h-2 bg-csbie-gold rounded-full" />
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <p className="font-body text-csbie-text/70 mb-10 leading-relaxed text-lg">
                    {sport.description}
                  </p>
                  <div className="mt-auto">
                    <Link
                      href={`/academie-sports/${sport.name.toLowerCase()}`}
                      className="inline-flex items-center gap-3 bg-zinc-50 text-csbie-primary px-8 py-4 rounded-xl font-ui font-bold hover:bg-csbie-gold hover:text-white transition-all shadow-sm group/btn"
                    >
                      Voir le programme <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Admission */}
      <section className="py-32 relative overflow-hidden">
        <div className="section-container">
          <motion.div 
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-csbie-secondary rounded-[4rem] p-16 lg:p-32 text-center text-white relative overflow-hidden shadow-3xl"
          >
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -top-32 -right-32 w-96 h-96 bg-white rounded-full blur-[120px]" 
            />
            <div className="absolute bottom-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
            
            <div className="relative z-10">
              <motion.div variants={fadeInUp}>
                <h2 className="text-5xl md:text-7xl font-titles font-bold mb-8 text-white leading-tight">Prêt à rejoindre <span className="text-csbie-gold italic">l'élite</span> ?</h2>
                <p className="text-xl md:text-2xl text-white/70 font-body mb-12 max-w-3xl mx-auto leading-relaxed">
                  Inscriptions ouvertes pour la saison 2024-2025. Rejoignez une académie de prestige où le succès sportif nourrit l'excellence académique.
                </p>
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <Link
                  href="/admission"
                  className="inline-flex py-6 px-12 bg-csbie-gold hover:bg-white hover:text-csbie-primary text-white font-ui font-bold rounded-2xl transition-all shadow-3xl transform hover:scale-105 active:scale-95 text-lg"
                >
                  Télécharger le dossier d'inscription
                </Link>
              </motion.div>
              
              <motion.p variants={fadeInUp} className="mt-10 text-white/40 font-ui text-sm uppercase tracking-widest font-bold">
                Contactez notre service des admissions au (+237) 6xx-xxx-xxx
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
