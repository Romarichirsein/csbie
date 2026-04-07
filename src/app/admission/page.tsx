'use client';

import { motion } from 'framer-motion';
import { FileText, ClipboardCheck, Calendar, Download, CheckCircle2, Info } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import AccordionItem from '@/components/ui/AccordionItem';
import ContactForm from '@/components/ui/ContactForm';

const admissionSteps = [
  { icon: FileText, title: 'Retrait du dossier', text: 'Téléchargez le formulaire en ligne ou retirez-le au secrétariat de l\'école.' },
  { icon: ClipboardCheck, title: 'Test d\'évaluation', text: 'Passage d\'un test de niveau en Français, Anglais et Mathématiques.' },
  { icon: Calendar, title: 'Entretien', text: 'Rencontre avec la direction pour discuter du projet pédagogique de l\'enfant.' },
  { icon: CheckCircle2, title: 'Inscription', text: 'Validation finale après étude du dossier et paiement des frais d\'inscription.' },
];

const levels = [
  {
    title: 'Maternelle (Nursery & Primary)',
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Actes de naissance (original + copie)</li>
        <li>4 photos d'identité 4x4</li>
        <li>Carnet de vaccination à jour</li>
        <li>Frais de dossier : 15 000 FCFA</li>
      </ul>
    ),
  },
  {
    title: 'Primaire Corresponds (Years 1-6)',
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Bulletins des deux dernières années</li>
        <li>Certificat de scolarité de l'ancienne école</li>
        <li>Test de niveau obligatoire en Français et Mathématiques</li>
      </ul>
    ),
  },
  {
    title: 'Secondaire (Years 7-13 / 6ème - Tle)',
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Bulletins de notes originaux</li>
        <li>Dossier médical complet</li>
        <li>Test d'admission (Français, Anglais, Maths)</li>
        <li>Entretien avec le Préfet des Études</li>
      </ul>
    ),
  },
];

import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations';

export default function AdmissionPage() {
  return (
    <div className="pb-24">
      {/* Hero Admission */}
      <section className="bg-csbie-primary text-white py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="section-container relative z-10">
          <motion.h1 
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-7xl font-titles font-bold mb-8 text-white"
          >
            Admissions & Inscriptions
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/70 font-body max-w-3xl mx-auto leading-relaxed"
          >
            Rejoignez une communauté d'excellence. Découvrez les étapes pour offrir à votre enfant un avenir international au CSBIE.
          </motion.p>
        </div>
      </section>

      {/* Étapes */}
      <section className="py-24">
        <div className="section-container">
          <SectionTitle 
            title="Procédure d'Admission" 
            subtitle="Un parcours simple et transparent pour garantir la meilleure intégration de vos enfants."
          />
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-16"
          >
            {admissionSteps.map((step) => (
              <motion.div
                key={step.title}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="flex flex-col items-center text-center p-8 rounded-[2rem] hover:bg-zinc-50 transition-colors duration-500 group"
              >
                <motion.div 
                  variants={scaleIn}
                  className="w-20 h-20 bg-csbie-gold/10 rounded-[2rem] flex items-center justify-center text-csbie-gold mb-8 group-hover:bg-csbie-gold group-hover:text-white transition-all duration-500 shadow-lg group-hover:rotate-6"
                >
                  <step.icon size={36} />
                </motion.div>
                <h3 className="font-titles font-bold text-2xl text-csbie-primary mb-4">{step.title}</h3>
                <p className="font-body text-csbie-text/70 text-sm leading-relaxed">{step.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Dossiers par niveau */}
      <section className="py-32 bg-zinc-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-csbie-primary/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp}>
                <SectionTitle 
                  title="Dossiers de Candidature" 
                  subtitle="Consultez les documents requis selon le niveau d'enseignement souhaité."
                  align="left"
                />
              </motion.div>
              <motion.div variants={fadeInUp} className="mt-10 space-y-4">
                {levels.map((level, i) => (
                  <AccordionItem 
                    key={level.title}
                    titre={level.title}
                    contenu={level.content}
                    defaultOpen={i === 0}
                  />
                ))}
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                className="mt-12 p-8 bg-csbie-gold/5 border border-csbie-gold/20 rounded-[2.5rem] flex gap-5"
              >
                <div className="w-12 h-12 bg-csbie-gold/20 rounded-full flex items-center justify-center shrink-0">
                  <Info size={24} className="text-csbie-gold" />
                </div>
                <p className="text-csbie-text/70 text-sm font-body leading-relaxed">
                  <strong className="text-csbie-primary">Note importante :</strong> L'admission définitive n'est confirmée qu'après acquittement des droits d'inscription et signature du règlement intérieur par les parents.
                </p>
              </motion.div>
              
              <motion.button 
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-12 flex items-center gap-4 bg-csbie-primary text-white py-5 px-10 rounded-2xl font-ui font-bold shadow-2xl hover:bg-csbie-secondary transition-all group"
              >
                <Download size={24} className="group-hover:translate-y-1 transition-transform" />
                Télécharger la fiche d'inscription (PDF)
              </motion.button>
            </motion.div>

            <motion.div 
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl border border-zinc-100 sticky top-32"
            >
              <h3 className="font-titles text-4xl font-bold text-csbie-primary mb-4">Pré-inscription</h3>
              <p className="font-body text-csbie-text/60 mb-10 text-lg">Remplissez ce formulaire pour être prioritaire lors des prochaines sessions d'admission.</p>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
