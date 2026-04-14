'use client';

import SectionTitle from '@/components/ui/SectionTitle';
import StaffCard from '@/components/ui/StaffCard';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations';

const staffMembers = [
  {
    nom: 'M. Armand Njock',
    poste: 'Directeur Fondateur',
    photoUrl: '/staff/director.png',
    bio: 'Visionnaire chevronné, passionné par l\'éducation bilingue et le développement de la jeunesse camerounaise.',
  },
  {
    nom: 'Mrs. Sarah Smith',
    poste: 'Directrice Administrative',
    photoUrl: '/staff/teacher1.png',
    bio: 'Experte en gestion scolaire internationale avec plus de 15 ans d\'expérience dans les programmes Cambridge.',
  },
  {
    nom: 'M. Philippe Engo',
    poste: 'Préfet des Études',
    photoUrl: '/staff/teacher2.png',
    bio: 'Garant de l\'excellence académique et de la discipline, il supervise les programmes nationaux avec rigueur.',
  },
  // Add more staff members as needed
];

export default function StaffPage() {
  return (
    <div className="pb-32 bg-white">
      {/* Hero simple pour la page */}
      <section className="bg-csbie-primary text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="section-container relative z-10">
          <motion.h1 
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-7xl font-titles font-bold mb-8 text-white"
          >
            Notre Équipe Pédagogique
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/70 font-body max-w-3xl leading-relaxed"
          >
            Rencontrez les professionnels dévoués qui accompagnent vos enfants vers l'excellence chaque jour au CSBIE.
          </motion.p>
        </div>
      </section>

      {/* Grille du Staff */}
      <section className="py-24 -mt-16 relative z-20">
        <div className="section-container">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            {staffMembers.map((member) => (
              <StaffCard
                key={member.nom}
                nom={member.nom}
                poste={member.poste}
                photoUrl={member.photoUrl}
                bio={member.bio}
              />
            ))}
          </motion.div>

          {/* Placeholder for more staff info */}
          <motion.div 
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-24 p-12 md:p-20 bg-zinc-50 border border-zinc-100 rounded-[4rem] text-center relative overflow-hidden group hover:bg-csbie-gold/5 transition-colors duration-700"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-csbie-gold/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            
            <h3 className="font-titles text-3xl md:text-5xl font-bold text-csbie-primary mb-8 group-hover:text-csbie-gold transition-colors duration-500">Un encadrement d'exception</h3>
            <p className="font-body text-csbie-text/70 max-w-4xl mx-auto text-xl leading-relaxed mb-0">
              Notre équipe est composée d'experts passionnés, bilingues et certifiés, rigoureusement sélectionnés pour incarner les valeurs d'excellence et d'innovation du CSBIE. Ensemble, nous bâtissons l'avenir de chaque élève.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
