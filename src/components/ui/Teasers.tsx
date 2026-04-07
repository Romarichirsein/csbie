'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Trophy, Globe, GraduationCap } from 'lucide-react';
import SectionTitle from './SectionTitle';

import { fadeInUp, sectionReveal, staggerContainer, scaleIn } from '@/lib/animations';

export function CambridgeTeaser() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-zinc-50 group">
              <Image
                src="/hero-bg.png"
                alt="Cambridge Program"
                width={600}
                height={700}
                className="object-cover h-[550px] group-hover:scale-110 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-csbie-primary/10 group-hover:bg-transparent transition-colors duration-700" />
            </div>
            
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-csbie-gold/20 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute -bottom-12 -right-12 w-72 h-72 bg-csbie-primary/10 rounded-full blur-[100px] -z-10" />
            
            <motion.div 
              variants={scaleIn}
              className="absolute bottom-12 -right-8 bg-white p-8 rounded-3xl shadow-2xl z-20 max-w-[260px] border border-zinc-100"
            >
              <div className="w-12 h-12 bg-csbie-gold/10 rounded-xl flex items-center justify-center mb-4">
                <Globe className="text-csbie-gold" size={24} />
              </div>
              <p className="font-titles font-bold text-csbie-primary text-xl leading-tight">Passport International</p>
              <p className="text-csbie-text/60 text-xs font-ui mt-2 leading-relaxed">Reconnu par les meilleures universités mondiales pour l'excellence bilingue.</p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <SectionTitle 
                title="Programme International Cambridge" 
                subtitle="Ouvrez les portes des universités les plus prestigieuses au monde grâce à un cursus bilingue certifié."
                align="left"
              />
            </motion.div>
            
            <div className="space-y-8 mt-10">
              {[
                { title: 'Certification Globale', text: 'Préparez les examens IGCSE, AS & A Level reconnus mondialement.' },
                { title: 'Immersion Bilingue', text: 'Un enseignement structuré en français et en anglais dès le premier jour.' },
                { title: 'Pensée Critique', text: 'Une pédagogie centrée sur l\'analyse, la recherche et l\'autonomie.' },
              ].map((item, i) => (
                <motion.div 
                  key={item.title}
                  variants={fadeInUp}
                  className="flex gap-6 group"
                >
                  <div className="mt-1 bg-csbie-gold/10 p-3 rounded-2xl h-fit group-hover:bg-csbie-gold group-hover:text-white transition-colors duration-300">
                    <CheckCircle2 size={24} className="text-csbie-gold group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-titles font-bold text-csbie-primary text-2xl mb-2 group-hover:text-csbie-gold transition-colors duration-300">{item.title}</h4>
                    <p className="font-body text-csbie-text/70 leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              className="mt-12"
            >
              <Link
                href="/cambridge"
                className="inline-flex items-center gap-3 text-csbie-gold font-ui font-bold hover:gap-5 transition-all group"
              >
                <span className="relative">
                  Tout savoir sur le programme Cambridge
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-csbie-gold group-hover:w-full transition-all duration-300" />
                </span>
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function SportsTeaser() {
  return (
    <section className="py-32 bg-csbie-primary text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <SectionTitle 
                title="L'Académie de Sports CSBIE" 
                subtitle="Le sport comme vecteur d'excellence, de discipline et de santé. Nous formons le corps et l'esprit."
                align="left"
                gold
              />
            </motion.div>
            
            <motion.p variants={fadeInUp} className="text-white/80 font-body text-lg mb-10 leading-relaxed">
              Plus qu'une simple activité physique, le sport au CSBIE est une véritable école de la vie. Basketball, Football, Natation et Tennis sont intégrés à l'emploi du temps de nos élèves de façon rigoureuse.
            </motion.p>

            <div className="grid grid-cols-2 gap-8 mb-12">
              <motion.div variants={fadeInUp} className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md hover:bg-white/10 transition-colors group">
                <Trophy size={40} className="text-csbie-gold mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-titles font-bold text-xl mb-2">Compétitions</h4>
                <p className="text-white/60 text-sm font-ui leading-relaxed">Participation active aux tournois nationaux et internationaux de haut niveau.</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md hover:bg-white/10 transition-colors group">
                <GraduationCap size={40} className="text-csbie-gold mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-titles font-bold text-xl mb-2">Encadrement</h4>
                <p className="text-white/60 text-sm font-ui leading-relaxed">Coachs professionnels certifiés pour un suivi technique individualisé.</p>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp}>
              <Link
                href="/academie-sports"
                className="inline-flex items-center gap-4 bg-white text-csbie-primary px-10 py-5 rounded-2xl font-ui font-bold hover:bg-csbie-gold hover:text-white transition-all shadow-2xl group active:scale-95"
              >
                Découvrir l'Académie
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center"
          >
             <div className="relative group">
                <div className="w-[320px] h-[450px] md:w-[450px] md:h-[600px] rounded-[4rem] overflow-hidden border-[12px] border-white/10 shadow-2xl relative">
                  <Image
                    src="/sports-hero.png"
                    alt="Sports Academy"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-csbie-secondary/20 group-hover:bg-transparent transition-colors duration-700" />
                </div>
                {/* Accent badge */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute -top-8 -right-8 bg-csbie-gold p-10 rounded-full shadow-2xl flex flex-col items-center justify-center border-8 border-csbie-primary z-20 cursor-default"
                >
                  <span className="text-4xl font-titles font-bold text-white">#1</span>
                  <span className="text-[10px] font-ui font-bold uppercase tracking-widest text-white/90">Sports school</span>
                </motion.div>
                
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-csbie-gold/20 rounded-full blur-3xl -z-10 group-hover:scale-150 transition-transform duration-1000" />
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
